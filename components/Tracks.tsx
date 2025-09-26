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
    description: "Implementa un sistema que registre el número de un corredor para el registro de los tiempos y premiación por categorias.",
    icon: "🏃‍♂️",
  },
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
                onClick={() => handleOpenModal(track)} // Agregamos el evento onClick
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