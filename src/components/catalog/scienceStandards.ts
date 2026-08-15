import { StandardItem } from "../types";

export const SCIENCE_STANDARDS_CATALOG: StandardItem[] = [
  // Pre-K Science
  {
    id: "teks-pk-sci-1",
    state: "TX",
    stateSystem: "TEKS",
    grade: "Pre-K",
    subject: "Natural Sciences",
    code: "TEKS PK.VI.A.1",
    title: "Child uses senses to explore properties and characteristics of objects",
    description: "Child observes, investigates, and describes properties of common objects (size, shape, color, texture, weight) using the five senses.",
    swbatObjective: "SWBAT sort classroom objects into categories based on observable physical properties (rough/smooth, hard/soft, heavy/light) using tactile senses with 90% accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "PK.VI.0", title: "Show curiosity and explore environment with senses" }],
      futureExtensionCodes: [{ code: "NGSS K-PS1-1", title: "Plan and conduct an investigation to describe properties of materials" }]
    },
    realWorldConnections: [
      "Feeling the rough bark of an oak tree versus a smooth polished pebble on the playground.",
      "Tasting sweet strawberries versus sour lemons during sensory snack time.",
      "Listening to loud thunder drums versus quiet wind chimes."
    ],
    sentenceStems: [
      "When I touch this object with my hands, it feels _____.",
      "I used my sense of _____ to find out that _____.",
      "These two objects belong together because they are both _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Children will understand that scientists use their five senses (sight, touch, hearing, smell, taste) as investigative tools to explore and describe the physical world.",
      stage2AssessmentEvidence: "Sensory Mystery Box Sorting Task where the child feels 4 hidden objects and sorts them into 'Rough' and 'Smooth' bowls.",
      stage3LearningPlanSequence: "5 Senses exploration stations: Texture Touch Boards -> Scent Jars -> Sound Matching Shakers -> Physical Sorting."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher introduces the 'Sensory Scientist Lab Coat', models touching a bumpy pinecone and a silky feather, and sorts them into labeled texture bins.",
      weDoGuidedPractice: "Teacher and children touch different fabric swatches (burlap, velvet, sandpaper) and vote on whether each is rough or smooth.",
      youDoTogetherCollaborative: "Child pairs work at water and sand sensory tables, testing which objects sink or float.",
      youDoAloneIndependentMastery: "Child demonstrates sorting a set of 4 textured objects for the educator."
    },
    dokQuestions: {
      dok1Recall: "Which body part do you use for your sense of hearing?",
      dok2SkillConcept: "How can you tell if a rock is smooth without looking at it?",
      dok3StrategicThinking: "If you have an apple and a ball that look identical, what other sense can you use to tell which one is food?",
      dok4ExtendedThinking: "Go on a 5-minute outdoor Nature Hunt and collect 3 items: one hard, one soft, and one bumpy."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: 5 Senses visual picture cards (Eye, Hand, Ear, Nose, Tongue).",
        "Step 2: Sensory Touch Boxes with cut-out hand holes.",
        "Step 3: Concrete sorting trays with dual visual labels."
      ],
      commonMisconceptions: [
        { flaw: "Thinking all big objects must be heavy and all small objects must be light.", correctionPath: "Hand the child a giant lightweight sponge and a small heavy lead/metal marble to test weight on a balance beam." }
      ],
      interventionTip: "Use textured touch-and-feel fabric books."
    },
    studentStrategy: {
      anchorTitle: "The 5 Senses Scientist",
      visualHook: "👀 See ➕ 🖐️ Touch ➕ 👂 Hear ➕ 👃 Smell ➡️ 🔬 Discover Science!",
      stepByStepGuide: [
        "1. Put on your Scientist Thinking Cap.",
        "2. Look closely with your eyes.",
        "3. Feel gently with your fingertips.",
        "4. Describe how it feels: Soft, Hard, Rough, Smooth, Warm, Cold!",
        "5. Put it in the matching sorting bowl!"
      ],
      selfCheckChecklist: [
        "Did I touch the object gently?",
        "Did I describe its texture?",
        "Does it match the other items in the group?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Look at the four items: A teddy bear 🧸, a rock 🪨, a cotton ball ☁️, and a soft blanket 🧶. Which item does NOT belong in the 'Soft & Fluffy' group?",
      answerChoices: ["A) The teddy bear", "B) The rock", "C) The cotton ball", "D) The blanket"],
      correctAnswer: "B) The rock",
      teacherExemplarExplanation: "The rock is hard and rigid, whereas the teddy bear, cotton ball, and blanket are all soft."
    },
    worksheets: [
      {
        id: "ws-pksci-1",
        title: "Pre-K Science: 5 Senses Texture Sorting",
        type: "Practice",
        estimatedTimeMin: 10,
        previewContent: "1. Match sensory organ to action (Eye ↔ See, Hand ↔ Touch).\n2. Color the rough items brown and soft items pink."
      }
    ]
  },

  // Kindergarten Science
  {
    id: "ngss-k-ps2-1",
    state: "US",
    stateSystem: "NGSS",
    grade: "Kindergarten",
    subject: "Natural Sciences",
    code: "NGSS K-PS2-1",
    title: "Pushes & Pulls: Forces, Direction & Motion",
    description: "Plan and conduct an investigation to compare the effects of different strengths or different directions of pushes and pulls on the motion of an object.",
    swbatObjective: "SWBAT investigate and demonstrate how pushes and pulls change the speed and direction of moving objects (toy cars, ramps, rolling spheres) with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS PK.VI.A.1", title: "Observe and describe movement of objects" }],
      futureExtensionCodes: [{ code: "NGSS 3-PS2-1", title: "Plan and conduct investigations on balanced and unbalanced forces" }]
    },
    realWorldConnections: [
      "Pushing a swing on the playground versus pulling a red wagon.",
      "Kicking a soccer ball softly for a pass versus hard for a goal.",
      "Pulling open a heavy classroom door versus pushing it closed."
    ],
    sentenceStems: [
      "When I give the toy car a _____ (big/small) push, it travels _____ (farther/shorter).",
      "A pull moves an object _____ (closer to / away from) my body.",
      "When two rolling balls collide, their direction _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that all motion is caused by forces (pushes and pulls), and that stronger forces produce greater changes in speed and distance.",
      stage2AssessmentEvidence: "Ramp and Marble Force Investigation where students demonstrate how changing push strength alters vehicle distance.",
      stage3LearningPlanSequence: "Playground push/pull hunt -> Ramp rolling physics lab -> Collision direction investigation."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher rolls a bowling ball and a tennis ball down wooden ramps of varying heights, measuring distance with tape and demonstrating push forces.",
      weDoGuidedPractice: "Students test rolling toy cars on smooth tile versus rough carpet, observing how friction slows the push force.",
      youDoTogetherCollaborative: "Student pairs build ramp tracks with cardboard tubes and test how marble collisions alter direction.",
      youDoAloneIndependentMastery: "Students complete the Push vs. Pull visual sorting and force prediction worksheet."
    },
    dokQuestions: {
      dok1Recall: "Does pulling a wagon move it closer to you or further away?",
      dok2SkillConcept: "Why does a toy car roll farther on smooth tile than on a thick fuzzy rug?",
      dok3StrategicThinking: "If you want a bowling ball to stop rolling, what kind of force must you apply to it?",
      dok4ExtendedThinking: "Design a miniature mini-golf obstacle hole that uses both a ramp push and a bumper redirection."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Body Movement Gestures (Push = Hands pushing away, Pull = Arms pulling in).",
        "Step 2: Ramp Slope Physics testing (Gentle slope vs. Steep slope).",
        "Step 3: Distance Measurement using non-standard units (linking cube chains)."
      ],
      commonMisconceptions: [
        { flaw: "Believing that heavy objects will naturally move on their own without any push/pull force.", correctionPath: "Show that an object stays stationary until an external force acts on it." }
      ],
      interventionTip: "Use physical tug-of-war ropes to feel the pull force."
    },
    studentStrategy: {
      anchorTitle: "The Push and Pull Force Lab",
      visualHook: "👐 PUSH (Move Away) ↔️ 🤲 PULL (Bring Close) ➡️ 🏎️ Motion Changes!",
      stepByStepGuide: [
        "1. Identify the object you want to move.",
        "2. Decide: Do you want it to move AWAY (Push) or TOWARD you (Pull)?",
        "3. Choose your force strength: Gentle push or Big push?",
        "4. Watch the speed and distance.",
        "5. Measure how far it rolled!"
      ],
      selfCheckChecklist: [
        "Did I identify if it is a push or a pull?",
        "Did I notice if a bigger push made it go farther?",
        "Did I check what happened when it hit a wall?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Which of the following actions is an example of a PULL force?",
      answerChoices: [
        "A) Kicking a soccer ball across the grass",
        "B) Pulling a red wagon behind you on the sidewalk",
        "C) Pushing a grocery cart down the aisle",
        "D) Throwing a baseball to the catcher"
      ],
      correctAnswer: "B) Pulling a red wagon behind you on the sidewalk",
      teacherExemplarExplanation: "Pulling a red wagon brings the object toward or along with the person exerting the force."
    },
    worksheets: [
      {
        id: "ws-ngsskps21-1",
        title: "Kindergarten Science: Push & Pull Forces Lab",
        type: "Practice",
        estimatedTimeMin: 10,
        previewContent: "1. Circle PUSH or PULL for each picture (Opening door, Kicking ball, Zipping coat).\n2. Draw a vehicle rolling down a steep ramp."
      }
    ]
  },

  // 2nd Grade Science
  {
    id: "teks-2-9a",
    state: "TX",
    stateSystem: "TEKS",
    grade: "2nd Grade",
    subject: "Natural Sciences",
    code: "TEKS 2.9A",
    title: "Plant & Animal Life Cycles and Metamorphosis",
    description: "Investigate and record some of the unique stages that insects undergo during their life cycle, such as complete and incomplete metamorphosis, and compare life cycles of plants and animals.",
    swbatObjective: "SWBAT sequence and contrast the four stages of complete metamorphosis in butterflies/beetles (Egg -> Larva -> Pupa -> Adult) with plant germination life cycles with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS 1.10C", title: "Compare ways that young animals resemble their parents" }],
      futureExtensionCodes: [{ code: "TEKS 4.10A", title: "Explore that organisms undergo similar life cycles including inherited traits" }]
    },
    realWorldConnections: [
      "Observing caterpillars transforming inside chrysalises in classroom terrariums.",
      "Planting sunflower seeds in school garden beds and watching seed germination.",
      "Recognizing tadpoles transforming into adult frogs in local pond habitats."
    ],
    sentenceStems: [
      "In complete metamorphosis, the four stages are _____, _____, _____, and _____.",
      "During the pupa stage, the caterpillar transforms inside a _____.",
      "The life cycle of a flowering plant begins when a seed _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that all living organisms experience a predictable, cyclical sequence of birth, growth, reproduction, and death with specialized structural adaptations.",
      stage2AssessmentEvidence: "Life Cycle Wheel Performance Assessment where students construct and illustrate a rotating 4-stage metamorphosis diagram.",
      stage3LearningPlanSequence: "Live caterpillar observation -> 4-Stage Metamorphosis modeling -> Comparative Plant Seed Germination lab."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher displays live chrysalis models, narrates the 4 stages of complete metamorphosis (Egg -> Larva/Caterpillar -> Pupa/Chrysalis -> Adult Butterfly), and models pasta stage crafts.",
      weDoGuidedPractice: "Class sequences magnetic life cycle picture cards on a circular flow chart whiteboard.",
      youDoTogetherCollaborative: "Student pairs dissect lima bean seeds soaked in water to locate the baby plant embryo and food storage cotyledon.",
      youDoAloneIndependentMastery: "Students complete the life cycle sequencing and comparative diagram assessment."
    },
    dokQuestions: {
      dok1Recall: "What is the feeding stage of a butterfly called before it enters the pupa?",
      dok2SkillConcept: "How is complete metamorphosis (4 stages with pupa) different from incomplete metamorphosis (3 stages with nymph)?",
      dok3StrategicThinking: "Why is the chrysalis/pupa stage essential for the caterpillar's survival during its total body restructuring?",
      dok4ExtendedThinking: "Create a comparative Venn diagram comparing the life cycle of a frog (amphibian) with the life cycle of a monarch butterfly (insect)."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Pasta Life Cycle Craft (Rice = Egg, Rotini = Caterpillar, Shell = Chrysalis, Bowtie = Butterfly).",
        "Step 2: Circular Flow Chart with clockwise progression arrows.",
        "Step 3: Comparative Plant vs. Animal life cycle Venn diagrams."
      ],
      commonMisconceptions: [
        { flaw: "Thinking a cocoon and a chrysalis are identical.", correctionPath: "Clarify: 'Butterflies form a smooth hard Chrysalis; Moths spin a silk Cocoon!'" }
      ],
      interventionTip: "Use physical 3D realistic plastic miniature life cycle figurines."
    },
    studentStrategy: {
      anchorTitle: "The 4-Stage Metamorphosis Wheel",
      visualHook: "🥚 Egg ➡️ 🐛 Larva (Caterpillar) ➡️ 🪆 Pupa (Chrysalis) ➡️ 🦋 Adult Butterfly!",
      stepByStepGuide: [
        "1. Start at the top: Female lays an EGG.",
        "2. The egg hatches into a hungry LARVA (Caterpillar).",
        "3. The larva forms a protective PUPA (Chrysalis) to transform.",
        "4. An ADULT emerges with wings to lay new eggs.",
        "5. The cycle repeats continuously!"
      ],
      selfCheckChecklist: [
        "Did I put the 4 stages in the correct chronological order?",
        "Did I remember the pupa/chrysalis stage?",
        "Does my diagram form a continuous circle/cycle?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Which of the following correctly lists the four stages of complete metamorphosis in order?",
      answerChoices: [
        "A) Egg -> Adult -> Pupa -> Larva",
        "B) Egg -> Larva -> Pupa -> Adult",
        "C) Pupa -> Egg -> Larva -> Adult",
        "D) Adult -> Nymph -> Pupa -> Egg"
      ],
      correctAnswer: "B) Egg -> Larva -> Pupa -> Adult",
      teacherExemplarExplanation: "Complete metamorphosis proceeds strictly through 4 sequential stages: Egg -> Larva (feeding) -> Pupa (transforming) -> Adult (reproducing)."
    },
    worksheets: [
      {
        id: "ws-teks29a-1",
        title: "2nd Grade Science: Metamorphosis & Life Cycles",
        type: "Practice",
        estimatedTimeMin: 15,
        previewContent: "1. Cut and paste 4 stages of monarch butterfly life cycle.\n2. Label seed germination parts (Root, Stem, Seed Coat)."
      }
    ]
  },

  // 4th Grade Science
  {
    id: "teks-4-6a",
    state: "TX",
    stateSystem: "TEKS",
    grade: "4th Grade",
    subject: "Natural Sciences",
    code: "TEKS 4.6A",
    title: "Forms of Energy & Transformations (M.E.L.T.S. Framework)",
    description: "Differentiate among forms of energy, including mechanical, sound, electrical, light, and thermal energy, and explore how energy is conserved and transferred through circuits and collisions.",
    swbatObjective: "SWBAT identify and trace energy transformations in everyday machines and electrical circuits using the M.E.L.T.S. framework (Mechanical, Electrical, Light, Thermal, Sound) with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS 3.6A", title: "Explore and recognize that forces cause changes in energy and motion" }],
      futureExtensionCodes: [{ code: "TEKS 6.9C", title: "Demonstrate energy transformations such as electrical to thermal, light, and mechanical" }]
    },
    realWorldConnections: [
      "Tracing how a flashlight transforms chemical battery energy into electrical and light energy.",
      "Understanding how a toaster turns electrical energy into thermal and light energy.",
      "Analyzing solar panels transforming sunlight into electrical energy for homes."
    ],
    sentenceStems: [
      "In this appliance, _____ energy transforms into _____ energy.",
      "The five forms of energy are remembered by the acronym M.E.L.T.S.: Mechanical, Electrical, Light, Thermal, and Sound.",
      "Energy is never created or destroyed; it only _____ from one form to another."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that energy exists in multiple forms and continuously converts between mechanical, electrical, light, thermal, and sound without disappearing.",
      stage2AssessmentEvidence: "Energy Transformation Circuit Design Assessment where students trace the energy pathway in a multi-component circuit.",
      stage3LearningPlanSequence: "M.E.L.T.S. Discovery Stations -> Snap Circuit Building -> Transformation Pathway Mapping."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher demonstrates a hand-crank generator powering a lightbulb and buzzer, modeling the pathway: Mechanical (hand motion) -> Electrical -> Light + Thermal + Sound.",
      weDoGuidedPractice: "Class uses Snap Circuits to build a series circuit containing a battery, switch, motor with fan, and lamp.",
      youDoTogetherCollaborative: "Student pairs inspect 5 household appliance cards (blender, hairdryer, microwave) and diagram energy input vs. output.",
      youDoAloneIndependentMastery: "Students complete 5 independent energy transformation scenario items."
    },
    dokQuestions: {
      dok1Recall: "What do the letters in the M.E.L.T.S. acronym stand for?",
      dok2SkillConcept: "When you rub your hands together briskly on a cold day, what energy transformation occurs?",
      dok3StrategicThinking: "When a television is turned on, what form of energy goes IN, and what THREE forms of energy come OUT?",
      dok4ExtendedThinking: "Design a Rube Goldberg machine containing at least four distinct energy transformations starting with a rolling marble."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: M.E.L.T.S. Visual Color Anchor (M=Blue gears, E=Yellow lightning, L=Orange sun, T=Red flame, S=Green speaker).",
        "Step 2: Input -> Transformation Machine -> Output Arrow Diagrams.",
        "Step 3: Hands-on circuit continuity testing."
      ],
      commonMisconceptions: [
        { flaw: "Believing that energy is 'used up' or completely disappears when a battery dies.", correctionPath: "Explain the Law of Conservation of Energy: 'Energy doesn't vanish; it scatters into invisible thermal heat and sound in the air!'" }
      ],
      interventionTip: "Use physical hand-warmers and hand-crank flashlights for multi-sensory energy verification."
    },
    studentStrategy: {
      anchorTitle: "The M.E.L.T.S. Energy Transformation Engine",
      visualHook: "⚡ M (Mechanical) • E (Electrical) • L (Light) • T (Thermal) • S (Sound) ➡️ 🔄 Energy Never Disappears!",
      stepByStepGuide: [
        "1. Identify the INPUT energy (What powers it? Outlet = Electrical, Hand = Mechanical, Sun = Light).",
        "2. Identify the MACHINE / OBJECT.",
        "3. Identify the OUTPUT energies (What does it produce? Heat, Motion, Light, Sound?).",
        "4. Write the chain: [Input Energy] ➡️ [Output Energies]!",
        "5. Remember: Total Energy In = Total Energy Out!"
      ],
      selfCheckChecklist: [
        "Did I check for hidden thermal (heat) output?",
        "Did I use the M.E.L.T.S. acronym to name exact energy forms?",
        "Does my transformation chain follow the direction of arrows?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "When a student uses an electric hairdryer to dry their hair, what is the primary energy transformation that takes place?",
      answerChoices: [
        "A) Thermal energy transforms into Electrical and Light energy",
        "B) Electrical energy transforms into Thermal, Mechanical (fan), and Sound energy",
        "C) Sound energy transforms into Electrical energy",
        "D) Chemical energy transforms into Nuclear energy"
      ],
      correctAnswer: "B) Electrical energy transforms into Thermal, Mechanical (fan), and Sound energy",
      teacherExemplarExplanation: "The wall outlet supplies Electrical energy, which powers heating coils (Thermal), a spinning fan motor (Mechanical), and emits noise (Sound)."
    },
    worksheets: [
      {
        id: "ws-teks46a-1",
        title: "4th Grade Science: M.E.L.T.S. Energy Transformation Lab",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. Diagram energy transformation chains for: Flashlight, Microwave, Electric Guitar.\n2. Build a closed electrical circuit with switch and motor."
      }
    ]
  },

  // 5th Grade Science
  {
    id: "ngss-5-ps1-1",
    state: "US",
    stateSystem: "NGSS",
    grade: "5th Grade",
    subject: "Natural Sciences",
    code: "NGSS 5-PS1-1",
    title: "Particle Nature & States of Matter",
    description: "Develop a model to describe that matter is made of particles too small to be seen. Examples of evidence could include adding air to expand a basketball, compressing air in a syringe, dissolving sugar in water, and evaporating salt water.",
    swbatObjective: "SWBAT construct and explain a particle collision model demonstrating that gases and dissolved substances consist of particles too small to be seen that maintain mass during phase changes with 80%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [
        { code: "NGSS 2-PS1-1", title: "Classify different kinds of materials by observable properties" }
      ],
      futureExtensionCodes: [
        { code: "NGSS MS-PS1-1", title: "Develop molecular models to describe atomic compositions of simple molecules" }
      ]
    },
    realWorldConnections: [
      "Inflating automobile or bicycle tires with compressed air.",
      "Smelling cookies baking in the kitchen from across the hallway.",
      "Dissolving electrolyte powder into water bottles during athletics."
    ],
    sentenceStems: [
      "The evidence that matter is made of tiny particles is _____.",
      "When the gas is compressed, the particles _____.",
      "Even though we cannot see the dissolved sugar particles, we know they are still there because _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that all matter is particulate, and that invisible gases and solutions possess measurable mass and volume.",
      stage2AssessmentEvidence: "Digital Particle Simulation Lab Assessment where students model particle spacing in solids, liquids, and gases under varying pressure.",
      stage3LearningPlanSequence: "Phenomenon-driven inquiry unit starting with syringe air compression and digital particle collision sandbox."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher demonstrates compressing an air-filled sealed syringe on an electronic digital scale to prove air has mass and occupies volume.",
      weDoGuidedPractice: "Students use physical marble trays or digital ball-physics widgets to model how gas particles bounce off container walls.",
      youDoTogetherCollaborative: "Student lab groups dissolve 20g of salt into 100g of water, measure total mass before and after, and draw atomic particle sketches.",
      youDoAloneIndependentMastery: "Students complete the NGSS 5-PS1-1 Evidence-Based Reasoning analysis sheet."
    },
    dokQuestions: {
      dok1Recall: "What are the three common states of matter?",
      dok2SkillConcept: "How does heating a liquid change the movement and spacing of its particles?",
      dok3StrategicThinking: "A closed plastic water bottle collapses when brought onto an airplane. Use particle theory to explain what happens to the air inside.",
      dok4ExtendedThinking: "Design an experiment to prove that odor molecules from an orange peel travel through the air as physical particles."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Concrete — Hands-on syringe compression and electronic scale mass verification.",
        "Step 2: Visual Simulation — Colored circle particle diagrams showing density differences.",
        "Step 3: Claim-Evidence-Reasoning (CER) written scientific explanation."
      ],
      commonMisconceptions: [
        {
          flaw: "Believing that gas has no weight or disappears when compressed.",
          correctionPath: "Place a deflated sports ball on a precision digital scale, pump it with air, and re-weigh to show the increase in grams."
        }
      ],
      interventionTip: "Use cheerios or foam balls inside a clear plastic bag to visually demonstrate particle compression."
    },
    studentStrategy: {
      anchorTitle: "The Invisible Particle Physics Model",
      visualHook: "🧊 Solid (Locked Tight) ➡️ 💧 Liquid (Flowing Close) ➡️ 💨 Gas (Bouncing Free Everywhere)!",
      stepByStepGuide: [
        "1. Identify the state of matter (Solid, Liquid, Gas).",
        "2. Draw the particles as tiny circles.",
        "3. Show particle spacing and motion arrows.",
        "4. Remember: Mass is ALWAYS conserved!"
      ],
      selfCheckChecklist: [
        "Did I draw particles in all parts of the gas container?",
        "Did I explain that particles are too small for our eyes to see?",
        "Did I verify that the total mass did not change?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "A student dissolves 15 grams of sugar into 100 grams of warm water in a closed container. What will be the total mass of the sugar-water solution, and what happened to the sugar particles?",
      answerChoices: [
        "A) 100 grams; the sugar particles disappeared completely",
        "B) 115 grams; the sugar particles broke apart into tiny particles too small to see",
        "C) 85 grams; the sugar particles turned into gas and escaped",
        "D) 130 grams; the water created extra sugar particles"
      ],
      correctAnswer: "B) 115 grams; the sugar particles broke apart into tiny particles too small to see",
      teacherExemplarExplanation: "Mass is conserved in closed systems (100g + 15g = 115g). Dissolving separates the sugar into individual microscopic particles that remain in solution."
    },
    worksheets: [
      {
        id: "ws-5ps1-1",
        title: "5th Grade Science: Particle Theory & Conservation of Mass",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. Draw particle diagrams for ice, water, and steam.\n2. Explain why a balloon inflates when heated."
      }
    ]
  },

  // 6th Grade Science
  {
    id: "teks-6-6a",
    state: "TX",
    stateSystem: "TEKS",
    grade: "6th Grade",
    subject: "Natural Sciences",
    code: "TEKS 6.6A",
    title: "Physical Properties of Metals, Nonmetals & Metalloids",
    description: "Compare metals, nonmetals, and metalloids using physical properties such as luster, conductivity (thermal and electrical), malleability, ductility, and density.",
    swbatObjective: "SWBAT classify unknown element samples as metals, nonmetals, or metalloids by conducting conductivity, luster, malleability, and density testing with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS 5.5A", title: "Classify matter based on measurable physical properties" }],
      futureExtensionCodes: [{ code: "TEKS 8.5C", title: "Interpret the Periodic Table to identify properties of element families" }]
    },
    realWorldConnections: [
      "Selecting copper wiring vs. rubber insulation for safe home electrical circuitry.",
      "Using silicon semiconductor chips in smartphone central processing units.",
      "Engineering lightweight aluminum aircraft fuselages."
    ],
    sentenceStems: [
      "Sample X is classified as a metal because it demonstrates high _____ and _____.",
      "Metalloids are unique elements because they exhibit properties of both _____ and _____.",
      "Nonmetals are typically poor conductors of electricity and are physically _____ when struck."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that elements are categorized into distinct groups on the Periodic Table based on predictable physical properties determined by their atomic structures.",
      stage2AssessmentEvidence: "Unknown Mineral & Element Laboratory Assessment where students test 5 unidentified solid elements and classify each via physical property matrices.",
      stage3LearningPlanSequence: "Property testing stations (Conductivity meters, streak plates, hammer malleability) -> Periodic Table location mapping."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher demonstrates testing copper wire (shiny luster, conducts electricity, bends without shattering) and compares with a sulfur block (dull, non-conductive, brittle).",
      weDoGuidedPractice: "Class tests silicon semiconductor wafers with LED multimeter probes, observing semi-conductivity.",
      youDoTogetherCollaborative: "Student lab groups rotate through 4 testing stations with unknown element cylinders, recording luster, conductivity, and density.",
      youDoAloneIndependentMastery: "Students complete the Periodic Table element classification analysis sheet."
    },
    dokQuestions: {
      dok1Recall: "What property describes the ability of a metal to be hammered into thin sheets without breaking?",
      dok2SkillConcept: "Why is silicon (a metalloid) used in computer microchips rather than pure copper (a metal)?",
      dok3StrategicThinking: "An unknown element is shiny and solid, but when struck with a mallet it shatters into powder. Is it a metal, nonmetal, or metalloid? Justify.",
      dok4ExtendedThinking: "Design an optimal aerospace satellite component choosing 3 specific elements for structural strength, thermal insulation, and circuitry."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: The 'L.C.M.D.' Physical Property Matrix (Luster, Conductivity, Malleability, Ductility).",
        "Step 2: Periodic Table 'Staircase' divider (Metals on Left, Nonmetals on Right, Metalloids hugging the border).",
        "Step 3: Multi-meter circuit conductivity testing."
      ],
      commonMisconceptions: [
        { flaw: "Assuming all metals are magnetic.", correctionPath: "Demonstrate that common metals like Aluminum and Copper do not attract to neodymium magnets (only Ferromagnetic metals: Iron, Nickel, Cobalt do)." }
      ],
      interventionTip: "Use physical tactile sample cubes of pure Copper, Zinc, Sulfur, Silicon, and Carbon."
    },
    studentStrategy: {
      anchorTitle: "The Element Classification Blueprint",
      visualHook: "✨ Luster (Shiny/Dull) ➕ ⚡ Conductivity ➕ 🔨 Malleability ➡️ 🗺️ Metal / Metalloid / Nonmetal!",
      stepByStepGuide: [
        "1. Observe LUSTER: Is it Shiny (Metallic) or Dull/Earthy?",
        "2. Test CONDUCTIVITY: Does the LED circuit light up brightly (Metal), dimly (Metalloid), or not at all (Nonmetal)?",
        "3. Test MALLEABILITY: Does it bend/flatten (Metal) or shatter into brittle dust (Nonmetal)?",
        "4. Combine your clues and locate on the Periodic Table Staircase!",
        "5. Record your classification and justify with evidence!"
      ],
      selfCheckChecklist: [
        "Did I test all 3 properties (Luster, Conductivity, Malleability)?",
        "Did I check if it shares properties of both (Metalloid)?",
        "Does its location on the Periodic Table match my test results?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "A scientist tests an unknown solid element. It is shiny silver in appearance, conducts electricity, and can be drawn into thin wires without breaking (ductile). Where is this element located on the Periodic Table?",
      answerChoices: [
        "A) To the left of the metalloid staircase line (Metal)",
        "B) In the far right column (Noble Gas)",
        "C) Along the diagonal staircase (Metalloid)",
        "D) At the top right corner (Nonmetal)"
      ],
      correctAnswer: "A) To the left of the metalloid staircase line (Metal)",
      teacherExemplarExplanation: "High luster, electrical conductivity, and ductility are classic physical properties of Metals, which are located to the left of the Periodic Table staircase."
    },
    worksheets: [
      {
        id: "ws-teks66a-1",
        title: "6th Grade Science: Metals, Nonmetals & Metalloids Lab",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. Complete property table for Copper, Sulfur, Carbon, Silicon.\n2. Color-code the Periodic Table staircase."
      }
    ]
  },

  // 8th Grade Science: Physics (Newton's Laws)
  {
    id: "ngss-ms-ps2-2",
    state: "US",
    stateSystem: "NGSS",
    grade: "8th Grade",
    subject: "Natural Sciences",
    code: "NGSS MS-PS2-2",
    title: "Newton's Three Laws of Motion & Net Force (F = ma)",
    description: "Plan an investigation to provide evidence that the change in an object's motion depends on the sum of the forces on the object and the mass of the object (Newton's 1st, 2nd, and 3rd Laws).",
    swbatObjective: "SWBAT calculate net force and acceleration using Newton's Second Law formula (F = ma) and explain action-reaction pairs with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "NGSS MS-PS2-1", title: "Apply Newton's Third Law to design a solution to a collision problem" }],
      futureExtensionCodes: [{ code: "NGSS HS-PS2-1", title: "Analyze data to support the claim that Newton's second law of motion describes the mathematical relationship among net force, mass, and acceleration" }]
    },
    realWorldConnections: [
      "Automobile crash safety engineering (seatbelts, crumple zones, airbags).",
      "Rocket propulsion thrust (exhaust gas expelled backward pushes rocket forward).",
      "Athletic performance in sprinting and football blocking collisions."
    ],
    sentenceStems: [
      "According to Newton's 1st Law (Inertia), an object at rest will remain at rest unless acted upon by _____.",
      "Using F = ma, when mass increases while force is constant, acceleration must _____.",
      "The action-reaction pair in a rocket launch is: Action = _____ and Reaction = _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that forces govern all classical motion: unbalanced forces accelerate masses (F = ma), inertia resists changes in velocity, and all forces occur in equal and opposite paired interactions.",
      stage2AssessmentEvidence: "Dynamics Cart Acceleration Lab where students vary mass and pull force with photogate timers, plotting Force vs. Acceleration graphs.",
      stage3LearningPlanSequence: "Inertia table trick demonstrations -> F = ma dynamic cart graphing -> Balloon rocket action-reaction investigation."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher demonstrates pulling a dynamics cart with 2N, 4N, and 6N spring scales, recording acceleration data and graphing the linear slope equal to cart mass (F = ma).",
      weDoGuidedPractice: "Class calculates the acceleration of a 1,200 kg car pushed by a net force of 3,600 N (a = F/m = 3 m/s^2).",
      youDoTogetherCollaborative: "Student pairs build balloon rockets on fishing line tracks, measuring thrust force vs. payload mass.",
      youDoAloneIndependentMastery: "Students solve 5 multi-step Newton's Laws calculation and conceptual items."
    },
    dokQuestions: {
      dok1Recall: "What is the SI unit of measurement for force?",
      dok2SkillConcept: "How does wearing a seatbelt protect a passenger during sudden vehicle braking according to Newton's 1st Law?",
      dok3StrategicThinking: "If a 50 kg skateboarder pushes off the ground with 150 N of force, what is their initial acceleration? If they double their mass by carrying a heavy pack, what happens to acceleration?",
      dok4ExtendedThinking: "Explain why a swimmer pushes water BACKWARD with their hands in order to propel their body FORWARD through the pool."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Newton's Triad Summary (1st = Inertia, 2nd = F = ma, 3rd = Action/Reaction).",
        "Step 2: Formula Triangle for F = m · a.",
        "Step 3: Free-body force vector diagrams with directional arrows."
      ],
      commonMisconceptions: [
        { flaw: "Believing that constant motion requires a constant forward net force.", correctionPath: "Show that in zero-gravity space (no friction), an object cruises at constant velocity with ZERO net force!" }
      ],
      interventionTip: "Use physical spring scales and rolling dynamic carts with slotted weights."
    },
    studentStrategy: {
      anchorTitle: "The Newton's Laws Physics Engine",
      visualHook: "1️⃣ Inertia (Resist Change) ➡️ 2️⃣ F = ma (Force = Mass x Accel) ➡️ 3️⃣ Action = -Reaction!",
      stepByStepGuide: [
        "1. Identify all forces acting on the object (Draw directional arrows).",
        "2. Calculate NET FORCE (Forces in same direction ADD; opposite directions SUBTRACT).",
        "3. Use the F = ma formula triangle to find the unknown.",
        "4. For Action-Reaction: Name the two interacting objects (A pushes B ↔️ B pushes A)!",
        "5. Label your units: Force in Newtons (N), Mass in kg, Acceleration in m/s^2!"
      ],
      selfCheckChecklist: [
        "Did I subtract opposing forces to find Net Force?",
        "Did I use the correct formula (a = F/m or F = m*a)?",
        "Did I include proper units (Newtons) in my answer?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "A net force of 40 Newtons is applied to a rolling cart with a mass of 8 kilograms. What is the resulting acceleration of the cart?",
      answerChoices: [
        "A) 0.2 m/s²",
        "B) 5 m/s²",
        "C) 48 m/s²",
        "D) 320 m/s²"
      ],
      correctAnswer: "B) 5 m/s²",
      teacherExemplarExplanation: "Formula: a = F / m = 40 N / 8 kg = 5 m/s²."
    },
    worksheets: [
      {
        id: "ws-ngssmsps22-1",
        title: "8th Grade Science: Newton's Laws & Force Calculations",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. Calculate acceleration for 5 dynamics cart scenarios.\n2. Identify action-reaction force pairs for a jumping frog."
      }
    ]
  },

  // 8th Grade Science: Chemistry (Atomic Structure)
  {
    id: "teks-8-5a",
    state: "TX",
    stateSystem: "TEKS",
    grade: "8th Grade",
    subject: "Natural Sciences",
    code: "TEKS 8.5A",
    title: "Subatomic Particles (APE MAN) & Valence Reactivity",
    description: "Describe the structure of atoms, including the masses, electrical charges, and locations of protons and neutrons in the nucleus and electrons in the electron cloud, and determine valence electron reactivity.",
    swbatObjective: "SWBAT calculate protons, neutrons, and electrons for any Periodic Table element using the APE MAN mnemonic and determine chemical reactivity via valence electrons with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS 6.6A", title: "Compare metals, nonmetals, and metalloids" }],
      futureExtensionCodes: [{ code: "TEKS Chem 6A", title: "Understand atomic theory, electron configurations, and orbital notation" }]
    },
    realWorldConnections: [
      "Explaining why Alkali metals (Group 1) react violently with water to form hydrogen gas.",
      "Understanding why Noble Gases (Group 18) are used in neon lighting due to inert non-reactivity.",
      "Analyzing how carbon's 4 valence electrons enable complex organic biomolecules."
    ],
    sentenceStems: [
      "Using the APE MAN rule: Atomic Number equals Protons equals _____.",
      "To find neutrons: Mass Number minus Atomic Number equals _____.",
      "Element X has _____ valence electrons, making it highly _____ (reactive/inert)."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that atomic number defines element identity (protons), mass is concentrated in the nucleus (protons + neutrons), and chemical reactivity is dictated entirely by outer valence electrons.",
      stage2AssessmentEvidence: "Bohr Model Atom Builder Assessment where students construct 4 atomic models and predict their chemical group reactivity.",
      stage3LearningPlanSequence: "Subatomic particle charge/mass lab -> APE MAN calculation workshop -> Valence electron group trend mapping."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher displays a Periodic Table tile for Sodium (Na, Atomic #11, Mass 23), models APE (A=11, P=11, E=11) and MAN (M=23 - A=11 = N=12), draws a Bohr model with 1 valence electron, and demonstrates reactivity.",
      weDoGuidedPractice: "Class works in pairs to calculate subatomic particles for Chlorine (Cl) and Oxygen (O) on dry-erase atom mats.",
      youDoTogetherCollaborative: "Student pairs build 3D atom models using color-coded beads (Protons=Red, Neutrons=Blue, Electrons=Yellow).",
      youDoAloneIndependentMastery: "Students complete the 5-item atomic structure and valence reactivity check."
    },
    dokQuestions: {
      dok1Recall: "What subatomic particle determines the identity of an element?",
      dok2SkillConcept: "How does the number of valence electrons determine whether an element easily bonds with other atoms?",
      dok3StrategicThinking: "If an atom has 19 protons, 20 neutrons, and 19 electrons, what element is it? How many valence electrons does it have, and which group does it belong to?",
      dok4ExtendedThinking: "Explain why Group 1 (Alkali metals with 1 valence electron) and Group 17 (Halogens with 7 valence electrons) react together so vigorously."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: The APE MAN Mnemonic (APE: Atomic # = Protons = Electrons; MAN: Mass # - Atomic # = Neutrons).",
        "Step 2: Subatomic Particle Triad Matrix (Protons: +1 charge, 1 amu, Nucleus; Neutrons: 0 charge, 1 amu, Nucleus; Electrons: -1 charge, ~0 amu, Electron Cloud).",
        "Step 3: Valence Electron group matching (Group 1 = 1, Group 2 = 2, Group 13 = 3... Group 18 = 8)."
      ],
      commonMisconceptions: [
        { flaw: "Thinking electrons contribute significantly to the total atomic mass.", correctionPath: "Explain: 'Electrons are so tiny (1/1836th of a proton) that atomic mass is essentially just the nucleus (Protons + Neutrons)!'." }
      ],
      interventionTip: "Use physical Bohr model circular rings with magnetic dry-erase chips."
    },
    studentStrategy: {
      anchorTitle: "The APE MAN Atomic Calculator",
      visualHook: "🦍 APE (Atomic # = P = E) ➖ 👨 MAN (Mass - Atomic # = N) ➡️ ⚛️ Bohr Model!",
      stepByStepGuide: [
        "1. Find the element tile on the Periodic Table.",
        "2. Identify: Atomic Number (Top small number) and Atomic Mass (Bottom decimal number, round to whole).",
        "3. Apply APE: Atomic Number = Protons (+) = Electrons (-).",
        "4. Apply MAN: Mass Number - Atomic Number = Neutrons (0).",
        "5. Count outer VALENCE electrons: Look at the Group Number digit (Group 1 = 1, Group 17 = 7)!",
        "6. Check reactivity: 1 or 7 valence electrons = Super Reactive; 8 valence electrons = Full/Inert!"
      ],
      selfCheckChecklist: [
        "Did I round the atomic mass to the nearest whole number for MAN?",
        "Are Protons and Neutrons placed inside the central nucleus?",
        "Did I verify that the number of valence electrons matches the Periodic Table group?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "An atom of Potassium (K) has an atomic number of 19 and a rounded atomic mass of 39. How many neutrons are located inside its nucleus, and how many valence electrons does it possess?",
      answerChoices: [
        "A) 19 neutrons, 1 valence electron",
        "B) 20 neutrons, 1 valence electron",
        "C) 39 neutrons, 7 valence electrons",
        "D) 20 neutrons, 8 valence electrons"
      ],
      correctAnswer: "B) 20 neutrons, 1 valence electron",
      teacherExemplarExplanation: "MAN: Neutrons = Mass (39) - Atomic Number (19) = 20 neutrons. Potassium is in Group 1, so it has 1 valence electron."
    },
    worksheets: [
      {
        id: "ws-teks85a-1",
        title: "8th Grade Science: APE MAN Atomic Structure Lab",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. Calculate P, N, E for Carbon, Magnesium, Argon, Fluorine.\n2. Draw Bohr model for Nitrogen (N) and identify valence electrons."
      }
    ]
  },

  // High School Biology
  {
    id: "teks-bio-6a",
    state: "TX",
    stateSystem: "TEKS",
    grade: "High School (9-12)",
    subject: "Natural Sciences",
    code: "TEKS Bio 6A",
    title: "DNA Structure, Replication & Protein Synthesis",
    description: "Identify components of DNA, explain how information for specifying the traits of an organism is carried in the DNA, and evaluate the significance of the central dogma: DNA -> RNA -> Protein.",
    swbatObjective: "SWBAT model the Central Dogma of Molecular Biology by transcribing DNA triplets to mRNA codons, matching tRNA anticodons, and sequencing polypeptide chains with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [
        { code: "TEKS 7.14C", title: "Recognize that inherited traits are encoded in genetic material within cells" }
      ],
      futureExtensionCodes: [
        { code: "AP Bio IST-1", title: "Heritable information provides for continuity of life through gene expression" }
      ]
    },
    realWorldConnections: [
      "Understanding mRNA vaccines (e.g., COVID-19 Pfizer/Moderna biotechnology).",
      "Forensic DNA fingerprinting and PCR amplification in criminal justice.",
      "Genetic engineering and CRISPR Cas9 therapeutics for sickle-cell anemia."
    ],
    sentenceStems: [
      "During transcription in the nucleus, the DNA sequence _____ is transcribed into mRNA _____.",
      "During translation at the ribosome, the tRNA codon _____ delivers the amino acid _____.",
      "A point mutation in the nucleotide sequence alters the resulting protein by _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that the sequence of 4 nucleotide bases (A, T, C, G) functions as a universal genetic programming code directing cellular protein synthesis.",
      stage2AssessmentEvidence: "Central Dogma Protein Synthesis Coding Lab where students decode a secret genetic message from DNA to amino acid sequence.",
      stage3LearningPlanSequence: "Interactive molecular modeling lab exploring DNA unwinding, RNA polymerase transcription, and ribosomal translation."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher demonstrates unzipping a 3D double helix DNA strand, transcribing DNA (TAC GGC) into mRNA (AUG CCG), and looking up methionine and proline on the circular codon wheel.",
      weDoGuidedPractice: "Class uses interactive digital codon wheels to decode a mutated hemoglobin gene sequence.",
      youDoTogetherCollaborative: "Student pairs receive unknown DNA patient sequences, translate the protein chains, and diagnose genetic mutations.",
      youDoAloneIndependentMastery: "Students complete 5 summative central dogma decoding items on their TEKS Bio 6A assessment."
    },
    dokQuestions: {
      dok1Recall: "Which nitrogenous base pairs with Adenine (A) in RNA?",
      dok2SkillConcept: "How does the structure of mRNA differ from double-stranded DNA?",
      dok3StrategicThinking: "If a silent mutation changes codon GAG to GAA, why does the resulting protein remain functional?",
      dok4ExtendedThinking: "Evaluate how a single frameshift insertion mutation at the start of a gene affects the downstream polypeptide chain compared to a substitution mutation."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Color-code DNA bases: Adenine (Blue), Thymine (Green), Cytosine (Yellow), Guanine (Orange), Uracil (Pink).",
        "Step 2: Use the mnemonic: 'Apples in the Tree (A-T), Cars in the Garage (C-G), Apples Under the tree for RNA (A-U)'.",
        "Step 3: Provide a physical circular codon decoder wheel."
      ],
      commonMisconceptions: [
        {
          flaw: "Using the tRNA anticodon instead of the mRNA codon when reading the amino acid chart.",
          correctionPath: "Teach the rule: 'The Codon Wheel ONLY speaks mRNA! Always read the messenger RNA code.'"
        }
      ],
      interventionTip: "Use physical snap-together plastic nucleotide pieces to build physical DNA/RNA chains."
    },
    studentStrategy: {
      anchorTitle: "The Central Dogma Protein Assembly Line",
      visualHook: "🧬 DNA (Nucleus Blueprint) ➡️ 📜 mRNA (Messenger) ➡️ 🏭 Ribosome (Protein Factory) ➡️ 🥩 Amino Acid Chain!",
      stepByStepGuide: [
        "1. Write out the DNA template strand.",
        "2. Transcribe to mRNA (Remember: T becomes A, A becomes U, C becomes G, G becomes C).",
        "3. Group mRNA into 3-letter CODONS.",
        "4. Use the Codon Wheel to find each Amino Acid.",
        "5. Link amino acids into the final protein chain!"
      ],
      selfCheckChecklist: [
        "Did I replace Thymine (T) with Uracil (U) in the mRNA strand?",
        "Did I read codons in groups of 3?",
        "Did I check for the START codon (AUG) and STOP codons?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Given the DNA template sequence 3'- TAC GGA CTT ACT - 5', what is the correct mRNA sequence and the first amino acid translated?",
      answerChoices: [
        "A) 5'- AUG CCU GAA UGA - 3' (First amino acid: Methionine)",
        "B) 5'- ATG CCT GAA TGA - 3' (First amino acid: Tyrosine)",
        "C) 5'- UAC GGA CUU ACU - 3' (First amino acid: Leucine)",
        "D) 5'- AUG CCU GTT UGA - 3' (First amino acid: Valine)"
      ],
      correctAnswer: "A) 5'- AUG CCU GAA UGA - 3' (First amino acid: Methionine)",
      teacherExemplarExplanation: "DNA TAC transcribes to mRNA AUG (Start codon, coding for Methionine). Base pairing rules: T->A, A->U, C->G, G->C."
    },
    worksheets: [
      {
        id: "ws-bio6a-1",
        title: "High School Biology: DNA Transcription & Translation Coding Lab",
        type: "Practice",
        estimatedTimeMin: 25,
        previewContent: "1. Transcribe DNA 3'-TAC AAA CGG ATT-5' to mRNA.\n2. Decode the amino acid sequence using the codon wheel."
      }
    ]
  },

  // High School Chemistry
  {
    id: "teks-chem-7a",
    state: "TX",
    stateSystem: "TEKS",
    grade: "High School (9-12)",
    subject: "Natural Sciences",
    code: "TEKS Chem 7A",
    title: "3-Step Stoichiometry & Mass-to-Mass Chemical Yields",
    description: "Name and write formulas for chemical compounds, balance chemical equations, and calculate mass-to-mass, mass-to-mole, and mole-to-mole conversions using stoichiometric principles and the mole concept.",
    swbatObjective: "SWBAT execute 3-step dimensional analysis stoichiometry (Grams A -> Moles A -> Moles B -> Grams B) using balanced chemical equations with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS Chem 6B", title: "Balance chemical equations and apply the law of conservation of mass" }],
      futureExtensionCodes: [{ code: "AP Chem TRA-1", title: "Analyze reaction stoichiometry, limiting reactants, and percent yields" }]
    },
    realWorldConnections: [
      "Calculating fuel and liquid oxygen mass ratios for aerospace rocket launches.",
      "Pharmaceutical drug synthesis manufacturing ensuring exact dosage yields without toxic leftovers.",
      "Automobile airbag inflation stoichiometry (sodium azide NaN3 producing nitrogen gas N2)."
    ],
    sentenceStems: [
      "The balanced chemical equation indicates a mole ratio of _____ moles of A to _____ moles of B.",
      "Step 1 converts grams of reactant to moles by dividing by the molar mass of _____ g/mol.",
      "The theoretical yield of product calculated via stoichiometry is _____ grams."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that chemical reactions occur on an atom-by-atom ratio (moles), requiring dimensional conversion between macroscopic mass (grams) and submicroscopic mole quantities.",
      stage2AssessmentEvidence: "Limiting Reactant Baking Soda Lab Assessment where students calculate theoretical CO2 yield and compare with actual experimental balloon volume.",
      stage3LearningPlanSequence: "Balancing equations workshop -> The Mole Highway dimensional map -> 3-Step Mass-to-Mass stoichiometric computation."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher balances 2H2 + O2 -> 2H2O, maps out the 'Stoichiometry Highway' grid, and calculates grams of water produced from 16g of O2 step-by-step.",
      weDoGuidedPractice: "Class works in pairs to calculate the mass of CO2 produced from burning 50g of propane (C3H8 + 5O2 -> 3CO2 + 4H2O).",
      youDoTogetherCollaborative: "Student lab groups calculate theoretical yields for a precipitation reaction and measure their percent yield.",
      youDoAloneIndependentMastery: "Students solve 4 multi-step stoichiometry calculation problems."
    },
    dokQuestions: {
      dok1Recall: "What is Avogadro's number?",
      dok2SkillConcept: "Why can you never convert directly from grams of Reactant A to grams of Product B in a single step without going through moles?",
      dok3StrategicThinking: "If 10.0g of H2 reacts with 32.0g of O2 to produce water, which reactant is limiting and which is in excess? Show all dimensional analysis steps.",
      dok4ExtendedThinking: "An industrial plant achieves an 82% actual yield for titanium extraction. How many kilograms of raw ore must they process to yield 500 kg of pure titanium?"
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Balanced Equation Verification (Check atom counts on both sides).",
        "Step 2: The Stoichiometry Highway Map: [Grams A] ➗ [Molar Mass A] ➡️ [Moles A] ✖️ [Mole Ratio B/A] ➡️ [Moles B] ✖️ [Molar Mass B] ➡️ [Grams B].",
        "Step 3: Dimensional Analysis 'Train Track' cancellation grid."
      ],
      commonMisconceptions: [
        { flaw: "Using coefficients from the balanced equation when calculating molar mass.", correctionPath: "Enforce: 'Molar mass is calculated for ONE molecule from the periodic table! The coefficients ONLY belong in the central Mole Ratio step.'" }
      ],
      interventionTip: "Use physical 'Train Track' grid templates with units pre-printed on laminated cards."
    },
    studentStrategy: {
      anchorTitle: "The Stoichiometry Highway Blueprint",
      visualHook: "🚗 [Grams A] ➡️ (÷ Molar Mass A) ➡️ ⛽ [Moles A] ➡️ (Mole Ratio B/A) ➡️ ⛽ [Moles B] ➡️ (x Molar Mass B) ➡️ 🏁 [Grams B]!",
      stepByStepGuide: [
        "1. Write and balance the chemical equation.",
        "2. Identify your GIVEN (Grams A) and WANTED (Grams B).",
        "3. Step 1: Divide Grams A by Molar Mass of A to get Moles of A.",
        "4. Step 2: Multiply by the MOLE RATIO from the balanced equation (Coeff B / Coeff A).",
        "5. Step 3: Multiply Moles of B by Molar Mass of B to get Grams of B!",
        "6. Cancel your units across the train track to double-check!"
      ],
      selfCheckChecklist: [
        "Is my chemical equation balanced first?",
        "Did all intermediate units cancel diagonally across the grid?",
        "Did I round my final answer to proper significant figures?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Given the balanced equation: 2Mg + O2 -> 2MgO. How many grams of Magnesium Oxide (MgO, molar mass = 40.3 g/mol) are produced from reacting 24.3 grams of Magnesium (Mg, molar mass = 24.3 g/mol) with excess oxygen?",
      answerChoices: [
        "A) 20.15 grams",
        "B) 40.3 grams",
        "C) 48.6 grams",
        "D) 80.6 grams"
      ],
      correctAnswer: "B) 40.3 grams",
      teacherExemplarExplanation: "Step 1: 24.3 g Mg / 24.3 g/mol = 1.0 mol Mg. Step 2: 1.0 mol Mg x (2 mol MgO / 2 mol Mg) = 1.0 mol MgO. Step 3: 1.0 mol MgO x 40.3 g/mol = 40.3 g MgO."
    },
    worksheets: [
      {
        id: "ws-tekschem7a-1",
        title: "High School Chemistry: 3-Step Stoichiometry Highway",
        type: "Practice",
        estimatedTimeMin: 30,
        previewContent: "1. Balance combustion equation for Octane (C8H18).\n2. Calculate mass of CO2 emitted from burning 100g of gasoline."
      }
    ]
  },

  // High School Physics / Chemistry (NGSS Periodic Trends)
  {
    id: "ngss-hs-ps1-1",
    state: "US",
    stateSystem: "NGSS",
    grade: "High School (9-12)",
    subject: "Natural Sciences",
    code: "NGSS HS-PS1-1",
    title: "Periodic Trends, Coulomb's Law & Electronegativity",
    description: "Use the periodic table as a model to predict the relative properties of elements based on the patterns of electrons in the outermost energy level of atoms (atomic radius, ionization energy, electronegativity, electron shielding).",
    swbatObjective: "SWBAT predict and explain atomic radius, first ionization energy, and electronegativity periodic trends across periods and down groups using Coulomb's Law and shielding with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "NGSS MS-PS1-1", title: "Develop models to describe atomic composition of simple molecules" }],
      futureExtensionCodes: [{ code: "AP Chem SAP-2", title: "Analyze periodic properties and photoelectron spectroscopy (PES) data" }]
    },
    realWorldConnections: [
      "Designing lithium-ion battery anodes based on low ionization energy and high electron mobility.",
      "Synthesizing fluorinated pharmaceutical compounds utilizing Fluorine's maximum electronegativity.",
      "Predicting metallic bond conductivity in superconducting alloy research."
    ],
    sentenceStems: [
      "Moving from left to right across a Period, atomic radius _____ because the effective nuclear charge (Z_eff) _____.",
      "Moving down a Group, ionization energy _____ because electron shielding from inner energy levels _____.",
      "Fluorine has the highest electronegativity because it has high effective nuclear charge and a _____ atomic radius."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that all periodic trends arise from the fundamental electrostatic force (Coulomb's Law: F = k·q1·q2 / r^2) between positive nuclear protons and negative electron clouds modulated by energy shell shielding.",
      stage2AssessmentEvidence: "Periodic Trend Justification Dossier where students rank 4 elements and justify rankings using Z_eff and shielding arguments.",
      stage3LearningPlanSequence: "Coulomb's Law interactive physics simulation -> 3D Periodic Trend topographical map analysis -> PES electron energy spectroscopy."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher demonstrates Coulomb's Law on the board, models why adding protons across Period 2 (Li to Ne) pulls the electron cloud tighter (smaller radius), and contrasts with adding energy shells down Group 1 (larger radius).",
      weDoGuidedPractice: "Class works in pairs to rank Na, Mg, P, and Cl by increasing ionization energy and electronegativity.",
      youDoTogetherCollaborative: "Student pairs analyze 3D printed topographical Periodic Tables showing mountain peaks for Electronegativity (Fluorine peak) and Atomic Radius (Francium peak).",
      youDoAloneIndependentMastery: "Students complete 4 AP-style periodic trend free response questions."
    },
    dokQuestions: {
      dok1Recall: "Which element on the entire Periodic Table has the highest electronegativity?",
      dok2SkillConcept: "Why does atomic radius decrease as you move from left to right across a Period, even though you are adding more particles?",
      dok3StrategicThinking: "Explain why the first ionization energy of Nitrogen is slightly higher than Oxygen, citing orbital electron repulsion in 2p orbitals.",
      dok4ExtendedThinking: "Analyze Photoelectron Spectroscopy (PES) data for Sulfur and Chlorine, explaining why Chlorine's 2p peak is shifted to higher binding energy."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: The 'Snowman & Upside-Down Snowman' Visual Mnemonic (Atomic Radius = Snowman wider at bottom; Electronegativity/Ionization = Upside-Down Snowman wider at top right).",
        "Step 2: Two-Factor Justification Rule (Across a period = Argue Effective Nuclear Charge Z_eff; Down a group = Argue Energy Levels & Shielding).",
        "Step 3: Coulomb's Law Electrostatic Distance mapping (F proportional to 1/r^2)."
      ],
      commonMisconceptions: [
        { flaw: "Saying an atom wants to 'be happy with 8 electrons' as a scientific explanation.", correctionPath: "Enforce rigorous physical reasoning: 'Atoms do not have feelings! Use Effective Nuclear Charge (Z_eff) and Coulombic electrostatic attractions.'" }
      ],
      interventionTip: "Use physical bar magnets with varying layers of plastic foam dividers to model electron shielding."
    },
    studentStrategy: {
      anchorTitle: "The Periodic Trend Coulombic Engine",
      visualHook: "⚡ Coulomb's Law (F = q/r^2) ➡️ 🎯 Across: Higher Z_eff (Pulls Tight) ➡️ 🛡️ Down: More Shells (Shielding)!",
      stepByStepGuide: [
        "1. Identify the element locations on the Periodic Table.",
        "2. Are they in the SAME PERIOD (Across) or SAME GROUP (Down)?",
        "3. If Across: Same energy levels, but MORE PROTONS -> Higher Z_eff pulls electrons tighter (Smaller Radius, Higher Ionization/Electronegativity)!",
        "4. If Down: MORE ENERGY SHELLS -> Shielding weakens nuclear pull (Bigger Radius, Lower Ionization/Electronegativity)!",
        "5. Remember the King Peaks: Francium = Biggest Radius 👑; Fluorine = Highest Electronegativity 💎!"
      ],
      selfCheckChecklist: [
        "Did I justify using Z_eff (across) or Shielding/Shells (down)?",
        "Did I avoid teleological language ('wants to have 8 electrons')?",
        "Does my ranking align with Coulombic electrostatic attraction?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Which of the following correctly explains why the first ionization energy of Fluorine (F) is greater than that of Iodine (I)?",
      answerChoices: [
        "A) Fluorine has more total electrons than Iodine.",
        "B) Fluorine has fewer energy levels, so its valence electrons are closer to the nucleus with less electron shielding, experiencing a stronger Coulombic attraction.",
        "C) Iodine has a greater nuclear charge, so it holds its electrons more loosely.",
        "D) Fluorine is a gas while Iodine is a solid at room temperature."
      ],
      correctAnswer: "B) Fluorine has fewer energy levels, so its valence electrons are closer to the nucleus with less electron shielding, experiencing a stronger Coulombic attraction.",
      teacherExemplarExplanation: "Fluorine (Period 2) has only 2 energy levels compared to Iodine (Period 5) with 5 energy levels. The shorter distance (r) and minimal electron shielding in Fluorine result in significantly stronger Coulombic attraction, requiring far more energy to remove an electron."
    },
    worksheets: [
      {
        id: "ws-ngsshsps11-1",
        title: "High School Chemistry: Periodic Trends & Coulomb's Law",
        type: "Practice",
        estimatedTimeMin: 25,
        previewContent: "1. Rank Na, Al, Cl, Rb in order of increasing atomic radius and explain.\n2. Graph first ionization energy across Period 3."
      }
    ]
  }
];
