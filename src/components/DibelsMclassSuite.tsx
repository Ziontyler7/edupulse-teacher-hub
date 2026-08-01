import React, { useState } from 'react';
import { BookOpen, Users, AlertTriangle, TrendingUp, Plus, Trash2, CheckCircle2, Award, Sparkles, Brain, FileText } from 'lucide-react';

export interface DibelsStudentRecord {
  id: string;
  name: string;
  grade: 'Kindergarten' | '1st Grade' | '2nd Grade' | '3rd Grade';
  lnfScore?: number; // Letter Naming Fluency
  psfScore?: number; // Phonemic Segmentation Fluency
  nwfClsScore?: number; // Nonsense Word Fluency (Correct Letter Sounds)
  orfWpmScore?: number; // Oral Reading Fluency (Words Per Minute)
  orfAccuracyScore?: number; // Oral Reading Fluency (Accuracy %)
  mazeScore?: number; // Maze Comprehension
  benchmarkStatus: '🔴 Well Below' | '🟡 Below Benchmark' | '🟢 On Track' | '🔵 Above Benchmark';
  rtiTier: 'Tier 3 (Intensive 1-on-1)' | 'Tier 2 (Strategic Small Group)' | 'Tier 1 (Core Instruction)';
  targetIntervention: string;
}

const INITIAL_DIBELS_ROSTER: DibelsStudentRecord[] = [
  {
    id: "dib-1",
    name: "Aaliyah Rodriguez",
    grade: "1st Grade",
    lnfScore: 52,
    psfScore: 58,
    nwfClsScore: 65,
    orfWpmScore: 45,
    orfAccuracyScore: 96,
    mazeScore: 12,
    benchmarkStatus: "🟢 On Track",
    rtiTier: "Tier 1 (Core Instruction)",
    targetIntervention: "Core Grade Level Guided Reading & Expression Practice"
  },
  {
    id: "dib-2",
    name: "Jayden Washington",
    grade: "1st Grade",
    lnfScore: 28,
    psfScore: 30,
    nwfClsScore: 22,
    orfWpmScore: 18,
    orfAccuracyScore: 82,
    mazeScore: 4,
    benchmarkStatus: "🔴 Well Below",
    rtiTier: "Tier 3 (Intensive 1-on-1)",
    targetIntervention: "1-on-1 Daily 15-Min Phonemic Segmentation & Letter-Sound Drills"
  },
  {
    id: "dib-3",
    name: "Marcus Chen",
    grade: "1st Grade",
    lnfScore: 60,
    psfScore: 62,
    nwfClsScore: 78,
    orfWpmScore: 68,
    orfAccuracyScore: 99,
    mazeScore: 18,
    benchmarkStatus: "🔵 Above Benchmark",
    rtiTier: "Tier 1 (Core Instruction)",
    targetIntervention: "Advanced Reader Inquiry & Extension Novel Study"
  },
  {
    id: "dib-4",
    name: "Sophia Martinez",
    grade: "1st Grade",
    lnfScore: 40,
    psfScore: 45,
    nwfClsScore: 48,
    orfWpmScore: 32,
    orfAccuracyScore: 90,
    mazeScore: 8,
    benchmarkStatus: "🟡 Below Benchmark",
    rtiTier: "Tier 2 (Strategic Small Group)",
    targetIntervention: "Small Group Blend & Digraph Decodable Text Practice (3x/week)"
  }
];

