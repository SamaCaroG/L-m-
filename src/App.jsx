import { useEffect, useRef, useState } from 'react'
import './App.css'

const curriculumData = {
  1: {
    badge: 'Procesos Artísticos A • Grado 1°',
    title: '¡Puntos, Líneas y Colores Puros!',
    desc: 'Descubre el origen del dibujo, explora los 3 colores primarios y celebra el Carnaval de Negros y Blancos.',
    textos: [
      {
        tag: 'Unidad 1',
        color: '#4BD166',
        title: "Cuento: 'Soy un Punto'",
        summary:
          '¡Hola! Soy un punto. Aunque me ves pequeño, soy el origen de todos los dibujos. Si camino sin parar, creo líneas.',
        fullText:
          'Hola, soy un punto. Aunque me ves pequeño, soy el inicio de todo el arte. Si me mueves en el papel, creo líneas rectas, curvas y zig-zags. Cuando muchos puntos nos juntamos, creamos la técnica del Puntillismo. ¡Usa tus colores para hacer magia!',
      },
      {
        tag: 'Unidad 2',
        color: '#03658C',
        title: 'Los Colores Primarios',
        summary:
          'El Amarillo (Sol), el Azul (Mar) y el Rojo (Corazón) son colores reyes puros que no se mezclan de otros.',
        fullText:
          'En el reino de LÜMØ existen tres colores especiales: Amarillo como el Sol radiante, Azul como el vasto océano y Rojo como la manzana madura. Se llaman Primarios porque son puros y habitan en la naturaleza.',
      },
      {
        tag: 'Patrimonio',
        color: '#8549BA',
        title: 'Carnaval de Negros y Blancos',
        summary:
          'En Pasto, Colombia, pintamos nuestros rostros con cosméticos artísticos y elaboramos carrozas multicolores.',
        fullText:
          'El Carnaval de Negros y Blancos es una gran fiesta en Colombia. Las familias usan pinturas faciales y crean gigantescas carrozas de papel maché para celebrar la unión y la diversidad de nuestra cultura.',
      },
    ],
    videos: [
      {
        id: '3v3H_3BOHL8',
        title: '1. Colores Primarios para 1°',
        desc: 'Aprende a identificar el Amarillo, Azul y Rojo en tu entorno.',
      },
      {
        id: '2B4_S2v1C0A',
        title: '2. Puntos y Líneas Divertidas',
        desc: 'Descubre cómo las líneas rectas y curvas forman objetos.',
      },
      {
        id: 'X4uUf9z8S2Y',
        title: '3. Dibujando Figuras Básicas',
        desc: 'Crea casas y soles con círculos y cuadrados.',
      },
    ],
    game: {
      title: 'Identifica los Colores Primarios',
      instructions:
        'Haz clic únicamente en los 3 Colores PRIMARIOS (Amarillo, Azul, Rojo):',
      options: [
        { text: 'Amarillo', isCorrect: true, className: 'option-yellow' },
        { text: 'Verde', isCorrect: false, className: 'option-green' },
        { text: 'Azul', isCorrect: true, className: 'option-blue' },
        { text: 'Morado', isCorrect: false, className: 'option-purple' },
        { text: 'Rojo', isCorrect: true, className: 'option-red' },
        { text: 'Naranja', isCorrect: false, className: 'option-orange' },
      ],
    },
    quiz: {
      question:
        '¿Qué elemento gráfico surge cuando un punto se mueve en línea continua?',
      options: [
        { text: 'A) Una Línea', isCorrect: true },
        { text: 'B) Un Triángulo', isCorrect: false },
        { text: 'C) Una Mancha', isCorrect: false },
      ],
    },
  },
  2: {
    badge: 'Procesos Artísticos B • Grado 2°',
    title: '¡Mezclas Mágicas y Texturas!',
    desc: 'Crea colores secundarios, explora el puntillismo detallado y la belleza colonial de Cartagena.',
    textos: [
      {
        tag: 'Unidad 1',
        color: '#4BD166',
        title: 'Nacimiento de los Secundarios',
        summary:
          'Cuando los colores primarios se dan un abrazo, nacen el Verde, el Naranja y el Violeta.',
        fullText:
          'Un día, el Amarillo y el Azul jugaron juntos y crearon al Verde de las plantas. El Azul y el Rojo crearon al Violeta de las uvas. Y el Rojo con el Amarillo crearon al Naranja de las mandarinas. ¡Así nacieron los Secundarios!',
      },
      {
        tag: 'Unidad 2',
        color: '#03658C',
        title: 'Texturas Visuales y Puntillismo',
        summary:
          'Los artistas pueden hacer que un dibujo parezca suave, rugoso o brillante usando pequeños puntos.',
        fullText:
          'El Puntillismo es una técnica donde no usas pinceladas largas, sino miles de puntitos juntos. Si pones puntos amarillos muy cerca de puntos azules, ¡tu ojo verá verde desde lejos!',
      },
      {
        tag: 'Patrimonio',
        color: '#8549BA',
        title: 'Las Murallas de Cartagena',
        summary:
          'Formas geométricas tridimensionales y arquitectura colonial que protegen la hermosa costa del Caribe.',
        fullText:
          'En Cartagena de Indias encontramos muros de piedra y fortificaciones construidas hace siglos. Sus balcones de madera y arcos geométricos son un tesoro histórico del patrimonio colombiano.',
      },
    ],
    videos: [
      {
        id: 'pS9d3JCE3R0',
        title: '1. Técnica del Puntillismo 2°',
        desc: 'Crea paisajes con textura usando marcadores o hisopos.',
      },
      {
        id: '3v3H_3BOHL8',
        title: '2. Mezcla de Colores Secundarios',
        desc: 'Tutorial interactivo de combinación de pinturas.',
      },
      {
        id: 'X4uUf9z8S2Y',
        title: '3. Composición con Formas',
        desc: 'Ensambla figuras secundarias e ilustraciones complejas.',
      },
    ],
    game: {
      title: 'Encuentra los Colores SECUNDARIOS',
      instructions:
        'Haz clic en los colores que resultan de mezclar dos primarios (Verde, Naranja, Violeta):',
      options: [
        { text: 'Verde', isCorrect: true, className: 'option-green' },
        { text: 'Amarillo', isCorrect: false, className: 'option-yellow' },
        { text: 'Naranja', isCorrect: true, className: 'option-orange' },
        { text: 'Azul', isCorrect: false, className: 'option-blue' },
        { text: 'Violeta', isCorrect: true, className: 'option-purple' },
        { text: 'Rojo', isCorrect: false, className: 'option-red' },
      ],
    },
    quiz: {
      question:
        '¿Qué color secundario obtienes si mezclas pintura Amarilla y Azul?',
      options: [
        { text: 'A) Naranja', isCorrect: false },
        { text: 'B) Verde', isCorrect: true },
        { text: 'C) Violeta', isCorrect: false },
      ],
    },
  },
  3: {
    badge: 'Procesos Artísticos C • Grado 3°',
    title: '¡Luz, Temperatura y Simetría!',
    desc: 'Diferencia colores cálidos y fríos, descubre la perspectiva y la orfebrería del Parque Tayrona.',
    textos: [
      {
        tag: 'Unidad 1',
        color: '#4BD166',
        title: 'Temperatura del Color',
        summary:
          'Los colores nos transmiten sensaciones: Cálidos (fuego/sol) y Fríos (agua/noche).',
        fullText:
          'Los Colores Cálidos (Rojo, Naranja, Amarillo) nos recuerdan al sol, el fuego y la playa. Los Colores Fríos (Azul, Verde, Violeta) nos transmiten la calma del mar, la sombra del bosque y las noches estrelladas.',
      },
      {
        tag: 'Unidad 2',
        color: '#03658C',
        title: 'Simetría y Proporción',
        summary:
          'La simetría ocurre cuando ambos lados de una figura son idénticos, como las alas de una mariposa.',
        fullText:
          'Si trazas una línea imaginaria por la mitad de una mariposa o una hoja, verás que ambos lados coinciden perfectamente. A esto se le llama Simetría y ayuda a equilibrar tus composiciones artísticas.',
      },
      {
        tag: 'Patrimonio',
        color: '#8549BA',
        title: 'Simbolismo Precolombino Tayrona',
        summary:
          'Figuras geométricas sagradas talladas en oro y piedra por nuestros ancestros indígenas.',
        fullText:
          'Los indígenas Tayrona del Caribe colombiano fabricaban hermosas figuras doradas y colgantes con patrones geométricos simétricos. Representaban jaguares, aves y elementos sagrados de la naturaleza.',
      },
    ],
    videos: [
      {
        id: '3v3H_3BOHL8',
        title: '1. Colores Cálidos vs Fríos',
        desc: 'Aprende a transmitir emociones mediante la temperatura cromática.',
      },
      {
        id: '2B4_S2v1C0A',
        title: '2. Dibujo Simétrico y Proporcional',
        desc: 'Construye máscaras y elementos simétricos perfectos.',
      },
      {
        id: 'X4uUf9z8S2Y',
        title: '3. Simbolismo Precolombino',
        desc: 'Tutorial para recrear patrones ancestrales indígenas.',
      },
    ],
    game: {
      title: 'Clasifica los Colores CÁLIDOS',
      instructions:
        'Selecciona los colores que pertenecen a la familia CÁLIDA (Sol y fuego):',
      options: [
        { text: 'Rojo', isCorrect: true, className: 'option-red' },
        { text: 'Azul', isCorrect: false, className: 'option-blue' },
        { text: 'Naranja', isCorrect: true, className: 'option-orange' },
        { text: 'Verde', isCorrect: false, className: 'option-green' },
        { text: 'Amarillo', isCorrect: true, className: 'option-yellow' },
        { text: 'Violeta', isCorrect: false, className: 'option-purple' },
      ],
    },
    quiz: {
      question:
        '¿Qué sensación transmiten los colores Fríos como el Azul y el Verde?',
      options: [
        { text: 'A) Calor y fuego brillante', isCorrect: false },
        { text: 'B) Calma, sombra y frescura', isCorrect: true },
        { text: 'C) Ruido y movimiento rápido', isCorrect: false },
      ],
    },
  },
}

