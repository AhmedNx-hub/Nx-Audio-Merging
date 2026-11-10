# NX Audio — نسخة PWA (ملفات مسطحة، بدون مجلدات)

ارفع **كل** الملفات التالية في نفس المكان (جذر الموقع) — بدون إنشاء أي مجلد:
- `index.html` · `manifest.webmanifest` · `sw.js` · `favicon.ico`
- الصور: `icon-96.png` `icon-192.png` `icon-512.png` `maskable-192.png` `maskable-512.png` `apple-touch-icon.png` `favicon-32.png` `favicon-16.png`
- اختياري: `_headers` (لـ Cloudflare Pages / Netlify فقط، ويمكن تجاهله على GitHub Pages) و`README.md`

لازم HTTPS (GitHub Pages / Cloudflare Pages / Netlify توفره تلقائياً).
التحديث: استبدل `index.html` وغيّر رقم `VERSION` في أول `sw.js`.

تطوير: Ahmed Nx
