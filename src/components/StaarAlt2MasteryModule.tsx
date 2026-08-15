import React, { useState } from 'react';
import { 
  Award, 
  HelpCircle, 
  Sparkles, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RefreshCw, 
  BookOpen, 
  Check,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { StaarAlt2StimulusCluster, StaarAlt2StimulusCard } from './types';
import { STAAR_ALT_2_SAMPLE_CLUSTER } from './spedEbMasterData';

interface StaarAlt2MasteryModuleProps {
  onScoreRecorded?: (score: number, tier: number) => void;
  onSpeak?: (text: string) => void;
}

export const StaarAlt2MasteryModule: React.FC<StaarAlt2MasteryModuleProps> = ({
  onScoreRecorded,
  onSpeak
}) => {
  const [cluster, setCluster] = useState<StaarAlt2StimulusCluster>(STAAR_ALT_2_SAMPLE_CLUSTER);
  const [currentTier, setCurrentTier] = useState<3 | 2 | 1>(3);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [trialResult, setTrialResult] = useState<'pending' | 'correct' | 'incorrect'>('pending');
  const [totalScore, setTotalScore] = useState<number | null>(null);
  const [testComplete, setTestComplete] = useState<boolean>(false);

  const activeLevelData = currentTier === 3 
    ? cluster.level3 
    : currentTier === 2 
      ? cluster.level2 
      : cluster.level1;

  const handleSpeakTeacherTalk = () => {
    const text = activeLevelData.scriptedTeacherTalk;
    if (onSpeak) {
      onSpeak(text);
    } else if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCardClick = (card: StaarAlt2StimulusCard) => {
    if (testComplete) return;
    setSelectedCardId(card.id);

    if (card.isCorrect) {
      setTrialResult('correct');
      const scoreEarned = activeLevelData.points;
      setTotalScore(scoreEarned);
      setTestComplete(true);
      if (onScoreRecorded) onScoreRecorded(scoreEarned, currentTier);
    } else {
      setTrialResult('incorrect');
      if (currentTier === 3) {
        setTimeout(() => {
          setCurrentTier(2);
          setSelectedCardId(null);
          setTrialResult('pending');
        }, 1500);
      } else if (currentTier === 2) {
        setTimeout(() => {
          setCurrentTier(1);
          setSelectedCardId(null);
          setTrialResult('pending');
        }, 1500);
      } else {
        setTotalScore(0);
        setTestComplete(true);
        if (onScoreRecorded) onScoreRecorded(0, 1);
      }
    }
  };

  const handleReset = () => {
    setCurrentTier(3);
    setSelectedCardId(null);
    setTrialResult('pending');
    setTotalScore(null);
    setTestComplete(false);
  };

  return (
    <div className="space-y-6">
      
      {/* HEADER BANNER */}
      <div className="rounded-2xl bg-gradient-to-r from-amber-950/80 via-slate-900 to-rose-950/80 border-2 border-amber-500/40 p-6 shadow-xl space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/50 text-xs px-3 py-1 font-mono uppercase font-bold">
              <Award className="w-3.5 h-3.5 mr-1.5 inline" /> STAAR Alternate 2 Module
            </Badge>
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/40 text-xs">
              TEA Standardized 3-Tier Stimulus Protocol
            </Badge>
          </div>
          <span className="text-xs text-slate-400 font-mono">Essence Derived from: {cluster.gradeLevelTeks}</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100">
          STAAR Alt 2 Essence Statement & 3-Tier Testing Chamber
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
          Standardized alternate assessment delivery for students with significant cognitive disabilities. Integrates multi-modal stimulus cards, scripted educator prompts, and progressive tier fallback (Level 3 $\rightarrow$ Level 2 $\rightarrow$ Level 1).
        </p>
      </div>

      {/* ESSENCE STATEMENT DECONSTRUCTION */}
      <Card className="bg-slate-900/90 border-2 border-amber-500/30 p-5 space-y-3 shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            🏛️ Essence Statement Derivation Crosswalk
          </span>
          <Badge variant="outline" className="text-slate-300 border-slate-700 text-xs">
            Prerequisite: {cluster.prerequisiteSkillTeks}
          </Badge>
        </div>

        <div className="p-3.5 bg-slate-950 rounded-xl border border-amber-500/30 space-y-1">
          <span className="text-[11px] font-bold text-slate-400 uppercase">Official TEA Essence Statement:</span>
          <p className="text-sm font-bold text-amber-200">&ldquo;{cluster.essenceStatement}&rdquo;</p>
        </div>
      </Card>

      {/* TESTING CHAMBER */}
      <Card className="bg-slate-900/90 border-2 border-amber-500/40 p-6 space-y-6 shadow-2xl">
        
        {/* TIER STATUS BAR */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <Badge className={`text-xs px-3 py-1 font-bold ${
              currentTier === 3 ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/50' :
              currentTier === 2 ? 'bg-amber-500/20 text-amber-300 border-amber-500/50' :
              'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
            }`}>
              Currently Administering: Level {currentTier} ({activeLevelData.points} Points Available)
            </Badge>

            <Badge variant="outline" className="text-slate-400 border-slate-800 text-xs">
              {currentTier === 3 && "Tier 1: Initial Trial (3 Cards)"}
              {currentTier === 2 && "Tier 2: Prompted Trial (2 Cards)"}
              {currentTier === 1 && "Tier 3: Modeled Direct Match"}
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handleReset}
              className="h-8 text-xs bg-slate-950 border-slate-700 text-slate-300 hover:bg-slate-800"
            >
              <RefreshCw className="w-3.5 h-3.5 mr-1" /> Reset Test
            </Button>
          </div>
        </div>

        {/* SCRIPTED TEACHER PROMPT BOX */}
        <div className="p-4 rounded-2xl bg-slate-950 border-2 border-amber-500/50 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              🗣️ Scripted Teacher Prompt (Read Verbatim to Student):
            </span>
            <Button
              size="sm"
              onClick={handleSpeakTeacherTalk}
              className="h-7 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
            >
              <Volume2 className="w-3.5 h-3.5 mr-1" /> Speak Script Aloud
            </Button>
          </div>

          <p className="text-sm font-semibold text-slate-100 italic leading-relaxed">
            &ldquo;{activeLevelData.scriptedTeacherTalk}&rdquo;
          </p>

          <p className="text-[11px] text-slate-400 pt-1">
            <strong className="text-slate-300">Scaffolding Protocol:</strong> {activeLevelData.scaffoldingNote}
          </p>
        </div>

        {/* STIMULUS CARDS DECK */}
        <div className="space-y-3">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
            Stimulus Card Deck (Tap/Click to Record Student Response):
          </span>

          <div className={`grid gap-4 ${
            activeLevelData.cards.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'
          }`}>
            {activeLevelData.cards.map((card) => {
              const isSelected = selectedCardId === card.id;

              return (
                <button
                  key={card.id}
                  disabled={testComplete}
                  onClick={() => handleCardClick(card)}
                  className={`p-6 rounded-2xl border-2 text-center transition-all flex flex-col items-center justify-center space-y-3 min-h-[160px] ${
                    isSelected && card.isCorrect
                      ? 'bg-emerald-950/80 border-emerald-400 ring-4 ring-emerald-500/50 shadow-2xl scale-105'
                      : isSelected && !card.isCorrect
                        ? 'bg-red-950/80 border-red-400 ring-4 ring-red-500/50 scale-95'
                        : 'bg-slate-950/90 border-slate-800 hover:border-amber-500/50 hover:bg-slate-900/90'
                  }`}
                >
                  <span className="text-3xl md:text-4xl p-2 rounded-xl bg-slate-900/80 border border-slate-800 block">
                    {card.emojiIcon}
                  </span>

                  <span className="text-sm font-bold text-slate-100">{card.label}</span>
                  <p className="text-xs text-slate-400">{card.description}</p>

                  {isSelected && card.isCorrect && (
                    <Badge className="bg-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> CORRECT RESPONSE (+{activeLevelData.points} PTS)
                    </Badge>
                  )}

                  {isSelected && !card.isCorrect && (
                    <Badge className="bg-red-500 text-white font-bold text-xs flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5" /> INCORRECT — DROPPING TIER...
                    </Badge>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* COMPLETION BANNER */}
        {testComplete && (
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 border-2 border-emerald-500 p-4 flex flex-wrap items-center justify-between gap-4 shadow-xl">
            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                🎉 Cluster Administration Complete!
              </span>
              <p className="text-lg font-extrabold text-slate-100">
                Student Score Earned: <span className="text-emerald-300 text-2xl font-mono">{totalScore} Points</span> (Tier {currentTier})
              </p>
            </div>

            <Button
              onClick={handleReset}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-2 rounded-xl shadow-lg"
            >
              <RefreshCw className="w-4 h-4 mr-1.5" /> Administer Next Cluster
            </Button>
          </div>
        )}

      </Card>

    </div>
  );
};
