import React from 'react';

const Prizes: React.FC = () => (
  <section id="prizes" className="py-20 px-4 bg-[#111]">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12 text-cyan-400">Premios y Reconocimientos</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-cyan-300">Ganadores de cada Track</h3>
          <p className="text-5xl font-extrabold mb-4">$3,000 MXN</p>
          <p className="text-lg text-gray-300">Reconocimiento oficial como ganadores y premios adicionales por parte de la empresa del reto.</p>
        </div>
        <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-cyan-300">Todos los Participantes</h3>
          <p className="text-5xl font-extrabold mb-4">📜</p>
          <p className="text-lg text-gray-300">Constancia de participación con valor curricular para impulsar tu carrera profesional.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Prizes;