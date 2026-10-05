# Chuyển vocab/3000_tu_vung_tieng_anh.xlsx -> vocab/vocab-data.js (dùng cho vocab/vocab.html).
# Chạy lại mỗi khi sửa file Excel:  python tools/build_vocab.py
import json
from pathlib import Path

import openpyxl

VOCAB_DIR = Path(__file__).resolve().parent.parent / "vocab"
SRC = VOCAB_DIR / "3000_tu_vung_tieng_anh.xlsx"
OUT = VOCAB_DIR / "vocab-data.js"


def clean(v):
    return str(v).strip() if v is not None and str(v).strip() else ""


ws = openpyxl.load_workbook(SRC, read_only=True).active
words = []
for row in ws.iter_rows(min_row=2, values_only=True):
    stt, word, ipa, typ, vi, *examples = (list(row) + [None] * 8)[:8]
    if not clean(word):
        continue
    words.append({
        "id": int(stt) if stt else len(words) + 1,
        "w": clean(word),
        "ipa": clean(ipa),
        "type": clean(typ),
        "vi": clean(vi),
        "ex": [clean(e) for e in examples if clean(e)],
    })

body = ",\n".join(json.dumps(w, ensure_ascii=False) for w in words)
OUT.write_text(
    "// File tự sinh từ 3000_tu_vung_tieng_anh.xlsx bằng tools/build_vocab.py — đừng sửa tay.\n"
    f"const VOCAB = [\n{body}\n];\n",
    encoding="utf-8",
)
print(f"Đã ghi {len(words)} từ ({sum(1 for w in words if w['vi'])} từ có nghĩa) -> {OUT.name}")
