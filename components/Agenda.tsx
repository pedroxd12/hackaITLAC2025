import React from 'react';

const agendaData = [
  { date: "15 de Oct", time: "17:00", activity: "Ceremonia de Inauguración" },
  { date: "15 de Oct", time: "17:30", activity: "Presentación de Mentores" },
  { date: "16 de Oct", time: "07:00", activity: "Inicio del Hackathon" },
  { date: "16 de Oct", time: "07:00 - 08:00", activity: "Fase de Ideación y Arquitectura" },
  { date: "16 de Oct", time: "08:00 - 17:15", activity: "Desarrollo y Mentorías" },
  { date: "16 de Oct", time: "17:15 - 19:00", activity: "Ronda de Presentaciones Finales" },
  { date: "16 de Oct", time: "19:15 - 20:00", activity: "Selección de Finalistas por el Jurado" },
  { date: "16 de Oct", time: "20:00", activity: "Premiación y Clausura" },
];

const Agenda: React.FC = () => (
  <section id="agenda" className="py-20 px-4 bg-[#0a0a0a]">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Agenda del Evento</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {agendaData.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col sm:flex-row sm:items-center bg-gray-900 rounded-lg p-4 sm:p-3 shadow-lg"
          >
            <div className="bg-cyan-500 text-black text-center rounded-lg p-3 sm:w-40 w-full mb-3 sm:mb-0">
              <p className="font-bold">{item.date}</p>
              <p>{item.time}</p>
            </div>
            <div className="hidden sm:block border-l-2 border-cyan-500 h-10 mx-6"></div>
            <p className="text-lg text-white text-center sm:text-left">{item.activity}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Agenda;
