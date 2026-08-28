import React from 'react';

export const AnnouncementFeed: React.FC = () => {
  const announcements = [
    {
      id: 'a1',
      title: '🚨 Suspensión por Lluvia e Inundación de Cancha #3',
      category: 'URGENTE',
      content: 'Debido al temporal invernal en Mena Alta, se suspende la jornada de la Cancha #3. Los encuentros serán reprogramados.',
      date: 'Hace 2 horas',
    },
    {
      id: 'a2',
      title: '📋 Comunicado Oficial: Pago de Arbitrajes Fecha 6',
      category: 'COMUNICADO',
      content: 'Recordamos a todos los delegados que el pago de arbitraje vía Deuna debe ser regularizado hasta el viernes 20:00.',
      date: 'Ayer',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-slate-950 text-white font-sans">
      <div className="mb-6">
        <h2 className="text-2xl font-black text-emerald-400">📢 Canal Oficial de Comunicados</h2>
        <p className="text-xs text-slate-400">Avisos oficiales de la Directiva de la Liga Barrial</p>
      </div>

      <div className="space-y-4">
        {announcements.map((a) => (
          <div key={a.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span
                className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                  a.category === 'URGENTE'
                    ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                }`}
              >
                {a.category}
              </span>
              <span className="text-xs text-slate-500 font-mono">{a.date}</span>
            </div>

            <h3 className="text-base font-bold text-white mb-2">{a.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{a.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
