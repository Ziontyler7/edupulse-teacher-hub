import React, { useState } from 'react';
import { 
  Languages, 
  Volume2, 
  Sparkles, 
  BookOpen, 
  MessageSquare, 
  PenTool, 
  Headphones, 
  AlertTriangle, 
  CheckCircle2, 
  Copy, 
  Check, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TelpasProficiencyLevel, BilingualCognate } from './types';
import { TELPAS_SCAFFOLDS_MASTER, BILINGUAL_COGNATES_DATABASE } from './spedEbMasterData';

interface TelpasScaffoldingEngineProps {
  currentStandardCode?: string;
  onSpeak?: (text: string, lang?: string) => void;
}

export const TelpasScaffoldingEngine: React.FC<TelpasScaffoldingEngineProps> = ({
  currentStandardCode = "TEKS 1.3B",
  onSpeak
}) => {
  const [activeTier, setActiveTier] = useState<TelpasProficiencyLevel>('Intermediate');
  const [activeTab, setActiveTab] = useState<string>("telpas-tiers");
  const [selectedStem, setSelectedStem] = useState<string>("");
  const [customStemFill, setCustomStemFill] = useState<string>("");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const scaffolds = TELPAS_SCAFFOLDS_MASTER[activeTier];

  const handleSpeak = (text: string, lang = 'en-US') => {
    if (onSpeak) {
      onSpeak(text, lang);
    } else if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(key);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* HEADER BANNER */}
      <div className="rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-teal-950/80 border-2 border-emerald-500/40 p-6 shadow-xl space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/50 text-xs px-3 py-1 font-mono uppercase font-bold">
              <Languages className="w-3.5 h-3.5 mr-1.5 inline" /> Emergent Bilingual & EL Suite
            </Badge>
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/40 text-xs">
              TELPAS & ELPS 74.4c Aligned
            </Badge>
          </div>
          <span className="text-xs text-slate-400 font-mono">Standard: {currentStandardCode}</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100">
          TELPAS 4-Tier Language Scaffolding & Bilingual Cognates Studio
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
          Empowers English Learners (ELs) across all four linguistic domains (Listening, Speaking, Reading, Writing). Provides graduated sentence frames, dual-language cognate maps, and instant audio pronunciation.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="bg-slate-950 border border-slate-800 p-1 rounded-xl">
          <TabsTrigger value="telpas-tiers" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-xs font-bold">
            <Layers className="w-3.5 h-3.5 mr-1.5" /> TELPAS 4-Tier Scaffolds
          </TabsTrigger>
          <TabsTrigger value="sentence-stem-builder" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-xs font-bold">
            <MessageSquare className="w-3.5 h-3.5 mr-1.5" /> Interactive Stem Builder
          </TabsTrigger>
          <TabsTrigger value="bilingual-cognates" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-xs font-bold">
            <Languages className="w-3.5 h-3.5 mr-1.5" /> Spanish Cognates & Babel Audio ({BILINGUAL_COGNATES_DATABASE.length})
          </TabsTrigger>
          <TabsTrigger value="elps-standards" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5 mr-1.5" /> ELPS 74.4c Crosswalk
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: TELPAS 4-TIER SCAFFOLDS */}
        <TabsContent value="telpas-tiers" className="space-y-5">
          
          {/* TIER SELECTOR BUTTONS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {(['Beginning', 'Intermediate', 'Advanced', 'Advanced High'] as TelpasProficiencyLevel[]).map((tier) => (
              <button
                key={tier}
                onClick={() => setActiveTier(tier)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  activeTier === tier 
                    ? 'bg-emerald-950/90 border-emerald-400 ring-2 ring-emerald-500/50 shadow-lg' 
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-bold text-xs ${activeTier === tier ? 'text-emerald-300' : 'text-slate-300'}`}>
                    {tier}
                  </span>
                  {activeTier === tier && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                </div>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                  {tier === 'Beginning' && 'Visual realia & single words'}
                  {tier === 'Intermediate' && 'Basic everyday syntax & frames'}
                  {tier === 'Advanced' && 'Grade-level discourse with scaffolds'}
                  {tier === 'Advanced High' && 'Native-comparable abstract fluency'}
                </p>
              </button>
            ))}
          </div>

          {/* 4-DOMAIN DISPLAY CARD */}
          <Card className="bg-slate-900/90 border-2 border-emerald-500/30 p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/40 text-xs font-bold uppercase px-3 py-1">
                Current Tier: TELPAS {activeTier} Level
              </Badge>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleSpeak(`TELPAS ${activeTier} scaffolding profile for standard ${currentStandardCode}`)}
                className="h-8 text-xs bg-slate-950 border-slate-700 text-emerald-300 hover:bg-slate-800"
              >
                <Volume2 className="w-3.5 h-3.5 mr-1" /> Read Profile
              </Button>
            </div>

            {/* 4 DOMAINS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              
              {/* LISTENING */}
              <div className="p-4 bg-slate-950 rounded-xl border border-blue-500/30 space-y-2">
                <span className="font-bold text-blue-400 uppercase flex items-center gap-1.5">
                  <Headphones className="w-4 h-4" /> 1. Listening Domain:
                </span>
                <p className="text-slate-200 leading-relaxed">{scaffolds.listening}</p>
              </div>

              {/* SPEAKING */}
              <div className="p-4 bg-slate-950 rounded-xl border border-emerald-500/30 space-y-2">
                <span className="font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4" /> 2. Speaking Domain:
                </span>
                <p className="text-slate-200 leading-relaxed">{scaffolds.speaking}</p>
              </div>

              {/* READING */}
              <div className="p-4 bg-slate-950 rounded-xl border border-purple-500/30 space-y-2">
                <span className="font-bold text-purple-400 uppercase flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" /> 3. Reading Domain:
                </span>
                <p className="text-slate-200 leading-relaxed">{scaffolds.reading}</p>
              </div>

              {/* WRITING */}
              <div className="p-4 bg-slate-950 rounded-xl border border-amber-500/30 space-y-2">
                <span className="font-bold text-amber-400 uppercase flex items-center gap-1.5">
                  <PenTool className="w-4 h-4" /> 4. Writing Domain:
                </span>
                <p className="text-slate-200 leading-relaxed">{scaffolds.writing}</p>
              </div>

            </div>

            {/* TIERED SENTENCE STEMS */}
            <div className="p-4 bg-slate-950 rounded-xl border border-emerald-500/40 space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                💬 Recommended Sentence Stems ({activeTier}):
              </span>
              <div className="space-y-2">
                {scaffolds.sentenceStems.map((stem, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
                    <span className="font-mono text-slate-100 font-semibold">&ldquo;{stem}&rdquo;</span>
                    <div className="flex items-center gap-1">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleSpeak(stem.replace(/_____/g, "blank"))}
                        className="h-7 w-7 text-cyan-400 hover:bg-slate-800"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleCopy(stem, `stem-${i}`)}
                        className="h-7 w-7 text-slate-300 hover:bg-slate-800"
                      >
                        {copiedText === `stem-${i}` ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GRAPHIC ORGANIZER TIP */}
            <div className="p-3.5 bg-emerald-950/40 rounded-xl border border-emerald-500/30 text-xs flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-slate-300"><strong className="text-emerald-300">Graphic Organizer Strategy:</strong> {scaffolds.graphicOrganizerTip}</span>
            </div>

          </Card>
        </TabsContent>

        {/* TAB 2: INTERACTIVE SENTENCE STEM BUILDER */}
        <TabsContent value="sentence-stem-builder">
          <Card className="bg-slate-900/90 border-2 border-emerald-500/30 p-6 space-y-6">
            <CardHeader className="p-0 space-y-1">
              <CardTitle className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-400" /> Interactive Academic Discourse Stem Builder
              </CardTitle>
              <CardDescription className="text-slate-300 text-xs">
                Select a foundational frame, insert academic vocabulary or quantities, and speak aloud with Babel Audio.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">Select Template Frame:</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    "I know this is addition because _____ items join the basket.",
                    "First there were _____ apples, then _____ were added, so the total is _____.",
                    "My equation is _____ + _____ = _____ because _____.",
                    "The model shows that joining _____ and _____ results in _____."
                  ].map((stem, i) => (
                    <button
                      key={i}
                      onClick={() => { setSelectedStem(stem); setCustomStemFill(stem); }}
                      className={`p-3 rounded-xl border text-xs text-left transition-all ${
                        selectedStem === stem 
                          ? 'bg-emerald-950 border-emerald-400 text-slate-100 shadow-md' 
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {stem}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-emerald-300">Customize / Fill In the Blanks:</label>
                <Input
                  value={customStemFill}
                  onChange={(e) => setCustomStemFill(e.target.value)}
                  className="bg-slate-950 border-slate-700 text-xs font-sans text-slate-100"
                  placeholder="First there were 8 apples, then 7 were added, so the total is 15."
                />
              </div>

              {/* LIVE AUDIO TALK BAR */}
              <div className="p-4 rounded-xl bg-slate-950 border-2 border-emerald-500/40 flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">🗣️ Student Speech Output:</span>
                  <p className="text-sm font-bold text-slate-100">{customStemFill || "Select a stem above to begin..."}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    disabled={!customStemFill}
                    onClick={() => handleSpeak(customStemFill)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-lg"
                  >
                    <Volume2 className="w-4 h-4 mr-1.5" /> Speak Aloud
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* TAB 3: SPANISH COGNATES & BABEL AUDIO */}
        <TabsContent value="bilingual-cognates">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BILINGUAL_COGNATES_DATABASE.map((cog, i) => (
              <Card key={i} className={`p-5 rounded-2xl border-2 transition-all space-y-3 ${
                cog.isTrueCognate 
                  ? 'bg-slate-900/90 border-teal-500/30 hover:border-teal-500/60' 
                  : 'bg-red-950/30 border-red-500/50 hover:border-red-500/80'
              }`}>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-slate-100">{cog.englishWord}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                    <span className="text-base font-bold text-teal-300">{cog.spanishWord}</span>
                  </div>
                  <Badge className={`text-[10px] ${cog.isTrueCognate ? 'bg-teal-500/20 text-teal-300' : 'bg-red-500/20 text-red-300'}`}>
                    {cog.isTrueCognate ? 'True Cognate' : 'False Cognate Trap'}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400">
                  <div>EN: <span className="text-slate-200">{cog.englishPhonetic}</span></div>
                  <div>ES: <span className="text-teal-200">{cog.spanishPhonetic}</span></div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">{cog.meaningExplanation}</p>

                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 italic">
                  &ldquo;{cog.exampleSentence}&rdquo;
                </div>

                <div className="flex items-center justify-end gap-2 pt-1">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleSpeak(cog.englishWord, 'en-US')}
                    className="h-7 text-xs bg-slate-950 border-slate-700 text-slate-200 hover:bg-slate-800"
                  >
                    <Volume2 className="w-3 h-3 mr-1 text-cyan-400" /> English TTS
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleSpeak(cog.spanishWord, 'es-ES')}
                    className="h-7 text-xs bg-slate-950 border-slate-700 text-teal-300 hover:bg-slate-800"
                  >
                    <Volume2 className="w-3 h-3 mr-1 text-teal-400" /> Spanish TTS
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* TAB 4: ELPS CROSSWALK */}
        <TabsContent value="elps-standards">
          <Card className="bg-slate-900/90 border-2 border-emerald-500/30 p-6 space-y-4">
            <CardHeader className="p-0 space-y-1">
              <CardTitle className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-400" /> ELPS 74.4c Cross-Curricular Student Expectations
              </CardTitle>
              <CardDescription className="text-slate-300 text-xs">
                Integrated Texas English Language Proficiency Standards for standard {currentStandardCode}.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 space-y-3 text-xs">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="font-bold text-emerald-300">ELPS 1.E (Learning Strategies):</span>
                <p className="text-slate-300">Internalize new basic and academic language by using and reusing newly acquired vocabulary in meaningful contextual tasks.</p>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="font-bold text-emerald-300">ELPS 2.I (Listening Comprehension):</span>
                <p className="text-slate-300">Demonstrate listening comprehension of increasingly complex spoken English by responding through drawing, gesturing, or oral justification.</p>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="font-bold text-emerald-300">ELPS 3.D (Speaking Academic Discourse):</span>
                <p className="text-slate-300">Speak using grade-level content area vocabulary in context to build and reinforce mathematics concepts.</p>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="font-bold text-emerald-300">ELPS 4.F (Reading Visual & Linguistic Support):</span>
                <p className="text-slate-300">Use visual and linguistic support to read and comprehend unfamiliar story problems with adapted text structures.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>

    </div>
  );
};
