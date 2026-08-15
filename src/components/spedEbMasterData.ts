import { 
  DisabilityProfile, 
  IepSmartGoal, 
  PlaafpData, 
  AbcBehaviorLogEntry, 
  BipPlan, 
  TelpasDomainScaffolds, 
  BilingualCognate, 
  StaarAlt2StimulusCluster, 
  AacTile, 
  VisualScheduleTask,
  DifferentiatedLessonPlan,
  TelpasProficiencyLevel,
  StandardItem
} from './types';

export const DISABILITY_PROFILES: DisabilityProfile[] = [
  {
    category: 'ASD',
    name: 'Autism Spectrum Disorder',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/50',
    icon: 'Brain',
    barrierDescription: 'Difficulty with unstructured social transitions, sensory hyper/hypo-reactivity, literal language comprehension, and executive function sequencing.',
    accommodations: {
      presentation: ['First-Then Visual Schedules', 'Explicit concrete step-by-step task analysis', 'Advance warning (2-5 min) before classroom transitions', 'Low-stimulus visual presentations without extraneous animations'],
      response: ['AAC speech-generating devices or PECS', 'Choice board for demonstrating mastery (draw, write, point)', 'Extended response processing wait-time (7-10 seconds)'],
      setting: ['Sensory quiet corner with noise-dampening headphones', 'Preferential seating away from high-traffic doorways or humming fluorescent lights'],
      timingScheduling: ['Chunked 10-15 minute work segments', 'Scheduled sensory regulation breaks (heavy work, fidget tools)']
    },
    assistiveTech: ['High-Tech AAC Speech Board', 'Visual Countdown Timer', 'Noise-Canceling Headphones', 'Sensory Lap Pad'],
    highLeveragePractices: ['HLP 7: Establish a consistent, organized, and respectful learning environment', 'HLP 16: Use explicit instruction', 'HLP 22: Provide positive and constructive feedback']
  },
  {
    category: 'ADHD',
    name: 'ADHD (Inattentive & Hyperactive)',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/50',
    icon: 'Zap',
    barrierDescription: 'Deficits in sustained working memory, impulse inhibition, task initiation, and organizational stamina.',
    accommodations: {
      presentation: ['Color-coded instruction sheets', 'Highlighting key operational words in bold yellow', 'Segmenting multi-step instructions into single-step checkpoints'],
      response: ['Verbal response options to reduce written fatigue', 'Math manipulatives / tactile counters on desk', 'Digital check-off checklists'],
      setting: ['Proximity control near teacher instructional zone', 'Flexible seating (wobble stool, standing desk band)'],
      timingScheduling: ['Frequent 2-minute kinesthetic movement intervals', 'Time-chunking with visual progress bars', 'No penalty for motor fidgeting during instruction']
    },
    assistiveTech: ['Visual Task Timer', 'Digital Checklist App', 'Line-Focus Reading Ruler', 'Kinesthetic Resistance Bands'],
    highLeveragePractices: ['HLP 8: Provide positive and active behavior supports', 'HLP 14: Teach cognitive and metacognitive strategies']
  },
  {
    category: 'Dyslexia',
    name: 'Dyslexia (SLD - Reading)',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50',
    icon: 'BookOpen',
    barrierDescription: 'Neurobiological deficit in phonological awareness, orthographic mapping, rapid automated naming, and reading fluency.',
    accommodations: {
      presentation: ['OpenDyslexic typography with expanded letter/line spacing', 'Babel Audio Text-to-Speech (TTS) read-aloud for all non-reading assessments', 'Pre-taught vocabulary with visual anchor charts and morphology breakdown'],
      response: ['Speech-to-text dictation tools', 'Spelling errors disregarded on content-area math/science tests', 'Audio-recorded verbal explanations'],
      setting: ['Quiet testing environment to facilitate whisper-reading or audio read-aloud'],
      timingScheduling: ['Extra time (1.5x - 2.0x) on reading-intensive examinations', 'Reduced reading volume focusing on high-impact passages']
    },
    assistiveTech: ['Babel Text-to-Speech Audio Engine', 'OpenDyslexic Font Overlay', 'Electronic Reading Pen / OCR Scanner', 'Graphic Organizers'],
    highLeveragePractices: ['HLP 12: Systematically design instruction toward a specific learning goal', 'HLP 15: Provide scaffolded supports']
  },
  {
    category: 'Dysgraphia',
    name: 'Dysgraphia (SLD - Written Expression)',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50',
    icon: 'FileText',
    barrierDescription: 'Fine-motor processing lag, spatial letter alignment deficits, motor fatigue, and orthographic memory retrieval barriers.',
    accommodations: {
      presentation: ['Pre-printed cloze lecture notes with fill-in blanks', 'Digital copies of anchor charts and board notes provided in advance'],
      response: ['Speech-to-text software or word processor with predictive text', 'Oral testing or scribing by educator', 'Multiple-choice or graphic response formats in lieu of essays'],
      setting: ['Adaptive desk surface with ergonomic pencil grips and slanted writing board'],
      timingScheduling: ['Extended time for written tasks', 'Shortened writing assignments measuring conceptual mastery over length']
    },
    assistiveTech: ['Speech-to-Text Dictation Engine', 'Predictive Word Banks', 'Ergonomic Weighted Grip Pens', 'Digital Fillable Worksheets'],
    highLeveragePractices: ['HLP 13: Adapt curriculum materials and tasks', 'HLP 17: Use flexible grouping']
  },
  {
    category: 'Dyscalculia',
    name: 'Dyscalculia (SLD - Mathematics)',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/50',
    icon: 'Target',
    barrierDescription: 'Core deficit in subitizing, mental number line representation, arithmetic fact retrieval, and spatial math operations.',
    accommodations: {
      presentation: ['Concrete-Representational-Abstract (CRA) instructional flow', 'Dual ten-frames, base-10 blocks, and number lines permanently available', 'Color-coded arithmetic operation signs (+ green, - red, × blue)'],
      response: ['Formula reference cheat-sheet and 100s chart on desk', 'Graph paper with enlarged grid boxes to maintain column place value alignment', 'Talking calculator / visual counter tool'],
      setting: ['Math center with readily accessible hands-on manipulatives'],
      timingScheduling: ['Extra time on multi-step mathematical calculations', 'Reduced problem sets (5 high-fidelity problems instead of 20)']
    },
    assistiveTech: ['Virtual 10-Frames & Counters', 'Color-Coded Operational Grid', 'Talking Calculator', 'Visual Number Line Slider'],
    highLeveragePractices: ['HLP 19: Use assistive and instructional technologies', 'HLP 20: Conduct scaffolded mathematical discourse']
  },
  {
    category: 'SLI',
    name: 'Speech & Language Impairment (SLI)',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/50',
    icon: 'MessageSquare',
    barrierDescription: 'Expressive/receptive vocabulary gaps, morphological syntax errors, articulation delays, and pragmatic discourse struggles.',
    accommodations: {
      presentation: ['Tiered sentence frames and visual conversational stems', 'Pictorial vocabulary flashcards with concrete visual realia', 'Simplified, concise teacher speech syntax with frequent comprehension checks'],
      response: ['AAC communication boards for multi-modal responding', 'Acceptance of gestures, pointing, and drawing alongside speech', 'Extended wait time (minimum 7 seconds) before prompting'],
      setting: ['Small-group structured verbal activities (2-3 peers) with supportive peer models'],
      timingScheduling: ['Unrushed oral assessment sessions without peer pressure']
    },
    assistiveTech: ['EduPulse High-Tech AAC Speech Board', 'Visual Vocabulary Sound Board', 'Picture Exchange Cards (PECS)'],
    highLeveragePractices: ['HLP 18: Use strategies to promote active student engagement', 'HLP 15: Provide scaffolded supports']
  },
  {
    category: 'ED',
    name: 'Emotional Disturbance (ED / EBD)',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/50',
    icon: 'Heart',
    barrierDescription: 'Heightened affective dysregulation, low frustration tolerance, fight-or-flight reactivity to perceived academic failure, and peer conflict.',
    accommodations: {
      presentation: ['Forced-choice instructional options (e.g. "Odd problems or Even problems first?")', 'Proactive positive praise at 4:1 ratio to corrective feedback', 'Clear, non-threatening behavioral boundaries and predictable routines'],
      response: ['Non-verbal break request card ("I need a minute")', 'Private self-evaluation check-ins instead of public calling out'],
      setting: ['Designated sensory calm-down zone with de-escalation toolkit (breathing sphere, tactile putty)'],
      timingScheduling: ['Scheduled preemptive break timers before high-frustration tasks', 'Flexible task order']
    },
    assistiveTech: ['Emotional Thermometer Check-In', 'BIP Functional ABC Tracker', 'Visual Cool-Down Timer', 'Self-Regulation Rubric'],
    highLeveragePractices: ['HLP 7: Establish a consistent, organized, and respectful learning environment', 'HLP 8: Provide positive and active behavior supports']
  },
  {
    category: 'OHI',
    name: 'Other Health Impairment (OHI)',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/50',
    icon: 'TrendingUp',
    barrierDescription: 'Limited strength, vitality, or alertness due to chronic or acute health conditions (e.g. Diabetes, Asthma, Epilepsy, Post-Viral Fatigue).',
    accommodations: {
      presentation: ['Digitally recorded instruction for review during health absences', 'Concise summary notes provided after class'],
      response: ['Shortened writing requirements during flare-ups', 'Alternative testing dates without academic penalty'],
      setting: ['Access to water, snacks, nurse pass, and restroom without restrictions', 'Climate-controlled seating away from temperature extremes'],
      timingScheduling: ['Flexible assignment pacing and extended deadlines', 'Mid-day rest break allowances']
    },
    assistiveTech: ['Cloud Lesson Portal & Audio Recordings', 'Adaptive Ergonomic Seating', 'Digital Health Alert HUD'],
    highLeveragePractices: ['HLP 13: Adapt curriculum materials and tasks', 'HLP 21: Teach students to monitor their own learning']
  }
];

