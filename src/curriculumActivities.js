const activity = (unit, topic, title, materials, steps, extra = false) => ({
  unit,
  topic,
  title,
  materials,
  steps,
  extra,
})

const game = (unit, title, goal, materials, instructions) => ({
  unit,
  title,
  goal,
  materials,
  instructions,
})

export const curriculumActivities = {
  1: [
    activity('Unidad 1 · Qué divertido es el arte', 'Mis manos son mágicas', 'Jardín de manos', 'Papel, témperas lavables y crayones', 'Estampa una mano como tallo o copa; agrega hojas, flores y un título para contar qué jardín imaginaste.'),
    activity('Unidad 1 · Qué divertido es el arte', 'Mis dedos dibujan', 'Caminos de deditos', 'Papel y pintura lavable', 'Traza caminos con distintos dedos; transforma las huellas en animales, personas u objetos y cuenta qué líneas elegiste.'),
    activity('Unidad 1 · Qué divertido es el arte', 'Mis manos decoran', 'Guirnalda de huellas', 'Papel reutilizado, colores y lana', 'Crea huellas decoradas con patrones propios; únelas en una guirnalda y acuerden cómo exhibirla en grupo.'),
    activity('Unidad 1 · Qué divertido es el arte', 'Las cosas toman vida', 'Objeto con personalidad', 'Objeto cotidiano limpio, papel y lápices', 'Observa un objeto y dibújalo con ojos, gestos y una acción; inventa una frase que explique su nueva personalidad.'),
    activity('Unidad 1 · Qué divertido es el arte', 'Cualquier superficie es genial', 'Rastros y texturas', 'Hojas caídas, papel y crayones', 'Frota suavemente el crayón sobre papel apoyado en distintas superficies seguras; compara las texturas sin dañar plantas ni mobiliario.'),
    activity('Unidad 1 · Qué divertido es el arte', 'Carnaval de Negros y Blancos', 'Máscara de fiesta respetuosa', 'Cartón reutilizado, colores y lana', 'Diseña una máscara de cartón inspirada en las formas y la alegría del carnaval; comparte qué representa sin pintar la piel de nadie.'),
    activity('Unidad 1 · Qué divertido es el arte', 'Patrimonio cultural', 'Mi postal patrimonial', 'Papel y colores', 'Dibuja una celebración o lugar cultural que conozcas; agrega su nombre y una idea para cuidarlo.'),
    activity('Unidad 2 · El inicio de todo', 'Cuento: Soy un punto', 'El viaje de un punto', 'Papel y marcador', 'Inicia con un punto y conviértelo en personaje; dibuja tres momentos de su viaje usando puntos y líneas.'),
    activity('Unidad 2 · El inicio de todo', 'El punto', 'Punto grande, punto pequeño', 'Papel y marcadores', 'Llena una figura con puntos de distintos tamaños y distancias; observa cómo cambia la textura al acercarlos o separarlos.'),
    activity('Unidad 2 · El inicio de todo', 'Descubre el punto en la naturaleza', 'Caza de puntos', 'Lupa opcional y hoja de registro', 'Busca puntos en objetos naturales sin arrancarlos; dibuja tres hallazgos y clasifícalos por tamaño o agrupación.'),
    activity('Unidad 2 · El inicio de todo', 'La línea, otro elemento básico', 'Líneas con carácter', 'Papel y lápices', 'Traza líneas rectas, curvas, quebradas y onduladas; elige una emoción para cada tipo y dibuja una escena.'),
    activity('Unidad 2 · El inicio de todo', 'Crear formas y figuras', 'De la línea a la figura', 'Papel y lápices de color', 'Cierra varias líneas para formar figuras; combínalas para crear un animal imaginario y nombra sus partes.'),
    activity('Unidad 2 · El inicio de todo', 'Composición con puntos y líneas', 'Paisaje punteado', 'Papel y marcadores', 'Construye un paisaje usando solo puntos y líneas; reserva una zona vacía para mostrar el cielo o el agua.'),
    activity('Unidad 2 · El inicio de todo', 'Taller: Árbol con puntos y líneas', 'Árbol de estaciones', 'Papel y colores', 'Dibuja el tronco con líneas y la copa con puntos; cambia color, densidad y tamaño para representar una estación.'),
    activity('Unidad 2 · El inicio de todo', 'Dibujo a mano alzada', 'Dibujo de un solo trazo', 'Papel y lápiz', 'Observa un objeto y dibújalo sin regla, intentando no levantar el lápiz; compara el resultado con el objeto real.'),
    activity('Unidad 2 · El inicio de todo', 'Torbellino de la región Cundiboyacense y Santander', 'Líneas que bailan', 'Papel, colores y música opcional', 'Escucha un ritmo de torbellino y traduce sus cambios en líneas; comparte qué parte del movimiento representa tu dibujo.'),
    activity('Unidad 3 · Tu mundo toma forma', 'Cuento: Descubrir o inventar', 'Un objeto inesperado', 'Papel y figuras recortadas', 'Combina figuras al azar para inventar un objeto; dibuja para qué sirve y relata cómo lo descubriste.'),
    activity('Unidad 3 · Tu mundo toma forma', 'Las figuras geométricas', 'Detectives de figuras', 'Tarjetas de figuras y objetos del aula', 'Relaciona círculos, triángulos, cuadrados y rectángulos con objetos cercanos; dibuja una evidencia de cada hallazgo.'),
    activity('Unidad 3 · Tu mundo toma forma', 'Dibujar figuras con objetos cotidianos', 'Figuras con objetos', 'Papel, lápiz y objetos seguros', 'Usa el contorno exterior de objetos cotidianos para dibujar formas; combínalas en una criatura o paisaje.'),
    activity('Unidad 3 · Tu mundo toma forma', 'Crea tus propios moldes', 'Molde para repetir', 'Cartón delgado, lápiz y tijeras escolares', 'Dibuja una forma sencilla en cartón, recórtala con acompañamiento adulto y úsala para crear una secuencia.'),
    activity('Unidad 3 · Tu mundo toma forma', 'Imagina un mundo así', 'Planeta de formas', 'Papel y colores', 'Inventa un planeta compuesto por figuras geométricas; agrega habitantes y explica cómo se relacionan con ese lugar.'),
    activity('Unidad 3 · Tu mundo toma forma', 'Dibujar con figuras geométricas', 'Animal geométrico', 'Papel y lápices de color', 'Construye un animal con figuras básicas; colorea cada forma y señala cuáles usaste.'),
    activity('Unidad 3 · Tu mundo toma forma', 'Componer con figuras geométricas', 'Ciudad de figuras', 'Papeles de colores y pegante', 'Recorta o dibuja figuras para armar una ciudad; organiza adelante y atrás para crear profundidad.'),
    activity('Unidad 3 · Tu mundo toma forma', 'Fortaleza y Conjunto Monumental de Cartagena', 'Ventanas y murallas', 'Cartón reutilizado, papel y colores', 'Observa imágenes de la fortaleza; representa murallas, arcos y ventanas con figuras y agrega una nota de cuidado patrimonial.'),
    activity('Unidad 3 · Tu mundo toma forma', 'Taller: Móvil geométrico', 'Móvil en equilibrio', 'Cartulina, lana y palitos', 'Crea figuras livianas y cuélgalas a distintas alturas; ajusta los hilos hasta que el móvil quede equilibrado.'),
    activity('Unidad 4 · Llegó el color', 'Relato: Un regalo tricolor', 'Tres colores, una historia', 'Papel y colores primarios', 'Ilustra una escena usando amarillo, azul y rojo; inventa un relato breve donde cada color ayude a comunicar algo.'),
    activity('Unidad 4 · Llegó el color', 'Queremos ver tus obras', 'Galería con voz propia', 'Obra anterior y etiqueta de papel', 'Elige una creación, ponle título y escribe o dicta qué quisiste expresar; presenta tu obra a un compañero.'),
    activity('Unidad 4 · Llegó el color', 'Los colores primarios', 'Semáforo de primarios', 'Papel y témperas o lápices', 'Encuentra amarillo, azul y rojo en tu entorno; crea una composición con esos tres colores y explica una elección.'),
    activity('Unidad 4 · Llegó el color', 'El color amarillo: Un lindo día', 'Un día amarillo', 'Papel y tonos amarillos', 'Dibuja una escena luminosa con distintos amarillos; agrega un elemento que contraste y explica cómo cambia el ambiente.'),
    activity('Unidad 4 · Llegó el color', 'El color azul: Mar y cielo', 'Azules del paisaje', 'Papel y lápices azules', 'Crea mar y cielo con varios tonos de azul; diferencia las zonas usando presión, líneas y espacios.'),
    activity('Unidad 4 · Llegó el color', 'El color rojo: Estoy alerta', 'Rojo que comunica', 'Papel y colores', 'Diseña una señal inventada usando rojo; acompáñala con símbolos y explica qué mensaje transmite.'),
    activity('Unidad 4 · Llegó el color', 'Sierra Nevada de Santa Marta y Parque Tayrona', 'Paisaje de montaña y mar', 'Papel y colores', 'Crea una composición que conecte montaña, bosque y mar; agrega una acción para respetar los ecosistemas y las culturas que los habitan.'),
    activity('Unidad 4 · Llegó el color', 'Keith Haring: Un artista para niños', 'Figuras en movimiento', 'Papel y marcadores', 'Observa cómo líneas y figuras pueden mostrar movimiento; crea personajes propios en acción sin copiar una obra.'),
    activity('Unidad 4 · Llegó el color', 'Componiendo al estilo Keith Haring', 'Mural de movimiento', 'Papel grande y marcadores', 'En equipo, llena una hoja con figuras originales en movimiento; acuerden colores y dejen espacio para cada aporte.'),
    activity('Unidad 4 · Llegó el color', 'Actividad de repaso general', 'Mi obra reúne lo aprendido', 'Papel y materiales disponibles', 'Combina puntos, líneas, formas y colores para contar una historia; señala en tu obra un ejemplo de cada elemento.'),
    activity('Unidad 4 · Llegó el color', 'La técnica: Revisa tus útiles', 'Prueba de herramientas', 'Lápiz, crayones y témperas lavables', 'Prueba cada herramienta en una hoja; compara el trazo y el cuidado requerido antes de elegir una para tu obra.'),
    activity('Complemento local · Barranquilla', 'Carnaval de Barranquilla y diversidad', 'Máscara de mi comparsa', 'Cartón reutilizado y colores', 'Diseña una máscara inspirada en una danza o personaje del Carnaval; incluye una explicación respetuosa de su significado.', true),
    activity('Complemento local · Barranquilla', 'Cuidado del entorno', 'Barranquilla que queremos', 'Papel reutilizado y colores', 'Dibuja un espacio del barrio y una mejora posible; representa una acción de cuidado que puedan realizar en grupo.', true),
    activity('Complemento local · Barranquilla', 'Creación e inclusión', 'Un mural para todas las voces', 'Papel grande, texturas y colores', 'Cada niño aporta una forma, palabra o textura; ofrezcan varias maneras de participar y nombren qué hace valiosa cada idea.', true),
  ],
  2: [
    activity('Unidad 1 · Qué divertido es el arte', 'Reafirmo mis conocimientos', 'Mapa de elementos visuales', 'Papel y lápices', 'Reúne punto, línea, forma y color en una composición; señala dónde aparece cada elemento.'),
    activity('Unidad 1 · Qué divertido es el arte', 'El punto, la línea y su capacidad compositiva', 'Puntos que se vuelven escena', 'Papel y marcadores', 'Crea una imagen con puntos y líneas de varios ritmos; observa cómo guían la mirada.'),
    activity('Unidad 1 · Qué divertido es el arte', 'El plano y la forma', 'Planos de mi barrio', 'Papeles de colores y pegante', 'Superpone planos regulares e irregulares para construir una escena; distingue figura y fondo.'),
    activity('Unidad 1 · Qué divertido es el arte', 'Volumen, textura y color', 'Escultura de texturas', 'Papel, cartón y materiales limpios', 'Construye una forma en relieve; combina dos texturas y elige colores que ayuden a describirla.'),
    activity('Unidad 1 · Qué divertido es el arte', 'Las figuras geométricas', 'Composición geométrica', 'Regla, papel y colores', 'Clasifica figuras por lados y curvas; únelas para crear un personaje o lugar reconocible.'),
    activity('Unidad 1 · Qué divertido es el arte', 'Composición con elementos básicos', 'Un paisaje por capas', 'Papel y lápices', 'Organiza puntos, líneas, planos y colores en un paisaje; indica qué elemento destaca primero y por qué.'),
    activity('Unidad 1 · Qué divertido es el arte', 'Joan Miró y sus obras básicas', 'Constelación imaginada', 'Papel y marcadores', 'Observa formas y símbolos de una obra de Miró; inventa una composición propia y explica sus símbolos.'),
    activity('Unidad 1 · Qué divertido es el arte', 'Taller: Decorando con arte', 'Objeto decorado con patrones', 'Cartón o papel reutilizado', 'Diseña un patrón repetible y úsalo para decorar una tarjeta u objeto de papel sin cubrir su función.'),
    activity('Unidad 1 · Qué divertido es el arte', 'Feria de Manizales', 'Afiche de una celebración', 'Papel y colores', 'Crea un afiche con formas, letras e imágenes que comuniquen una celebración cultural; identifica qué información debe leerse primero.'),
    activity('Unidad 2 · Lo que debo tener claro', 'Las líneas configuran formas', 'Contornos que cuentan', 'Papel y lápiz', 'Construye tres objetos con contornos distintos; compara línea abierta, cerrada y silueta.'),
    activity('Unidad 2 · Lo que debo tener claro', 'Movimiento de las líneas', 'Ritmo de líneas', 'Papel y colores', 'Llena una franja con líneas que sugieran calma, velocidad y giro; relaciona cada ritmo con una sensación.'),
    activity('Unidad 2 · Lo que debo tener claro', 'Trazar líneas con regla', 'Laberinto de rectas', 'Regla, papel y lápiz', 'Dibuja líneas horizontales, verticales y diagonales con regla; conviértelas en un laberinto sencillo.'),
    activity('Unidad 2 · Lo que debo tener claro', 'Dibujar con líneas', 'Retrato lineal', 'Papel y lápiz', 'Representa un rostro u objeto usando líneas de diferente dirección y grosor; comenta cuál define mejor su forma.'),
    activity('Unidad 2 · Lo que debo tener claro', 'Contorno y silueta', 'Siluetas del entorno', 'Papel y lápices', 'Dibuja el contorno de un objeto y luego rellena su silueta; compara qué detalles desaparecen.'),
    activity('Unidad 2 · Lo que debo tener claro', 'La forma de las cosas', 'Formas a la vista', 'Objetos seguros y papel', 'Observa un objeto desde dos posiciones; dibuja su forma y marca qué cambia al moverlo.'),
    activity('Unidad 2 · Lo que debo tener claro', 'Formas múltiples', 'Una forma, muchas ideas', 'Papel con formas recortadas', 'Usa la misma forma en tres dibujos distintos; transforma su significado con orientación y detalles.'),
    activity('Unidad 2 · Lo que debo tener claro', 'Composición con formas', 'Rompecabezas de formas', 'Cartulina y pegante', 'Recorta formas geométricas y orgánicas; organízalas para crear una escena con equilibrio visual.'),
    activity('Unidad 2 · Lo que debo tener claro', 'Líneas artísticas', 'Partitura de líneas', 'Papel y lápices de color', 'Asigna a cada línea un sonido o emoción y crea una composición que un compañero pueda interpretar.'),
    activity('Unidad 2 · Lo que debo tener claro', 'Sanjuanero de la región del Tolima Grande', 'Vestuario en movimiento', 'Papel, colores y música opcional', 'Dibuja una pareja de baile en movimiento; representa el ritmo con líneas y consulta una fuente sobre el traje.'),
    activity('Unidad 3 · Conceptos y técnicas de dibujo', 'Cuento: Lo mismo pero distinto', 'Dos versiones de un lugar', 'Papel y lápices', 'Dibuja el mismo lugar de día y de noche; compara qué formas y detalles hacen que se sienta distinto.'),
    activity('Unidad 3 · Conceptos y técnicas de dibujo', 'Las formas planas', 'Collage de planos', 'Papeles de colores', 'Combina planos geométricos y orgánicos; organiza figura y fondo para crear profundidad.'),
    activity('Unidad 3 · Conceptos y técnicas de dibujo', 'Los estilos artísticos', 'Un tema, tres estilos', 'Papel y colores', 'Representa un mismo objeto con tres tratamientos gráficos; conversa sobre cómo cambia la sensación.'),
    activity('Unidad 3 · Conceptos y técnicas de dibujo', 'Las formas tridimensionales', 'De plano a volumen', 'Cartulina y cinta de papel', 'Pliega una plantilla para construir un cuerpo geométrico; dibuja sus caras antes de armarlo.'),
    activity('Unidad 3 · Conceptos y técnicas de dibujo', 'Los planos saltan del papel', 'Escena emergente', 'Cartulina, tijeras escolares y pegante', 'Haz cortes y pliegues simples con acompañamiento adulto para levantar figuras; coloca una escena en primer y segundo plano.'),
    activity('Unidad 3 · Conceptos y técnicas de dibujo', 'Taller: Arte con relieve', 'Paisaje táctil', 'Cartón y retazos limpios', 'Crea un relieve pegando materiales reutilizados; describe con palabras o tacto sus diferentes superficies.'),
    activity('Unidad 3 · Conceptos y técnicas de dibujo', 'Centro Histórico de Santa Cruz de Mompox', 'Ventanas de Mompox', 'Papel y lápices', 'Observa fotografías del centro histórico y dibuja una fachada; destaca un detalle arquitectónico y su valor patrimonial.'),
    activity('Unidad 4 · Qué divertidos son los colores', 'Amplío mis conocimientos', 'Escala de color', 'Lápices de color', 'Ordena tonos de claro a oscuro usando presión distinta; compara el efecto de cada gradación.'),
    activity('Unidad 4 · Qué divertidos son los colores', 'Mis tres nuevos amigos: ¡Bienvenidos!', 'Mezclas de bienvenida', 'Témperas primarias y pincel', 'Mezcla parejas de colores primarios en pequeñas cantidades; registra qué color nuevo apareció.'),
    activity('Unidad 4 · Qué divertidos son los colores', 'Las pinturas', 'Muestrario de pintura', 'Témperas lavables y papel', 'Prueba pintura espesa, diluida y aplicada con distinta presión; elige una para comunicar una sensación.'),
    activity('Unidad 4 · Qué divertidos son los colores', 'Los pinceles', 'Trazos de pincel', 'Pinceles de varios tamaños y témpera', 'Realiza líneas finas, anchas y curvas con distintos pinceles; cuida y limpia cada herramienta al terminar.'),
    activity('Unidad 4 · Qué divertidos son los colores', 'Ejercicios de aprestamiento con pinceles', 'Calentamiento de pincel', 'Pincel, pintura lavable y papel', 'Practica puntos, ondas, espirales y cambios de presión en una hoja de ensayo antes de crear.'),
    activity('Unidad 4 · Qué divertidos son los colores', 'Rellenos o parches', 'Color parejo por zonas', 'Papel y lápices o pintura', 'Divide una figura en zonas y rellena cada una con trazos ordenados; compara áreas uniformes y texturadas.'),
    activity('Unidad 4 · Qué divertidos son los colores', 'Aplicar pinturas con otras herramientas', 'Sellos de textura', 'Esponja limpia, cartón y témpera', 'Prueba sellos hechos con esponja o cartón; compón una imagen y nombra la textura creada por cada herramienta.'),
    activity('Unidad 4 · Qué divertidos son los colores', 'Piet Mondrian', 'Cuadrícula de color', 'Regla, papel y colores', 'Observa cómo se organizan líneas y planos de color en una obra de Mondrian; crea una composición original con equilibrio.'),
    activity('Unidad 4 · Qué divertidos son los colores', 'Parque Arqueológico de San Agustín', 'Guardianes del patrimonio', 'Papel y colores', 'Dibuja una escultura a partir de una imagen de referencia; escribe una acción para proteger el patrimonio arqueológico.'),
    activity('Complemento local · Barranquilla', 'Carnaval de Barranquilla y memoria colectiva', 'Comparsa de formas', 'Cartón reutilizado y colores', 'Diseña un personaje propio inspirado en el Carnaval y explica qué historia barranquillera podría contar.', true),
    activity('Complemento local · Barranquilla', 'Cumbia, mapalé y movimiento', 'Líneas que bailan en pareja', 'Papel, lápices y música opcional', 'Compara dos ritmos con líneas y siluetas; respeta sus diferencias y comparte qué movimiento observaste.', true),
    activity('Complemento local · Barranquilla', 'Arte público y convivencia', 'Mural de acuerdos', 'Papel grande y marcadores', 'En equipo, ilustren un acuerdo para cuidar un espacio común; cada aporte debe poder verse y escucharse.', true),
    activity('Complemento local · Barranquilla', 'Diversidad e inclusión', 'Texturas que se sienten', 'Papeles, telas y cartón reutilizado', 'Crea una composición táctil con materiales seguros; permite describirla visualmente, oralmente o mediante el tacto.', true),
  ],
  3: [
    activity('Unidad 1 · Sentir el arte', 'Composición con líneas', 'Paisaje de líneas', 'Papel y lápices', 'Combina líneas para representar un paisaje; usa dirección y grosor para diferenciar zonas.'),
    activity('Unidad 1 · Sentir el arte', 'El volumen de las cosas', 'Luces y sombras', 'Objeto sencillo, papel y lápiz', 'Observa un objeto bajo una luz segura y añade sombras suaves para sugerir volumen; indica de dónde viene la luz.'),
    activity('Unidad 1 · Sentir el arte', 'Observa la naturaleza', 'Bitácora de formas naturales', 'Hoja de registro y lápiz', 'Observa sin arrancar elementos; dibuja formas y texturas de tres hallazgos y anota dónde los viste.'),
    activity('Unidad 1 · Sentir el arte', 'Creo con elementos de la naturaleza', 'Composición efímera', 'Hojas caídas, semillas sueltas y papel', 'Organiza elementos encontrados en el suelo en una composición temporal; fotografíala o dibújala y devuélvelos al lugar.'),
    activity('Unidad 1 · Sentir el arte', 'El truco de la naturaleza', 'Patrones que se repiten', 'Lupa opcional y papel', 'Busca repeticiones o simetrías en una hoja, concha o flor sin recolectarla; crea un patrón inspirado en lo observado.'),
    activity('Unidad 1 · Sentir el arte', 'Festival de la Leyenda Vallenata', 'Historia en cuatro viñetas', 'Papel y colores', 'Cuenta en cuatro imágenes una historia inspirada en el vallenato; marca el ritmo con líneas o patrones.'),
    activity('Unidad 1 · Sentir el arte', 'Compromiso con la naturaleza', 'Afiche por un entorno sano', 'Papel reutilizado y marcadores', 'Diseña un afiche con un problema ambiental cercano y una acción posible; preséntalo con un mensaje claro.'),
    activity('Unidad 1 · Sentir el arte', 'Composición con la naturaleza', 'Un paisaje con formas naturales', 'Papel y lápices de color', 'Combina formas, texturas y volúmenes observados en la naturaleza para crear un paisaje; explica cómo representarías cada elemento sin recolectarlo.'),
    activity('Unidad 2 · Dibujo, formas y figuras', 'Los planos', 'Paisaje por planos', 'Papel y lápices', 'Organiza cielo, fondo, plano medio y primer plano; cambia tamaño y detalle para sugerir distancia.'),
    activity('Unidad 2 · Dibujo, formas y figuras', 'Arte figurativo', 'Objeto reconocible', 'Papel y lápiz', 'Dibuja un objeto del entorno cuidando sus rasgos principales; pide a un compañero que lo identifique.'),
    activity('Unidad 2 · Dibujo, formas y figuras', 'Dibujar con formas', 'Retrato con formas', 'Papel y figuras recortadas', 'Construye un retrato con formas geométricas y orgánicas; ajusta proporciones y posiciones antes de pegar.'),
    activity('Unidad 2 · Dibujo, formas y figuras', 'Relación espacial', '¿Qué está delante?', 'Tres objetos y papel', 'Organiza objetos a distintas distancias y dibújalos; representa cuál está adelante, detrás y al lado.'),
    activity('Unidad 2 · Dibujo, formas y figuras', 'Aplicaciones: el tamaño', 'Grande cerca, pequeño lejos', 'Papel y lápiz', 'Dibuja objetos iguales a diferentes tamaños para sugerir distancia; compara con lo que observas en el aula.'),
    activity('Unidad 2 · Dibujo, formas y figuras', 'Aplicaciones: distancia, dirección y atributos', 'Mapa ilustrado del recorrido', 'Papel, lápiz y regla', 'Dibuja un recorrido conocido con flechas y referencias; incorpora tamaño, dirección y detalles que orienten.'),
    activity('Unidad 2 · Dibujo, formas y figuras', 'Planos visuales', 'Tres planos, una escena', 'Papel y colores', 'Representa una escena en primer plano, plano medio y fondo; diferencia cada zona con tamaño y contraste.'),
    activity('Unidad 2 · Dibujo, formas y figuras', 'Aplicación de las relaciones espaciales', 'Dibujo desde otra mirada', 'Papel y lápices', 'Dibuja un espacio desde dos puntos de vista distintos; compara cómo cambian las posiciones.'),
    activity('Unidad 2 · Dibujo, formas y figuras', 'Cumbia y Mapalé del Litoral Atlántico', 'Danza en siluetas', 'Papel y colores', 'Representa una postura de cada danza con líneas de movimiento; consulta y nombra una diferencia cultural.'),
    activity('Unidad 2 · Dibujo, formas y figuras', 'Queremos ver tus obras', 'Presentación de artista', 'Una obra propia y tarjeta', 'Elige una obra, ponle título y explica qué decisión visual te ayudó a comunicar mejor.'),
    activity('Unidad 3 · Los colores se multiplican', 'Lo que debo saber del color', 'Rueda de colores conocida', 'Papel y colores', 'Organiza colores que ya conoces y señala cuáles son primarios y secundarios; explica tu clasificación.'),
    activity('Unidad 3 · Los colores se multiplican', '¿Nuevos colores?', 'Laboratorio de mezclas', 'Témperas lavables y pincel', 'Mezcla pequeñas cantidades de primarios; registra proporciones y compara los resultados obtenidos.'),
    activity('Unidad 3 · Los colores se multiplican', 'Colores terciarios o intermedios', 'Escala entre dos colores', 'Lápices o témperas', 'Crea tonos intermedios entre un primario y un secundario; organiza la transición de forma gradual.'),
    activity('Unidad 3 · Los colores se multiplican', 'Taller: El círculo cromático', 'Círculo cromático personal', 'Papel, compás opcional y colores', 'Divide un círculo en secciones y ubica colores según sus mezclas; marca pares que contrasten.'),
    activity('Unidad 3 · Los colores se multiplican', 'Los lápices de color', 'Capas y presión', 'Lápices de colores', 'Colorea una forma con presión suave, media y fuerte; superpone dos colores y observa el efecto.'),
    activity('Unidad 3 · Los colores se multiplican', 'Dibujar con los lápices de color', 'Paisaje cromático', 'Lápices de color y papel', 'Dibuja un paisaje y aplica mezcla por capas para crear volumen o atmósfera sin dejar zonas descuidadas.'),
    activity('Unidad 3 · Los colores se multiplican', 'Artesanía tradicional y contemporánea', 'Patrón artesanal reinventado', 'Papel y colores', 'Observa un patrón artesanal en una fuente autorizada; crea una versión propia y reconoce su procedencia.'),
    activity('Unidad 4 · Aprendo técnicas de dibujo', 'Con qué cuento', 'Herramienta para cada trazo', 'Lápiz, regla y compás escolar', 'Prueba cómo cambia un dibujo con cada instrumento; elige la herramienta más adecuada para una forma.'),
    activity('Unidad 4 · Aprendo técnicas de dibujo', 'Instrumentos de precisión', 'Trazos medidos', 'Regla y escuadra', 'Construye líneas paralelas y perpendiculares con regla y escuadra; transforma la estructura en una imagen.'),
    activity('Unidad 4 · Aprendo técnicas de dibujo', 'El compás', 'Roseta geométrica', 'Compás escolar y papel', 'Con acompañamiento, traza círculos de distintos radios con el compás; repite centros para formar una roseta.'),
    activity('Unidad 4 · Aprendo técnicas de dibujo', 'Instrumentos de precisión en el dibujo artístico', 'Diseño preciso y libre', 'Regla, escuadra, compás y lápices', 'Combina una estructura geométrica precisa con detalles dibujados a mano; compara ambos tipos de trazo.'),
    activity('Unidad 4 · Aprendo técnicas de dibujo', 'Dibujar objetos cotidianos', 'Bodegón de aula', 'Dos objetos seguros y papel', 'Organiza dos objetos, observa sus proporciones y dibújalos; marca las formas básicas que reconoces.'),
    activity('Unidad 4 · Aprendo técnicas de dibujo', 'Qué dicen los objetos', 'Objeto con otra historia', 'Objeto cotidiano y papel', 'Elige un objeto y cambia su contexto en el dibujo para contar otra historia; explica la transformación.'),
    activity('Unidad 4 · Aprendo técnicas de dibujo', 'Taller: Creatividad con objetos cotidianos', 'Escultura de objetos reutilizados', 'Cartón y envases limpios', 'Une piezas limpias con cinta para crear una escultura; ponle título y describe su equilibrio y volumen.'),
    activity('Unidad 4 · Aprendo técnicas de dibujo', 'Santa Fe de Antioquia', 'Arquitectura en líneas', 'Papel y lápices', 'Observa imágenes de arquitectura patrimonial; representa una fachada y destaca líneas, formas y materiales visibles.'),
    activity('Complemento local · Barranquilla', 'Patrimonio del Carnaval', 'Diseño de un elemento de comparsa', 'Cartón, colores y materiales reutilizados', 'Diseña un accesorio de comparsa en papel; explica qué tradición inspira la forma y cómo reutilizaste materiales.', true),
    activity('Complemento local · Barranquilla', 'Cumbia y Mapalé: cuerpo y espacio', 'Coreografía dibujada', 'Papel y lápices de color', 'Dibuja una secuencia de tres movimientos; usa flechas y líneas para mostrar dirección y relación entre bailarines.', true),
    activity('Complemento local · Barranquilla', 'Paisaje del río y la ciudad', 'Río, barrio y horizonte', 'Papel y colores', 'Compón una escena del río Magdalena o un espacio local en tres planos; incorpora una acción para cuidar el agua.', true),
    activity('Complemento local · Barranquilla', 'Diálogo y apreciación', 'Círculo de observación', 'Una creación por estudiante', 'En parejas, describan primero lo que observan y luego lo que sienten; formulen una pregunta amable sobre la obra.', true),
  ],
}

