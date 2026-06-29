const CACHE_NAME = 'cancionero-v1';
// Lista de archivos que quieres que se guarden para usar sin internet
const ASSETS = [
  'index.html',
  'manifest.json',
  'icono.png',
  'canciones/rayando-el-sol.html',
  'canciones/tu-calorro.html',
  'canciones/nana-triste.html',
  'canciones/fuentes-de-ortiz.html'
];

// Instalar el Service Worker y guardar los archivos en caché
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activar y limpiar cachés antiguas
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Responder desde la caché cuando no haya internet
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});