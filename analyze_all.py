import fitz
import glob
import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

pdf_files = sorted(glob.glob('Assignment/ass*.pdf'), key=lambda x: int(''.join(filter(str.isdigit, x))))

for pdf_path in pdf_files:
    doc = fitz.open(pdf_path)
    total_images = 0
    for page in doc:
        total_images += len(page.get_images())
    print(f"{pdf_path}: {len(doc)} pages, {total_images} images")
