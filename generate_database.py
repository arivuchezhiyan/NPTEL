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

def clean_str(s):
    if not s:
        return ""
    s = s.replace('\u200b', '').replace('\u00a0', ' ').replace('\ufeff', '')
    s = re.sub(r'[ \t]+', ' ', s)
    return s.strip()

def generate_database():
    os.makedirs('extracted_images', exist_ok=True)
    all_assignments = []

    for ass_num in range(1, 13):
        pdf_path = f"Assignment/ass{ass_num}.pdf"
        doc = fitz.open(pdf_path)

        # Extract images
        for pno, page in enumerate(doc):
            img_list = page.get_images(full=True)
            for idx, img in enumerate(img_list):
                xref = img[0]
                base_img = doc.extract_image(xref)
                ext = base_img["ext"]
                img_path = f"extracted_images/ass{ass_num}_p{pno+1}_img{idx+1}.{ext}"
                with open(img_path, "wb") as f:
                    f.write(base_img["image"])

        # Extract lines
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
                            lines.append({
                                "page": pno + 1,
                                "bbox": line["bbox"],
                                "text": cleaned,
                                "has_red": has_red and (red_chars >= 2 or red_chars == total_chars)
                            })

        # Process lines into questions
        questions = []
        current_q = None
        current_mode = None
        current_opt_key = None
        expected_q_num = 1

        for line_obj in lines:
            txt = clean_str(line_obj["text"])
            page = line_obj["page"]
            bbox = line_obj["bbox"]
            has_red = line_obj["has_red"]

            # Ignore header
            if re.match(r'^Week\s*-\s*\d+', txt, re.I):
                continue

            q_match = re.match(r'^(\d+)[\.\s\u200b]+(.*)', txt)
            if q_match and int(q_match.group(1)) == expected_q_num:
                if current_q:
                    questions.append(current_q)
                q_num = int(q_match.group(1))
                expected_q_num = q_num + 1
                rest = q_match.group(2).strip()
                current_q = {
                    "id": f"w{ass_num}_q{q_num}",
                    "assignment": ass_num,
                    "week": f"Week {ass_num}",
                    "question_num": q_num,
                    "stem": [rest] if rest else [],
                    "options": [],
                    "correct": [],
                    "type": "single",
                    "numerical_answer": None,
                    "explanation": [],
                    "image": None,
                    "explanation_image": None
                }
                current_mode = "stem"
                current_opt_key = None
                continue

            if current_q is None:
                continue

            # Check Explanation
            exp_match = re.match(r'^Explanation\s*:\s*(.*)', txt, re.I)
            if exp_match:
                current_mode = "explanation"
                exp_text = exp_match.group(1).strip()
                if exp_text:
                    current_q["explanation"].append(exp_text)
                continue

            # Check Numerical Answer
            num_match = re.match(r'^Answer\s*\(\s*numerical\s*\)\s*:\s*(.*)', txt, re.I)
            if num_match:
                current_mode = "numerical"
                current_q["type"] = "numerical"
                ans_val = num_match.group(1).strip()
                current_q["numerical_answer"] = ans_val
                continue

            # Check Option
            opt_match = re.match(r'^([a-e])[\.\)]\s*(.*)', txt)
            if opt_match and current_mode in ("stem", "option"):
                current_mode = "option"
                opt_key = opt_match.group(1).lower()
                current_opt_key = opt_key
                opt_text = opt_match.group(2).strip()
                current_q["options"].append({
                    "key": opt_key,
                    "text": opt_text
                })
                if has_red:
                    current_q["correct"].append(opt_key)
                continue

            # Continuations
            if current_mode == "stem":
                current_q["stem"].append(txt)
            elif current_mode == "option":
                if current_q["options"]:
                    current_q["options"][-1]["text"] += (" " + txt if current_q["options"][-1]["text"] else txt)
                    if has_red and current_opt_key and current_opt_key not in current_q["correct"]:
                        current_q["correct"].append(current_opt_key)
            elif current_mode == "explanation":
                current_q["explanation"].append(txt)
            elif current_mode == "numerical":
                if not current_q["numerical_answer"]:
                    current_q["numerical_answer"] = txt

        if current_q:
            questions.append(current_q)

        # Post process
        for q in questions:
            q["question"] = " ".join(q["stem"]).strip()
            del q["stem"]
            q["explanation"] = " ".join(q["explanation"]).strip()
            
            # Clean option texts
            for opt in q["options"]:
                opt["text"] = clean_str(opt["text"])

            # Detect multiple choice
            if "select all that apply" in q["question"].lower() or len(q["correct"]) > 1:
                q["type"] = "multiple"
            elif q["type"] != "numerical":
                q["type"] = "single"

            # Assign specific known images
            if ass_num == 5 and q["question_num"] == 9:
                q["explanation_image"] = "extracted_images/ass5_p3_img1.png"
            elif ass_num == 6 and q["question_num"] == 6:
                q["explanation_image"] = "extracted_images/ass6_p2_img1.png"
            elif ass_num == 7 and q["question_num"] == 5:
                q["explanation_image"] = "extracted_images/ass7_p2_img1.png"
            elif ass_num == 8 and q["question_num"] == 8:
                q["image"] = "extracted_images/ass8_p2_img1.png"

        all_assignments.append({
            "assignment": ass_num,
            "title": f"Assignment {ass_num} (Week {ass_num})",
            "count": len(questions),
            "questions": questions
        })

    with open('quiz_data.json', 'w', encoding='utf-8') as f:
        json.dump(all_assignments, f, ensure_ascii=False, indent=2)
    print("Saved quiz_data.json successfully!")

generate_database()
