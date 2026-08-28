import React, { useState } from 'react';

export const FixturesAndStandings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'standings' | 'scorers'>('standings');

  const standings = [
    { rank: 1, name: 'CD Mena Alta', p: 5, w: 4, d: 1, l: 0, gf: 12, ga: 3, gd: '+9', pts: 13 },
    { rank: 2, name: 'Atlético San José', p: 5, w: 3, d: 1, l: 1, gf: 10, ga: 6, gd: '+4', pts: 10 },
    { rank: 3, name: 'Real Barriar', p: 5, w: 2, d: 2, l: 1, gf: 8, ga: 7, gd: '+1', pts: 8 },
    { rank: 4, name: 'Juventud Unida', p: 5, w: 1, d: 1, l: 3, gf: 5, ga: 9, gd: '-4', pts: 4 },
    { rank: 5, name: 'Deportivo El Bosque', p: 5, w: 0, d: 1, l: 4, gf: 3, ga: 13, gd: '-10', pts: 1 },
  ];

  const topScorers = [
    { rank: 1, name: 'Juan Antonio Pérez', team: 'CD Mena Alta', goals: 8, matches: 5 },
    { rank: 2, name: 'Mateo Silva', team: 'Atlético San José', goals: 6, matches: 5 },
    { rank: 3, name: 'Gabriel Benítez', team: 'Real Barriar', goals: 4, matches: 4 },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-slate-950 text-white font-sans">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-black text-emerald-400">Liga Barrial Mena Alta</h2>
          <p className="text-xs text-slate-400">Tabla Oficial de Posiciones • Temporada 2026</p>
        </div>

        <div className="flex bg-slate-900 border border-slate-800 rounded-2xl p-1">
          <button
            onClick={() => setActiveTab('standings')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'standings' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            📊 Posiciones
          </button>
          <button
            onClick={() => setActiveTab('scorers')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'scorers' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            ⚽ Goleadores
          </button>
        </div>
      </div>

      {activeTab === 'standings' ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950 text-xs text-slate-400 uppercase font-mono border-b border-slate-800">
                  <th className="p-4">#</th>
                  <th className="p-4">Equipo</th>
                  <th className="p-4 text-center">PJ</th>
                  <th className="p-4 text-center">PG</th>
                  <th className="p-4 text-center">PE</th>
                  <th className="p-4 text-center">PP</th>
                  <th className="p-4 text-center">GF</th>
                  <th className="p-4 text-center">GC</th>
                  <th className="p-4 text-center">DIF</th>
                  <th className="p-4 text-center font-bold text-emerald-400">PTS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50 text-sm font-medium">
                {standings.map((t) => (
                  <tr key={t.rank} className="hover:bg-slate-800/40 transition-colors">
                    <td className="p-4 font-mono font-bold text-slate-400">{t.rank}</td>
                    <td className="p-4 font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      {t.name}
                    </td>
                    <td className="p-4 text-center">{t.p}</td>
                    <td className="p-4 text-center text-emerald-400">{t.w}</td>
                    <td className="p-4 text-center text-slate-400">{t.d}</td>
                    <td className="p-4 text-center text-rose-400">{t.l}</td>
                    <td className="p-4 text-center font-mono">{t.gf}</td>
                    <td className="p-4 text-center font-mono">{t.ga}</td>
                    <td className="p-4 text-center font-mono font-bold">{t.gd}</td>
                    <td className="p-4 text-center font-black text-emerald-400 text-base font-mono">{t.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topScorers.map((s) => (
            <div key={s.rank} className="bg-slate-900 border border-slate-800 rounded-3xl p-5 text-center shadow-xl">
              <div className="text-3xl mb-2">🥇</div>
              <h3 className="text-lg font-bold text-white">{s.name}</h3>
              <p className="text-xs text-slate-400 mb-3">{s.team}</p>
              <div className="inline-block bg-emerald-500/20 border border-emerald-500/40 px-4 py-1.5 rounded-full text-emerald-300 font-black text-sm">
                ⚽ {s.goals} Goles en {s.matches} PJ
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
