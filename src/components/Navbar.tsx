import React from 'react';
import { BookOpen, GraduationCap, LayoutDashboard, Calendar, Share2, Sparkles, Printer, Award, Download } from 'lucide-react';
import { exportOfflineSurvivalPack } from '../services/survivalPackExporter';

interface NavbarProps {
  activeTab: 'standards' | 'dibels' | 'dashboard' | 'schedule' | 'staar' | 'exchange' | 'kit';
  setActiveTab: (tab: 'standards' | 'dibels' | 'dashboard' | 'schedule' | 'staar' | 'exchange' | 'kit') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 border-b border-amber-500/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
        
        {/* LOGO & BRANDING */}
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-lg shadow-amber-500/20">
            <GraduationCap className="w-6 h-6 text-slate-950 stroke-[2.5]" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-amber-300 via-amber-100 to-slate-100 bg-clip-text text-transparent">
                EduPulse
              </span>
              <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-mono font-bold rounded-md">
                TEXAS TEA EDITION
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
              Sovereign Educator & District Intelligence Hub
            </p>
          </div>
        </div>

        {/* MAIN TAB NAVIGATION */}
        <nav className="flex items-center space-x-1 md:space-x-2 bg-slate-900/90 border border-slate-800 p-1.5 rounded-2xl text-xs font-bold">
          <button
            onClick={() => setActiveTab('standards')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl transition-all ${
              activeTab === 'standards'
                ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md shadow-amber-500/20'
                : 'text-slate-300 hover:text-amber-200 hover:bg-slate-950'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden sm:inline">TEKS Registry</span>
          </button>

          <button
            onClick={() => setActiveTab('staar')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl transition-all ${
              activeTab === 'staar'
                ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md shadow-amber-500/20'
                : 'text-slate-300 hover:text-amber-200 hover:bg-slate-950'
            }`}
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">STAAR 2.0 Suite</span>
          </button>

          <button
            onClick={() => setActiveTab('dibels')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl transition-all ${
              activeTab === 'dibels'
                ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md shadow-amber-500/20'
                : 'text-slate-300 hover:text-amber-200 hover:bg-slate-950'
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">mCLASS DIBELS</span>
          </button>

          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl transition-all ${
              activeTab === 'dashboard'
                ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md shadow-amber-500/20'
                : 'text-slate-300 hover:text-amber-200 hover:bg-slate-950'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span className="hidden sm:inline">Deficit Roster</span>
          </button>

          <button
            onClick={() => setActiveTab('schedule')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl transition-all ${
              activeTab === 'schedule'
                ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md shadow-amber-500/20'
                : 'text-slate-300 hover:text-amber-200 hover:bg-slate-950'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Weekly Planner</span>
          </button>

          <button
            onClick={() => setActiveTab('exchange')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl transition-all ${
              activeTab === 'exchange'
                ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md shadow-amber-500/20'
                : 'text-slate-300 hover:text-amber-200 hover:bg-slate-950'
            }`}
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Exchange</span>
          </button>
        </nav>

        {/* BADGES, SURVIVAL PACK & PRINT BUTTON */}
        <div className="flex items-center space-x-2">
          <button
            onClick={exportOfflineSurvivalPack}
            className="flex items-center space-x-1.5 px-3 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold rounded-xl transition-all shadow-md shadow-amber-500/20"
            title="Download 100% Offline Survival Pack JSON"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span className="hidden xl:inline">Offline Survival Pack</span>
          </button>

          <button
            onClick={() => window.print()}
            className="flex items-center space-x-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-amber-300 text-xs font-bold rounded-xl transition-all"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden lg:inline">Print Page</span>
          </button>
        </div>

      </div>
    </header>
  );
};
