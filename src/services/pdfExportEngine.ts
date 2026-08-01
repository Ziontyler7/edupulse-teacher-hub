import { TexasTeksItem } from '../data/texasTeksData';

/**
 * PDF & Printable Document Renderer Service for EduPulse
 * 100% Client-side, zero-external dependency print-to-PDF engine.
 */

export function printTeacherCard(standard: TexasTeksItem): void {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popups to print/export PDF.');
    return;
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${standard.code} — Teacher Pedagogy Card (EduPulse)</title>
      <style>
        @page { size: letter; margin: 0.5in; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0f172a; line-height: 1.4; padding: 20px; }
        .header { border-bottom: 3px solid #f59e0b; padding-bottom: 12px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: flex-start; }
        .badge { background: #fef3c7; color: #b45309; border: 1px solid #fcd34d; font-weight: bold; padding: 3px 8px; border-radius: 4px; font-size: 12px; }
        .title { font-size: 20px; font-weight: 800; color: #0f172a; margin: 4px 0; }
        .subtitle { font-size: 13px; color: #475569; font-weight: 600; }
        .section { margin-bottom: 16px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; background: #fafafa; page-break-inside: avoid; }
        .section-title { font-size: 14px; font-weight: 700; color: #1e293b; text-transform: uppercase; border-bottom: 2px solid #cbd5e1; padding-bottom: 4px; margin-bottom: 8px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .box { background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px; }
        .box-header { font-weight: 700; font-size: 12px; color: #475569; margin-bottom: 4px; text-transform: uppercase; }
        ul { margin: 0; padding-left: 18px; font-size: 12px; }
        li { margin-bottom: 4px; }
        .footer { margin-top: 24px; text-align: center; font-size: 10px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 8px; }
      </style>
    </head>
    <body>

      <!-- HEADER -->
      <div class="header">
        <div>
          <span class="badge">${standard.stateSystem} • ${standard.grade} • ${standard.subject}</span>
          <h1 class="title">${standard.code}: ${standard.title}</h1>
          <div class="subtitle">${standard.strand}</div>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: 800; color: #d97706; font-size: 14px;">EduPulse Texas TEA Edition</div>
          <div style="font-size: 11px; color: #64748b;">Sovereign Educator Intelligence Card</div>
        </div>
      </div>

      <!-- OBJECTIVE & LEAD IN -->
      <div class="section">
        <div class="section-title">🎯 SWBAT Measurable Objective & Lead-In</div>
        <p style="font-weight: 700; color: #0284c7; margin-bottom: 4px;">SWBAT: ${standard.swbatObjective}</p>
        <p style="font-size: 12px; font-style: italic; color: #334155;">"${standard.teksOfficialLeadIn} ${standard.description}"</p>
      </div>

      <!-- NES 5-STAGE LESSON ENGINE -->
      <div class="section">
        <div class="section-title">⚡ NES 5-Stage Exemplar Lesson Engine</div>
        <div class="grid">
          <div class="box">
            <div class="box-header">1. Do Now Opener (5 Mins)</div>
            <div style="font-size: 12px;">${standard.nesLessonEngine.doNowOpener5Min}</div>
          </div>
          <div class="box">
            <div class="box-header">2. Direct Instruction (45 Mins)</div>
            <div style="font-size: 12px;">${standard.nesLessonEngine.directInstruction45Min}</div>
          </div>
          <div class="box">
            <div class="box-header">3. Demonstration of Learning (10 Mins)</div>
            <div style="font-size: 12px; font-weight: 600; color: #059669;">DOL Question: ${standard.nesLessonEngine.demonstrationOfLearningDol10Min.dolQuestion}</div>
            <div style="font-size: 11px; color: #047857; margin-top: 2px;">Mastery Threshold: ${standard.nesLessonEngine.demonstrationOfLearningDol10Min.dolMasteryThreshold}</div>
          </div>
          <div class="box">
            <div class="box-header">4. LSAE Small Group Reteach & Team Center (35 Mins)</div>
            <div style="font-size: 11px;"><strong>Group S1 (Reteach):</strong> ${standard.nesLessonEngine.lsaeDifferentiated35Min.groupL_S1_Reteach}</div>
            <div style="font-size: 11px; margin-top: 4px;"><strong>Group S2 (Team Center):</strong> ${standard.nesLessonEngine.lsaeDifferentiated35Min.groupS2_A_TeamCenter}</div>
          </div>
        </div>
      </div>

      <!-- DOK QUESTIONS & SCAFFOLDS -->
      <div class="section">
        <div class="section-title">🧠 Depth of Knowledge (DOK 1-4) & TELPAS Scaffolds</div>
        <div class="grid">
          <div class="box">
            <div class="box-header">DOK Level Questions</div>
            <ul>
              <li><strong>DOK 1:</strong> ${standard.dokQuestions.dok1Recall}</li>
              <li><strong>DOK 2:</strong> ${standard.dokQuestions.dok2SkillConcept}</li>
              <li><strong>DOK 3:</strong> ${standard.dokQuestions.dok3StrategicThinking}</li>
              <li><strong>DOK 4:</strong> ${standard.dokQuestions.dok4ExtendedThinking}</li>
            </ul>
          </div>
          <div class="box">
            <div class="box-header">TELPAS Language Sentence Stems</div>
            <ul>
              <li><strong>Beginner:</strong> "${standard.telpasScaffolds.beginnerStem}"</li>
              <li><strong>Intermediate:</strong> "${standard.telpasScaffolds.intermediateStem}"</li>
              <li><strong>Advanced:</strong> "${standard.telpasScaffolds.advancedStem}"</li>
              <li><strong>Advanced High:</strong> "${standard.telpasScaffolds.advancedHighStem}"</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- SPED ACCOMMODATIONS & STAAR TYPE -->
      <div class="section">
        <div class="section-title">♿ SPED Accommodations & STAAR 2.0 Question Format</div>
        <div class="grid">
          <div class="box">
            <div class="box-header">SPED & IEP Supports</div>
            <div style="font-size: 11px; margin-bottom: 4px;"><strong>Supports:</strong> ${standard.spedAccommodations.designatedSupports.join(', ')}</div>
            <div style="font-size: 11px; margin-bottom: 4px;"><strong>IEP Goal:</strong> ${standard.spedAccommodations.measurableIepGoal}</div>
            <div style="font-size: 11px;"><strong>Assistive Tech:</strong> ${standard.spedAccommodations.assistiveTechRecommendation}</div>
          </div>
          <div class="box">
            <div class="box-header">STAAR 2.0 Format</div>
            <div style="font-size: 11px; margin-bottom: 2px;"><strong>Category:</strong> ${standard.staarReportingCategory}</div>
            <div style="font-size: 11px; margin-bottom: 2px;"><strong>STAAR Designation:</strong> ${standard.staarType}</div>
            <div style="font-size: 11px;"><strong>New Question Type:</strong> ${standard.staarNewQuestionType}</div>
          </div>
        </div>
      </div>

      <!-- FOOTER -->
      <div class="footer">
        EduPulse — Sovereign Educator Intelligence Platform • TEA State Standard ${standard.code} • Printed Page
      </div>

      <script>
        window.onload = function() {
          window.print();
        };
      </script>
    </body>
    </html>
  `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();
}

export function printStudentWorksheet(standard: TexasTeksItem): void {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popups to print student worksheets.');
    return;
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${standard.code} — Student DOL Quiz Worksheet</title>
      <style>
        @page { size: letter; margin: 0.5in; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0f172a; line-height: 1.5; padding: 24px; }
        .header-table { width: 100%; border-bottom: 2px solid #0f172a; padding-bottom: 12px; margin-bottom: 20px; }
        .header-table td { padding: 4px; font-size: 13px; font-weight: 600; }
        .quiz-title { text-align: center; font-size: 18px; font-weight: 800; margin-bottom: 4px; text-transform: uppercase; }
        .quiz-subtitle { text-align: center; font-size: 12px; color: #475569; margin-bottom: 24px; }
        .question-box { border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin-bottom: 20px; background: #ffffff; page-break-inside: avoid; }
        .question-num { font-weight: 800; font-size: 14px; color: #1e293b; margin-bottom: 8px; }
        .prompt { font-size: 13px; color: #334155; margin-bottom: 12px; }
        .choices { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .choice-item { border: 1px solid #e2e8f0; padding: 8px 12px; border-radius: 6px; font-size: 12px; font-weight: 500; }
        .written-area { border: 1px dashed #94a3b8; height: 80px; border-radius: 6px; margin-top: 12px; padding: 8px; font-size: 11px; color: #94a3b8; }
        .footer { margin-top: 30px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 8px; }
      </style>
    </head>
    <body>

      <!-- STUDENT HEADER -->
      <table class="header-table">
        <tr>
          <td style="width: 50%;">Student Name: ___________________________</td>
          <td style="width: 25%;">Date: ____________</td>
          <td style="width: 25%;">Score: _____ / 100</td>
        </tr>
        <tr>
          <td>Teacher / Class: ________________________</td>
          <td>Period: _________</td>
          <td>Target: 85%+ Mastery</td>
        </tr>
      </table>

      <!-- QUIZ TITLE -->
      <div class="quiz-title">Demonstration of Learning (DOL) Mini-Quiz</div>
      <div class="quiz-subtitle">State Standard: ${standard.code} — ${standard.title} (${standard.grade})</div>

      <!-- QUESTION 1: STAAR 2.0 QUESTION -->
      <div class="question-box">
        <div class="question-num">Question 1 (${standard.staarNewQuestionType})</div>
        <div class="prompt">${standard.exemplarProblem.questionPrompt}</div>
        <div class="choices">
          ${(standard.exemplarProblem.answerChoices || [
            'A) Choice A',
            'B) Choice B',
            'C) Choice C',
            'D) Choice D'
          ]).map(choice => `<div class="choice-item">${choice}</div>`).join('')}
        </div>
      </div>

      <!-- QUESTION 2: DOK 2 CONCEPT -->
      <div class="question-box">
        <div class="question-num">Question 2 (Skill Concept Application)</div>
        <div class="prompt">${standard.dokQuestions.dok2SkillConcept}</div>
        <div class="written-area">Write your answer and show your work below:</div>
      </div>

      <!-- QUESTION 3: DOK 3 STRATEGIC EXPLANATION -->
      <div class="question-box">
        <div class="question-num">Question 3 (Strategic Reasoning & Justification)</div>
        <div class="prompt">${standard.dokQuestions.dok3StrategicThinking}</div>
        <div class="written-area">Explain your reasoning using complete sentences:</div>
      </div>

      <!-- FOOTER -->
      <div class="footer">
        EduPulse Student Mastery Assessment • ${standard.code} • Printable DOL Worksheet
      </div>

      <script>
        window.onload = function() {
          window.print();
        };
      </script>
    </body>
    </html>
  `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();
}
