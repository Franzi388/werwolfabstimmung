// Network-only: Spielstände und Seiten werden nicht aus einem Offline-Cache geladen.
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{
 if(event.request.method==='GET'&&new URL(event.request.url).origin===self.location.origin){
  event.respondWith(fetch(event.request));
 }
});
