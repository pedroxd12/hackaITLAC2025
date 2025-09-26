import React from 'react';

// Definimos una interfaz para la estructura de los datos de cada track
interface Track {
  title: string;
  company: string;
  description: string;
  icon: string;
  details?: {
    objetivo: string;
    especificaciones: string[];
    solucion: string;
    motivacion?: string;
    entregables: string[];
    recursos: string[];
    evaluacion: string[];
  };
}

// Props que recibirá el componente modal
interface TrackModalProps {
  track: Track | null;
  onClose: () => void;
}

const TrackModal: React.FC<TrackModalProps> = ({ track, onClose }) => {
  // Si no hay un track seleccionado, no renderizamos nada
  if (!track || !track.details) {
    return null;
  }

  return (
    // Fondo oscuro semi-transparente que cubre toda la pantalla
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
      onClick={onClose} // Cierra el modal al hacer clic en el fondo
    >
      {/* Contenedor principal del modal */}
      <div 
        className="bg-[#1a1a1a] rounded-2xl border border-cyan-500 shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative animate-fade-in"
        onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal lo cierre
      >
        {/* Botón para cerrar el modal */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Cerrar"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Encabezado del modal */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{track.icon}</div>
          <h2 className="text-3xl font-bold text-white">{track.title}</h2>
          <p className="font-semibold text-cyan-400 text-lg">{track.company}</p>
        </div>

        {/* Contenido detallado del track */}
        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2 border-b-2 border-cyan-800 pb-1">🎯 Objetivo particular</h3>
            <p>{track.details.objetivo}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2 border-b-2 border-cyan-800 pb-1">⚙️ Especificaciones Técnicas/tecnológicas</h3>
            <ul className="list-disc list-inside space-y-1">
              {track.details.especificaciones.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2 border-b-2 border-cyan-800 pb-1">💡 Tipo de Solución</h3>
            <p>{track.details.solucion}</p>
          </div>
          {track.details.motivacion && (
            <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2 border-b-2 border-cyan-800 pb-1">🔥 Motivo</h3>
                <p>{track.details.motivacion}</p>
            </div>
          )}
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2 border-b-2 border-cyan-800 pb-1"> Descripción de los entregables</h3>
            <ul className="list-disc list-inside space-y-1">
              {track.details.entregables.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2 border-b-2 border-cyan-800 pb-1">🛠️ Recursos</h3>
            <ul className="list-disc list-inside space-y-1">
                {track.details.recursos.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2 border-b-2 border-cyan-800 pb-1">📊 Criterios de Evaluación</h3>
            <ul className="list-disc list-inside space-y-1">
              {track.details.evaluacion.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackModal;