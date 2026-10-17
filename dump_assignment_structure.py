import fitz
import json
import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

def analyze_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    print(f"=== {pdf_path} ===")
    lines_info = []
    for pno, page in enumerate(doc):
        blocks = page.get_text("dict")["blocks"]
        for b in blocks:
            if "lines" in b:
                for line in b["lines"]:
                    line_text = ""
                    is_red = False
                    for s in line["spans"]:
                        t = s["text"]
                        line_text += t
                        c = s["color"]
                        r = (c >> 16) & 255
                        g = (c >> 8) & 255
                        b_val = c & 255
                        if r > 150 and g < 100 and b_val < 100 and t.strip():
                            is_red = True
                    t_str = line_text.strip()
                    if t_str:
                        lines_info.append({
                            "page": pno + 1,
                            "y0": line["bbox"][1],
                            "y1": line["bbox"][3],
                            "text": t_str,
                            "is_red": is_red
                        })
    return lines_info

# Let's test on ass1.pdf and print first 30 lines
info = analyze_pdf('Assignment/ass1.pdf')
for item in info[:35]:
    status = " [RED]" if item['is_red'] else ""
    print(f"P{item['page']} | {item['text']}{status}")
