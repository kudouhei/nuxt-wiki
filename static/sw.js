importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-wiki",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.769074657478da36c447.js",
    "revision": "c4198c865f814d667826d9b49269b4d0"
  },
  {
    "url": "/_nuxt/common.008f5a5632c38c3bf809.js",
    "revision": "66cae72c0ff2420935526eb98d71cf77"
  },
  {
    "url": "/_nuxt/layouts/default.615b2596120c1411c8e5.js",
    "revision": "2a652a6267f57af7b1e3701adabb179f"
  },
  {
    "url": "/_nuxt/manifest.f437adfb0d51def641b2.js",
    "revision": "5418ea50bb2eaa11ae00b4fe227d1066"
  },
  {
    "url": "/_nuxt/pages/index.be8f98dc041d487ae2d4.js",
    "revision": "ad2e9359fbad05009edf0efc9bf23056"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

