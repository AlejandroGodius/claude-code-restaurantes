# Marketing para restaurantes con Claude Code

Aquí construyes sistemas de marketing para el restaurante descrito en `datos/restaurante.json` (de serie trae **Bodega Godius**, una taberna inventada de ejemplo: cámbialo por los datos de tu restaurante).

- `datos/restaurante.json`: nombre, tono, horario, platos, bebidas, plato estrella, email, enlace de reseña de Google y URL de la carta. Léelo antes de empezar. No inventes platos ni precios que no estén ahí.
- `datos/resenas.txt`: reseñas para contestar.
- `fotos/` (opcional): fotos de los platos con el id del plato como nombre, por ejemplo `fotos/croquetas-de-la-abuela.jpg`.
- Hay 2 sistemas: reseñas y carta.

## Cómo trabajar aquí
- No hagas preguntas ni presentes planes: construye directamente. El diseño y las reglas ya están decididos aquí.
- Escribe cada fichero completo de una vez. Orden: primero `datos.js`, luego las páginas.
- Al terminar, abre la página principal del sistema en el navegador.
- Cierra con un resumen corto: qué ficheros, qué hace cada uno y qué abrir.

## Reglas técnicas
- Cada sistema va en su carpeta: `sistema-1-resenas/` y `sistema-2-carta/`. HTML + CSS + JS estático que se abre con doble clic.
- Nada de npm, servidores, claves, APIs externas ni servicios de pago.
- Solo se carga de fuera: Google Fonts y la librería de QR fijada `https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js`.
- Con doble clic (`file://`) el navegador bloquea `fetch()` de ficheros locales. No leas `datos/*.json` ni `datos/*.txt` desde el JS: copia lo que necesites en un `datos.js` dentro de la carpeta del sistema (`window.BODEGA = {...}`).
- Lo que recuerde la página (por ejemplo, el idioma elegido) va en `localStorage`. No se envía nada a ningún sitio.
- QR: genera la imagen a 512 px y escálala con CSS. Deja al menos 16 px de papel claro alrededor del código para que se lea bien.
- Impresión: `@page` con medidas en mm (`size: 148mm 210mm` para A5, `105mm 148mm` para A6). En `@media print` se esconden los botones.
- Cero errores en la consola y nada de scroll horizontal a 375 px.

## Diseño
- Móvil primero (375 px). Páginas del cliente en columna de máx. 640 px; en escritorio (≥ 900 px) la carta pasa a 2 columnas con máx. 1040 px.
- Taberna cálida, como una carta impresa de bar de toda la vida:
  - papel `#F3EADB`, papel oscuro `#E8DAC3`, línea `#D4C2A5`
  - tinta `#2A1E16`, tinta suave `#6B5646`
  - vino `#7B2131` (acción principal), mostaza `#C58B2A` (detalles), pizarra `#22302A` con marco de madera `#5A4433` (destacados con letra de tiza)
- Tipografías de Google Fonts: títulos **Young Serif**, texto **Figtree**, letra de tiza **Caveat** (solo en la pizarra y notas cortas).
- Detalles de casa: filetes dobles como en una carta impresa, precios con puntos guía, un sello redondo «De la casa», textura de papel sutil hecha con CSS.
- Nada de look de plantilla IA: ni degradados morados o azules, ni tarjetas iguales con sombra difusa, ni emojis como iconos, ni frases vacías tipo «¡Una experiencia gastronómica única!».
- Botones de 48 px de alto como mínimo y contraste alto (se usa en terraza, al sol).
- **Fotos:** si existe `fotos/<id-del-plato>.jpg`, cópiala a `sistema-2-carta/fotos/` y úsala en el hueco del plato (4:3, `object-fit: cover`). Si no hay foto, pon un hueco elegante (papel oscuro con rayado sutil) con el nombre del plato y la nota «aquí va la foto real del plato». No generes ni descargues imágenes.
- Todo en español (salvo los otros idiomas de la carta).

## Reglas de negocio y legales
- Reseñas: un único botón directo a Google para todo el mundo. No filtres por estrellas (mandar a Google solo a los contentos va contra las normas de Google). Debajo, el email para quien tuvo un problema.
- Respuestas a reseñas: nunca datos personales ni de salud del cliente (la AEPD multa por eso): nada de alergias, intolerancias, enfermedades ni familiares, aunque la reseña los cuente. Nunca el nombre completo: como mucho el nombre de pila. Tono de la casa, cercano; en las malas, perdón de verdad, sin excusas y con invitación a volver. Contesta en el idioma de la reseña. Junto a cada respuesta delicada, una nota «Ojo» que explique qué se ha evitado.
- Carta: la línea `nota_alergenos` de restaurante.json va siempre visible.
- Los QR apuntan a las URL de restaurante.json.

## Qué lleva cada sistema
- **sistema-1-resenas**: `datos.js` (reseñas y respuestas), `index.html` (página del cliente: un toque y a Google), `cartel.html` (cartel de mesa A5 con QR al enlace de reseña y botón Imprimir) y `respuestas.html` (las respuestas con botón «Copiar»).
- **sistema-2-carta**: `datos.js` (platos y textos en `es`, `en` y `de`), `index.html` y `qr-mesa.html` (tarjeta de mesa A6 con el QR de `url_carta`). `index.html` pinta todo desde `datos.js`, así un cambio de precio es una línea.
  - Plato estrella arriba en grande, con su pizarra y su sello; luego las secciones con foto grande por plato; bebidas sin foto.
  - Idioma: `?lang=` en la URL › el que eligió antes (localStorage) › el idioma del móvil (es, ca, gl y eu → español; de → alemán; cualquier otro → inglés). Selector ES · EN · DE siempre visible. Precios con `Intl.NumberFormat`.

## Cambios en la carta ya hecha
- Si te piden cambiar un precio o añadir o quitar un plato, toca solo `sistema-2-carta/datos.js`: el plato en los 3 idiomas y en su sección. Si es el plato estrella, comprueba que su precio cambia también arriba.
