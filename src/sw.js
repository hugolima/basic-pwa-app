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
        ).then(() => self.skipWaiting())
        .catch(err => console.log)
  )
})

self.addEventListener('fetch', function(event) {
  console.log('Fetch')
})

self.addEventListener("activate", event => {
  console.log('Activate');
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
            if (!cacheWhitelist.includes(key)) {
              return caches.delete(key);
            }
        }))
      )
      .then(() => self.clients.claim())
  )
})