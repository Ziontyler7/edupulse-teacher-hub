import React, { useState } from 'react';
import { 
  Heart, 
  Sparkles, 
  Target, 
  Activity, 
  Languages, 
  Award, 
  MessageSquare, 
  Calendar, 
  FileText, 
  Eye, 
  BookOpen, 
  Brain, 
  Zap, 
  CheckCircle2, 
  Layers,
  FileCheck,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Subcomponents
import { AccessibilityToolbar } from './AccessibilityToolbar';
import { IepGoalEngineer } from './IepGoalEngineer';
import { BipBehaviorTracker } from './BipBehaviorTracker';
import { TelpasScaffoldingEngine } from './TelpasScaffoldingEngine';
import { StaarAlt2MasteryModule } from './StaarAlt2MasteryModule';
import { AacSpeechBoard } from './AacSpeechBoard';
import { VisualScheduleBuilder } from './VisualScheduleBuilder';
import { SpedEbLessonExporter } from './SpedEbLessonExporter';

// Master Data & Types
import { DISABILITY_PROFILES } from './spedEbMasterData';
import { AccessibilitySettings, DisabilityCategory } from './types';

interface SpedEbSuiteProps {
  currentStandardCode?: string;
  currentStandardTitle?: string;
}

export const SpedEbSuite: React.FC<SpedEbSuiteProps> = ({
  currentStandardCode = "TEKS 1.3B",
  currentStandardTitle = "Word Problems Involving Joining & Separating (Up to 20)"
}) => {
  const [activeTab, setActiveTab] = useState<string>("iep-engineer");
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

  const currentProfile = DISABILITY_PROFILES.find(p => p.category === selectedDisability) || DISABILITY_PROFILES[0];

  // Dynamic Theme Class
  const getThemeWrapperClass = () => {
    switch (accessibility.contrastMode) {
      case 'high-contrast-yellow':
        return 'bg-black text-yellow-300 ring-2 ring-yellow-400';
      case 'blue-calm':
        return 'bg-slate-950 text-cyan-200';
      case 'warm-amber':
        return 'bg-stone-950 text-amber-200';
      default:
        return 'bg-[#070913] text-slate-100';
    }
  };

  return (
    <div 
      className={`min-h-screen p-4 md:p-8 space-y-8 font-sans transition-all duration-300 ${getThemeWrapperClass()}`}
      style={{
        fontSize: `${accessibility.fontSizeScale}rem`,
        letterSpacing: accessibility.dyslexiaFont ? '0.08em' : 'normal',
        lineHeight: accessibility.dyslexiaFont ? '1.8' : 'normal',
        fontFamily: accessibility.dyslexiaFont ? 'Comic Sans MS, sans-serif' : 'inherit'
      }}
    >
      
      {/* LINE FOCUS GUIDE OVERLAY */}
      {accessibility.lineFocusRuler && (
        <div className="fixed top-1/3 left-0 w-full h-24 bg-amber-500/10 pointer-events-none border-y-2 border-amber-400/50 z-50 shadow-2xl backdrop-contrast-125" />
      )}

      {/* SOVEREIGN SUITE TOP BANNER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950/60 via-slate-900/90 to-amber-950/60 border-2 border-amber-500/50 p-6 md:p-10 shadow-2xl backdrop-blur-xl">
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/50 px-3 py-1 font-mono text-xs uppercase font-bold">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 inline" /> EduPulse SPED & EB Master Hub
            </Badge>
            <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/40 px-3 py-1 text-xs font-mono">
              IDEA • 504 • UDL 3.0 • TELPAS • STAAR Alt 2
            </Badge>
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-amber-200 via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Special Education & Emergent Bilingual Intelligence Suite
          </h1>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
            Sovereign educational engineering for neurodivergent and multilingual classrooms. Seamlessly generate legally defensible IEP SMART goals, proactive BIPs, TELPAS 4-tier scaffolds, STAAR Alt 2 stimulus cueing, AAC speech boards, and UDL lesson portfolios.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
            <span className="font-bold text-amber-400">Current Standard Focus:</span>
            <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/50 font-mono">
              {currentStandardCode}
            </Badge>
            <span className="text-slate-400 truncate max-w-md">{currentStandardTitle}</span>
          </div>
        </div>
      </div>

      {/* ACCESSIBILITY & NEURO-ADAPTIVE TOOLBAR */}
      <AccessibilityToolbar
        settings={accessibility}
        onUpdateSettings={handleUpdateAccessibility}
      />

      {/* DISABILITY PROFILES QUICK MATRIX SELECTOR */}
      <Card className="bg-slate-900/90 border-2 border-indigo-500/30 p-5 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-indigo-400" />
            <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
              8-Category SPED Accommodation Matrix
            </h3>
          </div>
          <Badge variant="outline" className="text-slate-400 border-slate-800 text-xs">
            Select category to inspect high-leverage clinical supports
          </Badge>
        </div>

        {/* 8 DISABILITY PILLS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {DISABILITY_PROFILES.map((prof) => (
            <button
              key={prof.category}
              onClick={() => setSelectedDisability(prof.category)}
              className={`p-2.5 rounded-xl border text-center transition-all ${
                selectedDisability === prof.category
                  ? 'ring-2 ring-indigo-400 font-extrabold shadow-lg scale-105 ' + prof.badgeColor
                  : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="text-xs block font-bold">{prof.category}</span>
              <span className="text-[10px] opacity-75 truncate block">{prof.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* SELECTED DISABILITY PROFILE DETAILS */}
        <div className="p-4 bg-slate-950 rounded-2xl border border-indigo-500/30 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Badge className={`${currentProfile.badgeColor} text-xs font-bold px-3 py-1`}>
              {currentProfile.name} ({currentProfile.category})
            </Badge>
            <span className="text-xs text-slate-400 italic font-mono">High-Leverage Supports</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            <strong className="text-indigo-300">Cognitive & Sensory Profile:</strong> {currentProfile.barrierDescription}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-[11px]">
            <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
              <span className="font-bold text-amber-400 block mb-1">Presentation:</span>
              <ul className="list-disc list-inside text-slate-300 space-y-0.5">
                {currentProfile.accommodations.presentation.slice(0, 2).map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
            <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
              <span className="font-bold text-emerald-400 block mb-1">Response:</span>
              <ul className="list-disc list-inside text-slate-300 space-y-0.5">
                {currentProfile.accommodations.response.slice(0, 2).map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
            <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
              <span className="font-bold text-cyan-400 block mb-1">Setting:</span>
              <ul className="list-disc list-inside text-slate-300 space-y-0.5">
                {currentProfile.accommodations.setting.slice(0, 2).map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
            <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
              <span className="font-bold text-purple-400 block mb-1">Assistive Tech:</span>
              <ul className="list-disc list-inside text-slate-300 space-y-0.5">
                {currentProfile.assistiveTech.slice(0, 2).map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* MASTER SUITE TABS */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-slate-950 border border-slate-800 p-1 rounded-2xl flex flex-wrap gap-1">
          <TabsTrigger value="iep-engineer" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white text-xs font-bold rounded-xl py-2 px-3">
            <Target className="w-3.5 h-3.5 mr-1.5" /> IEP Goal & PLAAFP Engineer
          </TabsTrigger>
          <TabsTrigger value="bip-tracker" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-xs font-bold rounded-xl py-2 px-3">
            <Activity className="w-3.5 h-3.5 mr-1.5" /> BIP & ABC Behavior Tracker
          </TabsTrigger>
          <TabsTrigger value="telpas-scaffolds" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-xs font-bold rounded-xl py-2 px-3">
            <Languages className="w-3.5 h-3.5 mr-1.5" /> TELPAS & Spanish Cognates
          </TabsTrigger>
          <TabsTrigger value="staar-alt2" className="data-[state=active]:bg-amber-600 data-[state=active]:text-white text-xs font-bold rounded-xl py-2 px-3">
            <Award className="w-3.5 h-3.5 mr-1.5" /> STAAR Alt 2 Stimulus Chamber
          </TabsTrigger>
          <TabsTrigger value="aac-board" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-xs font-bold rounded-xl py-2 px-3">
            <MessageSquare className="w-3.5 h-3.5 mr-1.5" /> High-Tech AAC Speech Board
          </TabsTrigger>
          <TabsTrigger value="visual-schedules" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs font-bold rounded-xl py-2 px-3">
            <Calendar className="w-3.5 h-3.5 mr-1.5" /> Visual Schedules & Tokens
          </TabsTrigger>
          <TabsTrigger value="lesson-exporter" className="data-[state=active]:bg-amber-500 data-[state=active]:text-slate-950 text-xs font-bold rounded-xl py-2 px-3">
            <FileText className="w-3.5 h-3.5 mr-1.5" /> Lesson Plan Exporter
          </TabsTrigger>
        </TabsList>

        {/* TAB CONTENTS */}
        <TabsContent value="iep-engineer" className="space-y-4">
          <IepGoalEngineer currentStandardCode={currentStandardCode} />
        </TabsContent>

        <TabsContent value="bip-tracker" className="space-y-4">
          <BipBehaviorTracker />
        </TabsContent>

        <TabsContent value="telpas-scaffolds" className="space-y-4">
          <TelpasScaffoldingEngine currentStandardCode={currentStandardCode} />
        </TabsContent>

        <TabsContent value="staar-alt2" className="space-y-4">
          <StaarAlt2MasteryModule />
        </TabsContent>

        <TabsContent value="aac-board" className="space-y-4">
          <AacSpeechBoard />
        </TabsContent>

        <TabsContent value="visual-schedules" className="space-y-4">
          <VisualScheduleBuilder />
        </TabsContent>

        <TabsContent value="lesson-exporter" className="space-y-4">
          <SpedEbLessonExporter />
        </TabsContent>

      </Tabs>

    </div>
  );
};
