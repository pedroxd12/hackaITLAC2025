"use client"; // Directiva necesaria para usar hooks de estado en Next.js App Router

import React, { useState } from 'react';
import TrackModal from './TrackModal'; // Importamos el nuevo componente modal

// Estructura de datos ampliada con los detalles de los documentos
const tracksData = [
  {
    title: "Checador Inteligente",
    company: "ITLAC",
    description: "Automatiza el registro de la asistencia del personal con una app móvil usando geolocalización, eliminando la necesidad de un reloj checador físico.",
    icon: "📱",
    details: {
      objetivo: "Que el proceso de checada de entrada y salida del personal sea un proceso automatizado, mediante una aplicación que haga uso de las nuevas tecnologías, no se dependa de un reloj checador.",
      especificaciones: [
        "Utilizar un dispositivo móvil en el cual, mediante una aplicación, el personal registre su asistencia.",
        "La aplicación debe de conectar con la base de datos del SII, y su horario actual.",
        "Se registe su asistencia tomando en cuenta su geolocalización.",
        "Si no esta dentro de la red o dentro del área del ITLAC no se le permita checar."
      ],
      solucion: "Solución innovadora que mejor el proceso del registro de checadas y salidas, control de asistencia de una institución o empresas, con esto se evita de contar con checadores por áreas que requieren inversión y adecuación de instalaciones o vandalismo.",
      motivacion: "En la actualidad los relojes checadores digitales con tecnología biométrica se tiene que conectar a la energía eléctrica, y a la red cableada, en circunstancia en donde no exista energía en el área donde esta el checador o la red presente falla, no se puede realizar el registro de la entrada o salida, o se tiene que recurrir al proceso antiguo que es anotarse en una libreta que luego se extravía o no se registra adecuamente.",
      entregables: [
        "Fase 1: Conceptualización de la idea y justificación de la solución.",
        "Fase 2: Prototipo de la solución, demostrar como se registrara y tomara la geolocalización del dispositivo, o como se tomara la ubicación de la persona en la instalación.",
        "Fase 3: Presentación de la solucion."
      ],
      recursos: ["Actualmente ya se cuenta con la infraestructura de red, y las nuevas tecnologías para dar solución a la problemática."],
      evaluacion: ["Se evalua la propuesta de solución, asi como la innovación de la solución y que tan fácil seria la implementación."]
    }
  },
  {
    title: "Bona Pizza Experience",
    company: "Bona Pizza",
    description: "Optimiza la atención a clientes en el restaurante. Crea una app para que los clientes ordenen, pidan la cuenta y más desde su mesa.",
    icon: "🍕",
    details: {
      objetivo: "Obtimizacion de los tiempos de atención de meseros a comensales del restaurante BONA PIZZA mediante el uso de dispositivos móviles.",
      especificaciones: ["Se puede utilizar herramientas para desarrollo de aplicaciones móviles, que funcione en por lo menos con Sistemas Operativos Android."],
      solucion: "Soluciones que mejoren el proceso de atención existente de parte de los meseros a las peticiones de los comensales.",
      motivacion: "El objetivo de este proyecto es eficientar el proceso de atención de los meseros a las peticiones de los comensales. Problemática: Las peticiones mas comunes que hacen los comensales son: Pedir: El Menú, la cuenta, servilletas, cubiertos, salsas, retirar platos, limpiar la mesa. Actualmente cuando un comensal llega al restaurante, se enfrenta con las siguientes complicaciones con la atención del mesero: Esperar a que un mesero lo vea o lo escuche para ser atendido, lo cual en algunas ocasiones se complica si hay muchos comensales, si el restaurante es grande o si hay pocos meseros atendiendo. Cuando el mesero lo ve, tiene que desplazarse a la mesa para ver que necesita el comensal, lo que implica mas tiempo para atender la solicitud del comensal. En ocasiones los comensales al ver que no hay una eficiente atención de los meseros, prefieren desistir de la petición a tener que esperar a que un mesero los vea y llegue a su mesa para ser atendido.",
      entregables: [
          "Fase 1: Idea de solución, Maqueta de la APP propuestas.",
          "Fase 2: EDT, Estructura de los datos almacenados en: Bases de Datos Relacional y/o NoSQL.",
          "Fase 3: Entrega de prototipo con funcionalidades básicas."
      ],
      recursos: [
          "Computadora de escritorio.",
          "Smart phone para meseros y encargados.",
          "Red de área local alámbrica e inalámbrica.",
          "Servicio de internet de 100 mbps."
      ],
      evaluacion: [
          "Creatividad en el uso de la tecnología (que tecnología ocupó para la resolución del problema).",
          "Viabilidad de implementación (ver que la propuesta de solución sea tecnológica y económicamente viable ).",
          "Funcionalidad del prototipo (que el proyecto contemple todas las funcionalidades solicitadas)."
      ]
    }
  },
 {
  title: "Reconocimiento de números de corredores (BIB)",
  company: "ITLAC",
  description: "Sistema integral para reconocimiento automático de dorsales (BIB), cronometraje en tiempo real y generación de resultados y premiaciones por categorías.",
  icon: "🏃‍♂️",
  details: {
    objetivo: "Plantea un sistema integral para reconocer automáticamente los números de corredor (BIB) en una carrera atlética, registrar tiempos de paso y meta en tiempo real, y calcular la premiación por categorías. La solución combina visión por computadora (detección/lectura de BIB), cronometraje electrónico y un backend que consolida resultados, valida penalizaciones y emite reportes oficiales.",
    especificaciones: [
      "Captura: cámaras en arco de salida/meta (60–120 fps recomendado para foto-finish) y puntos intermedios.",
      "Procesamiento: servicio de visión por computadora (OpenCV + detector de BIB; OCR con Tesseract/CRNN).",
      "Backend: API REST (Node.js/Express o PHP/Laravel) + base de datos MySQL/MariaDB.",
      "Tiempo real: WebSockets (Socket.IO) para actualizar tablero en vivo.",
      "Panel web: React/Vue/Bootstrap con dashboards, resultados y control de jueces.",
      "Opcional: App móvil para jueces (validaciones manuales, correcciones, marcar DNF/DQ).",
      "Sincronización temporal: NTP en cámaras y servidores para consistencia de timestamps."
    ],
    solucion: "Registro y Control de Corredores y Reconocimiento de BIB mediante visión por computadora y OCR: alta masiva/individual de corredores, detección de región del BIB (YOLO/SSD o heurísticas), OCR sobre la región (Tesseract/CRNN), desambiguación contra lista válida de dorsales y ventana anti-duplicado para evitar lecturas repetidas.",
    motivacion: "El desarrollo de este proyecto responde a la necesidad de contar con un sistema moderno, preciso y automatizado de cronometraje en carreras atléticas. Los métodos tradicionales con cronómetros manuales o chips RFID suelen implicar altos costos, complejidad logística o errores humanos. Con visión por computadora y reconocimiento de patrones se reduce costo y error, se agiliza la entrega de resultados y se aumenta la transparencia del evento. Además el proyecto es escalable a otros eventos masivos, fomentando la innovación tecnológica aplicada al deporte.",
    entregables: [
      "Fase 1: Idea y Justificación — Requerimientos, diseño de arquitectura y modelo de datos.",
      "Fase 2: Prototipo inicial — Módulo de detección de dorsales (pruebas en imágenes estáticas) y base de datos de corredores.",
      "Fase 3: Cronometraje y Control — Integración de cámaras en tiempo real, registro de tiempos (gun y chip), sincronización NTP y API para almacenar detecciones.",
      "Fase 4: Clasificación y Resultados — Reglas de categorías, ranking por rama y edad, generación automática de podios y reportes preliminares.",
      "Fase 5: Entregable final / Demo — Tablero en vivo, generación de constancias (PDF/Excel con QR) y simulacro en tiempo real."
    ],
    recursos: [
      "Cámaras de alta resolución (1080p–4K) con capacidad de 60–120 fps para arcos y puntos de control.",
      "Servidor local o en la nube (GPU opcional) para procesamiento de imágenes.",
      "Conectividad estable (LAN/Wi-Fi/4G/5G) para transmisión en tiempo real.",
      "Software: Python (OpenCV, TensorFlow/PyTorch), Tesseract/CRNN, Node.js/Express o PHP/Laravel, MySQL/MariaDB.",
      "Frontend: React o Vue con Bootstrap para dashboards; Socket.IO para tiempo real.",
      "Equipo humano: desarrolladores en visión por computadora y backend, técnicos de instalación de cámaras, jueces y voluntarios para validación.",
      "Herramientas adicionales: generador de PDF/Excel, librerías para QR, manuales de operación y datasets de dorsales de prueba."
    ],
    evaluacion: [
      "Creatividad e innovación: uso de visión por computadora y OCR frente a métodos tradicionales.",
      "Funcionalidad del prototipo: precisión en reconocimiento de dorsales, registro correcto de tiempos (salida, parciales, meta) y generación de reportes.",
      "Enfoque centrado en usuarios: facilidad de uso para organizadores, jueces y corredores; claridad del tablero en vivo.",
      "Factibilidad técnica y económica: capacidad de implementación y escalabilidad según número de corredores y puntos de control.",
      "Impacto y valor agregado: transparencia en resultados, reducción de costos y posibilidad de réplica en otros eventos.",
      "Calidad de la presentación: demostración en simulacro, evidencia en tiempo real y documentación clara."
    ],
    tipoDeSolucion: [
      "Registro de corredores: alta por lote (CSV) o individual (nombre, sexo, fecha de nacimiento, categoría, distancia, número BIB, equipo).",
      "Validaciones: identidad, asignación de kit, estatus (pagado, entregado, DNS, DNF, DQ).",
      "Reconocimiento BIB: detección (YOLO/SSD o heurísticas), OCR sobre región, verificación por Levenshtein/regex y anti-duplicado temporal.",
      "Cronometraje y puntos de control: registro de timestamps por BIB, gun time vs chip time, sincronización NTP.",
      "Clasificación y premiación: cálculo de tiempos netos, ranking por categoría y rama; empates resueltos por fotofinish.",
      "Tablero y reportes: vista de pasos por puntos de control, alertas, exportación a PDF/Excel/CSV y publicación vía API."
    ],
    descripcionTrack: "El proyecto avanza por fases con entregables claros: diseño y justificación, prototipo de detección, integración de cronometraje en tiempo real, reglas de clasificación y tablero en vivo, finalizando con demo funcional y generación de constancias verificables por QR.",
    mentoresJurado: "Se sugiere conformar un panel mixto de mentores y jurado con experiencia en visión por computadora, desarrollo backend, cronometraje deportivo y organización de eventos atléticos.",
    terminosYCondiciones: {
      duracionReto: "Duración del reto: 12 horas continuas desde el banderazo oficial hasta la hora de cierre establecida por el comité.",
      entrega: "Cada equipo entregará un prototipo o demo que muestre reconocimiento de dorsales, registro de tiempos y clasificación básica. Se aceptan repositorios (GitHub/ZIP), demo en video y un resumen de máximo 2 páginas.",
      validacion: "El jurado validará reconocimiento de BIB, registro de tiempos y generación de resultados preliminares. Se dará prioridad a evidencias en tiempo real (capturas, simulación o demo).",
      propiedadIntelectual: "Los derechos de autor corresponden a los equipos; la organización podrá difundir los proyectos con fines académicos mencionando a los autores.",
      compromisoEtico: "Se exige originalidad y uso legal de librerías/datasets; está prohibido el plagio sin mejoras significativas.",
      usoMarca: "El logotipo del evento e institución podrá usarse únicamente en el marco del evento; se autoriza registro audiovisual para memoria institucional."
    }
  }
}

];