export const EXEMPLARY_PLAAFP: PlaafpData = {
  studentName: "Elena Rodriguez",
  gradeLevel: "1st Grade",
  disabilityCategory: "ASD",
  baselinePerformance: "Elena currently identifies numbers 0-20 with 95% accuracy on concrete counting tasks. However, when presented with 1-step word problems involving joining and separating sets (TEKS 1.3B), Elena experiences high cognitive overload and task refusal, achieving 25% accuracy without visual cues.",
  quantitativeMetric: "Baseline Accuracy: 25% on 1-step word problems (4 trials). Visual Schedule utilization: 80%.",
  curriculumImpact: "Elena's deficits in receptive language and executive functioning hinder her ability to deconstruct math word problems, isolate operational verbs (e.g., 'joined', 'left'), and formulate missing addend equations in general education settings without visual scaffolds.",
  prescribedSupports: [
    "First-Then visual task card",
    "Dual 10-frame manipulative mat with red/blue counters",
    "Color-coded operational sentence stems",
    "AAC Speech Board for verbal answer articulation"
  ]
};

export const EXEMPLARY_IEP_GOALS: IepSmartGoal[] = [
  {
    id: "goal-math-1",
    studentName: "Elena Rodriguez",
    subjectArea: "Mathematics",
    alignedStandardCode: "TEKS 1.3B",
    condition: "When presented with a 1-step joining or separating word problem within 20, accompanied by a dual ten-frame mat and color-coded pictorial sentence stems",
    observableBehavior: "Elena will independently model the problem with counters, circle the action word, and write the correct missing addend equation",
    performanceCriteria: "with 80% accuracy across 4 out of 5 consecutive trials",
    measurementTool: "as measured by weekly teacher running records and student work sample artifacts",
    targetCompletionDate: "May 2027",
    progressDataPoints: [
      { date: "2026-09-15", scorePercent: 30, notes: "Baseline established. Needed full hand-over-hand prompt." },
      { date: "2026-10-10", scorePercent: 50, notes: "Correctly identified 'joined' vs 'left' using visual cards." },
      { date: "2026-11-05", scorePercent: 65, notes: "Independently placed cubes on dual 10-frame mat." },
      { date: "2026-12-01", scorePercent: 80, notes: "Mastered 4/5 problems independently! High engagement." }
    ],
    isMet: false
  },
  {
    id: "goal-comm-2",
    studentName: "Elena Rodriguez",
    subjectArea: "Communication",
    alignedStandardCode: "ELPS 3.D / CCSS.SL.1.1",
    condition: "During structured small-group math discourse",
    observableBehavior: "Elena will use her high-tech AAC Speech Board to construct a complete 3-word justification ('I added three' / 'I took away')",
    performanceCriteria: "in 4 out of 5 opportunities across 3 consecutive observation cycles",
    measurementTool: "as measured by SLP and Special Education teacher frequency logs",
    targetCompletionDate: "March 2027",
    progressDataPoints: [
      { date: "2026-09-20", scorePercent: 20, notes: "Used single-word tile 'Add'." },
      { date: "2026-10-25", scorePercent: 60, notes: "Successfully generated 2-word phrase 'Add three'." },
      { date: "2026-11-20", scorePercent: 80, notes: "Full 3-word phrase generated consistently!" }
    ],
    isMet: true
  }
];

