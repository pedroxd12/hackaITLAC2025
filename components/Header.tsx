import Image from 'next/image';
import React from 'react';

const Header: React.FC = () => (
  <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-md z-50 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image src="/tecnm-logo.png" alt="Logo TecNM" width={120} height={40} />
        <Image src="/itlac-logo.png" alt="Logo ITLAC" width={40} height={40} />
      </div>
      <nav className="hidden md:flex gap-6 text-white">
        <a href="#about" className="hover:text-cyan-400 transition-colors">Sobre el Evento</a>
        <a href="#tracks" className="hover:text-cyan-400 transition-colors">Desafíos</a>
        <a href="#agenda" className="hover:text-cyan-400 transition-colors">Agenda</a>
        <a href="#rules" className="hover:text-cyan-400 transition-colors">Reglas</a>
      </nav>
      <a
        href="https://forms.gle/your-google-form-link"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-cyan-500 text-white font-bold py-2 px-6 rounded-full transition-transform btn-hover-effect"
      >
        Inscríbete
      </a>
    </div>
  </header>
);

export default Header;