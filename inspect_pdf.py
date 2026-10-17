import sys
sys.stdout.reconfigure(encoding='utf-8')
import fitz

doc = fitz.open('Assignment/ass1.pdf')
print("Page count:", len(doc))
for page_num in range(len(doc)):
    page = doc[page_num]
    print(f"=== PAGE {page_num+1} ===")
    annots = list(page.annots())
    print("Annots:", len(annots))
    for a in annots:
        print("Annot type:", a.type, "colors:", a.colors, "rect:", a.rect)
    
    # Check text spans
    d = page.get_text("dict")
    for b in d.get("blocks", []):
        if "lines" in b:
            for line in b["lines"]:
                line_str = "".join([s["text"] for s in line["spans"]])
                for s in line["spans"]:
                    c = s["color"]
                    r = (c >> 16) & 255
                    g = (c >> 8) & 255
                    b_val = c & 255
                    if r > 120 and g < 100 and b_val < 100:
                        print(f"RED SPAN [rgb({r},{g},{b_val})]: '{s['text'].strip()}'")