export const EXEMPLARY_BIP: BipPlan = {
  studentName: "Elena Rodriguez",
  targetProblemBehavior: "Task refusal (pushing paper away, verbal vocalization, dropping to floor) when handed unchunked written worksheets.",
  antecedentModifications: [
    "Present tasks on a 2-problem strip instead of full-page worksheets",
    "Review First-Then schedule board prior to math block (First Math -> Then iPad Free Choice)",
    "Provide designated red/blue counter manipulatives upfront"
  ],
  functionOfBehavior: "Escape / Avoidance of non-preferred paper-pencil academic tasks due to receptive language fatigue.",
  functionallyEquivalentReplacementBehavior: "Student will point to or press the 'I need a 2-minute break' AAC tile, or point to the 'Help me with step 1' card.",
  positiveReinforcementSchedule: "Token Economy: Earn 1 Gold Star for every 2 completed math problems. 5 Stars = 5 minutes sensory swing or iPad math game.",
  deEscalationProtocol: [
    { stage: "1. Trigger / Agitation", teacherAction: "Prompt replacement communication card: 'Elena, show me what you need.' Offer choice of marker color." },
    { stage: "2. Acceleration", teacherAction: "Reduce verbal demands. Remove extraneous materials from desk. Point silently to First-Then board." },
    { stage: "3. Peak / Refusal", teacherAction: "Maintain safety, give physical space, do not attempt direct teaching or lecturing. Allow cool-down in sensory corner." },
    { stage: "4. Recovery", teacherAction: "Re-engage with an easy success task (e.g. counting 5 cubes). Reinforce with immediate positive praise." }
  ]
};

