# Programación y Plataformas Web (PPW)

## Práctica 1 – Explorando los Estándares Web con HTML, CSS y JavaScript

**Asignatura:** Programación y Plataformas Web  
**Unidad:** 1.2 – Estándares Web  
**Estudiante:** Jose Vanegas  
**Repositorio:** https://github.com/josevac1/icc-ppw-u1-mi_pagina_web
**Página desplegada (GitHub Pages):** https://josevac1.github.io/icc-ppw-u1-mi_pagina_web/

---

### Estructura HTML utilizada


| Componente | Descripción | Implementación |
|-------------|--------------|----------------|
| `<!DOCTYPE html>` | Declaración del documento HTML5 | Línea 1 |
| `<html lang="es">` | Idioma del documento | Español |
| `<header>` | Encabezado principal | Contiene `<h1>`, `<h2>` y párrafos descriptivos |
| `<section>` | Agrupa contenido principal | Cuatro secciones con `<h2>` |
| `<table>` | Muestra los elementos estudiados | Tres filas con `<th>` y `<td>` |
| `<footer>` | Pie de página | Nombre del estudiante, asignatura y botón interactivo |

---

### Nuevas etiquetas exploradas

| Etiqueta | Descripción | Implementación |
|-----------|--------------|----------------|
| `<figure>` | Contenedor para imagen con pie de foto | Imagen del videojuego Zelda con `<figcaption>` |
| `<details>` / `<summary>` | Muestra información adicional al desplegar | Información sobre la práctica con HTML5 |

**Código usado:**
```html
<figure>
  <img src="zelda.png" height="300" width="300">
  <figcaption>The Legend of Zelda — Aventura épica</figcaption>
</figure>

<details>
  <summary>Haz clic para saber más</summary>
  <p>Esta página fue creada como práctica de la asignatura Programación y Plataformas Web.</p>
</details>
```


#  Práctica 2 – Adición de CSS y JavaScript
---

### 1. Archivos agregados

| Archivo     | Descripción                                                                                         | Ubicación                 |
| ----------- | --------------------------------------------------------------------------------------------------- | ------------------------- |
| `style.css` | Contiene todos los estilos visuales del sitio (colores, tipografía, márgenes, botones, tabla, etc.) | Carpeta raíz del proyecto |
| `codigo.js` | Contiene las funciones y eventos JavaScript que agregan comportamiento dinámico                     | Carpeta raíz del proyecto |

Estructura final del proyecto:

```
icc-ppw-u1-mi_pagina_web/
│
├── codigo.js
├── index.html
├── README.md
└── style.css
```