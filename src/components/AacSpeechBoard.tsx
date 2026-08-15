import React, { useState } from 'react';
import { 
  Volume2, 
  Sparkles, 
  Trash2, 
  CornerDownLeft, 
  Smile, 
  Layers, 
  Plus, 
  Check, 
  Play, 
  RefreshCw,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AacTile } from './types';
import { AAC_TILES_MASTER } from './spedEbMasterData';

interface AacSpeechBoardProps {
  onSentenceSpoken?: (sentence: string) => void;
}

export const AacSpeechBoard: React.FC<AacSpeechBoardProps> = ({
  onSentenceSpoken
}) => {
  const [tiles, setTiles] = useState<AacTile[]>(AAC_TILES_MASTER);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sentenceStrip, setSentenceStrip] = useState<AacTile[]>([]);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const categories = ['All', 'Core', 'Needs', 'Math', 'Feelings', 'Actions'];

  const filteredTiles = selectedCategory === 'All' 
    ? tiles 
    : tiles.filter(t => t.category === selectedCategory);

  const handleAddTileToStrip = (tile: AacTile) => {
    setSentenceStrip([...sentenceStrip, tile]);
    // Also speak single word instantly for feedback
    speakText(tile.speechPhrase);
  };

  const handleRemoveLastTile = () => {
    setSentenceStrip(sentenceStrip.slice(0, -1));
  };

  const handleClearStrip = () => {
    setSentenceStrip([]);
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
    if (onSentenceSpoken) onSentenceSpoken(text);
  };

  const handleSpeakFullSentence = () => {
    if (sentenceStrip.length === 0) return;
    const fullSentence = sentenceStrip.map(t => t.speechPhrase).join(' ');
    speakText(fullSentence);
  };

  return (
    <div className="space-y-6">
      
      {/* HEADER BANNER */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-950/80 via-slate-900 to-indigo-950/80 border-2 border-purple-500/40 p-6 shadow-xl space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50 text-xs px-3 py-1 font-mono uppercase font-bold">
              <MessageSquare className="w-3.5 h-3.5 mr-1.5 inline" /> High-Tech AAC Speech Board
            </Badge>
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/40 text-xs">
              Web Speech API Voice Synthesizer
            </Badge>
          </div>
          <span className="text-xs text-slate-400">Total Core & Fringe Tiles: {tiles.length}</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100">
          Augmentative & Alternative Communication (AAC) Engine
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
          Multi-modal voice output communication aid for non-verbal, minimally verbal, and speech-delayed students. Tap tiles to construct complete academic sentences and speak instantly.
        </p>
      </div>

      {/* DYNAMIC SENTENCE STRIP BAR */}
      <Card className="bg-slate-900/90 border-2 border-purple-500/40 p-5 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            📝 Active Sentence Strip:
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {sentenceStrip.length} words constructed
          </span>
        </div>

        <div className="min-h-[72px] p-3 rounded-2xl bg-slate-950 border-2 border-slate-800 flex flex-wrap items-center gap-2">
          {sentenceStrip.length === 0 ? (
            <span className="text-xs text-slate-500 italic p-2">
              Tap vocabulary tiles below to build your sentence strip...
            </span>
          ) : (
            sentenceStrip.map((tile, idx) => (
              <div
                key={idx}
                className={`px-3 py-2 rounded-xl border flex items-center gap-2 shadow-md animate-in fade-in zoom-in-95 duration-150 ${tile.colorClass}`}
              >
                <span className="text-xl">{tile.emoji}</span>
                <span className="text-xs font-bold">{tile.label}</span>
              </div>
            ))
          )}
        </div>

        {/* SENTENCE CONTROLS */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-2">
            <Button
              disabled={sentenceStrip.length === 0}
              onClick={handleRemoveLastTile}
              variant="outline"
              size="sm"
              className="h-8 text-xs bg-slate-950 border-slate-700 text-slate-300 hover:bg-slate-800"
            >
              <CornerDownLeft className="w-3.5 h-3.5 mr-1" /> Backspace
            </Button>
            <Button
              disabled={sentenceStrip.length === 0}
              onClick={handleClearStrip}
              variant="outline"
              size="sm"
              className="h-8 text-xs bg-slate-950 border-slate-700 text-rose-300 hover:bg-slate-800"
            >
              <Trash2 className="w-3.5 h-3.5 mr-1" /> Clear
            </Button>
          </div>

          <Button
            disabled={sentenceStrip.length === 0}
            onClick={handleSpeakFullSentence}
            className={`font-bold text-xs px-6 py-2 rounded-xl shadow-lg transition-all ${
              isSpeaking
                ? 'bg-purple-400 text-slate-950 ring-4 ring-purple-400/50 scale-105'
                : 'bg-purple-600 hover:bg-purple-500 text-white'
            }`}
          >
            <Volume2 className="w-4 h-4 mr-1.5" />
            {isSpeaking ? 'Speaking Sentence...' : 'Speak Sentence Aloud'}
          </Button>
        </div>
      </Card>

      {/* CATEGORY SELECTOR TABS */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-400 uppercase mr-1">Categories:</span>
        {categories.map((cat) => (
          <Button
            key={cat}
            size="sm"
            variant={selectedCategory === cat ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(cat)}
            className={`h-8 text-xs rounded-xl transition-all ${
              selectedCategory === cat 
                ? 'bg-purple-600 hover:bg-purple-500 text-white font-bold shadow-md' 
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* VOCABULARY TILES GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {filteredTiles.map((tile) => (
          <button
            key={tile.id}
            onClick={() => handleAddTileToStrip(tile)}
            className={`p-4 rounded-2xl border-2 transition-all hover:scale-105 active:scale-95 text-center flex flex-col items-center justify-center space-y-2 shadow-lg ${tile.colorClass}`}
          >
            <span className="text-3xl p-1 block">{tile.emoji}</span>
            <span className="text-xs font-extrabold tracking-tight block">{tile.label}</span>
            <span className="text-[10px] opacity-75 font-mono">{tile.category}</span>
          </button>
        ))}
      </div>

    </div>
  );
};
