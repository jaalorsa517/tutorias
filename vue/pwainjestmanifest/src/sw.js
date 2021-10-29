self.__precacheManifest = [].concat(self.__precacheManifest || []);

const { clientsClaim } = workbox.core;
const { registerRoute } = workbox.routing;
const { CacheFirst, StaleWhileRevalidate } = workbox.strategies;
const { CacheableResponse } = workbox.cacheableResponse;
const { CacheExpiration } = workbox.expiration;

clientsClaim();
self.skipWaiting();

registerRoute(
  new RegExp("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/+"),
  new StaleWhileRevalidate({
    cacheName: "pokemon",
    plugins: [new CacheableResponse({ statuses: [200] })],
  })
);

registerRoute(
  new RegExp(".[js||css||json]$"),
  new StaleWhileRevalidate({ cacheName: "statics", plugins: [new CacheableResponse({ statuses: [200] })] })
);

registerRoute(
  new RegExp(".[png||jpg||gif||svg]+"),
  new CacheFirst({
    cacheName: "images",
    plugins: [new CacheExpiration({ maxAgeSeconds: 60 * 60 * 24 * 7 })],
  })
);

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
