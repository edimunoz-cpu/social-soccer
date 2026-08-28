import React, { useState, useEffect } from 'react';
import { queueMatchEvent, getQueuedEvents, syncOfflineMatchEvents } from './offlineSync';
import { QRScannerModal } from './QRScannerModal';

export const LiveVocaliaTable: React.FC = () => {
  const [matchMinutes, setMatchMinutes] = useState(23);
  const [isClockRunning, setIsClockRunning] = useState(true);
  const [homeScore, setHomeScore] = useState(2);
  const [awayScore, setAwayScore] = useState(1);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [isOfflineMode, setIsOfflineMode] = useState(!navigator.onLine);
  const [queuedEventsCount, setQueuedEventsCount] = useState(0);

  const [events, setEvents] = useState<any[]>([
    { id: '1', player: 'Carlos Andrade (#10)', team: 'home', type: 'GOAL', minute: 12 },
    { id: '2', player: 'Mateo Silva (#7)', team: 'away', type: 'GOAL', minute: 18 },
    { id: '3', player: 'Esteban Ortiz (#4)', team: 'home', type: 'YELLOW_CARD', minute: 21 },
    { id: '4', player: 'Juan Pérez (#9)', team: 'home', type: 'GOAL', minute: 22 },
  ]);

  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);

  const homeRoster = [
    { id: 'p1', name: 'Carlos Andrade', number: 10, status: 'HABILITADO' },
    { id: 'p2', name: 'Juan Pérez', number: 9, status: 'HABILITADO' },
    { id: 'p3', name: 'Esteban Ortiz', number: 4, status: 'HABILITADO' },
    { id: 'p4', name: 'Diego Torres', number: 1, status: 'HABILITADO' },
  ];

  const awayRoster = [
    { id: 'p5', name: 'Mateo Silva', number: 7, status: 'HABILITADO' },
    { id: 'p6', name: 'Gabriel Benítez', number: 11, status: 'HABILITADO' },
    { id: 'p7', name: 'Roberto Lasso', number: 5, status: 'HABILITADO' },
    { id: 'p8', name: 'Luis Paredes', number: 3, status: 'HABILITADO' },
  ];

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOfflineMode(!navigator.onLine);
    };
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);
    setQueuedEventsCount(getQueuedEvents().length);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  const addEvent = (type: 'GOAL' | 'YELLOW_CARD' | 'RED_CARD' | 'SUB_IN') => {
    if (!selectedPlayer) return;

    const newEv = {
      id: `ev-${Date.now()}`,
      player: `${selectedPlayer.name} (#${selectedPlayer.number})`,
      team: selectedPlayer.teamSide,
      type,
      minute: matchMinutes,
    };

    setEvents([newEv, ...events]);

    if (type === 'GOAL') {
      if (selectedPlayer.teamSide === 'home') setHomeScore((s) => s + 1);
      else setAwayScore((s) => s + 1);
    }

    if (isOfflineMode || !navigator.onLine) {
      queueMatchEvent({
        matchId: 'm101',
        playerId: selectedPlayer.id,
        playerName: selectedPlayer.name,
        eventType: type,
        minute: matchMinutes,
      });
      setQueuedEventsCount(getQueuedEvents().length);
    }

    setSelectedPlayer(null);
  };

  const handleSyncOffline = async () => {
    const result = await syncOfflineMatchEvents(async () => true);
    alert(`Sincronización completa: ${result.syncedCount} eventos subidos a la base de datos.`);
    setQueuedEventsCount(getQueuedEvents().length);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-slate-950 min-h-screen text-white font-sans">
      {/* Header Banner with Match Status & Offline Indicator */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-slate-900 border border-slate-800 rounded-3xl mb-6 shadow-xl">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📋</span>
          <div>
            <h1 className="text-xl font-black text-emerald-400">Vocalía Digital en Vivo</h1>
            <p className="text-xs text-slate-400">Cancha Mena Alta #1 • Categoria Máxima</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {isOfflineMode ? (
            <div className="flex items-center gap-2 bg-amber-500/20 text-amber-400 border border-amber-500/40 px-3 py-1.5 rounded-full text-xs font-bold animate-pulse">
              <span>⚠️ Modo Offline ({queuedEventsCount} eventos en cola)</span>
              {queuedEventsCount > 0 && (
                <button
                  onClick={handleSyncOffline}
                  className="ml-2 bg-amber-500 text-slate-950 px-2 py-0.5 rounded-md hover:bg-amber-400 font-extrabold"
                >
                  Sincronizar
                </button>
              )}
            </div>
          ) : (
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-3 py-1.5 rounded-full text-xs font-bold">
              🟢 Conectado (Red en vivo)
            </span>
          )}

          <button
            onClick={() => setIsScannerOpen(true)}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-2xl shadow-lg flex items-center gap-2 transition-all"
          >
            <span>📷 Escanear QR</span>
          </button>
        </div>
      </div>

      {/* Match Scoreboard */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950 border border-slate-800 rounded-3xl p-6 mb-6 shadow-2xl text-center relative overflow-hidden">
        <div className="flex items-center justify-around mb-4">
          {/* Home Team */}
          <div className="text-center w-1/3">
            <h2 className="text-lg md:text-2xl font-black text-white">CD Mena Alta</h2>
            <span className="text-xs text-emerald-400 font-semibold">LOCAL</span>
          </div>

          {/* Score & Clock */}
          <div className="text-center">
            <div className="text-4xl md:text-6xl font-black text-emerald-400 tracking-wider font-mono">
              {homeScore} - {awayScore}
            </div>
            <div className="inline-flex items-center gap-2 mt-2 px-4 py-1 bg-slate-950/80 rounded-full border border-slate-800 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              <span>{matchMinutes}' Primer Tiempo</span>
            </div>
          </div>

          {/* Away Team */}
          <div className="text-center w-1/3">
            <h2 className="text-lg md:text-2xl font-black text-white">Atlético San José</h2>
            <span className="text-xs text-blue-400 font-semibold">VISITANTE</span>
          </div>
        </div>
      </div>

      {/* Tagger Quick Action Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Home Roster */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4">
          <h3 className="text-sm font-bold text-emerald-400 mb-3 flex items-center justify-between">
            <span>🛡️ Plantilla CD Mena Alta</span>
            <span className="text-xs text-slate-400">Seleccione jugador</span>
          </h3>

          <div className="grid grid-cols-1 gap-2">
            {homeRoster.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPlayer({ ...p, teamSide: 'home' })}
                className={`p-3 rounded-2xl flex items-center justify-between text-left transition-all ${
                  selectedPlayer?.id === p.id
                    ? 'bg-emerald-600 text-white font-bold shadow-lg ring-2 ring-emerald-400'
                    : 'bg-slate-950 text-slate-200 hover:bg-slate-800'
                }`}
              >
                <span>#{p.number} {p.name}</span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full">{p.status}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Away Roster */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4">
          <h3 className="text-sm font-bold text-blue-400 mb-3 flex items-center justify-between">
            <span>⚡ Plantilla Atlético San José</span>
            <span className="text-xs text-slate-400">Seleccione jugador</span>
          </h3>

          <div className="grid grid-cols-1 gap-2">
            {awayRoster.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPlayer({ ...p, teamSide: 'away' })}
                className={`p-3 rounded-2xl flex items-center justify-between text-left transition-all ${
                  selectedPlayer?.id === p.id
                    ? 'bg-blue-600 text-white font-bold shadow-lg ring-2 ring-blue-400'
                    : 'bg-slate-950 text-slate-200 hover:bg-slate-800'
                }`}
              >
                <span>#{p.number} {p.name}</span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full">{p.status}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Player Action Buttons */}
      {selectedPlayer && (
        <div className="bg-slate-900 border-2 border-emerald-500/50 rounded-3xl p-4 mb-6 shadow-2xl animate-fadeIn">
          <p className="text-xs text-slate-400 mb-2">
            Registrar Evento para: <span className="text-white font-bold text-sm">#{selectedPlayer.number} {selectedPlayer.name}</span>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={() => addEvent('GOAL')}
              className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm rounded-2xl shadow flex items-center justify-center gap-2"
            >
              ⚽ + GOL
            </button>
            <button
              onClick={() => addEvent('YELLOW_CARD')}
              className="p-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm rounded-2xl shadow flex items-center justify-center gap-2"
            >
              🟨 TARJETA AMARILLA
            </button>
            <button
              onClick={() => addEvent('RED_CARD')}
              className="p-3 bg-rose-600 hover:bg-rose-500 text-white font-black text-sm rounded-2xl shadow flex items-center justify-center gap-2"
            >
              🟥 TARJETA ROJA
            </button>
            <button
              onClick={() => addEvent('SUB_IN')}
              className="p-3 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm rounded-2xl shadow flex items-center justify-center gap-2"
            >
              🔄 CAMBIO
            </button>
          </div>
        </div>
      )}

      {/* Live Match Feed */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4">
        <h3 className="text-sm font-bold text-slate-300 mb-3">📜 Historial de Incidencias en Vivo</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {events.map((e) => (
            <div key={e.id} className="p-3 bg-slate-950 rounded-xl flex items-center justify-between text-xs">
              <span className="font-mono text-emerald-400 font-bold">{e.minute}'</span>
              <span className="font-semibold">{e.player}</span>
              <span className="font-extrabold uppercase px-2 py-0.5 rounded bg-slate-800">{e.type}</span>
            </div>
          ))}
        </div>
      </div>

      {/* QR Scanner Modal */}
      <QRScannerModal
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        onScanSuccess={(player) => {
          alert(`Jugador Verificado: ${player.fullName} (${player.status})`);
          setIsScannerOpen(false);
        }}
      />
    </div>
  );
};
