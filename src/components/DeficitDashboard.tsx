import React, { useState } from 'react';
import { LayoutDashboard, Users, AlertTriangle, TrendingUp, Sparkles, Plus, CheckCircle2, Award, Trash2, ArrowUpRight, Brain } from 'lucide-react';
import { COMPREHENSIVE_STANDARDS } from '../data/standardsData';

export interface StudentScoreRecord {
  id: string;
  name: string;
  grade: string;
  targetStandard: string;
  preTestScore: number;
  postTestScore?: number;
  mclassBenchmarkLevel: 'Well Below' | 'Below' | 'On Track' | 'Above'; // mCLASS DIBELS 8th Edition
  deficitArea: string;
  recommendedIntervention: string;
}

const INITIAL_ROSTER: StudentScoreRecord[] = [
  {
    id: "stu-1",
    name: "Aaliyah Rodriguez",
    grade: "1st Grade",
    targetStandard: "TEKS 1.3B",
    preTestScore: 35,
    postTestScore: 85,
    mclassBenchmarkLevel: "On Track",
    deficitArea: "Missing addend change position (6 + ? = 14)",
    recommendedIntervention: "Part-Part-Whole Mat with Dual-Colored Link Cubes"
  },
  {
    id: "stu-2",
    name: "Marcus Chen",
    grade: "1st Grade",
    targetStandard: "TEKS 1.3B",
    preTestScore: 40,
    postTestScore: 90,
    mclassBenchmarkLevel: "Above",
    deficitArea: "Confusing 'how many more' phrase with addition",
    recommendedIntervention: "Side-by-side length comparison blocks"
  },
  {
    id: "stu-3",
    name: "Jayden Washington",
    grade: "1st Grade",
    targetStandard: "TEKS 1.3B",
    preTestScore: 25,
    postTestScore: 60,
    mclassBenchmarkLevel: "Well Below",
    deficitArea: "Numeral representation above 10",
    recommendedIntervention: "Tier 3 1-on-1 Ten-Frame Touch Counting"
  },
  {
    id: "stu-4",
    name: "Sophia Martinez",
    grade: "1st Grade",
    targetStandard: "TEKS 1.5A",
    preTestScore: 50,
    postTestScore: 95,
    mclassBenchmarkLevel: "On Track",
    deficitArea: "Differentiating story summary vs moral lesson",
    recommendedIntervention: "Moral Compass Graphic Organizer"
  },
  {
    id: "stu-5",
    name: "Liam O'Connor",
    grade: "3rd Grade",
    targetStandard: "TEKS 3.4A",
    preTestScore: 45,
    postTestScore: 80,
    mclassBenchmarkLevel: "Below",
    deficitArea: "Regrouping across zeros (500 - 237)",
    recommendedIntervention: "Expanded Place Value Strip Cards"
  }
];

