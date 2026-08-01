import React, { useState } from 'react';
import { Calendar, Printer, CheckCircle2, FileText, Plus, Trash2, BookOpen, Download } from 'lucide-react';
import { TEXAS_TEKS_MASTER_DATABASE, TexasTeksItem } from '../data/texasTeksData';

interface DailyPlanItem {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  standard: TexasTeksItem;
  notes: string;
}

export const WeeklyPlanner: React.FC = () => {
  const [plans, setPlans] = useState<DailyPlanItem[]>([
    { day: 'Monday', standard: TEXAS_TEKS_MASTER_DATABASE[0], notes: 'Introductory concept exploration with concrete manipulatives and 5-min Do Now opener.' },
    { day: 'Tuesday', standard: TEXAS_TEKS_MASTER_DATABASE[1] || TEXAS_TEKS_MASTER_DATABASE[0], notes: 'Guided practice with pictorial modeling and small group LSAE reteach.' },
    { day: 'Wednesday', standard: TEXAS_TEKS_MASTER_DATABASE[2] || TEXAS_TEKS_MASTER_DATABASE[0], notes: 'Collaborative team center partner challenge and DOK 2 skill concept practice.' },
    { day: 'Thursday', standard: TEXAS_TEKS_MASTER_DATABASE[3] || TEXAS_TEKS_MASTER_DATABASE[0], notes: 'Independent application, TELPAS sentence stem writing, and DOK 3 reasoning.' },
    { day: 'Friday', standard: TEXAS_TEKS_MASTER_DATABASE[4] || TEXAS_TEKS_MASTER_DATABASE[0], notes: 'Demonstration of Learning (DOL) Mini-Quiz assessment and mastery tracking.' }
  ]);

  const handleStandardChange = (idx: number, code: string) => {
    const found = TEXAS_TEKS_MASTER_DATABASE.find(s => s.code === code);
    if (found) {
      setPlans(prev => {
        const next = [...prev];
        next[idx] = { ...next[idx], standard: found };
        return next;
      });
    }
  };

  const handleNotesChange = (idx: number, notes: string) => {
    setPlans(prev => {
      const next = [...prev];
      next[idx] = { ...next[idx], notes };
      return next;
    });
  };

  const handleExportWeeklyPlan = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to export weekly plan.');
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Weekly TEKS Instructional Pacing Plan — EduPulse</title>
        <style>
          @page { size: letter landscape; margin: 0.4in; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0f172a; padding: 16px; }
          .header { border-bottom: 3px solid #f59e0b; padding-bottom: 8px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: flex-end; }
          .title { font-size: 22px; font-weight: 800; color: #0f172a; margin: 0; }
          .subtitle { font-size: 12px; color: #64748b; font-weight: 600; }
          .grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; }
          .day-box { border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px; background: #fafafa; min-height: 380px; font-size: 11px; }
          .day-header { font-weight: 800; font-size: 13px; color: #0f172a; border-bottom: 2px solid #cbd5e1; padding-bottom: 4px; margin-bottom: 6px; text-transform: uppercase; }
          .teks-code { font-weight: 800; color: #d97706; font-size: 12px; margin-bottom: 4px; font-family: monospace; }
          .teks-title { font-weight: 700; color: #1e293b; margin-bottom: 6px; font-size: 11px; }
          .section-title { font-weight: 700; color: #475569; margin-top: 8px; margin-bottom: 2px; text-transform: uppercase; font-size: 10px; }
          .footer { margin-top: 20px; text-align: center; font-size: 10px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 6px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <h1 class="title">EduPulse Executive Weekly Lesson Schedule</h1>
            <div class="subtitle">State Aligned (TEA TEKS) • Principal-Ready Instructional Schedule</div>
          </div>
          <div style="text-align: right; font-size: 11px; font-weight: 600;">
            <div>Teacher: ___________________________</div>
            <div>Week of: ___________________________</div>
          </div>
        </div>

        <div class="grid">
          ${plans.map(p => `
            <div class="day-box">
              <div class="day-header">${p.day}</div>
              <div class="teks-code">${p.standard.code}</div>
              <div class="teks-title">${p.standard.title}</div>
              
              <div class="section-title">SWBAT Objective:</div>
              <div style="font-style: italic; color: #334155; margin-bottom: 6px;">${p.standard.swbatObjective}</div>

              <div class="section-title">NES Lesson Focus:</div>
              <div>${p.notes}</div>

              <div class="section-title">10-Min DOL Question:</div>
              <div style="font-weight: 600; color: #059669;">${p.standard.nesLessonEngine.demonstrationOfLearningDol10Min.dolQuestion}</div>
            </div>
          `).join('')}
        </div>

        <div class="footer">
          EduPulse Sovereign Educator Hub • Principal-Ready Pacing Schedule • Generated Page
        </div>

        <script>
          window.onload = function() { window.print(); };
        </script>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <div className="space-y-6">
      
      {/* HEADER */}
      <div className="p-6 bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 border-2 border-amber-500/40 rounded-3xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-extrabold text-slate-100 tracking-tight">Adaptive 5-Day Weekly Pacing Planner</h2>
          </div>
          <p className="text-slate-300 text-xs mt-1 font-medium">
            Attach TEKS standards to Monday–Friday instructional slots and export principal-ready lesson schedules.
          </p>
        </div>

        <button
          onClick={handleExportWeeklyPlan}
          className="flex items-center space-x-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-2xl shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
        >
          <Printer className="w-4 h-4" />
          <span>Export Weekly Schedule (PDF)</span>
        </button>
      </div>

      {/* 5-DAY CALENDAR GRID */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {plans.map((p, idx) => (
          <div key={p.day} className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              
              {/* DAY BADGE */}
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-xl text-xs font-mono font-bold inline-block">
                {p.day}
              </span>

              {/* SELECT TEKS DROPDOWN */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 font-mono uppercase block">Target TEKS Standard:</label>
                <select
                  value={p.standard.code}
                  onChange={(e) => handleStandardChange(idx, e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-amber-300 text-xs font-mono font-bold rounded-xl p-2.5 focus:ring-2 focus:ring-amber-500"
                >
                  {TEXAS_TEKS_MASTER_DATABASE.map(std => (
                    <option key={std.id} value={std.code}>
                      {std.code} — {std.grade} ({std.subject})
                    </option>
                  ))}
                </select>
              </div>

              {/* STANDARD TITLE */}
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                <span className="text-[10px] font-bold text-emerald-400 font-mono block">SWBAT Objective:</span>
                <p className="text-xs font-semibold text-slate-200 leading-snug">{p.standard.swbatObjective}</p>
              </div>

              {/* DAILY LESSON NOTES */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 font-mono uppercase block">Instructional Strategy Notes:</label>
                <textarea
                  value={p.notes}
                  onChange={(e) => handleNotesChange(idx, e.target.value)}
                  rows={4}
                  className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl p-2.5 focus:ring-2 focus:ring-amber-500 leading-relaxed font-sans"
                  placeholder="Type daily instructional notes..."
                />
              </div>

            </div>

            {/* DOL PREVIEW */}
            <div className="border-t border-slate-800 pt-3">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">10-Min DOL Question:</span>
              <p className="text-[11px] text-slate-300 italic line-clamp-2 mt-0.5">{p.standard.nesLessonEngine.demonstrationOfLearningDol10Min.dolQuestion}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
