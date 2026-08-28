import React, { useState, useEffect } from 'react';

interface DigitalIDCardProps {
  player?: {
    fullName: string;
    dni: string;
    photoUrl?: string;
    qrCode: string;
    isSuspended: boolean;
    communityPoints: number;
    team?: {
      name: string;
      logoUrl?: string;
      category: string;
    };
  };
}

export const DigitalIDCard: React.FC<DigitalIDCardProps> = ({ player }) => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 1 ? prev - 1 : 60));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const defaultPlayer = {
    fullName: 'Juan Antonio Pérez',
    dni: '1726543210',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    isSuspended: false,
    communityPoints: 145,
    team: {
      name: 'Club Deportivo Mena Alta',
      logoUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=120&auto=format&fit=crop&q=80',
      category: 'Máxima Categoría',
    },
  };

  const p = player || defaultPlayer;

  return (
    <div className="max-w-md mx-auto my-6 p-6 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 border border-emerald-500/30 shadow-2xl shadow-emerald-950/50 text-white font-sans relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header Badge & Federation Title */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <img
            src={p.team.logoUrl}
            alt="Team Logo"
            className="w-11 h-11 rounded-full object-cover border-2 border-emerald-400/50 shadow-md"
          />
          <div>
            <h3 className="font-bold text-base text-emerald-400 tracking-wide">{p.team.name}</h3>
            <span className="text-xs text-slate-400 font-medium">{p.team.category} • Liga Barrial</span>
          </div>
        </div>
        <span
          className={`px-3 py-1 text-xs font-black uppercase tracking-wider rounded-full shadow-lg ${
            p.isSuspended
              ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 animate-pulse'
              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40'
          }`}
        >
          {p.isSuspended ? '⛔ SUSPENDIDO' : '⚡ HABILITADO'}
        </span>
      </div>

      {/* Main Identity Info */}
      <div className="flex gap-4 items-center mb-6">
        <div className="relative">
          <img
            src={p.photoUrl}
            alt={p.fullName}
            className="w-24 h-24 rounded-2xl object-cover border-2 border-slate-700 shadow-xl"
          />
          <div className="absolute -bottom-2 -right-1 bg-amber-400 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded-full shadow">
            ⭐ {p.communityPoints} PTS
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-extrabold text-white leading-tight mb-1">{p.fullName}</h2>
          <p className="text-xs text-slate-400 font-mono mb-2">CÉDULA / DNI: <span className="text-slate-200 font-semibold">{p.dni}</span></p>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs text-emerald-400 font-semibold">Carnet Oficial Verificado</span>
          </div>
        </div>
      </div>

      {/* Dynamic QR Code Display */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 text-center shadow-inner relative">
        <div className="flex justify-center mb-2">
          {/* High Contrast Mock QR Code graphic */}
          <div className="p-3 bg-white rounded-xl shadow-2xl inline-block">
            <svg className="w-36 h-36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="100" height="100" fill="white" />
              {/* Outer corners */}
              <rect x="5" y="5" width="25" height="25" fill="#020617" />
              <rect x="9" y="9" width="17" height="17" fill="white" />
              <rect x="13" y="13" width="9" height="9" fill="#020617" />

              <rect x="70" y="5" width="25" height="25" fill="#020617" />
              <rect x="74" y="9" width="17" height="17" fill="white" />
              <rect x="78" y="13" width="9" height="9" fill="#020617" />

              <rect x="5" y="70" width="25" height="25" fill="#020617" />
              <rect x="9" y="74" width="17" height="17" fill="white" />
              <rect x="13" y="78" width="9" height="9" fill="#020617" />

              {/* Data modules pattern */}
              <rect x="35" y="10" width="10" height="10" fill="#020617" />
              <rect x="50" y="15" width="8" height="8" fill="#020617" />
              <rect x="35" y="35" width="30" height="30" fill="#020617" />
              <rect x="42" y="42" width="16" height="16" fill="white" />
              <rect x="47" y="47" width="6" height="6" fill="#020617" />
              <rect x="75" y="40" width="15" height="15" fill="#020617" />
              <rect x="40" y="75" width="20" height="20" fill="#020617" />
              <rect x="70" y="70" width="25" height="25" fill="#020617" />
              <rect x="77" y="77" width="11" height="11" fill="white" />
            </svg>
          </div>
        </div>

        {/* Dynamic Refresh Timer Bar */}
        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2">
          <div
            className="bg-emerald-400 h-full transition-all duration-1000 ease-linear"
            style={{ width: `${(timer / 60) * 100}%` }}
          ></div>
        </div>
        <p className="text-[11px] text-slate-400 font-mono">
          El código QR se actualiza dinámicamente en <span className="text-emerald-300 font-bold">{timer}s</span>
        </p>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[10px] text-slate-500 uppercase tracking-widest">Presente este carnet al vocal de mesa al ingresar a cancha</p>
      </div>
    </div>
  );
};
