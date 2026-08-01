import React from 'react';
import { X, Printer, GraduationCap, CheckCircle2 } from 'lucide-react';

interface PrintableWorksheetModalProps {
  worksheetId?: string | null;
  title?: string | null;
  content?: string | null;
  onClose: () => void;
}

export const PrintableWorksheetModal: React.FC<PrintableWorksheetModalProps> = ({
  worksheetId,
  title,
  content,
  onClose
}) => {
  const displayTitle = title || (worksheetId ? `TEKS NES Demonstration of Learning (DOL) Mini-Quiz [${worksheetId}]` : 'Student Mastery Practice Sheet');
  const displayContent = content || `1. Complete the Demonstration of Learning (DOL) mini-quiz items below.\n2. Show your work clearly in each problem work box.\n3. Verify your solution against the TEKS mastery threshold!`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      
      <div className="bg-white text-slate-900 rounded-3xl w-full max-w-3xl p-8 md:p-12 shadow-2xl space-y-6 print-page relative my-8">
        
        {/* NO PRINT CLOSE & PRINT BUTTONS */}
        <div className="no-print absolute top-6 right-6 flex items-center space-x-2">
          <button
            onClick={() => window.print()}
            className="flex items-center space-x-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print Now</span>
          </button>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* PRINTABLE WORKSHEET HEADER */}
        <div className="border-b-2 border-slate-900 pb-4 space-y-3">
          <div className="flex justify-between items-center text-xs font-semibold text-slate-600 font-mono">
            <span>Name: _______________________________</span>
            <span>Date: ____________</span>
            <span>Class: _________</span>
          </div>

          <div className="flex items-center space-x-3 pt-2">
            <div className="p-2 bg-amber-500 text-slate-950 rounded-lg">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">{displayTitle}</h1>
              <p className="text-xs font-bold text-amber-700 font-mono uppercase tracking-wider">
                EduPulse Sovereign Classroom Practice & Mastery Sheet
              </p>
            </div>
          </div>
        </div>

        {/* WORKSHEET INSTRUCTIONS */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 leading-relaxed font-medium">
          <strong>Instructions:</strong> Read each story problem carefully twice. Use the 10-frame mat or pictorial circle sketches to solve. Show your work and write your final equation in the space provided!
        </div>

        {/* WORKSHEET BODY CONTENT */}
        <div className="space-y-6 pt-2 font-mono text-sm leading-relaxed text-slate-900">
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed font-medium">
            {displayContent}
          </pre>
        </div>

        {/* GRAPHIC ORGANIZER WORKSPACE BOXES */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
          <div className="border-2 border-dashed border-slate-300 rounded-2xl h-40 p-3 relative">
            <span className="text-[11px] font-bold text-slate-400 font-mono uppercase">Problem #1 Work Box (Draw Here):</span>
          </div>
          <div className="border-2 border-dashed border-slate-300 rounded-2xl h-40 p-3 relative">
            <span className="text-[11px] font-bold text-slate-400 font-mono uppercase">Problem #2 Work Box (Draw Here):</span>
          </div>
        </div>

        {/* STUDENT SELF-CHECK FOOTER */}
        <div className="border-t-2 border-slate-900 pt-4 flex items-center justify-between text-xs text-slate-600 font-medium">
          <div className="flex items-center space-x-3">
            <span className="font-bold uppercase tracking-wider text-slate-900">Student Self Check:</span>
            <label className="flex items-center space-x-1 cursor-pointer">
              <input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500" />
              <span>Read 2x</span>
            </label>
            <label className="flex items-center space-x-1 cursor-pointer">
              <input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500" />
              <span>Drew Model</span>
            </label>
            <label className="flex items-center space-x-1 cursor-pointer">
              <input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500" />
              <span>Checked Sign (+/-)</span>
            </label>
          </div>

          <span className="font-mono text-[11px] text-slate-400">EduPulse Free Open Source • www.edupulse.org</span>
        </div>

      </div>
    </div>
  );
};
