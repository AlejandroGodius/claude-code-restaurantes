# Marketing para restaurantes con Claude Code

La carpeta del vídeo **[Claude Code + Restaurantes = Marketing para Restaurantes](https://youtu.be/SD5-JIdHVfE)**: todo lo necesario para montar en tu restaurante los 2 sistemas del vídeo, escribiendo frases normales a Claude Code.

1. **Reseñas:** una página para que el cliente deje la reseña en Google en un toque, un cartel con QR para las mesas y las respuestas a tus reseñas con el tono de tu bar, sin datos personales.
2. **Carta digital que vende:** el plato estrella arriba, una foto grande de cada plato, en español, inglés y alemán según el idioma del móvil, y su QR para la mesa. Cambiar un precio es una frase.

**Míralo funcionando (el ejemplo de la taberna inventada del vídeo):**
- Carta: https://alejandrogodius.github.io/claude-code-restaurantes/ejemplo-resultado/sistema-2-carta/
- Página de reseñas: https://alejandrogodius.github.io/claude-code-restaurantes/ejemplo-resultado/sistema-1-resenas/
- Cartel con QR: https://alejandrogodius.github.io/claude-code-restaurantes/ejemplo-resultado/sistema-1-resenas/cartel.html
- Respuestas a reseñas: https://alejandrogodius.github.io/claude-code-restaurantes/ejemplo-resultado/sistema-1-resenas/respuestas.html

> ¿Prefieres que te lo dejemos montado, con tu web, tu ficha de Google y el trabajo de cada mes? 👉 **https://restaurantes.godius.io**

---

## Qué hay en esta carpeta

| | Qué es |
|---|---|
| `CLAUDE.md` | Las instrucciones que Claude Code lee solo al abrir la carpeta: diseño, reglas legales y qué lleva cada sistema. Es lo que hace que salga bien a la primera. |
| `datos/restaurante.json` | Los datos del restaurante: nombre, tono, horario, platos, precios, plato estrella, email y enlaces. **Aquí pones los tuyos.** |
| `datos/resenas.txt` | Las reseñas que quieres contestar. |
| `fotos/` | (Opcional, la creas tú) las fotos de tus platos. |
| `FRASES.md` | Las 3 frases del vídeo, listas para pegar. |
| `instalar/` | Instaladores de VS Code y de la extensión de Claude Code para Windows y Mac. |
| `ejemplo-resultado/` | Lo que construyó Claude Code en el vídeo, para que veas el resultado antes de empezar. |

## Paso a paso

### 1. Descarga la carpeta
Arriba en esta página: botón verde **Code › Download ZIP**. Descomprímela donde quieras.

### 2. Instala VS Code y Claude Code
- **Windows:** doble clic en `instalar/instalar-windows.bat`.
- **Mac:** doble clic en `instalar/instalar-mac.command` (si macOS lo bloquea: clic derecho › Abrir).
- **A mano:** instala [VS Code](https://code.visualstudio.com/) y, dentro, la extensión **Claude Code** (de Anthropic) desde el apartado de extensiones.

Necesitas una cuenta de Claude: la primera vez, el panel de Claude Code te pide entrar.

### 3. Pon los datos de tu restaurante
Abre `datos/restaurante.json` y cambia los de Bodega Godius por los tuyos: nombre, tono (cómo habláis en tu bar), horario, platos con su precio y descripción, el plato estrella y tu email.

- **El enlace de reseña de Google:** busca tu restaurante en el [buscador de Place ID de Google](https://developers.google.com/maps/documentation/places/web-service/place-id), copia el código que empieza por `ChIJ…` y ponlo en `url_resena_google` en lugar de `PON_AQUI_TU_PLACE_ID`.
- **Las reseñas:** pega en `datos/resenas.txt` las que quieras contestar.
- **Las fotos (opcional):** crea la carpeta `fotos/` y pon una foto por plato con el id del plato como nombre (por ejemplo, `fotos/croquetas-de-la-abuela.jpg`). Fotos de TUS platos, nunca de banco: si el cliente pide lo de la foto y le llega otra cosa, la reseña mala te la ganas tú.

### 4. Pide los sistemas con una frase
En VS Code: **Archivo › Abrir carpeta** (esta carpeta), abre el panel de **Claude Code** y pega las frases de `FRASES.md` una a una. En unos minutos tienes `sistema-1-resenas/` y `sistema-2-carta/`.

### 5. Publícalo
- **La carta** tiene que estar en internet para que funcione el QR. Gratis y en 1 minuto: arrastra la carpeta `sistema-2-carta` a [Netlify Drop](https://app.netlify.com/drop), copia la dirección que te da, ponla en `url_carta` de `datos/restaurante.json` y dile a Claude Code: «actualiza el QR de la mesa con la URL de la carta».
- **El cartel A5** (`cartel.html`) y **la tarjeta A6** (`qr-mesa.html`) tienen botón de imprimir.
- **Las respuestas** (`respuestas.html`) tienen botón «Copiar»: las pegas en tu ficha de Google.

### 6. Cambios cuando quieras
«Sube las croquetas a 9 euros», «quita el salmorejo», «añade el menú del día»… Una frase y listo.

## Lo que nunca hay que hacer
- **No publiques datos personales ni de salud** en las respuestas (alergias, enfermedades, familiares, nombres completos), aunque el cliente los cuente en su reseña. La AEPD multa por eso.
- **No pidas reseñas solo a los contentos** ni filtres por estrellas: va contra las normas de Google. El sistema manda a todo el mundo al mismo botón.
- **No uses fotos de banco** en la carta.

## Licencia
MIT: úsalo, cámbialo y móntalo en tu restaurante o en los de tus clientes. Bodega Godius es una taberna inventada para el vídeo; sus datos, reseñas y fotos (hechas con IA) son de ejemplo.

---
Hecho por **Alex · [Godius](https://godius.io)** para el canal de YouTube. Más vídeos de IA para tu negocio: [youtube.com/@AlejandroGodius](https://www.youtube.com/@AlejandroGodius)
