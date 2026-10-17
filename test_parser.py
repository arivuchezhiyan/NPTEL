import fitz
import json
import re
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

def is_red(color_int):
    # PyMuPDF color is integer 0xRRGGBB
    r = (color_int >> 16) & 255
    g = (color_int >> 8) & 255
    b = color_int & 255
    # Red in these PDFs is rgb(255, 0, 0) or close to it
    return r > 180 and g < 60 and b < 60

def parse_pdf(pdf_path, ass_num):
    doc = fitz.open(pdf_path)
    
    # Collect all spans with coordinates, text, and color
    spans = []
    for pno, page in enumerate(doc):
        page_dict = page.get_text("dict")
        for b in page_dict.get("blocks", []):
            if "lines" in b:
                for line in b["lines"]:
                    for s in line["spans"]:
                        text = s["text"]
                        if not text:
                            continue
                        spans.append({
                            "page": pno + 1,
                            "bbox": s["bbox"],
                            "text": text,
                            "red": is_red(s["color"]),
                            "color": s["color"],
                            "font": s["font"],
                            "size": s["size"]
                        })
    
    # Also get raw text by blocks to understand flow
    full_text = ""
    for pno, page in enumerate(doc):
        full_text += f"\n--- PAGE {pno+1} ---\n" + page.get_text()
    
    return spans, full_text

# Let's inspect raw spans for ass1
spans, full_text = parse_pdf('Assignment/ass1.pdf', 1)
print(f"Total spans in ass1: {len(spans)}")
