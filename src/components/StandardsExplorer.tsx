import React, { useState, useEffect } from 'react';
import { Search, Filter, BookOpen, Brain, Eye, FileText, Users, Sparkles, CheckCircle2, ListTree, Grid, Layers, Type, Share2, MessageSquare, ArrowRight, Zap } from 'lucide-react';
import { StandardItem } from '../data/standardsData';
import { getAllAvailableStandards, findOrGenerateTeksStandard } from '../services/teksIntelligenceEngine';

interface StandardsExplorerProps {
  onSelectStandard: (standard: StandardItem, initialTab: 'teacher' | 'student' | 'ubd' | 'worksheets' | 'exemplar') => void;
  selectedStateCode?: string;
}

export const StandardsExplorer: React.FC<StandardsExplorerProps> = ({ onSelectStandard, selectedStateCode = 'ALL' }) => {
  const [selectedState, setSelectedState] = useState<string>('ALL');
  const [selectedGrade, setSelectedGrade] = useState<string>('ALL');
  const [selectedSubject, setSelectedSubject] = useState<string>('ALL');
  const [selectedStrand, setSelectedStrand] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'inventory'>('grid');
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState<'normal' | 'large' | 'xlarge'>('normal');

  // Sync with prop if passed
  useEffect(() => {
    if (selectedStateCode && selectedStateCode !== 'ALL') {
      setSelectedState(selectedStateCode);
    }
  }, [selectedStateCode]);

  // KEYBOARD SHORTCUT (/) FOR QUICK SEARCH FOCUS
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === '/' || (e.metaKey && e.key === 'k')) && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        const searchInput = document.getElementById('teks-search-input');
        if (searchInput) searchInput.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const allStandards = getAllAvailableStandards();

  const filteredStandards = allStandards
    .filter((item) => {
      const matchesGrade = selectedGrade === 'ALL'
        || item.grade === selectedGrade
        || (selectedGrade === 'Middle School' && (item.grade === '6th Grade' || item.grade === '7th Grade' || item.grade === '8th Grade' || item.grade === 'Middle School'));

      const matchesSubject = selectedSubject === 'ALL' || item.subject === selectedSubject;
      const matchesStrand = selectedStrand === 'ALL' || (item.strand && item.strand.includes(selectedStrand));
      const matchesQuery =
        item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.strand && item.strand.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesGrade && matchesSubject && matchesStrand && matchesQuery;
    })
    .map((item) => {
      // DYNAMIC STATE BENCHMARK CONVERSION ENGINE
      const activeState = selectedState.toLowerCase();
      
      if (activeState === 'best') {
        const bestCode = item.code.replace(/TEKS\s*/gi, 'FL B.E.S.T. MA.');
        return {
          ...item,
          code: item.state === 'best' ? item.code : bestCode,
          state: 'best',
          title: item.title.includes('B.E.S.T.') ? item.title : `Florida B.E.S.T.: ${item.title}`
        };
      }
      if (activeState === 'sol') {
        const solCode = item.code.replace(/TEKS\s*/gi, 'VA.SOL.MATH.');
        return {
          ...item,
          code: item.state === 'sol' ? item.code : solCode,
          state: 'sol',
          title: item.title.includes('SOL') ? item.title : `Virginia SOL: ${item.title}`
        };
      }
      if (activeState === 'ccss') {
        const ccssCode = item.code.replace(/TEKS\s*/gi, 'CCSS.MATH.CONTENT.');
        return {
          ...item,
          code: item.state === 'ccss' ? item.code : ccssCode,
          state: 'ccss',
          title: item.title.includes('CCSS') ? item.title : `Common Core: ${item.title}`
        };
      }
      if (activeState === 'gse') {
        const gseCode = item.code.replace(/TEKS\s*/gi, 'GA.GSE.MATH.');
        return {
          ...item,
          code: gseCode,
          state: 'gse',
          title: `Georgia GSE: ${item.title}`
        };
      }
      if (activeState === 'ngls') {
        const nglsCode = item.code.replace(/TEKS\s*/gi, 'NY.NGLS.MATH.');
        return {
          ...item,
          code: nglsCode,
          state: 'ngls',
          title: `New York NGLS: ${item.title}`
        };
      }
      return item;
    });

  const handleLiveGenerate = (query: string) => {
    const generated = findOrGenerateTeksStandard(query, selectedGrade !== 'ALL' ? selectedGrade : undefined, selectedSubject !== 'ALL' ? selectedSubject : undefined);
    onSelectStandard(generated, 'teacher');
  };

  // Extract Unique Strands for Dropdown
  const availableStrands = Array.from(new Set(allStandards.map(s => s.strand)));

  return (
    <div className="space-y-6">
      
      {/* LEVEL X CONTROL & FILTER CARD */}
      <div className="bg-slate-900/90 border-2 border-amber-500/40 rounded-3xl p-6 shadow-2xl backdrop-blur-xl space-y-4">
        
        {/* TOP TOOLBAR */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          
          {/* SEARCH INPUT WITH KEYBOARD SHORTCUT BADGE */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-amber-400" />
            <input
              id="teks-search-input"
              type="text"
              placeholder="Search TEKS code, keyword, or strand (e.g. 1.1B, 1.3B, 5.7A, regrouping, WEDCC)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-20 py-3 bg-slate-950 border border-slate-800 rounded-2xl focus:border-amber-500 text-slate-100 text-sm placeholder:text-slate-500 outline-none font-medium"
            />
            <span className="absolute right-3 top-3 px-2 py-0.5 bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 rounded-md">
              / or ⌘K
            </span>
          </div>

          {/* VIEW MODE & FONT SIZE SCALER CONTROLS */}
          <div className="flex items-center space-x-2 w-full lg:w-auto justify-end">
            
            {/* Font Scaler */}
            <div className="flex items-center space-x-1 bg-slate-950 border border-slate-800 p-1 rounded-xl">
              <Type className="w-3.5 h-3.5 text-slate-400 ml-2" />
              <button
                onClick={() => setFontSizeMultiplier('normal')}
                className={`px-2 py-1 text-xs rounded-lg font-bold ${fontSizeMultiplier === 'normal' ? 'bg-amber-500 text-slate-950' : 'text-slate-400'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSizeMultiplier('large')}
                className={`px-2 py-1 text-sm rounded-lg font-bold ${fontSizeMultiplier === 'large' ? 'bg-amber-500 text-slate-950' : 'text-slate-400'}`}
              >
                A+
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-1 bg-slate-950 border border-slate-800 p-1 rounded-xl">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold ${viewMode === 'grid' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>TEKS App Grid</span>
              </button>
              <button
                onClick={() => setViewMode('inventory')}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold ${viewMode === 'inventory' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400'}`}
              >
                <ListTree className="w-3.5 h-3.5" />
                <span>Master Inventory</span>
              </button>
            </div>

          </div>

        </div>

        {/* STATE & STRAND SELECTOR DROPDOWNS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 border-t border-slate-800/80">
          
          {/* State Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0">State System:</span>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-3 py-2 focus:border-amber-500 outline-none font-bold"
            >
              <option value="ALL">All States (National Engine)</option>
              <option value="teks">Texas (TEKS Official)</option>
              <option value="ccss">Common Core (CCSS)</option>
              <option value="best">Florida (B.E.S.T.)</option>
              <option value="sol">Virginia (SOL)</option>
              <option value="gse">Georgia (GSE)</option>
              <option value="ngls">New York (NGLS)</option>
            </select>
          </div>

          {/* Subject Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0">Subject:</span>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-3 py-2 focus:border-amber-500 outline-none font-bold"
            >
              <option value="ALL">All Subjects</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Reading/ELA">Reading / ELA</option>
              <option value="Science">Science</option>
              <option value="Social Studies">Social Studies</option>
              <option value="CTE">CTE / Career & Tech Ed</option>
            </select>
          </div>

          {/* Strand Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0">Strand / Category:</span>
            <select
              value={selectedStrand}
              onChange={(e) => setSelectedStrand(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-3 py-2 focus:border-amber-500 outline-none font-bold truncate"
            >
              <option value="ALL">All Strands</option>
              {availableStrands.map((strand, idx) => (
                <option key={idx} value={strand}>{strand}</option>
              ))}
            </select>
          </div>

        </div>

        {/* GRADE PILLS */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/60">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Grade Level:</span>
          {['ALL', 'Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade', '6th Grade', '7th Grade', '8th Grade', 'Middle School', 'High School'].map((grade) => (
            <button
              key={grade}
              onClick={() => setSelectedGrade(grade)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedGrade === grade
                  ? 'bg-amber-500 text-slate-950 font-extrabold shadow-md shadow-amber-500/20'
                  : 'bg-slate-950 border border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              {grade}
            </button>
          ))}
        </div>

      </div>

      {/* LIVE TEKS INTELLIGENCE GENERATOR PROMPT BANNER */}
      {searchQuery && (
        <div 
          onClick={() => handleLiveGenerate(searchQuery)}
          className="bg-gradient-to-r from-amber-950/80 via-slate-900 to-amber-950/80 border-2 border-amber-500/60 hover:border-amber-400 rounded-3xl p-5 shadow-2xl cursor-pointer group flex items-center justify-between transition-all"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-amber-500/20 border border-amber-500/40 rounded-2xl flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-amber-400 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-extrabold text-amber-300 uppercase tracking-wider font-mono">⚡ Live TEKS Intelligence Engine</span>
                <span className="px-2 py-0.5 bg-amber-500 text-slate-950 font-bold text-[10px] rounded-md">INSTANT 14-POINT SYNTHESIS</span>
              </div>
              <h4 className="text-base font-extrabold text-slate-100 mt-0.5">
                Generate Full Strategy Card & NES Lesson Plan for "{searchQuery}"
              </h4>
            </div>
          </div>
          <button className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg flex items-center space-x-1 shrink-0">
            <span>Synthesize Strategy</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* ======================================================== */}
      {/* OFFICIAL TEKS APP REPLICA GRID VIEW */}
      {/* ======================================================== */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredStandards.map((std) => (
            <div
              key={std.id}
              onClick={() => onSelectStandard(std, 'teacher')}
              className="bg-slate-900/90 border-2 border-slate-800 hover:border-amber-500/50 transition-all duration-300 rounded-3xl p-6 shadow-2xl cursor-pointer group flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                
                {/* STRAND CATEGORY HEADER (LIKE OFFICIAL TEKS APP) */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold text-amber-400 font-mono tracking-wide uppercase">
                    {std.strand || `${std.subject} Standards`}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-xl font-mono font-extrabold text-xs">
                      {std.code}
                    </span>
                    <span className="px-2.5 py-0.5 border border-slate-700 text-slate-300 text-xs rounded-md font-semibold">
                      {std.grade}
                    </span>
                  </div>
                </div>

                {/* CLICKABLE TITLE */}
                <h3 className={`font-extrabold text-slate-100 group-hover:text-amber-300 transition-colors leading-snug ${fontSizeMultiplier === 'large' ? 'text-2xl' : 'text-xl'}`}>
                  {std.title}
                </h3>

                {/* OFFICIAL TEKS LEAD-IN & STATEMENT */}
                <div className="bg-slate-950 border border-slate-800/80 rounded-2xl p-4 space-y-2">
                  <span className="text-xs font-bold text-slate-400 italic block">
                    {std.teksOfficialLeadIn || "The student is expected to:"}
                  </span>
                  <p className={`text-slate-200 font-medium leading-relaxed ${fontSizeMultiplier === 'large' ? 'text-base' : 'text-xs'}`}>
                    {std.description}
                  </p>
                </div>

                {/* SWBAT OBJECTIVE */}
                <div className="p-3.5 bg-amber-950/20 border border-amber-500/30 rounded-xl space-y-1">
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">🎯 Measurable SWBAT Objective:</span>
                  <p className="text-xs font-semibold text-slate-200 font-mono">{std.swbatObjective}</p>
                </div>

                {/* ESSENTIAL SKILLS */}
                {std.essentialConcepts && std.essentialConcepts.length > 0 && (
                  <div className="pt-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Essential Mastery Skills:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {std.essentialConcepts.map((concept, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-slate-950 text-slate-300 border border-slate-800 text-[11px] rounded-md font-mono font-semibold">
                          • {concept}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ACTION BUTTONS GRID */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-2 text-xs font-bold">
                <button
                  onClick={(e) => { e.stopPropagation(); onSelectStandard(std, 'teacher'); }}
                  className="flex items-center justify-center space-x-2 px-3 py-2.5 bg-amber-950/40 hover:bg-amber-500/20 border border-amber-500/30 text-amber-200 rounded-xl transition-all"
                >
                  <Brain className="w-4 h-4 text-amber-400" />
                  <span>Teacher Strategy</span>
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); onSelectStandard(std, 'ubd'); }}
                  className="flex items-center justify-center space-x-2 px-3 py-2.5 bg-purple-950/40 hover:bg-purple-500/20 border border-purple-500/30 text-purple-200 rounded-xl transition-all"
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>UbD Backwards</span>
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); onSelectStandard(std, 'student'); }}
                  className="flex items-center justify-center space-x-2 px-3 py-2.5 bg-blue-950/40 hover:bg-blue-500/20 border border-blue-500/30 text-blue-200 rounded-xl transition-all"
                >
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span>Student Anchor</span>
                </button>

                <button
                  onClick={(e) => { e.stopPropagation(); onSelectStandard(std, 'worksheets'); }}
                  className="flex items-center justify-center space-x-2 px-3 py-2.5 bg-emerald-950/40 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-200 rounded-xl transition-all"
                >
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>Worksheets ({std.worksheets?.length || 0})</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* ======================================================== */}
      {/* MASTER INVENTORY TREE VIEW */}
      {/* ======================================================== */}
      {viewMode === 'inventory' && (
        <div className="bg-slate-900/90 border-2 border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-xl font-bold text-slate-100 flex items-center space-x-2">
              <ListTree className="w-5 h-5 text-amber-400" />
              <span>Master Inventory of All TEKS & National Objectives</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">Hierarchical tree view of all standards categorized by strand and sub-strand.</p>
          </div>

          <div className="space-y-4">
            {filteredStandards.map((std) => (
              <div
                key={std.id}
                onClick={() => onSelectStandard(std, 'teacher')}
                className="p-4 bg-slate-950 border border-slate-800 hover:border-amber-500/40 rounded-2xl cursor-pointer transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-md font-mono text-xs font-bold">
                      {std.code}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{std.strand}</span>
                  </div>
                  <h4 className="font-bold text-slate-100 group-hover:text-amber-300 transition-colors text-sm">{std.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-1">{std.description}</p>
                </div>

                <div className="flex items-center space-x-3 shrink-0">
                  <span className="text-xs font-mono text-emerald-400 font-bold">{std.worksheets?.length || 0} Worksheets</span>
                  <div className="p-2 bg-slate-900 group-hover:bg-amber-500/20 text-slate-400 group-hover:text-amber-300 rounded-xl transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
