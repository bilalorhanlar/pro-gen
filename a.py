import json
import hashlib
from pathlib import Path
from PyPDF2 import PdfReader

# PDF dosya yolu
pdf_path = Path("kodlar_7-9_hane_karisik.pdf")

# PDF oku
reader = PdfReader(str(pdf_path))
hashes = []

for page in reader.pages:
    text = page.extract_text()
    if not text:
        continue

    for line in text.splitlines():
        # Satır formatı: "1. NWN7gwx"
        parts = line.strip().split()
        if len(parts) == 2 and parts[0].endswith("."):
            code = parts[1]
            # SHA256 hash üret
            hash_val = hashlib.sha256(code.encode("utf-8")).hexdigest()
            hashes.append(hash_val)

# JSON çıktısı hazırla
output = {"hashes": hashes}

with open("codes_hash.json", "w", encoding="utf-8") as f:
    json.dump(output, f, ensure_ascii=False, indent=2)

print(f"✅ {len(hashes)} kod hashlenip codes_hash.json dosyasına yazıldı.")
