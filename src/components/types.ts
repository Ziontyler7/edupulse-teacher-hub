// EduPulse Special Education (SPED) & Emergent Bilingual (EB) Types
// Compliant with IDEA, Section 504, UDL 3.0, TEKS, STAAR Alt 2, ELPS, and TELPAS

export type DisabilityCategory = 
  | 'ASD'          // Autism Spectrum Disorder
  | 'ADHD'         // Attention Deficit Hyperactivity Disorder (Inattentive/Hyperactive)
  | 'Dyslexia'     // Specific Learning Disability - Reading
  | 'Dysgraphia'   // Specific Learning Disability - Written Expression
  | 'Dyscalculia'  // Specific Learning Disability - Mathematics
  | 'SLI'          // Speech or Language Impairment
  | 'ED'           // Emotional Disturbance / Behavioral Disorder
  | 'OHI';         // Other Health Impairment (Chronic Health/Fatigue)

export interface DisabilityProfile {
  category: DisabilityCategory;
  name: string;
  badgeColor: string;
  icon: string;
  barrierDescription: string;
  accommodations: {
    presentation: string[];
    response: string[];
    setting: string[];
    timingScheduling: string[];
  };
  assistiveTech: string[];
  highLeveragePractices: string[];
}

export interface PlaafpData {
  studentName: string;
  gradeLevel: string;
  disabilityCategory: DisabilityCategory;
  baselinePerformance: string;
  quantitativeMetric: string;
  curriculumImpact: string;
  prescribedSupports: string[];
}

export interface IepSmartGoal {
  id: string;
  studentName: string;
  subjectArea: 'Mathematics' | 'Reading/ELA' | 'Behavior' | 'Communication' | 'Executive Function';
  alignedStandardCode: string; // e.g. "TEKS 1.3B" or "CCSS.MATH.1.OA.A.1"
  condition: string;          // e.g. "When given a 10-frame and pictorial story problem"
  observableBehavior: string; // e.g. "will represent and solve missing addend equations"
  performanceCriteria: string;// e.g. "with 80% accuracy across 4 out of 5 trials"
  measurementTool: string;    // e.g. "as measured by bi-weekly teacher running records"
  targetCompletionDate: string; // e.g. "May 2027"
  progressDataPoints: {
    date: string;
    scorePercent: number;
    notes: string;
  }[];
  isMet: boolean;
}

export interface AbcBehaviorLogEntry {
  id: string;
  studentName: string;
  timestamp: string;
  settingEvent: string;
  antecedent: string;
  targetBehavior: string;
  intensityLevel: 1 | 2 | 3 | 4 | 5;
  durationMinutes: number;
  hypothesizedFunction: 'Escape/Avoidance' | 'Access to Attention' | 'Access to Tangible' | 'Sensory/Automatic';
  replacementBehaviorPrompted: string;
  consequenceApplied: string;
  reinforcementEarned: string;
  deEscalationPhase: 'Calm' | 'Trigger' | 'Agitation' | 'Acceleration' | 'Peak' | 'De-escalation' | 'Recovery';
}

export interface BipPlan {
  studentName: string;
  targetProblemBehavior: string;
  antecedentModifications: string[];
  functionOfBehavior: string;
  functionallyEquivalentReplacementBehavior: string;
  positiveReinforcementSchedule: string;
  deEscalationProtocol: {
    stage: string;
    teacherAction: string;
  }[];
}

export type TelpasProficiencyLevel = 'Beginning' | 'Intermediate' | 'Advanced' | 'Advanced High';

export interface TelpasDomainScaffolds {
  listening: string;
  speaking: string;
  reading: string;
  writing: string;
  sentenceStems: string[];
  graphicOrganizerTip: string;
}

export interface BilingualCognate {
  englishWord: string;
  spanishWord: string;
  isTrueCognate: boolean;
  englishPhonetic: string;
  spanishPhonetic: string;
  meaningExplanation: string;
  exampleSentence: string;
  audioTtsAvailable: boolean;
}

