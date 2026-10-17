import fitz
import json
import re
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

def is_red_color(c):
    r = (c >> 16) & 255
    g = (c >> 8) & 255
    b = c & 255
    return r > 175 and g < 75 and b < 75

# Clean unicode weirdness
def clean_str(s):
    # remove zero-width space, non-breaking space, etc.
    s = s.replace('\u200b', '').replace('\u00a0', ' ').replace('\ufeff', '')
    # normalize spaces
    s = re.sub(r'[ \t]+', ' ', s)
    return s.strip()

def parse_all_assignments():
    os.makedirs('extracted_images', exist_ok=True)
    assignments = []

    for ass_num in range(1, 13):
        pdf_path = f"Assignment/ass{ass_num}.pdf"
        if not os.path.exists(pdf_path):
            print(f"Warning: {pdf_path} not found!")
            continue

        doc = fitz.open(pdf_path)
        
        # 1. Extract images and their page and bbox
        images_info = []
        for pno, page in enumerate(doc):
            img_list = page.get_images(full=True)
            for idx, img in enumerate(img_list):
                xref = img[0]
                base_img = doc.extract_image(xref)
                ext = base_img["ext"]
                img_filename = f"extracted_images/ass{ass_num}_p{pno+1}_img{idx+1}.{ext}"
                with open(img_filename, "wb") as f:
                    f.write(base_img["image"])
                bbox = page.get_image_bbox(img)
                images_info.append({
                    "page": pno + 1,
                    "bbox": bbox,
                    "filename": f"extracted_images/ass{ass_num}_p{pno+1}_img{idx+1}.{ext}"
                })

        # 2. Extract lines with bounding box and red flag
        lines = []
        for pno, page in enumerate(doc):
            page_dict = page.get_text("dict")
            blocks = sorted(page_dict.get("blocks", []), key=lambda b: (b["bbox"][1], b["bbox"][0]))
            for b in blocks:
                if "lines" in b:
                    for line in b["lines"]:
                        line_text = ""
                        has_red = False
                        red_chars = 0
                        total_chars = 0
                        for s in line["spans"]:
                            t = s["text"]
                            if not t:
                                continue
                            line_text += t
                            ct = t.strip()
                            if ct:
                                total_chars += len(ct)
                                if is_red_color(s["color"]):
                                    has_red = True
                                    red_chars += len(ct)
                        cleaned = line_text.strip()
                        if cleaned:
                            # Filter out headers like "Week-1 Solution Sheet:" if at top
                            lines.append({
                                "page": pno + 1,
                                "bbox": line["bbox"],
                                "text": cleaned,
                                "has_red": has_red and (red_chars >= 2 or red_chars == total_chars)
                            })

        # 3. Group lines into questions
        # Question start regex: ^(\d+)[\.\s\u200b]+
        questions = []
        current_q = None
        current_mode = None # 'stem', 'option', 'numerical', 'explanation'
        current_opt_key = None

        expected_q_num = 1

        for line_obj in lines:
            txt = clean_str(line_obj["text"])
            page = line_obj["page"]
            bbox = line_obj["bbox"]
            has_red = line_obj["has_red"]

            # Ignore assignment title header like "Week-1 Solution Sheet:"
            if re.match(r'^Week\s*-\s*\d+', txt, re.I):
                continue

            # Check if this line is the start of a question
            # Question number pattern: e.g. "1.", "1. ", "12."
            q_match = re.match(r'^(\d+)[\.\s\u200b]+(.*)', txt)
            if q_match and int(q_match.group(1)) == expected_q_num:
                # Save previous question
                if current_q:
                    questions.append(current_q)
                
                q_num = int(q_match.group(1))
                expected_q_num = q_num + 1
                rest_of_stem = q_match.group(2).strip()

                current_q = {
                    "question_num": q_num,
                    "stem": [rest_of_stem] if rest_of_stem else [],
                    "options": [],
                    "correct": [],
                    "type": "single",
                    "numerical_answer": None,
                    "explanation": [],
                    "page_start": page,
                    "page_end": page,
                    "bbox_start": bbox,
                    "bbox_end": bbox,
                    "image": None,
                    "explanation_image": None
                }
                current_mode = "stem"
                current_opt_key = None
                continue

            if current_q is None:
                # Text before question 1 (e.g. title or notes)
                continue

            current_q["page_end"] = page
            current_q["bbox_end"] = bbox

            # Check for Explanation
            exp_match = re.match(r'^Explanation\s*:\s*(.*)', txt, re.I)
            if exp_match:
                current_mode = "explanation"
                exp_text = exp_match.group(1).strip()
                if exp_text:
                    current_q["explanation"].append(exp_text)
                continue

            # Check for Numerical Answer
            num_match = re.match(r'^Answer\s*\(\s*numerical\s*\)\s*:\s*(.*)', txt, re.I)
            if num_match:
                current_mode = "numerical"
                current_q["type"] = "numerical"
                ans_val = num_match.group(1).strip()
                current_q["numerical_answer"] = ans_val
                # Numerical answers are often also highlighted red
                continue

            # Check for Option start: a. or a)
            opt_match = re.match(r'^([a-e])[\.\)]\s*(.*)', txt)
            if opt_match and current_mode in ("stem", "option"):
                current_mode = "option"
                opt_key = opt_match.group(1).lower()
                current_opt_key = opt_key
                opt_text = opt_match.group(2).strip()
                current_q["options"].append({
                    "key": opt_key,
                    "text": opt_text,
                    "is_red": has_red
                })
                if has_red:
                    current_q["correct"].append(opt_key)
                continue

            # Continuation of existing mode
            if current_mode == "stem":
                current_q["stem"].append(txt)
            elif current_mode == "option":
                # Find current option and append text
                if current_q["options"]:
                    current_q["options"][-1]["text"] += (" " + txt if current_q["options"][-1]["text"] else txt)
                    if has_red:
                        current_q["options"][-1]["is_red"] = True
                        if current_opt_key and current_opt_key not in current_q["correct"]:
                            current_q["correct"].append(current_opt_key)
            elif current_mode == "explanation":
                current_q["explanation"].append(txt)
            elif current_mode == "numerical":
                if not current_q["numerical_answer"]:
                    current_q["numerical_answer"] = txt

        if current_q:
            questions.append(current_q)

        # Post-process questions in this assignment
        for q in questions:
            # Flatten stem and explanation
            q["stem_text"] = " ".join(q["stem"]).strip()
            q["explanation_text"] = " ".join(q["explanation"]).strip()
            
            # Check for "Select all that apply"
            if "select all that apply" in q["stem_text"].lower():
                q["type"] = "multiple"
            elif len(q["correct"]) > 1:
                q["type"] = "multiple"
            elif q["type"] != "numerical":
                q["type"] = "single"

            # Associate images
            # Check if any image belongs to this question
            for img in images_info:
                # If image is on the same page as this question
                if q["page_start"] <= img["page"] <= q["page_end"]:
                    # If this question has empty options or is numerical or mentions image/equation
                    img_y0 = img["bbox"].y0
                    # Check if before explanation or in explanation
                    if q["explanation_text"] and img_y0 > (q["bbox_start"][1] + 100):
                        q["explanation_image"] = img["filename"]
                    else:
                        q["image"] = img["filename"]

        assignments.append({
            "assignment_num": ass_num,
            "title": f"Assignment {ass_num}",
            "question_count": len(questions),
            "questions": questions
        })

    return assignments

results = parse_all_assignments()
print(f"Parsed {len(results)} assignments.")
for a in results:
    print(f"\nAssignment {a['assignment_num']}: {a['question_count']} questions")
    for q in a["questions"]:
        correct_disp = q["correct"] if q["correct"] else q["numerical_answer"]
        opts_count = len(q["options"])
        has_img = f" [IMG: {q['image']}]" if q['image'] else ""
        has_exp_img = f" [EXP_IMG: {q['explanation_image']}]" if q['explanation_image'] else ""
        warn = " !!! NO ANSWER !!!" if not correct_disp else ""
        print(f"  Q{q['question_num']} ({q['type']}, {opts_count} opts): Correct={correct_disp}{has_img}{has_exp_img}{warn}")
