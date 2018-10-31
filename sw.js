importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.9e97b951307a145e0d1a.js",
    "revision": "25d7af2cf0d8879ecf35950c59cb8093"
  },
  {
    "url": "/_nuxt/layouts/default.c79363844c7f1a8a7e21.js",
    "revision": "52a4f96bf231548baae2f8ee4098c174"
  },
  {
    "url": "/_nuxt/manifest.414c9ff0f8978827732d.js",
    "revision": "18752f64c24d082c9eb587f8b8c06641"
  },
  {
    "url": "/_nuxt/pages/index.bdf126a22aa4472a2f21.js",
    "revision": "6159ffe8d9624db254390209dea7f1a7"
  },
  {
    "url": "/_nuxt/vendor.9c883338285eb4b5cd34.js",
    "revision": "1f783f7ea13350492dd42a4a9516ee64"
  }
], {
  "cacheId": "manitou-witches",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





