import Image from 'next/image';
import React from 'react';

const Sponsors: React.FC = () => (
  <section id="sponsors" className="py-20 px-4 bg-[#111]">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12 text-cyan-400">Patrocinadores</h2>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <Image src="/itlac-logo.png" alt="Instituto Tecnológico de Lázaro Cárdenas" width={80} height={80} className="grayscale hover:grayscale-0 transition-all" />
        <Image src="/bona-pizza-logo.png" alt="Bona Pizza Logo" width={180} height={60} className="grayscale hover:grayscale-0 transition-all" />
      </div>
    </div>
  </section>
);

export default Sponsors;