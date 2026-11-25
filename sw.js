const C='priosis-clock-v3';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['/','/index.html','/manifest.json','/icon-192.png','/icon-512.png','/icon.svg'])));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
e.respondWith(fetch(e.request).then(x=>{const cp=x.clone();caches.open(C).then(c=>c.put(e.request,cp));return x}).catch(()=>caches.match(e.request)))});