export const DibelsMclassSuite: React.FC = () => {
  const [roster, setRoster] = useState<DibelsStudentRecord[]>(INITIAL_DIBELS_ROSTER);
  const [newName, setNewName] = useState('');
  const [newGrade, setNewGrade] = useState<'Kindergarten' | '1st Grade' | '2nd Grade' | '3rd Grade'>('1st Grade');
  const [newOrfWpm, setNewOrfWpm] = useState('');
  const [newOrfAcc, setNewOrfAcc] = useState('');
  const [newNwf, setNewNwf] = useState('');

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName) return;

    const wpm = newOrfWpm ? parseInt(newOrfWpm) : 30;
    const acc = newOrfAcc ? parseInt(newOrfAcc) : 90;
    
    let status: '🔴 Well Below' | '🟡 Below Benchmark' | '🟢 On Track' | '🔵 Above Benchmark' = '🟢 On Track';
    let tier: 'Tier 3 (Intensive 1-on-1)' | 'Tier 2 (Strategic Small Group)' | 'Tier 1 (Core Instruction)' = 'Tier 1 (Core Instruction)';
    let intervention = "Core Grade Level Instruction";

    if (wpm < 20 || acc < 85) {
      status = '🔴 Well Below';
      tier = 'Tier 3 (Intensive 1-on-1)';
      intervention = "1-on-1 Daily Phonological & Decodable Intensive Drill";
    } else if (wpm < 35 || acc < 92) {
      status = '🟡 Below Benchmark';
      tier = 'Tier 2 (Strategic Small Group)';
      intervention = "Targeted Small Group Decodable Passage Fluency";
    } else if (wpm > 60 && acc >= 98) {
      status = '🔵 Above Benchmark';
      tier = 'Tier 1 (Core Instruction)';
      intervention = "Enrichment & Advanced Comprehension Extension";
    }

    const newRecord: DibelsStudentRecord = {
      id: `dib-${Date.now()}`,
      name: newName,
      grade: newGrade,
      orfWpmScore: wpm,
      orfAccuracyScore: acc,
      nwfClsScore: newNwf ? parseInt(newNwf) : 45,
      benchmarkStatus: status,
      rtiTier: tier,
      targetIntervention: intervention
    };

    setRoster([newRecord, ...roster]);
    setNewName('');
    setNewOrfWpm('');
    setNewOrfAcc('');
    setNewNwf('');
  };

  const handleDropStudent = (id: string) => {
    setRoster(roster.filter(s => s.id !== id));
  };

  // Metrics
  const total = roster.length;
  const wellBelow = roster.filter(s => s.benchmarkStatus === '🔴 Well Below').length;
  const below = roster.filter(s => s.benchmarkStatus === '🟡 Below Benchmark').length;
  const onTrack = roster.filter(s => s.benchmarkStatus === '🟢 On Track').length;
  const above = roster.filter(s => s.benchmarkStatus === '🔵 Above Benchmark').length;

  return (
    <div className="space-y-6">
      
      {/* HEADER BANNER */}
      <div className="bg-slate-900/90 border-2 border-amber-500/40 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-xl font-mono text-xs font-bold">
                mCLASS DIBELS 8th Edition Diagnostic Suite
              </span>
              <span className="text-xs font-bold text-emerald-400 font-mono">Texas Early Literacy Engine</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100 mt-2">
              mCLASS DIBELS 8th Edition Benchmark & RTI Tiering
            </h2>
            <p className="text-slate-300 text-xs md:text-sm mt-1">
              Official measures for Letter Naming (LNF), Phonemic Segmentation (PSF), Nonsense Words (NWF), Oral Reading Fluency (ORF), and Maze Comprehension.
            </p>
          </div>
        </div>

        {/* METRICS CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
          <div className="p-4 bg-slate-950 border border-red-500/40 rounded-2xl">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">Well Below (Tier 3)</span>
            <span className="text-2xl font-extrabold text-red-300 font-mono">{wellBelow} Students</span>
          </div>

          <div className="p-4 bg-slate-950 border border-amber-500/40 rounded-2xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Below (Tier 2)</span>
            <span className="text-2xl font-extrabold text-amber-300 font-mono">{below} Students</span>
          </div>

          <div className="p-4 bg-slate-950 border border-emerald-500/40 rounded-2xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">On Track (Tier 1)</span>
            <span className="text-2xl font-extrabold text-emerald-300 font-mono">{onTrack} Students</span>
          </div>

          <div className="p-4 bg-slate-950 border border-blue-500/40 rounded-2xl">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">Above Benchmark</span>
            <span className="text-2xl font-extrabold text-blue-300 font-mono">{above} Students</span>
          </div>
        </div>
      </div>

      {/* ADD STUDENT FORM */}
      <div className="bg-slate-900/90 border-2 border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
        <h3 className="text-lg font-bold text-slate-100 flex items-center space-x-2">
          <Plus className="w-5 h-5 text-amber-400" />
          <span>Add Student mCLASS Assessment Score</span>
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
            value={newGrade}
            onChange={(e) => setNewGrade(e.target.value as any)}
            className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 focus:border-amber-500 outline-none"
          >
            <option value="Kindergarten">Kindergarten</option>
            <option value="1st Grade">1st Grade</option>
            <option value="2nd Grade">2nd Grade</option>
            <option value="3rd Grade">3rd Grade</option>
          </select>

          <input
            type="number"
            placeholder="ORF Words Correct (WPM)"
            value={newOrfWpm}
            onChange={(e) => setNewOrfWpm(e.target.value)}
            className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 focus:border-amber-500 outline-none"
          />

          <input
            type="number"
            placeholder="ORF Accuracy %"
            value={newOrfAcc}
            onChange={(e) => setNewOrfAcc(e.target.value)}
            className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-100 focus:border-amber-500 outline-none"
          />

          <button
            type="submit"
            className="p-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg"
          >
            + Add mCLASS Record
          </button>
        </form>
      </div>

      {/* ROSTER TABLE */}
      <div className="bg-slate-900/90 border-2 border-slate-800 rounded-3xl p-6 shadow-2xl overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 font-mono font-bold uppercase">
              <th className="p-3">Student Name</th>
              <th className="p-3">Grade</th>
              <th className="p-3">ORF (WPM)</th>
              <th className="p-3">Accuracy %</th>
              <th className="p-3">mCLASS Status</th>
              <th className="p-3">RTI Tier</th>
              <th className="p-3">Targeted Literacy Intervention</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 font-medium">
            {roster.map((s) => (
              <tr key={s.id} className="hover:bg-slate-950/60 transition-colors">
                <td className="p-3 font-bold text-slate-100">{s.name}</td>
                <td className="p-3 text-slate-300">{s.grade}</td>
                <td className="p-3 font-mono text-amber-400 font-bold">{s.orfWpmScore || 0} WPM</td>
                <td className="p-3 font-mono text-emerald-400 font-bold">{s.orfAccuracyScore || 0}%</td>
                <td className="p-3 font-bold">{s.benchmarkStatus}</td>
                <td className="p-3 font-mono text-amber-200">{s.rtiTier}</td>
                <td className="p-3 text-slate-300 font-semibold">{s.targetIntervention}</td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => handleDropStudent(s.id)}
                    className="p-2 bg-red-950/60 hover:bg-red-500/20 border border-red-500/30 text-red-300 rounded-xl transition-all"
                    title="Drop student record"
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
