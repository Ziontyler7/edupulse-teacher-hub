import React, { useState } from 'react';
import { Sparkles, CheckCircle2, XCircle, HelpCircle, Clock, Award, RefreshCw, BookOpen, AlertTriangle, ArrowRight } from 'lucide-react';
import { TEXAS_TEKS_MASTER_DATABASE, TexasTeksItem } from '../data/texasTeksData';
import { generateStaarQuestionSet, StaarQuestionItem } from '../services/staarQuestionGenerator';

export const StaarDiagnosticSuite: React.FC = () => {
  const [selectedStandard, setSelectedStandard] = useState<TexasTeksItem>(TEXAS_TEKS_MASTER_DATABASE[0]);
  const [questions, setQuestions] = useState<StaarQuestionItem[]>(() => generateStaarQuestionSet(TEXAS_TEKS_MASTER_DATABASE[0]));
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const handleSelectStandard = (std: TexasTeksItem) => {
    setSelectedStandard(std);
    setQuestions(generateStaarQuestionSet(std));
    setUserAnswers({});
    setSubmitted(false);
    setCurrentIdx(0);
  };

  const handleOptionSelect = (qId: string, option: string) => {
    if (submitted) return;
    setUserAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  const score = calculateScore();

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      
      {/* HEADER BANNER */}
      <div className="p-6 md:p-8 bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border-2 border-amber-500/40 rounded-3xl shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2.5 bg-amber-500 text-slate-950 rounded-2xl shadow-lg shadow-amber-500/20">
              <Award className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-2xl font-extrabold text-slate-100 tracking-tight">
                STAAR 2.0 Interactive Diagnostic Suite
              </span>
              <span className="ml-3 px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold rounded-md">
                AUTO-GRADED
              </span>
            </div>
          </div>
          <p className="text-xs md:text-sm text-slate-300 font-medium">
            Test student mastery across all 5 new STAAR 2.0 item types (Inline Choice, Hot Spot, SCR, Drag-and-Drop, Multipart).
          </p>
        </div>

        {/* SELECT STANDARD DROPDOWN */}
        <div className="w-full md:w-72 space-y-1">
          <label className="text-xs font-bold text-amber-400 font-mono uppercase tracking-wider block">Target TEKS Standard:</label>
          <select
            value={selectedStandard.code}
            onChange={(e) => {
              const found = TEXAS_TEKS_MASTER_DATABASE.find(s => s.code === e.target.value);
              if (found) handleSelectStandard(found);
            }}
            className="w-full bg-slate-950 border border-slate-700 text-amber-300 font-mono text-xs rounded-xl p-3 focus:ring-2 focus:ring-amber-500"
          >
            {TEXAS_TEKS_MASTER_DATABASE.map(std => (
              <option key={std.id} value={std.code}>
                {std.code} — {std.grade} ({std.subject})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* QUIZ INTERFACE */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-xl">
        
        {/* TOP STATUS BAR */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 text-xs font-mono">
          <div className="flex items-center space-x-2 text-slate-400">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Question {currentIdx + 1} of {questions.length}</span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg font-bold border border-slate-700">
              {questions[currentIdx].type}
            </span>
            <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-lg font-bold border border-amber-500/40">
              DOK Level {questions[currentIdx].dokLevel}
            </span>
          </div>
        </div>

        {/* QUESTION DISPLAY */}
        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-bold text-slate-100 leading-snug">
            {questions[currentIdx].questionPrompt}
          </h3>

          {/* OPTIONS GRID */}
          <div className="grid grid-cols-1 gap-3 pt-2">
            {(questions[currentIdx].options || []).map((opt, oIdx) => {
              const isSelected = userAnswers[questions[currentIdx].id] === opt;
              const isCorrect = questions[currentIdx].correctAnswer === opt;

              let btnStyle = "bg-slate-950 border-slate-800 text-slate-200 hover:border-amber-500/50";
              if (isSelected) {
                btnStyle = "bg-amber-500/20 border-amber-500 text-amber-200 font-bold";
              }
              if (submitted) {
                if (isCorrect) {
                  btnStyle = "bg-emerald-950/60 border-emerald-500 text-emerald-200 font-bold";
                } else if (isSelected && !isCorrect) {
                  btnStyle = "bg-rose-950/60 border-rose-500 text-rose-200 font-bold";
                }
              }

              return (
                <button
                  key={oIdx}
                  onClick={() => handleOptionSelect(questions[currentIdx].id, opt)}
                  disabled={submitted}
                  className={`w-full text-left p-4 rounded-2xl border text-sm transition-all flex items-center justify-between ${btnStyle}`}
                >
                  <span>{opt}</span>
                  {submitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />}
                  {submitted && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>

          {/* SHORT CONSTRUCTED RESPONSE TEXTAREA */}
          {questions[currentIdx].type === 'Short Constructed Response (SCR)' && (
            <textarea
              value={userAnswers[questions[currentIdx].id] || ''}
              onChange={(e) => handleOptionSelect(questions[currentIdx].id, e.target.value)}
              disabled={submitted}
              placeholder="Type your short constructed response answer here (cite text evidence or show mathematical steps)..."
              className="w-full h-32 bg-slate-950 border border-slate-800 rounded-2xl p-4 text-xs font-mono text-slate-200 focus:ring-2 focus:ring-amber-500"
            />
          )}
        </div>

        {/* EXPLANATION ON SUBMIT */}
        {submitted && (
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-2 text-xs">
            <span className="font-bold text-amber-400 font-mono uppercase tracking-wider block">💡 Teacher Answer Key & Rationalization:</span>
            <p className="text-slate-300 font-medium">{questions[currentIdx].explanation}</p>
          </div>
        )}

        {/* NAVIGATION & SUBMIT CONTROLS */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <button
            onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
            disabled={currentIdx === 0}
            className="px-4 py-2 bg-slate-950 border border-slate-800 text-slate-300 rounded-xl text-xs font-bold disabled:opacity-40"
          >
            Previous
          </button>

          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 rounded-xl text-xs font-extrabold shadow-lg shadow-amber-500/20 hover:scale-105 transition-all"
            >
              Submit & Grade Diagnostic
            </button>
          ) : (
            <button
              onClick={() => handleSelectStandard(selectedStandard)}
              className="px-6 py-2.5 bg-slate-800 border border-slate-700 text-amber-300 rounded-xl text-xs font-bold flex items-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Retake Diagnostic</span>
            </button>
          )}

          <button
            onClick={() => setCurrentIdx(prev => Math.min(questions.length - 1, prev + 1))}
            disabled={currentIdx === questions.length - 1}
            className="px-4 py-2 bg-slate-950 border border-slate-800 text-slate-300 rounded-xl text-xs font-bold disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      {/* GRADED SCORE SUMMARY BANNER */}
      {submitted && (
        <div className="p-6 bg-slate-900 border-2 border-emerald-500/40 rounded-3xl space-y-4 shadow-xl text-center">
          <div className="inline-block p-4 bg-emerald-500/20 border border-emerald-500/40 rounded-full mb-1">
            <Award className="w-10 h-10 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-100 font-mono">
            Diagnostic Score: <span className={score >= 80 ? "text-emerald-400" : "text-amber-400"}>{score}%</span>
          </h2>
          <p className="text-xs text-slate-300 max-w-lg mx-auto font-medium">
            {score >= 80
              ? `🎉 Student demonstrated mastery in ${selectedStandard.code}! Ready for extension activities.`
              : `⚠️ Student needs targeted remediation in ${selectedStandard.code}. Assign LSAE Small Group S1 Reteach.`}
          </p>
        </div>
      )}

    </div>
  );
};
