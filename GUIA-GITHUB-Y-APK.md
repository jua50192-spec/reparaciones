# Guía fácil: subir la app a GitHub y sacar el APK

Hazlo desde una computadora si puedes (es más cómodo). Todo es gratis.

## PARTE 1. Subir a GitHub (y dejar la app en internet)

1. Entra a **github.com** y toca **Sign up** para crear tu cuenta (correo, clave y nombre de usuario). Confirma tu correo.
2. Arriba a la derecha toca el **+** y elige **New repository**.
3. En **Repository name** escribe: `reparaciones`
4. Marca **Public** (hace falta para que sea gratis) y toca **Create repository**.
   - Ojo: lo público es solo el código de la app. Los informes y las fotos NO se suben, se quedan en cada teléfono.
5. En la página que sale toca el enlace **uploading an existing file**.
6. Descomprime el .zip y arrastra **todos los archivos** de la carpeta (index.html, manifest.webmanifest, sw.js y los 3 iconos). No cambies sus nombres.
7. Abajo toca **Commit changes**.
8. Ahora actívala en internet: entra a **Settings** → **Pages** (menú izquierdo).
9. En **Branch** elige `main` y `/ (root)`, y toca **Save**.
10. Espera 1 o 2 minutos y recarga. Arriba aparece tu dirección:
    `https://TU-USUARIO.github.io/reparaciones/`
11. Ábrela en el celular y comprueba que la app funcione.

**Importante:** no cambies esa dirección después. Los informes se guardan según la dirección.

## PARTE 2. Convertirla en APK

1. Entra a **pwabuilder.com**.
2. Pega tu dirección (`https://TU-USUARIO.github.io/reparaciones/`) y toca **Start**.
3. Cuando termine el análisis toca **Package for stores** → **Android**.
4. Elige la opción que genera el archivo **.apk** (no la de Google Play, que cobra una cuota).
5. Escribe el nombre «Control de reparaciones» y deja lo demás como viene. Toca **Generate**.
6. **Guarda la clave de firma (archivo .keystore) y su contraseña.** Sin ella no podrás actualizar la app después.
7. Descarga el .zip, ábrelo y dentro está el **.apk**.
8. Pásalo al celular (WhatsApp, USB o correo), tócalo y permite «instalar de fuentes desconocidas».

## PARTE 3. Pasar tus informes actuales

La app nueva empieza vacía. En la app vieja: **Respaldo → Guardar respaldo**. En la nueva: **Respaldo → Restaurar respaldo** y elige ese archivo.

## PARTE 4. Cuando cambies algo

1. Cambia `index.html` y, en `sw.js`, sube el número de `VERSION` (de `reparaciones-v2` a `reparaciones-v3`).
2. En GitHub abre el archivo, toca el lápiz (o **Add file → Upload files**) y guarda con **Commit changes**.
3. Los teléfonos se actualizan solos al abrir la app con internet.
4. Antes de actualizar, haz siempre **Guardar respaldo**.

## Qué cambia fuera de Claude
- La verificación automática de la cédula no funciona; se acepta cualquier foto.
- El PDF y el respaldo se guardan en la carpeta Descargas del teléfono.
- El PDF necesita internet la primera vez (baja una librería y la guarda).
