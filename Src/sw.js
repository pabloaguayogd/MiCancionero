const CACHE_NAME = 'cancionero-v3';
const PRECACHE_ASSETS = [
  'index.html',
  'manifest.json',
  'icono.png'
];

// Forzar la instalación del nuevo Service Worker sin esperar
self.addEventListener('install', (e) => {
  self.skipWaiting(); 
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS))
  );
});

// LIMPIEZA ABSOLUTA: Borra cualquier caché vieja que esté bloqueando a Safari
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Borrando caché antigua bloqueada:', key);
            return caches.delete(key);
          }
        })
      ).then(() => self.clients.claim()); // Toma el control de Safari ya mismo
    })
  );
});

// Estrategia combinada: Ir a internet, y si hay red, machacar la caché con lo nuevo
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});