import Image from 'next/image';
import React from 'react';

const Sponsors: React.FC = () => (
  <section id="sponsors" className="py-24 px-4 bg-white opacity-80">
    <div className="container mx-auto text-center">
      <h2 className="text-5xl font-bold mb-16 text-[#0a0a0a]">Patrocinadores</h2>
      <div className="flex justify-center items-center gap-16 flex-wrap">
        <Image src="/itlac-logo.png" alt="Instituto Tecnológico de Lázaro Cárdenas" width={100} height={100} />
        <Image src="/bona-pizza.png" alt="Bona Pizza Logo" width={200} height={80} />
      </div>
    </div>
  </section>
);

export default Sponsors;