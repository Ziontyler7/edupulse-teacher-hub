import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { StandardsExplorer } from './components/StandardsExplorer';
import { StandardDetailModal } from './components/StandardDetailModal';
import { PrintableWorksheetModal } from './components/PrintableWorksheetModal';
import { DeficitDashboard } from './components/DeficitDashboard';
import { WeeklyPlanner } from './components/WeeklyPlanner';
import { TeacherExchange } from './components/TeacherExchange';
import { PublicDropKit } from './components/PublicDropKit';
import { DibelsMclassSuite } from './components/DibelsMclassSuite';
import { StaarDiagnosticSuite } from './components/StaarDiagnosticSuite';
import { StandardItem, COMPREHENSIVE_STANDARDS } from './data/standardsData';

export function App() {
  const [activeTab, setActiveTab] = useState<'standards' | 'dibels' | 'dashboard' | 'schedule' | 'staar' | 'exchange' | 'kit'>('standards');
  const [selectedStandard, setSelectedStandard] = useState<StandardItem | null>(null);
  const [modalInitialTab, setModalInitialTab] = useState<'teacher' | 'student' | 'ubd' | 'worksheets' | 'exemplar'>('teacher');
  const [printWorksheetId, setPrintWorksheetId] = useState<string | null>(null);

  const handleSelectStandard = (standard: StandardItem, initialTab: 'teacher' | 'student' | 'ubd' | 'worksheets' | 'exemplar') => {
    setSelectedStandard(standard);
    setModalInitialTab(initialTab);
  };

  const handleSelectPrerequisite = (prereqCode: string) => {
    const found = COMPREHENSIVE_STANDARDS.find(s => s.code.toLowerCase().includes(prereqCode.toLowerCase()));
    if (found) {
      setSelectedStandard(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* NAVBAR */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8">
        
        {activeTab === 'standards' && (
          <StandardsExplorer onSelectStandard={handleSelectStandard} />
        )}

        {activeTab === 'staar' && (
          <StaarDiagnosticSuite />
        )}

        {activeTab === 'dibels' && (
          <DibelsMclassSuite />
        )}

        {activeTab === 'dashboard' && (
          <DeficitDashboard />
        )}

        {activeTab === 'schedule' && (
          <WeeklyPlanner />
        )}

        {activeTab === 'exchange' && (
          <TeacherExchange />
        )}

        {activeTab === 'kit' && (
          <PublicDropKit />
        )}

      </main>

      {/* STANDARD DETAIL MODAL */}
      {selectedStandard && (
        <StandardDetailModal
          standard={selectedStandard}
          initialTab={modalInitialTab}
          onClose={() => setSelectedStandard(null)}
          onSelectPrerequisite={handleSelectPrerequisite}
          onOpenWorksheetPrint={(wsId) => setPrintWorksheetId(wsId)}
        />
      )}

      {/* PRINTABLE WORKSHEET MODAL */}
      {printWorksheetId && (
        <PrintableWorksheetModal
          worksheetId={printWorksheetId}
          onClose={() => setPrintWorksheetId(null)}
        />
      )}

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950/80 py-8 text-center text-xs text-slate-400 space-y-2">
        <p className="font-semibold text-slate-300">
          EduPulse — Sovereign Educator Intelligence Platform (TEA TEKS Baseline: July 31, 2026)
        </p>
        <p>100% Free & Open Source for America's Educator Community • Built for Public Good</p>
      </footer>

    </div>
  );
}

export default App;
