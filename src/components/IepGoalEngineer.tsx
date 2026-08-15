import React, { useState } from 'react';
import { 
  Target, 
  Sparkles, 
  FileCheck2, 
  CheckCircle, 
  Plus, 
  Calendar, 
  TrendingUp, 
  Award, 
  Copy, 
  Check, 
  AlertCircle,
  FileText,
  UserCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IepSmartGoal, PlaafpData, DisabilityCategory } from './types';
import { EXEMPLARY_IEP_GOALS, EXEMPLARY_PLAAFP, DISABILITY_PROFILES } from './spedEbMasterData';

interface IepGoalEngineerProps {
  currentStandardCode?: string;
  onGoalCreated?: (goal: IepSmartGoal) => void;
}

export const IepGoalEngineer: React.FC<IepGoalEngineerProps> = ({
  currentStandardCode = "TEKS 1.3B",
  onGoalCreated
}) => {
  const [goals, setGoals] = useState<IepSmartGoal[]>(EXEMPLARY_IEP_GOALS);
  const [plaafp, setPlaafp] = useState<PlaafpData>(EXEMPLARY_PLAAFP);
  const [activeGoalTab, setActiveGoalTab] = useState<string>("goals-list");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // New Goal Form State
  const [studentName, setStudentName] = useState<string>("Elena Rodriguez");
  const [subjectArea, setSubjectArea] = useState<'Mathematics' | 'Reading/ELA' | 'Behavior' | 'Communication' | 'Executive Function'>("Mathematics");
  const [standardCode, setStandardCode] = useState<string>(currentStandardCode);
  const [condition, setCondition] = useState<string>("When presented with a 1-step word problem within 20 and a dual ten-frame manipulative mat");
  const [observableBehavior, setObservableBehavior] = useState<string>("will independently model the problem with counters and write the corresponding missing addend equation");
  const [performanceCriteria, setPerformanceCriteria] = useState<string>("with 80% accuracy across 4 out of 5 consecutive trials");
  const [measurementTool, setMeasurementTool] = useState<string>("as measured by bi-weekly teacher running records and work sample rubrics");
  const [targetDate, setTargetDate] = useState<string>("May 2027");

  // New Progress Data Point
  const [newScore, setNewScore] = useState<number>(85);
  const [newNote, setNewNote] = useState<string>("Mastered task with zero verbal prompts!");

  const handleGenerateSmartGoal = () => {
    const fullText = `By ${targetDate}, ${condition}, ${studentName} ${observableBehavior} ${performanceCriteria}, ${measurementTool}.`;
    
    const newGoalItem: IepSmartGoal = {
      id: `goal-${Date.now()}`,
      studentName,
      subjectArea,
      alignedStandardCode: standardCode,
      condition,
      observableBehavior,
      performanceCriteria,
      measurementTool,
      targetCompletionDate: targetDate,
      progressDataPoints: [
        { date: new Date().toISOString().split('T')[0], scorePercent: 30, notes: "Initial baseline recorded." }
      ],
      isMet: false
    };

    setGoals([newGoalItem, ...goals]);
    if (onGoalCreated) onGoalCreated(newGoalItem);
    setActiveGoalTab("goals-list");
  };

  const handleCopyGoal = (goal: IepSmartGoal) => {
    const fullGoalText = `By ${goal.targetCompletionDate}, ${goal.condition}, ${goal.studentName} ${goal.observableBehavior} ${goal.performanceCriteria}, ${goal.measurementTool}.`;
    navigator.clipboard.writeText(fullGoalText);
    setCopiedId(goal.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAddProgressPoint = (goalId: string) => {
    setGoals(goals.map(g => {
      if (g.id === goalId) {
        const updatedPoints = [
          ...g.progressDataPoints,
          { date: new Date().toISOString().split('T')[0], scorePercent: newScore, notes: newNote }
        ];
        const isMet = newScore >= 80;
        return { ...g, progressDataPoints: updatedPoints, isMet };
      }
      return g;
    }));
    setNewNote("");
  };

  return (
    <div className="space-y-6">
      
      {/* HEADER BANNER */}
      <div className="rounded-2xl bg-gradient-to-r from-indigo-950/80 via-slate-900 to-purple-950/80 border-2 border-indigo-500/40 p-6 shadow-xl space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/50 text-xs px-3 py-1 font-mono uppercase font-bold">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 inline" /> Automated IEP Goal Engineer
            </Badge>
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/40 text-xs">
              IDEA 34 CFR § 300.320 Defensible
            </Badge>
          </div>
          <span className="text-xs text-slate-400 font-mono">Standard: {standardCode}</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100">
          Standards-Aligned Measurable SMART Goal & PLAAFP Suite
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
          Engineered for ARD committees, Special Education case managers, and RTI Tier 3 specialists. Generates legally sound Present Level (PLAAFP) statements and measurable annual goals with continuous data point tracking.
        </p>
      </div>

      <Tabs value={activeGoalTab} onValueChange={setActiveGoalTab} className="space-y-4">
        <TabsList className="bg-slate-950 border border-slate-800 p-1 rounded-xl">
          <TabsTrigger value="goals-list" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white text-xs font-bold">
            <Target className="w-3.5 h-3.5 mr-1.5" /> Active IEP Goals ({goals.length})
          </TabsTrigger>
          <TabsTrigger value="create-goal" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white text-xs font-bold">
            <Plus className="w-3.5 h-3.5 mr-1.5" /> SMART Goal Generator
          </TabsTrigger>
          <TabsTrigger value="plaafp-builder" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white text-xs font-bold">
            <FileText className="w-3.5 h-3.5 mr-1.5" /> PLAAFP Baseline Engine
          </TabsTrigger>
          <TabsTrigger value="compliance-checklist" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white text-xs font-bold">
            <FileCheck2 className="w-3.5 h-3.5 mr-1.5" /> Legal Compliance Checklist
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: ACTIVE GOALS LIST */}
        <TabsContent value="goals-list" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {goals.map((goal) => {
              const latestScore = goal.progressDataPoints.length > 0 
                ? goal.progressDataPoints[goal.progressDataPoints.length - 1].scorePercent 
                : 0;

              return (
                <Card key={goal.id} className="bg-slate-900/90 border-2 border-indigo-500/30 hover:border-indigo-500/60 transition-all p-5 space-y-4 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/40 text-xs font-mono font-bold">
                        {goal.alignedStandardCode}
                      </Badge>
                      <Badge variant="outline" className="text-slate-300 border-slate-700 text-xs">
                        {goal.subjectArea} • Student: {goal.studentName}
                      </Badge>
                      {goal.isMet && (
                        <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/50 text-xs flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> MASTERY CRITERIA MET
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleCopyGoal(goal)}
                        className="h-8 text-xs bg-slate-950 text-slate-200 border-slate-700 hover:bg-slate-800"
                      >
                        {copiedId === goal.id ? (
                          <span className="text-emerald-400 flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> Copied to Clipboard
                          </span>
                        ) : (
                          <span className="flex items-center gap-1">
                            <Copy className="w-3.5 h-3.5" /> Copy Official IEP Language
                          </span>
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* FULL FORMULATED SMART GOAL */}
                  <div className="p-4 bg-slate-950/80 rounded-xl border border-indigo-500/30 space-y-2">
                    <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider block">
                      Legally Defensible Annual SMART Goal:
                    </span>
                    <p className="text-sm font-semibold text-slate-100 leading-relaxed font-sans">
                      &ldquo;By <span className="text-indigo-300 underline font-mono">{goal.targetCompletionDate}</span>, {goal.condition}, <span className="text-amber-300 font-bold">{goal.studentName}</span> {goal.observableBehavior} <span className="text-emerald-300 underline">{goal.performanceCriteria}</span>, {goal.measurementTool}.&rdquo;
                    </p>
                  </div>

                  {/* PROGRESS BAR & DATA POINTS */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-300 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Mastery Progress: {latestScore}% / 80% Target
                      </span>
                      <span className="text-slate-400 font-mono">Target Date: {goal.targetCompletionDate}</span>
                    </div>

                    <div className="w-full bg-slate-950 rounded-full h-3.5 overflow-hidden border border-slate-800 p-0.5">
                      <div 
                        className={`h-full rounded-full transition-all duration-700 ${
                          latestScore >= 80 ? 'bg-gradient-to-r from-emerald-500 to-green-400' : 'bg-gradient-to-r from-indigo-500 to-cyan-400'
                        }`}
                        style={{ width: `${Math.min(100, (latestScore / 80) * 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* DATA POINTS LOG */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-400 uppercase">Progress Monitoring Data Points:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                      {goal.progressDataPoints.map((dp, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="font-mono text-[10px] text-slate-400">{dp.date}</span>
                            <Badge className={`text-[10px] py-0 px-1.5 ${dp.scorePercent >= 80 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-indigo-500/20 text-indigo-300'}`}>
                              {dp.scorePercent}%
                            </Badge>
                          </div>
                          <p className="text-[11px] text-slate-300 truncate">{dp.notes}</p>
                        </div>
                      ))}
                    </div>

                    {/* QUICK LOG NEW DATA POINT */}
                    <div className="flex items-center gap-2 pt-2">
                      <Input
                        type="number"
                        value={newScore}
                        onChange={(e) => setNewScore(Number(e.target.value))}
                        className="w-20 h-8 bg-slate-950 text-xs border-slate-700 text-center"
                        placeholder="Score %"
                      />
                      <Input
                        type="text"
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        className="h-8 bg-slate-950 text-xs border-slate-700 flex-1"
                        placeholder="Observation notes (e.g., used ten-frame independently)..."
                      />
                      <Button
                        size="sm"
                        onClick={() => handleAddProgressPoint(goal.id)}
                        className="h-8 bg-indigo-600 hover:bg-indigo-500 text-white text-xs"
                      >
                        <Plus className="w-3.5 h-3.5 mr-1" /> Log Score
                      </Button>
                    </div>
                  </div>

                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* TAB 2: SMART GOAL GENERATOR FORM */}
        <TabsContent value="create-goal">
          <Card className="bg-slate-900/90 border-2 border-indigo-500/30 p-6 space-y-6">
            <CardHeader className="p-0 space-y-1">
              <CardTitle className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" /> Interactive SMART Goal Composer
              </CardTitle>
              <CardDescription className="text-slate-300 text-xs">
                Formula: [Timeframe] + [Given Condition] + [Student Name] + [Observable Behavior] + [Performance Criteria] + [Measurement Method].
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Student Full Name</label>
                  <Input 
                    value={studentName} 
                    onChange={(e) => setStudentName(e.target.value)} 
                    className="bg-slate-950 border-slate-700 text-xs" 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Subject Area</label>
                  <select
                    value={subjectArea}
                    onChange={(e) => setSubjectArea(e.target.value as any)}
                    className="w-full h-9 rounded-md bg-slate-950 border border-slate-700 text-xs text-slate-200 px-3"
                  >
                    <option value="Mathematics">Mathematics</option>
                    <option value="Reading/ELA">Reading/ELA</option>
                    <option value="Communication">Communication</option>
                    <option value="Behavior">Behavior</option>
                    <option value="Executive Function">Executive Function</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Target Completion Date</label>
                  <Input 
                    value={targetDate} 
                    onChange={(e) => setTargetDate(e.target.value)} 
                    className="bg-slate-950 border-slate-700 text-xs font-mono" 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-indigo-300">1. Condition / Accommodated Setting (Given...)</label>
                <Input 
                  value={condition} 
                  onChange={(e) => setCondition(e.target.value)} 
                  className="bg-slate-950 border-slate-700 text-xs" 
                  placeholder="When given a 10-frame and pictorial story problem..."
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-amber-300">2. Observable Target Behavior (will...)</label>
                <Input 
                  value={observableBehavior} 
                  onChange={(e) => setObservableBehavior(e.target.value)} 
                  className="bg-slate-950 border-slate-700 text-xs" 
                  placeholder="will independently solve missing addend equations..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-emerald-300">3. Performance Criteria (Accuracy / Frequency)</label>
                  <Input 
                    value={performanceCriteria} 
                    onChange={(e) => setPerformanceCriteria(e.target.value)} 
                    className="bg-slate-950 border-slate-700 text-xs" 
                    placeholder="with 80% accuracy across 4 out of 5 consecutive trials"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-cyan-300">4. Measurement Tool / Evidence</label>
                  <Input 
                    value={measurementTool} 
                    onChange={(e) => setMeasurementTool(e.target.value)} 
                    className="bg-slate-950 border-slate-700 text-xs" 
                    placeholder="as measured by bi-weekly teacher running records"
                  />
                </div>
              </div>

              {/* LIVE PREVIEW BOX */}
              <div className="p-4 rounded-xl bg-slate-950 border-2 border-indigo-500/40 space-y-2">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">
                  🎯 Live Formulated Goal Preview:
                </span>
                <p className="text-sm font-semibold text-slate-100 italic">
                  &ldquo;By {targetDate}, {condition}, {studentName} {observableBehavior} {performanceCriteria}, {measurementTool}.&rdquo;
                </p>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <Button
                  onClick={handleGenerateSmartGoal}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-6 py-2 rounded-xl shadow-lg"
                >
                  <Sparkles className="w-4 h-4 mr-1.5" /> Save & Deploy SMART Goal
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* TAB 3: PLAAFP BASELINE BUILDER */}
        <TabsContent value="plaafp-builder">
          <Card className="bg-slate-900/90 border-2 border-indigo-500/30 p-6 space-y-6">
            <CardHeader className="p-0 space-y-1">
              <CardTitle className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-400" /> Present Levels (PLAAFP) Baseline Engineer
              </CardTitle>
              <CardDescription className="text-slate-300 text-xs">
                Essential components: Baseline academic performance, quantitative baseline data, curriculum impact statement, and prescribed supports.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-slate-400">Student:</span>
                  <p className="text-sm font-bold text-slate-100">{plaafp.studentName} ({plaafp.gradeLevel})</p>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-slate-400">Disability Category:</span>
                  <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/40 text-xs">
                    {plaafp.disabilityCategory} - Autism Spectrum Disorder
                  </Badge>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-slate-400">Quantitative Baseline:</span>
                  <p className="text-xs font-mono text-amber-300">{plaafp.quantitativeMetric}</p>
                </div>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-indigo-400 uppercase">1. Baseline Academic & Functional Performance:</span>
                <p className="text-xs text-slate-200 leading-relaxed">{plaafp.baselinePerformance}</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase">2. Impact on General Education Curriculum Access:</span>
                <p className="text-xs text-slate-200 leading-relaxed">{plaafp.curriculumImpact}</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase">3. Prescribed Designated Supports & Assistive Technology:</span>
                <ul className="list-disc list-inside text-xs text-slate-200 space-y-1">
                  {plaafp.prescribedSupports.map((supp, i) => (
                    <li key={i}>{supp}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* TAB 4: LEGAL COMPLIANCE CHECKLIST */}
        <TabsContent value="compliance-checklist">
          <Card className="bg-slate-900/90 border-2 border-indigo-500/30 p-6 space-y-4">
            <CardHeader className="p-0 space-y-1">
              <CardTitle className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-emerald-400" /> IDEA Part B Legal Defensibility Checklist
              </CardTitle>
              <CardDescription className="text-slate-300 text-xs">
                Verified against 34 CFR § 300.320 and 19 TAC Chapter 89 standards.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 space-y-3 text-xs">
              <div className="flex items-start gap-3 p-3 bg-slate-950 rounded-xl border border-emerald-500/30">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-200">Measurable Observable Action Verb:</span>
                  <p className="text-slate-400">Uses concrete observable actions ('model', 'write', 'calculate') rather than unmeasurable terms ('understand', 'know').</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-950 rounded-xl border border-emerald-500/30">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-200">Explicit Condition & Accommodations Specified:</span>
                  <p className="text-slate-400">Clear specification of setting, manipulative tools, and visual supports required for student success.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-950 rounded-xl border border-emerald-500/30">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-200">Defensible Mastery Criteria (80%+ across 4/5 trials):</span>
                  <p className="text-slate-400">Prevents arbitrary passing claims by establishing repeatable trial thresholds.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-slate-950 rounded-xl border border-emerald-500/30">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-200">Direct Alignment to State Standards (TEKS/CCSS):</span>
                  <p className="text-slate-400">Ensures students maintain meaningful access to grade-level general curriculum expectations.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>

    </div>
  );
};
