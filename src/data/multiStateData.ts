import { TexasTeksItem, TEXAS_TEKS_MASTER_DATABASE } from './texasTeksData';

export interface StateFramework {
  id: string;
  name: string;
  code: string;
  region: string;
  badgeColor: string;
  description: string;
}

export const STATE_FRAMEWORKS: StateFramework[] = [
  {
    id: 'teks',
    name: 'Texas TEKS',
    code: 'TEA TEKS',
    region: 'Texas (TEA Edition)',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    description: 'Texas Essential Knowledge and Skills (TEA 2026 Baseline)'
  },
  {
    id: 'ccss',
    name: 'Common Core (CCSS)',
    code: 'CCSS',
    region: 'National Standard',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    description: 'Common Core State Standards for Math & ELA'
  },
  {
    id: 'best',
    name: 'Florida B.E.S.T.',
    code: 'FL B.E.S.T.',
    region: 'Florida DOE',
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    description: 'Benchmarks for Excellent Student Thinking'
  },
  {
    id: 'sol',
    name: 'Virginia SOL',
    code: 'VA SOL',
    region: 'Virginia VDOE',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    description: 'Virginia Standards of Learning'
  },
  {
    id: 'gse',
    name: 'Georgia GSE',
    code: 'GA GSE',
    region: 'Georgia GaDOE',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    description: 'Georgia Standards of Excellence'
  },
  {
    id: 'ngls',
    name: 'New York NGLS',
    code: 'NY NGLS',
    region: 'New York NYSED',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    description: 'Next Generation Learning Standards'
  }
];

export interface MultiStateCrosswalk {
  teksCode: string;
  ccssCode: string;
  bestCode: string;
  solCode: string;
  description: string;
}

export const STATE_CROSSWALKS: MultiStateCrosswalk[] = [
  {
    teksCode: 'TEKS 1.3B',
    ccssCode: 'CCSS.MATH.CONTENT.1.OA.A.1',
    bestCode: 'MA.1.AR.1.2',
    solCode: 'VA.SOL.MATH.1.6',
    description: 'Use addition and subtraction within 20 to solve word problems involving situations of adding to, taking from, putting together, taking apart, and comparing.'
  },
  {
    teksCode: 'TEKS 1.5A',
    ccssCode: 'CCSS.ELA-LITERACY.RL.1.2',
    bestCode: 'ELA.1.R.1.2',
    solCode: 'VA.SOL.READING.1.9c',
    description: 'Retell stories, including key details, and demonstrate understanding of their central message or lesson.'
  },
  {
    teksCode: 'TEKS 3.4A',
    ccssCode: 'CCSS.MATH.CONTENT.3.NBT.A.2',
    bestCode: 'MA.3.NSO.2.1',
    solCode: 'VA.SOL.MATH.3.3',
    description: 'Fluently add and subtract within 1000 using strategies and algorithms based on place value, properties of operations, and/or the relationship between addition and subtraction.'
  },
  {
    teksCode: 'TEKS 5.3K',
    ccssCode: 'CCSS.MATH.CONTENT.5.NBT.B.7',
    bestCode: 'MA.5.NSO.2.5',
    solCode: 'VA.SOL.MATH.5.5',
    description: 'Add, subtract, multiply, and divide decimals to hundredths using concrete models or drawings and strategies based on place value.'
  }
];

