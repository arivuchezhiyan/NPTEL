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

def extract_tokens(pdf_path):
    doc = fitz.open(pdf_path)
    tokens = []
    for pno, page in enumerate(doc):
        page_dict = page.get_text("dict")
        # Sort blocks top-to-bottom
        blocks = sorted(page_dict.get("blocks", []), key=lambda b: (b["bbox"][1], b["bbox"][0]))
        for b in blocks:
            if "lines" in b:
                for line in b["lines"]:
                    line_text = ""
                    has_red = False
                    spans_info = []
                    for s in line["spans"]:
                        t = s["text"]
                        if not t:
                            continue
                        red = is_red_color(s["color"])
                        if red and t.strip():
                            has_red = True
                        spans_info.append({"text": t, "red": red, "bbox": s["bbox"]})
                        line_text += t
                    
                    cleaned = line_text.strip()
                    if cleaned:
                        tokens.append({
                            "page": pno + 1,
                            "bbox": line["bbox"],
                            "text": cleaned,
                            "has_red": has_red,
                            "spans": spans_info
                        })
    return tokens

print("Tokens extractor ready.")
