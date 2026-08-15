import React, { useState, useMemo } from "react";
import { 
  BookOpen, 
  GraduationCap, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight,
  Brain,
  Zap,
  Target,
  FileText,
  RefreshCw,
  Languages,
  Award,
  FileSpreadsheet,
  ArrowLeft,
  Sliders,
  Globe
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Badge } from "./components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./components/ui/dialog";

// SPED & EB Subcomponents
import { AccessibilityToolbar } from "./components/AccessibilityToolbar";
import { IepGoalEngineer } from "./components/IepGoalEngineer";
import { BipBehaviorTracker } from "./components/BipBehaviorTracker";
import { TelpasScaffoldingEngine } from "./components/TelpasScaffoldingEngine";
import { StaarAlt2MasteryModule } from "./components/StaarAlt2MasteryModule";
import { StaarBlueprintExplorer } from "./components/StaarBlueprintExplorer";
import { AacSpeechBoard } from "./components/AacSpeechBoard";
import { VisualScheduleBuilder } from "./components/VisualScheduleBuilder";
import { SpedEbLessonExporter } from "./components/SpedEbLessonExporter";

// Master Data & Types
import { MASTER_STANDARDS_CATALOG, DISABILITY_PROFILES } from "./components/spedEbMasterData";
import { findOrGenerateTeksStandard } from "./components/standardsCatalog";
import { StandardItem, AccessibilitySettings, DisabilityCategory } from "./components/types";

