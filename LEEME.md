# Control de reparaciones de viviendas — versión independiente

> Para subirla a GitHub y sacar el APK paso a paso, lee **GUIA-GITHUB-Y-APK.md**.

Esta carpeta es la app **fuera de Claude**. Es una página web instalable (PWA) y se puede convertir en APK.

## Qué hay en la carpeta

| Archivo | Para qué sirve |
|---|---|
| `index.html` | **El código fuente completo de la app.** Todo está en este archivo (diseño, lógica, PDF, respaldos). |
| `manifest.webmanifest` | Nombre, colores e iconos de la app instalada. |
| `sw.js` | Permite abrir la app sin internet después de la primera vez. |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` | Iconos (casa con techo de zinc, corazón y mano). |

Opcional: guarda en esta misma carpeta el archivo `jspdf.umd.min.js` (versión 2.5.1, de cdnjs.com) para que el PDF funcione sin internet desde el primer uso. Si no está, la app lo baja de internet y lo guarda.

## Paso 1. Publicar la carpeta en internet (con https)
Hace falta para instalar la app y para generar el APK.
1. Crea una cuenta gratis en un servicio de páginas estáticas: **Netlify**, **GitHub Pages** o **Cloudflare Pages**.
2. Sube **todos los archivos de esta carpeta**, sin cambiarles el nombre. En Netlify se puede arrastrar la carpeta a su opción de «Deploy manually».
3. Te darán una dirección como `https://tu-app.netlify.app`. Ábrela en el celular y revisa que funcione.
4. **No cambies esa dirección después.** Los informes y las fotos se guardan según la dirección.

## Paso 2. Instalarla en Android (sin APK)
En Chrome, abre la dirección, toca los tres puntos y elige **«Instalar app»** o **«Agregar a la pantalla de inicio»**.

## Paso 3. Convertirla en APK
1. Entra a **pwabuilder.com** y escribe la dirección de tu página.
2. Elige la opción para **Android**. Hay una para Google Play y otra para un archivo `.apk` que se instala directo.
3. Te pedirá datos como el nombre y un identificador del paquete (por ejemplo `com.tunombre.reparaciones`). **PWABuilder crea una clave de firma: guarda ese archivo y su contraseña.** Sin ella no podrás publicar actualizaciones de la misma app.
4. Descarga el `.zip` que genera. Dentro viene el `.apk`.
5. Pásalo por WhatsApp o USB. En cada teléfono hay que permitir «instalar apps de fuentes desconocidas».
6. PWABuilder también entrega un archivo `assetlinks.json`. Si lo subes a tu página (en la carpeta `.well-known`), la app abre a pantalla completa, sin la barra de dirección.

Estos pasos son generales, y esas páginas pueden cambiar sus pantallas. No pude generar el APK desde aquí, así que revisa cada paso en pantalla.

## Qué cambia respecto a la versión dentro de Claude
- **La cédula ya no se verifica automáticamente.** Dentro de Claude, la app revisaba que la foto fuera una cédula. Aquí cualquier foto se acepta en los espacios de cédula.
- **Las descargas** (PDF y respaldo) usan la descarga normal de Android. Quedan en la carpeta Descargas.
- **Empieza vacía.** Pasa tus informes con «Guardar respaldo» en la app vieja y «Restaurar respaldo» en la nueva.
- **Sin internet:** abre normal después de la primera vez, siempre que la hayas abierto antes con internet.

## Cómo actualizar la app
1. Cambia `index.html` (o pídele a Claude que lo cambie: súbele el archivo y dile qué quieres).
2. En `sw.js`, cambia el número de `VERSION` (por ejemplo, de `reparaciones-v1` a `reparaciones-v2`).
3. Sube otra vez los archivos a la **misma dirección**. Los teléfonos se actualizan solos al abrir la app con internet.
4. **Antes de cada actualización, haz «Guardar respaldo».**

## Cuidados
- Guarda una copia de cada versión con su fecha (por ejemplo `index-2026-10-20.html`).
- Los informes y las fotos de cédulas viven en cada teléfono. Los archivos de respaldo no tienen clave: envíalos solo a personas de confianza.
- La librería del PDF es de terceros (jsPDF, licencia MIT). Si la descargas, conserva su aviso de licencia.
