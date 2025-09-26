import React from 'react';

const About: React.FC = () => (
  <section id="about" className="py-20 px-4 bg-[#0a0a0a]">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4 text-cyan-400">¿Qué es HackaITLAC?</h2>
      <p className="text-lg max-w-4xl mx-auto text-gray-300 text-balance">
        Un ecosistema de innovación intensiva diseñado para despertar tu talento. Durante 12 horas de desarrollo continuo, te sumergirás en la resolución de problemas reales propuestos por empresas líderes, aplicando tecnologías de vanguardia para crear soluciones tangibles y de alto impacto.
      </p>
    </div>
  </section>
);

export default About;