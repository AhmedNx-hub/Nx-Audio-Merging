// NX Audio — Service Worker (غيّر رقم VERSION عند كل إصدار جديد ليتحدث التطبيق عند المستخدمين)
const VERSION='nx-audio-v1';
const SHELL=['./','index.html','manifest.webmanifest','favicon.ico','icon-192.png','icon-512.png','maskable-512.png','apple-touch-icon.png','favicon-32.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
  if(r.mode==='navigate'){ // الصفحة: الشبكة أولاً (لتصلك التحديثات) ثم النسخة المخزنة بدون إنترنت
    e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(VERSION).then(c=>c.put('index.html',cp))}return res}).catch(()=>caches.match('index.html')));return}
  e.respondWith(caches.match(r).then(h=>h||fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(VERSION).then(c=>c.put(r,cp))}return res})));
});
