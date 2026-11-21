/* Bodega Godius · carta digital
   Datos copiados de datos/restaurante.json. Van aquí porque con doble clic (file://)
   el navegador no deja leer ficheros con fetch().
   Cambiar un precio = cambiar una línea «precio». Añadir un plato = un bloque más con es, en y de. */
window.BODEGA = {
  nombre: "Bodega Godius",
  moneda: "EUR",
  email: "hola@bodegagodius.es",
  url_carta: "https://PON_AQUI_TU_WEB/carta",
  plato_estrella: "croquetas-de-la-abuela",

  textos: {
    es: {
      locale: "es-ES",
      titulo_pagina: "La carta · Bodega Godius",
      tipo: "Taberna de tapas",
      idioma: "Idioma",
      estrella_ante: "El plato de la casa",
      estrella_tiza: "Si solo pides una cosa, que sea esta.",
      sello: ["De la", "casa"],
      insignia: "Plato estrella",
      carta_ante: "La carta",
      carta_titulo: "Y todo lo demás, para compartir",
      foto_nota: "aquí va la foto real del plato",
      bebidas: "Bebidas",
      alergenos_titulo: "Alérgenos",
      alergenos: "Si tienes alguna alergia o intolerancia, pregúntanos: te decimos qué lleva cada plato.",
      lema: "Tapas de siempre, caña bien tirada y nadie con prisa.",
      horario: "De martes a domingo, de 12:30 a 16:30 y de 20:00 a 00:00"
    },
    en: {
      locale: "en-GB",
      titulo_pagina: "Menu · Bodega Godius",
      tipo: "Tapas tavern",
      idioma: "Language",
      estrella_ante: "Our signature dish",
      estrella_tiza: "If you only order one thing, make it this.",
      sello: ["House", "special"],
      insignia: "Signature dish",
      carta_ante: "The menu",
      carta_titulo: "And everything else, for sharing",
      foto_nota: "the real photo of the dish goes here",
      bebidas: "Drinks",
      alergenos_titulo: "Allergens",
      alergenos: "If you have any allergy or intolerance, just ask: we'll tell you what's in every dish.",
      lema: "Classic tapas, a well-poured beer and nobody in a hurry.",
      horario: "Tuesday to Sunday, 12:30–16:30 and 20:00–00:00"
    },
    de: {
      locale: "de-DE",
      titulo_pagina: "Speisekarte · Bodega Godius",
      tipo: "Tapas-Taverne",
      idioma: "Sprache",
      estrella_ante: "Unser Hausgericht",
      estrella_tiza: "Wenn du nur eine Sache bestellst, dann diese.",
      sello: ["Vom", "Haus"],
      insignia: "Unser Star",
      carta_ante: "Die Karte",
      carta_titulo: "Und alles andere, zum Teilen",
      foto_nota: "hier kommt das echte Foto des Gerichts hin",
      bebidas: "Getränke",
      alergenos_titulo: "Allergene",
      alergenos: "Wenn du eine Allergie oder Unverträglichkeit hast, frag uns: Wir sagen dir, was in jedem Gericht steckt.",
      lema: "Tapas wie immer, gut gezapftes Bier und niemand hat es eilig.",
      horario: "Dienstag bis Sonntag, 12:30–16:30 und 20:00–00:00 Uhr"
    }
  },

  secciones: [
    { id: "para-picar",    es: "Para picar",    en: "Small bites",    de: "Kleinigkeiten" },
    { id: "raciones",      es: "Raciones",      en: "Sharing plates", de: "Portionen zum Teilen" },
    { id: "principales",   es: "Principales",   en: "Mains",          de: "Hauptgerichte" },
    { id: "para-terminar", es: "Para terminar", en: "To finish",      de: "Zum Abschluss" }
  ],

  platos: [
    {
      id: "croquetas-de-la-abuela", seccion: "raciones", precio: 9.0,
      es: { nombre: "Croquetas de la abuela", descripcion: "Cremosas por dentro, crujientes por fuera. Seis unidades. La receta no se negocia." },
      en: { nombre: "Grandma's croquetas", descripcion: "Creamy inside, crunchy outside. Six of them. The recipe is not up for discussion." },
      de: { nombre: "Omas Croquetas", descripcion: "Innen cremig, außen knusprig. Sechs Stück. Über das Rezept wird nicht verhandelt." }
    },
    {
      id: "patatas-bravas", seccion: "para-picar", precio: 6.0,
      es: { nombre: "Patatas bravas de la casa", descripcion: "Con nuestra brava, que pica lo justo para que pidas otra caña." },
      en: { nombre: "House patatas bravas", descripcion: "With our brava sauce: just spicy enough to make you order another beer." },
      de: { nombre: "Patatas bravas des Hauses", descripcion: "Mit unserer Brava-Soße, gerade so scharf, dass du noch ein Bier bestellst." }
    },
    {
      id: "ensaladilla-rusa", seccion: "para-picar", precio: 6.5,
      es: { nombre: "Ensaladilla rusa", descripcion: "Con atún, mayonesa casera y picos para mojar sin vergüenza." },
      en: { nombre: "Ensaladilla rusa (Spanish potato salad)", descripcion: "With tuna, homemade mayo and breadsticks for shameless dipping." },
      de: { nombre: "Ensaladilla rusa (spanischer Kartoffelsalat)", descripcion: "Mit Thunfisch, hausgemachter Mayonnaise und Brotstangen zum ungenierten Dippen." }
    },
    {
      id: "salmorejo", seccion: "para-picar", precio: 6.0,
      es: { nombre: "Salmorejo", descripcion: "Crema fría de tomate, pan, ajo y buen aceite. De cuchara o de mojar, tú decides." },
      en: { nombre: "Salmorejo (cold tomato cream)", descripcion: "Cold cream of tomato, bread, garlic and good olive oil. Spoon it or dip into it, your call." },
      de: { nombre: "Salmorejo (kalte Tomatencreme)", descripcion: "Kalte Creme aus Tomaten, Brot, Knoblauch und gutem Olivenöl. Zum Löffeln oder Dippen, wie du willst." }
    },
    {
      id: "pimientos-de-padron", seccion: "para-picar", precio: 6.0,
      es: { nombre: "Pimientos de Padrón", descripcion: "Unos pican y otros no. Es parte del juego." },
      en: { nombre: "Padrón peppers", descripcion: "Some are hot, some are not. That's part of the game." },
      de: { nombre: "Pimientos de Padrón", descripcion: "Manche sind scharf, manche nicht. Das gehört zum Spiel." }
    },
    {
      id: "tabla-de-quesos", seccion: "para-picar", precio: 12.0,
      es: { nombre: "Tabla de quesos curados", descripcion: "Tres quesos de oveja con membrillo y nueces." },
      en: { nombre: "Aged cheese board", descripcion: "Three sheep's cheeses with quince paste and walnuts." },
      de: { nombre: "Platte mit gereiftem Käse", descripcion: "Drei Schafskäse mit Quittenpaste und Walnüssen." }
    },
    {
      id: "jamon-iberico", seccion: "para-picar", precio: 16.0,
      es: { nombre: "Jamón ibérico de cebo", descripcion: "Cortado a cuchillo, con pan con tomate." },
      en: { nombre: "Ibérico ham (cebo)", descripcion: "Hand-carved, with tomato bread." },
      de: { nombre: "Ibérico-Schinken (Cebo)", descripcion: "Von Hand geschnitten, mit Tomatenbrot." }
    },
    {
      id: "tortilla-de-patatas", seccion: "raciones", precio: 7.5,
      es: { nombre: "Tortilla de patatas", descripcion: "Jugosa y con cebolla. El debate lo damos por cerrado." },
      en: { nombre: "Spanish omelette", descripcion: "Juicy and with onion. As far as we're concerned, the debate is closed." },
      de: { nombre: "Tortilla de patatas", descripcion: "Saftig und mit Zwiebeln. Die Debatte ist für uns beendet." }
    },
    {
      id: "calamares-andaluza", seccion: "raciones", precio: 11.0,
      es: { nombre: "Calamares a la andaluza", descripcion: "Fritos al momento, con limón y alioli suave." },
      en: { nombre: "Andalusian-style fried squid", descripcion: "Fried to order, with lemon and mild aioli." },
      de: { nombre: "Calamares nach andalusischer Art", descripcion: "Frisch frittiert, mit Zitrone und mildem Alioli." }
    },
    {
      id: "gambas-al-ajillo", seccion: "raciones", precio: 13.5,
      es: { nombre: "Gambas al ajillo", descripcion: "En cazuela de barro, chisporroteando. Pide pan, lo vas a necesitar." },
      en: { nombre: "Garlic prawns", descripcion: "In a clay dish, still sizzling. Order bread, you're going to need it." },
      de: { nombre: "Knoblauchgarnelen", descripcion: "In der Tonschale, noch brutzelnd. Bestell Brot dazu, du wirst es brauchen." }
    },
    {
      id: "huevos-rotos", seccion: "raciones", precio: 10.5,
      es: { nombre: "Huevos rotos con chistorra", descripcion: "Patatas, huevo de corral y chistorra. Se rompen en la mesa." },
      en: { nombre: "Huevos rotos with chistorra", descripcion: "Potatoes, free-range eggs and chistorra sausage. Broken at your table." },
      de: { nombre: "Huevos rotos mit Chistorra", descripcion: "Kartoffeln, Freilandeier und Chistorra-Wurst. Aufgebrochen wird am Tisch." }
    },
    {
      id: "albondigas-almendra", seccion: "raciones", precio: 9.5,
      es: { nombre: "Albóndigas en salsa de almendras", descripcion: "Como las de casa, pero sin tener que fregar después." },
      en: { nombre: "Meatballs in almond sauce", descripcion: "Just like homemade, minus the washing-up." },
      de: { nombre: "Hackbällchen in Mandelsoße", descripcion: "Wie zu Hause, nur ohne Abwasch danach." }
    },
    {
      id: "pulpo-a-la-gallega", seccion: "principales", precio: 15.5,
      es: { nombre: "Pulpo a la gallega", descripcion: "Sobre cachelos, con pimentón de la Vera y buen aceite." },
      en: { nombre: "Galician-style octopus", descripcion: "On boiled potatoes, with paprika from La Vera and good olive oil." },
      de: { nombre: "Pulpo nach galicischer Art", descripcion: "Auf Kartoffeln, mit Pimentón de la Vera und gutem Olivenöl." }
    },
    {
      id: "secreto-iberico", seccion: "principales", precio: 15.0,
      es: { nombre: "Secreto ibérico a la plancha", descripcion: "Con patatas panaderas y pimientos asados." },
      en: { nombre: "Grilled secreto ibérico", descripcion: "Ibérico pork, with sliced roast potatoes and roasted peppers." },
      de: { nombre: "Secreto ibérico von der Plancha", descripcion: "Vom Ibérico-Schwein, mit Bäckerkartoffeln und gerösteten Paprika." }
    },
    {
      id: "tarta-de-queso", seccion: "para-terminar", precio: 6.0,
      es: { nombre: "Tarta de queso al horno", descripcion: "Cremosa en el centro. Suele acabarse antes de las diez." },
      en: { nombre: "Baked cheesecake", descripcion: "Creamy in the middle. Usually gone before ten." },
      de: { nombre: "Gebackener Käsekuchen", descripcion: "In der Mitte cremig. Meistens vor zehn Uhr weg." }
    }
  ],

  bebidas: [
    {
      id: "cana", precio: 2.5,
      es: { nombre: "Caña de cerveza", descripcion: "Bien fría y bien tirada." },
      en: { nombre: "Draught beer (caña)", descripcion: "Ice-cold and properly poured." },
      de: { nombre: "Bier vom Fass (Caña)", descripcion: "Eiskalt und richtig gezapft." }
    },
    {
      id: "vino-de-la-casa", precio: 3.0,
      es: { nombre: "Copa de vino de la casa", descripcion: "Tinto o blanco. Pregunta cuál toca hoy." },
      en: { nombre: "Glass of house wine", descripcion: "Red or white. Ask which one's on today." },
      de: { nombre: "Glas Hauswein", descripcion: "Rot oder weiß. Frag, welcher heute dran ist." }
    },
    {
      id: "vermut-de-grifo", precio: 3.5,
      es: { nombre: "Vermut de grifo", descripcion: "Con su aceituna y su naranja." },
      en: { nombre: "Vermouth on tap", descripcion: "With its olive and slice of orange." },
      de: { nombre: "Wermut vom Fass", descripcion: "Mit Olive und Orangenscheibe." }
    },
    {
      id: "agua-o-refresco", precio: 2.5,
      es: { nombre: "Agua o refresco", descripcion: "Para quien conduce, que también se merece un brindis." },
      en: { nombre: "Water or soft drink", descripcion: "For whoever's driving: they deserve a toast too." },
      de: { nombre: "Wasser oder Softdrink", descripcion: "Für alle, die fahren: Anstoßen dürfen sie trotzdem." }
    }
  ]
};
