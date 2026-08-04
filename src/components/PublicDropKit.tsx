import React, { useState } from 'react';
import { Linkedin, Github, Copy, Check, Sparkles, Heart } from 'lucide-react';

export const PublicDropKit: React.FC = () => {
  const [copiedLinkedIn, setCopiedLinkedIn] = useState(false);
  const [copiedGithub, setCopiedGithub] = useState(false);

  const linkedinText = `Before I devoted my life to building the future of human and AI collaboration, I was a classroom teacher.

Preparation, freedom of information, and cutting-edge intelligence in education AND scientific research should NEVER be locked behind paywalls.

Tonight, we are officially dropping a dual open-source release:

1️⃣ EduPulse V2 — Sovereign Educator Intelligence & Student Mastery Hub
✨ Nationwide Multi-State Expansion across Texas TEKS, Common Core CCSS, Florida B.E.S.T., Virginia SOL, Georgia GSE, and New York NGLS.
✨ Link AI Tier 1/2/3 Small-Group Reteach Engine & 1-click printable intervention plans.
✨ STAAR 2.0 & State Interactive Exam Simulator with auto-grading and misconception rationales.

2️⃣ Cancer Cell Science Oracle & Oncology Target Discovery Console
🔬 3D Translucent WebGL Cell Visualizer featuring real-time oncogenic membrane deformation in Cancer Driver State vs Normal Cell State.
🔬 AlphaFold 3D Structural Confidence (pLDDT) & AlphaGenome Pathogenicity Analysis for TP53, EGFR, BRAF, and KRAS.
🔬 ChEMBL / PubChem Small-Molecule Target Validation cards with 12 nM binding affinity IC50 curves and live pathway intercept simulation.

Both platforms are 100% free and open-source for humanity.

🔗 EduPulse Hub: https://github.com/Ziontyler7/edupulse-teacher-hub
🔗 Cancer Cell Oracle: https://github.com/Ziontyler7/cancer-cell-oracle
#Education #Oncology #AlphaFold #OpenSource #EdTech #AIForGood #EduPulse`;

  const githubReadmeText = `# EduPulse — Sovereign Educator Intelligence & Student Mastery Hub

> "The teacher is the surgeon and master of content. Even if a teacher is in their first year or in a high-deficiency district, students must never suffer. Access to preparation, state-aligned standards, data-driven diagnostic feedback, and open teacher-to-teacher resource sharing is a foundational right." — *Michael Tyler (Former Educator & Founder)*

EduPulse is an open-source, data-driven educational operating layer built for American educators, students, and AI teaching nodes.

## 🌟 Key Features

1. **State Standards Mapping Engine**: Complete coverage across Texas (TEKS), Common Core (CCSS), Florida (B.E.S.T.), Virginia (SOL), New York (NGLS), and Georgia (GSE) across K–12 grades and core subjects.
2. **Dual-Perspective Strategy Sheets**:
   - **Teacher View**: Pedagogical scaffolding, common student misconceptions, diagnostic probing questions, and targeted intervention tips.
   - **Student View**: Kid-friendly visual anchor charts, step-by-step resolution paths, and self-check checklists.
3. **Printable Worksheets & Pre/Post-Test Hub**: High-resolution, 1-click printable classroom worksheets, 5-question pre-tests, and 5-question post-tests.
4. **Real-Time Deficit Diagnostic Dashboard**: Automatic Pre/Post-Test score matrix tracking, growth delta calculation, and Link AI Tier 1/2/3 student clustering.
5. **Adaptive 5-Day Weekly Schedule Planner**: Dynamic lesson calendar aligned to state standards and real-time class deficit data.
6. **Open Sovereign Teacher Exchange**: Crowd-sourced, 100% free teacher-to-teacher resource sharing with zero paywalls.

## 🚀 Quick Start (Local Development)

\`\`\`bash
# Clone the repository
git clone https://github.com/NeoinTheMatrix/edupulse-teacher-hub.git

# Install dependencies
npm install

# Start local dev server
npm run dev
\`\`\`

## 📄 License
MIT License. Free for all educators, schools, students, and AI research nodes.`;

  const copyToClipboard = (text: string, type: 'linkedin' | 'github') => {
    navigator.clipboard.writeText(text);
    if (type === 'linkedin') {
      setCopiedLinkedIn(true);
      setTimeout(() => setCopiedLinkedIn(false), 2000);
    } else {
      setCopiedGithub(true);
      setTimeout(() => setCopiedGithub(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold text-slate-100">Public Release Kit (LinkedIn & GitHub)</h2>
        <p className="text-slate-400 text-xs mt-0.5">Ready-to-copy public release copy for Michael's drop to the world.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* LINKEDIN POST BOX */}
        <div className="bg-slate-900/90 border border-purple-500/30 rounded-2xl p-6 shadow-xl space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center space-x-2 text-purple-300 font-bold text-sm">
                <Linkedin className="w-5 h-5 text-purple-400" />
                <span>LinkedIn Announcement Drop</span>
              </span>

              <button
                onClick={() => copyToClipboard(linkedinText, 'linkedin')}
                className="flex items-center space-x-1.5 px-3 py-1.5 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/40 text-purple-300 text-xs font-bold rounded-lg transition-colors"
              >
                {copiedLinkedIn ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLinkedIn ? 'Copied!' : 'Copy LinkedIn Post'}</span>
              </button>
            </div>

            <pre className="p-4 bg-slate-950 text-xs text-slate-200 font-mono rounded-xl border border-slate-800 whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto">
              {linkedinText}
            </pre>
          </div>
        </div>

        {/* GITHUB README BOX */}
        <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 shadow-xl space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center space-x-2 text-amber-300 font-bold text-sm">
                <Github className="w-5 h-5 text-amber-400" />
                <span>GitHub Repository README.md</span>
              </span>

              <button
                onClick={() => copyToClipboard(githubReadmeText, 'github')}
                className="flex items-center space-x-1.5 px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-bold rounded-lg transition-colors"
              >
                {copiedGithub ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedGithub ? 'Copied!' : 'Copy README.md'}</span>
              </button>
            </div>

            <pre className="p-4 bg-slate-950 text-xs text-slate-200 font-mono rounded-xl border border-slate-800 whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto">
              {githubReadmeText}
            </pre>
          </div>
        </div>

      </div>

    </div>
  );
};