export const SAMPLE_ABC_LOGS: AbcBehaviorLogEntry[] = [
  {
    id: "abc-1",
    studentName: "Elena Rodriguez",
    timestamp: "2026-10-14 09:35 AM",
    settingEvent: "Monday morning, transition from gym to math",
    antecedent: "Teacher distributed full 10-question math sheet",
    targetBehavior: "Knocked pencil box off desk, turned chair away",
    intensityLevel: 2,
    durationMinutes: 4,
    hypothesizedFunction: "Escape/Avoidance",
    replacementBehaviorPrompted: "Teacher tapped 'Break' visual card on desk",
    consequenceApplied: "Worksheet folded in half (only 2 problems shown)",
    reinforcementEarned: "Elena completed problem #1 and earned 1 Gold Star",
    deEscalationPhase: "Agitation"
  },
  {
    id: "abc-2",
    studentName: "Elena Rodriguez",
    timestamp: "2026-10-22 10:15 AM",
    settingEvent: "Sensory noise in adjacent hallway",
    antecedent: "Instructional transition to independent math problem",
    targetBehavior: "Student pointed independently to 'Help' AAC tile instead of vocalizing",
    intensityLevel: 1,
    durationMinutes: 1,
    hypothesizedFunction: "Access to Attention",
    replacementBehaviorPrompted: "Student self-initiated replacement behavior! 🌟",
    consequenceApplied: "Teacher provided immediate 1-on-1 scaffolding on dual 10-frame",
    reinforcementEarned: "2 Gold Stars awarded for awesome functional communication",
    deEscalationPhase: "Calm"
  }
];

