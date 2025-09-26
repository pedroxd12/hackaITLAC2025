import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-black text-center p-10 text-gray-500">
    <p>&copy; {new Date().getFullYear()} HackaITLAC. Un evento del Instituto Tecnológico de Lázaro Cárdenas.</p>
  </footer>
);

export default Footer;