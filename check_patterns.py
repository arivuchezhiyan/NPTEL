import fitz
import glob
import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

pdf_files = sorted(glob.glob('Assignment/ass*.pdf'), key=lambda x: int(''.join(filter(str.isdigit, x))))

for pdf_path in pdf_files:
    doc = fitz.open(pdf_path)
    print(f"\n====================== {pdf_path} ======================")
    q_count = 0
    num_answers = 0
    all_lines = []
    for pno, page in enumerate(doc):
        blocks = page.get_text("dict")["blocks"]
        for b in blocks:
            if "lines" in b:
                for line in b["lines"]:
                    line_text = ""
                    red_text = ""
                    for s in line["spans"]:
                        t = s["text"]
                        line_text += t
                        c = s["color"]
                        r = (c >> 16) & 255
                        g = (c >> 8) & 255
                        b_val = c & 255
                        if r > 150 and g < 100 and b_val < 100:
                            red_text += t
                    t_str = line_text.strip()
                    if t_str:
                        all_lines.append((pno+1, t_str, red_text.strip()))
    
    # Let's find question starts
    for pno, line, red in all_lines:
        # Match pattern like "1. ", "1.​ "
        m = re.match(r'^(\d+)[\.\s\u200b]+', line)
        if m and int(m.group(1)) <= 30: # question number
            # check if it looks like a question
            # e.g., followed by text
            if len(line) > 5 and not line.startswith("202") and not "Page" in line:
                # print first 50 chars
                # print(f"  Q{m.group(1)}: {line[:60]}...")
                pass
        if "Answer" in line or "numerical" in line.lower():
            print(f"  Found special answer line: P{pno}: {line} | Red: '{red}'")
        if "select all" in line.lower():
            print(f"  Select all question: P{pno}: {line[:70]}...")

