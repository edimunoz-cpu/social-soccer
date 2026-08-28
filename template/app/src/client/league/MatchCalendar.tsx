import React from 'react';

export const MatchCalendar: React.FC = () => {
  const matches = [
    {
      id: 'm101',
      home: 'CD Mena Alta',
      away: 'Atlético San José',
      date: 'Sábado 30 de Agosto • 14:00',
      pitch: 'Cancha Principal #1 - Mena Alta',
      gps: 'https://maps.google.com/?q=-0.25,-78.53',
      weather: '☀️ Soleado 20°C',
      refereeFee: 'PAGADO',
    },
    {
      id: 'm102',
      home: 'Real Barriar',
      away: 'Juventud Unida',
      date: 'Sábado 30 de Agosto • 16:00',
      pitch: 'Cancha Sintética #2 - Mena Alta',
      gps: 'https://maps.google.com/?q=-0.25,-78.53',
      weather: '🌧️ Lluvia Moderada 15°C',
      refereeFee: 'PENDIENTE',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-slate-950 text-white font-sans">
      <div className="mb-6">
        <h2 className="text-2xl font-black text-emerald-400">📅 Calendario de Partidos</h2>
        <p className="text-xs text-slate-400">Programación de la Fecha 6 con ubicación GPS y clima</p>
      </div>

      <div className="space-y-4">
        {matches.map((m) => (
          <div key={m.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                {m.date}
              </span>
              <span className="text-xs font-medium text-slate-300 bg-slate-800 px-3 py-1 rounded-full">
                Clima: {m.weather}
              </span>
            </div>

            <div className="flex items-center justify-between text-center my-4">
              <div className="w-2/5 font-extrabold text-base md:text-xl text-white">{m.home}</div>
              <div className="w-1/5 font-black text-emerald-400 text-lg">VS</div>
              <div className="w-2/5 font-extrabold text-base md:text-xl text-white">{m.away}</div>
            </div>

            <div className="flex flex-wrap items-center justify-between border-t border-slate-800 pt-4 mt-2 text-xs text-slate-400 gap-2">
              <div className="flex items-center gap-2">
                <span>📍 {m.pitch}</span>
                <a
                  href={m.gps}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 underline font-semibold hover:text-emerald-300"
                >
                  Abrir GPS
                </a>
              </div>

              <span
                className={`font-extrabold text-[11px] px-3 py-1 rounded-full ${
                  m.refereeFee === 'PAGADO' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                }`}
              >
                Arbitraje: {m.refereeFee}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
