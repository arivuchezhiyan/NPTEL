import fitz
import os

os.makedirs('extracted_images', exist_ok=True)

for ass_num in [5, 6, 7, 8]:
    doc = fitz.open(f'Assignment/ass{ass_num}.pdf')
    for pno, page in enumerate(doc):
        image_list = page.get_images(full=True)
        for img_idx, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            filename = f"extracted_images/ass{ass_num}_p{pno+1}_img{img_idx+1}.{image_ext}"
            with open(filename, "wb") as f:
                f.write(image_bytes)
            print(f"Saved {filename}, rect: {page.get_image_bbox(img)}")
