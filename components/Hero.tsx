import React from 'react';

const Hero: React.FC = () => (
  <section className="min-h-screen flex items-center justify-center animated-gradient text-white text-center p-4 pt-20">
    <div className="fade-in">
      <h1 className="text-5xl md:text-8xl font-extrabold mb-4 tracking-tighter">
        HackaITLAC 2025
      </h1>
      <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-balance">
        12 horas de innovación, tecnología y creatividad para resolver los desafíos del mañana.
      </p>
      <p className="font-bold text-cyan-300 text-xl mb-8">
        15 y 16 de Octubre de 2025
      </p>
      <a
        href="https://forms.gle/your-google-form-link"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-blue-900 font-bold py-4 px-10 rounded-full text-lg transition-transform btn-hover-effect"
      >
        ¡Inscripción Gratuita!
      </a>
    </div>
  </section>
);

export default Hero;