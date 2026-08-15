import React from 'react';
import { 
  Eye, 
  Type, 
  Sun, 
  Moon, 
  Volume2, 
  Sliders, 
  Minus, 
  Plus, 
  Glasses,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AccessibilitySettings } from './types';

interface AccessibilityToolbarProps {
  settings: AccessibilitySettings;
  onUpdateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
  onSpeakText?: (text: string) => void;
}

export const AccessibilityToolbar: React.FC<AccessibilityToolbarProps> = ({
  settings,
  onUpdateSettings,
  onSpeakText
}) => {
  const contrastOptions = [
    { id: 'default', label: 'Default Cyber', icon: '🌌', bgClass: 'bg-slate-900 text-amber-300' },
    { id: 'high-contrast-yellow', label: 'High-Contrast Gold', icon: '⚡', bgClass: 'bg-black text-yellow-300 border-yellow-400' },
    { id: 'blue-calm', label: 'Calm Blue Tint', icon: '🌊', bgClass: 'bg-slate-950 text-cyan-300 border-cyan-400' },
    { id: 'warm-amber', label: 'Warm Amber Rest', icon: '🕯️', bgClass: 'bg-stone-900 text-amber-200 border-amber-400' }
  ] as const;

  const handleTestSpeech = () => {
    if (onSpeakText) {
      onSpeakText("EduPulse Universal Design for Learning Accessibility Engine is Active. Ready for classroom instruction.");
    } else if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance("EduPulse Universal Design for Learning Accessibility Engine is Active. Ready for classroom instruction.");
      utterance.rate = settings.textToSpeechRate;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="rounded-2xl bg-slate-950/90 border-2 border-amber-500/40 p-4 shadow-xl backdrop-blur-md space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Glasses className="w-5 h-5 text-amber-400" />
          <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
            UDL Neuro-Adaptive Accessibility Bar
          </h3>
          <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/40 text-[10px]">
            WCAG 2.2 AAA & IDEA Compliant
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={handleTestSpeech}
            className="h-8 text-xs bg-slate-900 hover:bg-slate-800 text-cyan-300 border-cyan-500/40"
          >
            <Volume2 className="w-3.5 h-3.5 mr-1" /> Test Babel Audio Read-Aloud
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        
        {/* DYSLEXIA FONT TOGGLE */}
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="font-bold text-slate-200 flex items-center gap-1.5">
              <Type className="w-3.5 h-3.5 text-amber-400" /> OpenDyslexic Mode
            </span>
            <p className="text-[11px] text-slate-400">Expanded letter spacing & heavy base</p>
          </div>
          <Button
            size="sm"
            onClick={() => onUpdateSettings({ dyslexiaFont: !settings.dyslexiaFont })}
            className={`h-7 px-3 text-xs font-bold transition-all ${
              settings.dyslexiaFont 
                ? 'bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-md' 
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {settings.dyslexiaFont ? 'ON' : 'OFF'}
          </Button>
        </div>

        {/* FONT SIZE SCALER */}
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="font-bold text-slate-200 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-cyan-400" /> Font Scaler ({Math.round(settings.fontSizeScale * 100)}%)
            </span>
            <p className="text-[11px] text-slate-400">Large print magnification</p>
          </div>
          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="outline"
              disabled={settings.fontSizeScale <= 0.9}
              onClick={() => onUpdateSettings({ fontSizeScale: Math.max(0.9, settings.fontSizeScale - 0.1) })}
              className="h-7 w-7 bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700"
            >
              <Minus className="w-3 h-3" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              disabled={settings.fontSizeScale >= 1.4}
              onClick={() => onUpdateSettings({ fontSizeScale: Math.min(1.4, settings.fontSizeScale + 0.1) })}
              className="h-7 w-7 bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700"
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>
        </div>

        {/* LINE FOCUS RULER */}
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="font-bold text-slate-200 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-purple-400" /> Line Focus Guide
            </span>
            <p className="text-[11px] text-slate-400">ADHD & tracking overlay</p>
          </div>
          <Button
            size="sm"
            onClick={() => onUpdateSettings({ lineFocusRuler: !settings.lineFocusRuler })}
            className={`h-7 px-3 text-xs font-bold transition-all ${
              settings.lineFocusRuler 
                ? 'bg-purple-500 text-white hover:bg-purple-400 shadow-md' 
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {settings.lineFocusRuler ? 'ACTIVE' : 'OFF'}
          </Button>
        </div>

        {/* AUDIO SPEED CONTROL */}
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="font-bold text-slate-200 flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> Speech Rate ({settings.textToSpeechRate}x)
            </span>
            <p className="text-[11px] text-slate-400">EL & processing speed control</p>
          </div>
          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="outline"
              disabled={settings.textToSpeechRate <= 0.7}
              onClick={() => onUpdateSettings({ textToSpeechRate: Number((settings.textToSpeechRate - 0.1).toFixed(1)) })}
              className="h-7 w-7 bg-slate-800 text-slate-200 border-slate-700"
            >
              <Minus className="w-3 h-3" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              disabled={settings.textToSpeechRate >= 1.3}
              onClick={() => onUpdateSettings({ textToSpeechRate: Number((settings.textToSpeechRate + 0.1).toFixed(1)) })}
              className="h-7 w-7 bg-slate-800 text-slate-200 border-slate-700"
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>
        </div>

      </div>

      {/* CONTRAST PALETTE PRESETS */}
      <div className="pt-2 flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-bold text-slate-400 uppercase mr-1">Contrast Themes:</span>
        {contrastOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onUpdateSettings({ contrastMode: opt.id })}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-all ${
              settings.contrastMode === opt.id 
                ? 'ring-2 ring-amber-400 scale-105 shadow-md ' + opt.bgClass 
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
            }`}
          >
            <span>{opt.icon}</span>
            <span>{opt.label}</span>
            {settings.contrastMode === opt.id && <CheckCircle2 className="w-3 h-3 ml-0.5 text-amber-400" />}
          </button>
        ))}
      </div>
    </div>
  );
};
