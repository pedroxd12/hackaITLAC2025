import React from 'react';

const Rules: React.FC = () => (
  <section id="rules" className="py-24 px-4 bg-[#0a0a0a]">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-5xl font-bold text-center mb-16 text-cyan-400">Reglas y Normas</h2>
      <ul className="space-y-6 text-lg text-gray-300 list-disc list-inside">
        <li><b>Equipos:</b> De 3 a 5 estudiantes. Pueden registrar un asesor académico.</li>
        <li><b>Originalidad:</b> Todo el código debe ser creado durante las 12 horas del evento. Se permite el uso de librerías, APIs y herramientas de IA.</li>
        <li><b>Propiedad Intelectual:</b> Las soluciones son propiedad de los equipos. Otorgan una licencia no exclusiva al ITLAC para fines de difusión.</li>
        <li><b>Código de Conducta:</b> Se espera un ambiente de respeto y colaboración. Cero tolerancia al acoso o comportamiento antideportivo.</li>
        <li><b>Herramientas:</b> Cada participante debe traer su propia laptop. Nosotros proveemos el espacio, internet y conexiones eléctricas.</li>
        <li><b>Inscripción:</b> El registro es gratuito a través de nuestro formulario oficial. ¡El cupo es limitado!</li>
      </ul>
      <div className="text-center mt-16">
          <a
            href="hackaitlac.pdf"
            download
            className="border-2 border-cyan-500 text-cyan-500 font-bold py-4 px-10 rounded-full transition-all duration-300 hover:bg-cyan-500 hover:text-black"
          >
            Descargar Convocatoria
          </a>
      </div>
    </div>
  </section>
);

export default Rules;