export const TELPAS_SCAFFOLDS_MASTER: Record<TelpasProficiencyLevel, TelpasDomainScaffolds> = {
  'Beginning': {
    listening: "Understands short, simple spoken English containing high-frequency words and concrete realia. Requires visual gestures, slow rate of speech, and Spanish translations.",
    speaking: "Expresses ideas using single words, short memorized phrases, or non-verbal gestures. Frequently reverts to native language (L1).",
    reading: "Reads environmental print, single sight words, and heavily illustrated texts with picture-to-word matching.",
    writing: "Labels drawings, copies words from word banks, and produces single-word responses with phonetic Spanish spelling.",
    sentenceStems: [
      "It is _____.",
      "I see _____ (number / object).",
      "_____ is big. _____ is small.",
      "Put _____ together."
    ],
    graphicOrganizerTip: "Use full pictorial cards with English and Spanish labels; point and place on 10-frame."
  },
  'Intermediate': {
    listening: "Understands simple spoken instructions on familiar school topics with occasional repetition, contextual rephrasing, and visual cues.",
    speaking: "Participates in simple academic discussions using basic vocabulary and emergent syntax. Pauses to search for words or formulate sentences.",
    reading: "Understands predictable, high-frequency stories with contextual illustrations. Reads simple sentences with compound structures (and, but).",
    writing: "Writes short sentences with basic subject-verb agreement and simple transition words (First, Next, Then).",
    sentenceStems: [
      "I know this is addition because _____ come in.",
      "First, there were _____ apples, then _____ were taken away.",
      "The total is _____ because _____ plus _____ is _____.",
      "I can solve this by drawing _____."
    ],
    graphicOrganizerTip: "Provide dual-language sentence frames with fill-in blanks and visual word banks."
  },
  'Advanced': {
    listening: "Understands longer, more complex academic discourse and multi-step directions with minimal repetition or visual support.",
    speaking: "Expresses detailed thoughts and mathematical reasoning using grade-level academic terminology with occasional grammatical irregularities.",
    reading: "Reads grade-level texts with scaffolding. Demonstrates comprehension of abstract concepts and supporting details.",
    writing: "Writes multi-sentence paragraphs using academic connectors (therefore, because of this, similarly) with expanding vocabulary precision.",
    sentenceStems: [
      "According to the word problem, the starting quantity was _____.",
      "Since the problem describes items being joined, we can model this with the equation _____.",
      "If we separate _____ from the group, the remaining difference is _____.",
      "My strategy of using a ten-frame proves that _____."
    ],
    graphicOrganizerTip: "Use Venn diagrams, Frayer models, and multi-step cause/effect problem-solving organizers."
  },
  'Advanced High': {
    listening: "Understands native-speed academic lectures, nuanced idioms, and complex analytical discussions comparable to native English peers.",
    speaking: "Speaks fluently with native-like prosody, precision vocabulary, and clear rhetorical structure during academic defense.",
    reading: "Comprehends complex informational and literary texts critically, inferring author perspective and technical nuance.",
    writing: "Produces fully structured, academically rigorous explanations and analytical essays with near-flawless mechanics and sophisticated syntax.",
    sentenceStems: [
      "The contextual narrative clearly indicates a joining relationship, as evidenced by the phrase _____.",
      "By deconstructing the relationship between the known terms (_____ and _____), we deduce that the unknown addend equals _____.",
      "A comparative analysis between addition and subtraction demonstrates that _____.",
      "Synthesizing the visual model with the algebraic equation substantiates that _____."
    ],
    graphicOrganizerTip: "Provide open-ended mathematical modeling canvases with metacognitive justification prompts."
  }
};

export const BILINGUAL_COGNATES_DATABASE: BilingualCognate[] = [
  {
    englishWord: "Addition",
    spanishWord: "Adición",
    isTrueCognate: true,
    englishPhonetic: "/əˈdɪʃ.ən/",
    spanishPhonetic: "/a.ðiˈsjon/",
    meaningExplanation: "The mathematical process of joining two or more quantities into a sum.",
    exampleSentence: "We use addition to combine 8 and 7 to make 15.",
    audioTtsAvailable: true
  },
  {
    englishWord: "Subtract / Subtraction",
    spanishWord: "Sustracción (Resta)",
    isTrueCognate: true,
    englishPhonetic: "/səbˈtræk.ʃən/",
    spanishPhonetic: "/sus.tɾakˈsjon/",
    meaningExplanation: "The mathematical process of separating or taking away an amount from a total.",
    exampleSentence: "Subtraction tells us how many apples remain after 5 are eaten.",
    audioTtsAvailable: true
  },
  {
    englishWord: "Equation",
    spanishWord: "Ecuación",
    isTrueCognate: true,
    englishPhonetic: "/ɪˈkweɪ.ʒən/",
    spanishPhonetic: "/e.kwaˈsjon/",
    meaningExplanation: "A mathematical statement that asserts the equality of two expressions (e.g., 8 + 7 = 15).",
    exampleSentence: "Write the equation with the missing addend in the box.",
    audioTtsAvailable: true
  },
  {
    englishWord: "Total",
    spanishWord: "Total",
    isTrueCognate: true,
    englishPhonetic: "/ˈtoʊ.təl/",
    spanishPhonetic: "/toˈtal/",
    meaningExplanation: "The entire amount or sum when everything is joined together.",
    exampleSentence: "The total number of animals in the barn is 15.",
    audioTtsAvailable: true
  },
  {
    englishWord: "Problem",
    spanishWord: "Problema",
    isTrueCognate: true,
    englishPhonetic: "/ˈprɑː.bləm/",
    spanishPhonetic: "/pɾoˈβle.ma/",
    meaningExplanation: "A question or story that requires mathematical investigation and a solution.",
    exampleSentence: "Let us read the math problem carefully to find the clues.",
    audioTtsAvailable: true
  },
  {
    englishWord: "Model",
    spanishWord: "Modelo",
    isTrueCognate: true,
    englishPhonetic: "/ˈmɑː.dəl/",
    spanishPhonetic: "/moˈðe.lo/",
    meaningExplanation: "A visual, pictorial, or physical representation of a concept.",
    exampleSentence: "Use your ten-frame as a model to represent 12.",
    audioTtsAvailable: true
  },
  {
    englishWord: "Compare",
    spanishWord: "Comparar",
    isTrueCognate: true,
    englishPhonetic: "/kəmˈper/",
    spanishPhonetic: "/kom.paˈɾaɾ/",
    meaningExplanation: "To examine two sets to determine which is greater, less, or equal.",
    exampleSentence: "Compare the red cubes and blue cubes to find the difference.",
    audioTtsAvailable: true
  },
  {
    englishWord: "Assist (Warning: False Cognate Trap)",
    spanishWord: "Ayudar (NOT 'Asistir')",
    isTrueCognate: false,
    englishPhonetic: "/əˈsɪst/",
    spanishPhonetic: "/a.ʝuˈðaɾ/",
    meaningExplanation: "To give help or support. ('Asistir' in Spanish means to attend an event!).",
    exampleSentence: "Can you assist your partner by passing the counters?",
    audioTtsAvailable: true
  }
];

