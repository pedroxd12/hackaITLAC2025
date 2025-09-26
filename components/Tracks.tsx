import React from 'react';

const tracksData = [
  {
    title: "Track 1: Checador Inteligente",
    company: "Desafío Interno ITLAC",
    description: "Automatizar el proceso de checada de entrada y salida del personal mediante una app móvil que utilice geolocalización dentro del plantel, eliminando la dependencia de un reloj checador físico.",
    icon: "📱",
  },
  {
    title: "Track 2: Bona Pizza Experience",
    company: "Bona Pizza",
    description: "Optimizar los tiempos de atención a comensales en el restaurante, creando una app para que los clientes puedan solicitar el menú, la cuenta, y más, directamente desde su mesa.",
    icon: "🍕",
  },
  {
    title: "Track 3: Desafío Sorpresa",
    company: "Próximamente",
    description: "Un desafío sorpresa enfocado en la optimización de procesos. ¡Prepárate para innovar en una de las industrias clave de nuestra región!",
    icon: "🚀",
  },
];

const Tracks: React.FC = () => (
  <section id="tracks" className="py-20 px-4 bg-[#111]">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Los Desafíos</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {tracksData.map((track) => (
          <div key={track.title} className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-700 card-hover-effect text-center">
            <div className="text-5xl mb-4">{track.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{track.title}</h3>
            <p className="font-semibold text-cyan-500 mb-4">{track.company}</p>
            <p className="text-gray-400">{track.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Tracks;