export const curriculumGames = {
  1: [
    game('Unidad 1 · Qué divertido es el arte', 'Bingo de huellas y texturas', 'Descubrir texturas y formas en los objetos.', 'Tarjetas de papel y objetos seguros con distintas texturas', 'Dibujen una textura en su tarjeta. Por turnos, describan una superficie sin decir su nombre. Si alguien tiene una huella parecida, la marca. Cuando completen la tarjeta, cuenten qué texturas encontraron.'),
    game('Unidad 2 · El inicio de todo', 'Relevo de puntos y líneas', 'Crear formas y dibujos con puntos y líneas.', 'Papel y marcadores', 'En equipo, cada persona agrega un punto o una línea al dibujo. Al final, miren la figura que apareció e imaginen qué podría ser.'),
    game('Unidad 3 · Tu mundo toma forma', 'Detectives geométricos', 'Encontrar figuras geométricas en el entorno.', 'Tarjetas con figuras y hoja de registro', 'Busquen en el aula objetos con forma de círculo, triángulo, cuadrado o rectángulo. Dibujen lo que encontraron y cuenten cuáles figuras vieron.'),
    game('Unidad 4 · Llegó el color', 'Adivina el color primario', 'Reconocer los colores amarillo, azul y rojo.', 'Tarjetas amarillas, azules y rojas', 'Una persona piensa en un objeto o una emoción y da pistas sin decir el color. Los demás eligen una tarjeta de color. Luego cuenten por qué la escogieron y cambien de turno.'),
  ],
  2: [
    game('Unidad 1 · Qué divertido es el arte', 'Memoria de elementos visuales', 'Relacionar punto, línea, plano, forma, volumen, textura y color.', 'Tarjetas con nombres, dibujos y texturas', 'Pongan las tarjetas boca abajo. Cada jugador voltea dos y conserva la pareja si el concepto coincide con su dibujo o ejemplo; al final, expliquen cómo aparece en una composición.'),
    game('Unidad 2 · Lo que debo tener claro', 'Adivina la línea', 'Usar dirección, contorno, silueta y movimiento para comunicar ideas.', 'Papel y lápices', 'Por turnos, dibujen una palabra usando solo líneas rectas, curvas o quebradas. El equipo adivina y nombra qué tipo de línea ayudó a reconocerla; pueden sumar una ronda de líneas con regla.'),
    game('Unidad 3 · Conceptos y técnicas de dibujo', 'Reto de formas en relieve', 'Distinguir formas planas, tridimensionales, planos y texturas.', 'Cartulina, papel reutilizado y cinta', 'Cada equipo recibe una forma plana y la transforma en una figura con volumen o relieve. Los demás identifican qué partes están adelante, cuáles atrás y qué textura se añadió.'),
    game('Unidad 4 · Qué divertidos son los colores', 'Estaciones de color y pincel', 'Explorar mezclas, tonos, pinceles y herramientas de pintura.', 'Pinturas lavables, pinceles y esponjas', 'Pasen por estaciones para mezclar dos colores, crear un tono claro u oscuro y probar un trazo con pincel o esponja. Gana el equipo que complete el recorrido y describa cada resultado.'),
  ],
  3: [
    game('Unidad 1 · Sentir el arte', 'Safari de formas y sombras', 'Observar elementos naturales, texturas, volumen y luz.', 'Hoja de registro y lápiz', 'Sin arrancar ni tocar plantas o animales, busquen tres formas o patrones en el entorno. Dibujen uno con una sombra que indique de dónde viene la luz y compartan una acción para cuidar ese espacio.'),
    game('Unidad 2 · Dibujo, formas y figuras', 'Mapa humano de posiciones', 'Representar planos, tamaños, distancias, direcciones y relaciones espaciales.', 'Objetos del aula y tarjetas con consignas', 'Una persona ubica tres objetos siguiendo una consigna como “cerca, detrás y a la izquierda”. El equipo dibuja el mapa desde otro punto de vista y compara posiciones, tamaños y planos.'),
    game('Unidad 3 · Los colores se multiplican', 'Dominó de mezclas', 'Conectar colores primarios, secundarios e intermedios.', 'Tarjetas de colores y lápices', 'Unan tarjetas por una mezcla posible: un color primario con su combinación, o dos tonos que formen una transición. Para colocar cada ficha, expliquen la mezcla o dibujen el color intermedio.'),
    game('Unidad 4 · Aprendo técnicas de dibujo', 'Reto de herramientas precisas', 'Elegir instrumentos de dibujo y combinarlos con observación de objetos.', 'Lápiz, regla, escuadra, compás y objetos seguros', 'Saquen una consigna por turno: trazar una línea paralela, crear círculos con compás o dibujar un objeto observado. El grupo identifica qué herramienta conviene y verifica el resultado con respeto.'),
  ],
}