export const STAAR_ALT_2_SAMPLE_CLUSTER: StaarAlt2StimulusCluster = {
  id: "alt2-math-1-3b",
  essenceStatement: "Identify representations of joining or separating sets of objects within 20.",
  prerequisiteSkillTeks: "TEKS K.3A: Model the action of joining to represent addition and separating to represent subtraction with objects.",
  gradeLevelTeks: "TEKS 1.3B: Word problems involving joining & separating sets up to 20.",
  conceptTitle: "Joining Sets (Addition Representation)",
  
  level3: {
    tier: 3,
    points: 2,
    scriptedTeacherTalk: "Look at the cards. [Teacher points to all 3 cards simultaneously]. Find the picture that shows joining sets together.",
    cards: [
      {
        id: "card-l3-correct",
        label: "3 Apples Joining 2 Apples (3 + 2 = 5)",
        emojiIcon: "🍎🍎🍎 ➕ 🍏🍏 ➡️ 🧺 (5)",
        isCorrect: true,
        description: "Picture showing 3 red apples and 2 green apples being put together in a basket."
      },
      {
        id: "card-l3-distract-1",
        label: "5 Apples Separating (5 - 2 = 3)",
        emojiIcon: "🧺 (5) ➡️ 🍎🍎 (Leaving)",
        isCorrect: false,
        description: "Picture showing apples being taken out of a basket."
      },
      {
        id: "card-l3-distract-2",
        label: "Single Apple (No Action)",
        emojiIcon: "🍎 (1)",
        isCorrect: false,
        description: "Picture showing 1 stationary apple."
      }
    ],
    scaffoldingNote: "Level 3: Independent unprompted response. If student touches correct card, award 2 points. If incorrect or no response within 10 seconds, move to Level 2."
  },
  
  level2: {
    tier: 2,
    points: 1,
    scriptedTeacherTalk: "Let's look again. [Teacher removes 1 distractor]. This card shows apples coming together into one basket. Point to the card that shows addition.",
    cards: [
      {
        id: "card-l2-correct",
        label: "3 Apples Joining 2 Apples (3 + 2 = 5)",
        emojiIcon: "🍎🍎🍎 ➕ 🍏🍏 ➡️ 🧺 (5)",
        isCorrect: true,
        description: "Picture showing 3 red apples and 2 green apples being put together."
      },
      {
        id: "card-l2-distract",
        label: "5 Apples Separating (5 - 2 = 3)",
        emojiIcon: "🧺 (5) ➡️ 🍎🍎 (Leaving)",
        isCorrect: false,
        description: "Picture showing apples leaving."
      }
    ],
    scaffoldingNote: "Level 2: Prompted response with 1 distractor eliminated and explicit verbal/visual cue. If correct, award 1 point. If incorrect, move to Level 1."
  },
  
  level1: {
    tier: 1,
    points: 0,
    scriptedTeacherTalk: "Watch me. [Teacher points to exemplar card]. This card shows addition: 3 plus 2 equals 5. [Teacher models touching]. Now touch the card that matches mine.",
    cards: [
      {
        id: "card-l1-match-1",
        label: "Teacher Exemplar: Joining Sets (3 + 2)",
        emojiIcon: "🍎🍎🍎 ➕ 🍏🍏 ➡️ 🧺",
        isCorrect: true,
        description: "Teacher's stimulus card."
      },
      {
        id: "card-l1-match-2",
        label: "Student Match Card: Joining Sets (3 + 2)",
        emojiIcon: "🍎🍎🍎 ➕ 🍏🍏 ➡️ 🧺",
        isCorrect: true,
        description: "Identical student match card directly below teacher card."
      }
    ],
    scaffoldingNote: "Level 1: Direct modeling with 1-to-1 stimulus matching. Student receives 0 points, but successfully participates in the instructional task."
  }
};

