import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  Play, 
  Pause, 
  RotateCcw, 
  Star, 
  Plus, 
  Award, 
  Clock, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { VisualScheduleTask } from './types';
import { INITIAL_VISUAL_SCHEDULE } from './spedEbMasterData';

interface VisualScheduleBuilderProps {
  onRewardUnlocked?: () => void;
}

export const VisualScheduleBuilder: React.FC<VisualScheduleBuilderProps> = ({
  onRewardUnlocked
}) => {
  const [tasks, setTasks] = useState<VisualScheduleTask[]>(INITIAL_VISUAL_SCHEDULE);
  const [firstTaskText, setFirstTaskText] = useState<string>("Complete 3 Story Problems on Ten-Frame Mat");
  const [thenRewardText, setThenRewardText] = useState<string>("5 Minutes Sensory iPad / Drawing Choice");
  const [firstCompleted, setFirstCompleted] = useState<boolean>(false);
  const [thenCompleted, setThenCompleted] = useState<boolean>(false);

  // Token Economy State (0 to 5 stars)
  const [tokensEarned, setTokensEarned] = useState<number>(3);
  const [rewardCelebration, setRewardCelebration] = useState<boolean>(false);

  // Visual Timer State (e.g., 5 min countdown)
  const [timerSeconds, setTimerSeconds] = useState<number>(300);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      // Play chime or alert
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const toggleTaskCompletion = (taskId: string) => {
    setTasks(tasks.map(t => {
      if (t.id === taskId) {
        const nextState = !t.isCompleted;
        if (nextState) {
          handleEarnToken();
        }
        return { ...t, isCompleted: nextState };
      }
      return t;
    }));
  };

  const handleEarnToken = () => {
    if (tokensEarned < 5) {
      const next = tokensEarned + 1;
      setTokensEarned(next);
      if (next === 5) {
        setRewardCelebration(true);
        if (onRewardUnlocked) onRewardUnlocked();
      }
    }
  };

  const handleResetTokens = () => {
    setTokensEarned(0);
    setRewardCelebration(false);
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  return (
    <div className="space-y-6">
      
      {/* HEADER BANNER */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 border-2 border-blue-500/40 p-6 shadow-xl space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/50 text-xs px-3 py-1 font-mono uppercase font-bold">
              <Calendar className="w-3.5 h-3.5 mr-1.5 inline" /> Visual Schedules & Token Board
            </Badge>
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/40 text-xs">
              Evidence-Based ASD & ADHD Support
            </Badge>
          </div>
          <span className="text-xs text-slate-400">Structured Transitions & Executive Control</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100">
          First-Then Board, Task Analysis & Token Economy
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
          Visual supports eliminate cognitive ambiguity, reduce anxiety during academic transitions, and reinforce positive task persistence through structured milestone completion.
        </p>
      </div>

      {/* DYNAMIC FIRST-THEN BOARD */}
      <Card className="bg-slate-900/90 border-2 border-blue-500/40 p-6 space-y-4 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
            🎯 First - Then Dynamic Behavioral Board:
          </span>
          <Badge variant="outline" className="text-slate-300 border-slate-700 text-xs">
            High-Impact Contingency
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* FIRST WORK TASK */}
          <div className={`p-5 rounded-2xl border-2 transition-all space-y-3 ${
            firstCompleted 
              ? 'bg-emerald-950/50 border-emerald-400' 
              : 'bg-slate-950 border-amber-500/50 shadow-md'
          }`}>
            <div className="flex items-center justify-between">
              <Badge className="bg-amber-500 text-slate-950 font-extrabold text-xs px-3 py-1">
                1. FIRST (Work Task)
              </Badge>
              <button onClick={() => setFirstCompleted(!firstCompleted)} className="text-slate-400 hover:text-emerald-400">
                {firstCompleted ? <CheckCircle2 className="w-6 h-6 text-emerald-400" /> : <Circle className="w-6 h-6" />}
              </button>
            </div>
            <p className="text-base font-bold text-slate-100">{firstTaskText}</p>
            <p className="text-xs text-slate-400">Math manipulatives + 2-problem strip</p>
          </div>

          {/* THEN REWARD TASK */}
          <div className={`p-5 rounded-2xl border-2 transition-all space-y-3 ${
            thenCompleted 
              ? 'bg-purple-950/50 border-purple-400' 
              : 'bg-slate-950 border-purple-500/40 shadow-md'
          }`}>
            <div className="flex items-center justify-between">
              <Badge className="bg-purple-500 text-white font-extrabold text-xs px-3 py-1">
                2. THEN (Reward / Choice)
              </Badge>
              <button onClick={() => setThenCompleted(!thenCompleted)} className="text-slate-400 hover:text-purple-400">
                {thenCompleted ? <CheckCircle2 className="w-6 h-6 text-purple-400" /> : <Circle className="w-6 h-6" />}
              </button>
            </div>
            <p className="text-base font-bold text-purple-200">{thenRewardText}</p>
            <p className="text-xs text-slate-400">Preferred sensory or digital play</p>
          </div>

        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* TASK ANALYSIS SEQUENCE (2 Cols) */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="bg-slate-900/90 border-2 border-indigo-500/30 p-5 space-y-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                📋 Step-by-Step Task Analysis Checklist:
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {tasks.filter(t => t.isCompleted).length} / {tasks.length} Completed
              </span>
            </div>

            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => toggleTaskCompletion(task.id)}
                  className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    task.isCompleted
                      ? 'bg-emerald-950/40 border-emerald-500/50 text-slate-300 line-through opacity-75'
                      : 'bg-slate-950 border-slate-800 hover:border-indigo-500/50 text-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2 rounded-lg bg-slate-900 border border-slate-800">
                      {task.emoji}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold">{task.title}</h4>
                      <p className="text-xs text-slate-400">{task.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-slate-400 border-slate-800 text-[10px]">
                      {task.durationMinutes} min
                    </Badge>
                    {task.isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    ) : (
                      <Circle className="w-6 h-6 text-slate-600 hover:text-indigo-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* REINFORCEMENT TOKEN BOARD & TIMER (1 Col) */}
        <div className="space-y-4">
          
          {/* TOKEN ECONOMY 5-STAR BOARD */}
          <Card className="bg-slate-900/90 border-2 border-yellow-500/40 p-5 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" /> 5-Star Token Board
              </span>
              <button onClick={handleResetTokens} className="text-[11px] text-slate-400 hover:text-slate-200">
                Reset
              </button>
            </div>

            <div className="flex justify-between items-center py-2">
              {[1, 2, 3, 4, 5].map((starNum) => {
                const isEarned = starNum <= tokensEarned;
                return (
                  <button
                    key={starNum}
                    onClick={handleEarnToken}
                    className={`p-2 rounded-xl transition-all transform hover:scale-110 ${
                      isEarned 
                        ? 'bg-yellow-500/20 text-yellow-400 border-2 border-yellow-400 shadow-md shadow-yellow-500/20' 
                        : 'bg-slate-950 text-slate-700 border border-slate-800'
                    }`}
                  >
                    <Star className={`w-6 h-6 ${isEarned ? 'fill-yellow-400' : ''}`} />
                  </button>
                );
              })}
            </div>

            {rewardCelebration && (
              <div className="p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-400 text-slate-950 font-extrabold text-xs text-center shadow-lg animate-bounce">
                🎉 REWARD UNLOCKED! Choose Your 5-Minute Free Activity!
              </div>
            )}
          </Card>

          {/* VISUAL WORK TIMER */}
          <Card className="bg-slate-900/90 border-2 border-cyan-500/40 p-5 space-y-4 shadow-xl text-center">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Visual Task Timer
              </span>
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/40 text-[10px]">
                Focus Interval
              </Badge>
            </div>

            <div className="text-4xl font-extrabold font-mono text-cyan-200 tracking-wider py-2">
              {formatTimer(timerSeconds)}
            </div>

            <div className="flex justify-center gap-2">
              <Button
                size="sm"
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className={`h-8 text-xs font-bold px-4 ${
                  isTimerRunning ? 'bg-amber-600 hover:bg-amber-500 text-white' : 'bg-cyan-600 hover:bg-cyan-500 text-white'
                }`}
              >
                {isTimerRunning ? <Pause className="w-3.5 h-3.5 mr-1" /> : <Play className="w-3.5 h-3.5 mr-1" />}
                {isTimerRunning ? 'Pause' : 'Start'}
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => { setIsTimerRunning(false); setTimerSeconds(300); }}
                className="h-8 text-xs bg-slate-950 border-slate-700 text-slate-300 hover:bg-slate-800"
              >
                <RotateCcw className="w-3.5 h-3.5 mr-1" /> Reset (5m)
              </Button>
            </div>
          </Card>

        </div>

      </div>

    </div>
  );
};
