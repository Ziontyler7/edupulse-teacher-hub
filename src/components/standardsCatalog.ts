import { StandardItem } from "./types";
import { MATH_STANDARDS_CATALOG } from "./catalog/mathStandards";
import { ELA_STANDARDS_CATALOG } from "./catalog/elaStandards";
import { SCIENCE_STANDARDS_CATALOG } from "./catalog/scienceStandards";
import { SOCIAL_STUDIES_STANDARDS_CATALOG } from "./catalog/socialStudiesStandards";
import { SPED_ALT_STANDARDS_CATALOG } from "./catalog/spedAltStandards";
import { TEXAS_TEKS_MASTER_DATABASE, TexasTeksItem } from "./data/texasTeksData";
import { NATIVE_MULTI_STATE_STANDARDS, STATE_FRAMEWORKS, STATE_CROSSWALKS } from "./data/multiStateData";
import { findOrGenerateTeksStandard, getAllAvailableStandards, parseTeksCode } from "./services/teksIntelligenceEngine";

export {
  MATH_STANDARDS_CATALOG,
  ELA_STANDARDS_CATALOG,
  SCIENCE_STANDARDS_CATALOG,
  SOCIAL_STUDIES_STANDARDS_CATALOG,
  SPED_ALT_STANDARDS_CATALOG,
  TEXAS_TEKS_MASTER_DATABASE,
  NATIVE_MULTI_STATE_STANDARDS,
  STATE_FRAMEWORKS,
  STATE_CROSSWALKS,
  findOrGenerateTeksStandard,
  getAllAvailableStandards,
  parseTeksCode
};

// Base high-pedagogy multi-domain standards
const BASE_MODULAR_STANDARDS: StandardItem[] = [
  ...MATH_STANDARDS_CATALOG,
  ...ELA_STANDARDS_CATALOG,
  ...SCIENCE_STANDARDS_CATALOG,
  ...SOCIAL_STUDIES_STANDARDS_CATALOG,
  ...SPED_ALT_STANDARDS_CATALOG
];

// Existing high-priority codes set
const existingCodes = new Set(BASE_MODULAR_STANDARDS.map(s => s.code.toLowerCase().trim()));

// Convert and merge official 2,762 Texas TEKS database
const mergedTexasTeks: StandardItem[] = (TEXAS_TEKS_MASTER_DATABASE as TexasTeksItem[])
  .filter(item => !existingCodes.has(item.code.toLowerCase().trim()))
  .map(item => ({
    id: item.id,
    state: item.state || 'TX',
    stateSystem: item.stateSystem || 'TEKS',
    grade: item.grade,
    subject: item.subject,
    code: item.code,
    title: item.title,
    description: item.description,
    swbatObjective: item.swbatObjective || `SWBAT demonstrate proficiency in ${item.title} with 85%+ accuracy.`,
    priorKnowledge: item.priorKnowledge || { prerequisiteCodes: [], futureExtensionCodes: [] },
    realWorldConnections: item.realWorldConnections || [`Connecting ${item.title} to everyday scenarios`],
    sentenceStems: item.sentenceStems || [`I used ${item.title} by applying _____ because _____.`],
    ubdFramework: item.ubdFramework || {
      stage1DesiredResults: `Understanding ${item.title} develops core ${item.subject} proficiency.`,
      stage2AssessmentEvidence: `Formative Demonstration of Learning and STAAR constructed response.`,
      stage3LearningPlanSequence: "Hook -> Explicit Instruction -> Guided Practice -> Independent Mastery."
    },
    gradualReleaseModel: item.gradualReleaseModel || {
      iDoDirectInstruction: `Teacher models explicit strategy for ${item.code} on smartboard.`,
      weDoGuidedPractice: `Class collaboratively solves guided problem sets for ${item.title}.`,
      youDoTogetherCollaborative: `Student pairs solve interactive challenge cards for ${item.code}.`,
      youDoAloneIndependentMastery: `Students complete independent mastery check for ${item.code}.`
    },
    dokQuestions: item.dokQuestions || {
      dok1Recall: `What is the core rule or definition for ${item.title}?`,
      dok2SkillConcept: `How do you apply ${item.title} in a multi-step task?`,
      dok3StrategicThinking: `Why is this specific approach effective for ${item.code}? What evidence supports it?`,
      dok4ExtendedThinking: `Create a real-world scenario that models ${item.title}.`
    },
    teacherStrategy: item.teacherStrategy || {
      scaffoldingSteps: [`Step 1: Activate prior knowledge for ${item.title}`, `Step 2: Model explicit steps`, `Step 3: Provide guided practice`],
      commonMisconceptions: item.teacherStrategy?.commonMisconceptions || [{ flaw: `Misinterpreting key terms in ${item.title}`, correctionPath: `Underline keywords and verify steps` }],
      interventionTip: item.teacherStrategy?.interventionTip || `Use visual graphic organizers and manipulatives.`
    },
    studentStrategy: item.studentStrategy || {
      anchorTitle: `${item.code} Mastery Blueprint`,
      visualHook: `🔍 Read -> ✏️ Model -> 💡 Solve`,
      stepByStepGuide: [`1. Read prompt carefully.`, `2. Apply strategy for ${item.code}.`, `3. Verify your answer.`],
      selfCheckChecklist: [`Did I double check my steps?`, `Does my answer make sense?`]
    },
    exemplarProblem: item.exemplarProblem || {
      questionPrompt: `Which choice correctly demonstrates mastery of ${item.title}?`,
      answerChoices: [`A) Incorrect application`, `B) Correct exemplar solution 🎯`, `C) Distractor option`, `D) Incomplete calculation`],
      correctAnswer: `B) Correct exemplar solution 🎯`,
      teacherExemplarExplanation: `Option B correctly applies ${item.code} with complete step-by-step accuracy.`
    },
    worksheets: item.worksheets || [{
      id: `${item.id}-ws`,
      title: `${item.code} Practice Sheet`,
      type: 'Practice',
      estimatedTimeMin: 15,
      previewContent: `Diagnostic practice for ${item.code}.`
    }]
  }));

export const COMPREHENSIVE_K12_STANDARDS: StandardItem[] = [
  ...BASE_MODULAR_STANDARDS,
  ...mergedTexasTeks
];

export const MASTER_STANDARDS_CATALOG = COMPREHENSIVE_K12_STANDARDS;
