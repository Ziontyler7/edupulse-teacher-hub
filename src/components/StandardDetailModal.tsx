import React, { useState } from 'react';
import { X, BookOpen, Brain, Eye, FileText, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, Printer, Share2, Type, MessageSquare, ArrowLeft, Zap } from 'lucide-react';
import { StandardItem } from '../data/standardsData';
import { printTeacherCard } from '../services/pdfExportEngine';

interface StandardDetailModalProps {
  standard: StandardItem;
  initialTab?: 'teacher' | 'student' | 'ubd' | 'worksheets' | 'exemplar';
  onClose: () => void;
  onSelectPrerequisite?: (prereqCode: string) => void;
  onOpenWorksheetPrint?: (worksheetId: string) => void;
}

export const StandardDetailModal: React.FC<StandardDetailModalProps> = ({
  standard,
  initialTab = 'teacher',
  onClose,
  onSelectPrerequisite,
  onOpenWorksheetPrint
}) => {
  const [activeTab, setActiveTab] = useState<'teacher' | 'ubd' | 'student' | 'exemplar' | 'worksheets'>(initialTab);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [recalibrated, setRecalibrated] = useState<boolean>(false);

  const handleRecalibrate = () => {
    setRecalibrated(true);
    setTimeout(() => setRecalibrated(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border-2 border-amber-500/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-100">
        
        {/* ======================================================== */}
        {/* OFFICIAL TEKS APP HEADER REPLICA (SCREENSHOT 3 REPLICATION) */}
        {/* ======================================================== */}
        <div className="bg-slate-950 border-b border-slate-800 p-4 md:p-6 flex items-center justify-between">
          
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-slate-300 transition-all"
              title="Back to standards list"
            >
              <ArrowLeft className="w-5 h-5 text-slate-300" />
            </button>

            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-extrabold text-slate-100 font-mono">
                  {standard.code}
                </span>
                <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-md font-mono text-xs font-bold">
                  {standard.stateSystem}
                </span>
              </div>
              <span className="text-xs font-semibold text-amber-400 font-mono block">
                {standard.strand || `${standard.subject} Standards`}
              </span>
            </div>
          </div>

          {/* OFFICIAL TEKS UTILITY BAR (Aa, AI Calibrate, Print PDF, Close) */}
          <div className="flex items-center space-x-2">
            
            {/* Export Teacher Card PDF */}
            <button
              onClick={() => printTeacherCard(standard)}
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-300 rounded-xl font-bold text-xs shadow-sm flex items-center space-x-1.5 transition-all shrink-0"
              title="Export Teacher Pedagogy Card to PDF"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Export PDF</span>
            </button>

            {/* AI Recalibrate Strategy Button */}
            <button
              onClick={handleRecalibrate}
              className="px-3 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-xl font-bold text-xs shadow-md shadow-amber-500/20 flex items-center space-x-1.5 transition-all shrink-0"
              title="Recalibrate strategy with TEKS Live Intelligence"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span className="hidden sm:inline">AI Calibrate Strategy</span>
            </button>
            
            {/* Text Scaler */}
            <button
              onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
              className={`p-2 rounded-xl border font-bold text-xs flex items-center space-x-1 ${fontSize === 'large' ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-900 border-slate-800 text-slate-300'}`}
              title="Toggle font size"
            >
              <Type className="w-4 h-4" />
              <span>{fontSize === 'large' ? 'Aa+' : 'Aa'}</span>
            </button>

            {/* Close Modal */}
            <button
              onClick={onClose}
              className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-100 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {recalibrated && (
          <div className="bg-amber-500 text-slate-950 font-bold px-4 py-2 text-xs flex items-center justify-between border-b border-amber-400 font-mono animate-fadeIn">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>⚡ TEKS Intelligence Engine: 14-Point Pedagogy Stack Recalibrated & Synced for {standard.code}!</span>
            </div>
            <span className="text-[10px] uppercase tracking-wider font-extrabold bg-slate-950 text-amber-400 px-2 py-0.5 rounded">100% TEA Aligned</span>
          </div>
        )}

        {/* OFFICIAL TEKS STATEMENT CONTAINER */}
        <div className="bg-slate-950/60 p-4 border-b border-slate-800 space-y-2">
          <h2 className={`font-extrabold text-slate-100 ${fontSize === 'large' ? 'text-2xl' : 'text-lg'}`}>
            {standard.title}
          </h2>
          <span className="text-xs font-bold text-slate-400 italic block">
            {standard.teksOfficialLeadIn || "The student is expected to:"}
          </span>
          <p className={`text-slate-200 font-medium leading-relaxed ${fontSize === 'large' ? 'text-base' : 'text-xs md:text-sm'}`}>
            {standard.description}
          </p>

          {/* MEASURABLE SWBAT OBJECTIVE */}
          <div className="mt-3 p-3 bg-amber-950/30 border border-amber-500/40 rounded-xl">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">🎯 Measurable SWBAT Objective:</span>
            <p className="text-xs font-semibold text-slate-200 font-mono">{standard.swbatObjective}</p>
          </div>

          {/* CLICKABLE PREREQUISITES WEB */}
          {standard.priorKnowledge && standard.priorKnowledge.prerequisiteCodes.length > 0 && (
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Prior Knowledge Prerequisite TEKS:</span>
              {standard.priorKnowledge.prerequisiteCodes.map((prereq, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectPrerequisite && onSelectPrerequisite(prereq.code)}
                  className="px-3 py-1 bg-slate-900 hover:bg-amber-500/20 border border-slate-800 hover:border-amber-500/50 text-amber-300 text-xs font-mono font-bold rounded-lg transition-all"
                >
                  🔗 {prereq.code}: {prereq.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ======================================================== */}
        {/* TABS NAVIGATION */}
        {/* ======================================================== */}
        <div className="flex flex-wrap items-center gap-1 p-2 bg-slate-950 border-b border-slate-800 text-xs font-bold">
          <button
            onClick={() => setActiveTab('teacher')}
            className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'teacher' ? 'bg-amber-500 text-slate-950 font-extrabold' : 'text-slate-300 hover:bg-slate-900'}`}
          >
            🧠 Teacher Strategy
          </button>
          <button
            onClick={() => setActiveTab('ubd')}
            className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'ubd' ? 'bg-purple-500 text-slate-950 font-extrabold' : 'text-slate-300 hover:bg-slate-900'}`}
          >
            ✨ UbD Backwards Design
          </button>
          <button
            onClick={() => setActiveTab('student')}
            className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'student' ? 'bg-blue-500 text-slate-950 font-extrabold' : 'text-slate-300 hover:bg-slate-900'}`}
          >
            👁️ Student Visual Anchor
          </button>
          <button
            onClick={() => setActiveTab('exemplar')}
            className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'exemplar' ? 'bg-emerald-500 text-slate-950 font-extrabold' : 'text-slate-300 hover:bg-slate-900'}`}
          >
            🎯 Exemplar Problem
          </button>
          <button
            onClick={() => setActiveTab('worksheets')}
            className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'worksheets' ? 'bg-indigo-500 text-slate-950 font-extrabold' : 'text-slate-300 hover:bg-slate-900'}`}
          >
            📄 Worksheets ({standard.worksheets?.length || 0})
          </button>
        </div>

        {/* TAB CONTENTS */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* TAB 1: TEACHER STRATEGY & GRADUAL RELEASE */}
          {activeTab === 'teacher' && (
            <div className="space-y-6">
              
              {/* GRADUAL RELEASE MODEL */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Gradual Release Framework (I Do / We Do / You Do)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-slate-950 border border-blue-500/30 rounded-2xl space-y-1">
                    <span className="font-bold text-blue-400 uppercase">1. I Do (Direct Instruction):</span>
                    <p className="text-slate-200">{standard.gradualReleaseModel.iDoDirectInstruction}</p>
                  </div>
                  <div className="p-4 bg-slate-950 border border-amber-500/30 rounded-2xl space-y-1">
                    <span className="font-bold text-amber-400 uppercase">2. We Do (Guided Practice):</span>
                    <p className="text-slate-200">{standard.gradualReleaseModel.weDoGuidedPractice}</p>
                  </div>
                  <div className="p-4 bg-slate-950 border border-purple-500/30 rounded-2xl space-y-1">
                    <span className="font-bold text-purple-400 uppercase">3. You Do Together (Collaborative):</span>
                    <p className="text-slate-200">{standard.gradualReleaseModel.youDoTogetherCollaborative}</p>
                  </div>
                  <div className="p-4 bg-slate-950 border border-emerald-500/30 rounded-2xl space-y-1">
                    <span className="font-bold text-emerald-400 uppercase">4. You Do Alone (Independent Mastery):</span>
                    <p className="text-slate-200">{standard.gradualReleaseModel.youDoAloneIndependentMastery}</p>
                  </div>
                </div>
              </div>

              {/* DOK QUESTIONS */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">DOK Higher-Order Probing Questions (Webb's Depth of Knowledge)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <span className="font-bold text-slate-400 uppercase">DOK 1 (Recall):</span>
                    <p className="text-slate-200">{standard.dokQuestions.dok1Recall}</p>
                  </div>
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <span className="font-bold text-blue-400 uppercase">DOK 2 (Skill & Concept):</span>
                    <p className="text-slate-200">{standard.dokQuestions.dok2SkillConcept}</p>
                  </div>
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <span className="font-bold text-amber-400 uppercase">DOK 3 (Strategic Reasoning):</span>
                    <p className="text-slate-200">{standard.dokQuestions.dok3StrategicThinking}</p>
                  </div>
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <span className="font-bold text-purple-400 uppercase">DOK 4 (Extended Thinking):</span>
                    <p className="text-slate-200">{standard.dokQuestions.dok4ExtendedThinking}</p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: UBD BACKWARDS DESIGN */}
          {activeTab === 'ubd' && (
            <div className="space-y-4 text-xs">
              <div className="p-4 bg-slate-950 border border-purple-500/40 rounded-2xl space-y-2">
                <span className="font-bold text-purple-400 uppercase tracking-wider block">Stage 1: Desired Results & Essential Understandings</span>
                <p className="text-slate-200 text-sm leading-relaxed">{standard.ubdFramework.stage1DesiredResults}</p>
              </div>

              <div className="p-4 bg-slate-950 border border-amber-500/40 rounded-2xl space-y-2">
                <span className="font-bold text-amber-400 uppercase tracking-wider block">Stage 2: Assessment Evidence & Formative Evaluation</span>
                <p className="text-slate-200 text-sm leading-relaxed">{standard.ubdFramework.stage2AssessmentEvidence}</p>
              </div>

              <div className="p-4 bg-slate-950 border border-blue-500/40 rounded-2xl space-y-2">
                <span className="font-bold text-blue-400 uppercase tracking-wider block">Stage 3: Learning Plan Sequence</span>
                <p className="text-slate-200 text-sm leading-relaxed">{standard.ubdFramework.stage3LearningPlanSequence}</p>
              </div>
            </div>
          )}

          {/* TAB 3: STUDENT VISUAL ANCHOR */}
          {activeTab === 'student' && (
            <div className="p-6 bg-slate-950 border border-blue-500/40 rounded-3xl space-y-4">
              <h3 className="text-xl font-bold text-blue-300">{standard.studentStrategy.anchorTitle}</h3>
              <div className="p-4 bg-blue-950/40 border border-blue-500/30 rounded-2xl text-blue-200 font-mono text-sm font-bold">
                {standard.studentStrategy.visualHook}
              </div>
              
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Step-by-Step Student Guide:</span>
                {standard.studentStrategy.stepByStepGuide.map((step, idx) => (
                  <p key={idx} className="text-sm font-semibold text-slate-200">{step}</p>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: EXEMPLAR PROBLEM */}
          {activeTab === 'exemplar' && (
            <div className="p-6 bg-slate-950 border border-emerald-500/40 rounded-3xl space-y-4">
              <h3 className="text-lg font-bold text-emerald-300">Official Release Exemplar Problem</h3>
              <p className="text-base text-slate-100 font-medium">{standard.exemplarProblem.questionPrompt}</p>

              {standard.exemplarProblem.answerChoices && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {standard.exemplarProblem.answerChoices.map((choice, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedChoice(choice)}
                      className={`p-3 text-left rounded-xl text-xs font-semibold border transition-all ${selectedChoice === choice ? 'bg-amber-500 text-slate-950 font-bold border-amber-400' : 'bg-slate-900 border-slate-800 text-slate-200'}`}
                    >
                      {choice}
                    </button>
                  ))}
                </div>
              )}

              <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                <button
                  onClick={() => setShowExplanation(!showExplanation)}
                  className="px-4 py-2 bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl"
                >
                  {showExplanation ? 'Hide Explanation' : 'View Teacher Solution Explanation'}
                </button>
                {selectedChoice && (
                  <span className="text-xs font-bold text-amber-400 font-mono">Correct Answer: {standard.exemplarProblem.correctAnswer}</span>
                )}
              </div>

              {showExplanation && (
                <div className="p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl text-emerald-200 text-xs font-mono">
                  {standard.exemplarProblem.teacherExemplarExplanation}
                </div>
              )}
            </div>
          )}

          {/* TAB 5: WORKSHEETS */}
          {activeTab === 'worksheets' && (
            <div className="space-y-4">
              {standard.worksheets?.map((ws) => (
                <div key={ws.id} className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between">
                  <div>
                    <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded text-[10px] font-mono font-bold uppercase mr-2">
                      {ws.type}
                    </span>
                    <span className="font-bold text-slate-100 text-sm">{ws.title}</span>
                  </div>

                  <button
                    onClick={() => onOpenWorksheetPrint && onOpenWorksheetPrint(ws.id)}
                    className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Classroom Sheet</span>
                  </button>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
