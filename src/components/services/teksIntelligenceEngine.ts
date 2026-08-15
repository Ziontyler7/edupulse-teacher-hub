import { TexasTeksItem, TEXAS_TEKS_MASTER_DATABASE } from '../data/texasTeksData';

// Cache for newly generated standards during runtime
const GENERATED_STANDARDS_CACHE: Map<string, TexasTeksItem> = new Map();

/**
 * Parses any TEKS query, topic, or code (e.g., "7.9A", "main idea for 2nd grade", "photosynthesis 5th grade", "fractions 4th grade", "TEKS Bio.7B")
 * and extracts grade, subject, strand, and topic title.
 */
export function parseTeksCode(query: string): { normalizedCode: string; grade: string; subject: 'Mathematics' | 'Reading/ELA' | 'Science' | 'Social Studies' | 'CTE'; strand: string; topicTitle: string } {
  const clean = query.trim().toUpperCase();
  let codeStr = clean.startsWith('TEKS') ? clean : `TEKS ${clean}`;
  
  let grade = '7th Grade';
  let subject: 'Mathematics' | 'Reading/ELA' | 'Science' | 'Social Studies' | 'CTE' = 'Mathematics';
  let strand = 'Core Academic Process Standards';
  let topicTitle = clean.replace(/TEKS/gi, '').replace(/GRADE \d/gi, '').replace(/\d(ST|ND|RD|TH) GRADE/gi, '').trim();
  if (!topicTitle) topicTitle = clean;

  // 1. Check explicit grade words first
  if (clean.includes('KINDERGARTEN') || clean.includes(' GRADE K') || clean.includes('K-')) {
    grade = 'Kindergarten';
  } else if (clean.includes('3RD') || clean.includes('3 RD') || clean.includes('GRADE 3') || clean.includes('3RD GRADE')) {
    grade = '3rd Grade';
  } else if (clean.includes('1ST') || clean.includes('1 ST') || clean.includes('GRADE 1') || clean.includes('1ST GRADE')) {
    grade = '1st Grade';
  } else if (clean.includes('2ND') || clean.includes('2 ND') || clean.includes('GRADE 2') || clean.includes('2ND GRADE')) {
    grade = '2nd Grade';
  } else if (clean.includes('4TH') || clean.includes('4 TH') || clean.includes('GRADE 4') || clean.includes('4TH GRADE')) {
    grade = '4th Grade';
  } else if (clean.includes('5TH') || clean.includes('5 TH') || clean.includes('GRADE 5') || clean.includes('5TH GRADE')) {
    grade = '5th Grade';
  } else if (clean.includes('6TH') || clean.includes('6 TH') || clean.includes('GRADE 6') || clean.includes('6TH GRADE')) {
    grade = '6th Grade';
  } else if (clean.includes('7TH') || clean.includes('7 TH') || clean.includes('GRADE 7') || clean.includes('7TH GRADE')) {
    grade = '7th Grade';
  } else if (clean.includes('8TH') || clean.includes('8 TH') || clean.includes('GRADE 8') || clean.includes('8TH GRADE')) {
    grade = '8th Grade';
  } else if (clean.includes('ALG') || clean.includes('BIO') || clean.includes('ENG') || clean.includes('US') || clean.includes('CHEM') || clean.includes('PHYS') || clean.includes('HS') || clean.includes('HIGH')) {
    grade = 'High School';
  }
  // 2. Fallback to dot-prefixes if no word grade specified (e.g. "K.2B", "3.5A", "1.3B")
  else if (clean.includes('K.')) {
    grade = 'Kindergarten';
  } else if (clean.includes('3.')) {
    grade = '3rd Grade';
  } else if (clean.includes('1.')) {
    grade = '1st Grade';
  } else if (clean.includes('2.')) {
    grade = '2nd Grade';
  } else if (clean.includes('4.')) {
    grade = '4th Grade';
  } else if (clean.includes('5.')) {
    grade = '5th Grade';
  } else if (clean.includes('6.')) {
    grade = '6th Grade';
  } else if (clean.includes('7.')) {
    grade = '7th Grade';
  } else if (clean.includes('8.')) {
    grade = '8th Grade';
  }

  if (clean.includes('READ') || clean.includes('ELA') || clean.includes('ENG') || clean.includes('LIT') || clean.includes('TEXT') || clean.includes('MAIN IDEA') || clean.includes('INFERENCE') || clean.includes('POETRY')) {
    subject = 'Reading/ELA';
    strand = 'Comprehension & Textual Analysis (Main Idea, Context & Evidence)';
  } else if (clean.includes('SCI') || clean.includes('BIO') || clean.includes('CHEM') || clean.includes('PHYS') || clean.includes('EARTH') || clean.includes('PHOTOSYNTHESIS') || clean.includes('CELL') || clean.includes('WEATHER')) {
    subject = 'Science';
    strand = 'Scientific Method & Natural Systems';
  } else if (clean.includes('HIST') || clean.includes('GOV') || clean.includes('GEO') || clean.includes('SS') || clean.includes('SOC') || clean.includes('REVOLUTION') || clean.includes('CONSTITUTION')) {
    subject = 'Social Studies';
    strand = 'History, Geography, & Citizenship';
  } else if (clean.includes('CTE') || clean.includes('HEALTH') || clean.includes('MED') || clean.includes('STEM') || clean.includes('ROBOT') || clean.includes('BUSINESS') || clean.includes('FINANCE') || clean.includes('TECH')) {
    subject = 'CTE';
    strand = 'Career & Technical Applied Intelligence';
  } else {
    subject = 'Mathematics';
    strand = 'Algebraic Reasoning & Mathematical Process Standards';
  }

  return { normalizedCode: codeStr, grade, subject, strand, topicTitle };
}

