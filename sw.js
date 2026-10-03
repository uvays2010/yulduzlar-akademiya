const CACHE='ya-titan-v3';
const ASSETS=['./','./index.html','./css/base.css','./css/layout.css','./css/components.css','./css/pages.css','./css/animations.css','./css/responsive.css','./css/settings.css','./js/app.js','./js/pages.js','./js/store.js','./js/ui.js','./js/extra.js','./data/data.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res}).catch(()=>caches.match('./index.html')))));
