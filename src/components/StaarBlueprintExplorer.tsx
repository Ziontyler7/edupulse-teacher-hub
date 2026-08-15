import React, { useState } from 'react';
import { 
  OFFICIAL_STAAR_2026_BLUEPRINTS, 
  StaarBlueprintSpec, 
  StaarReportingCategory 
} from './data/staarBlueprintData';
import { 
  FileSpreadsheet, 
  CheckCircle, 
  Layers, 
  HelpCircle, 
  Sparkles, 
  Award, 
  Target, 
  BookOpen, 
  Compass, 
  FileText,
  Sliders,
  Maximize2,
  RefreshCw,
  Globe
} from 'lucide-react';

interface Props {
  onSelectStandard?: (code: string) => void;
}

export const StaarBlueprintExplorer: React.FC<Props> = ({ onSelectStandard }) => {
  const [selectedBlueprintId, setSelectedBlueprintId] = useState<string>('staar-g3-math-en');
  const [activeNqtTab, setActiveNqtTab] = useState<'Inline Choice' | 'Drag-and-Drop' | 'Hot Spot' | 'SCR'>('Inline Choice');

  // Interactive state for NQT simulator
  const [inlineChoiceVal, setInlineChoiceVal] = useState<string>('');
  const [hotspotSelected, setHotspotSelected] = useState<number | null>(null);
  const [dragDropItems, setDragDropItems] = useState<string[]>(['1/4', '3/4', '1/2', '2/4']);
  const [scrText, setScrText] = useState<string>('');
  const [scrFeedback, setScrFeedback] = useState<{ score: number; notes: string } | null>(null);

  const currentBlueprint: StaarBlueprintSpec = OFFICIAL_STAAR_2026_BLUEPRINTS.find(
    b => b.id === selectedBlueprintId
  ) || OFFICIAL_STAAR_2026_BLUEPRINTS[0];

  const handleEvaluateScr = () => {
    if (!scrText.trim()) {
      setScrFeedback({ score: 0, notes: "No response submitted. State scoring requires a claim and text evidence." });
      return;
    }
    const hasClaim = scrText.length > 25;
    const hasEvidence = scrText.toLowerCase().includes("because") || scrText.toLowerCase().includes("evidence") || scrText.toLowerCase().includes("shows");
    
    if (hasClaim && hasEvidence) {
      setScrFeedback({
        score: 2,
        notes: "🎯 Full Credit (2/2 pts): Student provides a valid claim and corroborates with direct scientific/mathematical evidence."
      });
    } else if (hasClaim || hasEvidence) {
      setScrFeedback({
        score: 1,
        notes: "⚠️ Partial Credit (1/2 pts): Claim or evidence is present, but reasoning connection is incomplete."
      });
    } else {
      setScrFeedback({
        score: 0,
        notes: "❌ No Credit (0/2 pts): Response lacks claim or relevant domain evidence."
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Blueprint Selector */}
      <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden backdrop-blur-md">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                OFFICIAL TEA 2026 BLUEPRINT VAULT
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/40 flex items-center gap-1">
                <Globe className="w-3 h-3" /> {currentBlueprint.language}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <FileSpreadsheet className="w-7 h-7 text-amber-400" />
              {currentBlueprint.title}
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              {currentBlueprint.overviewNotes}
            </p>
          </div>

          {/* Selector Dropdown */}
          <div className="flex flex-col sm:flex-row gap-3">
            <select
              value={selectedBlueprintId}
              onChange={(e) => setSelectedBlueprintId(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500/80 shadow-inner"
            >
              {OFFICIAL_STAAR_2026_BLUEPRINTS.map(b => (
                <option key={b.id} value={b.id}>
                  {b.grade} {b.subject} ({b.language})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800">
          <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/50">
            <span className="text-xs text-slate-400 uppercase font-medium">Total Questions</span>
            <div className="text-xl font-bold text-white mt-0.5">{currentBlueprint.totalQuestions} Items</div>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/50">
            <span className="text-xs text-slate-400 uppercase font-medium">Total Max Points</span>
            <div className="text-xl font-bold text-amber-400 mt-0.5">{currentBlueprint.totalPoints} Points</div>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/50">
            <span className="text-xs text-slate-400 uppercase font-medium">Readiness Weight</span>
            <div className="text-xl font-bold text-emerald-400 mt-0.5">{currentBlueprint.readinessPercentage}</div>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/50">
            <span className="text-xs text-slate-400 uppercase font-medium">New Question Types</span>
            <div className="text-xl font-bold text-cyan-400 mt-0.5">{currentBlueprint.newQuestionTypeMinPercentage}</div>
          </div>
        </div>
      </div>

      {/* Reporting Categories Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentBlueprint.reportingCategories.map((rc) => (
          <div 
            key={rc.id}
            className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-all rounded-2xl p-5 shadow-lg relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  RC {rc.id}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {rc.questionCountRange} • <strong className="text-amber-400">{rc.pointRange}</strong>
                </span>
              </div>
              
              <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                {rc.name}
              </h3>
              
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {rc.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/80">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>Readiness: <strong className="text-emerald-400">{rc.readinessStandardsCount}</strong></span>
                <span>Supporting: <strong className="text-slate-300">{rc.supportingStandardsCount}</strong></span>
              </div>

              {/* Frequent TEKS tags */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {rc.frequentTeksCodes.map((code) => (
                  <button
                    key={code}
                    onClick={() => onSelectStandard && onSelectStandard(code)}
                    className="px-2 py-0.5 text-[11px] rounded bg-slate-800 hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 border border-slate-700 transition"
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive STAAR 2.0 New Question Types (NQT) Simulator */}
      <div className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 shadow-xl backdrop-blur-md">
        <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                INTERACTIVE SIMULATOR
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mt-1 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              STAAR 2.0 New Question Type (NQT) Live Testing Sandbox
            </h3>
          </div>

          {/* Sub-tabs for NQT Types */}
          <div className="flex bg-slate-800/80 p-1 rounded-xl border border-slate-700">
            {(['Inline Choice', 'Drag-and-Drop', 'Hot Spot', 'SCR'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveNqtTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeNqtTab === tab
                    ? 'bg-cyan-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* NQT 1: Inline Choice Interactive Item */}
        {activeNqtTab === 'Inline Choice' && (
          <div className="bg-slate-950/60 rounded-xl p-5 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Item Type: <strong>Inline Choice (1 Point)</strong></span>
              <span className="text-cyan-400">Aliged to: TEKS 3.4K / CCSS 3.OA.A.3</span>
            </div>

            <div className="text-slate-200 text-sm leading-relaxed p-4 bg-slate-900 rounded-lg border border-slate-800">
              A student arranged 24 math counters into 4 equal rows. Which equation represents the number of counters in each row?
              <div className="mt-4 flex items-center gap-3 flex-wrap">
                <span>The model represents</span>
                <select
                  value={inlineChoiceVal}
                  onChange={(e) => setInlineChoiceVal(e.target.value)}
                  className="bg-slate-800 border border-cyan-500/60 text-white rounded-lg px-3 py-1 text-sm focus:outline-none"
                >
                  <option value="">-- Select Expression --</option>
                  <option value="24 / 4 = 6">24 ÷ 4 = 6 🎯</option>
                  <option value="24 - 4 = 20">24 - 4 = 20</option>
                  <option value="24 * 4 = 96">24 × 4 = 96</option>
                </select>
                <span>counters in each row.</span>
              </div>
            </div>

            {inlineChoiceVal && (
              <div className={`p-3 rounded-lg text-xs font-medium ${
                inlineChoiceVal === '24 / 4 = 6' 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                  : 'bg-red-500/20 text-red-300 border border-red-500/40'
              }`}>
                {inlineChoiceVal === '24 / 4 = 6'
                  ? '✅ Correct (1/1 pt): 24 total counters partitioned into 4 equal rows yields 6 counters per row.'
                  : '❌ Incorrect: Review equal groups division vs subtraction.'}
              </div>
            )}
          </div>
        )}

        {/* NQT 2: Drag and Drop Interactive Item */}
        {activeNqtTab === 'Drag-and-Drop' && (
          <div className="bg-slate-950/60 rounded-xl p-5 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Item Type: <strong>Drag-and-Drop Equivalent Fractions (2 Points)</strong></span>
              <span className="text-cyan-400">Aliged to: TEKS 4.3D / 5.3K</span>
            </div>

            <p className="text-sm text-slate-300">
              Order the fraction tiles in ascending order from least to greatest:
            </p>

            <div className="flex gap-2 flex-wrap">
              {dragDropItems.map((val, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const next = [...dragDropItems];
                    const temp = next[idx];
                    next[idx] = next[(idx + 1) % next.length];
                    next[(idx + 1) % next.length] = temp;
                    setDragDropItems(next);
                  }}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-cyan-500/40 rounded-xl text-white font-mono font-bold shadow-md cursor-grab active:cursor-grabbing flex items-center gap-2"
                >
                  <span>{val}</span>
                  <span className="text-[10px] text-slate-500">↔ swap</span>
                </button>
              ))}
            </div>

            <div className="text-xs text-slate-400">
              Current Sequence: <strong className="text-white font-mono">{dragDropItems.join(' < ')}</strong>
            </div>
          </div>
        )}

        {/* NQT 3: Hot Spot Interactive Item */}
        {activeNqtTab === 'Hot Spot' && (
          <div className="bg-slate-950/60 rounded-xl p-5 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Item Type: <strong>Hot Spot Electrical Circuit (1 Point)</strong></span>
              <span className="text-cyan-400">Aliged to: TEKS 5.6B Science</span>
            </div>

            <p className="text-sm text-slate-300">
              Click the hotspot zone that must be connected to complete the closed circuit:
            </p>

            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 1, label: 'Terminal A (Battery +)', correct: false },
                { id: 2, label: 'Switch Gap (Closed Bridge)', correct: true },
                { id: 3, label: 'Insulated Rubber Base', correct: false },
              ].map(zone => (
                <button
                  key={zone.id}
                  onClick={() => setHotspotSelected(zone.id)}
                  className={`p-4 rounded-xl border text-center transition ${
                    hotspotSelected === zone.id
                      ? zone.correct
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                        : 'bg-red-500/20 border-red-500 text-red-300'
                      : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="text-sm">{zone.label}</div>
                  {hotspotSelected === zone.id && (
                    <div className="text-xs mt-1">
                      {zone.correct ? '🎯 Hot Spot Triggered (+1 pt)' : '❌ Incomplete circuit'}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* NQT 4: Short Constructed Response (SCR) */}
        {activeNqtTab === 'SCR' && (
          <div className="bg-slate-950/60 rounded-xl p-5 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Item Type: <strong>Short Constructed Response (2 Points TEA CER Rubric)</strong></span>
              <span className="text-cyan-400">Aliged to: TEKS 8.15D / US Gov 7C</span>
            </div>

            <p className="text-sm text-slate-200">
              Explain how the system of checks and balances prevents any single branch of government from accumulating tyrannical power. Cite at least one specific example from the U.S. Constitution.
            </p>

            <textarea
              value={scrText}
              onChange={(e) => setScrText(e.target.value)}
              placeholder="Type your claim and text evidence here (e.g., The system prevents tyranny because the President can veto Congressional bills, but Congress can override with 2/3 vote...)"
              className="w-full h-28 bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 resize-none font-sans"
            />

            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400">{scrText.length} characters</span>
              <button
                onClick={handleEvaluateScr}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl text-xs transition shadow-md flex items-center gap-1.5"
              >
                <Award className="w-4 h-4" /> Evaluate with TEA 2-Point Rubric
              </button>
            </div>

            {scrFeedback && (
              <div className={`p-3.5 rounded-xl text-xs font-medium border ${
                scrFeedback.score === 2
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : scrFeedback.score === 1
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-red-500/20 text-red-300 border-red-500/40'
              }`}>
                {scrFeedback.notes}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Allowed Designated Supports & SPED Accommodations Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg">
        <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
          <Sliders className="w-4 h-4 text-emerald-400" />
          TEA Authorized Designated Supports & Accessibility Tools for {currentBlueprint.grade} {currentBlueprint.subject}
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {currentBlueprint.allowedDesignatedSupports.map((support, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700/50">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{support}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