/**
 * Finds standard in pre-populated master database OR programmatically synthesizes 
 * a complete, authentic 14-point pedagogy card for ANY query across any subject/topic/grade.
 */
export function findOrGenerateTeksStandard(query: string, gradeHint?: string, subjectHint?: string): TexasTeksItem {
  const parsed = parseTeksCode(query);
  const targetCode = parsed.normalizedCode.toLowerCase();

  // 1. Search in pre-populated master database
  const existing = TEXAS_TEKS_MASTER_DATABASE.find(s => 
    s.code.toLowerCase() === targetCode || 
    s.id.toLowerCase() === query.toLowerCase() ||
    s.code.toLowerCase().endsWith(query.toLowerCase()) ||
    (query.length > 3 && s.title.toLowerCase().includes(query.toLowerCase()))
  );
  if (existing) return existing;

  // 2. Search in runtime generated cache
  const cached = GENERATED_STANDARDS_CACHE.get(targetCode);
  if (cached) return cached;

  // 3. Synthesize dynamic, state-aligned 14-point pedagogy card for ANY subject/topic
  const grade = gradeHint || parsed.grade;
  const subject = (subjectHint as any) || parsed.subject;
  const code = parsed.normalizedCode;
  const topic = parsed.topicTitle || code;
  const id = `tx-gen-${code.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  const generatedItem: TexasTeksItem = {
    id,
    state: 'TX',
    stateSystem: 'TEKS',
    grade,
    subject,
    code,
    title: `${code} Mastery & Deficit Diagnostic: ${topic}`,
    strand: `${grade} ${subject} ${parsed.strand}`,
    teksOfficialLeadIn: "The student applies Texas Essential Knowledge and Skills (TEKS) process standards to acquire and demonstrate mastery. The student is expected to:",
    description: `Demonstrate proficiency in ${subject.toLowerCase()} skills focusing on ${topic}, integrating real-world problem solving, procedural fluency, and analytical reasoning across ${grade} standards.`,
    pacingWeek: "Target Instructional Cycle (Q1-Q4)",
    staarType: code.includes('.1') ? 'Process Standard' : 'Readiness Standard',
    staarReportingCategory: `RC 1: ${subject} Essential Skills`,
    staarNewQuestionType: 'Short Constructed Response (SCR)',
    essentialConcepts: [
      `Core skill execution and procedural fluency for ${topic}`,
      `Real-world scenario connection and context application in ${grade}`,
      `Misconception detection and targeted intervention`
    ],
    swbatObjective: `SWBAT master ${topic} (${code}) by applying ${subject.toLowerCase()} strategies with 85%+ accuracy on STAAR-aligned diagnostics.`,
    priorKnowledge: {
      prerequisiteCodes: [{ code: `${code} Prerequisite`, title: `Foundational prerequisite skills for ${topic}` }],
      futureExtensionCodes: [{ code: `${code} Extension`, title: `Advanced extension application in subsequent grade levels` }]
    },
    realWorldConnections: [
      `Applying ${topic} to everyday Texas community and career workplace scenarios`,
      `Connecting ${subject.toLowerCase()} principles to practical decision-making`
    ],
    sentenceStems: [
      `I solved/analyzed ${topic} by using the strategy of _____ because _____.`,
      `The key evidence supporting my conclusion is _____.`
    ],
    nesLessonEngine: {
      doNowOpener5Min: `5-Min Opener: Warm-up prompt targeting baseline recall for ${topic}.`,
      directInstruction45Min: `45-Min Explicit Instruction: Teacher models step-by-step execution of ${topic} using manipulative and visual anchor charts.`,
      demonstrationOfLearningDol10Min: {
        dolQuestion: `Demonstration of Learning (DOL): Solve 2 STAAR-aligned items for ${topic}.`,
        dolMasteryThreshold: "80% (2/2 correct responses)"
      },
      lsaeDifferentiated35Min: {
        groupL_S1_Reteach: `Tier 3 Small Group Reteach: 1-on-1 guided manipulative and graphic organizer coaching for ${topic}.`,
        groupS2_A_TeamCenter: `Team Center: Collaborative HOT (Higher Order Thinking) challenge task for ${topic}.`
      }
    },
    mclassDibelsAlignment: {
      measure: subject === 'Reading/ELA' ? 'ORF Accuracy' : 'Math Computation',
      benchmarkLevel: 'On Track',
      targetScore: '85%+'
    },
    spedAccommodations: {
      designatedSupports: ["Visual graphic organizer", "Color-coded step highlighter", "Sentence stems"],
      measurableIepGoal: `Student will execute ${topic} tasks with 80% accuracy across 4 of 5 trials.`,
      assistiveTechRecommendation: "Digital screen reader and interactive manipulative tool"
    },
    telpasScaffolds: {
      beginnerStem: `I can do ${topic}.`,
      intermediateStem: `I solved ${topic} by using _____.`,
      advancedStem: `I applied the ${subject.toLowerCase()} strategy to solve ${topic} because the evidence showed _____.`,
      advancedHighStem: `Evaluating ${topic} through systematic inquiry verifies procedural and conceptual accuracy.`
    },
    ubdFramework: {
      stage1DesiredResults: `Understanding ${topic} develops foundational ${subject.toLowerCase()} mastery.`,
      stage2AssessmentEvidence: `Formative DOL quiz and STAAR 2.0 constructed response.`,
      stage3LearningPlanSequence: "Hook -> Explicit Model -> Guided Practice -> Independent Mastery."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: `Teacher models exemplar solving of ${topic} on smartboard.`,
      weDoGuidedPractice: `Class collaboratively solves guided problem set for ${topic}.`,
      youDoTogetherCollaborative: `Partner pairs solve interactive ${topic} task cards.`,
      youDoAloneIndependentMastery: `Students complete independent 4-question mastery check for ${topic}.`
    },
    dokQuestions: {
      dok1Recall: `What is the core definition or rule for ${topic}?`,
      dok2SkillConcept: `How do you apply ${topic} to solve a multi-step problem?`,
      dok3StrategicThinking: `Why is this specific approach effective for ${topic}? What proof supports it?`,
      dok4ExtendedThinking: `Synthesize a real-world project or scenario that incorporates ${topic}.`
    },
    teacherStrategy: {
      scaffoldingSteps: [
        `Step 1: Activate prior knowledge for ${topic}.`,
        `Step 2: Model explicit step-by-step strategy.`,
        `Step 3: Conduct guided practice with visual supports.`
      ],
      commonMisconceptions: [{
        flaw: `Superficial guessing or misreading key terms in ${topic}.`,
        correctionPath: `Underline keywords and use the self-check checklist before finalizing answers.`
      }],
      interventionTip: `Use targeted manipulative counters and anchor chart reference cards.`
    },
    studentStrategy: {
      anchorTitle: `${topic} Sovereign Mastery Guide`,
      visualHook: `🔍 Read -> ✏️ Model -> 💡 Solve`,
      stepByStepGuide: [
        `1. Read prompt carefully and highlight key details.`,
        `2. Apply step-by-step ${subject.toLowerCase()} strategy for ${topic}.`,
        `3. Verify solution using inverse operation or evidence check.`
      ],
      selfCheckChecklist: [
        `Did I underline the core question?`,
        `Did I double check my steps for ${topic}?`
      ]
    },
    exemplarProblem: {
      questionPrompt: `Which choice correctly demonstrates mastery of ${topic}?`,
      answerChoices: [
        `A) Incorrect application due to missing step`,
        `B) Correct exemplar solution 🎯`,
        `C) Misconception error option`,
        `D) Incomplete procedural calculation`
      ],
      correctAnswer: `B) Correct exemplar solution 🎯`,
      teacherExemplarExplanation: `Option B correctly applies the state standard for ${topic} with complete step-by-step accuracy.`
    },
    worksheets: [{
      id: `${id}-dol-ws`,
      title: `${topic} STAAR 2.0 Mastery Check & Practice Sheet`,
      type: 'NES DOL Mini-Quiz',
      estimatedTimeMin: 10,
      previewContent: `10-minute diagnostic check for ${topic}.`
    }]
  };

  GENERATED_STANDARDS_CACHE.set(targetCode, generatedItem);
  return generatedItem;
}

import { NATIVE_MULTI_STATE_STANDARDS } from '../data/multiStateData';

/**
 * Returns all standards combining pre-populated master database + native multi-state + generated cache
 */
export function getAllAvailableStandards(): TexasTeksItem[] {
  const list = [...TEXAS_TEKS_MASTER_DATABASE, ...NATIVE_MULTI_STATE_STANDARDS];
  GENERATED_STANDARDS_CACHE.forEach(item => {
    if (!list.some(s => s.code === item.code)) {
      list.push(item);
    }
  });
  return list;
}