const Tracks: React.FC = () => {
  // Estado para manejar el track seleccionado y la visibilidad del modal
  const [selectedTrack, setSelectedTrack] = useState<typeof tracksData[0] | null>(null);

  // Función para abrir el modal con los datos del track seleccionado
  const handleOpenModal = (track: typeof tracksData[0]) => {
    if (track.details) { // Solo abre el modal si el track tiene detalles
      setSelectedTrack(track);
    }
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setSelectedTrack(null);
  };

  return (
    <>
      <section id="tracks" className="section-padding bg-[#111]">
        <div className="container mx-auto">
          <h2 className="section-title">Track's</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracksData.map((track) => (
              <div 
                key={track.title} 
                className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800 card-hover-effect text-center flex flex-col items-center h-full cursor-pointer"
                onClick={() => handleOpenModal(track)}
              >
                <div className="text-5xl mb-5">{track.icon}</div>
                <h3 className="text-xl font-bold mb-2">{track.title}</h3>
                <p className="font-semibold text-cyan-500 mb-4 text-sm">{track.company}</p>
                <p className="text-gray-400 flex-grow">{track.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renderizamos el modal y le pasamos los datos y la función de cierre */}
      <TrackModal track={selectedTrack} onClose={handleCloseModal} />
    </>
  );
};

export default Tracks;