export interface StaarAlt2StimulusCard {
  id: string;
  label: string;
  imageUrl?: string;
  emojiIcon: string;
  isCorrect: boolean;
  description: string;
}

export interface StaarAlt2StimulusCluster {
  id: string;
  essenceStatement: string;
  prerequisiteSkillTeks: string;
  gradeLevelTeks: string;
  conceptTitle: string;
  
  level3: {
    tier: 3;
    points: 2;
    scriptedTeacherTalk: string;
    cards: StaarAlt2StimulusCard[]; // 3 cards: 1 correct + 2 distractors
    scaffoldingNote: string;
  };
  level2: {
    tier: 2;
    points: 1;
    scriptedTeacherTalk: string;
    cards: StaarAlt2StimulusCard[]; // 2 cards: 1 correct + 1 distractor
    scaffoldingNote: string;
  };
  level1: {
    tier: 1;
    points: 0;
    scriptedTeacherTalk: string;
    cards: StaarAlt2StimulusCard[]; // Direct match modeling
    scaffoldingNote: string;
  };
}

export interface AacTile {
  id: string;
  label: string;
  emoji: string;
  category: 'Core' | 'Needs' | 'Math' | 'Feelings' | 'Actions' | 'Social';
  speechPhrase: string;
  colorClass: string;
}

export interface VisualScheduleTask {
  id: string;
  title: string;
  description: string;
  emoji: string;
  isCompleted: boolean;
  durationMinutes: number;
}

export interface AccessibilitySettings {
  dyslexiaFont: boolean;
  contrastMode: 'default' | 'high-contrast-yellow' | 'blue-calm' | 'warm-amber';
  fontSizeScale: number; // 1.0 to 1.4
  lineFocusRuler: boolean;
  textToSpeechRate: number; // 0.8 to 1.2
}

export interface DifferentiatedLessonPlan {
  standardCode: string;
  standardTitle: string;
  swbatGeneral: string;
  swbatSpedTier3: string;
  swbatEbLinguistic: string;
  udlEngagement: string[];
  udlRepresentation: string[];
  udlActionExpression: string[];
  designatedSupports: string[];
  telpasSentenceStemsByTier: Record<TelpasProficiencyLevel, string[]>;
  aacKeyVocab: string[];
  staarAlt2Essence: string;
}

export interface StandardItem {
  id: string;
  state: string;
  stateSystem: string;
  grade: string;
  subject: string;
  code: string;
  title: string;
  description: string;
  swbatObjective: string;
  priorKnowledge: {
    prerequisiteCodes: { code: string; title: string }[];
    futureExtensionCodes: { code: string; title: string }[];
  };
  realWorldConnections: string[];
  sentenceStems: string[];
  ubdFramework: {
    stage1DesiredResults: string;
    stage2AssessmentEvidence: string;
    stage3LearningPlanSequence: string;
  };
  gradualReleaseModel: {
    iDoDirectInstruction: string;
    weDoGuidedPractice: string;
    youDoTogetherCollaborative: string;
    youDoAloneIndependentMastery: string;
  };
  dokQuestions: {
    dok1Recall: string;
    dok2SkillConcept: string;
    dok3StrategicThinking: string;
    dok4ExtendedThinking: string;
  };
  teacherStrategy: {
    scaffoldingSteps: string[];
    commonMisconceptions: { flaw: string; correctionPath: string }[];
    interventionTip: string;
  };
  studentStrategy: {
    anchorTitle: string;
    visualHook: string;
    stepByStepGuide: string[];
    selfCheckChecklist: string[];
  };
  exemplarProblem: {
    questionPrompt: string;
    answerChoices?: string[];
    correctAnswer: string;
    teacherExemplarExplanation: string;
  };
  worksheets: {
    id: string;
    title: string;
    type: 'Practice' | 'Graphic Organizer' | 'Pre-Test' | 'Post-Test';
    estimatedTimeMin: number;
    previewContent: string;
  }[];
}