const digitalPeriodForUnit = (unit) => {
  if (unit.startsWith('Unidad 1') || unit.startsWith('Unidad 2')) return 1
  if (unit.startsWith('Unidad 3')) return 2
  return 3
}

const drawingInstructionForGrade = (grade) => ({
  1: 'Dibújalo en el lienzo con tus propias ideas.',
  2: 'Representa tu idea en el lienzo con un dibujo propio.',
  3: 'Desarrolla la propuesta en el lienzo mediante un dibujo original.',
}[grade])

const digitalPromptForTopic = (grade, unit, topic) => {
  const prompts = {
    1: [
      [
        `¿Qué historia te cuenta «${topic}»?`,
        `¿Qué colores y formas te recuerda «${topic}»?`,
        `¿Qué parte de «${topic}» te gustaría imaginar?`,
        `¿Qué significa «${topic}» para ti?`,
      ],
      [
        `¿En qué podría convertirse «${topic}»?`,
        `¿Qué recorrido imaginas para «${topic}»?`,
        `¿Qué historia pueden contar «${topic}»?`,
        `¿Qué formas aparecen al pensar en «${topic}»?`,
      ],
      [
        `¿Qué mundo imaginas con «${topic}»?`,
        `¿Qué figuras podrían formar «${topic}»?`,
        `¿Qué personaje te inspira «${topic}»?`,
        `¿Cómo sería «${topic}» en tu imaginación?`,
      ],
      [
        `¿Qué historia te sugieren los colores de «${topic}»?`,
        `¿Qué ambiente imaginas al pensar en «${topic}»?`,
        `¿Qué colores elegirías para expresar «${topic}»?`,
        `¿Qué sientes al imaginar «${topic}»?`,
      ],
    ],
    2: [
      [
        `¿Qué composición te inspira «${topic}»?`,
        `¿Qué formas se encuentran en «${topic}»?`,
        `¿Cómo representarías «${topic}» a tu manera?`,
        `¿Qué equilibrio imaginas para «${topic}»?`,
      ],
      [
        `¿Qué ritmo tienen para ti «${topic}»?`,
        `¿Qué formas aparecen cuando piensas en «${topic}»?`,
        `¿Qué movimiento imaginas en «${topic}»?`,
        `¿Qué te gustaría contar sobre «${topic}»?`,
      ],
      [
        `¿Qué forma podría tomar «${topic}» en tu dibujo?`,
        `¿Qué detalle de «${topic}» despierta tu curiosidad?`,
        `¿Cómo imaginarías «${topic}» desde otro punto de vista?`,
        `¿Qué sensación te deja «${topic}»?`,
      ],
      [
        `¿Qué colores te vienen a la mente con «${topic}»?`,
        `¿Qué sensación expresarías con «${topic}»?`,
        `¿Qué cambios imaginas en «${topic}» al usar distintos colores?`,
        `¿Qué historia podrían contar los colores de «${topic}»?`,
      ],
    ],
    3: [
      [
        `¿Qué detalle de «${topic}» te gustaría guardar en una imagen?`,
        `¿Qué sensaciones te despierta «${topic}»?`,
        `¿Qué aspecto de «${topic}» te sorprende?`,
        `¿Cómo contarías «${topic}» desde tu propia mirada?`,
      ],
      [
        `¿Qué lugar imaginas al pensar en «${topic}»?`,
        `¿Qué queda cerca o lejos en tu versión de «${topic}»?`,
        `¿Desde dónde mirarías «${topic}»?`,
        `¿Qué historia podría ocurrir en «${topic}»?`,
      ],
      [
        `¿Qué colores relacionas con «${topic}»?`,
        `¿Qué contraste descubres al pensar en «${topic}»?`,
        `¿Qué sensación tendría «${topic}» con otros colores?`,
        `¿Qué combinaciones te gustaría explorar en «${topic}»?`,
      ],
      [
        `¿Qué objeto te gustaría imaginar a partir de «${topic}»?`,
        `¿Qué encuentro entre precisión e imaginación te sugiere «${topic}»?`,
        `¿Qué formas reconoces en «${topic}»?`,
        `¿Qué crearías con la idea de «${topic}»?`,
      ],
    ],
  }
  const unitNumber = Number(unit.match(/^Unidad (\d+)/)?.[1] ?? 1)
  const topicHash = [...topic].reduce((hash, character) => hash + character.charCodeAt(0), 0)
  const unitPrompts = prompts[grade][unitNumber - 1]
  return `${unitPrompts[topicHash % unitPrompts.length]} ${drawingInstructionForGrade(grade)}`
}