function App() {
  const [currentGrade, setCurrentGrade] = useState(1)
  const [activeTab, setActiveTab] = useState('textos')
  const [tool, setTool] = useState('brush')
  const [brushSize, setBrushSize] = useState(8)
  const [currentColor, setCurrentColor] = useState('#03658C')
  const [selectedVideo, setSelectedVideo] = useState(curriculumData[1].videos[0])
  const [modalText, setModalText] = useState(null)
  const [gameFeedback, setGameFeedback] = useState('')
  const [quizFeedback, setQuizFeedback] = useState('')
  const canvasRef = useRef(null)
  const isDrawingRef = useRef(false)

  const data = curriculumData[currentGrade]

  useEffect(() => {
    setSelectedVideo(data.videos[0])
    setGameFeedback('')
    setQuizFeedback('')
  }, [currentGrade])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const safeWidth = rect.width > 0 ? rect.width : 800
      const safeHeight = rect.height > 0 ? rect.height : 450

      const tempCanvas = document.createElement('canvas')
      tempCanvas.width = canvas.width || safeWidth
      tempCanvas.height = canvas.height || safeHeight
      const tempCtx = tempCanvas.getContext('2d')
      if (canvas.width && canvas.height) {
        tempCtx.drawImage(canvas, 0, 0)
      }

      canvas.width = safeWidth
      canvas.height = safeHeight
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      if (tempCanvas.width && tempCanvas.height) {
        ctx.drawImage(tempCanvas, 0, 0)
      }
      drawStencil()
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [currentGrade, activeTab])

  const drawStencil = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const cx = canvas.width / 2
    const cy = canvas.height / 2

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.strokeStyle = '#d1d5db'
    ctx.lineWidth = 3

    if (currentGrade === 1) {
      ctx.beginPath()
      ctx.arc(cx - 120, cy - 80, 35, 0, Math.PI * 2)
      ctx.stroke()
      ctx.strokeRect(cx - 60, cy - 20, 120, 100)
      ctx.beginPath()
      ctx.moveTo(cx - 80, cy - 20)
      ctx.lineTo(cx, cy - 80)
      ctx.lineTo(cx + 80, cy - 20)
      ctx.closePath()
      ctx.stroke()
    } else if (currentGrade === 2) {
      ctx.beginPath()
      ctx.ellipse(cx, cy, 12, 60, 0, 0, Math.PI * 2)
      ctx.arc(cx - 50, cy - 30, 40, 0, Math.PI * 2)
      ctx.arc(cx + 50, cy - 30, 40, 0, Math.PI * 2)
      ctx.arc(cx - 40, cy + 30, 30, 0, Math.PI * 2)
      ctx.arc(cx + 40, cy + 30, 30, 0, Math.PI * 2)
      ctx.stroke()
    } else if (currentGrade === 3) {
      ctx.strokeRect(cx - 80, cy - 80, 160, 160)
      ctx.beginPath()
      ctx.moveTo(cx, cy - 80)
      ctx.lineTo(cx + 80, cy)
      ctx.lineTo(cx, cy + 80)
      ctx.lineTo(cx - 80, cy)
      ctx.closePath()
      ctx.arc(cx, cy, 30, 0, Math.PI * 2)
      ctx.stroke()
    }
  }

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'es-ES'
      utterance.rate = 0.9
      window.speechSynthesis.speak(utterance)
    }
  }

  const openReadingModal = (title, text) => {
    setModalText({ title, text })
  }

  const closeReadingModal = () => {
    setModalText(null)
    if ('speechSynthesis' in window) window.speechSynthesis.cancel()
  }

  const handleColorGame = (option, isCorrect) => {
    if (isCorrect) {
      setGameFeedback('¡Correcto! Respuesta acertada. 🌟')
      option.classList.add('is-correct')
    } else {
      setGameFeedback('¡Sigue intentando! Observa la teoría del grado.')
      option.classList.add('is-wrong')
    }
  }

  const handleQuiz = (option, isCorrect) => {
    if (isCorrect) {
      setQuizFeedback('¡Excelente respuesta! +10 Puntos LÜMØ 🎉')
      option.classList.add('is-correct')
    } else {
      setQuizFeedback('¡Casi! Revisa las lecturas del grado.')
      option.classList.add('is-wrong')
    }
  }

  const getCanvasPos = (event) => {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    return {
      x: (event.clientX - rect.left) * (canvas.width / rect.width),
      y: (event.clientY - rect.top) * (canvas.height / rect.height),
    }
  }

  const startDrawing = (event) => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    isDrawingRef.current = true
    const pos = getCanvasPos(event)
    ctx.beginPath()
    ctx.moveTo(pos.x, pos.y)
  }

  const draw = (event) => {
    if (!isDrawingRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const pos = getCanvasPos(event)
    ctx.lineWidth = brushSize
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    if (tool === 'eraser') {
      ctx.strokeStyle = '#ffffff'
    } else if (tool === 'pencil') {
      ctx.lineWidth = Math.max(2, brushSize / 2)
      ctx.strokeStyle = currentColor
    } else {
      ctx.strokeStyle = currentColor
    }

    ctx.lineTo(pos.x, pos.y)
    ctx.stroke()
  }

  const stopDrawing = () => {
    isDrawingRef.current = false
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    drawStencil()
  }

  const downloadCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const link = document.createElement('a')
    const username = document.getElementById('usernameInput')?.value || 'Artista'
    link.download = `LUMO_Grado${currentGrade}_${username}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  const stampShape = (shape) => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const cx = canvas.width / 2
    const cy = canvas.height / 2
    ctx.strokeStyle = currentColor
    ctx.lineWidth = brushSize
    ctx.beginPath()

    if (shape === 'circle') {
      ctx.arc(cx, cy, 40, 0, Math.PI * 2)
    } else if (shape === 'square') {
      ctx.rect(cx - 40, cy - 40, 80, 80)
    } else {
      let rotation = (Math.PI / 2) * 3
      const step = Math.PI / 5
      ctx.moveTo(cx, cy - 40)
      for (let i = 0; i < 5; i++) {
        ctx.lineTo(cx + Math.cos(rotation) * 40, cy + Math.sin(rotation) * 40)
        rotation += step
        ctx.lineTo(cx + Math.cos(rotation) * 20, cy + Math.sin(rotation) * 20)
        rotation += step
      }
      ctx.closePath()
    }

    ctx.stroke()
  }

  const handleTouchStart = (event) => {
    event.preventDefault()
    const touch = event.touches[0]
    startDrawing(touch)
  }

  const handleTouchMove = (event) => {
    event.preventDefault()
    const touch = event.touches[0]
    draw(touch)
  }

  return (
    <div className="lumo-app">
      <header className="main-header">
        <div className="header-inner">
          <div className="brand" onClick={() => setActiveTab('textos')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setActiveTab('textos')}>
            <div className="brand-mark">
              <span className="brand-letter crimson">L</span>
              <span className="brand-letter gold">Ü</span>
              <span className="brand-letter green">M</span>
              <span className="brand-letter purple">Ø</span>
              <i className="fa-solid fa-palette brand-icon" />
            </div>
          </div>

          <div className="grade-selector">
            <span className="grade-label hidden-mobile">
              <i className="fa-solid fa-graduation-cap" /> Grado:
            </span>

            {[1, 2, 3].map((grade) => (
              <button
                key={grade}
                type="button"
                className={`grade-btn ${currentGrade === grade ? 'is-active' : ''}`}
                onClick={() => setCurrentGrade(grade)}
              >
                {grade}° <span className="grade-series hidden-mobile">({grade === 1 ? 'Serie A' : grade === 2 ? 'Serie B' : 'Serie C'})</span>
              </button>
            ))}
          </div>

          <div className="profile-box">
            <div className="profile-avatar">
              <i className="fa-solid fa-child" />
            </div>
            <input id="usernameInput" type="text" defaultValue="Artista Junior" />
          </div>
        </div>
      </header>

      <main className="main-shell">
        <div className="hero-banner">
          <div className="hero-glow">LÜMØ</div>
          <div className="hero-content">
            <span className="hero-badge">{data.badge}</span>
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
          </div>
        </div>

        <div className="nav-grid">
          {[
            { id: 'textos', label: 'TEXTOS', subtitle: 'Lecturas y Cuentos', color: 'green', icon: 'fa-book-open' },
            { id: 'videos', label: 'VIDEOS', subtitle: 'Tutoriales Paso a Paso', color: 'gold', icon: 'fa-play' },
            { id: 'actividades', label: 'ACTIVIDADES', subtitle: 'Quizzes y Juegos', color: 'crimson', icon: 'fa-pencil' },
            { id: 'dibujos', label: 'DIBUJOS', subtitle: 'Lienzo y Plantillas', color: 'purple', icon: 'fa-paint-brush' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`nav-tab nav-${tab.color} ${activeTab === tab.id ? 'is-selected' : ''}`}
            >
              <div className="tab-icon-wrap">
                <i className={`fa-solid ${tab.icon}`} />
              </div>
              <span className="nav-title">{tab.label}</span>
              <span className="nav-subtitle">{tab.subtitle}</span>
            </button>
          ))}
        </div>

        <section className={`content-section ${activeTab === 'textos' ? '' : 'hidden'}`}>
          <div className="section-header">
            <div>
              <h2 className="section-title green"><i className="fa-solid fa-book-open" /> Lecturas e Historias</h2>
              <p>Contenidos curriculares de arte con lectura en voz alta (Text-to-Speech).</p>
            </div>
            <span className="section-badge green">Unidades de Grado {currentGrade}°</span>
          </div>
          <div className="card-grid">
            {data.textos.map((reading) => (
              <article key={reading.title} className="reading-card">
                <div className="card-head">
                  <span className="mini-tag" style={{ backgroundColor: reading.color }}>{reading.tag}</span>
                  <button type="button" className="speaker-button" onClick={() => speakText(`${reading.title}. ${reading.summary}`)}>
                    <i className="fa-solid fa-volume-high" />
                  </button>
                </div>
                <h3>{reading.title}</h3>
                <p>{reading.summary}</p>
                <button type="button" className="primary-button" onClick={() => openReadingModal(reading.title, reading.fullText)}>
                  Leer Completo
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className={`content-section ${activeTab === 'videos' ? '' : 'hidden'}`}>
          <div className="section-header">
            <div>
              <h2 className="section-title gold"><i className="fa-solid fa-circle-play" /> Video Tutoriales de Arte</h2>
              <p>Videoclases paso a paso preparadas para el nivel seleccionado.</p>
            </div>
            <span className="section-badge gold">Lecciones Grado {currentGrade}°</span>
          </div>

          <div className="video-layout">
            <div className="video-main">
              <div className="video-frame">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideo.id}?autoplay=0`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="video-meta">
                <h3>{selectedVideo.title}</h3>
                <p>{selectedVideo.desc}</p>
              </div>
            </div>

            <div className="video-playlist">
              <p className="playlist-label">Selecciona una Lección:</p>
              {data.videos.map((video, index) => (
                <button
                  key={video.title}
                  type="button"
                  className={`playlist-item ${selectedVideo.id === video.id ? 'is-active' : ''}`}
                  onClick={() => setSelectedVideo(video)}
                >
                  <span className="playlist-number">{index + 1}</span>
                  <div>
                    <h4>{video.title}</h4>
                    <p>{video.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className={`content-section ${activeTab === 'actividades' ? '' : 'hidden'}`}>
          <div className="section-header">
            <div>
              <h2 className="section-title crimson"><i className="fa-solid fa-list-check" /> Talleres y Desafíos</h2>
              <p>Quizzes evaluativos tipo Pruebas Saber y juegos interactivos de color.</p>
            </div>
            <span className="section-badge crimson">Pruebas Grado {currentGrade}°</span>
          </div>

          <div className="activity-grid">
            <div className="game-box">
              <h3><i className="fa-solid fa-palette" /> {data.game.title}</h3>
              <p>{data.game.instructions}</p>
              <div className="game-options">
                {data.game.options.map((option) => (
                  <button
                    key={option.text}
                    type="button"
                    className={`game-option ${option.className}`}
                    onClick={(event) => handleColorGame(event.currentTarget, option.isCorrect)}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
              <div className="feedback-label">{gameFeedback}</div>
            </div>

            <div className="quiz-box">
              <h3><i className="fa-solid fa-graduation-cap" /> Quiz Saber Arte</h3>
              <p>Pregunta conceptual del grado:</p>
              <div className="quiz-question-box">
                <p>{data.quiz.question}</p>
              </div>
              <div className="quiz-options">
                {data.quiz.options.map((option) => (
                  <button
                    key={option.text}
                    type="button"
                    className="quiz-option"
                    onClick={(event) => handleQuiz(event.currentTarget, option.isCorrect)}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
              <div className="feedback-label">{quizFeedback}</div>
            </div>
          </div>
        </section>

        <section className={`content-section ${activeTab === 'dibujos' ? '' : 'hidden'}`}>
          <div className="section-header drawings-header">
            <div>
              <h2 className="section-title purple"><i className="fa-solid fa-palette" /> Lienzo Digital y Plantillas</h2>
              <p>Expresa tu creatividad con herramientas de dibujo y plantillas del grado.</p>
            </div>
            <div className="canvas-actions">
              <button type="button" className="soft-button" onClick={clearCanvas}>
                <i className="fa-solid fa-trash-can" /> Limpiar
              </button>
              <button type="button" className="save-button" onClick={downloadCanvas}>
                <i className="fa-solid fa-download" /> Guardar Mi Obra
              </button>
            </div>
          </div>

          <div className="toolbar">
            <div className="tool-group">
              <button type="button" className={`canvas-tool-btn ${tool === 'brush' ? 'is-selected' : ''}`} onClick={() => setTool('brush')} title="Pincel">
                <i className="fa-solid fa-paint-brush" />
              </button>
              <button type="button" className={`canvas-tool-btn ${tool === 'pencil' ? 'is-selected' : ''}`} onClick={() => setTool('pencil')} title="Lápiz Fino">
                <i className="fa-solid fa-pencil" />
              </button>
              <button type="button" className={`canvas-tool-btn ${tool === 'eraser' ? 'is-selected' : ''}`} onClick={() => setTool('eraser')} title="Borrador">
                <i className="fa-solid fa-eraser" />
              </button>
            </div>

            <div className="template-group">
              <span>Plantilla Grado:</span>
              <button type="button" className="template-button" onClick={drawStencil}>
                <i className="fa-solid fa-wand-magic-sparkles" /> Cargar Plantilla
              </button>
            </div>

            <div className="stamp-group">
              <button type="button" onClick={() => stampShape('circle')} title="Círculo"><i className="fa-regular fa-circle" /></button>
              <button type="button" onClick={() => stampShape('square')} title="Cuadrado"><i className="fa-regular fa-square" /></button>
              <button type="button" onClick={() => stampShape('star')} title="Estrella"><i className="fa-regular fa-star" /></button>
            </div>

            <div className="size-group">
              <span>Grosor:</span>
              <input
                type="range"
                min="2"
                max="40"
                value={brushSize}
                onChange={(event) => setBrushSize(Number(event.target.value))}
              />
              <span className="size-number">{brushSize}</span>
            </div>

            <div className="palette-group">
              {['#F0D53E', '#03658C', '#D93D59', '#4BD166', '#8549BA', '#000000'].map((color) => (
                <button
                  key={color}
                  type="button"
                  className={`palette-dot ${currentColor === color ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setCurrentColor(color)}
                />
              ))}
              <input
                type="color"
                value={currentColor}
                onChange={(event) => setCurrentColor(event.target.value)}
                className="custom-color"
              />
            </div>
          </div>

          <div className="canvas-shell">
            <canvas
              ref={canvasRef}
              id="paintCanvas"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={stopDrawing}
            />
          </div>
        </section>
      </main>

      <footer className="main-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">LÜMØ</span>
            <span>— Arte Digital de 1° a 3° Grado de Primaria.</span>
          </div>
          <p>© 2026 LÜMØ Educativo. Adaptado al currículo del Ministerio de Educación Nacional.</p>
        </div>
      </footer>

      {modalText && (
        <div className="reading-modal" onClick={closeReadingModal}>
          <div className="modal-card" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="close-modal" onClick={closeReadingModal}>✕</button>
            <h3>{modalText.title}</h3>
            <p>{modalText.text}</p>
            <div className="modal-actions">
              <button type="button" className="voice-button" onClick={() => speakText(modalText.text)}>
                <i className="fa-solid fa-volume-high" /> Escuchar Lectura
              </button>
              <button type="button" className="primary-button small" onClick={closeReadingModal}>
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