export const DeficitDashboard: React.FC = () => {
  const [roster, setRoster] = useState<StudentScoreRecord[]>(INITIAL_ROSTER);
  const [newName, setNewName] = useState('');
  const [newPreScore, setNewPreScore] = useState('');
  const [newPostScore, setNewPostScore] = useState('');
  const [newStandard, setNewStandard] = useState('TEKS 1.3B');
  const [newMclass, setNewMclass] = useState<'Well Below' | 'Below' | 'On Track' | 'Above'>('Below');

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newPreScore) return;
    
    const pre = parseFloat(newPreScore);
    const post = newPostScore ? parseFloat(newPostScore) : undefined;
    
    const newRecord: StudentScoreRecord = {
      id: `stu-${Date.now()}`,
      name: newName,
      grade: "1st Grade",
      targetStandard: newStandard,
      preTestScore: pre,
      postTestScore: post,
      mclassBenchmarkLevel: newMclass,
      deficitArea: pre < 50 ? "Tier 3 Critical Deficit in Base Ten Concept" : "Tier 2 Strategic Support in Word Problem Translation",
      recommendedIntervention: pre < 50 ? "1-on-1 Manipulative Touch Counting" : "Guided Partner Desk Mat Practice"
    };

    setRoster([newRecord, ...roster]);
    setNewName('');
    setNewPreScore('');
    setNewPostScore('');
  };

  const handleRemoveStudent = (id: string) => {
    setRoster(roster.filter(s => s.id !== id));
  };

  // Metrics Calculation
  const totalStudents = roster.length;
  const avgPre = totalStudents > 0 ? Math.round(roster.reduce((acc, curr) => acc + curr.preTestScore, 0) / totalStudents) : 0;
  const postStudents = roster.filter(s => s.postTestScore !== undefined);
  const avgPost = postStudents.length > 0 ? Math.round(postStudents.reduce((acc, curr) => acc + (curr.postTestScore || 0), 0) / postStudents.length) : avgPre;
  const growthDelta = avgPost - avgPre;

  const wellBelowCount = roster.filter(s => s.mclassBenchmarkLevel === 'Well Below').length;
  const belowCount = roster.filter(s => s.mclassBenchmarkLevel === 'Below').length;
  const onTrackCount = roster.filter(s => s.mclassBenchmarkLevel === 'On Track').length;
  const aboveCount = roster.filter(s => s.mclassBenchmarkLevel === 'Above').length;

  return (
    <div className="space-y-6">
      
      {/* HEADER BANNER */}
      <div className="bg-slate-900/90 border-2 border-amber-500/40 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-xl font-mono text-xs font-bold">
                mCLASS DIBELS 8th Edition & TEKS Diagnostic
              </span>
              <span className="text-xs font-bold text-emerald-400 font-mono">Live Roster Management</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100 mt-2">
              Classroom Student Roster & Intervention Diagnostic
            </h2>
            <p className="text-slate-300 text-xs md:text-sm mt-1">
              Add or drop students, enter pre/post test scores, and track mCLASS literacy/math benchmark tiers in real-time.
            </p>
          </div>
        </div>

        {/* METRICS CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
          
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Active Roster</span>
            <span className="text-2xl font-extrabold text-slate-100 font-mono">{totalStudents}</span>
          </div>

          <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Avg Pre-Test</span>
            <span className="text-2xl font-extrabold text-amber-400 font-mono">{avgPre}%</span>
          </div>

          <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Avg Post-Test</span>
            <span className="text-2xl font-extrabold text-emerald-400 font-mono">{avgPost}%</span>
          </div>

          <div className="p-4 bg-slate-950 border border-emerald-500/30 rounded-2xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Net Growth Delta</span>
            <span className="text-2xl font-extrabold text-emerald-300 font-mono">+{growthDelta}%</span>
          </div>

        </div>

        {/* mCLASS BENCHMARK SUMMARY BADGES */}
        <div className="pt-2 flex flex-wrap gap-2 text-xs font-bold">
          <span className="text-slate-400 uppercase font-mono tracking-wider mr-2">mCLASS DIBELS Tiers:</span>
          <span className="px-3 py-1 bg-red-950/60 border border-red-500/40 text-red-300 rounded-xl">🔴 Well Below ({wellBelowCount})</span>
          <span className="px-3 py-1 bg-amber-950/60 border border-amber-500/40 text-amber-300 rounded-xl">🟡 Below Benchmark ({belowCount})</span>
          <span className="px-3 py-1 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 rounded-xl">🟢 On Track ({onTrackCount})</span>
          <span className="px-3 py-1 bg-blue-950/60 border border-blue-500/40 text-blue-300 rounded-xl">🔵 Above Benchmark ({aboveCount})</span>
        </div>
      </div>

      {/* SCORE ENTRY FORM */}
      <div className="bg-slate-900/90 border-2 border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
        <h3 className="text-lg font-bold text-slate-100 flex items-center space-x-2">
          <Plus className="w-5 h-5 text-amber-400" />
          <span>Add Student Record</span>
        </h3>

        <form onSubmit={handleAddStudent} className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs font-semibold">
          <input
            type="text"
            placeholder="Student Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 focus:border-amber-500 outline-none"
            required
          />

          <select
            value={newStandard}
            onChange={(e) => setNewStandard(e.target.value)}
            className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 focus:border-amber-500 outline-none"
          >
            {COMPREHENSIVE_STANDARDS.map(s => (
              <option key={s.id} value={s.code}>{s.code} - {s.title} ({s.grade})</option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Pre-Test Score %"
            value={newPreScore}
            onChange={(e) => setNewPreScore(e.target.value)}
            className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 focus:border-amber-500 outline-none"
            required
          />

          <select
            value={newMclass}
            onChange={(e) => setNewMclass(e.target.value as any)}
            className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 focus:border-amber-500 outline-none"
          >
            <option value="Well Below">mCLASS: Well Below</option>
            <option value="Below">mCLASS: Below Benchmark</option>
            <option value="On Track">mCLASS: On Track</option>
            <option value="Above">mCLASS: Above Benchmark</option>
          </select>

          <button
            type="submit"
            className="p-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg"
          >
            + Add Student
          </button>
        </form>
      </div>

      {/* TIER 1 / TIER 2 / TIER 3 AUTO-RETEACH CLUSTERS */}
      <div className="bg-slate-900/90 border-2 border-amber-500/40 rounded-3xl p-6 shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-amber-500 text-slate-950 rounded-xl font-mono text-xs font-extrabold">
                LINK AI ENGINE
              </span>
              <span className="text-xs font-bold text-amber-300 font-mono">Automated Small-Group Clustering</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-100 mt-2">
              Tier 1 / Tier 2 / Tier 3 Reteach & Small Group Clusters
            </h3>
            <p className="text-slate-300 text-xs mt-1">
              Automatically clusters students based on diagnostic performance and generates principal-ready intervention cards.
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center space-x-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold rounded-xl transition-all shadow-lg shadow-amber-500/20"
          >
            <Printer className="w-4 h-4 stroke-[2.5]" />
            <span>Print Small-Group Reteach Plan</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* TIER 3 - INTENSIVE INTERVENTION */}
          <div className="bg-slate-950 border border-red-500/40 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-red-500/20 pb-3">
              <span className="px-3 py-1 bg-red-950 text-red-300 border border-red-500/40 font-mono text-xs font-bold rounded-lg">
                🔴 Tier 3: Intensive (&lt;60%)
              </span>
              <span className="text-xs font-mono text-red-400 font-bold">
                {roster.filter(s => s.preTestScore < 60).length} Students
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-200 uppercase font-mono">Focus Strategy:</p>
              <p className="text-xs text-red-200 font-medium bg-red-950/40 p-3 rounded-xl border border-red-900">
                1-on-1 Concrete Manipulative Touch-Counting & Part-Part-Whole Ten Frames.
              </p>
              <ul className="text-xs text-slate-300 space-y-1 pl-2 font-mono">
                {roster.filter(s => s.preTestScore < 60).map(s => (
                  <li key={s.id} className="flex items-center justify-between">
                    <span>• {s.name}</span>
                    <span className="text-red-400 font-bold">{s.preTestScore}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* TIER 2 - TARGETED RETEACH */}
          <div className="bg-slate-950 border border-amber-500/40 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
              <span className="px-3 py-1 bg-amber-950 text-amber-300 border border-amber-500/40 font-mono text-xs font-bold rounded-lg">
                🟡 Tier 2: Targeted (60-79%)
              </span>
              <span className="text-xs font-mono text-amber-400 font-bold">
                {roster.filter(s => s.preTestScore >= 60 && s.preTestScore < 80).length} Students
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-200 uppercase font-mono">Focus Strategy:</p>
              <p className="text-xs text-amber-200 font-medium bg-amber-950/40 p-3 rounded-xl border border-amber-900">
                Guided Small-Group Peer Partner Mat Practice & Missing Addend Diagrams.
              </p>
              <ul className="text-xs text-slate-300 space-y-1 pl-2 font-mono">
                {roster.filter(s => s.preTestScore >= 60 && s.preTestScore < 80).map(s => (
                  <li key={s.id} className="flex items-center justify-between">
                    <span>• {s.name}</span>
                    <span className="text-amber-400 font-bold">{s.preTestScore}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* TIER 1 - MASTERY & EXTENSION */}
          <div className="bg-slate-950 border border-emerald-500/40 rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
              <span className="px-3 py-1 bg-emerald-950 text-emerald-300 border border-emerald-500/40 font-mono text-xs font-bold rounded-lg">
                🟢 Tier 1: Mastery (80-100%)
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">
                {roster.filter(s => s.preTestScore >= 80).length} Students
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-200 uppercase font-mono">Focus Strategy:</p>
              <p className="text-xs text-emerald-200 font-medium bg-emerald-950/40 p-3 rounded-xl border border-emerald-900">
                DOK Level 4 Real-World Story Problem Writing & Peer Student Mentorship.
              </p>
              <ul className="text-xs text-slate-300 space-y-1 pl-2 font-mono">
                {roster.filter(s => s.preTestScore >= 80).map(s => (
                  <li key={s.id} className="flex items-center justify-between">
                    <span>• {s.name}</span>
                    <span className="text-emerald-400 font-bold">{s.preTestScore}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ROSTER TABLE WITH DELETE BUTTON */}
      <div className="bg-slate-900/90 border-2 border-slate-800 rounded-3xl p-6 shadow-2xl overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono font-bold uppercase">
              <th className="p-3">Student Name</th>
              <th className="p-3">Target TEKS</th>
              <th className="p-3">Pre-Test</th>
              <th className="p-3">Post-Test</th>
              <th className="p-3">mCLASS Status</th>
              <th className="p-3">Identified Deficit Area</th>
              <th className="p-3">Targeted Intervention</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-medium">
            {roster.map((s) => (
              <tr key={s.id} className="hover:bg-slate-950/60 transition-colors">
                <td className="p-3 font-bold text-slate-100">{s.name}</td>
                <td className="p-3 font-mono text-amber-300 font-bold">{s.targetStandard}</td>
                <td className="p-3 font-mono text-amber-400 font-bold">{s.preTestScore}%</td>
                <td className="p-3 font-mono text-emerald-400 font-bold">{s.postTestScore ? `${s.postTestScore}%` : 'Pending'}</td>
                <td className="p-3">
                  <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${
                    s.mclassBenchmarkLevel === 'Well Below' ? 'bg-red-950 text-red-300 border border-red-500/40' :
                    s.mclassBenchmarkLevel === 'Below' ? 'bg-amber-950 text-amber-300 border border-amber-500/40' :
                    s.mclassBenchmarkLevel === 'On Track' ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' :
                    'bg-blue-950 text-blue-300 border border-blue-500/40'
                  }`}>
                    {s.mclassBenchmarkLevel}
                  </span>
                </td>
                <td className="p-3 text-slate-300">{s.deficitArea}</td>
                <td className="p-3 font-mono text-amber-200 font-semibold">{s.recommendedIntervention}</td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => handleRemoveStudent(s.id)}
                    className="p-2 bg-red-950/60 hover:bg-red-500/20 border border-red-500/30 text-red-300 rounded-xl transition-all"
                    title="Drop / Remove Student from roster"
                  >
                    <Trash2 className="w-4 h-4 text-red-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

