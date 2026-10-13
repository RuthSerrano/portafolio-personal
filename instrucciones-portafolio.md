# Agente de IA — Portafolio personal de Ruth Serrano Nina

## 1. Rol y objetivo

Actúa como desarrollador experto en Angular, Bootstrap y diseño
web multimedia.

Adapta la plantilla iPortfolio incluida en este proyecto para
crear un portafolio personal con currículum y galería fotográfica.

Antes de modificar archivos, revisa:
- AGENTS.md.
- package.json.
- angular.json.
- La estructura de src.
- iPortfolio/index.html.
- iPortfolio/assets/css/main.css.
- iPortfolio/Readme.txt.

Utiliza la versión de Angular instalada y conserva las
configuraciones existentes que sean necesarias.

## 2. Tecnologías

- Angular con componentes standalone.
- TypeScript, HTML y CSS.
- Bootstrap incluido en la plantilla.
- Archivo JSON para los datos del currículum.
- Recursos fotográficos locales.
- Sin backend ni base de datos.

## 3. Datos confirmados del currículum

Nombre: Ruth Serrano Nina.

Presentación:
Soy Ruth Serrano Nina, estudiante de sexto semestre de Ingeniería
de Sistemas en la Universidad Privada Franz Tamayo (UNIFRANZ).
Tengo facilidad para el diseño y busco fortalecer mi formación
en diseño de interfaces y desarrollo web. Mi objetivo es aplicar
estos conocimientos en proyectos académicos y prepararme para el
ejercicio profesional.

Universidad: Universidad Privada Franz Tamayo (UNIFRANZ).
Carrera: Ingeniería de Sistemas.
Semestre: sexto.
Formación adicional: Educación secundaria concluida.
Habilidad: facilidad para el diseño y la presentación visual.
Objetivos de aprendizaje: profundizar en diseño de interfaces y
desarrollo web; aprender inglés y portugués.
Objetivo profesional:
Mi objetivo es concluir la carrera de Ingeniería de Sistemas
y ampliar mis conocimientos en el área tecnológica. Busco
desarrollar experiencia mediante proyectos académicos y
fortalecer mis habilidades de diseño y desarrollo web para
prepararme para futuras oportunidades laborales.
Correo: serranoninaruth@gmail.com.

Los proyectos todavía no están definidos.

No inventes:
- Experiencia laboral.
- Proyectos realizados.
- Certificaciones.
- Herramientas que domino.
- Porcentajes de habilidad.
- Teléfono, dirección o redes sociales.

## 4. Archivo JSON

Crea public/data/cv.json con esta estructura y estos datos:

{
  "nombre": "Ruth Serrano Nina",
  "presentacion": "Soy Ruth Serrano Nina, estudiante de sexto semestre de Ingeniería de Sistemas en la Universidad Privada Franz Tamayo (UNIFRANZ). Tengo facilidad para el diseño y busco fortalecer mi formación en diseño de interfaces y desarrollo web. Mi objetivo es aplicar estos conocimientos en proyectos académicos y prepararme para el ejercicio profesional.",
  "formacionAcademica": [
    {
      "titulo": "Ingeniería de Sistemas",
      "institucion": "Universidad Privada Franz Tamayo (UNIFRANZ)",
      "detalle": "Sexto semestre, en curso."
    },
    {
      "titulo": "Educación secundaria concluida"
    }
  ],
  "habilidades": ["Facilidad para el diseño y la presentación visual."],
  "objetivosAprendizaje": [
    "Profundizar en diseño de interfaces y desarrollo web.",
    "Aprender inglés y portugués."
  ],
  "objetivoProfesional": "Mi objetivo es concluir la carrera de Ingeniería de Sistemas y ampliar mis conocimientos en el área tecnológica. Busco desarrollar experiencia mediante proyectos académicos y fortalecer mis habilidades de diseño y desarrollo web para prepararme para futuras oportunidades laborales.",
  "correo": "serranoninaruth@gmail.com",
  "proyectos": []
}

Crea un modelo TypeScript para estos datos y un servicio que
cargue el archivo mediante HttpClient.

Configura HttpClient conservando los proveedores existentes.
Utiliza rutas relativas compatibles con GitHub Pages.

Obtén los datos del currículum desde el JSON.
Muestra un estado de carga y un mensaje comprensible si falla.

## 5. Uso de la plantilla iPortfolio

La plantilla original está en la carpeta iPortfolio,
ubicada en la raíz del proyecto.

Utiliza su HTML y CSS como base real del diseño.
Adapta las secciones a componentes Angular.

Conserva:
- Menú lateral en computadoras.
- Menú que pueda abrirse y cerrarse en celulares.
- Portada con fotografía y presentación.
- Estructura visual del currículum.
- Distribución adaptable de la galería.

Personaliza los colores con tonos verdes, fondo claro
y texto con suficiente contraste.

Copia solamente los recursos necesarios de la plantilla
a public/plantilla.

Carga los estilos de Bootstrap, los iconos y el CSS de
la plantilla una sola vez y en el orden correcto.

No copies directamente todos los scripts de la plantilla.
Implementa las interacciones con Angular y utiliza bibliotecas
adicionales solamente cuando sean necesarias.

Conserva los créditos y enlaces de BootstrapMade del pie,
los avisos de autoría y las licencias de los recursos utilizados.

