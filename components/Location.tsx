import Image from 'next/image';
import React from 'react';

const Location: React.FC = () => (
    <section id="location" className="py-20 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-cyan-400">Sede del Evento</h2>
            <p className="text-xl mb-8 text-gray-300">
                El evento se llevará a cabo en el <strong>Centro de Información</strong> del <strong>Instituto Tecnológico de Lázaro Cárdenas</strong>.
            </p>
            <div className="max-w-4xl mx-auto rounded-lg overflow-hidden">
                <Image
                    src="/location-itlac.jpg"
                    alt="Instalaciones del ITLAC"
                    width={1024}
                    height={576}
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    </section>
);

export default Location;