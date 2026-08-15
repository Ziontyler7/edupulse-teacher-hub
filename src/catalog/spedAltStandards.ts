import { StandardItem } from "../types";

export const SPED_ALT_STANDARDS_CATALOG: StandardItem[] = [
  // STAAR Alt 2 Elementary Math
  {
    id: "alt2-elem-math-1",
    state: "TX",
    stateSystem: "TEKS",
    grade: "Elementary (K-5)",
    subject: "Mathematics",
    code: "STAAR Alt 2 Math (TEKS 1.3B Essence)",
    title: "Joining and Separating Sets of Objects Within 20",
    description: "Identify representations of joining or separating sets of concrete objects and pictorial representations within 20 using standardized 3-tier stimulus cueing.",
    swbatObjective: "SWBAT identify pictorial representations of joining sets (3 + 2 = 5) from a 3-choice stimulus array using standardized Level 3, Level 2, or Level 1 cueing with 80%+ accuracy across 4 trials.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS K.3A Prereq", title: "Model the action of joining to represent addition with objects" }],
      futureExtensionCodes: [{ code: "TEKS 2.4C Prereq", title: "Solve one-step word problems involving joining and separating" }]
    },
    realWorldConnections: [
      "Putting sliced fruit together on a snack plate.",
      "Gathering crayons into a shared art supply bin.",
      "Combining coats on hallway coat hooks."
    ],
    sentenceStems: [
      "I see _____ apples joining _____ apples.",
      "When we put them together in the basket, there are _____ apples in total.",
      "This picture shows joining because the items are coming together."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will recognize that the action of joining sets increases total quantity.",
      stage2AssessmentEvidence: "TEA Standardized 3-Tier Stimulus Protocol (Level 3: 3 cards, unprompted = 2pts; Level 2: 2 cards, modeled prompt = 1pt; Level 1: 1-to-1 match = 0pts).",
      stage3LearningPlanSequence: "Tactile manipulative play -> 3-Card Stimulus Selection -> AAC Speech Button Feedback."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher places 3 red apples and 2 green apples on a felt mat, pushes them together into a basket, and points to the matching card while saying: 'Find the picture that shows joining sets together.'",
      weDoGuidedPractice: "Teacher guides student's hand to point to the joining card, providing descriptive praise.",
      youDoTogetherCollaborative: "Student practices with peer/paraprofessional using tactile button counters.",
      youDoAloneIndependentMastery: "Student completes the 4-item standardized STAAR Alt 2 stimulus cluster."
    },
    dokQuestions: {
      dok1Recall: "Touch the card that shows apples going into the basket.",
      dok2SkillConcept: "How does putting 3 and 2 together make 5?",
      dok3StrategicThinking: "Which card shows apples leaving the basket (separating)?",
      dok4ExtendedThinking: "Can you use your counting bears to show the same joining story?"
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Level 3: Independent response from 3-card stimulus array (2 points).",
        "Level 2: Reduced array (2 cards) with teacher pointing prompt (1 point).",
        "Level 1: Direct 1-to-1 matching to teacher exemplar stimulus (0 points, full participation)."
      ],
      commonMisconceptions: [
        { flaw: "Selecting the card showing objects leaving (subtraction) due to visual complexity.", correctionPath: "Cover the leaving arrow and use hand-over-hand motion moving toward the basket." }
      ],
      interventionTip: "Use high-contrast yellow/black border overlays on the target stimulus card."
    },
    studentStrategy: {
      anchorTitle: "The Joining Sets Touch Mat",
      visualHook: "🍎🍎🍎 (3) ➕ 🍏🍏 (2) ➡️ 🧺 (5) ➡️ 👆 Touch Joining Card!",
      stepByStepGuide: [
        "1. Look at the teacher's stimulus cards.",
        "2. Find the picture where items are coming TOGETHER into the basket.",
        "3. Touch or point to the correct card with your finger or AAC switch.",
        "4. Press the 'Add' speech button!"
      ],
      selfCheckChecklist: [
        "Did I look at all the choices?",
        "Did I choose the card where items join together?",
        "Did I press my communication switch?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Look at the cards. [Teacher displays 3 cards simultaneously]. Find the picture that shows joining sets together: Card A (3 apples + 2 apples going into basket), Card B (5 apples leaving basket), Card C (1 single stationary apple).",
      answerChoices: [
        "A) 3 Apples Joining 2 Apples in Basket (3 + 2 = 5)",
        "B) 5 Apples Separating and Leaving",
        "C) 1 Single Stationary Apple"
      ],
      correctAnswer: "A) 3 Apples Joining 2 Apples in Basket (3 + 2 = 5)",
      teacherExemplarExplanation: "Card A shows the physical action of two groups of apples being combined together into a central basket, representing joining (addition)."
    },
    worksheets: [
      {
        id: "ws-alt2math1-1",
        title: "STAAR Alt 2 Math: Joining Sets Stimulus Cards",
        type: "Graphic Organizer",
        estimatedTimeMin: 15,
        previewContent: "1. 3-Card Stimulus Sheet for Level 3 administration.\n2. Level 2 Two-Card reduced field template."
      }
    ]
  },

  // STAAR Alt 2 High School Functional Math
  {
    id: "alt2-hs-math-1",
    state: "TX",
    stateSystem: "TEKS",
    grade: "High School (9-12)",
    subject: "Mathematics",
    code: "STAAR Alt 2 Math (TEKS Alg 1.5A Essence)",
    title: "Next Dollar Up Strategy & Functional Financial Literacy",
    description: "Determine the total whole dollar amount required to purchase items with decimals using the 'Next Dollar Up' strategy in real-world consumer transactions.",
    swbatObjective: "SWBAT apply the 'Next Dollar Up' strategy to identify the number of one-dollar bills required to purchase items priced up to $10.00 (e.g., $3.45 -> $4.00) with 85%+ accuracy across 5 trials.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS 1.4A Prereq", title: "Identify U.S. coins and currency bills" }],
      futureExtensionCodes: [{ code: "TEKS Functional Life Skills", title: "Execute independent retail transactions in the community" }]
    },
    realWorldConnections: [
      "Buying a drink and snack at the grocery store checkout register.",
      "Purchasing a bus transit pass with paper currency.",
      "Paying for a movie theater ticket independently."
    ],
    sentenceStems: [
      "The item costs $_____._____.",
      "Because there are extra cents, I need to give the next dollar up, which is $_____.",
      "I hand the cashier _____ one-dollar bills."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will master independent financial transactions using the functional Next Dollar Up strategy to purchase everyday necessities without needing exact change.",
      stage2AssessmentEvidence: "Classroom Mock Store Checkout Simulation where the student pays for 4 distinct food items with dollar bills using Next Dollar Up.",
      stage3LearningPlanSequence: "Price Tag Reading -> Dollar Line Tracing -> Next Dollar Up Cashier Simulation."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher points to a price tag of $3.25, traces on a number line from 3 to 4, and says: 'The price has dollars ($3) and some cents (.25). To pay, we always give 1 more dollar: $4.00!' and counts out 4 dollar bills.",
      weDoGuidedPractice: "Class practices with price tags on desk grocery items ($5.80 -> $6.00, $2.10 -> $3.00), counting bills onto desks.",
      youDoTogetherCollaborative: "Student pairs role-play customer and cashier using play currency registers.",
      youDoAloneIndependentMastery: "Student completes the 5-item Next Dollar Up matching and cashier check."
    },
    dokQuestions: {
      dok1Recall: "If an item costs $4.00 exactly (no cents), how many dollar bills do you need?",
      dok2SkillConcept: "If an item costs $4.25, why is giving $4.00 not enough money?",
      dok3StrategicThinking: "A sandwich costs $6.49. Point to the number of dollar bills you need to hand the cashier.",
      dok4ExtendedThinking: "Plan a lunch order with a $2.50 juice and a $4.25 sandwich. How many dollars do you need for each?"
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: The 'Dollar Plus One' Rule: [Dollar Number on Tag] ➕ 1 Extra Dollar for Cents = Total Bills Needed.",
        "Step 2: Number Line Slider highlighting the whole number immediately above the price.",
        "Step 3: Concrete currency counting (hand-over-hand sliding of physical $1 bills)."
      ],
      commonMisconceptions: [
        { flaw: "Giving only the whole dollar amount shown on the tag (e.g. giving $3 for a $3.75 item and being short).", correctionPath: "Point to the cents: 'The cents mean you need MORE than $3! Always jump up to the Next Dollar: $4!'" }
      ],
      interventionTip: "Use physical dollar bill wallets with numbered bill slots 1 through 10."
    },
    studentStrategy: {
      anchorTitle: "The Next Dollar Up Wallet",
      visualHook: "🏷️ Price: $3.45 ➡️ 🔍 Look at $3 ➕ Cents ➡️ 💵 Give $4.00 (Next Dollar Up) ➡️ 🛍️ Item Purchased!",
      stepByStepGuide: [
        "1. Look at the price tag.",
        "2. Find the whole dollar number before the period (e.g., $3).",
        "3. Look after the period: Are there cents (.45)?",
        "4. If yes: Add ONE more dollar! (3 + 1 = 4).",
        "5. Count out 4 one-dollar bills and hand to the cashier!",
        "6. Wait for your change and receipt!"
      ],
      selfCheckChecklist: [
        "Did I check for cents after the dot?",
        "Did I add 1 extra dollar for the cents?",
        "Did I count my dollar bills carefully?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "A student wants to buy a bottle of apple juice that costs $2.65. Using the 'Next Dollar Up' strategy, how many one-dollar bills should the student give the cashier?",
      answerChoices: [
        "A) 2 one-dollar bills ($2.00)",
        "B) 3 one-dollar bills ($3.00)",
        "C) 1 one-dollar bill ($1.00)",
        "D) 10 one-dollar bills ($10.00)"
      ],
      correctAnswer: "B) 3 one-dollar bills ($3.00)",
      teacherExemplarExplanation: "The price is $2.65. Since $2.00 is not enough to cover the extra 65 cents, the student gives the next whole dollar up: 3 one-dollar bills ($3.00)."
    },
    worksheets: [
      {
        id: "ws-alt2hsmath1-1",
        title: "STAAR Alt 2 / Life Skills: Next Dollar Up Strategy",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. Match price tags to required dollar bills ($4.30 ↔ 5 bills, $7.15 ↔ 8 bills).\n2. Grocery store receipt calculation."
      }
    ]
  },

  // STAAR Alt 2 Middle School Science
  {
    id: "alt2-ms-sci-1",
    state: "TX",
    stateSystem: "TEKS",
    grade: "Middle School (6-8)",
    subject: "Natural Sciences",
    code: "STAAR Alt 2 Science (TEKS 6.6A Essence)",
    title: "States of Matter & Thermal Energy Phase Changes",
    description: "Identify representations of solids, liquids, and gases and observable phase changes caused by thermal heat energy using 3-tier stimulus cues.",
    swbatObjective: "SWBAT identify the solid, liquid, and gas state of water (ice, water, steam) and match heating/cooling temperature causes with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS 2.5A Prereq", title: "Classify matter by physical properties including temperature" }],
      futureExtensionCodes: [{ code: "TEKS 8.5A Prereq", title: "Describe atomic structure and chemical properties" }]
    },
    realWorldConnections: [
      "Watching an ice cube melt in a drinking glass on a hot summer day.",
      "Seeing steam rise from a warm bowl of soup.",
      "Observing breath condensing into mist on a cold winter morning."
    ],
    sentenceStems: [
      "When we heat ice, it melts into _____.",
      "When water gets very hot, it boils into _____.",
      "Ice is a _____, water is a _____, and steam is a _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that adding or removing heat energy changes matter between solid, liquid, and gas states.",
      stage2AssessmentEvidence: "States of Matter 3-Tier Stimulus Protocol identifying the liquid state of water.",
      stage3LearningPlanSequence: "Sensory ice melting lab -> Steam kettle visual demonstration -> 3-Card Stimulus sorting."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher places an ice cube on a warm hot-plate, shows it melting into liquid water, and points to the matching solid/liquid picture card while saying: 'Find the picture of water in the liquid state.'",
      weDoGuidedPractice: "Students feel an ice cube melting in their hands, naming the phase change with teacher guidance.",
      youDoTogetherCollaborative: "Student pairs sort photo cards of icebergs, rivers, and clouds into Solid, Liquid, and Gas bins.",
      youDoAloneIndependentMastery: "Student completes the 3-item STAAR Alt 2 state of matter stimulus assessment."
    },
    dokQuestions: {
      dok1Recall: "What happens to ice when you put it in the warm sun?",
      dok2SkillConcept: "Is a glass of drinking water a solid, liquid, or gas?",
      dok3StrategicThinking: "Which card shows water turning into steam when heated?",
      dok4ExtendedThinking: "Draw what happens to an ice pop if you leave it on the kitchen counter for an hour."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Level 3: Independent response from 3-card array (Ice cube, Water glass, Steam kettle).",
        "Level 2: Reduced 2-card field with teacher gestural cue.",
        "Level 1: Direct 1-to-1 tactile matching with an actual cup of water."
      ],
      commonMisconceptions: [
        { flaw: "Believing that steam is smoke rather than water vapor gas.", correctionPath: "Hold a cool metal spoon over steam to show liquid water droplets condensing." }
      ],
      interventionTip: "Use physical tactile sensory ice bags and warm gel packs."
    },
    studentStrategy: {
      anchorTitle: "The 3 States of Water Mat",
      visualHook: "🧊 Solid (Hard Ice) ➡️ (➕ Heat) ➡️ 💧 Liquid (Water) ➡️ (➕ Heat) ➡️ 💨 Gas (Steam)!",
      stepByStepGuide: [
        "1. Look at the water.",
        "2. Is it frozen hard like a rock? ➡️ SOLID (Ice).",
        "3. Does it flow and splash in a cup? ➡️ LIQUID (Water).",
        "4. Does it float up into the air? ➡️ GAS (Steam).",
        "5. Touch the matching card!"
      ],
      selfCheckChecklist: [
        "Did I check if it is hard, flowing, or floating?",
        "Did I choose the liquid card for flowing water?",
        "Did I press my AAC communication switch?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Look at the cards. [Teacher displays 3 cards]. Find the picture of water in the LIQUID state: Card A (Ice Cube), Card B (Glass of Drinking Water), Card C (Steam Rising from Kettle).",
      answerChoices: [
        "A) Ice Cube (Solid)",
        "B) Glass of Drinking Water (Liquid)",
        "C) Steam Rising from Kettle (Gas)"
      ],
      correctAnswer: "B) Glass of Drinking Water (Liquid)",
      teacherExemplarExplanation: "A glass of drinking water is water in the flowing liquid state, whereas an ice cube is solid and steam is gas."
    },
    worksheets: [
      {
        id: "ws-alt2mssci1-1",
        title: "STAAR Alt 2 Science: States of Matter Stimulus Suite",
        type: "Practice",
        estimatedTimeMin: 15,
        previewContent: "1. 3-Card Stimulus Sheet for Liquid vs Solid identification.\n2. Cut-and-paste sorting mat for Ice, Water, Steam."
      }
    ]
  }
];
