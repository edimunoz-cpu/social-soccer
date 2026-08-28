import React, { useState } from 'react';
import { DigitalIDCard } from './player/DigitalIDCard';
import { LiveVocaliaTable } from './vocalia/LiveVocaliaTable';
import { FixturesAndStandings } from './league/FixturesAndStandings';
import { MatchCalendar } from './league/MatchCalendar';
import { DeunaPaymentModal } from './payments/DeunaPaymentModal';
import { PlayerStatsProfile } from './player/PlayerStatsProfile';
import { AnnouncementFeed } from './announcements/AnnouncementFeed';
import { MarketplaceAndIdealEleven } from './community/MarketplaceAndIdealEleven';

export const LigasBarrialesPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'card' | 'vocalia' | 'standings' | 'calendar' | 'payments' | 'stats' | 'news' | 'community'
  >('card');

  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-emerald-500 selection:text-slate-950 pb-12">
      {/* Top Header Navbar */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-4 py-3 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-300 flex items-center justify-center text-slate-950 text-xl font-black shadow-lg shadow-emerald-500/20">
              ⚽
            </div>
            <div>
              <h1 className="text-lg font-black text-white leading-none">LIGAS BARRIALES</h1>
              <span className="text-[11px] text-emerald-400 font-semibold tracking-wider uppercase">
                Liga Mena Alta • Plataforma Oficial
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaymentOpen(true)}
              className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all flex items-center gap-1.5"
            >
              <span>⚡ Pagar Deuna</span>
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Sub-Header Tabs */}
      <nav className="bg-slate-900/60 border-b border-slate-800/80 sticky top-[61px] z-30 overflow-x-auto">
        <div className="max-w-6xl mx-auto flex items-center gap-1 px-4 py-2 text-xs font-bold">
          <button
            onClick={() => setActiveTab('card')}
            className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
              activeTab === 'card'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            📇 Carnet QR
          </button>

          <button
            onClick={() => setActiveTab('vocalia')}
            className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
              activeTab === 'vocalia'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            📋 Vocalía en Vivo
          </button>

          <button
            onClick={() => setActiveTab('standings')}
            className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
              activeTab === 'standings'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            📊 Posiciones
          </button>

          <button
            onClick={() => setActiveTab('calendar')}
            className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
              activeTab === 'calendar'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            📅 Calendario & GPS
          </button>

          <button
            onClick={() => setActiveTab('stats')}
            className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
              activeTab === 'stats'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            📈 Mi Ficha
          </button>

          <button
            onClick={() => setActiveTab('news')}
            className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
              activeTab === 'news'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            📢 Comunicados
          </button>

          <button
            onClick={() => setActiveTab('community')}
            className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
              activeTab === 'community'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            🏆 Comunidad & 11 Ideal
          </button>
        </div>
      </nav>

      {/* Main Active View */}
      <main className="max-w-6xl mx-auto px-4 pt-6">
        {activeTab === 'card' && <DigitalIDCard />}
        {activeTab === 'vocalia' && <LiveVocaliaTable />}
        {activeTab === 'standings' && <FixturesAndStandings />}
        {activeTab === 'calendar' && <MatchCalendar />}
        {activeTab === 'stats' && <PlayerStatsProfile />}
        {activeTab === 'news' && <AnnouncementFeed />}
        {activeTab === 'community' && <MarketplaceAndIdealEleven />}
      </main>

      {/* Deuna Payment Modal */}
      <DeunaPaymentModal isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} />
    </div>
  );
};
