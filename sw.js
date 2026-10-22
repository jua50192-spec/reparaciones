/* Service worker: permite abrir la app sin internet.
   Cuando publiques una versión nueva, cambia el número de VERSION. */
var VERSION = "reparaciones-v21";
var CORE = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "jspdf.umd.min.js"];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(VERSION).then(function (c) {
      return Promise.all(CORE.map(function (u) { return c.add(u).catch(function () {}); }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (ks) {
      return Promise.all(ks.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var r = e.request;
  if (r.method !== "GET") return;
  if (r.mode === "navigate") {
    /* la página: primero internet (para recibir actualizaciones), si no hay, la copia guardada */
    e.respondWith(
      fetch(r).then(function (x) {
        var c = x.clone();
        caches.open(VERSION).then(function (h) { h.put("index.html", c); });
        return x;
      }).catch(function () { return caches.match("index.html"); })
    );
    return;
  }
  /* lo demás (iconos, librería del PDF, fuentes): primero la copia guardada */
  e.respondWith(
    caches.match(r).then(function (m) {
      return m || fetch(r).then(function (x) {
        if (x && (x.status === 200 || x.type === "opaque")) {
          var c = x.clone();
          caches.open(VERSION).then(function (h) { h.put(r, c); });
        }
        return x;
      });
    })
  );
});
