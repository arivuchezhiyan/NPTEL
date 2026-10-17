import fitz
import sys
sys.stdout.reconfigure(encoding='utf-8')

def inspect_doc(path):
    print(f"================ {path} ================")
    doc = fitz.open(path)
    for pno, page in enumerate(doc):
        print(f"\n--- Page {pno+1} ---")
        blocks = page.get_text("blocks")
        for b in blocks:
            # b: (x0, y0, x1, y1, text, block_no, block_type)
            text = b[4].strip()
            if text:
                first_line = text.split('\n')[0]
                print(f"[{b[5]}] (y0={b[1]:.1f}) {first_line[:80]}...")

inspect_doc('Assignment/ass1.pdf')
inspect_doc('Assignment/ass5.pdf')