Elimina el contenido de ejemplo:
- Identidad y biografía del personaje original.
- Estadísticas y porcentajes.
- Testimonios.
- Servicios comerciales.
- Proyectos e imágenes de demostración.
- Teléfonos, direcciones y redes sociales de ejemplo.

## 6. Secciones de la página

### Inicio
Muestra el nombre, la presentación breve y una fotografía.
Incluye botones para ir al currículum y a la galería.

Utiliza public/fotos/Cochabamba.jpeg como fondo de portada.
La portada debe cubrir al menos la altura visible de la ventana,
manteniendo el texto y los botones completos y legibles.
En escritorio, reserva a la izquierda el ancho del menú lateral;
en celular, elimina ese margen y conserva el menú desplegable.

Utiliza public/fotos/Foto.jpeg como foto de perfil de Ruth en
el menú lateral, encima de su nombre.

No utilices el retrato de ejemplo de iPortfolio como foto
personal de Ruth.

### Sobre mí
Muestra la presentación desde el JSON. No añadas intereses de
naturaleza o caminatas.

### Currículum
Organiza la información en:
- Formación académica: Ingeniería de Sistemas en UNIFRANZ,
  sexto semestre en curso, y educación secundaria concluida.
- Habilidades: facilidad para el diseño y la presentación visual.
- Objetivos de aprendizaje: diseño de interfaces y desarrollo web;
  aprender inglés y portugués.
No añadas colegio, fechas, certificados ni niveles de idiomas
sin confirmación.

### Objetivos profesionales
Muestra el objetivo profesional especificado en el JSON y añade
su enlace al menú.

### Fotografía
Muestra únicamente las nueve fotografías Foto1.jpg a Foto9.jpg,
en orden. No muestres Foto10.jpeg ni Foto11.jpeg en la página ni
en los datos de la galería; conserva los archivos originales.

### Proyectos
Prepara la sección para utilizar el arreglo proyectos del JSON.
Mientras esté vacío, oculta la sección y su enlace del menú.

### Contacto
Muestra el correo desde el JSON con un enlace mailto.
No incorpores el formulario PHP de la plantilla ni simules
el envío de mensajes.

## 7. Fotografías disponibles

Los archivos están en public/fotos:

- Foto.jpeg (foto de perfil).
- Cochabamba.jpeg (fondo de portada).
- Foto1.jpg
- Foto2.jpg
- Foto3.jpg
- Foto4.jpg
- Foto5.jpg
- Foto6.jpg
- Foto7.jpg
- Foto8.jpg
- Foto9.jpg

Respeta exactamente los nombres, las mayúsculas y las extensiones.
No sustituyas estas fotografías por imágenes externas. Foto.jpeg
y Cochabamba.jpeg son recursos de perfil y portada. Foto10.jpeg
y Foto11.jpeg permanecen en la carpeta, pero no se muestran ni se
incluyen en los datos de la galería.

### Secuencia principal

Las imágenes Foto1.jpg hasta Foto9.jpg muestran un acercamiento
progresivo: desde el paisaje completo con una persona hasta
el detalle de su ojo.

Preséntalas en orden del 1 al 9.
Utiliza títulos neutrales, como “Secuencia 01” hasta “Secuencia 09”.
No inventes lugares, fechas, nombres ni tipos de plano.

### Visualización

- Conserva las proporciones de las fotografías.
- No deformes las imágenes.
- Permite ampliar cada fotografía.
- En la vista ampliada, muestra la fotografía completa.
- Incluye botones para cerrar, avanzar y retroceder.
- Permite cerrar con Escape.
- Permite navegar con las flechas del teclado.
- Mantén el foco dentro de la ventana mientras esté abierta
  y devuélvelo al elemento inicial cuando se cierre.
- Incluye textos alternativos adecuados.
- Carga las imágenes de la galería de forma diferida.
- Si falla una imagen, muestra un aviso local sin generar
  un ciclo de errores.

## 8. Interacciones y accesibilidad

- Los enlaces del menú deben llevar a su sección.
- El menú móvil debe cerrarse al seleccionar una sección.
- Todos los botones deben tener una función.
- Permite utilizar la página con teclado.
- Muestra claramente el foco de los elementos interactivos.
- Utiliza animaciones suaves y respeta la preferencia
  de movimiento reducido del navegador.
- Evita desbordamientos horizontales en celulares.

## 9. Organización

Separa los componentes de navegación, inicio, presentación,
currículum, galería y contacto.

Mantén los modelos y el servicio de datos organizados.
No sobrescribas src/index.html con el documento completo
de la plantilla: integra su contenido en Angular.

Conserva las fotografías originales.
No añadas dependencias duplicadas o innecesarias.

## 10. Verificación y documentación

Al terminar:
- Ejecuta npm run build.
- Corrige los errores de compilación.
- Comprueba que el JSON se carga correctamente.
- Comprueba que aparecen las nueve fotografías de la secuencia.
- Comprueba el menú, la ampliación de imágenes y el contacto.
- Revisa el diseño en computadora y celular, si tienes
  herramientas disponibles.
- Indica claramente cualquier comprobación que no hayas
  podido realizar.

Actualiza README.md con:
- Instalación.
- Ejecución local.
- Compilación.
- Ubicación y edición del currículum JSON.
- Ubicación de las fotografías.
- Procedencia y créditos de la plantilla iPortfolio.

Prepara las rutas de recursos para publicar posteriormente
en GitHub Pages. No publiques todavía.

Resume los archivos modificados y el resultado de las
comprobaciones.