const CACHE_NAME = 'v1'

self.addEventListener('install', event => {
  console.log('Installed');
  event.waitUntil(
     caches.open(CACHE_NAME)
        .then(cache =>
           fetch(`${process.env.PUBLIC_URL}/static/asset-manifest.json`)
              .then(response => response.json())
              .then(assets =>
                 cache.addAll([
                    '/',
                    assets['main.js'],
                 ])
              )
        )
        .then(() => self.skipWaiting())
        .catch(err => console.log)
  )
})

self.addEventListener('fetch', function(event) {
  console.log('Fetch')
  event.respondWith(
    caches.match(event.request)
      .then(response => /* response || */ fetch(event.request))
      .catch(e => console.error('Error on the cache', e))
  )
})

self.addEventListener("activate", event => {
  console.log('Activate');
  const cacheWhitelist = [CACHE_NAME]
  
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
            if (!cacheWhitelist.includes(key)) {
              return caches.delete(key)
            }
        }))
      )
      .then(() => self.clients.claim())
  )
})