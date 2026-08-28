import React from 'react';

export const PlayerStatsProfile: React.FC = () => {
  const stats = {
    matchesPlayed: 14,
    goals: 8,
    assists: 5,
    yellowCards: 2,
    redCards: 0,
    fairPlayRating: 9.4,
    communityPoints: 145,
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-slate-950 text-white font-sans">
      <div className="mb-6">
        <h2 className="text-2xl font-black text-emerald-400">📊 Ficha Técnica del Jugador</h2>
        <p className="text-xs text-slate-400">Estadísticas acumuladas en torneos barriales</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 text-center">
          <span className="text-2xl mb-1 block">🏟️</span>
          <span className="text-2xl font-black text-white font-mono">{stats.matchesPlayed}</span>
          <p className="text-xs text-slate-400">Partidos Jugados</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 text-center">
          <span className="text-2xl mb-1 block">⚽</span>
          <span className="text-2xl font-black text-emerald-400 font-mono">{stats.goals}</span>
          <p className="text-xs text-slate-400">Goles Convertidos</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 text-center">
          <span className="text-2xl mb-1 block">👟</span>
          <span className="text-2xl font-black text-blue-400 font-mono">{stats.assists}</span>
          <p className="text-xs text-slate-400">Asistencias</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 text-center">
          <span className="text-2xl mb-1 block">🟨</span>
          <span className="text-2xl font-black text-amber-400 font-mono">{stats.yellowCards}</span>
          <p className="text-xs text-slate-400">Tarjetas Amarillas</p>
        </div>
      </div>

      {/* Fair Play rating & Community points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-slate-900 to-emerald-950 border border-emerald-500/30 rounded-3xl p-5 shadow-xl">
          <h3 className="text-sm font-bold text-emerald-400 mb-2">⭐ Rating de Fair Play</h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-black text-white font-mono">{stats.fairPlayRating}</span>
            <span className="text-xs text-slate-400">/ 10.0</span>
          </div>
          <p className="text-xs text-slate-300">
            Excelente conducta deportiva. Bajo índice de sanciones y buen trato a rivales y vocales.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-amber-950 border border-amber-500/30 rounded-3xl p-5 shadow-xl">
          <h3 className="text-sm font-bold text-amber-400 mb-2">🏆 Puntos de Comunidad</h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-black text-white font-mono">{stats.communityPoints}</span>
            <span className="text-xs text-slate-400">PTS</span>
          </div>
          <p className="text-xs text-slate-300">
            Canjeables por descuentos en fisioterapia, medicina deportiva e hidratación local.
          </p>
        </div>
      </div>
    </div>
  );
};
