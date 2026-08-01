import React, { useState } from 'react';
import { Share2, Plus, Download, Star, MapPin, CheckCircle2, FileText, Sparkles } from 'lucide-react';

interface SharedResource {
  id: string;
  title: string;
  author: string;
  location: string;
  state: string;
  grade: string;
  subject: string;
  standardCode: string;
  category: 'Worksheet' | 'Anchor Chart' | 'Strategy Sheet' | 'Game';
  description: string;
  downloads: number;
  rating: number;
}

const INITIAL_SHARED: SharedResource[] = [
  {
    id: "sr-1",
    title: "1st Grade Bilingual TEKS 1.3B Ten-Frame Mat & Story Problem Cards",
    author: "Maria Santos, M.Ed.",
    location: "Houston ISD, TX",
    state: "TX",
    grade: "1st Grade",
    subject: "Mathematics",
    standardCode: "TEKS 1.3B",
    category: "Anchor Chart",
    description: "Dual language (English/Spanish) visual anchor chart mat with dry-erase ten frames. Used in my 1st grade classroom in Houston with 98% mastery success on Friday post-tests!",
    downloads: 1420,
    rating: 4.9
  },
  {
    id: "sr-2",
    title: "Regrouping Across Zeros Step-by-Step Graphic Organizer (TEKS 3.4A)",
    author: "David Miller",
    location: "Austin ISD, TX",
    state: "TX",
    grade: "3rd Grade",
    subject: "Mathematics",
    standardCode: "TEKS 3.4A",
    category: "Strategy Sheet",
    description: "Eliminates confusion when subtracting from 500 or 1,000. Includes color-coded place value arrows and self-correction steps.",
    downloads: 980,
    rating: 5.0
  },
  {
    id: "sr-3",
    title: "Fable Moral Compass & Character Choice Cards (TEKS 1.5A)",
    author: "Jessica Reed",
    location: "Dallas ISD, TX",
    state: "TX",
    grade: "1st Grade",
    subject: "Reading/ELA",
    standardCode: "TEKS 1.5A",
    category: "Game",
    description: "Interactive card sorting game for small group reading circles to help students separate plot events from central moral lessons.",
    downloads: 730,
    rating: 4.8
  }
];

export const TeacherExchange: React.FC = () => {
  const [resources, setResources] = useState<SharedResource[]>(INITIAL_SHARED);
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Form State
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [standardCode, setStandardCode] = useState('TEKS 1.3B');
  const [category, setCategory] = useState<'Worksheet' | 'Anchor Chart' | 'Strategy Sheet' | 'Game'>('Worksheet');
  const [description, setDescription] = useState('');

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;

    const newRes: SharedResource = {
      id: `sr-${Date.now()}`,
      title,
      author,
      location: location || 'USA Educator',
      state: 'TX',
      grade: '1st Grade',
      subject: 'Mathematics',
      standardCode,
      category,
      description,
      downloads: 1,
      rating: 5.0
    };

    setResources([newRes, ...resources]);
    setShowUploadModal(false);
    setTitle('');
    setAuthor('');
    setLocation('');
    setDescription('');
  };

  return (
    <div className="space-y-6">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-100">Sovereign Teacher Exchange</h2>
          <p className="text-slate-400 text-xs mt-0.5">Open, crowd-sourced teacher-to-teacher resource sharing with zero paywalls.</p>
        </div>

        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Share A Resource</span>
        </button>
      </div>

      {/* RESOURCE CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((res) => (
          <div
            key={res.id}
            className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-all rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-lg font-mono text-xs font-bold">
                  {res.standardCode}
                </span>
                <span className="px-2.5 py-0.5 border border-slate-700 text-slate-300 text-xs rounded-md font-medium">
                  {res.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-100 leading-snug">{res.title}</h3>

              <p className="text-slate-300 text-xs leading-relaxed">{res.description}</p>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{res.author} ({res.location})</span>
                </span>
                <span className="text-amber-400 font-bold flex items-center space-x-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{res.rating}</span>
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">{res.downloads} Educator Downloads</span>
              <button
                onClick={() => alert(`Downloading "${res.title}"... Free resource provided by EduPulse.`)}
                className="flex items-center space-x-1.5 px-3 py-1.5 bg-amber-950/40 hover:bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold rounded-xl transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Get Free Resource</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* UPLOAD MODAL */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-amber-500/40 rounded-3xl w-full max-w-lg p-6 shadow-2xl space-y-4">
            <h3 className="text-xl font-bold text-slate-100">Share A Sovereign Resource</h3>
            <p className="text-xs text-slate-400">Upload worksheets, anchor charts, or strategy guides to help teachers nationwide.</p>

            <form onSubmit={handlePublish} className="space-y-3 pt-2">
              <input
                type="text"
                placeholder="Resource Title (e.g., 1st Grade Farm Math Mat)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 text-xs rounded-xl text-slate-100 outline-none focus:border-amber-500"
              />

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Your Name (e.g., Jane Doe, M.Ed.)"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                  className="px-3.5 py-2 bg-slate-950 border border-slate-800 text-xs rounded-xl text-slate-100 outline-none focus:border-amber-500"
                />
                <input
                  type="text"
                  placeholder="District / City (e.g., Houston ISD)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="px-3.5 py-2 bg-slate-950 border border-slate-800 text-xs rounded-xl text-slate-100 outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Standard Code (e.g., TEKS 1.3B)"
                  value={standardCode}
                  onChange={(e) => setStandardCode(e.target.value)}
                  className="px-3.5 py-2 bg-slate-950 border border-slate-800 text-xs rounded-xl text-slate-100 outline-none focus:border-amber-500"
                />
                <select
                  value={category}
                  onChange={(e: any) => setCategory(e.target.value)}
                  className="px-3.5 py-2 bg-slate-950 border border-slate-800 text-xs rounded-xl text-slate-200 outline-none focus:border-amber-500"
                >
                  <option value="Worksheet">Worksheet</option>
                  <option value="Anchor Chart">Anchor Chart</option>
                  <option value="Strategy Sheet">Strategy Sheet</option>
                  <option value="Game">Game</option>
                </select>
              </div>

              <textarea
                placeholder="Description of how this resource helped your students..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 text-xs rounded-xl text-slate-100 outline-none focus:border-amber-500"
              />

              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="px-4 py-2 bg-slate-800 text-slate-300 text-xs rounded-xl hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-500 text-slate-950 font-bold text-xs rounded-xl hover:bg-amber-400 shadow-md"
                >
                  Publish Free Resource
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