const digitalPractice = (unit, topic, title, instructions, uploadRequired = true) => ({
  id: `${unit}::${topic}::${title}`,
  unit,
  topic,
  title,
  instructions,
  uploadRequired,
  period: digitalPeriodForUnit(unit),
})

const featuredDigitalPractices = {
  1: [
    digitalPractice('Unidad 1 · Qué divertido es el arte', 'Mis manos son mágicas', 'Un jardín imaginado', '¿Qué formas, colores o recuerdos podría guardar un jardín creado por ti? Cada trazo puede contar algo distinto sobre tu mundo.'),
    digitalPractice('Unidad 2 · El inicio de todo', 'El punto y la línea', 'El viaje de los puntos', '¿En qué podrían convertirse un punto y una línea cuando se encuentran? El lienzo queda abierto a las historias que aparezcan en tu imaginación.'),
    digitalPractice('Unidad 3 · Tu mundo toma forma', 'Figuras geométricas', 'Una ciudad posible', '¿Cómo sería una ciudad vista con tus ojos? Las figuras pueden parecer edificios, habitantes o algo que nadie haya imaginado todavía.'),
    digitalPractice('Unidad 4 · Llegó el color', 'Los colores primarios', 'Un paisaje a todo color', '¿Qué ambiente nace al encontrarse el amarillo, el azul y el rojo? Tu paisaje puede parecerse a un lugar conocido o existir solo en tu imaginación.'),
    digitalPractice('Unidad 2 · El inicio de todo', 'Dibujo libre con puntos y líneas', 'Una historia dibujada', '¿Qué historia podría vivir en tu dibujo? Puntos y líneas pueden tomar cualquier forma cuando encuentran una idea propia.', true),
    digitalPractice('Unidad 4 · Llegó el color', 'Creación libre con colores', 'Un mundo de tres colores', '¿Qué mundo aparece cuando el amarillo, el azul y el rojo cuentan algo juntos? Tu elección de colores puede expresar una historia única.', true),
  ],
  2: [
    digitalPractice('Unidad 1 · Qué divertido es el arte', 'Composición con elementos básicos', 'Un universo de formas', '¿Qué relación podrían tener los puntos, las líneas y las formas en una obra tuya? El espacio está disponible para probar ideas y encontrar un equilibrio propio.'),
    digitalPractice('Unidad 2 · Lo que debo tener claro', 'Contorno, silueta y movimiento de líneas', 'Siluetas en movimiento', '¿Qué personaje o criatura podría aparecer entre una silueta y sus líneas? Una curva puede sugerir movimiento y también dejar espacio para la sorpresa.'),
    digitalPractice('Unidad 3 · Conceptos y técnicas de dibujo', 'Formas tridimensionales y relieve', 'Volúmenes imaginados', '¿Qué objeto podría tener volumen en tu mundo? Las caras y las sombras pueden verse de muchas maneras según la historia que quieras imaginar.'),
    digitalPractice('Unidad 4 · Qué divertidos son los colores', 'Mezcla de colores y pinceles', 'Encuentros de color y pincel', '¿Qué cambios aparecen cuando se encuentran los colores y los trazos? El lienzo puede convertirse en un pequeño laboratorio de descubrimientos personales.'),
    digitalPractice('Unidad 1 · Qué divertido es el arte', 'Composición libre', 'Una obra con estilo propio', '¿Qué formas, ritmos y colores se sienten tuyos? Este espacio celebra las ideas distintas y las decisiones que hacen única una obra.', true),
    digitalPractice('Unidad 3 · Conceptos y técnicas de dibujo', 'Dibujo libre con volumen', 'Un objeto con presencia', '¿Qué objeto cotidiano o fantástico podría parecer tener volumen en tu obra? La luz, las formas y tu imaginación pueden darle una presencia propia.', true),
  ],
  3: [
    digitalPractice('Unidad 1 · Sentir el arte', 'Naturaleza, volumen y luz', 'Paisajes que respiran', '¿Qué sensaciones despiertan las formas, texturas y luces de la naturaleza? Una imagen puede guardar tu manera personal de mirar y cuidar el entorno.'),
    digitalPractice('Unidad 2 · Dibujo, formas y figuras', 'Planos y relaciones espaciales', 'Un lugar con profundidad', '¿Cómo se siente un lugar cuando algunas cosas parecen cerca y otras lejanas? Tu escena puede jugar con el espacio de la forma que prefieras.'),
    digitalPractice('Unidad 3 · Los colores se multiplican', 'Círculo cromático y mezclas', 'Colores en conversación', 'En el círculo cromático, amarillo, rojo y azul son primarios; entre ellos aparecen naranja, violeta y verde, formados al mezclar primarios vecinos. ¿Qué relaciones, contrastes o sensaciones despierta este orden en ti?'),
    digitalPractice('Unidad 4 · Aprendo técnicas de dibujo', 'Regla, compás y objetos cotidianos', 'Precisión con un toque personal', '¿Qué puede surgir al acercar las formas precisas a un objeto cotidiano? La combinación puede ser exacta, inesperada o un poco de ambas.'),
    digitalPractice('Unidad 2 · Dibujo, formas y figuras', 'Composición libre en planos', 'Un lugar desde mi mirada', '¿Qué lugar te gustaría compartir con otras personas? Sus distancias, formas y detalles pueden contar cómo lo ves tú.', true),
    digitalPractice('Unidad 3 · Los colores se multiplican', 'Creación libre de color', 'Colores que cuentan', '¿Qué historia pueden contar los colores cuando se encuentran? Cada contraste o mezcla puede expresar una idea distinta.', true),
  ],
}

export const curriculumDigitalPractices = Object.fromEntries(
  Object.entries(curriculumActivities).map(([grade, activities]) => {
    const bookTopicChallenges = activities
      .filter((item) => !item.extra && item.unit.startsWith('Unidad'))
      .map((item) => ({
        id: `${item.unit}::${item.topic}::${item.title}`,
        unit: item.unit,
        topic: item.topic,
        title: item.title,
        instructions: digitalPromptForTopic(Number(grade), item.unit, item.topic),
        uploadRequired: true,
        period: digitalPeriodForUnit(item.unit),
      }))

    const gradeSpecificPractices = featuredDigitalPractices[grade].map((practice) => ({
      ...practice,
      instructions: `${practice.instructions} ${drawingInstructionForGrade(Number(grade))}`,
    }))

    return [grade, [...bookTopicChallenges, ...gradeSpecificPractices]]
  }),
)
