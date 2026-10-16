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
(root / "www/app.html").write_text(out, encoding="utf-8")

# The APK opens this small loader. It fetches the newest app.html from GitHub Pages,
# remembers it for offline use, and falls back to the copy bundled in the APK.
loader = """<!doctype html>
<html lang="hr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#0b3d22">
<title>Kućne režije</title>
<style>html,body{margin:0;height:100%;background:#0b3d22}</style>
</head>
<body>
<script>
(async function(){
  var REMOTE="https://hudy777.github.io/kucne-rezije/app.html", KEY="rezije-page", html=null;
  try{
    var ctl=new AbortController(), t=setTimeout(function(){ctl.abort()},5000);
    var r=await fetch(REMOTE+"?t="+Date.now(),{cache:"no-store",signal:ctl.signal});
    clearTimeout(t);
    if(r.ok){var txt=await r.text(); if(txt.indexOf("Kućne režije")>-1&&txt.indexOf("firebase-bundle.js")>-1){html=txt; try{localStorage.setItem(KEY,txt)}catch(e){}}}
  }catch(e){}
  if(!html){try{html=localStorage.getItem(KEY)}catch(e){}}
  if(!html){try{html=await (await fetch("app.html")).text()}catch(e){}}
  if(!html){location.href="app.html";return}
  document.open();document.write(html);document.close();
})();
</script>
</body>
</html>
"""
(root / "www/index.html").write_text(loader, encoding="utf-8")
print("www/app.html + www/index.html written")
