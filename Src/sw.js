const CACHE_NAME = 'cancionero-autocache-v2';

// Solo guardamos lo mínimo imprescindible al instalar la app por primera vez
const PRECACHE_ASSETS = [
  'index.html',
  'manifest.json',
  'icono.png'
];

// Instalar la app con los archivos base
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS))
  );
});

// Interceptar las peticiones (La magia automática ocurre aquí)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    // 1. Intentamos buscar el archivo en internet primero
    fetch(e.request)
      .then((response) => {
        // Si la respuesta es válida, guardamos una copia en la caché automáticamente
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // 2. Si falla internet (modo avión), lo busca en la caché
        return caches.match(e.request);
      })
  );
});