export const AAC_TILES_MASTER: AacTile[] = [
  // Core Words
  { id: "aac-want", label: "I Want", emoji: "🙋", category: "Core", speechPhrase: "I want", colorClass: "bg-amber-500/30 border-amber-400 text-amber-100" },
  { id: "aac-help", label: "Help", emoji: "❓", category: "Core", speechPhrase: "Help please", colorClass: "bg-rose-500/30 border-rose-400 text-rose-100" },
  { id: "aac-more", label: "More", emoji: "➕", category: "Core", speechPhrase: "More", colorClass: "bg-blue-500/30 border-blue-400 text-blue-100" },
  { id: "aac-stop", label: "Stop", emoji: "🛑", category: "Core", speechPhrase: "Stop", colorClass: "bg-red-500/30 border-red-400 text-red-100" },
  { id: "aac-yes", label: "Yes", emoji: "👍", category: "Core", speechPhrase: "Yes", colorClass: "bg-emerald-500/30 border-emerald-400 text-emerald-100" },
  { id: "aac-no", label: "No", emoji: "👎", category: "Core", speechPhrase: "No", colorClass: "bg-slate-700/50 border-slate-500 text-slate-200" },
  { id: "aac-go", label: "Go", emoji: "🏃", category: "Core", speechPhrase: "Go", colorClass: "bg-emerald-500/30 border-emerald-400 text-emerald-100" },
  { id: "aac-like", label: "I Like", emoji: "❤️", category: "Core", speechPhrase: "I like that", colorClass: "bg-pink-500/30 border-pink-400 text-pink-100" },

  // Needs & Regulation
  { id: "aac-break", label: "Break", emoji: "⏸️", category: "Needs", speechPhrase: "I need a break", colorClass: "bg-purple-500/30 border-purple-400 text-purple-100" },
  { id: "aac-water", label: "Water", emoji: "💧", category: "Needs", speechPhrase: "I need water", colorClass: "bg-cyan-500/30 border-cyan-400 text-cyan-100" },
  { id: "aac-toilet", label: "Restroom", emoji: "🚽", category: "Needs", speechPhrase: "I need to use the restroom", colorClass: "bg-blue-600/30 border-blue-400 text-blue-100" },
  { id: "aac-quiet", label: "Quiet Space", emoji: "🤫", category: "Needs", speechPhrase: "I need a quiet space", colorClass: "bg-indigo-500/30 border-indigo-400 text-indigo-100" },

  // Math & Academic
  { id: "aac-add", label: "Add (+)", emoji: "➕", category: "Math", speechPhrase: "Add together", colorClass: "bg-emerald-500/30 border-emerald-400 text-emerald-100" },
  { id: "aac-sub", label: "Subtract (-)", emoji: "➖", category: "Math", speechPhrase: "Subtract take away", colorClass: "bg-rose-500/30 border-rose-400 text-rose-100" },
  { id: "aac-equals", label: "Equals (=)", emoji: "🟰", category: "Math", speechPhrase: "Equals total", colorClass: "bg-amber-500/30 border-amber-400 text-amber-100" },
  { id: "aac-tenframe", label: "Ten Frame", emoji: "🧮", category: "Math", speechPhrase: "Use ten frame", colorClass: "bg-cyan-500/30 border-cyan-400 text-cyan-100" },
  { id: "aac-count", label: "Count", emoji: "🔢", category: "Math", speechPhrase: "Count the objects", colorClass: "bg-purple-500/30 border-purple-400 text-purple-100" },
  { id: "aac-correct", label: "Correct!", emoji: "⭐", category: "Math", speechPhrase: "That is correct", colorClass: "bg-yellow-500/30 border-yellow-400 text-yellow-100" },

  // Feelings
  { id: "aac-happy", label: "Happy", emoji: "😊", category: "Feelings", speechPhrase: "I feel happy", colorClass: "bg-yellow-500/30 border-yellow-400 text-yellow-100" },
  { id: "aac-frustrated", label: "Frustrated", emoji: "😤", category: "Feelings", speechPhrase: "I feel frustrated", colorClass: "bg-orange-500/30 border-orange-400 text-orange-100" },
  { id: "aac-tired", label: "Tired", emoji: "🥱", category: "Feelings", speechPhrase: "I am tired", colorClass: "bg-slate-700/50 border-slate-500 text-slate-200" },
  { id: "aac-proud", label: "Proud", emoji: "🤩", category: "Feelings", speechPhrase: "I did it! I am proud!", colorClass: "bg-indigo-500/30 border-indigo-400 text-indigo-100" },

  // Actions
  { id: "aac-look", label: "Look", emoji: "👁️", category: "Actions", speechPhrase: "Look here", colorClass: "bg-blue-500/30 border-blue-400 text-blue-100" },
  { id: "aac-listen", label: "Listen", emoji: "👂", category: "Actions", speechPhrase: "Listen to teacher", colorClass: "bg-emerald-500/30 border-emerald-400 text-emerald-100" },
  { id: "aac-draw", label: "Draw", emoji: "✏️", category: "Actions", speechPhrase: "Draw on mat", colorClass: "bg-purple-500/30 border-purple-400 text-purple-100" },
  { id: "aac-check", label: "Check Work", emoji: "✅", category: "Actions", speechPhrase: "Check my work", colorClass: "bg-teal-500/30 border-teal-400 text-teal-100" }
];

