# No calculations needed, just creating the markdown text for the updated README file.
readme_content = """# 🎵 Mi Cancionero Offline (PWA) - Guía Actualizada

¡Tu cancionero personal ahora es 100% automático! Hemos mejorado el sistema para que **no tengas que modificar nunca más el archivo `sw.js`** cuando añadas canciones. El sistema descarga y almacena todo de manera dinámica en tu iPhone.

---

## 📂 Estructura Actual del Proyecto

*   **`Src/index.html`**: Tu biblioteca musical. Contiene el buscador interactivo y tu lista alfabética de canciones.
*   **`Src/manifest.json`**: Configuración técnica que permite instalar la web en tu iPhone como una App nativa.
*   **`Src/sw.js`** *(Service Worker Dinámico)*: **El nuevo motor automático.** Implementa la estrategia *Network First* (Red primero). Busca las novedades en GitHub y, en cuanto abres una canción con internet, se guarda una copia exacta en la memoria para el modo avión de forma invisible.
*   **`Src/icono.png`**: La imagen que verás en la pantalla de inicio de tu móvil.
*   **`Src/canciones/`**: La carpeta donde guardas los archivos HTML limpios de tus temas.

---

## ➕ How to Add New Songs Dynamically (Cómo añadir canciones de forma automática)

A partir de ahora, meter repertorio nuevo en tu aplicación es extremadamente sencillo. Solo debes seguir estos **2 pasos**:

### Step 1: Create the HTML song (Crear la canción)
1. Crea un archivo en Notepad++ con la estructura limpia (usando la etiqueta `<pre>` y fuente `Courier New` para que los acordes encajen perfectamente sobre la letra).
2. Guárdalo dentro de `Src/canciones/` con un nombre simple (ej: `wonderwall.html`).

### Step 2: Update the Index (Añadirla a la lista de la biblioteca)
1. Abre `Src/index.html` con Notepad++.
2. Busca la lista (`<ul id="lista">`) y añade tu nueva canción de forma alfabética:
   ```html
   <li class="cancion-item">
       <a href="canciones/wonderwall.html">
           Wonderwall
           <span>Oasis</span>
       </a>
   </li>
