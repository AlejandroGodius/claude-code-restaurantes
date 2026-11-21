/* Bodega Godius · sistema de reseñas
   Datos copiados de datos/restaurante.json y datos/resenas.txt.
   Van aquí porque con doble clic (file://) el navegador no deja leer ficheros con fetch(). */
window.BODEGA = {
  nombre: "Bodega Godius",
  tipo: "Taberna de tapas",
  lema: "Tapas de siempre, caña bien tirada y nadie con prisa.",
  horario: "De martes a domingo, de 12:30 a 16:30 y de 20:00 a 00:00",
  email: "hola@bodegagodius.es",
  url_resena_google: "https://search.google.com/local/writereview?placeid=PON_AQUI_TU_PLACE_ID",

  resenas: [
    {
      id: 1,
      estrellas: 1,
      autor: "Marta Ruiz Delgado",
      hace: "hace 3 días",
      idioma: "es",
      texto: "Esperamos 40 minutos a que llegaran las bravas, con el bar medio vacío. El camarero muy majo, pero la cocina iba a otro ritmo. Para tapear no puedes tardar tanto. No sé si volveré.",
      respuesta: `Marta, tienes toda la razón y te pedimos perdón. Cuarenta minutos para unas bravas no tiene justificación, y menos con el bar medio vacío. Lo vamos a revisar con cocina para que no vuelva a pasar.

Gracias por lo que cuentas del camarero: se lo diremos, que le va a alegrar el día.

Nos encantaría que nos dieras otra oportunidad. Si vuelves, la primera caña corre de nuestra cuenta, y las bravas, a su hora.

El equipo de Bodega Godius`,
      ojo: "Firma con nombre y dos apellidos: la respuesta solo dice «Marta». Y ni una excusa: con el bar medio vacío no hay «es que había mucho lío» que valga."
    },
    {
      id: 2,
      estrellas: 2,
      autor: "Javi",
      hace: "hace 1 semana",
      idioma: "es",
      texto: "Las albóndigas llegaron frías, como si llevaran un rato en el pase. Lo dijimos y nos las calentaron, pero ya se nos había cortado el rollo. La caña, eso sí, perfecta.",
      respuesta: `Javi, perdona. Las albóndigas tienen que llegar humeando a la mesa, no esperando en el pase, y ahí fallamos nosotros. Gracias por decírnoslo en el momento; sentimos que, aun así, se os cortara el rollo.

Lo de la caña nos lo apuntamos con orgullo.

Vuelve cuando quieras y pídelas otra vez: queremos que las pruebes como tienen que salir.

El equipo de Bodega Godius`,
      ojo: "El fallo se asume como de la casa: no se señala a nadie del equipo ni se discute si estaban frías o templadas."
    },
    {
      id: 3,
      estrellas: 5,
      autor: "Lucía",
      hace: "hace 2 semanas",
      idioma: "es",
      texto: "Las croquetas de la abuela son de otro planeta. Pedimos una ración para probar y acabamos pidiendo tres. Ambiente de bar de toda la vida.",
      respuesta: `¡Gracias, Lucía! De una ración a tres: en esta casa no hay piropo más grande. La receta de la abuela no se negocia, y reseñas como la tuya nos dan la razón.

La próxima vez, empezad directamente por tres. Os esperamos en la barra.

El equipo de Bodega Godius`,
      ojo: ""
    },
    {
      id: 4,
      estrellas: 5,
      autor: "Andrés M.",
      hace: "hace 3 semanas",
      idioma: "es",
      texto: "Fui a cenar con mi hija, que es celíaca, y nos explicaron qué platos podía comer sin problema. Trato de diez. La tortilla, jugosísima.",
      respuesta: `Andrés, muchísimas gracias. Que te fueras contento con el trato es lo que más nos importa, y se lo vamos a contar a todo el equipo.

Y lo de la tortilla, jugosa y con cebolla: ese debate aquí lo damos por cerrado.

Te esperamos cuando quieras.

El equipo de Bodega Godius`,
      ojo: "La reseña cuenta que su hija es celíaca. Es un dato de salud de un familiar: la respuesta no menciona la celiaquía, ni el gluten, ni a su hija, aunque él lo haya contado. Tampoco la inicial del apellido: solo «Andrés». Si quieres que se sepa que explicáis qué lleva cada plato, ponlo en la carta o en la ficha de Google, nunca en la respuesta a un cliente."
    },
    {
      id: 5,
      estrellas: 5,
      autor: "Tobias K.",
      hace: "hace 1 mes",
      idioma: "en",
      texto: "Best tapas of our whole trip. The garlic prawns were amazing and the staff helped us order even with our terrible Spanish. We came back twice.",
      respuesta: `Thank you, Tobias! Best tapas of the whole trip, and you came back twice: that's the nicest thing anyone can say to a tapas bar. And don't worry about the Spanish: pointing at the garlic prawns works in any language.

Next time you're around, the prawns will be sizzling and waiting for you.

The Bodega Godius team`,
      ojo: ""
    },
    {
      id: 6,
      estrellas: 4,
      autor: "Carmen",
      hace: "hace 1 mes",
      idioma: "es",
      texto: "Vermut de grifo de los buenos y una tarta de queso que te hace cerrar los ojos. Le quito una estrella porque el sábado no había quien hablara del ruido, pero volveremos.",
      respuesta: `Carmen, gracias por venir y por contarlo tal cual. Nos alegra que el vermut y la tarta de queso hicieran su trabajo (lo de cerrar los ojos nos lo quedamos).

Y tienes razón con el ruido del sábado: no se podía hablar y lo sentimos. Si un día os apetece algo más tranquilo, entre semana a mediodía se charla de maravilla.

Os esperamos para ganarnos esa estrella que falta.

El equipo de Bodega Godius`,
      ojo: ""
    }
  ]
};
