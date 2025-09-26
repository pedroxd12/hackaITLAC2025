import React from 'react';

const tracksData = [
  {
    title: "Checador Inteligente",
    company: "ITLAC",
    description: "Automatiza el registro de la asistencia del personal con una app móvil usando geolocalización, eliminando la necesidad de un reloj checador físico.",
    icon: "📱",
  },
  {
    title: "Bona Pizza Experience",
    company: "Bona Pizza",
    description: "Optimiza la atención a clientes en el restaurante. Crea una app para que los clientes ordenen, pidan la cuenta y más desde su mesa.",
    icon: "🍕",
  },
  {
    title: "Reconocimiento de números de corredores (BIB)",
    company: "ITLAC",
    description: "Implementa un sistema que registre el número de un corredor para el registro de los tiempos y premiación por categorias.",
    icon: "🏃‍♂️",
  },
];

const Tracks: React.FC = () => (
  <section id="tracks" className="section-padding bg-[#111]">
    <div className="container mx-auto">
      <h2 className="section-title">Track's</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tracksData.map((track) => (
          <div key={track.title} className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800 card-hover-effect text-center flex flex-col items-center h-full">
            <div className="text-5xl mb-5">{track.icon}</div>
            <h3 className="text-xl font-bold mb-2">{track.title}</h3>
            <p className="font-semibold text-cyan-500 mb-4 text-sm">{track.company}</p>
            <p className="text-gray-400 flex-grow">{track.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Tracks;