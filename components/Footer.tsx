import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-black text-center p-8 text-gray-400">
    <p>&copy; {new Date().getFullYear()} HackaITLAC. Un evento del Tecnológico Nacional de México, Campus Lázaro Cárdenas.</p>
  </footer>
);

export default Footer;