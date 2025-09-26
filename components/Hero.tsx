import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => (
  <section className="relative min-h-screen flex items-center justify-center text-white text-center p-4 pt-20 overflow-hidden">
    {/* Capa 1: Imagen de Fondo */}
    <Image
        src="/itlac.png" // ¡IMPORTANTE! Cambia esto por la ruta de tu imagen de fondo
        layout="fill"
        objectFit="cover"
        alt="Fondo del HackaITLAC"
        className="z-0"
        priority // Carga la imagen más rápido
    />

    {/* Capa 2: Overlay con Gradiente Animado */}
    <div className="absolute inset-0 animated-gradient opacity-80 z-10"></div>

    {/* Capa 3: Contenido */}
    <div className="relative z-20 fade-in max-w-4xl mx-auto">
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-4 tracking-tighter">
        Hacka<span className="animated-text-gradient">ITLAC</span> 2025
      </h1>
      <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-balance font-light">
        12 horas de inmersión en <span className="font-semibold text-cyan-300">innovación, tecnología y creatividad</span> para forjar el futuro.
      </p>
      <p className="font-bold text-cyan-300 text-xl md:text-2xl mb-10">
        15 y 16 de Octubre de 2025
      </p>
      <a
        href="https://forms.gle/68LmagkNe5Pz88TQ6"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-blue-900 font-bold py-3 px-8 md:py-4 md:px-12 rounded-full text-base md:text-lg transition-transform btn-hover-effect"
      >
        ¡Inscripción Gratuita!
      </a>
    </div>
  </section>
);

export default Hero;