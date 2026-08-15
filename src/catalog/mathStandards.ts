import { StandardItem } from "../types";

export const MATH_STANDARDS_CATALOG: StandardItem[] = [
  // PK Math
  {
    id: "teks-pk-math-1",
    state: "TX",
    stateSystem: "TEKS",
    grade: "Pre-K",
    subject: "Mathematics",
    code: "TEKS PK.V.A.1",
    title: "Child counts up to 10 items and demonstrates one-to-one correspondence",
    description: "Child uses verbal numbers up to 10 in sequence and counts objects by touching each item one by one to determine 'how many'.",
    swbatObjective: "SWBAT count up to 10 concrete counters (teddy bears/buttons) using 1-to-1 touch-and-point correspondence and state the cardinality of the set with 90% accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "PK.M.0", title: "Recite number words 1-5" }],
      futureExtensionCodes: [{ code: "TEKS K.2B", title: "Read, write, and represent numbers 0-20" }]
    },
    realWorldConnections: [
      "Counting apple slices on a snack plate.",
      "Counting shoes before putting them on feet.",
      "Counting how many friends are sitting at the coloring table."
    ],
    sentenceStems: [
      "I touch each block and say: 1, 2, 3...",
      "There are _____ blocks in total.",
      "When I count, the last number I say is _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Children will understand that counting follows a stable order, each object gets exactly one number tag, and the last number tells the total amount (cardinality).",
      stage2AssessmentEvidence: "Counting bowl performance task where the child counts 8 plastic counting bears into a cup.",
      stage3LearningPlanSequence: "Tactile counting sequence: Finger tracing -> Felt board object placing -> Count and freeze game."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher places 6 large yellow counting ducks in a line, touches each duck head firmly while saying '1, 2, 3, 4, 5, 6!', and circles the whole group saying 'There are 6 ducks!'.",
      weDoGuidedPractice: "Teacher and children count 5 clapping rhythm blocks together, moving each block across a finish line tape.",
      youDoTogetherCollaborative: "Child pairs build towers of 7 linking cubes and count the cubes together using touch-and-count pointers.",
      youDoAloneIndependentMastery: "Child demonstrates counting a set of 8 animal counters to the educator."
    },
    dokQuestions: {
      dok1Recall: "What number comes after 4 when we count?",
      dok2SkillConcept: "Why do we only touch each teddy bear one time when counting?",
      dok3StrategicThinking: "If you have 4 cars and your friend gives you 1 more car, how can you count to find how many cars you have now?",
      dok4ExtendedThinking: "Can you arrange 6 blocks in a line, a circle, and a tower? Do you still have 6 blocks each time?"
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Physical sliding — Slide each counter across a line to prevent double-counting.",
        "Step 2: Counting Mat — Place one counter into each designated circular ring.",
        "Step 3: Number Path — Touch numerals on a floor path while stepping."
      ],
      commonMisconceptions: [
        { flaw: "Saying number words faster than pointing to objects.", correctionPath: "Use a slow drum beat or clapping rhythm to synchronize the child's finger touch with spoken words." }
      ],
      interventionTip: "Use textured dot mats where the child presses down firmly on each tactile raised dot."
    },
    studentStrategy: {
      anchorTitle: "The Touch-and-Count Finger",
      visualHook: "👆 Point Once -> 🗣️ Say Number -> ➡️ Slide Over -> 🐻 Total Count!",
      stepByStepGuide: [
        "1. Line up your counting toys.",
        "2. Put your pointer finger on the first toy.",
        "3. Touch and say '1'.",
        "4. Move to the next toy and say '2'.",
        "5. The last number you say is your answer!"
      ],
      selfCheckChecklist: [
        "Did I touch every toy once?",
        "Did I skip any toys in the line?",
        "Did I say the numbers in order?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Look at the picture of 5 rubber ducks in a row: 🦆 🦆 🦆 🦆 🦆. How many ducks are there?",
      answerChoices: ["A) 3 ducks", "B) 4 ducks", "C) 5 ducks", "D) 6 ducks"],
      correctAnswer: "C) 5 ducks",
      teacherExemplarExplanation: "Touching each duck from left to right: 1, 2, 3, 4, 5. The total count is 5 ducks."
    },
    worksheets: [
      {
        id: "ws-pkmath-1",
        title: "Pre-K Math: Touch & Count Animals (1-10)",
        type: "Practice",
        estimatedTimeMin: 10,
        previewContent: "1. Touch and count the 6 frogs. Circle the number 6.\n2. Color 4 stars on the counting strip."
      }
    ]
  },

  // Kindergarten Math
  {
    id: "teks-k-2b",
    state: "TX",
    stateSystem: "TEKS",
    grade: "Kindergarten",
    subject: "Mathematics",
    code: "TEKS K.2B",
    title: "Counting & Representing Quantities (0-20)",
    description: "Read, write, and represent whole numbers from 0 to at least 20 with and without objects or pictures.",
    swbatObjective: "SWBAT count, read, and represent quantities 0-20 using ten-frame mats and concrete counters with 90%+ one-to-one correspondence accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "PK.V.A.1", title: "Rote counting 1-10 and subitizing small sets" }],
      futureExtensionCodes: [{ code: "TEKS 1.2B", title: "Represent numbers up to 120 using place value blocks" }]
    },
    realWorldConnections: [
      "Counting snacks (grapes, crackers) during lunch time.",
      "Keeping track of crayons in a colored pencil box.",
      "Counting how many students are in line for the swings."
    ],
    sentenceStems: [
      "I counted _____ objects in the group.",
      "The number _____ represents this set.",
      "One more than _____ is _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that numbers represent precise discrete quantities and that counting requires one-to-one correspondence.",
      stage2AssessmentEvidence: "Counting mat performance task where students place counters to match 5 flashcard numerals 1-20.",
      stage3LearningPlanSequence: "Play-based tactile sequence moving from finger counting to bead strings to ten-frame mats."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher points to the numeral 12, touches each counter on an oversized magnetic ten-frame while counting aloud, and writes '12'.",
      weDoGuidedPractice: "Teacher says a number (e.g. 7), and students place 7 teddy bear counters on their desk mats with teacher check.",
      youDoTogetherCollaborative: "Student pairs roll a 20-sided die and take turns building the matching number on their dual ten-frame mats.",
      youDoAloneIndependentMastery: "Students complete the numeral-to-quantity drawing match worksheet."
    },
    dokQuestions: {
      dok1Recall: "What number comes right after 9 when counting?",
      dok2SkillConcept: "How does filling a ten-frame help you see that 14 is 10 and 4 more?",
      dok3StrategicThinking: "If you have 8 counters, how many more do you need to make 10? Prove it on your mat.",
      dok4ExtendedThinking: "Create a counting book showing groups of objects from 1 to 20 found in our classroom."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Point and slide tactile counters across a dividing line.",
        "Step 2: Place counters in standard 5-frame and 10-frame configurations.",
        "Step 3: Match physical objects to written numeral cards."
      ],
      commonMisconceptions: [
        { flaw: "Counting objects faster than pointing (skipping numbers).", correctionPath: "Enforce 'Touch & Count' rhythm using a chime or clap per object." }
      ],
      interventionTip: "Use textured number cards with sandpaper numerals for multi-sensory tracing."
    },
    studentStrategy: {
      anchorTitle: "The Point-and-Count Detective",
      visualHook: "👉 Touch One -> 🗣️ Say Number -> 🔟 Fill Ten-Frame -> ✏️ Write Numeral!",
      stepByStepGuide: [
        "1. Line up your objects in a row.",
        "2. Touch each object ONE time as you count.",
        "3. Move the counted item to the ten-frame.",
        "4. The last number you say is HOW MANY!"
      ],
      selfCheckChecklist: [
        "Did I touch every item once?",
        "Did I stop at the last object?",
        "Does my ten-frame match my number?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Look at the ten-frame shown: One full 10-frame and 4 extra dots in the second frame. What number does this represent?",
      answerChoices: ["A) 4", "B) 10", "C) 14", "D) 24"],
      correctAnswer: "C) 14",
      teacherExemplarExplanation: "A full 10-frame represents 10, plus 4 extra dots in the second frame equals 14."
    },
    worksheets: [
      {
        id: "ws-k2b-1",
        title: "Kindergarten Math: Ten-Frame Quantity Match",
        type: "Practice",
        estimatedTimeMin: 10,
        previewContent: "1. Draw dots in the ten-frame to show 8.\n2. Count the stars and circle the matching number: 13."
      }
    ]
  },

  // 1st Grade Math
  {
    id: "teks-1-3b",
    state: "TX",
    stateSystem: "TEKS",
    grade: "1st Grade",
    subject: "Mathematics",
    code: "TEKS 1.3B",
    title: "Word Problems Involving Joining & Separating (Up to 20)",
    description: "Use objects and pictorial models to solve word problems involving joining, separating, and comparing sets within 20 and unknowns as any of the terms in the equation.",
    swbatObjective: "SWBAT represent and solve 1-step joining and separating word problems within 20 using ten-frames, pictorial circle models, and missing addend equations with 80%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [
        { code: "TEKS K.2B", title: "Read, write, and represent numbers 0-20 with objects" },
        { code: "TEKS K.3A", title: "Model joining and separating sets using concrete objects" }
      ],
      futureExtensionCodes: [
        { code: "TEKS 2.4C", title: "Multi-step addition and subtraction word problems within 1,000" }
      ]
    },
    realWorldConnections: [
      "Counting items in your grocery basket at H-E-B.",
      "Sharing playground toys at recess with friends.",
      "Tracking farm animals entering or exiting a barn gate."
    ],
    sentenceStems: [
      "I know this is a _____ (joining / separating) story because the action word is _____.",
      "My starting amount is _____, and when _____ items leave, I have _____ left.",
      "The missing number in my equation is _____ because _____ + _____ = _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that addition represents joining quantities while subtraction represents separating or comparing quantities.",
      stage2AssessmentEvidence: "Formative Pre/Post-Test assessment consisting of 5 contextual story problems requiring drawn 10-frames and written equations.",
      stage3LearningPlanSequence: "3-day scaffolded sequence moving from concrete manipulative play to pictorial sketching to missing addend equations."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher reads story aloud, places 14 red linking cubes on a dual ten-frame, physically removes 5 cubes to demonstrate separation, and writes 14 - 5 = 9.",
      weDoGuidedPractice: "Teacher and class co-create a story about picking apples. Students work with partners to place counters on desk mats.",
      youDoTogetherCollaborative: "Student pairs draw a story card, sketch a pictorial circle model on dry-erase mats, circle action words, and write missing addend equations.",
      youDoAloneIndependentMastery: "Students complete 4 independent story problem tasks on their TEKS 1.3B practice sheet."
    },
    dokQuestions: {
      dok1Recall: "What sign (+ or -) do we use when items leave a group?",
      dok2SkillConcept: "How does drawing a 10-frame help us solve a missing addend problem like 8 + ? = 15?",
      dok3StrategicThinking: "If Sarah says 12 - 5 = 8, how can you use addition to prove whether Sarah is correct or incorrect?",
      dok4ExtendedThinking: "Create your own math story about farm animals where 6 animals join a barn and total becomes 18. Write equation and explain strategy."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Concrete — Use physical red/blue math link cubes on dual 10-frames.",
        "Step 2: Pictorial — Draw circle sketches, box total, and cross out items.",
        "Step 3: Abstract — Connect pictorial sketches directly to missing addend equations."
      ],
      commonMisconceptions: [
        {
          flaw: "Assuming 'how many more' always means addition.",
          correctionPath: "Have student line up two rows of cubes side-by-side to visually compare the extra difference."
        }
      ],
      interventionTip: "Give student Red cubes for starting quantity and Blue cubes for added items."
    },
    studentStrategy: {
      anchorTitle: "The Math Story Detective & 10-Frame Mat",
      visualHook: "🔍 Read Story -> 🟩 Circle Numbers -> 🎬 Box Action Word (Joined/Left) -> ✏️ Draw & Check!",
      stepByStepGuide: [
        "1. Read the story problem twice.",
        "2. Circle the numbers you hear.",
        "3. Find the action word: Did items COME (Add) or GO (Subtract)?",
        "4. Draw circles on your 10-frame mat.",
        "5. Count total and write your equation!"
      ],
      selfCheckChecklist: [
        "Did I draw the correct starting number?",
        "Did I add or cross out the right amount?",
        "Does my answer make sense with the story?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Farmer Sarah had 8 apples in a basket. She picked some more apples from the tree. Now she has 15 apples in total. How many apples did Sarah pick from the tree?",
      answerChoices: ["A) 5 apples", "B) 7 apples", "C) 8 apples", "D) 23 apples"],
      correctAnswer: "B) 7 apples",
      teacherExemplarExplanation: "Equation: 8 + ? = 15. Count up from 8 to 15 (8 + 7 = 15). Sarah picked 7 apples."
    },
    worksheets: [
      {
        id: "ws-13b-1",
        title: "1st Grade Math: Farm Story Problems (TEKS 1.3B)",
        type: "Practice",
        estimatedTimeMin: 15,
        previewContent: "1. Farmer Sarah had 8 apples. She picked 6 more. How many apples in total?\n2. There were 14 chicks in the barn. 5 ran outside. How many chicks stayed inside?"
      }
    ]
  },

  // 2nd Grade Math
  {
    id: "ccss-2-oa-1",
    state: "US",
    stateSystem: "CCSS",
    grade: "2nd Grade",
    subject: "Mathematics",
    code: "CCSS.MATH.2.OA.A.1",
    title: "Addition & Subtraction Word Problems Within 100",
    description: "Use addition and subtraction within 100 to solve one- and two-step word problems involving situations of adding to, taking from, putting together, taking apart, and comparing, with unknowns in all positions.",
    swbatObjective: "SWBAT solve two-step word problems within 100 by drawing tape diagrams (bar models) and writing two-step equations with 80%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [
        { code: "CCSS.1.OA.A.1", title: "Solve word problems within 20" },
        { code: "CCSS.2.NBT.B.5", title: "Fluently add and subtract within 100 using strategies" }
      ],
      futureExtensionCodes: [
        { code: "CCSS.3.OA.D.8", title: "Solve two-step word problems using the four operations" }
      ]
    },
    realWorldConnections: [
      "Budgeting pocket money at the school book fair.",
      "Calculating remaining battery percentage on a tablet.",
      "Keeping score during a two-quarter basketball game."
    ],
    sentenceStems: [
      "In Step 1, I need to find _____ by calculating _____.",
      "In Step 2, I take my first answer (_____) and _____ it with _____.",
      "The total unknown represents _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that complex problems can be broken down into discrete sequential steps using bar models.",
      stage2AssessmentEvidence: "Formative rubric assessing student bar model accuracy and two-step equation formulation.",
      stage3LearningPlanSequence: "Tape diagram workshop moving from single-step comparisons to chained two-step stories."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher reads a 2-step story problem about tickets, models drawing a labeled two-part tape diagram, and solves each step aloud.",
      weDoGuidedPractice: "Students co-create a tape diagram on individual whiteboards for a story about baking cookies.",
      youDoTogetherCollaborative: "Student partners receive a 2-step challenge card and build matching bar models with colored base-10 strips.",
      youDoAloneIndependentMastery: "Students solve 4 independent two-step problems on their CCSS 2.OA.1 assessment sheet."
    },
    dokQuestions: {
      dok1Recall: "What is the first step in solving a two-step word problem?",
      dok2SkillConcept: "How does a tape diagram show whether you need to add or subtract?",
      dok3StrategicThinking: "If a problem asks 'How many more red marbles than green marbles are left?', what two operations must you perform?",
      dok4ExtendedThinking: "Write a two-step word problem where the answer is 42 and requires both addition and subtraction."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Color-code Step 1 in Blue and Step 2 in Orange.",
        "Step 2: Require students to write the question for Step 1 before calculating Step 2.",
        "Step 3: Use base-10 blocks to verify double-digit regrouping."
      ],
      commonMisconceptions: [
        {
          flaw: "Stopping after completing Step 1 and writing that as the final answer.",
          correctionPath: "Teach the 'Stop Sign Check' where students re-read the final question sentence to confirm if the answer matches the prompt."
        }
      ],
      interventionTip: "Use physical paper tape strips that students cut and join to represent part-whole relationships."
    },
    studentStrategy: {
      anchorTitle: "The Two-Step Tape Diagram Blueprint",
      visualHook: "🟦 Step 1 (Hidden Question) -> 🟧 Step 2 (Final Goal) -> ✅ Re-read & Confirm!",
      stepByStepGuide: [
        "1. Read the whole story.",
        "2. Find the HIDDEN question (Step 1).",
        "3. Draw your tape diagram and solve Step 1.",
        "4. Use that answer to solve the FINAL question (Step 2).",
        "5. Label your units!"
      ],
      selfCheckChecklist: [
        "Did I solve BOTH steps of the problem?",
        "Did I label my units (e.g., cookies, dollars)?",
        "Does my answer make sense?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Marcus had 45 baseball cards. He gave 18 cards to his brother. Then Marcus bought a pack of 25 new cards. How many baseball cards does Marcus have now?",
      answerChoices: ["A) 27 cards", "B) 52 cards", "C) 70 cards", "D) 88 cards"],
      correctAnswer: "B) 52 cards",
      teacherExemplarExplanation: "Step 1: 45 - 18 = 27 cards left. Step 2: 27 + 25 = 52 cards in total. Marcus has 52 cards."
    },
    worksheets: [
      {
        id: "ws-2oa1-1",
        title: "2nd Grade Math: 2-Step Tape Diagram Mastery",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. Maya has 36 stickers. She gives 14 to Leo. Then she gets 20 more. How many stickers now?\n2. A bus has 48 riders. 12 get off, and 15 get on. How many riders?"
      }
    ]
  },

  // 3rd Grade Math
  {
    id: "teks-3-4k",
    state: "TX",
    stateSystem: "TEKS",
    grade: "3rd Grade",
    subject: "Mathematics",
    code: "TEKS 3.4K",
    title: "Multiplication & Division via Equal Groups & Arrays",
    description: "Solve one-step and two-step problems involving multiplication and division within 100 using strategies based on objects; pictorial models, including arrays, area models, and equal groups.",
    swbatObjective: "SWBAT model and solve real-world multiplication and division word problems within 100 using arrays, equal group mats, and inverse fact families with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS 2.6A", title: "Model equal groups and repeated addition" }],
      futureExtensionCodes: [{ code: "TEKS 4.4D", title: "Multiply up to a 4-digit by a 1-digit number and 2-digit by 2-digit" }]
    },
    realWorldConnections: [
      "Arranging chairs into equal rows for an auditorium assembly.",
      "Distributing 24 juice boxes equally among 6 soccer teammates.",
      "Calculating total egg cartons with 6 rows of 2 eggs."
    ],
    sentenceStems: [
      "There are _____ groups with _____ items in each group.",
      "The total is _____ because _____ groups of _____ equals _____.",
      "To share _____ equally among _____ people, each gets _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that multiplication models equal groups joining together, while division partitions a total into equal groups.",
      stage2AssessmentEvidence: "Array Builder Performance Task where students construct and label 4 distinct fact family arrays for numbers within 100.",
      stage3LearningPlanSequence: "Structured CPA sequence moving from tile arrays to grid sketches to inverse equation fact families."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher demonstrates building a 4x6 array of square tiles, shows rows and columns, and writes 4 x 6 = 24 and 24 / 4 = 6.",
      weDoGuidedPractice: "Students build a 3x8 array using square grid paper and identify the matching multiplication and division equations.",
      youDoTogetherCollaborative: "Student pairs draw a word problem card, sketch equal group circles on dry-erase boards, and write the fact family.",
      youDoAloneIndependentMastery: "Students independently complete 5 array and equal group word problems."
    },
    dokQuestions: {
      dok1Recall: "What is the product of 7 and 6?",
      dok2SkillConcept: "How does knowing 4 x 8 = 32 help you solve 32 / 8?",
      dok3StrategicThinking: "Can you arrange 24 desks into equal rows in at least 3 different ways? Draw and label each array.",
      dok4ExtendedThinking: "Design a bakery display case holding 48 muffins using equal rows and columns. Explain your pricing strategy per row."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Concrete — Square unit tiles on desktop grid mats.",
        "Step 2: Pictorial — Dot arrays and equal group circle sketches.",
        "Step 3: Abstract — Fact family triangles and inverse equations."
      ],
      commonMisconceptions: [
        { flaw: "Confusing rows (horizontal) and columns (vertical).", correctionPath: "Use the mnemonic: 'Rows go across like rows of corn; Columns stand tall like pillars on a building.'" }
      ],
      interventionTip: "Use physical egg cartons and counters to partition quantities into equal cups."
    },
    studentStrategy: {
      anchorTitle: "The Array Architect Blueprint",
      visualHook: "🧱 Rows (Across) ✖️ 🏛️ Columns (Down) 🟰 📦 Total Array!",
      stepByStepGuide: [
        "1. Identify the number of groups (Rows).",
        "2. Identify the number in each group (Columns).",
        "3. Multiply Rows x Columns to find the total.",
        "4. For division: Start with Total and share into equal groups!"
      ],
      selfCheckChecklist: [
        "Are all my groups equal size?",
        "Did I write both the multiplication and division equation?",
        "Does my total match my array?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "A baker puts 28 cookies onto trays. Each tray holds 4 cookies in an equal row. How many trays does the baker need for all the cookies?",
      answerChoices: ["A) 6 trays", "B) 7 trays", "C) 8 trays", "D) 32 trays"],
      correctAnswer: "B) 7 trays",
      teacherExemplarExplanation: "Equation: 28 / 4 = 7. The baker needs 7 trays (7 x 4 = 28)."
    },
    worksheets: [
      {
        id: "ws-34k-1",
        title: "3rd Grade Math: Array & Fact Family Workshop",
        type: "Practice",
        estimatedTimeMin: 15,
        previewContent: "1. Draw a 5x7 array and write the matching multiplication sentence.\n2. Divide 36 marbles into 4 equal bags."
      }
    ]
  },

  // 4th Grade Math
  {
    id: "ccss-4-nf-1",
    state: "US",
    stateSystem: "CCSS",
    grade: "4th Grade",
    subject: "Mathematics",
    code: "CCSS.MATH.4.NF.A.1",
    title: "Fraction Equivalence & Visual Area Models",
    description: "Explain why a fraction a/b is equivalent to a fraction (n*a)/(n*b) by using visual fraction models, with attention to how the number and size of the parts differ even though the two fractions themselves are the same size.",
    swbatObjective: "SWBAT generate and prove equivalent fractions by partitioning visual area models and multiplying/dividing by a fraction equal to 1 (n/n) with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "CCSS.3.NF.A.3", title: "Recognize and generate simple equivalent fractions on number lines" }],
      futureExtensionCodes: [{ code: "CCSS.5.NF.A.1", title: "Add and subtract fractions with unlike denominators" }]
    },
    realWorldConnections: [
      "Splitting a pizza cut into 8 slices versus 4 larger slices.",
      "Measuring ingredients using 1/4 cup scoops to measure 1/2 cup of flour.",
      "Adjusting tool sizes (e.g. 2/4 inch socket wrench vs 1/2 inch)."
    ],
    sentenceStems: [
      "The fraction _____ is equivalent to _____ because _____.",
      "When I multiply the numerator and denominator by _____, the size of the whole stays the same but the parts are partitioned into _____.",
      "Both visual models cover the exact same amount of _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that multiplying numerator and denominator by the same non-zero integer partitions the parts into smaller units without altering the overall value.",
      stage2AssessmentEvidence: "Visual Fraction Proof Lab where students partition tape diagrams and demonstrate mathematical identity property multiplication (n/n).",
      stage3LearningPlanSequence: "CPA fraction strip lab moving from folding paper strips to area model grid slicing to numerical equivalence."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher draws a rectangle showing 2/3, draws a horizontal slicing line to create 4/6, and demonstrates multiplying by 2/2 = 1.",
      weDoGuidedPractice: "Students fold paper fraction strips showing 3/4, unfold and draw a crease to prove equivalence to 6/8.",
      youDoTogetherCollaborative: "Student pairs match equivalent fraction cards (e.g., 3/5 and 6/10) using visual area model overlays.",
      youDoAloneIndependentMastery: "Students solve 5 fraction equivalence problems with sketched visual proofs."
    },
    dokQuestions: {
      dok1Recall: "What is an equivalent fraction for 1/2 with a denominator of 10?",
      dok2SkillConcept: "Why does multiplying a fraction by 3/3 not change its value?",
      dok3StrategicThinking: "Is 4/6 equivalent to 10/15? Prove your answer using both an area model and numerical simplification.",
      dok4ExtendedThinking: "A chef needs 3/4 cup of sugar but only has an 1/8 cup scoop. How many scoops must they use, and why?"
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Concrete — Transparent plastic fraction tile overlays.",
        "Step 2: Pictorial — Rectangular area models with horizontal partitioning lines.",
        "Step 3: Abstract — Numerical multiplication/division by (n/n)."
      ],
      commonMisconceptions: [
        { flaw: "Adding numbers to both top and bottom (e.g. thinking 1/2 = 2/3 because +1/+1).", correctionPath: "Demonstrate visually that 1/2 is half a pizza, while 2/3 is more than half." }
      ],
      interventionTip: "Use physical fraction towers to test height equivalencies side-by-side."
    },
    studentStrategy: {
      anchorTitle: "The Fraction Slicing Engine",
      visualHook: "🍕 Slice Model in Half -> 2️⃣ Double the Parts -> 🟰 Same Amount of Pizza!",
      stepByStepGuide: [
        "1. Draw the first fraction as a vertical bar.",
        "2. Shade the numerator.",
        "3. Draw horizontal lines across to slice into smaller pieces.",
        "4. Count the new shaded pieces (numerator) and total pieces (denominator)!"
      ],
      selfCheckChecklist: [
        "Did I multiply BOTH the top and bottom by the same number?",
        "Do my two drawings take up the exact same area?",
        "Is my final fraction equal to the original?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Which fraction is equivalent to 3/5 with a denominator of 20?",
      answerChoices: ["A) 6/20", "B) 9/20", "C) 12/20", "D) 15/20"],
      correctAnswer: "C) 12/20",
      teacherExemplarExplanation: "Multiply numerator and denominator by 4: (3 x 4) / (5 x 4) = 12/20."
    },
    worksheets: [
      {
        id: "ws-4nf1-1",
        title: "4th Grade Math: Fraction Equivalence Area Models",
        type: "Practice",
        estimatedTimeMin: 15,
        previewContent: "1. Draw an area model to show 2/3 = 6/9.\n2. Find the missing numerator: 4/5 = ?/25."
      }
    ]
  },

  // 5th Grade Math
  {
    id: "teks-5-3k",
    state: "TX",
    stateSystem: "TEKS",
    grade: "5th Grade",
    subject: "Mathematics",
    code: "TEKS 5.3K",
    title: "Adding & Subtracting Rational Numbers (Fractions)",
    description: "Add and subtract positive rational numbers fluently, including fractions with unequal denominators and decimals.",
    swbatObjective: "SWBAT add and subtract fractions with unequal denominators by finding the Least Common Denominator (LCD) and generating equivalent fractions with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS 4.3E", title: "Add and subtract fractions with equal denominators" }],
      futureExtensionCodes: [{ code: "TEKS 6.3E", title: "Multiply and divide positive rational numbers fluently" }]
    },
    realWorldConnections: [
      "Combining leftover wood planks (3/4 yard + 1/2 yard) for a carpentry frame.",
      "Baking a double batch of cookies requiring 2/3 cup white sugar and 1/4 cup brown sugar.",
      "Tracking hours spent on homework across two days."
    ],
    sentenceStems: [
      "The denominators are different, so I found the common denominator of _____.",
      "I renamed _____ as _____ and _____ as _____.",
      "The sum/difference is _____ which simplifies to _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that fractions cannot be combined or subtracted until they share a common unit (common denominator).",
      stage2AssessmentEvidence: "Multi-Step Fraction Problem Task where students calculate the total length of a composite blueprint and show all LCD work.",
      stage3LearningPlanSequence: "3-step instructional sequence: Visual Grid Overlays -> LCM/LCD Finding -> Mixed Number Computation."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher models 2/3 + 1/4, lists multiples of 3 and 4 to find LCD = 12, converts to 8/12 + 3/12, and computes 11/12.",
      weDoGuidedPractice: "Students work in pairs to find the LCD and compute 3/5 - 1/2 on mini dry-erase boards.",
      youDoTogetherCollaborative: "Student pairs solve real-world baking recipe word problems requiring fraction addition with unlike denominators.",
      youDoAloneIndependentMastery: "Students complete 5 independent fraction addition and subtraction computation and word problems."
    },
    dokQuestions: {
      dok1Recall: "What is the least common multiple of 6 and 8?",
      dok2SkillConcept: "Why can't you just add the numerators and denominators together (e.g. 1/2 + 1/3 = 2/5)?",
      dok3StrategicThinking: "If Sarah has 2 1/4 cups of flour and needs 3 2/3 cups, how much more flour does she need? Show your regrouping.",
      dok4ExtendedThinking: "Write a real-world story problem involving 3 different fractions with unlike denominators that equals 1 whole."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Visual 2D Grid overlays to show why common units are required.",
        "Step 2: Multiples Ladder to identify the Least Common Multiple (LCM).",
        "Step 3: Vertical fraction alignment with equivalent fraction conversions."
      ],
      commonMisconceptions: [
        { flaw: "Adding numerators across and denominators across (1/3 + 1/2 = 2/5).", correctionPath: "Use pizza slice models to show that 1/3 + 1/2 is almost a full pizza, whereas 2/5 is less than half." }
      ],
      interventionTip: "Use colored highlighters to circle the matching common denominator in the multiples list."
    },
    studentStrategy: {
      anchorTitle: "The Common Denominator Ladder",
      visualHook: "🪜 Find LCD -> 🔄 Rename Fractions -> ➕ Add/Subtract Numerators -> 📦 Keep Denominator!",
      stepByStepGuide: [
        "1. Check the denominators: Are they the same? If not, find LCD.",
        "2. List multiples of each bottom number.",
        "3. Multiply top and bottom to create equivalent fractions.",
        "4. Add or subtract the numerators only.",
        "5. Keep the denominator the same and simplify!"
      ],
      selfCheckChecklist: [
        "Did I find a valid common denominator?",
        "Did I only add/subtract the numerators?",
        "Did I check if my final fraction can be simplified?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "What is the value of 3/4 - 2/5 in simplest form?",
      answerChoices: ["A) 1/1", "B) 1/20", "C) 7/20", "D) 1/9"],
      correctAnswer: "C) 7/20",
      teacherExemplarExplanation: "LCD for 4 and 5 is 20. Convert 3/4 = 15/20 and 2/5 = 8/20. Subtract: 15/20 - 8/20 = 7/20."
    },
    worksheets: [
      {
        id: "ws-53k-1",
        title: "5th Grade Math: Adding & Subtracting Fractions Mastery",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. 2/3 + 1/6 = ?\n2. 5/8 - 1/4 = ?\n3. Word problem: A recipe uses 1/2 cup milk and 3/8 cup water."
      }
    ]
  },

  // 6th Grade Math
  {
    id: "ccss-6-rp-3",
    state: "US",
    stateSystem: "CCSS",
    grade: "6th Grade",
    subject: "Mathematics",
    code: "CCSS.MATH.6.RP.A.3",
    title: "Ratio Reasoning, Unit Rates & Double Number Lines",
    description: "Use ratio and rate reasoning to solve real-world and mathematical problems, e.g., by reasoning about tables of equivalent ratios, tape diagrams, double number line diagrams, or equations.",
    swbatObjective: "SWBAT solve real-world unit rate and proportional ratio problems using ratio tables and double number lines with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "CCSS.5.NF.B.4", title: "Apply multiplication to find fractions of a set" }],
      futureExtensionCodes: [{ code: "CCSS.7.RP.A.2", title: "Recognize and represent proportional relationships" }]
    },
    realWorldConnections: [
      "Comparing price per ounce of cereal boxes in the supermarket.",
      "Calculating fuel efficiency (miles per gallon) on a road trip.",
      "Scaling recipe servings from 4 people to 20 people."
    ],
    sentenceStems: [
      "For every _____ of A, there are _____ of B.",
      "The unit rate is _____ per 1 _____.",
      "Using the double number line, when A is _____, B is _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that ratios describe a multiplicative relationship between two quantities that can be scaled proportionally.",
      stage2AssessmentEvidence: "Supermarket Unit Price Investigation where students compare 3 brands and determine the best buy using unit rates.",
      stage3LearningPlanSequence: "Ratio representation workshop moving from concrete object sets to double number lines to unit rate equations."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher demonstrates mapping a ratio of 3 miles in 24 minutes onto a double number line, finds the unit rate (8 min/mile), and calculates time for 10 miles.",
      weDoGuidedPractice: "Students co-construct a double number line comparing price to ounces of juice on whiteboards.",
      youDoTogetherCollaborative: "Student pairs receive grocery store item cards and build ratio tables to find unit prices.",
      youDoAloneIndependentMastery: "Students solve 5 independent ratio and rate word problems."
    },
    dokQuestions: {
      dok1Recall: "What is a unit rate?",
      dok2SkillConcept: "How does a ratio table help you find equivalent ratios without multiplying by large numbers directly?",
      dok3StrategicThinking: "Brand A sells 16 oz for $3.20. Brand B sells 24 oz for $4.56. Which is the better value per ounce? Justify mathematically.",
      dok4ExtendedThinking: "Design a speed runner training schedule where running pace scales across 5K, 10K, and half-marathon distances."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Double Number Line with synchronized tick marks.",
        "Step 2: Ratio Table with horizontal and vertical multiplicative relationships.",
        "Step 3: Unit rate division (Total Cost / Total Units)."
      ],
      commonMisconceptions: [
        { flaw: "Using additive thinking instead of multiplicative scaling (e.g. adding 2 to both numbers).", correctionPath: "Show that scaling means multiplying both quantities by the exact same scale factor." }
      ],
      interventionTip: "Use physical sticky notes on a desk number line to slide units proportionally."
    },
    studentStrategy: {
      anchorTitle: "The Double Number Line Proportional Tracker",
      visualHook: "📏 Top Line (Quantity A) ↕️ Bottom Line (Quantity B) ➡️ 🎯 Unit Rate at '1'!",
      stepByStepGuide: [
        "1. Draw two parallel lines labeled with your units.",
        "2. Mark 0 at the start on both lines.",
        "3. Plot your given ratio pair.",
        "4. Divide to find the value when the bottom line is 1 (Unit Rate).",
        "5. Multiply the unit rate to find any target quantity!"
      ],
      selfCheckChecklist: [
        "Did I label both lines with the correct units?",
        "Did I divide correctly to find the unit rate for 1?",
        "Does my scaled answer make sense?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "A car travels 180 miles in 3 hours at a constant speed. At this rate, how many miles will the car travel in 7 hours?",
      answerChoices: ["A) 360 miles", "B) 420 miles", "C) 540 miles", "D) 1,260 miles"],
      correctAnswer: "B) 420 miles",
      teacherExemplarExplanation: "Unit rate: 180 miles / 3 hours = 60 miles per hour. Distance in 7 hours: 60 mph x 7 hours = 420 miles."
    },
    worksheets: [
      {
        id: "ws-6rp3-1",
        title: "6th Grade Math: Unit Rates & Double Number Lines",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. Find unit rate: 12 apples for $3.60.\n2. Double number line challenge: 5 cups of flour makes 30 cookies."
      }
    ]
  },

  // 7th Grade Math
  {
    id: "teks-7-4a",
    state: "TX",
    stateSystem: "TEKS",
    grade: "7th Grade",
    subject: "Mathematics",
    code: "TEKS 7.4A",
    title: "Constant Rates of Change & Proportional Relationships (y = kx)",
    description: "Represent constant rates of change in mathematical and real-world problems given pictorial, tabular, verbal, numeric, graphical, and algebraic representations, including d = rt.",
    swbatObjective: "SWBAT identify the constant of proportionality (k = y/x) from tables, graphs, and word problems and write linear equations in the form y = kx with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS 6.4B", title: "Apply qualitative and quantitative reasoning to solve unit rate problems" }],
      futureExtensionCodes: [{ code: "TEKS 8.4B", title: "Graph proportional and non-proportional linear relationships (y = mx + b)" }]
    },
    realWorldConnections: [
      "Calculating hourly wages at a summer job ($15/hr).",
      "Calculating travel distance based on constant highway speed.",
      "Calculating utility billing per kilowatt-hour of electricity consumed."
    ],
    sentenceStems: [
      "The constant of proportionality is k = _____ because y/x equals _____.",
      "The graph represents a proportional relationship because it is a straight line through the _____.",
      "The equation modeling this relationship is y = _____x."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that proportional relationships maintain a constant ratio (k = y/x) and pass through the origin (0,0).",
      stage2AssessmentEvidence: "Proportionality Quad-Model Assessment where students represent one scenario across a table, graph, verbal description, and equation.",
      stage3LearningPlanSequence: "Multi-modal workshop exploring constant speed dynamics across digital graphs and coordinate planes."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher displays a coordinate plane, plots points (1, 15), (2, 30), (3, 45), checks that line passes through (0,0), calculates k = 15, and writes y = 15x.",
      weDoGuidedPractice: "Class analyzes a table of values to test if y/x is constant for every row and writes the matching equation.",
      youDoTogetherCollaborative: "Student pairs match 4 proportional cards (Verbal, Table, Graph, Equation) into unified sets.",
      youDoAloneIndependentMastery: "Students complete 5 independent constant of proportionality items."
    },
    dokQuestions: {
      dok1Recall: "What formula is used to calculate the constant of proportionality k?",
      dok2SkillConcept: "Why is a line that does not pass through the origin (0,0) considered non-proportional?",
      dok3StrategicThinking: "Given the equation y = 4.5x, what does the coordinate point (1, 4.5) represent in the context of buying pounds of coffee?",
      dok4ExtendedThinking: "Create a real-world scenario where the rate of change is proportional for the first 5 hours, but becomes non-proportional after."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Test y/x for every row in a table to verify constancy.",
        "Step 2: Inspect graphs for two rules: (1) Must be a straight line, (2) Must pass through (0,0).",
        "Step 3: Connect unit rate k directly into y = kx."
      ],
      commonMisconceptions: [
        { flaw: "Calculating k as x/y instead of y/x.", correctionPath: "Teach the chant: 'Y on high, X down low, that is how the slope will go!'" }
      ],
      interventionTip: "Use colored arrows from the y column to x column showing division."
    },
    studentStrategy: {
      anchorTitle: "The Proportionality Quad Test",
      visualHook: "📈 Straight Line ➕ 🎯 Origin (0,0) ➕ ⚖️ Constant k = y/x ➡️ 💡 y = kx!",
      stepByStepGuide: [
        "1. Check the graph: Is it straight? Does it hit (0,0)?",
        "2. Pick a coordinate point (x, y).",
        "3. Divide y by x to find k.",
        "4. Test a second point to make sure k is constant.",
        "5. Write your equation: y = [k]x!"
      ],
      selfCheckChecklist: [
        "Did I divide y by x (not x by y)?",
        "Does the line pass through (0,0)?",
        "Does my equation accurately predict the next point?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "A water pump fills a tank at a constant rate. In 4 minutes, it pumps 28 gallons. Which equation represents the relationship between gallons of water (y) and minutes (x)?",
      answerChoices: ["A) y = 4x", "B) y = 7x", "C) y = 28x", "D) y = x + 24"],
      correctAnswer: "B) y = 7x",
      teacherExemplarExplanation: "k = y / x = 28 gallons / 4 minutes = 7 gallons per minute. Equation: y = 7x."
    },
    worksheets: [
      {
        id: "ws-74a-1",
        title: "7th Grade Math: Constant Rate of Change Workshop",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. Find k from table: (2, 18), (4, 36), (6, 54).\n2. Write the equation y = kx for a runner going 8 mph."
      }
    ]
  },

  // 8th Grade Math
  {
    id: "teks-8-8c",
    state: "TX",
    stateSystem: "TEKS",
    grade: "8th Grade",
    subject: "Mathematics",
    code: "TEKS 8.8C",
    title: "Solving Multi-Step Linear Equations (Variables on Both Sides)",
    description: "Model and solve one-variable equations with variables on both sides of the equal sign that represent mathematical and real-world problems using rational number coefficients and constants.",
    swbatObjective: "SWBAT solve multi-step linear equations with variables on both sides using inverse operations, distributive property, and balancing algebraic scale models with 80%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [
        { code: "TEKS 7.11A", title: "Model and solve one-variable, two-step equations" }
      ],
      futureExtensionCodes: [
        { code: "TEKS A.5A", title: "Solve linear equations and inequalities in Algebra I" }
      ]
    },
    realWorldConnections: [
      "Comparing mobile cell phone plans with different upfront costs and monthly rates.",
      "Calculating break-even points for student entrepreneur business projects.",
      "Determining when two Uber/Lyft rides will cost the exact same amount."
    ],
    sentenceStems: [
      "To balance the equation, my first inverse operation was _____ on both sides.",
      "The variable term on the left is _____, so I eliminated the smaller variable term by _____.",
      "The solution x = _____ makes both sides equal to _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that an equation represents a balanced system where any operation performed on one side must be mirrored on the other.",
      stage2AssessmentEvidence: "Formative 5-item multi-step equation check with step-by-step algebraic justification rubrics.",
      stage3LearningPlanSequence: "Algebra balance scale workshop moving from visual balance beams to abstract multi-step equations."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher writes 4x + 12 = 2x + 28 on board, draws a central balance scale line through the '=', and executes inverse operations step-by-step.",
      weDoGuidedPractice: "Class works in pairs to solve 5x - 7 = 3x + 15 on vertical dry-erase boards with teacher call-outs.",
      youDoTogetherCollaborative: "Student pairs solve real-world cell phone plan comparison problems and verify answers by substituting x back into the equation.",
      youDoAloneIndependentMastery: "Students complete 5 independent algebraic multi-step equation items."
    },
    dokQuestions: {
      dok1Recall: "What is the inverse operation of adding 12?",
      dok2SkillConcept: "Why is it usually best practice to eliminate the smaller variable term first?",
      dok3StrategicThinking: "If solving an equation results in 5 = 5, what does that mean about the number of solutions? What if it results in 5 = 9?",
      dok4ExtendedThinking: "Write a real-world scenario comparing two streaming subscription services that can be modeled by 12 + 4x = 24 + 2x."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Draw a vertical 'River Line' down through the equal sign (=).",
        "Step 2: Box variable terms in Blue and circle constant numbers in Green.",
        "Step 3: Execute inverse operations to isolate the variable x."
      ],
      commonMisconceptions: [
        {
          flaw: "Combining terms across the equal sign without performing inverse operations.",
          correctionPath: "Enforce the 'Passport Rule': To cross the equal sign river, a term must flip its operation sign (+ becomes -, × becomes ÷)."
        }
      ],
      interventionTip: "Use physical algebra tiles with positive (green) and negative (red) unit bars."
    },
    studentStrategy: {
      anchorTitle: "The Multi-Step Equation Balance River",
      visualHook: "〰️ Draw River at '=' ➡️ 📦 Box Variables ➡️ ⭕ Circle Constants ➡️ ⚖️ Balance & Solve!",
      stepByStepGuide: [
        "1. Distribute to clear parentheses if needed.",
        "2. Combine like terms on each individual side.",
        "3. Move the smaller variable across the river using inverse operations.",
        "4. Move the constant away from the variable.",
        "5. Divide by the coefficient to isolate x!",
        "6. Check: Plug x back in!"
      ],
      selfCheckChecklist: [
        "Did I perform the exact same operation on BOTH sides of the equal sign?",
        "Did I watch out for negative signs?",
        "Did I plug my answer back in to verify?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Solve the linear equation for x: 6x - 14 = 2x + 18",
      answerChoices: ["A) x = 4", "B) x = 8", "C) x = 12", "D) x = 32"],
      correctAnswer: "B) x = 8",
      teacherExemplarExplanation: "Step 1: Subtract 2x from both sides -> 4x - 14 = 18. Step 2: Add 14 to both sides -> 4x = 32. Step 3: Divide by 4 -> x = 8. Check: 6(8) - 14 = 34; 2(8) + 18 = 34."
    },
    worksheets: [
      {
        id: "ws-88c-1",
        title: "8th Grade Math: Multi-Step Equations Mastery",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. 3x + 9 = 5x - 7\n2. 4(2x - 3) = 2x + 18\n3. Real-world plan comparison."
      }
    ]
  },

  // High School Algebra I
  {
    id: "ccss-hsa-rei-4",
    state: "US",
    stateSystem: "CCSS",
    grade: "High School (9-12)",
    subject: "Mathematics",
    code: "CCSS.MATH.HSA.REI.B.4",
    title: "Quadratic Equations, Factoring & Quadratic Formula",
    description: "Solve quadratic equations in one variable using inspection, taking square roots, completing the square, the quadratic formula, and factoring, as appropriate to the initial form of the equation.",
    swbatObjective: "SWBAT solve quadratic equations in standard form (ax^2 + bx + c = 0) by selecting optimal strategies (factoring, square roots, or quadratic formula) with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "CCSS.HSA.SSE.B.3", title: "Factor a quadratic expression to reveal zeros" }],
      futureExtensionCodes: [{ code: "CCSS.HSF.IF.C.7", title: "Graph quadratic functions showing intercepts, maxima, and minima" }]
    },
    realWorldConnections: [
      "Modeling projectile trajectories (e.g. rocket launches, basketball shot arcs).",
      "Maximizing revenue curves in business economics.",
      "Calculating stopping distance of vehicles under deceleration."
    ],
    sentenceStems: [
      "The equation is in standard form where a = _____, b = _____, and c = _____.",
      "The discriminant b^2 - 4ac equals _____, which indicates _____ real solutions.",
      "Using the quadratic formula, x = _____ and x = _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that the roots of a quadratic equation correspond to the x-intercepts of its parabolic graph.",
      stage2AssessmentEvidence: "Projectile Flight Path Lab where students model rocket elevation data, find roots, and determine impact time.",
      stage3LearningPlanSequence: "Method comparison workshop moving from factoring trinomials to completing the square to the universal quadratic formula."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher demonstrates solving 2x^2 + 5x - 12 = 0 using both factoring (2x - 3)(x + 4) = 0 and the quadratic formula, proving both yield x = 1.5 and x = -4.",
      weDoGuidedPractice: "Class works in pairs to calculate the discriminant of x^2 - 6x + 9 = 0 and identify the single root.",
      youDoTogetherCollaborative: "Student pairs solve a set of 4 quadratic challenge cards and verify roots using graphing calculators.",
      youDoAloneIndependentMastery: "Students complete 5 summative quadratic equation items."
    },
    dokQuestions: {
      dok1Recall: "What is the quadratic formula?",
      dok2SkillConcept: "What does a negative discriminant (b^2 - 4ac < 0) tell you about the graph of the parabola?",
      dok3StrategicThinking: "When is it more efficient to solve a quadratic equation by factoring rather than using the quadratic formula?",
      dok4ExtendedThinking: "A projectile is launched from a 20-meter cliff with equation h(t) = -5t^2 + 15t + 20. Find the maximum height and time to hit the ground."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Standard Form alignment (ax^2 + bx + c = 0).",
        "Step 2: Discriminant calculation (D = b^2 - 4ac) to determine nature of roots.",
        "Step 3: Quadratic formula substitution with careful negative sign tracking."
      ],
      commonMisconceptions: [
        { flaw: "Forgetting parentheses when squaring negative b values in (-b)^2.", correctionPath: "Enforce writing parentheses around every substituted variable: (b)^2 - 4(a)(c)." }
      ],
      interventionTip: "Use color-coded boxes for a (red), b (blue), and c (green) across all formulas."
    },
    studentStrategy: {
      anchorTitle: "The Quadratic Trajectory Solver",
      visualHook: "📐 ax^2 + bx + c = 0 ➡️ 🔍 Discriminant (b^2 - 4ac) ➡️ 🎯 x = (-b ± √D) / (2a)!",
      stepByStepGuide: [
        "1. Set the equation equal to 0.",
        "2. Identify a, b, and c.",
        "3. Calculate the discriminant: D = b^2 - 4ac.",
        "4. Plug into the quadratic formula.",
        "5. Simplify the ± into two distinct solutions!"
      ],
      selfCheckChecklist: [
        "Is my equation equal to zero before identifying a, b, c?",
        "Did I remember the ± sign?",
        "Did I divide the ENTIRE numerator by 2a?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "What are the solutions to the quadratic equation x^2 - 5x - 14 = 0?",
      answerChoices: ["A) x = -7 and x = 2", "B) x = 7 and x = -2", "C) x = 5 and x = -14", "D) x = 14 and x = -1"],
      correctAnswer: "B) x = 7 and x = -2",
      teacherExemplarExplanation: "Factor: (x - 7)(x + 2) = 0. Set each factor to 0: x - 7 = 0 -> x = 7; x + 2 = 0 -> x = -2."
    },
    worksheets: [
      {
        id: "ws-hsarei4-1",
        title: "Algebra I: Quadratic Equation Mastery",
        type: "Practice",
        estimatedTimeMin: 25,
        previewContent: "1. Solve by factoring: x^2 + 7x + 12 = 0.\n2. Solve with quadratic formula: 2x^2 - 4x - 6 = 0."
      }
    ]
  },

  // High School Geometry
  {
    id: "teks-geom-6b",
    state: "TX",
    stateSystem: "TEKS",
    grade: "High School (9-12)",
    subject: "Mathematics",
    code: "TEKS Geom 6B",
    title: "Triangle Congruence & Rigorous Deductive Proofs",
    description: "Apply the definition of congruence in terms of rigid motions to show that two triangles are congruent if and only if their corresponding pairs of sides and corresponding pairs of angles are congruent (SSS, SAS, ASA, AAS, HL).",
    swbatObjective: "SWBAT write formal 2-column and paragraph deductive proofs establishing triangle congruence using SSS, SAS, ASA, AAS, and HL criteria with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS 8.10B", title: "Differentiate between transformations that preserve congruence" }],
      futureExtensionCodes: [{ code: "TEKS Geom 7B", title: "Apply triangle similarity criteria (AA, SAS, SSS) to solve indirect measurement problems" }]
    },
    realWorldConnections: [
      "Architectural truss bridge engineering ensuring rigid structural stability.",
      "Computer-aided 3D graphics rendering (mesh triangulation).",
      "Land surveying and triangulation mapping."
    ],
    sentenceStems: [
      "Given that segment _____ is congruent to segment _____, we can state _____ by _____.",
      "The triangles are congruent by the _____ (SSS/SAS/ASA/AAS/HL) congruence theorem.",
      "By CPCTC (Corresponding Parts of Congruent Triangles are Congruent), angle _____ is congruent to angle _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that deductive reasoning allows us to prove geometric truths with absolute logical certainty.",
      stage2AssessmentEvidence: "Formal 2-Column Proof Assessment where students prove triangle congruence and deduce unknown angle measures.",
      stage3LearningPlanSequence: "Proof construction workshop moving from visual geometric marking to 2-column deductive justifications."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher demonstrates marking tick marks on given sides/angles, writes given statements, invokes reflexive property, and concludes proof via SAS.",
      weDoGuidedPractice: "Class constructs a 2-column proof together for a shared side perpendicular bisector problem.",
      youDoTogetherCollaborative: "Student pairs re-order scrambled proof statement/reason strips into valid logical sequences.",
      youDoAloneIndependentMastery: "Students write 3 independent geometric proofs on their assessment sheet."
    },
    dokQuestions: {
      dok1Recall: "What does CPCTC stand for in geometric proofs?",
      dok2SkillConcept: "Why is SSA (Side-Side-Angle) not a valid criterion for triangle congruence?",
      dok3StrategicThinking: "If two triangles share a common side and have two pairs of congruent angles, which two proof paths (ASA or AAS) could apply? How do you distinguish them?",
      dok4ExtendedThinking: "Prove why a triangular roof truss is inherently rigid and cannot deform without bending its members, unlike a rectangular truss."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Visual highlighters to mark Congruent Sides (Blue) and Congruent Angles (Orange).",
        "Step 2: Look for 'Hidden Freebies' (Reflexive Property shared sides, Vertical Angles).",
        "Step 3: Match marked pattern to 5 valid theorems (SSS, SAS, ASA, AAS, HL)."
      ],
      commonMisconceptions: [
        { flaw: "Assuming SSA or AAA proves congruence.", correctionPath: "Show that AAA only proves similarity (different sizes), and demonstrate the swinging leg ambiguity of SSA." }
      ],
      interventionTip: "Use physical hinged geometric wooden sticks with snap-on angle markers."
    },
    studentStrategy: {
      anchorTitle: "The Triangle Proof Deductive Engine",
      visualHook: "🖍️ Mark Given & Hidden (Vertical/Reflexive) ➡️ 🔍 Match 5 Theorems (SSS/SAS/ASA/AAS/HL) ➡️ 📜 CPCTC!",
      stepByStepGuide: [
        "1. Mark all GIVEN information on the diagram.",
        "2. Find HIDDEN congruent parts: Vertical angles (X) or Reflexive sides (shared wall).",
        "3. Count what you have: 3 parts (Sides and Angles).",
        "4. Choose your theorem (SSS, SAS, ASA, AAS, HL).",
        "5. Conclude with CPCTC if you need to prove specific angles/sides!"
      ],
      selfCheckChecklist: [
        "Did I justify every single statement with a valid postulate/theorem?",
        "Did I check that the angle is INCLUDED between sides for SAS?",
        "Did I verify right angle and hypotenuse for HL?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "In triangles ABC and DEF, AB ≅ DE, ∠A ≅ ∠D, and AC ≅ DF. Which theorem proves that ΔABC ≅ ΔDEF?",
      answerChoices: ["A) SSS", "B) SAS", "C) ASA", "D) AAS"],
      correctAnswer: "B) SAS",
      teacherExemplarExplanation: "Two sides and the included angle between them are congruent, which satisfies the SAS (Side-Angle-Side) Congruence Postulate."
    },
    worksheets: [
      {
        id: "ws-geom6b-1",
        title: "High School Geometry: Triangle Congruence Proofs",
        type: "Practice",
        estimatedTimeMin: 25,
        previewContent: "1. Complete 2-column proof for shared diagonal parallelogram.\n2. Identify congruence shortcut: SSS, SAS, ASA, AAS, HL."
      }
    ]
  },

  // High School Algebra II
  {
    id: "teks-alg2-7c",
    state: "TX",
    stateSystem: "TEKS",
    grade: "High School (9-12)",
    subject: "Mathematics",
    code: "TEKS Alg 2.7C",
    title: "Exponential and Logarithmic Equations & Transformations",
    description: "Determine the quotient of a polynomial or solve exponential and logarithmic equations using properties of logarithms, change of base formula, and real-world models including compound interest and decay.",
    swbatObjective: "SWBAT solve exponential and logarithmic equations using power, product, and quotient logarithmic properties and calculate continuous growth/decay (A = Pe^rt) with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS Alg 1.9D", title: "Graph exponential functions that model growth and decay" }],
      futureExtensionCodes: [{ code: "TEKS PreCalc 2F", title: "Model logistic growth and non-linear regression" }]
    },
    realWorldConnections: [
      "Calculating mortgage interest and compound retirement investment portfolios.",
      "Modeling bacterial colony growth and viral infection curves.",
      "Measuring earthquake magnitude on the Richter logarithmic scale."
    ],
    sentenceStems: [
      "To isolate the exponent, I convert the exponential equation into logarithmic form: log_b(y) = _____.",
      "Using the Power Property of Logarithms, log(x^n) simplifies to _____.",
      "The time required for the investment to double under A = Pe^(rt) is t = _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that logarithms are the mathematical inverses of exponents that allow us to isolate variables in the exponent position.",
      stage2AssessmentEvidence: "Carbon Dating & Investment Portfolio Project where students calculate the age of archaeological artifacts using radioactive half-life decay equations.",
      stage3LearningPlanSequence: "Exponential function inversion -> Logarithmic property proofs -> Multi-step log equation solving."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher demonstrates solving 5^(2x - 1) = 125 by rewriting as 5^(2x - 1) = 5^3, equating exponents (2x - 1 = 3), and contrasts with using natural logs for 4e^(3x) = 48.",
      weDoGuidedPractice: "Class condenses 2 log(x) + log(y) - log(z) into a single logarithm using product, quotient, and power rules.",
      youDoTogetherCollaborative: "Student pairs solve half-life word problems for Carbon-14 and verify solutions using graphing tools.",
      youDoAloneIndependentMastery: "Students solve 5 independent exponential and logarithmic equations."
    },
    dokQuestions: {
      dok1Recall: "What is the inverse function of f(x) = e^x?",
      dok2SkillConcept: "How does the quotient rule of logarithms log(a/b) = log(a) - log(b) derive from exponent division laws?",
      dok3StrategicThinking: "Why must you check for extraneous solutions when solving logarithmic equations like log_2(x) + log_2(x - 3) = 2?",
      dok4ExtendedThinking: "Derive the Rule of 72 for compounding interest using the natural log approximation ln(2) ≈ 0.693."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: The 'Looping Arrow' (Base raised to the answer equals the argument: b^y = x <-> log_b(x) = y).",
        "Step 2: Log Property Triad (Product ➕, Quotient ➖, Power ✖️).",
        "Step 3: Natural Log / e inverse relationship (ln(e^x) = x)."
      ],
      commonMisconceptions: [
        { flaw: "Distributing log across addition (thinking log(x + y) = log(x) + log(y)).", correctionPath: "Show that log(x) + log(y) equals log(x * y), NOT log(x + y)." }
      ],
      interventionTip: "Use physical slider rules showing powers of 10 lining up with logarithms 1, 2, 3, 4."
    },
    studentStrategy: {
      anchorTitle: "The Logarithmic Inverse Engine",
      visualHook: "🔄 b^y = x 🔀 log_b(x) = y ➡️ 📦 Product/Quotient Rules ➡️ 🎯 Solve for Exponent!",
      stepByStepGuide: [
        "1. Isolate the exponential or logarithmic term.",
        "2. If exponential: Take the log or ln of both sides.",
        "3. Use the Power Rule to bring the exponent to the front.",
        "4. If logarithmic: Condense into a single log and rewrite in exponential form.",
        "5. Solve and check for extraneous solutions (Argument must be > 0)!"
      ],
      selfCheckChecklist: [
        "Did I check if the inside of any log is negative (extraneous)?",
        "Did I isolate the e term before taking the natural log?",
        "Does my growth/decay time value make logical sense?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Solve the exponential equation for x: 3^(2x) = 81",
      answerChoices: ["A) x = 2", "B) x = 4", "C) x = 6", "D) x = 8"],
      correctAnswer: "A) x = 2",
      teacherExemplarExplanation: "Rewrite 81 as 3^4. Set exponents equal: 2x = 4 -> x = 2. Check: 3^(2*2) = 3^4 = 81."
    },
    worksheets: [
      {
        id: "ws-alg27c-1",
        title: "Algebra II: Logarithmic Properties & Exponential Growth",
        type: "Practice",
        estimatedTimeMin: 25,
        previewContent: "1. Condense: 3 ln(a) - 2 ln(b).\n2. Solve for t: 500e^(0.04t) = 2000."
      }
    ]
  },

  // High School Pre-Calculus / Trigonometry
  {
    id: "ccss-hsf-tf-1",
    state: "US",
    stateSystem: "CCSS",
    grade: "High School (9-12)",
    subject: "Mathematics",
    code: "CCSS.MATH.HSF.TF.A.1",
    title: "Unit Circle, Radian Measure & Trigonometric Functions",
    description: "Understand radian measure of an angle as the length of the arc on the unit circle subtended by the angle, and use the unit circle to express values of sine, cosine, and tangent for special angles.",
    swbatObjective: "SWBAT determine exact values of sin, cos, and tan for all special angles (0, π/6, π/4, π/3, π/2...) on the unit circle using reference triangles and radian conversions with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "CCSS.HSG.SRT.C.8", title: "Use trigonometric ratios (SOH-CAH-TOA) in right triangles" }],
      futureExtensionCodes: [{ code: "CCSS.HSF.TF.B.5", title: "Model periodic phenomena with trigonometric functions" }]
    },
    realWorldConnections: [
      "Signal processing and Fourier analysis in wireless telecommunications.",
      "Modeling tidal wave oscillations and sound wave acoustics.",
      "Video game character rotation physics and orbital mechanics."
    ],
    sentenceStems: [
      "The angle _____ radians has a reference angle of _____ in Quadrant _____.",
      "On the unit circle, the x-coordinate corresponds to _____ and the y-coordinate corresponds to _____.",
      "The exact value of cos(_____ ) is _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that radians measure angle as distance traveled along the unit circle circumference and unify geometry with periodic function waves.",
      stage2AssessmentEvidence: "Exact Value Unit Circle Challenge where students calculate 10 trigonometric expressions without a calculator using reference angles.",
      stage3LearningPlanSequence: "Special right triangle derivation (30-60-90 and 45-45-90) -> Unit Circle Quadrant Symmetry -> Sine/Cosine Wave Graphing."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher draws a unit circle of radius 1, shows (cos θ, sin θ) coordinates for π/6, π/4, and π/3, and derives coordinates using special right triangles.",
      weDoGuidedPractice: "Class calculates sin(2π/3) and cos(7π/6) by finding the reference angle and determining the sign from ASTC (All Students Take Calculus).",
      youDoTogetherCollaborative: "Student pairs match radian angle cards to unit circle coordinate points and evaluate tangent ratios.",
      youDoAloneIndependentMastery: "Students complete 6 exact value trigonometric evaluations."
    },
    dokQuestions: {
      dok1Recall: "What are the coordinates (x, y) on the unit circle at angle π/2?",
      dok2SkillConcept: "How does the ASTC quadrant rule determine whether tan(5π/4) is positive or negative?",
      dok3StrategicThinking: "Why is tan(π/2) undefined? Explain both algebraically in terms of sin/cos and geometrically in terms of slope.",
      dok4ExtendedThinking: "Derive the Pythagorean identity sin^2(θ) + cos^2(θ) = 1 directly from the equation of the unit circle."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Left-Hand Rule trick for remembering 0, 1/2, √2/2, √3/2, 1.",
        "Step 2: ASTC Quadrant Signs ('All Students Take Calculus').",
        "Step 3: Reference angle reduction (θ_ref = |θ - π| or |2π - θ|)."
      ],
      commonMisconceptions: [
        { flaw: "Switching sine and cosine coordinates (thinking (sin, cos) instead of (cos, sin)).", correctionPath: "Remind students: 'Alphabetical order: C comes before S, so (Cosine, Sine) = (x, y).'" }
      ],
      interventionTip: "Use physical paper plate unit circle crafts with color-coded pie slices for π/6, π/4, and π/3."
    },
    studentStrategy: {
      anchorTitle: "The Unit Circle Coordinate Engine",
      visualHook: "🧭 Unit Circle (r = 1) ➡️ (x = cos θ, y = sin θ) ➡️ 🖐️ Left Hand Trick ➡️ 🎯 Exact Value!",
      stepByStepGuide: [
        "1. Identify the angle in radians or degrees.",
        "2. Determine which Quadrant the angle lands in (I, II, III, or IV).",
        "3. Find the Reference Angle (30°, 45°, or 60°).",
        "4. Recall the base coordinate: (cos, sin).",
        "5. Apply quadrant sign (ASTC: All, Sine, Tan, Cos positive)!"
      ],
      selfCheckChecklist: [
        "Did I remember that x = cos and y = sin?",
        "Did I check the quadrant sign (+ or -)?",
        "Is my answer in exact radical form (not decimal)?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "What is the exact value of sin(5π/6)?",
      answerChoices: ["A) -1/2", "B) 1/2", "C) √3/2", "D) -√3/2"],
      correctAnswer: "B) 1/2",
      teacherExemplarExplanation: "5π/6 is in Quadrant II, where sine is positive. Reference angle is π - 5π/6 = π/6 (30°). sin(π/6) = 1/2. Thus sin(5π/6) = +1/2."
    },
    worksheets: [
      {
        id: "ws-hsftf1-1",
        title: "Pre-Calculus: Exact Value Unit Circle Mastery",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. Evaluate cos(4π/3).\n2. Evaluate tan(3π/4).\n3. Find all θ in [0, 2π) where sin(θ) = -√2/2."
      }
    ]
  },

  // High School AP Calculus AB/BC
  {
    id: "ap-calc-derivatives-1",
    state: "US",
    stateSystem: "CCSS",
    grade: "High School (9-12)",
    subject: "Mathematics",
    code: "AP Calc CHA-2",
    title: "Derivatives: Chain Rule, Implicit Differentiation & Related Rates",
    description: "Calculate derivatives of composite functions using the Chain Rule, find tangent lines using implicit differentiation, and solve real-world related rates geometric rate-of-change problems.",
    swbatObjective: "SWBAT solve geometric related rates problems (conical tanks, sliding ladders, expanding spheres) by implicitly differentiating with respect to time (d/dt) with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "AP Calc CHA-1", title: "Calculate derivatives using Power, Product, and Quotient Rules" }],
      futureExtensionCodes: [{ code: "AP Calc INT-1", title: "The Fundamental Theorem of Calculus and Definite Integrals" }]
    },
    realWorldConnections: [
      "Calculating water drainage and pump rates in civil engineering reservoir systems.",
      "Tracking the velocity and deceleration of spacecraft entering planetary atmospheres.",
      "Optimizing financial portfolio rates of change in quantitative algorithmic trading."
    ],
    sentenceStems: [
      "Given the geometric formula V = _____, differentiating with respect to time yields dV/dt = _____.",
      "By applying the Chain Rule, the derivative of f(g(x)) is f'(g(x)) · _____.",
      "At the instant when h = _____ and dh/dt = _____, the rate of volume change is _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that the derivative represents the instantaneous rate of change and that when quantities are geometrically linked, their rates of change are coupled through the Chain Rule.",
      stage2AssessmentEvidence: "Conical Water Tank Related Rates Investigation where students solve for dh/dt and verify units of measurement.",
      stage3LearningPlanSequence: "Chain rule composite derivation -> Implicit differentiation with respect to time -> 5-Step Related Rates Protocol."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher reads a ladder sliding down a wall problem (x^2 + y^2 = 25), differentiates with respect to time 2x(dx/dt) + 2y(dy/dt) = 0, substitutes known values, and solves for dy/dt.",
      weDoGuidedPractice: "Class works in pairs to set up a conical reservoir problem, using similar triangles to substitute r in terms of h before differentiating.",
      youDoTogetherCollaborative: "Student pairs solve AP-style free-response related rates questions (expanding spherical balloons and searchlight angles).",
      youDoAloneIndependentMastery: "Students complete 4 summative AP Calculus derivative and related rates items."
    },
    dokQuestions: {
      dok1Recall: "What is the derivative of sin(u) with respect to x using the Chain Rule?",
      dok2SkillConcept: "Why must you differentiate with respect to time (d/dt) rather than x in related rates problems?",
      dok3StrategicThinking: "In a conical water tank problem, why is it crucial to eliminate the variable r using similar triangles BEFORE differentiating?",
      dok4ExtendedThinking: "A police radar car clocks a speeding vehicle moving perpendicular to the highway. Derive the formula for the vehicle's true speed in terms of distance D and dD/dt."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: 5-Step Related Rates Blueprint (Draw & Label -> Identify Given Rates -> Write Geometric Formula -> Differentiate d/dt -> Substitute & Solve).",
        "Step 2: Similar Triangle Ratio substitution prior to differentiation.",
        "Step 3: Units check (e.g. cm^3/s for dV/dt vs. cm/s for dh/dt)."
      ],
      commonMisconceptions: [
        { flaw: "Plugging numbers into variables BEFORE differentiating.", correctionPath: "Enforce: 'Never freeze the snapshot before differentiating! Variables stay letters until after d/dt is performed.'" }
      ],
      interventionTip: "Use physical animated GeoGebra sliders showing ladder sliding to connect geometry with rate arrows."
    },
    studentStrategy: {
      anchorTitle: "The Related Rates 5-Step Blueprint",
      visualHook: "📐 Draw Diagram ➡️ 🏷️ List Given & Needed Rates ➡️ 📝 Write Equation ➡️ ⚡ Differentiate d/dt ➡️ 🎯 Plug & Solve!",
      stepByStepGuide: [
        "1. Draw a picture of the scene and label constants vs. changing variables.",
        "2. List your Given Rates (e.g., dx/dt = 2 ft/s) and Needed Rate (dy/dt = ?).",
        "3. Write the relating geometric formula (Pythagorean, Volume, Trig).",
        "4. If necessary, use similar triangles to reduce to ONE variable.",
        "5. Differentiate implicitly with respect to time (d/dt).",
        "6. Substitute the frozen snapshot numbers and solve!"
      ],
      selfCheckChecklist: [
        "Did I differentiate BEFORE plugging in snapshot values?",
        "Did I remember to multiply by dx/dt or dy/dt every time by Chain Rule?",
        "Are my units correct (length/time vs. volume/time)?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "A 10-foot ladder leans against a vertical wall. The bottom of the ladder slides away from the wall at a rate of 2 ft/sec. How fast is the top of the ladder sliding down the wall at the instant when the bottom is 6 feet from the wall?",
      answerChoices: [
        "A) -1.5 ft/sec",
        "B) -2.0 ft/sec",
        "C) -3.0 ft/sec",
        "D) -0.75 ft/sec"
      ],
      correctAnswer: "A) -1.5 ft/sec",
      teacherExemplarExplanation: "Equation: x^2 + y^2 = 10^2. At x = 6, y = √(100 - 36) = 8 ft. Differentiate d/dt: 2x(dx/dt) + 2y(dy/dt) = 0 -> 2(6)(2) + 2(8)(dy/dt) = 0 -> 24 + 16(dy/dt) = 0 -> dy/dt = -24/16 = -1.5 ft/sec."
    },
    worksheets: [
      {
        id: "ws-apcalccha2-1",
        title: "AP Calculus: Related Rates & Implicit Differentiation Lab",
        type: "Practice",
        estimatedTimeMin: 30,
        previewContent: "1. Ladder problem with angle of elevation rate.\n2. Conical tank filling at 5 m^3/min: Find dh/dt when h = 3m."
      }
    ]
  }
];
