import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Activity, 
  ShieldAlert, 
  Plus, 
  Sparkles, 
  CheckCircle, 
  Flame, 
  Smile, 
  Clock, 
  FileText,
  AlertTriangle,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AbcBehaviorLogEntry, BipPlan } from './types';
import { SAMPLE_ABC_LOGS, EXEMPLARY_BIP } from './spedEbMasterData';

interface BipBehaviorTrackerProps {
  studentName?: string;
  onLogAdded?: (log: AbcBehaviorLogEntry) => void;
}

export const BipBehaviorTracker: React.FC<BipBehaviorTrackerProps> = ({
  studentName = "Elena Rodriguez",
  onLogAdded
}) => {
  const [bipPlan, setBipPlan] = useState<BipPlan>(EXEMPLARY_BIP);
  const [logs, setLogs] = useState<AbcBehaviorLogEntry[]>(SAMPLE_ABC_LOGS);
  const [activeTab, setActiveTab] = useState<string>("abc-tracker");

  // New ABC Entry State
  const [settingEvent, setSettingEvent] = useState<string>("Loud noise during hallway transition");
  const [antecedent, setAntecedent] = useState<string>("Handed unchunked 10-question math sheet");
  const [targetBehavior, setTargetBehavior] = useState<string>("Task refusal and pushing papers off desk");
  const [intensity, setIntensity] = useState<1 | 2 | 3 | 4 | 5>(2);
  const [duration, setDuration] = useState<number>(3);
  const [functionType, setFunctionType] = useState<'Escape/Avoidance' | 'Access to Attention' | 'Access to Tangible' | 'Sensory/Automatic'>("Escape/Avoidance");
  const [replacementPrompted, setReplacementPrompted] = useState<string>("Prompted to tap '2-Minute Break' visual card");
  const [consequence, setConsequence] = useState<string>("Worksheet folded to show 2 problems only");
  const [reinforcement, setReinforcement] = useState<string>("Earned 1 Gold Star Token upon problem completion");
  const [deEscalationPhase, setDeEscalationPhase] = useState<'Calm' | 'Trigger' | 'Agitation' | 'Acceleration' | 'Peak' | 'De-escalation' | 'Recovery'>("Agitation");

  const handleAddAbcLog = () => {
    const newEntry: AbcBehaviorLogEntry = {
      id: `abc-${Date.now()}`,
      studentName,
      timestamp: new Date().toLocaleString([], { dateStyle: 'short', timeStyle: 'short' }),
      settingEvent,
      antecedent,
      targetBehavior,
      intensityLevel: intensity,
      durationMinutes: duration,
      hypothesizedFunction: functionType,
      replacementBehaviorPrompted: replacementPrompted,
      consequenceApplied: consequence,
      reinforcementEarned: reinforcement,
      deEscalationPhase
    };

    setLogs([newEntry, ...logs]);
    if (onLogAdded) onLogAdded(newEntry);
    setActiveTab("abc-tracker");
  };

  return (
    <div className="space-y-6">
      
      {/* HEADER BANNER */}
      <div className="rounded-2xl bg-gradient-to-r from-red-950/70 via-slate-900 to-amber-950/70 border-2 border-red-500/40 p-6 shadow-xl space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge className="bg-red-500/20 text-red-300 border-red-500/50 text-xs px-3 py-1 font-mono uppercase font-bold">
              <ShieldAlert className="w-3.5 h-3.5 mr-1.5 inline" /> FBA & BIP Behavior Suite
            </Badge>
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/40 text-xs">
              Positive Behavior Interventions & Supports (PBIS)
            </Badge>
          </div>
          <span className="text-xs text-slate-400">Student: {studentName}</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100">
          Functional Behavior Tracker & De-Escalation Engine
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
          Track Antecedents, Behaviors, and Consequences (ABC) in real-time. Identify behavioral functions (Escape, Attention, Tangible, Sensory) and deploy positive reinforcement replacement strategies to de-escalate crisis cycles proactively.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="bg-slate-950 border border-slate-800 p-1 rounded-xl">
          <TabsTrigger value="abc-tracker" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-xs font-bold">
            <Activity className="w-3.5 h-3.5 mr-1.5" /> ABC Real-Time Logs ({logs.length})
          </TabsTrigger>
          <TabsTrigger value="log-new-abc" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-xs font-bold">
            <Plus className="w-3.5 h-3.5 mr-1.5" /> Record ABC Observation
          </TabsTrigger>
          <TabsTrigger value="bip-plan" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-xs font-bold">
            <FileText className="w-3.5 h-3.5 mr-1.5" /> Proactive BIP Plan
          </TabsTrigger>
          <TabsTrigger value="deescalation-continuum" className="data-[state=active]:bg-red-600 data-[state=active]:text-white text-xs font-bold">
            <Flame className="w-3.5 h-3.5 mr-1.5" /> De-Escalation Protocol
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: ABC LOGS LIST */}
        <TabsContent value="abc-tracker" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {logs.map((log) => (
              <Card key={log.id} className="bg-slate-900/90 border-2 border-red-500/30 p-5 space-y-4 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-red-500/20 text-red-300 border-red-500/40 text-xs font-mono font-bold">
                      {log.timestamp}
                    </Badge>
                    <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/40 text-xs">
                      Function: {log.hypothesizedFunction}
                    </Badge>
                    <Badge variant="outline" className="text-slate-300 border-slate-700 text-xs">
                      Phase: {log.deEscalationPhase}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-400">Intensity:</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((lvl) => (
                        <div
                          key={lvl}
                          className={`w-2.5 h-2.5 rounded-full ${
                            lvl <= log.intensityLevel ? 'bg-red-500' : 'bg-slate-800'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-slate-400 ml-2">Duration: {log.durationMinutes} min</span>
                  </div>
                </div>

                {/* ABC 3-COLUMN MATRIX */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  
                  {/* ANTECEDENT */}
                  <div className="p-3 bg-slate-950 rounded-xl border border-amber-500/30 space-y-1">
                    <span className="font-bold text-amber-400 uppercase tracking-wider block">
                      A — Antecedent / Trigger:
                    </span>
                    <p className="text-slate-200">{log.antecedent}</p>
                    <p className="text-[11px] text-slate-400 italic">Setting: {log.settingEvent}</p>
                  </div>

                  {/* BEHAVIOR */}
                  <div className="p-3 bg-slate-950 rounded-xl border border-red-500/30 space-y-1">
                    <span className="font-bold text-red-400 uppercase tracking-wider block">
                      B — Target Problem Behavior:
                    </span>
                    <p className="text-slate-200">{log.targetBehavior}</p>
                    <p className="text-[11px] text-emerald-400 font-semibold">
                      Replacement: {log.replacementBehaviorPrompted}
                    </p>
                  </div>

                  {/* CONSEQUENCE & REINFORCEMENT */}
                  <div className="p-3 bg-slate-950 rounded-xl border border-emerald-500/30 space-y-1">
                    <span className="font-bold text-emerald-400 uppercase tracking-wider block">
                      C — Consequence & Reinforcement:
                    </span>
                    <p className="text-slate-200">{log.consequenceApplied}</p>
                    <p className="text-[11px] text-yellow-300 font-bold flex items-center gap-1">
                      <Award className="w-3 h-3 text-yellow-400" /> {log.reinforcementEarned}
                    </p>
                  </div>

                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* TAB 2: RECORD NEW ABC LOG */}
        <TabsContent value="log-new-abc">
          <Card className="bg-slate-900/90 border-2 border-red-500/30 p-6 space-y-5">
            <CardHeader className="p-0 space-y-1">
              <CardTitle className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Activity className="w-5 h-5 text-red-400" /> Record ABC Behavioral Incident
              </CardTitle>
              <CardDescription className="text-slate-300 text-xs">
                Log setting events, immediate triggers, problem behaviors, functional hypotheses, and positive replacement interventions.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Setting Event / Context</label>
                  <Input 
                    value={settingEvent} 
                    onChange={(e) => setSettingEvent(e.target.value)} 
                    className="bg-slate-950 border-slate-700 text-xs" 
                    placeholder="e.g. Loud cafeteria, skipped breakfast, morning transition..."
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-amber-300">Antecedent / Direct Trigger</label>
                  <Input 
                    value={antecedent} 
                    onChange={(e) => setAntecedent(e.target.value)} 
                    className="bg-slate-950 border-slate-700 text-xs" 
                    placeholder="e.g. Handed 10-problem worksheet, asked to transition..."
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-red-300">Target Problem Behavior (Observable & Objective)</label>
                <Input 
                  value={targetBehavior} 
                  onChange={(e) => setTargetBehavior(e.target.value)} 
                  className="bg-slate-950 border-slate-700 text-xs" 
                  placeholder="e.g. Pushing paper off desk, vocal vocalization, head down..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Hypothesized Function</label>
                  <select
                    value={functionType}
                    onChange={(e) => setFunctionType(e.target.value as any)}
                    className="w-full h-9 rounded-md bg-slate-950 border border-slate-700 text-xs text-slate-200 px-3"
                  >
                    <option value="Escape/Avoidance">Escape / Task Avoidance</option>
                    <option value="Access to Attention">Access to Attention (Adult/Peer)</option>
                    <option value="Access to Tangible">Access to Tangible / Preferred Item</option>
                    <option value="Sensory/Automatic">Sensory / Automatic Stimulation</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Intensity Level (1-5)</label>
                  <select
                    value={intensity}
                    onChange={(e) => setIntensity(Number(e.target.value) as any)}
                    className="w-full h-9 rounded-md bg-slate-950 border border-slate-700 text-xs text-slate-200 px-3"
                  >
                    <option value={1}>1 - Mild Non-Verbal Disengagement</option>
                    <option value={2}>2 - Moderate Verbal Vocalization / Refusal</option>
                    <option value={3}>3 - Significant Disruptive Action</option>
                    <option value={4}>4 - High Agitation / Material Destruction</option>
                    <option value={5}>5 - Severe Crisis / Safety Risk</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Duration (Minutes)</label>
                  <Input 
                    type="number"
                    value={duration} 
                    onChange={(e) => setDuration(Number(e.target.value))} 
                    className="bg-slate-950 border-slate-700 text-xs" 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-emerald-300">Functionally Equivalent Replacement Behavior Prompted</label>
                <Input 
                  value={replacementPrompted} 
                  onChange={(e) => setReplacementPrompted(e.target.value)} 
                  className="bg-slate-950 border-slate-700 text-xs" 
                  placeholder="e.g. Prompted student to tap 'Break' card on AAC device..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Instructional Consequence / Adaptation</label>
                  <Input 
                    value={consequence} 
                    onChange={(e) => setConsequence(e.target.value)} 
                    className="bg-slate-950 border-slate-700 text-xs" 
                    placeholder="e.g. Worksheet chunked into 2-problem strip..."
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-yellow-300">Reinforcement / Token Earned</label>
                  <Input 
                    value={reinforcement} 
                    onChange={(e) => setReinforcement(e.target.value)} 
                    className="bg-slate-950 border-slate-700 text-xs" 
                    placeholder="e.g. 1 Gold Star token for asking for help..."
                  />
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <Button
                  onClick={handleAddAbcLog}
                  className="bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-6 py-2 rounded-xl shadow-lg"
                >
                  <Activity className="w-4 h-4 mr-1.5" /> Save ABC Behavior Log Entry
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* TAB 3: PROACTIVE BIP PLAN */}
        <TabsContent value="bip-plan">
          <Card className="bg-slate-900/90 border-2 border-red-500/30 p-6 space-y-6">
            <CardHeader className="p-0 space-y-1">
              <CardTitle className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-red-400" /> Proactive Behavior Intervention Plan (BIP)
              </CardTitle>
              <CardDescription className="text-slate-300 text-xs">
                Target Student: {bipPlan.studentName} • Positive Behavioral Interventions & Supports (PBIS)
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 space-y-4">
              <div className="p-4 bg-slate-950 rounded-xl border border-red-500/30 space-y-2">
                <span className="text-xs font-bold text-red-400 uppercase">Target Problem Behavior:</span>
                <p className="text-xs text-slate-200">{bipPlan.targetProblemBehavior}</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-amber-500/30 space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase">Maintaining Function of Behavior:</span>
                <p className="text-xs text-slate-200 font-semibold">{bipPlan.functionOfBehavior}</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-emerald-500/30 space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase">Functionally Equivalent Replacement Behavior (FERB):</span>
                <p className="text-xs text-slate-200 font-semibold">{bipPlan.functionallyEquivalentReplacementBehavior}</p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase">Proactive Antecedent Modifications:</span>
                <ul className="list-disc list-inside text-xs text-slate-200 space-y-1">
                  {bipPlan.antecedentModifications.map((mod, idx) => (
                    <li key={idx}>{mod}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-yellow-500/30 space-y-2">
                <span className="text-xs font-bold text-yellow-400 uppercase">Positive Reinforcement Schedule:</span>
                <p className="text-xs text-slate-200">{bipPlan.positiveReinforcementSchedule}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* TAB 4: DE-ESCALATION PROTOCOL */}
        <TabsContent value="deescalation-continuum">
          <Card className="bg-slate-900/90 border-2 border-red-500/30 p-6 space-y-4">
            <CardHeader className="p-0 space-y-1">
              <CardTitle className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400" /> Crisis De-Escalation Continuum & Educator Script
              </CardTitle>
              <CardDescription className="text-slate-300 text-xs">
                Non-violent crisis intervention and proactive de-escalation actions for each behavioral escalation phase.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 space-y-3">
              {bipPlan.deEscalationProtocol.map((stage, idx) => (
                <div key={idx} className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                    {stage.stage}
                  </span>
                  <p className="text-xs text-slate-200 font-sans leading-relaxed">
                    👉 <span className="font-semibold text-cyan-300">Educator Action:</span> {stage.teacherAction}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>

    </div>
  );
};
