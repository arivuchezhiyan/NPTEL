import sys
sys.stdout.reconfigure(encoding='utf-8')
import fitz

def check_images(ass_num):
    doc = fitz.open(f'Assignment/ass{ass_num}.pdf')
    print(f"=== Images in ass{ass_num} ===")
    for pno, page in enumerate(doc):
        imgs = page.get_images(full=True)
        if imgs:
            for img in imgs:
                bbox = page.get_image_bbox(img)
                print(f"Page {pno+1}: bbox={bbox}")
                for b in page.get_text("blocks"):
                    if abs(b[1] - bbox.y0) < 100 or abs(b[3] - bbox.y1) < 100 or (b[1] <= bbox.y1 and b[3] >= bbox.y0):
                        print(f"   Nearby text [{b[1]:.1f}-{b[3]:.1f}]: {b[4].strip()[:80]}")

for n in [5, 6, 7, 8]:
    check_images(n)
