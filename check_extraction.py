import fitz
import json
import re
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

def is_red(color_int):
    r = (color_int >> 16) & 255
    g = (color_int >> 8) & 255
    b = color_int & 255
    return r > 180 and g < 70 and b < 70

def extract_assignment_data(pdf_path, ass_num):
    doc = fitz.open(pdf_path)
    
    # Extract line-by-line items with red highlights
    lines = []
    for pno, page in enumerate(doc):
        page_dict = page.get_text("dict")
        # Blocks in reading order
        blocks = sorted(page_dict.get("blocks", []), key=lambda b: (b["bbox"][1], b["bbox"][0]))
        for b in blocks:
            if "lines" in b:
                for line in b["lines"]:
                    line_text = ""
                    red_count = 0
                    total_chars = 0
                    spans_text = []
                    for s in line["spans"]:
                        t = s["text"]
                        line_text += t
                        clean_t = t.strip()
                        if clean_t:
                            total_chars += len(clean_t)
                            if is_red(s["color"]):
                                red_count += len(clean_t)
                    cleaned = line_text.strip()
                    if cleaned:
                        lines.append({
                            "page": pno + 1,
                            "bbox": line["bbox"],
                            "text": cleaned,
                            "is_red": (red_count > 0 and (red_count / max(1, total_chars)) > 0.3) or (red_count >= 2)
                        })
    return lines

# Let's inspect extracted lines for ass1
lines1 = extract_assignment_data('Assignment/ass1.pdf', 1)
print(f"Total lines in ass1: {len(lines1)}")
for l in lines1[35:80]:
    red_marker = " [CORRECT/RED]" if l['is_red'] else ""
    print(f"P{l['page']} | {l['text']}{red_marker}")