// NATIVE STATE STANDARDS REGISTRIES
export const NATIVE_MULTI_STATE_STANDARDS: TexasTeksItem[] = [
  // CCSS
  {
    id: 'ccss-1-oa-a-1',
    code: 'CCSS.MATH.1.OA.A.1',
    state: 'ccss',
    title: 'Operations & Algebraic Thinking: Word Problems within 20',
    description: 'Use addition and subtraction within 20 to solve word problems involving situations of adding to, taking from, putting together, taking apart, and comparing, with unknowns in all positions.',
    grade: '1st Grade',
    subject: 'Mathematics',
    strand: 'Operations & Algebraic Thinking',
    bloomsLevel: 'Apply',
    prerequisites: ['CCSS.MATH.K.OA.A.2'],
    staarQuestionType: 'Inline Choice',
    staarQuestionTypeSecondary: 'Hot Spot',
    nesLessonEngine: {
      nesStage: 'Guided Practice',
      iDoExplicitModeling: 'Model part-part-whole bar models for missing addend addition.',
      weDoGuidedPractice: 'Guide students with dual-colored linking cubes.',
      youDoTogetherCollaborative: 'Partners solve story cards with unknowns in all positions.',
      youDoAloneIndependentMastery: 'Independent 4-question word problem exit ticket.'
    },
    dokQuestions: {
      dok1Recall: 'What equation represents adding 5 to 7?',
      dok2SkillConcept: 'How do you find the missing addend in 6 + ? = 14?',
      dok3StrategicThinking: 'Explain why 14 - 6 gives the same result as finding the missing addend in 6 + ? = 14.',
      dok4ExtendedThinking: 'Write a real-world story problem where the unknown number is the starting amount.'
    },
    teacherStrategy: {
      scaffoldingSteps: ['Use concrete ten-frames', 'Draw part-part-whole bar models', 'Write matching equation'],
      commonMisconceptions: [{ flaw: 'Confusing missing addends with sum', correctionPath: 'Use tape diagrams to highlight part vs whole' }],
      interventionTip: 'Provide color-coded ten-frame counters.'
    },
    studentStrategy: {
      anchorTitle: 'CCSS Word Problem Solver',
      visualHook: 'Part + Part = Whole',
      stepByStepGuide: ['Underline key numbers', 'Draw tape diagram', 'Solve for unknown'],
      selfCheckChecklist: ['Did I double check my calculation?', 'Does my answer make sense?']
    },
    exemplarProblem: {
      questionPrompt: 'Maya has 8 apples. She picks some more. Now she has 15 apples. How many apples did she pick?',
      answerChoices: ['A) 6', 'B) 7 🎯', 'C) 8', 'D) 23'],
      correctAnswer: 'B) 7 🎯',
      teacherExemplarExplanation: '15 - 8 = 7 apples picked.'
    },
    worksheets: [{ id: 'ccss-1-ws', title: 'CCSS 1.OA.A.1 Word Problem Mastery', type: 'Exit Ticket', estimatedTimeMin: 10, previewContent: 'Practice sheet for 1.OA.A.1' }]
  },

  // FLORIDA B.E.S.T.
  {
    id: 'fl-best-ma-1-ar-1-2',
    code: 'MA.1.AR.1.2 (FL B.E.S.T.)',
    state: 'best',
    title: 'Algebraic Reasoning: Solve Addition & Subtraction Real-World Problems',
    description: 'Solve real-world problems involving addition and subtraction within 20 with unknowns in all positions using objects, drawings and equations.',
    grade: '1st Grade',
    subject: 'Mathematics',
    strand: 'Algebraic Reasoning (AR)',
    bloomsLevel: 'Apply',
    prerequisites: ['MA.K.AR.1.2'],
    staarQuestionType: 'Drag-and-Drop',
    nesLessonEngine: {
      nesStage: 'Independent Practice',
      iDoExplicitModeling: 'Model B.E.S.T. benchmark visual number lines.',
      weDoGuidedPractice: 'Practice hopping on number line for subtraction.',
      youDoTogetherCollaborative: 'Group word problem challenge mat.',
      youDoAloneIndependentMastery: 'FL B.E.S.T. benchmark check.'
    },
    dokQuestions: {
      dok1Recall: 'What is the sum of 9 and 4?',
      dok2SkillConcept: 'Use a number line to show 15 - 8.',
      dok3StrategicThinking: 'Prove how addition and subtraction are inverse operations.',
      dok4ExtendedThinking: 'Design a classroom store math budget within 20.'
    },
    teacherStrategy: {
      scaffoldingSteps: ['Number line hopping', 'Equation writing', 'Self-check'],
      commonMisconceptions: [{ flaw: 'Hopping in wrong direction on number line', correctionPath: 'Remind: Addition hops right, Subtraction hops left' }],
      interventionTip: 'Use physical floor number mats.'
    },
    studentStrategy: {
      anchorTitle: 'FL B.E.S.T. Number Line Hop',
      visualHook: 'Add = Right ➡️, Subtract = Left ⬅️',
      stepByStepGuide: ['Start at first number', 'Hop for second number', 'Circle landing spot'],
      selfCheckChecklist: ['Did I hop the correct direction?']
    },
    exemplarProblem: {
      questionPrompt: 'On a Florida beach, 12 pelicans were sitting on a dock. 5 pelicans flew away. How many pelicans remain?',
      answerChoices: ['A) 17', 'B) 7 🎯', 'C) 8', 'D) 5'],
      correctAnswer: 'B) 7 🎯',
      teacherExemplarExplanation: '12 - 5 = 7 pelicans.'
    },
    worksheets: [{ id: 'best-1-ws', title: 'Florida B.E.S.T. Real-World Math Check', type: 'Exit Ticket', estimatedTimeMin: 10, previewContent: 'FL B.E.S.T. practice sheet' }]
  },

  // VIRGINIA SOL
  {
    id: 'va-sol-math-1-6',
    code: 'VA.SOL.MATH.1.6',
    state: 'sol',
    title: 'Virginia SOL: Computation & Estimation within 20',
    description: 'The student will create and solve single-step story and picture problems involving addition and subtraction within 20.',
    grade: '1st Grade',
    subject: 'Mathematics',
    strand: 'Computation and Estimation',
    bloomsLevel: 'Create & Solve',
    prerequisites: ['VA.SOL.MATH.K.6'],
    staarQuestionType: 'Short Constructed Response (SCR)',
    nesLessonEngine: {
      nesStage: 'Guided Practice',
      iDoExplicitModeling: 'Model drawing picture representations for Virginia SOL story problems.',
      weDoGuidedPractice: 'Solve guided SOL story problems together.',
      youDoTogetherCollaborative: 'Collaborative story problem creation.',
      youDoAloneIndependentMastery: 'Virginia SOL exit ticket.'
    },
    dokQuestions: {
      dok1Recall: 'What sign shows addition in a number sentence?',
      dok2SkillConcept: 'Draw a picture that shows 7 + 6 = 13.',
      dok3StrategicThinking: 'Explain how your picture proves the story problem solution.',
      dok4ExtendedThinking: 'Create a multi-picture story book with 3 addition problems.'
    },
    teacherStrategy: {
      scaffoldingSteps: ['Read story', 'Draw picture', 'Write equation'],
      commonMisconceptions: [{ flaw: 'Forgetting to include label units', correctionPath: 'Always write unit names next to numbers' }],
      interventionTip: 'Use picture stampers for visual counting.'
    },
    studentStrategy: {
      anchorTitle: 'Virginia SOL Story Problem Guide',
      visualHook: 'Picture 🎨 + Equation 📝 = Success 🌟',
      stepByStepGuide: ['Draw your items', 'Group or cross out', 'Write the numbers'],
      selfCheckChecklist: ['Did I count all pictures accurately?']
    },
    exemplarProblem: {
      questionPrompt: 'Sam saw 9 red birds and 4 blue birds at Shenandoah National Park. How many birds did Sam see in all?',
      answerChoices: ['A) 13 🎯', 'B) 5', 'C) 12', 'D) 14'],
      correctAnswer: 'A) 13 🎯',
      teacherExemplarExplanation: '9 + 4 = 13 total birds.'
    },
    worksheets: [{ id: 'sol-1-ws', title: 'Virginia SOL Story Problem Worksheet', type: 'SOL Check', estimatedTimeMin: 10, previewContent: 'Virginia SOL practice sheet' }]
  }
];