export const INITIAL_VISUAL_SCHEDULE: VisualScheduleTask[] = [
  { id: "task-1", title: "1. Watch Teacher Story Demo (I Do)", description: "Listen as teacher demonstrates with red/blue cubes on 10-frame.", emoji: "👀", isCompleted: true, durationMinutes: 5 },
  { id: "task-2", title: "2. Partner Math Mat Play (We Do)", description: "Place cubes on desk mat with partner and find the missing number.", emoji: "🤝", isCompleted: false, durationMinutes: 10 },
  { id: "task-3", title: "3. Complete 2 Practice Problems (You Do)", description: "Draw circles on worksheet and write the addition equation.", emoji: "✏️", isCompleted: false, durationMinutes: 10 },
  { id: "task-4", title: "4. Preferred Reward Activity (Then)", description: "5 minutes free play on iPad Math Game or sensory zone.", emoji: "🎮", isCompleted: false, durationMinutes: 5 }
];

export const EXEMPLARY_DIFFERENTIATED_LESSON_PLAN: DifferentiatedLessonPlan = {
  standardCode: "TEKS 1.3B",
  standardTitle: "Joining and Separating Word Problems (Up to 20)",
  swbatGeneral: "SWBAT represent and solve 1-step word problems involving joining and separating sets within 20 with 80% accuracy.",
  swbatSpedTier3: "SWBAT model joining and separating stories within 20 using dual ten-frame manipulative mats, red/blue counters, and color-coded equation frames with 80% accuracy across 4 trials.",
  swbatEbLinguistic: "SWBAT verbalize math reasoning using tiered sentence stems ('First there were ___, then ___ joined, now there are ___') in English/Spanish cognates with 80% accuracy.",
  udlEngagement: [
    "Choice of manipulatives (linking cubes, magnetic fruit counters, tactile buttons)",
    "Real-world Texas anchor story: Counting farm animals entering a barn",
    "5-Star Token Economy board with positive reinforcement feedback"
  ],
  udlRepresentation: [
    "Dual-modality: Babel text-to-speech audio read-aloud + visual pictorial 10-frame mats",
    "High-contrast color-coded operation symbols (Green + for join, Red - for separate)",
    "Spanish/English bilingual cognate cards (Adición ↔ Addition, Total ↔ Total)"
  ],
  udlActionExpression: [
    "Interactive AAC speech-output board for non-verbal / speech-delayed articulation",
    "Choice to sketch circle models on dry-erase mats or point to touch-screen stimulus cards",
    "Oral scribing by educator for students with dysgraphia"
  ],
  designatedSupports: [
    "Oral administration of all text",
    "Frequent 2-minute motor/sensory breaks",
    "Calculation aid: Dual 10-frame visual anchor mat",
    "Extra response processing time (minimum 7-10 seconds)",
    "Spelling and mechanics waived on content-area math assessments"
  ],
  telpasSentenceStemsByTier: {
    'Beginning': [
      "It is _____.",
      "I see _____ apples."
    ],
    'Intermediate': [
      "First there were _____ apples.",
      "Then _____ joined the basket.",
      "Now there are _____ in total."
    ],
    'Advanced': [
      "According to the story, _____ were added to the initial set of _____.",
      "The equation _____ + _____ = _____ models the total quantity."
    ],
    'Advanced High': [
      "The contextual narrative clearly indicates a joining operation where the unknown addend equals _____."
    ]
  },
  aacKeyVocab: ["I Want", "Help", "Add (+)", "Subtract (-)", "Ten Frame", "Equals", "Check Work"],
  staarAlt2Essence: "Identify representations of joining or separating sets of objects within 20."
};

import { COMPREHENSIVE_K12_STANDARDS } from './standardsCatalog';

export const MASTER_STANDARDS_CATALOG: StandardItem[] = COMPREHENSIVE_K12_STANDARDS;


