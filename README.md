# Portafolio personal de Ruth Serrano Nina

Portafolio adaptable desarrollado con Angular 22. Los datos del currículum se cargan desde un archivo JSON local; no requiere backend ni base de datos.

## Instalación

Requiere Node.js y npm. Desde la raíz del proyecto:

```bash
npm install
```

## Ejecución local

```bash
npm start
```

Abre la URL que Angular CLI muestra en la terminal (por defecto, `http://localhost:4200/`).

## Compilación

```bash
npm run build
```

Los archivos compilados se generan en `dist/`.

## Currículum

Los datos se cargan desde [`public/data/cv.json`](public/data/cv.json). Edita ese archivo para actualizar el nombre, la presentación, la formación académica, las habilidades, los objetivos de aprendizaje y profesionales, el correo o los proyectos. La forma de los datos está tipada en `src/app/models/curriculum.model.ts`.

## Fotografías

Las fotografías locales están en `public/fotos/`:

- `Foto1.jpg` a `Foto9.jpg`: secuencia principal en el orden original.
- `Foto.jpeg`: foto de perfil.
- `Cochabamba.jpeg`: fondo de portada.
- `Foto10.jpeg` y `Foto11.jpeg` se conservan como archivos originales, pero no se muestran en la galería.

Mantén los nombres, mayúsculas y extensiones de archivo al reemplazar las imágenes.

## Plantilla y créditos

El diseño parte de la plantilla [iPortfolio de BootstrapMade](https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/). Se conservan sus créditos y el enlace a la [licencia de BootstrapMade](https://bootstrapmade.com/license/). Se usan Bootstrap, Bootstrap Icons y el CSS principal de la plantilla, copiados selectivamente a `public/plantilla/`. Las fotografías originales de `public/fotos/` se mantienen como recursos locales.

## Publicación en GitHub Pages

El documento y las solicitudes de datos y recursos usan rutas relativas para admitir una publicación bajo una ruta de proyecto. La compilación está preparada; este proyecto todavía no se ha publicado.
