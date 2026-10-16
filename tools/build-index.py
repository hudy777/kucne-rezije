#!/usr/bin/env python3
"""src/page.html is the single source (it is also published as the Claude artifact).
This wraps it into a full document for the Android app: www/index.html."""
import pathlib
root = pathlib.Path(__file__).resolve().parent.parent
s = (root / "src/page.html").read_text(encoding="utf-8")
s = s.replace('<meta name="claude:viewport-fit-sides" content="cover">\n', "")
i = s.index("</style>") + len("</style>")
head, body = s[:i], s[i:]
j = body.index("<script>")
out = ("<!doctype html>\n<html lang=\"hr\">\n<head>\n<meta charset=\"utf-8\">\n"
       "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1,viewport-fit=cover\">\n"
       "<meta name=\"theme-color\" content=\"#0b3d22\">\n" + head + "\n</head>\n<body>" + body[:j]
       + "<script src=\"config.js\"></script>\n<script src=\"firebase-bundle.js\"></script>\n"
       + body[j:] + "\n</body>\n</html>\n")
(root / "www/index.html").write_text(out, encoding="utf-8")
print("www/index.html written")
