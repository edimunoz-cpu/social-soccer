import React, { useState } from 'react';

export const MarketplaceAndIdealEleven: React.FC = () => {
  const [voted, setVoted] = useState(false);

  const idealEleven = [
    { pos: 'POR', name: 'Diego Torres', team: 'CD Mena Alta' },
    { pos: 'DEF', name: 'Esteban Ortiz', team: 'CD Mena Alta' },
    { pos: 'DEF', name: 'Roberto Lasso', team: 'Atlético San José' },
    { pos: 'MED', name: 'Mateo Silva', team: 'Atlético San José' },
    { pos: 'DEL', name: 'Juan Antonio Pérez', team: 'CD Mena Alta' },
  ];

  const coupons = [
    { id: 'c1', partner: 'Fisioterapia & Salud Deportiva Mena', discount: '30% Desc. en Masaje Descontracturante', points: 50 },
    { id: 'c2', partner: 'Hidratación & Nutrición Barrial', discount: '2x1 en Bebidas Electrolíticas', points: 30 },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-slate-950 text-white font-sans">
      {/* 11 Ideal Section */}
      <div className="mb-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-black text-emerald-400">🌟 Votación 11 Ideal de la Fecha</h2>
            <p className="text-xs text-slate-400">Vota por los mejores jugadores de la jornada barrial</p>
          </div>

          <button
            onClick={() => setVoted(true)}
            disabled={voted}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              voted ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg'
            }`}
          >
            {voted ? '✅ Voto Registrado' : '🗳️ Emitir Voto'}
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {idealEleven.map((p, i) => (
            <div key={i} className="bg-slate-950 border border-slate-800 rounded-2xl p-3 text-center">
              <span className="text-[10px] font-black bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full mb-1 inline-block">
                {p.pos}
              </span>
              <h4 className="text-xs font-bold text-white leading-tight">{p.name}</h4>
              <p className="text-[10px] text-slate-400">{p.team}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marketplace Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
        <h2 className="text-xl font-black text-amber-400 mb-1">🎁 Marketplace de Beneficios Locales</h2>
        <p className="text-xs text-slate-400 mb-4">Canjea tus puntos de Fair Play por descuentos en negocios barriales</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coupons.map((c) => (
            <div key={c.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white mb-1">{c.partner}</h4>
                <p className="text-xs text-emerald-400 font-semibold mb-1">{c.discount}</p>
                <span className="text-[10px] text-amber-400 font-mono">Costo: {c.points} Puntos Fair Play</span>
              </div>
              <button
                onClick={() => alert(`Cupón canjeado con éxito para ${c.partner}`)}
                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow"
              >
                Canjear
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
