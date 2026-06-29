# 🎵 Mi Cancionero Offline (PWA)

¡Bienvenido a tu cancionero personal! Esta es una aplicación web progresiva (PWA) diseñada especialmente para funcionar en el móvil **100% sin conexión a internet**, sin anuncios y con un diseño optimizado para leer acordes mientras tocas.

---

## 📂 Estructura del Proyecto

*   **`Src/index.html`**: La biblioteca principal. Contiene el buscador y la lista alfabética de canciones.
*   **`Src/manifest.json`**: El archivo que le dice a tu iPhone que esto es una App instalable.
*   **`Src/sw.js`** *(Service Worker)*: El cerebro. Se encarga de descargar las canciones en la memoria del móvil para que funcionen sin internet.
*   **`Src/icono.png`**: El icono que se muestra en la pantalla de inicio de tu iPhone.
*   **`Src/canciones/`**: La carpeta mágica donde se guardan los archivos HTML de cada canción.

---

## ➕ How to Add New Songs (Cómo añadir nuevas canciones)

Para añadir una nueva canción a tu biblioteca, solo debes seguir estos **3 pasos**:

### Step 1: Create the song file (Crear el archivo de la canción)
1. Abre un archivo nuevo en Notepad++.
2. Copia la estructura limpia de acordes (etiqueta `<pre>`) y pega la letra y los acordes de la canción.
3. Guarda el archivo dentro de la carpeta `Src/canciones/` con un nombre sencillo, todo en minúsculas y separado por guiones.
   * *Ejemplo:* `Src/canciones/wonderwall.html`

> ⚠️ **Important:** Recuerda que la letra debe ir dentro de las etiquetas `<pre>...</pre>` y con una tipografía monoespaciada en el CSS (como `Courier New`) para que los acordes no se muevan de su sitio.

### Step 2: Add it to the Library (Añadirla a la Biblioteca)
1. Abre `Src/index.html` con Notepad++.
2. Busca la lista (`<ul id="lista">`).
3. Añade la nueva canción ordenándola alfabéticamente dentro de una etiqueta `<li>`.
   * *Ejemplo:*
     ```html
     <li class="cancion-item">
         <a href="canciones/wonderwall.html">
             Wonderwall
             <span>Oasis</span>
         </a>
     </li>
     ```

### Step 3: Register it in the Service Worker (Registrarla para el modo Offline)
Este paso es **vital** para que funcione sin internet en tu iPhone:
1. Abre `Src/sw.js` con Notepad++.
2. Busca la lista de archivos llamada `ASSETS`.
3. Añade la ruta de tu nueva canción al final de la lista, asegurándote de poner una coma `,` en la línea anterior.
   * *Ejemplo:*
     ```javascript
     const ASSETS = [
       'index.html',
       'manifest.json',
       'icono.png',
       'canciones/rayando-el-sol.html',
       'canciones/tu-calorro.html',
       'canciones/wonderwall.html' // <-- Nueva canción añadida
     ];
     ```

---

## 🚀 Actualizar la App en el móvil

Una vez que hayas hecho los cambios en tu ordenador:
1. Sube (*Push*) los archivos actualizados a tu repositorio de **GitHub**.
2. Espera 1 minuto a que GitHub Pages se actualice.
3. Abre la app en tu iPhone **con internet una sola vez**. El Service Worker detectará los cambios, descargará la nueva canción en la memoria y ¡listo! Ya puedes volver a activar el modo avión.
