import sys
sys.stdout.reconfigure(encoding='utf-8')
import fitz

for ass_num, pno in [(5, 2), (5, 3), (6, 2), (7, 2), (8, 2)]:
    doc = fitz.open(f'Assignment/ass{ass_num}.pdf')
    if pno <= len(doc):
        page = doc[pno-1]
        print(f"=== ass{ass_num} page {pno} text ===")
        print(page.get_text())