export function App() {
  const [viewMode, setViewMode] = useState<"portal" | "workspace">("portal");
  const [standardsCatalog, setStandardsCatalog] = useState<StandardItem[]>(MASTER_STANDARDS_CATALOG);
  const [selectedStandard, setSelectedStandard] = useState<StandardItem>(MASTER_STANDARDS_CATALOG[0]);
  const [activeMainTab, setActiveMainTab] = useState<string>("mastery-ubd");
  const [standardDetailTab, setStandardDetailTab] = useState<"gradual" | "ubd" | "dok" | "teacher" | "student" | "exemplar">("gradual");
  const [selectedDisability, setSelectedDisability] = useState<DisabilityCategory>("ASD");

  // Accessibility State
  const [accessibility, setAccessibility] = useState<AccessibilitySettings>({
    dyslexiaFont: false,
    contrastMode: 'default',
    fontSizeScale: 1.0,
    lineFocusRuler: false,
    textToSpeechRate: 1.0
  });

  const handleUpdateAccessibility = (newSettings: Partial<AccessibilitySettings>) => {
    setAccessibility(prev => ({ ...prev, ...newSettings }));
  };

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStateSystem, setSelectedStateSystem] = useState<string>("ALL");
  const [selectedSubject, setSelectedSubject] = useState<string>("ALL");
  const [selectedGradeBand, setSelectedGradeBand] = useState<string>("ALL");

  // AI Generator Modal State
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiStandardCode, setAiStandardCode] = useState("");
  const [aiStateSystem, setAiStateSystem] = useState("TEKS");
  const [aiGrade, setAiGrade] = useState("8th Grade");
  const [aiSubject, setAiSubject] = useState("Mathematics");
  const [aiCustomTopic, setAiCustomTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  // Filtered Standards Catalog
  const filteredStandards = useMemo(() => {
    return standardsCatalog.filter((item) => {
      const matchesSearch = 
        searchQuery.trim() === "" ||
        item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subject.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesState = 
        selectedStateSystem === "ALL" || 
        item.stateSystem.toUpperCase() === selectedStateSystem.toUpperCase();

      const matchesSubject = 
        selectedSubject === "ALL" || 
        item.subject.toLowerCase().includes(selectedSubject.toLowerCase());

      const matchesGrade = 
        selectedGradeBand === "ALL" ||
        (selectedGradeBand === "ELEMENTARY" && (item.grade.includes("1st") || item.grade.includes("2nd") || item.grade.includes("3rd") || item.grade.includes("4th") || item.grade.includes("5th") || item.grade.toLowerCase().includes("kindergarten"))) ||
        (selectedGradeBand === "MIDDLE" && (item.grade.includes("6th") || item.grade.includes("7th") || item.grade.includes("8th"))) ||
        (selectedGradeBand === "HIGH" && (item.grade.includes("High") || item.grade.includes("9") || item.grade.includes("10") || item.grade.includes("11") || item.grade.includes("12")));

      return matchesSearch && matchesState && matchesSubject && matchesGrade;
    });
  }, [standardsCatalog, searchQuery, selectedStateSystem, selectedSubject, selectedGradeBand]);

  // Handle Launching into a Specific Suite from the Portal
  const handleLaunchSuite = (tabKey: string) => {
    setActiveMainTab(tabKey);
    setViewMode("workspace");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle Instant AI Standard Generation
  const handleGenerateStandard = () => {
    const rawQuery = (aiStandardCode.trim() || aiCustomTopic.trim());
    if (!rawQuery) return;

    setIsGenerating(true);
    try {
      const synthesized = findOrGenerateTeksStandard(rawQuery, aiGrade, aiSubject);
      
      const newStandard: StandardItem = {
        id: synthesized.id || `std-${Date.now()}`,
        state: synthesized.state || 'TX',
        stateSystem: (synthesized.stateSystem as any) || aiStateSystem,
        grade: synthesized.grade || aiGrade,
        subject: synthesized.subject || aiSubject,
        code: synthesized.code || rawQuery,
        title: synthesized.title || `${rawQuery} Mastery Dossier`,
        description: synthesized.description || `Core academic standard focusing on ${rawQuery}.`,
        swbatObjective: synthesized.swbatObjective || `SWBAT demonstrate proficiency in ${rawQuery} with 85%+ accuracy.`,
        priorKnowledge: synthesized.priorKnowledge || {
          prerequisiteCodes: [{ code: `${rawQuery} Foundational`, title: "Prerequisite concepts" }],
          futureExtensionCodes: [{ code: `${rawQuery} Advanced`, title: "Subsequent grade level extensions" }]
        },
        realWorldConnections: synthesized.realWorldConnections || [
          `Applying ${rawQuery} in real-world professional & everyday problem solving`,
          `Connecting principles to practical decision-making`
        ],
        sentenceStems: synthesized.sentenceStems || [
          `I analyzed ${rawQuery} by using the strategy of _____ because _____.`
        ],
        ubdFramework: synthesized.ubdFramework || {
          stage1DesiredResults: `Understanding ${rawQuery} develops foundational subject mastery.`,
          stage2AssessmentEvidence: `Formative Demonstration of Learning and STAAR constructed response.`,
          stage3LearningPlanSequence: "Hook -> Explicit Instruction -> Guided Practice -> Independent Mastery."
        },
        gradualReleaseModel: synthesized.gradualReleaseModel || {
          iDoDirectInstruction: `Teacher models explicit strategy for ${rawQuery} on smartboard.`,
          weDoGuidedPractice: `Class collaboratively solves guided problem sets for ${rawQuery}.`,
          youDoTogetherCollaborative: `Student pairs solve interactive challenge cards for ${rawQuery}.`,
          youDoAloneIndependentMastery: `Students complete independent mastery check for ${rawQuery}.`
        },
        dokQuestions: synthesized.dokQuestions || {
          dok1Recall: `What is the fundamental rule or definition of ${rawQuery}?`,
          dok2SkillConcept: `How do you apply ${rawQuery} to solve a multi-step task?`,
          dok3StrategicThinking: `Why is this approach optimal for ${rawQuery}? What proof supports it?`,
          dok4ExtendedThinking: `Synthesize a novel scenario or application modeling ${rawQuery}.`
        },
        teacherStrategy: synthesized.teacherStrategy || {
          scaffoldingSteps: [`Step 1: Activate prior knowledge for ${rawQuery}`, `Step 2: Model explicit steps`, `Step 3: Provide guided practice`],
          commonMisconceptions: [{ flaw: `Misinterpreting core concept of ${rawQuery}`, correctionPath: `Use visual anchor charts and structured checklists` }],
          interventionTip: `Use targeted manipulative counters and anchor chart reference cards.`
        },
        studentStrategy: synthesized.studentStrategy || {
          anchorTitle: `${rawQuery} Sovereign Blueprint`,
          visualHook: `🔍 Read -> ✏️ Model -> 💡 Solve`,
          stepByStepGuide: [`1. Read prompt carefully.`, `2. Apply strategy for ${rawQuery}.`, `3. Verify answer.`],
          selfCheckChecklist: [`Did I double check my steps?`, `Does my answer make sense?`]
        },
        exemplarProblem: synthesized.exemplarProblem || {
          questionPrompt: `Which choice correctly demonstrates mastery of ${rawQuery}?`,
          answerChoices: [`A) Incorrect application`, `B) Correct exemplar solution 🎯`, `C) Distractor option`, `D) Incomplete calculation`],
          correctAnswer: `B) Correct exemplar solution 🎯`,
          teacherExemplarExplanation: `Option B correctly applies ${rawQuery} with complete step-by-step accuracy.`
        },
        worksheets: synthesized.worksheets || [{
          id: `${synthesized.id || 'ws'}-practice`,
          title: `${rawQuery} STAAR Practice Sheet`,
          type: 'Practice',
          estimatedTimeMin: 15,
          previewContent: `Diagnostic practice sheet for ${rawQuery}.`
        }]
      };

      setStandardsCatalog((prev) => [newStandard, ...prev.filter(s => s.code.toLowerCase() !== newStandard.code.toLowerCase())]);
      setSelectedStandard(newStandard);
      setIsAiModalOpen(false);
      setAiStandardCode("");
      setAiCustomTopic("");
      setViewMode("workspace");
      setActiveMainTab("mastery-ubd");
    } catch (err) {
      console.error("Standard Generation error:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  const currentProfile = DISABILITY_PROFILES.find(p => p.category === selectedDisability) || DISABILITY_PROFILES[0];

  return (
    <div 
      className="min-h-screen bg-[#090D16] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200"
      style={{
        fontSize: `${accessibility.fontSizeScale}rem`,
        letterSpacing: accessibility.dyslexiaFont ? '0.08em' : 'normal',
        lineHeight: accessibility.dyslexiaFont ? '1.8' : 'normal',
        fontFamily: accessibility.dyslexiaFont ? 'Comic Sans MS, sans-serif' : 'inherit'
      }}
    >
      {/* LINE FOCUS GUIDE OVERLAY */}
      {accessibility.lineFocusRuler && (
        <div className="fixed top-1/3 left-0 w-full h-24 bg-cyan-500/10 pointer-events-none border-y-2 border-cyan-400/40 z-50 shadow-2xl backdrop-contrast-125" />
      )}

      {/* ========================================================================= */}
      {/* VIEW 1: PRESTIGIOUS OPENING PORTAL LANDING VIEW */}
      {/* ========================================================================= */}
      {viewMode === "portal" && (
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-16 space-y-12 animate-in fade-in duration-300">
          
          {/* Top Brand Bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg shadow-cyan-500/20 border border-cyan-500/30 flex-shrink-0 bg-slate-950">
                <img 
                  src="/assets/edupulse_icon.jpg" 
                  alt="EduPulse Sovereign Icon" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                  EduPulse <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Open Source Edition</span>
                </h1>
                <p className="text-xs text-slate-400">Universal K-12 Pedagogy & SPED/EB Suite</p>
              </div>
            </div>

            {/* Quick Access Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAiModalOpen(true)}
                className="h-9 px-3.5 text-xs font-semibold rounded-xl bg-slate-900/80 border-slate-700 text-slate-200 hover:text-white hover:border-cyan-500/50"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-cyan-400" /> Synthesize Standard
              </Button>
              <Button
                size="sm"
                onClick={() => setViewMode("workspace")}
                className="h-9 px-4 text-xs font-bold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-md shadow-cyan-500/20"
              >
                Open Workspace <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950/80 border border-slate-800/80 p-6 md:p-12 shadow-2xl backdrop-blur-xl text-center space-y-6">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 pointer-events-none" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              <Sparkles className="w-3.5 h-3.5" /> Sovereign Instructional Intelligence
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
              Master standards, accommodations, and state blueprints in one click.
            </h2>

            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Engineered for general educators, Special Education department chairs, and bilingual specialists across Texas TEKS, Common Core, and Next Gen Science.
            </p>

            {/* Quick Hero Search Bar */}
            <div className="max-w-xl mx-auto pt-2">
              <div className="relative flex items-center shadow-xl">
                <Search className="w-4 h-4 absolute left-4 text-slate-400" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setViewMode("workspace");
                    }
                  }}
                  placeholder="Search 1,392 standards (e.g., TEKS 1.3B, fractions, DNA, 8.8C)..."
                  className="pl-11 pr-32 h-12 bg-slate-950/90 border-slate-700 text-slate-100 placeholder:text-slate-500 rounded-2xl text-sm focus:border-cyan-500"
                />
                <Button
                  size="sm"
                  onClick={() => setViewMode("workspace")}
                  className="absolute right-1.5 h-9 px-4 text-xs font-bold rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950"
                >
                  Explore
                </Button>
              </div>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto border-t border-slate-800/80">
              <div className="p-2">
                <div className="text-xl md:text-2xl font-extrabold text-cyan-400">1,392</div>
                <div className="text-[11px] text-slate-400 uppercase font-medium">Standards Verified</div>
              </div>
              <div className="p-2">
                <div className="text-xl md:text-2xl font-extrabold text-amber-400">TEA 2026</div>
                <div className="text-[11px] text-slate-400 uppercase font-medium">STAAR Blueprints</div>
              </div>
              <div className="p-2">
                <div className="text-xl md:text-2xl font-extrabold text-indigo-400">8 IDEA</div>
                <div className="text-[11px] text-slate-400 uppercase font-medium">Clinical Profiles</div>
              </div>
              <div className="p-2">
                <div className="text-xl md:text-2xl font-extrabold text-emerald-400">4-Tier</div>
                <div className="text-[11px] text-slate-400 uppercase font-medium">TELPAS EB Matrix</div>
              </div>
            </div>
          </div>

          {/* 5 Signature Workflow Launcher Cards */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-200 tracking-wide uppercase text-xs">
                Select Your Instructional Workflow
              </h3>
              <span className="text-xs text-slate-400">Tap to launch dedicated workspace suite</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* Card 1: Standards & UbD Architect */}
              <div 
                onClick={() => handleLaunchSuite("mastery-ubd")}
                className="group cursor-pointer bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all shadow-lg hover:shadow-amber-500/10 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition">
                    Standards & UbD Architect
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    1,392 TEA TEKS and K-12 standards with measurable SWBAT, 4-Phase Gradual Release, CRA Teacher Scaffolding, and DOK 1–4 questions.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400">
                  <span>Explore 1,392 Standards</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </div>

              {/* Card 2: STAAR 2026 Blueprints & NQT Hub */}
              <div 
                onClick={() => handleLaunchSuite("staar-blueprints")}
                className="group cursor-pointer bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all shadow-lg hover:shadow-cyan-500/10 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                    STAAR 2026 Blueprints & NQT Hub
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Official TEA 2026 test blueprints, reporting category weightings, and live testing sandbox for Inline Choice, Hot Spot, and SCR items.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400">
                  <span>Open STAAR Blueprints</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </div>

              {/* Card 3: SPED Clinical Suite & IEP Goals */}
              <div 
                onClick={() => handleLaunchSuite("sped-suite")}
                className="group cursor-pointer bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 transition-all shadow-lg hover:shadow-indigo-500/10 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition">
                    <Brain className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition">
                    SPED Clinical & IEP Suite
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    8 IDEA clinical disability profiles, designated supports, automated SMART IEP Goal Engineer, and BIP behavior tracking.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-indigo-400">
                  <span>Generate IEP Goals</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </div>

              {/* Card 4: TELPAS Emergent Bilingual Suite */}
              <div 
                onClick={() => handleLaunchSuite("telpas-eb")}
                className="group cursor-pointer bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-purple-500/50 rounded-2xl p-6 transition-all shadow-lg hover:shadow-purple-500/10 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 transition">
                    <Languages className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition">
                    TELPAS & Emergent Bilingual
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    4-tier language proficiency matrices (L, S, R, W), tiered sentence frames, and bilingual Spanish/English cognate engines.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-purple-400">
                  <span>Open TELPAS Scaffolds</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </div>

              {/* Card 5: STAAR Alt 2 (3-Tier Protocol) */}
              <div 
                onClick={() => handleLaunchSuite("staar-alt2")}
                className="group cursor-pointer bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all shadow-lg hover:shadow-emerald-500/10 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition">
                    STAAR Alt 2 (3-Tier Stimulus)
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    TEA standardized 3-tier stimulus cueing protocol with scripted teacher prompts and multi-modal stimulus cards.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-400">
                  <span>Launch 3-Tier Deck</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </div>

              {/* Card 6: Classroom & AAC Speech Board */}
              <div 
                onClick={() => handleLaunchSuite("export-tools")}
                className="group cursor-pointer bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-rose-500/50 rounded-2xl p-6 transition-all shadow-lg hover:shadow-rose-500/10 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:scale-105 transition">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-rose-300 transition">
                    Classroom Tools & Exporter
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    26-tile AAC Speech-Output Board, visual schedule builder, accessibility overlays, and 1-click printable lesson plan exporter.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-rose-400">
                  <span>Open Classroom Tools</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </div>

            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 2: FULL MASTER WORKSPACE VIEW */}
      {/* ========================================================================= */}
      {viewMode === "workspace" && (
        <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto animate-in fade-in duration-200">
          
          {/* Top Workspace Navigation Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setViewMode("portal")}
                className="h-9 px-3 text-xs font-bold rounded-xl bg-slate-950 border-slate-700 text-slate-200 hover:text-white hover:border-cyan-500"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Back to Portal
              </Button>
              <div className="w-8 h-8 rounded-xl overflow-hidden border border-cyan-500/30 flex-shrink-0 bg-slate-950 hidden sm:block">
                <img 
                  src="/assets/edupulse_icon.jpg" 
                  alt="EduPulse" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-4 w-px bg-slate-700 hidden sm:block" />
              <div>
                <span className="text-xs text-slate-400">Current Standard:</span>
                <span className="text-xs font-bold text-amber-300 ml-1.5 font-mono">{selectedStandard.code}</span>
                <span className="text-xs text-slate-400 ml-1">({selectedStandard.grade} {selectedStandard.subject})</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                onClick={() => setIsAiModalOpen(true)}
                className="h-9 px-4 text-xs font-bold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Synthesize Any Standard
              </Button>
            </div>
          </div>

          {/* STANDARDS EXPLORER & FILTER STRIP */}
          <Card className="bg-slate-900/90 border border-slate-800 p-4 shadow-xl space-y-3 rounded-2xl">
            <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center justify-between">
              
              {/* Search Bar */}
              <div className="relative w-full lg:w-96">
                <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter 1,392 standards (e.g. 1.3B, fractions, DNA)..."
                  className="pl-10 bg-slate-950 border-slate-700 text-slate-100 placeholder:text-slate-500 h-10 rounded-xl text-xs"
                />
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {/* State System */}
                <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
                  {["ALL", "TEKS", "CCSS", "NGSS"].map((sys) => (
                    <button
                      key={sys}
                      onClick={() => setSelectedStateSystem(sys)}
                      className={`px-2.5 py-1 rounded-lg font-bold transition ${
                        selectedStateSystem === sys ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {sys}
                    </button>
                  ))}
                </div>

                {/* Grade Band */}
                <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
                  {[
                    { key: "ALL", label: "All Grades" },
                    { key: "ELEMENTARY", label: "K-5" },
                    { key: "MIDDLE", label: "6-8" },
                    { key: "HIGH", label: "9-12 / AP" }
                  ].map((band) => (
                    <button
                      key={band.key}
                      onClick={() => setSelectedGradeBand(band.key)}
                      className={`px-2.5 py-1 rounded-lg font-bold transition ${
                        selectedGradeBand === band.key ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {band.label}
                    </button>
                  ))}
                </div>

                {/* Subject */}
                <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
                  {[
                    { key: "ALL", label: "All Subjects" },
                    { key: "Mathematics", label: "Math" },
                    { key: "Reading", label: "ELA" },
                    { key: "Science", label: "Sci" },
                    { key: "Social", label: "SS" }
                  ].map((sub) => (
                    <button
                      key={sub.key}
                      onClick={() => setSelectedSubject(sub.key)}
                      className={`px-2.5 py-1 rounded-lg font-bold transition ${
                        selectedSubject === sub.key ? "bg-purple-600 text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Compact Standard Carousel Strip */}
            <div className="flex gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
              {filteredStandards.slice(0, 30).map((std) => {
                const isSelected = selectedStandard.code === std.code;
                return (
                  <button
                    key={std.id}
                    onClick={() => setSelectedStandard(std)}
                    className={`flex-shrink-0 text-left p-2.5 rounded-xl border transition-all w-52 ${
                      isSelected
                        ? "bg-amber-500/10 border-amber-500/80 ring-1 ring-amber-500/50"
                        : "bg-slate-950/60 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs font-bold text-amber-300">{std.code}</span>
                      <span className="text-[10px] text-slate-400 truncate max-w-[80px]">{std.grade}</span>
                    </div>
                    <div className="text-xs text-slate-200 font-medium truncate">{std.title}</div>
                  </button>
                );
              })}
            </div>
          </Card>

          {/* MAIN UNIFIED TAB NAVIGATION */}
          <Tabs value={activeMainTab} onValueChange={setActiveMainTab} className="w-full space-y-6">
            
            {/* Scrollable Tab Navigation Pills for Fluid Mobile & Desktop */}
            <div className="overflow-x-auto pb-1 no-scrollbar">
              <TabsList className="flex w-max min-w-full bg-slate-950 p-1.5 rounded-2xl border border-slate-800 h-auto gap-1 shadow-xl">
                <TabsTrigger value="mastery-ubd" className="text-xs py-2.5 px-4 data-[state=active]:bg-amber-500 data-[state=active]:text-slate-950 font-bold rounded-xl whitespace-nowrap">
                  <BookOpen className="w-3.5 h-3.5 mr-1.5 inline" /> Standards & UbD
                </TabsTrigger>
                <TabsTrigger value="staar-blueprints" className="text-xs py-2.5 px-4 data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950 font-bold rounded-xl whitespace-nowrap">
                  <FileSpreadsheet className="w-3.5 h-3.5 mr-1.5 inline" /> STAAR 2026 Blueprints
                </TabsTrigger>
                <TabsTrigger value="sped-suite" className="text-xs py-2.5 px-4 data-[state=active]:bg-indigo-600 data-[state=active]:text-white font-bold rounded-xl whitespace-nowrap">
                  <Brain className="w-3.5 h-3.5 mr-1.5 inline" /> SPED Accommodations
                </TabsTrigger>
                <TabsTrigger value="telpas-eb" className="text-xs py-2.5 px-4 data-[state=active]:bg-purple-600 data-[state=active]:text-white font-bold rounded-xl whitespace-nowrap">
                  <Languages className="w-3.5 h-3.5 mr-1.5 inline" /> TELPAS & EB Scaffolds
                </TabsTrigger>
                <TabsTrigger value="staar-alt2" className="text-xs py-2.5 px-4 data-[state=active]:bg-emerald-600 data-[state=active]:text-white font-bold rounded-xl whitespace-nowrap">
                  <Award className="w-3.5 h-3.5 mr-1.5 inline" /> STAAR Alt 2 (3-Tier)
                </TabsTrigger>
                <TabsTrigger value="export-tools" className="text-xs py-2.5 px-4 data-[state=active]:bg-rose-600 data-[state=active]:text-white font-bold rounded-xl whitespace-nowrap">
                  <FileText className="w-3.5 h-3.5 mr-1.5 inline" /> Classroom Tools & Export
                </TabsTrigger>
              </TabsList>
            </div>

            {/* TAB 1: STANDARDS MASTERY & UbD ARCHITECTURE */}
            <TabsContent value="mastery-ubd" className="space-y-6">
              <Card className="bg-slate-900/90 border border-slate-800 p-5 md:p-8 space-y-6 shadow-2xl rounded-3xl">
                <CardHeader className="p-0 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/40 font-mono text-sm md:text-base font-bold px-3 py-1">
                      {selectedStandard.code} ({selectedStandard.stateSystem})
                    </Badge>
                    <Badge variant="outline" className="text-slate-300 border-slate-700 text-xs">
                      {selectedStandard.grade} • {selectedStandard.subject}
                    </Badge>
                  </div>

                  <CardTitle className="text-xl md:text-2xl font-extrabold text-white">
                    {selectedStandard.title}
                  </CardTitle>

                  <CardDescription className="text-slate-300 text-xs md:text-sm leading-relaxed font-medium">
                    {selectedStandard.description}
                  </CardDescription>

                  {/* SWBAT OBJECTIVE BOX */}
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/5 border-l-4 border-cyan-400 p-4 rounded-r-xl space-y-1">
                    <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                      Measurable Student Objective (SWBAT)
                    </div>
                    <div className="text-xs md:text-sm font-semibold text-slate-100">
                      {selectedStandard.swbatObjective}
                    </div>
                  </div>

                  {/* REAL-WORLD CONNECTIONS */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                    {selectedStandard.realWorldConnections.map((conn, i) => (
                      <div key={i} className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl space-y-1">
                        <div className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Real-World Hook #{i + 1}
                        </div>
                        <div className="text-xs text-slate-300">{conn}</div>
                      </div>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="p-0 pt-4 space-y-6">
                  <Tabs value={standardDetailTab} onValueChange={(v) => setStandardDetailTab(v as any)} className="w-full">
                    
                    <div className="overflow-x-auto pb-1 no-scrollbar">
                      <TabsList className="flex w-max min-w-full bg-slate-950 p-1 rounded-xl border border-slate-800 h-auto gap-1">
                        <TabsTrigger value="gradual" className="text-xs py-1.5 px-3 data-[state=active]:bg-amber-500 data-[state=active]:text-slate-950 font-bold rounded-lg whitespace-nowrap">
                          Gradual Release
                        </TabsTrigger>
                        <TabsTrigger value="ubd" className="text-xs py-1.5 px-3 data-[state=active]:bg-cyan-500 data-[state=active]:text-slate-950 font-bold rounded-lg whitespace-nowrap">
                          UbD 3-Stage
                        </TabsTrigger>
                        <TabsTrigger value="dok" className="text-xs py-1.5 px-3 data-[state=active]:bg-purple-500 data-[state=active]:text-white font-bold rounded-lg whitespace-nowrap">
                          DOK 1-4
                        </TabsTrigger>
                        <TabsTrigger value="teacher" className="text-xs py-1.5 px-3 data-[state=active]:bg-emerald-500 data-[state=active]:text-slate-950 font-bold rounded-lg whitespace-nowrap">
                          Teacher Scaffolds
                        </TabsTrigger>
                        <TabsTrigger value="student" className="text-xs py-1.5 px-3 data-[state=active]:bg-rose-500 data-[state=active]:text-white font-bold rounded-lg whitespace-nowrap">
                          Student Anchor
                        </TabsTrigger>
                        <TabsTrigger value="exemplar" className="text-xs py-1.5 px-3 data-[state=active]:bg-blue-500 data-[state=active]:text-white font-bold rounded-lg whitespace-nowrap">
                          Exemplar Problem
                        </TabsTrigger>
                      </TabsList>
                    </div>

                    {/* TAB 1.1: GRADUAL RELEASE MODEL */}
                    <TabsContent value="gradual" className="pt-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2">
                          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/40 text-xs font-bold">
                            1. I Do (Direct Instruction & Explicit Modeling)
                          </Badge>
                          <p className="text-xs text-slate-300 leading-relaxed font-medium">
                            {selectedStandard.gradualReleaseModel.iDoDirectInstruction}
                          </p>
                        </div>

                        <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2">
                          <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/40 text-xs font-bold">
                            2. We Do (Guided Collaborative Practice)
                          </Badge>
                          <p className="text-xs text-slate-300 leading-relaxed font-medium">
                            {selectedStandard.gradualReleaseModel.weDoGuidedPractice}
                          </p>
                        </div>

                        <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2">
                          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/40 text-xs font-bold">
                            3. You Do Together (Peer / Cooperative Learning)
                          </Badge>
                          <p className="text-xs text-slate-300 leading-relaxed font-medium">
                            {selectedStandard.gradualReleaseModel.youDoTogetherCollaborative}
                          </p>
                        </div>

                        <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2">
                          <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/40 text-xs font-bold">
                            4. You Do Alone (Independent Mastery Check)
                          </Badge>
                          <p className="text-xs text-slate-300 leading-relaxed font-medium">
                            {selectedStandard.gradualReleaseModel.youDoAloneIndependentMastery}
                          </p>
                        </div>
                      </div>
                    </TabsContent>

                    {/* TAB 1.2: UbD 3-STAGE BACKWARD DESIGN */}
                    <TabsContent value="ubd" className="pt-4 space-y-4">
                      <div className="space-y-4">
                        <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2">
                          <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/40 text-xs font-bold">
                            Stage 1: Desired Results (Enduring Understandings)
                          </Badge>
                          <p className="text-xs text-slate-300 leading-relaxed font-medium">
                            {selectedStandard.ubdFramework.stage1DesiredResults}
                          </p>
                        </div>

                        <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2">
                          <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/40 text-xs font-bold">
                            Stage 2: Assessment Evidence (Formative & Summative)
                          </Badge>
                          <p className="text-xs text-slate-300 leading-relaxed font-medium">
                            {selectedStandard.ubdFramework.stage2AssessmentEvidence}
                          </p>
                        </div>

                        <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2">
                          <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/40 text-xs font-bold">
                            Stage 3: Learning Plan Sequence (Instructional Flow)
                          </Badge>
                          <p className="text-xs text-slate-300 leading-relaxed font-medium">
                            {selectedStandard.ubdFramework.stage3LearningPlanSequence}
                          </p>
                        </div>
                      </div>
                    </TabsContent>

                    {/* TAB 1.3: DOK 1-4 QUESTIONS */}
                    <TabsContent value="dok" className="pt-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2">
                          <Badge className="bg-slate-700 text-slate-200 text-xs font-bold">DOK 1: Recall & Reproduction</Badge>
                          <p className="text-xs text-slate-300 leading-relaxed font-medium">{selectedStandard.dokQuestions.dok1Recall}</p>
                        </div>

                        <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2">
                          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/40 text-xs font-bold">DOK 2: Skills & Concepts</Badge>
                          <p className="text-xs text-slate-300 leading-relaxed font-medium">{selectedStandard.dokQuestions.dok2SkillConcept}</p>
                        </div>

                        <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2">
                          <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/40 text-xs font-bold">DOK 3: Strategic Thinking</Badge>
                          <p className="text-xs text-slate-300 leading-relaxed font-medium">{selectedStandard.dokQuestions.dok3StrategicThinking}</p>
                        </div>

                        <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2">
                          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/40 text-xs font-bold">DOK 4: Extended Thinking</Badge>
                          <p className="text-xs text-slate-300 leading-relaxed font-medium">{selectedStandard.dokQuestions.dok4ExtendedThinking}</p>
                        </div>
                      </div>
                    </TabsContent>

                    {/* TAB 1.4: TEACHER STRATEGY & MISCONCEPTIONS */}
                    <TabsContent value="teacher" className="pt-4 space-y-4">
                      <div className="space-y-4">
                        <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2">
                          <div className="text-xs font-bold text-emerald-400">Scaffolding Progression (CRA Model)</div>
                          <ul className="space-y-1.5">
                            {selectedStandard.teacherStrategy.scaffoldingSteps.map((step, i) => (
                              <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2">
                          <div className="text-xs font-bold text-rose-400">Common Misconceptions & Correction Pathways</div>
                          {selectedStandard.teacherStrategy.commonMisconceptions.map((item, i) => (
                            <div key={i} className="bg-slate-900 p-3 rounded-xl space-y-1 border border-slate-800">
                              <div className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" /> Flaw: {item.flaw}
                              </div>
                              <div className="text-xs text-slate-300 pl-5">
                                <span className="text-emerald-400 font-semibold">Correction:</span> {item.correctionPath}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-1">
                          <div className="text-xs font-bold text-cyan-400">Tier 2/3 Intervention Tip</div>
                          <p className="text-xs text-slate-300 font-medium">{selectedStandard.teacherStrategy.interventionTip}</p>
                        </div>
                      </div>
                    </TabsContent>

                    {/* TAB 1.5: STUDENT STRATEGY & ANCHOR CHART */}
                    <TabsContent value="student" className="pt-4 space-y-4">
                      <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-2xl space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                            {selectedStandard.studentStrategy.anchorTitle}
                          </div>
                          <Badge className="bg-rose-500/20 text-rose-300 border-rose-500/40 text-xs font-bold">
                            Visual Anchor Hook
                          </Badge>
                        </div>

                        <div className="text-xs md:text-sm font-semibold text-rose-200 bg-rose-950/20 p-3 rounded-xl border border-rose-500/30">
                          {selectedStandard.studentStrategy.visualHook}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                          <div className="space-y-2">
                            <div className="text-xs font-bold text-slate-300">Step-by-Step Student Strategy</div>
                            <ol className="space-y-1.5 list-decimal list-inside text-xs text-slate-300 font-medium">
                              {selectedStandard.studentStrategy.stepByStepGuide.map((step, i) => (
                                <li key={i} className="leading-relaxed">{step}</li>
                              ))}
                            </ol>
                          </div>

                          <div className="space-y-2">
                            <div className="text-xs font-bold text-emerald-400">Self-Check Checklist</div>
                            <ul className="space-y-1.5">
                              {selectedStandard.studentStrategy.selfCheckChecklist.map((check, i) => (
                                <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                                  <input type="checkbox" className="rounded accent-emerald-500" defaultChecked={i === 0} />
                                  <span>{check}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    {/* TAB 1.6: EXEMPLAR PROBLEM */}
                    <TabsContent value="exemplar" className="pt-4 space-y-4">
                      <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-2xl space-y-4">
                        <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">Formative Assessment Exemplar Item</div>
                        <div className="text-xs md:text-sm font-semibold text-slate-200 leading-relaxed bg-slate-900 p-4 rounded-xl border border-slate-800">
                          {selectedStandard.exemplarProblem.questionPrompt}
                        </div>

                        {selectedStandard.exemplarProblem.answerChoices && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {selectedStandard.exemplarProblem.answerChoices.map((choice, i) => {
                              const isCorrect = choice.startsWith(selectedStandard.exemplarProblem.correctAnswer.slice(0, 2));
                              return (
                                <div key={i} className={`p-3 rounded-xl border text-xs font-medium ${
                                  isCorrect ? "bg-emerald-950/40 border-emerald-500/60 text-emerald-200 font-bold" : "bg-slate-900/60 border-slate-800 text-slate-300"
                                }`}>
                                  {choice}
                                </div>
                              );
                            })}
                          </div>
                        )}

                        <div className="bg-emerald-950/30 border border-emerald-500/40 p-4 rounded-xl space-y-1">
                          <div className="text-xs font-bold text-emerald-400">Teacher Exemplar Explanation</div>
                          <div className="text-xs text-slate-300 leading-relaxed">{selectedStandard.exemplarProblem.teacherExemplarExplanation}</div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </TabsContent>

            {/* TAB 2: OFFICIAL STAAR 2026 BLUEPRINT EXPLORER & NQT SIMULATOR */}
            <TabsContent value="staar-blueprints" className="space-y-6">
              <StaarBlueprintExplorer onSelectStandard={(code) => {
                const match = standardsCatalog.find(s => s.code.toLowerCase().includes(code.toLowerCase()));
                if (match) {
                  setSelectedStandard(match);
                  setActiveMainTab("mastery-ubd");
                }
              }} />
            </TabsContent>

            {/* TAB 3: SPECIAL EDUCATION CLINICAL SUITE & IEP GOALS */}
            <TabsContent value="sped-suite" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Disability Profile Details */}
                <Card className="bg-slate-900/90 border border-indigo-500/40 p-6 rounded-3xl space-y-4 lg:col-span-1 shadow-xl">
                  <div className="flex items-center justify-between">
                    <Badge className={currentProfile.badgeColor}>
                      {currentProfile.category}
                    </Badge>
                    <span className="text-xs text-slate-400 font-semibold">IDEA Category</span>
                  </div>

                  <div>
                    <h3 className="text-base md:text-lg font-bold text-slate-100">{currentProfile.name}</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{currentProfile.barrierDescription}</p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Designated Accommodations</div>
                    
                    <div className="space-y-2">
                      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                        <div className="text-[11px] font-bold text-slate-400">Presentation</div>
                        {currentProfile.accommodations.presentation.map((item, i) => (
                          <div key={i} className="text-xs text-slate-300 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-indigo-400 flex-shrink-0" /> {item}
                          </div>
                        ))}
                      </div>

                      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                        <div className="text-[11px] font-bold text-slate-400">Response Options</div>
                        {currentProfile.accommodations.response.map((item, i) => (
                          <div key={i} className="text-xs text-slate-300 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-purple-400 flex-shrink-0" /> {item}
                          </div>
                        ))}
                      </div>

                      <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                        <div className="text-[11px] font-bold text-slate-400">Assistive Technology</div>
                        {currentProfile.assistiveTech.map((item, i) => (
                          <div key={i} className="text-xs text-cyan-300 flex items-center gap-1.5">
                            <Zap className="w-3 h-3 text-cyan-400 flex-shrink-0" /> {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Right: Interactive IEP Goal Engineer & BIP Tracker */}
                <div className="lg:col-span-2 space-y-6">
                  <IepGoalEngineer alignedStandardCode={selectedStandard.code} />
                  <BipBehaviorTracker />
                </div>
              </div>
            </TabsContent>

            {/* TAB 4: TELPAS & EMERGENT BILINGUAL SCAFFOLDING */}
            <TabsContent value="telpas-eb" className="space-y-6">
              <TelpasScaffoldingEngine />
            </TabsContent>

            {/* TAB 5: STAAR ALTERNATE 2 (3-TIER STIMULUS DECK) */}
            <TabsContent value="staar-alt2" className="space-y-6">
              <StaarAlt2MasteryModule />
            </TabsContent>

            {/* TAB 6: CLASSROOM ACCESSIBILITY TOOLS & EXPORTER */}
            <TabsContent value="export-tools" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <AacSpeechBoard />
                  <VisualScheduleBuilder />
                </div>

                <div className="space-y-6">
                  <AccessibilityToolbar 
                    settings={accessibility} 
                    onUpdate={handleUpdateAccessibility} 
                  />
                  <SpedEbLessonExporter />
                </div>
              </div>
            </TabsContent>
          </Tabs>

        </div>
      )}

      {/* AI GENERATOR MODAL DIALOG */}
      <Dialog open={isAiModalOpen} onOpenChange={setIsAiModalOpen}>
        <DialogContent className="bg-slate-900 border border-cyan-500/40 text-slate-100 max-w-lg rounded-3xl p-6 shadow-2xl">
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-lg md:text-xl font-bold flex items-center gap-2 text-cyan-300">
              <Sparkles className="w-5 h-5 text-cyan-400" /> Grandmaster AI Standard Synthesizer
            </DialogTitle>
            <DialogDescription className="text-slate-400 text-xs leading-relaxed">
              Synthesize any standard (TEKS, CCSS, NGSS, Florida B.E.S.T., NY Next Gen) into a 100% complete 12-section EduPulse dossier.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 pt-3">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Standard Code or Objective</label>
              <Input
                placeholder="e.g. TEKS 1.6F, TEKS 8.5A, CCSS.MATH.7.EE.B.4, NGSS MS-PS1-2"
                value={aiStandardCode}
                onChange={(e) => setAiStandardCode(e.target.value)}
                className="bg-slate-950 border-slate-700 text-slate-100 placeholder:text-slate-600 rounded-xl"
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400">Framework</label>
                <select
                  value={aiStateSystem}
                  onChange={(e) => setAiStateSystem(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-xl p-2"
                >
                  <option value="TEKS">Texas TEKS</option>
                  <option value="CCSS">Common Core (CCSS)</option>
                  <option value="NGSS">Next Gen Science (NGSS)</option>
                  <option value="FL-BEST">Florida B.E.S.T.</option>
                  <option value="NY-NEXTGEN">NY Next Generation</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400">Subject</label>
                <select
                  value={aiSubject}
                  onChange={(e) => setAiSubject(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-xl p-2"
                >
                  <option value="Mathematics">Mathematics</option>
                  <option value="Reading/ELA">Reading / ELA</option>
                  <option value="Science">Science</option>
                  <option value="Social Studies">Social Studies</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400">Grade Level</label>
                <select
                  value={aiGrade}
                  onChange={(e) => setAiGrade(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-slate-200 text-xs rounded-xl p-2"
                >
                  <option value="Kindergarten">Kindergarten</option>
                  <option value="1st Grade">1st Grade</option>
                  <option value="2nd Grade">2nd Grade</option>
                  <option value="3rd Grade">3rd Grade</option>
                  <option value="4th Grade">4th Grade</option>
                  <option value="5th Grade">5th Grade</option>
                  <option value="6th Grade">6th Grade</option>
                  <option value="7th Grade">7th Grade</option>
                  <option value="8th Grade">8th Grade</option>
                  <option value="High School">High School (9-12)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Custom Topic / Pedagogical Focus (Optional)</label>
              <Input
                placeholder="e.g., Photosynthesis, Pythagorean Theorem, Main Idea"
                value={aiCustomTopic}
                onChange={(e) => setAiCustomTopic(e.target.value)}
                className="bg-slate-950 border-slate-700 text-slate-100 placeholder:text-slate-600 rounded-xl"
              />
            </div>

            <Button
              onClick={handleGenerateStandard}
              disabled={isGenerating || (!aiStandardCode.trim() && !aiCustomTopic.trim())}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold h-11 rounded-xl shadow-lg mt-2"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" /> Synthesizing Complete Dossier...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" /> Generate Complete EduPulse Dossier
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
