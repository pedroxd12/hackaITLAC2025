import Image from 'next/image';
import React from 'react';

const Location: React.FC = () => (
    <section id="location" className="py-24 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 text-cyan-400">Sede del Evento</h2>
            <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto">
                El evento se llevará a cabo en el <strong>Centro de Información</strong> del <strong>Instituto Tecnológico de Lázaro Cárdenas</strong>.
            </p>
            <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
                <Image
                    src="/location-itlac.png"
                    alt="Instalaciones del ITLAC"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    </section>
);

export default Location;