import { StandardItem } from "../types";

export const ELA_STANDARDS_CATALOG: StandardItem[] = [
  // Pre-K ELA
  {
    id: "teks-pk-ela-1",
    state: "TX",
    stateSystem: "TEKS",
    grade: "Pre-K",
    subject: "Reading / ELA",
    code: "TEKS PK.III.B.1",
    title: "Child separates a spoken sentence into individual words and claps syllables",
    description: "Child demonstrates phonological awareness by identifying whether two spoken words rhyme, segmenting spoken sentences into words, and clapping syllables in names.",
    swbatObjective: "SWBAT orally identify rhyming word pairs (cat/hat, frog/log) and clap 1-3 syllable chunks in spoken words with 90% accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "PK.III.A.1", title: "Listen attentively to short nursery rhymes and stories" }],
      futureExtensionCodes: [{ code: "TEKS K.2A", title: "Demonstrate phonological awareness by segmenting phonemes" }]
    },
    realWorldConnections: [
      "Clapping syllables when singing the classroom Morning Welcome Song.",
      "Singing nursery rhymes during circle time (Humpty Dumpty, Twinkle Twinkle).",
      "Finding rhyming objects in a picture book (bear/chair)."
    ],
    sentenceStems: [
      "The word _____ rhymes with _____ because they both end with _____.",
      "When I clap the word 'butter-fly', I hear _____ claps.",
      "These two words sound the same at the end: _____ and _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Children will understand that spoken language is composed of separable auditory sound units (sentences, words, syllables, and rhymes) before connecting sounds to written print.",
      stage2AssessmentEvidence: "Rhyme Basket Performance Task where the child selects matching rhyming toy pairs from a basket.",
      stage3LearningPlanSequence: "Auditory play sequence: Nursery Rhyme Song -> Syllable Drumming -> Rhyming Puppet Play."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher introduces 'Rhyming Bear', says 'Cat... Hat! They both say -at at the end! They rhyme!', and claps the syllables in 'ba-na-na' (3 claps).",
      weDoGuidedPractice: "Teacher and children clap names of friends in the circle: 'Mi-chael' (2 claps), 'A-lex-an-der' (4 claps).",
      youDoTogetherCollaborative: "Child pairs match large picture puzzle pieces that rhyme (sock/clock, star/car).",
      youDoAloneIndependentMastery: "Child demonstrates clapping syllables and identifying a rhyming pair for the educator."
    },
    dokQuestions: {
      dok1Recall: "Do 'sun' and 'run' rhyme?",
      dok2SkillConcept: "How many times does your chin drop when you say 'el-e-phant'?",
      dok3StrategicThinking: "Can you think of a silly rhyming word for your shoe? (e.g. shoe/blue/moo)",
      dok4ExtendedThinking: "Make up a 2-line rhyming poem about a friendly animal."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Gross Motor — Hop into hoops for each syllable clapped.",
        "Step 2: Chin Drop — Place hand under chin to feel the physical jaw drop on each vowel sound.",
        "Step 3: Rhyme Thumbs Up/Down gesture check."
      ],
      commonMisconceptions: [
        { flaw: "Confusing words that begin with the same sound with words that rhyme.", correctionPath: "Emphasize: 'Rhyming means the END of the word sounds the exact same, like frog and log!'" }
      ],
      interventionTip: "Use physical rhythm egg shakers to shake on each syllable beat."
    },
    studentStrategy: {
      anchorTitle: "The Rhyme & Syllable Drummer",
      visualHook: "👂 Listen to End Sound ➡️ 👏 Clap the Beats ➡️ 🥁 Match Rhymes!",
      stepByStepGuide: [
        "1. Put on your listening ears.",
        "2. Listen to the END of the word.",
        "3. If the ends match, give a Big Thumbs Up!",
        "4. Clap your hands once for each sound beat in the word!"
      ],
      selfCheckChecklist: [
        "Did I listen to the end of the word?",
        "Did I clap for each beat I heard?",
        "Do my rhyming words sound alike at the end?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Which word rhymes with DOG? 🐶",
      answerChoices: ["A) Cat", "B) Frog", "C) Bird", "D) Fish"],
      correctAnswer: "B) Frog",
      teacherExemplarExplanation: "'Dog' and 'Frog' both share the exact same -og rhyme ending. They rhyme."
    },
    worksheets: [
      {
        id: "ws-pkela-1",
        title: "Pre-K ELA: Rhyme Match & Syllable Clapping",
        type: "Practice",
        estimatedTimeMin: 10,
        previewContent: "1. Draw a line between pictures that rhyme (Sun ↔ Run, Bat ↔ Hat).\n2. Circle how many claps for 'Dinosaur': 1, 2, 3."
      }
    ]
  },

  // Kindergarten ELA
  {
    id: "teks-k-2b-i",
    state: "TX",
    stateSystem: "TEKS",
    grade: "Kindergarten",
    subject: "Reading / ELA",
    code: "TEKS K.2B.i",
    title: "Phonemic Awareness & Elkonin Sound Boxes",
    description: "Demonstrate phonological awareness by identifying and producing rhyming words, segmenting spoken one-syllable words into individual phonemes, and blending spoken phonemes to form words.",
    swbatObjective: "SWBAT segment 3-phoneme CVC spoken words (e.g. /c/ /a/ /t/) by sliding physical tokens into Elkonin sound boxes and blending the sounds with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS PK.III.B.1", title: "Isolate initial sounds in spoken words" }],
      futureExtensionCodes: [{ code: "TEKS 1.2B", title: "Decode words in isolation and in context by applying letter-sound knowledge" }]
    },
    realWorldConnections: [
      "Sounding out street signs (e.g. 'STOP') letter by letter.",
      "Writing phonetic labels on drawings in the art center.",
      "Playing 'I Spy' with initial and ending sounds in the grocery store."
    ],
    sentenceStems: [
      "The word _____ has _____ sounds.",
      "The sounds in _____ are /_____/ /_____/ /_____/.",
      "When I blend the sounds /_____/ /_____/ /_____/ together, it says _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that spoken words are composed of individual speech sounds (phonemes) that can be pulled apart and blended back together.",
      stage2AssessmentEvidence: "Auditory Sound Box Assessment where students segment and blend 5 spoken CVC words using sound chips.",
      stage3LearningPlanSequence: "Structured Science of Reading protocol: Oral Blending -> Elkonin Box Token Sliding -> Letter-Sound Graphing."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher says the word 'sun', models stretching the sounds like a rubber band '/s/.../u/.../n/', and pushes 3 colored tokens into sound boxes.",
      weDoGuidedPractice: "Teacher and class stretch the word 'map' together using finger taps: thumb for /m/, pointer for /a/, middle for /p/.",
      youDoTogetherCollaborative: "Student pairs take turns drawing picture cards, stretching the word, and pushing felt chips into desk sound boxes.",
      youDoAloneIndependentMastery: "Students independently complete the 4-item auditory phoneme segmentation check."
    },
    dokQuestions: {
      dok1Recall: "What is the first sound you hear in the word 'dog'?",
      dok2SkillConcept: "How does segmenting each sound help us spell an unfamiliar word?",
      dok3StrategicThinking: "If we change the middle sound in 'bat' from /a/ to /i/, what new word do we make?",
      dok4ExtendedThinking: "Create a word ladder starting with 'cat' and changing one sound at a time to reach 'pig'."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Auditory Only — Rubber band stretching without letters.",
        "Step 2: Tactile Token Sliding — Push magnetic chips into 3-box Elkonin grids.",
        "Step 3: Letter Mapping — Write corresponding grapheme letter into each box."
      ],
      commonMisconceptions: [
        { flaw: "Adding a schwa sound to stop consonants (saying /buh/ instead of clean /b/).", correctionPath: "Model clipping the sound short and crisp: 'Keep your motor quick: /b/, not /buh/!'" }
      ],
      interventionTip: "Use textured pop-it bubble mats where students pop one bubble per sound."
    },
    studentStrategy: {
      anchorTitle: "The Sound Box Slider Engine",
      visualHook: "👂 Hear Word -> 🖐️ Stretch Sounds -> 🟩 Push Sound Chips -> 🚀 Blend & Read!",
      stepByStepGuide: [
        "1. Listen to the teacher say the word.",
        "2. Stretch the word like a giant rubber band.",
        "3. Touch your fingers for each sound: /1/ /2/ /3/.",
        "4. Push one token into each box.",
        "5. Swipe your finger under the boxes to blend the word together!"
      ],
      selfCheckChecklist: [
        "Did I say all 3 sounds separately?",
        "Did I keep my sounds short and crisp (no 'uh')?",
        "Did I blend the sounds back into the whole word?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Which word is made by blending these three sounds together: /f/ /i/ /sh/?",
      answerChoices: ["A) Fit", "B) Fish", "C) Fast", "D) Ship"],
      correctAnswer: "B) Fish",
      teacherExemplarExplanation: "Blending the continuous sounds /f/ + /i/ + /sh/ produces the word 'fish'."
    },
    worksheets: [
      {
        id: "ws-k2bi-1",
        title: "Kindergarten ELA: Elkonin Sound Box Segmentation",
        type: "Practice",
        estimatedTimeMin: 10,
        previewContent: "1. Push chips into boxes for: Sun, Bed, Pig, Fox.\n2. Write the letters into the boxes for: M - A - P."
      }
    ]
  },

  // 1st Grade ELA
  {
    id: "ccss-rf-1-3",
    state: "US",
    stateSystem: "CCSS",
    grade: "1st Grade",
    subject: "Reading / ELA",
    code: "CCSS.ELA-LITERACY.RF.1.3",
    title: "Consonant Digraphs & Vowel Teams",
    description: "Know and apply grade-level phonics and word analysis skills in decoding words including common consonant digraphs (sh, ch, th, wh, ck) and regularly spelled one-syllable vowel teams (ee, ea, oa, ai, ay).",
    swbatObjective: "SWBAT decode and encode one-syllable words containing consonant digraphs (sh, ch, th) and vowel teams (ee, oa, ai) with 85%+ accuracy in isolation and decodable texts.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "CCSS.RF.K.3", title: "Demonstrate basic knowledge of one-to-one letter-sound correspondences" }],
      futureExtensionCodes: [{ code: "CCSS.RF.2.3", title: "Decode regularly spelled two-syllable words with long vowels" }]
    },
    realWorldConnections: [
      "Reading labels on grocery items (e.g. 'Cheese', 'Fish', 'Boat').",
      "Reading children's storybooks with decodable digraphs.",
      "Writing thank-you notes to family members."
    ],
    sentenceStems: [
      "The digraph _____ makes the /_____/ sound.",
      "In the vowel team _____, the two letters work together to make the long _____ sound.",
      "When I blend the digraph and vowel team, the word reads _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that two letters can unite to represent a single distinct phoneme (digraph or vowel team) rather than separate individual sounds.",
      stage2AssessmentEvidence: "Decodable Passage Running Record where students read a story containing 10 target digraph and vowel team words.",
      stage3LearningPlanSequence: "Structured Science of Reading protocol: Sound Wall Introduction -> Word Building with Magnetic Tiles -> Decodable Text Reading."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher points to the 'sh' card on the sound wall, places a finger to lips to make the /sh/ sound, builds 's-h-i-p' on magnetic whiteboard, and reads 'ship'.",
      weDoGuidedPractice: "Class uses letter sound tiles to transform 'chip' into 'chin' and 'chin' into 'chain'.",
      youDoTogetherCollaborative: "Student pairs hunt for vowel team words in decodable story passages and highlight digraphs in green and vowel teams in yellow.",
      youDoAloneIndependentMastery: "Students independently read and match 6 digraph/vowel team word cards to matching illustrations."
    },
    dokQuestions: {
      dok1Recall: "What sound does the digraph 'th' make in the word 'thumb'?",
      dok2SkillConcept: "How is a consonant blend like 'st' in 'stop' different from a consonant digraph like 'sh' in 'shop'?",
      dok3StrategicThinking: "In the word 'train', which two letters work together to make the long /a/ vowel sound?",
      dok4ExtendedThinking: "Write a 3-sentence funny story using at least four words that contain the 'ch' digraph."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Sound Wall anchor articulatory photos showing mouth positions.",
        "Step 2: Color-Coded Magnetic Tiles (Green for Digraphs, Yellow for Vowel Teams).",
        "Step 3: Decodable Connected Text application."
      ],
      commonMisconceptions: [
        { flaw: "Attempting to sound out both letters separately in a digraph (e.g. /s/ /h/ instead of /sh/).", correctionPath: "Teach the rule: 'Two letters, one mouth move! They stick together like best friends.'" }
      ],
      interventionTip: "Use physical tactile sand trays for students to write 'sh' while saying the sound /sh/."
    },
    studentStrategy: {
      anchorTitle: "The Digraph & Vowel Team Detective",
      visualHook: "🤝 Two Letters Stick Together -> 🗣️ One Sound -> 🚢 'SH-I-P' Reads 'SHIP'!",
      stepByStepGuide: [
        "1. Look for letter pairs that stick together (sh, ch, th, ee, oa).",
        "2. Underline the digraph or vowel team.",
        "3. Say its special single sound.",
        "4. Blend the starting sound + middle team + ending sound.",
        "5. Read the whole word smoothly!"
      ],
      selfCheckChecklist: [
        "Did I spot the 2 letters working together?",
        "Did I make ONE sound for the pair?",
        "Does the word make sense in the sentence?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Which word contains both a consonant digraph and a vowel team?",
      answerChoices: ["A) Ship", "B) Chain", "C) Frog", "D) Desk"],
      correctAnswer: "B) Chain",
      teacherExemplarExplanation: "'Chain' contains the consonant digraph 'ch' (/ch/) and the vowel team 'ai' (long /a/)."
    },
    worksheets: [
      {
        id: "ws-ccssrf13-1",
        title: "1st Grade ELA: Digraphs & Vowel Teams Workshop",
        type: "Practice",
        estimatedTimeMin: 15,
        previewContent: "1. Underline digraphs: Shell, Thumb, Chair, Whale.\n2. Circle vowel teams: Boat, Train, Tree, Rain."
      }
    ]
  },

  // 2nd Grade ELA
  {
    id: "teks-2-2b",
    state: "TX",
    stateSystem: "TEKS",
    grade: "2nd Grade",
    subject: "Reading / ELA",
    code: "TEKS 2.2B",
    title: "Multisyllabic Decoding & Syllable Division Rules",
    description: "Demonstrate and apply phonetic knowledge by decoding multisyllabic words with closed syllables, open syllables, VCe syllables, vowel teams, vowel-r syllables, and final stable syllables.",
    swbatObjective: "SWBAT divide and decode 2-syllable unfamiliar words using the VC/CV (rabbit) and V/CV (tiger) syllable division patterns with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS 1.2B", title: "Decode words with closed and open syllables" }],
      futureExtensionCodes: [{ code: "TEKS 3.2B", title: "Decode multisyllabic words with complex affixes and roots" }]
    },
    realWorldConnections: [
      "Reading informational science chapter books about reptiles and habitats.",
      "Deciphering names of cities and states on travel roadmaps.",
      "Reading restaurant menu items independently."
    ],
    sentenceStems: [
      "I spotted the two talking vowels: _____ and _____.",
      "Between the vowels, there are _____ consonants, so I divide the word _____ / _____.",
      "The first syllable is _____ (open/closed) so the vowel sound is _____ (long/short)."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that breaking long words into predictable syllable types unlocks automatic decoding of thousands of multisyllabic words.",
      stage2AssessmentEvidence: "Syllable Surgery Assessment where students dissect 6 multisyllabic words with division slashes and label syllable types.",
      stage3LearningPlanSequence: "Structured Science of Reading sequence: Vowel Spotting -> Consonant Counting -> Syllable Slashing -> Sound Blending."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher models 'Syllable Surgery' on 'napkin': spots vowels 'a' and 'i', counts consonants 'p' and 'k', slashes between 'nap / kin', labels closed syllables, and reads.",
      weDoGuidedPractice: "Class works together to divide 'tiger' (ti / ger) and 'cactus' (cac / tus) on individual whiteboards.",
      youDoTogetherCollaborative: "Student pairs play Syllable Division Board Games, cutting word strips with plastic scissors and labeling open/closed types.",
      youDoAloneIndependentMastery: "Students independently divide and read 6 multisyllabic words on their assessment sheet."
    },
    dokQuestions: {
      dok1Recall: "What is the difference between an open syllable and a closed syllable?",
      dok2SkillConcept: "Why does the 'a' in 'napkin' make a short sound while the 'i' in 'tiger' makes a long sound?",
      dok3StrategicThinking: "When you encounter a word with the VCV pattern like 'cabin', what should you try if dividing before the consonant (ca-bin) sounds wrong?",
      dok4ExtendedThinking: "Create a list of 5 multisyllabic words that follow the VC/CV rabbit pattern and illustrate their meanings."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Spot & Dot the talking vowels with red markers.",
        "Step 2: Draw the bridge between vowels and label consonants (V-C-C-V).",
        "Step 3: Cut between the consonants (VC / CV) and blend each syllable."
      ],
      commonMisconceptions: [
        { flaw: "Treating vowel teams as two separate vowels when counting syllable vowels.", correctionPath: "Teach: 'Vowel teams stick together as ONE talking vowel unit! Dot the pair once.'" }
      ],
      interventionTip: "Use physical word strips that students physically cut with safety scissors between the syllables."
    },
    studentStrategy: {
      anchorTitle: "The Syllable Surgeon Blueprint",
      visualHook: "🔴 Dot Vowels ➡️ 🌉 Draw Bridge ➡️ ✂️ Slash Consonants (VC/CV) ➡️ 📖 Read Chunks!",
      stepByStepGuide: [
        "1. Spot and DOT the talking vowels in the word.",
        "2. Draw a bridge connecting the two vowels.",
        "3. Label the consonants on the bridge.",
        "4. If 2 consonants (VCCV): Chop right between them!",
        "5. Read Syllable 1, then Syllable 2, then blend together!"
      ],
      selfCheckChecklist: [
        "Did I find all the talking vowels?",
        "Did I divide between the two consonants for VC/CV?",
        "Did I check if the vowel sound is short (closed) or long (open)?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Which of the following shows the correct syllable division for the word 'muffin'?",
      answerChoices: ["A) muf - fin", "B) mu - ffin", "C) muff - in", "D) m - uffin"],
      correctAnswer: "A) muf - fin",
      teacherExemplarExplanation: "'Muffin' has vowels 'u' and 'i' with consonants 'f' and 'f' between them. Dividing between the double consonants yields 'muf - fin' (VC/CV rabbit rule)."
    },
    worksheets: [
      {
        id: "ws-teks22b-1",
        title: "2nd Grade ELA: Syllable Surgery & Division Rules",
        type: "Practice",
        estimatedTimeMin: 15,
        previewContent: "1. Divide into syllables: Basket, Rabbit, Sunset, Picnic.\n2. Label each syllable as Open (O) or Closed (C)."
      }
    ]
  },

  // 3rd Grade ELA
  {
    id: "teks-3-3b",
    state: "TX",
    stateSystem: "TEKS",
    grade: "3rd Grade",
    subject: "Reading / ELA",
    code: "TEKS 3.3B",
    title: "Latin & Greek Roots, Prefixes & Suffixes (Morphology)",
    description: "Use context within and beyond a sentence to determine the relevant meaning of unfamiliar words and demonstrate and apply knowledge of root words, prefixes, and suffixes.",
    swbatObjective: "SWBAT analyze unfamiliar multi-syllabic words by segmenting base words, Latin/Greek roots (e.g., bio, tele, auto), and affixes (re-, un-, -ful, -less) to construct meaning with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [
        { code: "TEKS 2.2C", title: "Identify base words and common inflectional endings (-ed, -ing)" }
      ],
      futureExtensionCodes: [
        { code: "TEKS 4.3B", title: "Use Greek and Latin roots and affixes in complex academic texts" }
      ]
    },
    realWorldConnections: [
      "Deciphering unfamiliar medical and scientific terms (e.g., thermometer, telescope).",
      "Translating bilingual Spanish-English academic cognates (tele- / bio-).",
      "Building expressive vocabulary for creative and narrative writing."
    ],
    sentenceStems: [
      "The prefix _____ means _____.",
      "The root word is _____, which means _____.",
      "When I combine the prefix and root, the word _____ means _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that words are composed of meaningful morphemic units that unlock the meanings of thousands of related academic words.",
      stage2AssessmentEvidence: "Morphology Matrix Assessment where students break down 5 unfamiliar words into Prefix + Root + Suffix and define the composite term.",
      stage3LearningPlanSequence: "Structured Science of Reading morphology workshop moving from visual puzzle pieces to text-based contextual deciphering."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher presents the root 'bio' (life) and prefix 'auto' (self). Models constructing 'autobiography' using color-coded magnetic morpheme tiles.",
      weDoGuidedPractice: "Class constructs words using the root 'tele' (distant) with suffixes '-scope', '-phone', and '-graph'.",
      youDoTogetherCollaborative: "Student pairs receive morpheme cards, build 4 valid academic words, and write sentence definitions on morphology mats.",
      youDoAloneIndependentMastery: "Students independently analyze 5 tiered vocabulary items on their TEKS 3.3B passage."
    },
    dokQuestions: {
      dok1Recall: "What does the Latin root 'tract' mean in the word 'subtract' or 'tractor'?",
      dok2SkillConcept: "How does adding the suffix '-less' change the meaning of the base word 'care'?",
      dok3StrategicThinking: "If 'bio' means life and 'ology' means the study of, what does a 'microbiologist' study? Break down each morpheme.",
      dok4ExtendedThinking: "Invent a new technological invention and create a scientifically accurate name for it using at least one Greek root and two affixes."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Color-code: Green for Prefixes, Yellow for Roots, Red for Suffixes.",
        "Step 2: Connect directly to Spanish cognates (e.g., teléfono ↔ telephone).",
        "Step 3: Use physical morpheme interlocking puzzle blocks."
      ],
      commonMisconceptions: [
        {
          flaw: "Confusing whole words that look like prefixes (e.g., thinking 're' in 'real' is a prefix).",
          correctionPath: "Teach students to remove the prefix and verify if the remaining letters form a legitimate standalone base word or root."
        }
      ],
      interventionTip: "Provide a desktop Morpheme Reference Bookmark with 10 most common affixes and meanings."
    },
    studentStrategy: {
      anchorTitle: "The Morphology Word Builder Engine",
      visualHook: "🟩 Prefix (Front) ➕ 🟨 Root (Core Meaning) ➕ 🟥 Suffix (Grammar Ending) ➡️ 💡 Word Meaning!",
      stepByStepGuide: [
        "1. Spot the prefix (circle it in green).",
        "2. Find the root word (box it in yellow).",
        "3. Spot the suffix (underline in red).",
        "4. Combine the meanings.",
        "5. Check if the meaning makes sense in the sentence!"
      ],
      selfCheckChecklist: [
        "Did I identify the correct root word?",
        "Did I check if the word is a Spanish-English cognate?",
        "Does my definition fit the sentence context?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "In the sentence 'The scientist used a telescope to observe the distant galaxy,' what does the word 'telescope' mean?",
      answerChoices: [
        "A) An instrument used to measure heat",
        "B) An instrument used to see distant objects",
        "C) A machine that records human voices",
        "D) A tool used to write long letters"
      ],
      correctAnswer: "B) An instrument used to see distant objects",
      teacherExemplarExplanation: "'Tele' means distant/far off, and 'scope' means to see or view. A telescope is an instrument used to see distant objects."
    },
    worksheets: [
      {
        id: "ws-33b-1",
        title: "3rd Grade ELA: Greek & Latin Morpheme Builders",
        type: "Practice",
        estimatedTimeMin: 15,
        previewContent: "1. Break down: Unbreakable = [Un] + [Break] + [Able]. Meaning: _____\n2. Break down: Teleport = [Tele] + [Port]. Meaning: _____"
      }
    ]
  },

  // 4th Grade ELA
  {
    id: "ccss-rl-4-3",
    state: "US",
    stateSystem: "CCSS",
    grade: "4th Grade",
    subject: "Reading / ELA",
    code: "CCSS.ELA-LITERACY.RL.4.3",
    title: "Character Traits, Motivations & Conflict Resolution (FAST)",
    description: "Describe in depth a character, setting, or event in a story or drama, drawing on specific details in the text (e.g., a character's thoughts, words, or actions).",
    swbatObjective: "SWBAT analyze character traits, motivations, and internal/external conflicts by synthesizing textual evidence using the F.A.S.T. framework (Feelings, Actions, Sayings, Thoughts) with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "CCSS.RL.3.3", title: "Describe characters in a story and explain how their actions contribute to the sequence of events" }],
      futureExtensionCodes: [{ code: "CCSS.RL.5.3", title: "Compare and contrast two or more characters, settings, or events in a story" }]
    },
    realWorldConnections: [
      "Understanding empathy and emotional motivations in personal friendships.",
      "Analyzing movie and video game protagonist narrative arcs.",
      "Developing persuasive character personalities in creative writing."
    ],
    sentenceStems: [
      "The character exhibits the trait _____ as evidenced by their action of _____ in paragraph _____.",
      "The main motivation driving _____ is their desire to _____.",
      "The conflict between _____ and _____ is resolved when _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that author's reveal complex character personalities through indirect characterization (actions, dialogue, thoughts) rather than direct description.",
      stage2AssessmentEvidence: "Character Motivation Dossier where students cite 4 distinct quotes and deduce the protagonist's core internal motivation.",
      stage3LearningPlanSequence: "F.A.S.T. indirect characterization lab -> Character Trait vs. Emotion distinction -> Conflict resolution mapping."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher reads a short narrative excerpt, models color-coding character actions in Blue and internal thoughts in Yellow, and completes a F.A.S.T. anchor chart.",
      weDoGuidedPractice: "Class co-analyzes a conflicting dialogue exchange between two characters, deducing hidden motivations.",
      youDoTogetherCollaborative: "Student pairs create a Character Diagnostic Poster analyzing protagonist vs. antagonist motives.",
      youDoAloneIndependentMastery: "Students answer 4 evidence-based character analysis questions on a grade-level story."
    },
    dokQuestions: {
      dok1Recall: "What does the character say when they first see the locked door?",
      dok2SkillConcept: "How is a permanent character trait (e.g. courageous) different from a temporary feeling (e.g. angry)?",
      dok3StrategicThinking: "What internal conflict does the protagonist face between being loyal to their friend and telling the truth to their teacher? Cite evidence.",
      dok4ExtendedThinking: "Write a diary entry from the perspective of the antagonist explaining their actions and hidden motivations."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: F.A.S.T. Framework (Feelings, Actions, Sayings, Thoughts).",
        "Step 2: Trait vs. Emotion Anchor Wall (e.g., 'Angry' is a temporary feeling; 'Hot-tempered' is a trait).",
        "Step 3: Two-column Evidence / Inference synthesis table."
      ],
      commonMisconceptions: [
        { flaw: "Listing temporary emotions (happy, sad) as lifelong character traits.", correctionPath: "Teach: 'Feelings change by lunch time; character traits stay true across the whole story!'" }
      ],
      interventionTip: "Use emoji trait flashcards with text citations."
    },
    studentStrategy: {
      anchorTitle: "The F.A.S.T. Character Detective",
      visualHook: "🎭 F.A.S.T. (Feelings, Actions, Sayings, Thoughts) ➡️ 🔍 Cite Text Evidence ➡️ 💡 Reveal Character Trait!",
      stepByStepGuide: [
        "1. Read the text and spot what the character DOES and SAYS.",
        "2. Record: F (Feelings), A (Actions), S (Sayings), T (Thoughts).",
        "3. Ask yourself: WHY did they act this way? (Motivation).",
        "4. Choose a strong trait word (e.g., persistent, deceitful, compassionate).",
        "5. Back up your claim with a direct quote!"
      ],
      selfCheckChecklist: [
        "Did I choose a trait, not just a temporary feeling?",
        "Did I cite exact text evidence in quotation marks?",
        "Did I explain HOW the evidence proves the trait?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "In the story, even when a thunderstorm knocked down Leo's lemonade stand, he immediately gathered his tools, rebuilt the wooden table, and made a new sign. Which character trait best describes Leo?",
      answerChoices: [
        "A) Anxious",
        "B) Resilient",
        "C) Careless",
        "D) Selfish"
      ],
      correctAnswer: "B) Resilient",
      teacherExemplarExplanation: "Leo refuses to give up after a setback and immediately rebuilds his stand, demonstrating resilience (perseverance)."
    },
    worksheets: [
      {
        id: "ws-ccssrl43-1",
        title: "4th Grade ELA: Character Traits & FAST Analysis",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. Complete F.A.S.T. chart for protagonist.\n2. Write paragraph citing 2 pieces of text evidence proving the character's motivation."
      }
    ]
  },

  // 5th Grade ELA
  {
    id: "teks-5-6f",
    state: "TX",
    stateSystem: "TEKS",
    grade: "5th Grade",
    subject: "Reading / ELA",
    code: "TEKS 5.6F",
    title: "Making Inferences & Text Evidence Synthesis",
    description: "Make inferences and use evidence to support understanding, including evaluating how an author's stated and implied claims shape the reader's perspective.",
    swbatObjective: "SWBAT make logical, evidence-based inferences from complex literary and informational texts by combining explicit text clues with background schema (Text Clues + Schema = Inference) with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS 4.6F", title: "Make inferences and use evidence to support understanding" }],
      futureExtensionCodes: [{ code: "TEKS 6.5F", title: "Make inferences and draw conclusions across multiple diverse texts" }]
    },
    realWorldConnections: [
      "Detecting non-verbal social cues and emotional tone in everyday conversations.",
      "Solving mystery novels and investigative reporting cases.",
      "Evaluating underlying motives in news advertisements."
    ],
    sentenceStems: [
      "The text states that _____.",
      "Based on my schema / background knowledge, I know that _____.",
      "Therefore, I can infer that _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that reading between the lines requires synthesizing unstated author clues with prior world knowledge to deduce deeper meaning.",
      stage2AssessmentEvidence: "Detective Case File Assessment where students uncover the hidden motive of a character and cite 3 textual clues.",
      stage3LearningPlanSequence: "Inference Equation Workshop: Text Clues Identification -> Schema Activation -> Logical Inference Formulation."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher reads a passage about a boy packing a heavy jacket, snowshoes, and hot cocoa thermos, models The Inference Equation (Text Clues + Schema = Inference), and deduces a winter journey.",
      weDoGuidedPractice: "Class analyzes a dialogue without setting tags, identifying acoustic clues to infer the scene takes place in a hospital waiting room.",
      youDoTogetherCollaborative: "Student pairs examine 'Mystery Bags' containing 4 artifacts and write text-based inference dossiers.",
      youDoAloneIndependentMastery: "Students complete 4 evidence-based inference items on a grade-level passage."
    },
    dokQuestions: {
      dok1Recall: "What explicit detail in paragraph 2 tells what time of day it was?",
      dok2SkillConcept: "How does the Inference Equation (Text Clues + Schema) prevent you from making wild, unsupported guesses?",
      dok3StrategicThinking: "The author never directly says the character was afraid. What 3 physiological text clues (sweating, rapid heartbeat, glancing at the door) prove fear?",
      dok4ExtendedThinking: "Write a 1-paragraph suspense scene where you describe an approaching danger entirely through indirect sensory clues without naming the threat."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: The Inference Equation graphic organizer (Text Clues + Schema = Inference).",
        "Step 2: Highlight Text Clues in Pink and Schema Knowledge in Yellow.",
        "Step 3: The 'Show, Don't Tell' Author Craft reverse-engineering analysis."
      ],
      commonMisconceptions: [
        { flaw: "Making guesses based purely on personal schema without any textual evidence.", correctionPath: "Enforce: 'Every inference must have feet in the text! Show me the exact line that sparked your idea.'" }
      ],
      interventionTip: "Use physical detective magnifying glass cards with sentence stem cut-outs."
    },
    studentStrategy: {
      anchorTitle: "The Inference Equation Blueprint",
      visualHook: "📄 Text Clues (What the Book Says) ➕ 🧠 Schema (What I Know) 🟰 💡 Solid Inference!",
      stepByStepGuide: [
        "1. Read the text carefully and spot clues the author drops.",
        "2. Ask: What does this remind me of from real life? (Schema).",
        "3. Put the text clues and your schema together.",
        "4. State your inference using: 'I infer that _____ because the text says _____ and I know _____.'",
        "5. Double-check that your inference does not contradict any facts in the story!"
      ],
      selfCheckChecklist: [
        "Did I cite a specific line from the text?",
        "Did I explain my thinking (schema)?",
        "Is my inference logical and supported by the story?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Read the excerpt: 'Maya looked at the dark storm clouds gathering over the baseball field, sighed, and slowly began putting her glove and cleats back into her sports bag.' What can the reader infer about Maya?",
      answerChoices: [
        "A) Maya is excited that she gets to go home early.",
        "B) Maya is disappointed because the baseball game will likely be rained out.",
        "C) Maya forgot how to play baseball.",
        "D) Maya wants to play baseball in the heavy rain."
      ],
      correctAnswer: "B) Maya is disappointed because the baseball game will likely be rained out.",
      teacherExemplarExplanation: "Text clues (dark storm clouds, sighing, packing away equipment) + Schema (sports are cancelled during storms; sighing indicates disappointment) = Maya is disappointed about the rain cancellation."
    },
    worksheets: [
      {
        id: "ws-teks56f-1",
        title: "5th Grade ELA: The Inference Equation Workshop",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. Read 3 mystery scenarios and fill in: [Text Clue] + [Schema] = [My Inference].\n2. Citing evidence for author tone."
      }
    ]
  },

  // 6th Grade ELA
  {
    id: "ccss-ri-6-8",
    state: "US",
    stateSystem: "CCSS",
    grade: "6th Grade",
    subject: "Reading / ELA",
    code: "CCSS.ELA-LITERACY.RI.6.8",
    title: "Evaluating Argument Claims, Evidence & Logical Fallacies",
    description: "Trace and evaluate the argument and specific claims in a text, distinguishing claims that are supported by reasons and evidence from claims that are not.",
    swbatObjective: "SWBAT trace an author's central claim, distinguish between empirical evidence vs. subjective anecdotes, and identify logical fallacies (bandwagon, ad hominem) with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "CCSS.RI.5.8", title: "Explain how an author uses reasons and evidence to support particular points" }],
      futureExtensionCodes: [{ code: "CCSS.RI.7.8", title: "Trace and evaluate the argument and specific claims in a text, assessing whether the reasoning is sound" }]
    },
    realWorldConnections: [
      "Evaluating sponsored content and influencer marketing claims on social media.",
      "Analyzing scientific debates regarding public health and environmental policies.",
      "Constructing persuasive debate arguments in student council elections."
    ],
    sentenceStems: [
      "The author's central claim is that _____.",
      "The claim is supported by empirical evidence in paragraph _____ which cites _____.",
      "The author commits a logical fallacy (_____) when they argue that _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that persuasive arguments must be supported by valid, sufficient, and verifiable evidence rather than emotional appeals or faulty logic.",
      stage2AssessmentEvidence: "Argument Audit Report where students evaluate two competing op-eds on school start times and determine which provides more rigorous evidence.",
      stage3LearningPlanSequence: "Claim identification -> S.T.A.R. Evidence Criteria (Sufficient, Typical, Accurate, Relevant) -> Logical Fallacy Deconstruction."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher reads an editorial advocating for a four-day school week, highlights the central claim in Blue, tags data statistics as Strong Evidence, and flags an ad hominem attack as a Fallacy.",
      weDoGuidedPractice: "Class examines an advertisement claim about energy drinks, applying the S.T.A.R. rubric to test evidence sufficiency.",
      youDoTogetherCollaborative: "Student pairs dissect debate transcripts, sorting arguments into Valid Evidence vs. Unsubstantiated Opinion.",
      youDoAloneIndependentMastery: "Students evaluate 4 argument claims on an informational text assessment."
    },
    dokQuestions: {
      dok1Recall: "What is the author's main claim in the article?",
      dok2SkillConcept: "What is the difference between an empirical statistic and an anecdotal story in an argument?",
      dok3StrategicThinking: "Evaluate paragraph 4: Does the author provide sufficient evidence to support their claim that cell phones cause lower test scores? Why or why not?",
      dok4ExtendedThinking: "Rewrite a weak argument containing a bandwagon fallacy into a logically sound argument supported by empirical data."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: S.T.A.R. Evidence Rubric (Sufficient, Typical, Accurate, Relevant).",
        "Step 2: Fallacy Field Guide (Bandwagon, Ad Hominem, False Dilemma, Slippery Slope).",
        "Step 3: Two-column Claim vs. Support balance scales."
      ],
      commonMisconceptions: [
        { flaw: "Confusing the quantity of words with the quality of evidence.", correctionPath: "Teach: 'An argument can be 10 pages long, but if it only uses personal stories with zero data, it is unsupported!'" }
      ],
      interventionTip: "Use physical balance scale mats with weighted blocks representing verified facts vs. light feathers representing unsubstantiated opinions."
    },
    studentStrategy: {
      anchorTitle: "The Argument & Evidence Auditor",
      visualHook: "🎯 Central Claim ➡️ ⚖️ S.T.A.R. Evidence (Facts/Data) ➡️ 🚫 Spot Fallacies ➡️ 🏆 Judge Argument!",
      stepByStepGuide: [
        "1. Identify the author's MAIN CLAIM (What do they want you to believe?).",
        "2. Look for REASONS (Why do they say this?).",
        "3. Inspect the EVIDENCE: Is it S.T.A.R. (Sufficient, Typical, Accurate, Relevant)?",
        "4. Watch out for TRAPS: Bandwagon ('Everyone does it!'), Name-calling, or Exaggeration.",
        "5. Deliver your verdict: Supported or Unsupported!"
      ],
      selfCheckChecklist: [
        "Did I clearly state the author's claim?",
        "Did I distinguish verified facts from opinions?",
        "Did I check if the evidence directly proves the claim?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "An author claims: 'School uniforms must be adopted because over 90% of students in our state love wearing them, and anyone who disagrees has no sense of fashion.' Why is this argument weak?",
      answerChoices: [
        "A) It provides verifiable national research data.",
        "B) It uses an unsubstantiated statistic and an ad hominem personal insult rather than logical evidence.",
        "C) It quotes a recognized educational researcher.",
        "D) It presents a fair comparison of uniform costs."
      ],
      correctAnswer: "B) It uses an unsubstantiated statistic and an ad hominem personal insult rather than logical evidence.",
      teacherExemplarExplanation: "The argument lacks empirical source attribution for the 90% claim and commits an ad hominem attack ('has no sense of fashion') instead of offering substantive reasons."
    },
    worksheets: [
      {
        id: "ws-ccssri68-1",
        title: "6th Grade ELA: Argument Evaluation & Fallacy Detector",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. Trace claim and evidence in Op-Ed on youth sports specialization.\n2. Identify the logical fallacy in 3 sample advertisements."
      }
    ]
  },

  // 7th Grade ELA
  {
    id: "ccss-rl-7-2",
    state: "US",
    stateSystem: "CCSS",
    grade: "7th Grade",
    subject: "Reading / ELA",
    code: "CCSS.ELA-LITERACY.RL.7.2",
    title: "Theme Development & Objective Summaries (SWBST)",
    description: "Determine a theme or central idea of a text and analyze its development over the course of the text; provide an objective summary of the text.",
    swbatObjective: "SWBAT determine the universal theme of a literary text, trace its development through character transformation, and write an objective summary using the S.W.B.S.T. framework without personal bias with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "CCSS.RL.6.2", title: "Determine a theme or central idea and how it is conveyed through details" }],
      futureExtensionCodes: [{ code: "CCSS.RL.8.2", title: "Analyze the development of a theme over the course of a text, including its relationship to character and setting" }]
    },
    realWorldConnections: [
      "Analyzing universal life lessons in classic folklore and cinematic sagas.",
      "Writing executive movie or book summaries for publishing reviews.",
      "Reflecting on personal growth through moral dilemma literature."
    ],
    sentenceStems: [
      "The universal theme of the story is that _____.",
      "The theme develops when the protagonist learns that _____ after facing _____.",
      "In an objective summary: Somebody (_____), Wanted (_____), But (_____), So (_____), Then (_____)."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that a theme is a universal statement about human nature conveyed through character choices, and that an objective summary contains only factual plot progression without reader opinions.",
      stage2AssessmentEvidence: "Theme Evolution Essay where students trace how a theme transforms from the exposition to the resolution using 3 chronological text anchors.",
      stage3LearningPlanSequence: "Topic vs. Theme distinction -> S.W.B.S.T. Objective Summary drafting -> Theme Development Timeline mapping."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher demonstrates transforming a 1-word topic ('Courage') into a complete universal theme statement ('True courage is standing up for others even when facing personal risk'), and models a 5-sentence SWBST summary.",
      weDoGuidedPractice: "Class constructs an objective summary of a shared short story on Google Docs, editing out subjective biased words ('awesome', 'boring').",
      youDoTogetherCollaborative: "Student pairs map the protagonist's emotional shift across a 3-part Theme Mountain chart.",
      youDoAloneIndependentMastery: "Students write a theme analysis and objective summary for an unfamiliar grade-level story."
    },
    dokQuestions: {
      dok1Recall: "What is the climax of the story?",
      dok2SkillConcept: "Why is 'Love' or 'Friendship' a topic, but NOT a complete theme statement?",
      dok3StrategicThinking: "How does the author use the protagonist's failure in Chapter 3 to develop the overall theme about perseverance?",
      dok4ExtendedThinking: "Compare how two different stories (e.g. The Giver and Fahrenheit 451) develop a shared universal theme regarding conformity and individuality."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Topic to Theme Formula: [Topic] + [What the author believes about human nature] = [Universal Theme Statement].",
        "Step 2: S.W.B.S.T. (Somebody Wanted But So Then) Objective Summary Template.",
        "Step 3: Objective Filter: Cross out all opinion adjectives (e.g., 'amazing', 'terrible')."
      ],
      commonMisconceptions: [
        { flaw: "Writing a 1-word topic (e.g. 'Loyalty') or a plot summary sentence instead of a universal theme statement.", correctionPath: "Enforce: 'A theme is a complete sentence that applies to all humans on planet Earth, not just the characters in this one book!'" }
      ],
      interventionTip: "Use colored highlighters: Green for S, Blue for W, Red for B, Orange for S, Purple for T."
    },
    studentStrategy: {
      anchorTitle: "The Theme & Summary Architect",
      visualHook: "🏔️ Theme (Universal Human Lesson) ➕ 📜 S.W.B.S.T. (Objective Summary) ➡️ 🎯 Zero Bias!",
      stepByStepGuide: [
        "1. Identify the TOPIC of the story (e.g., Honesty).",
        "2. Ask: What did the character LEARN about this topic by the end?",
        "3. Write a full universal theme sentence (No character names!).",
        "4. Write your Objective Summary using S.W.B.S.T. (Somebody, Wanted, But, So, Then).",
        "5. Check: Delete any of your personal opinions ('I think', 'cool', 'bad')!"
      ],
      selfCheckChecklist: [
        "Is my theme a complete sentence without specific character names?",
        "Did I include all 5 parts of SWBST?",
        "Is my summary 100% objective without personal opinions?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Which of the following represents a complete, universal theme statement rather than a simple topic or plot summary?",
      answerChoices: [
        "A) Friendship",
        "B) Jonas escapes the community on a bicycle in the snow.",
        "C) True friendship requires sacrifice, loyalty, and standing by others during times of adversity.",
        "D) A story about two dogs who get lost in the forest."
      ],
      correctAnswer: "C) True friendship requires sacrifice, loyalty, and standing by others during times of adversity.",
      teacherExemplarExplanation: "Option C is a complete universal statement about human nature that applies broadly, whereas A is a topic, B is a plot detail, and D is a summary description."
    },
    worksheets: [
      {
        id: "ws-ccssrl72-1",
        title: "7th Grade ELA: Theme Development & Objective Summaries",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. Write S.W.B.S.T. summary for narrative passage.\n2. State theme in a complete sentence and cite 2 developmental text quotes."
      }
    ]
  },

  // 8th Grade ELA
  {
    id: "teks-8-5e",
    state: "TX",
    stateSystem: "TEKS",
    grade: "8th Grade",
    subject: "Reading / ELA",
    code: "TEKS 8.5E",
    title: "Rhetorical Analysis & Persuasive Devices (Ethos, Pathos, Logos)",
    description: "Analyze characteristics and structural elements of informational and persuasive texts, including how the author uses rhetorical devices (ethos, pathos, logos, rhetorical questions, parallel structure) to achieve their purpose.",
    swbatObjective: "SWBAT analyze historical speeches and persuasive texts to identify and evaluate the rhetorical appeals (Ethos, Pathos, Logos) and structural devices (parallelism, repetition) with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS 7.5E", title: "Analyze how the author's structure and language shape the audience's understanding" }],
      futureExtensionCodes: [{ code: "TEKS Eng 1.4E", title: "Analyze how rhetorical techniques advance the author's purpose and tone in speeches" }]
    },
    realWorldConnections: [
      "Analyzing landmark historic addresses (e.g. MLK Jr.'s 'I Have a Dream', JFK's Inaugural).",
      "Deconstructing political campaign commercials and debates.",
      "Crafting persuasive pitches for social justice and community initiatives."
    ],
    sentenceStems: [
      "The author establishes Ethos (credibility) by _____.",
      "The use of Pathos in paragraph _____ evokes feelings of _____ by using the imagery _____.",
      "The Logos appeal is constructed through the empirical evidence that _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that master rhetoricians balance credibility (Ethos), emotional resonance (Pathos), and logical facts (Logos) to persuade audiences.",
      stage2AssessmentEvidence: "Rhetorical Speech Dissection where students annotate a historical address and write an analytical essay evaluating appeal efficacy.",
      stage3LearningPlanSequence: "Aristotelian Rhetorical Triangle -> Rhetorical Devices (Parallelism, Antithesis, Repetition) -> Speech Performance Analysis."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher plays audio of JFK's Inaugural Address ('Ask not what your country can do for you...'), highlights parallel syntax, and models tagging Ethos, Pathos, and Logos.",
      weDoGuidedPractice: "Class annotates an excerpt of Martin Luther King Jr.'s 'Letter from Birmingham Jail', identifying biblical and constitutional ethos appeals.",
      youDoTogetherCollaborative: "Student pairs receive speeches by Malala Yousafzai and Greta Thunberg, color-coding rhetorical appeals in triangular matrices.",
      youDoAloneIndependentMastery: "Students write an analytical breakdown of a persuasive speech excerpt."
    },
    dokQuestions: {
      dok1Recall: "Which rhetorical appeal relies on statistics, data, and cause-and-effect reasoning?",
      dok2SkillConcept: "How does parallel structure ('of the people, by the people, for the people') increase the emotional and memorable impact of a speech?",
      dok3StrategicThinking: "Evaluate how an author balances Ethos and Pathos: Can an argument rely purely on Pathos and still be convincing to an educated audience? Why or why not?",
      dok4ExtendedThinking: "Compose a 2-minute persuasive speech on a contemporary community issue utilizing all three Aristotle appeals and at least one instance of parallel structure."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: The Aristotelian Rhetorical Triangle (Ethos = Character/Trust, Pathos = Emotion/Values, Logos = Logic/Data).",
        "Step 2: Color-coded annotations: Green for Ethos, Pink for Pathos, Blue for Logos.",
        "Step 3: Device Spotting Guide (Parallelism, Anaphora, Rhetorical Questions)."
      ],
      commonMisconceptions: [
        { flaw: "Assuming Pathos only means sadness.", correctionPath: "Explain that Pathos includes all human emotions: pride, joy, hope, moral outrage, urgency, and compassion." }
      ],
      interventionTip: "Use physical cards with Greek symbols and emoji cues."
    },
    studentStrategy: {
      anchorTitle: "The Rhetorical Triangle Navigator",
      visualHook: "🔺 Ethos (Credibility) ➕ Pathos (Heart/Emotion) ➕ Logos (Brain/Logic) ➡️ 🎯 Irresistible Persuasion!",
      stepByStepGuide: [
        "1. Identify the Speaker, Audience, and Purpose (The Rhetorical Situation).",
        "2. Look for ETHOS: How does the speaker show they are trustworthy?",
        "3. Look for PATHOS: What emotions are they stirring in your heart?",
        "4. Look for LOGOS: What facts, logic, and proof are they giving to your brain?",
        "5. Spot rhetorical devices like repetition and parallel sentence rhythms!",
        "6. Conclude: How effectively did the speaker convince the audience?"
      ],
      selfCheckChecklist: [
        "Did I identify all 3 rhetorical appeals?",
        "Did I cite direct speech quotes as evidence?",
        "Did I explain the EFFECT of the device on the audience?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "In a public address, a pediatric neurosurgeon states: 'In my 20 years of clinical practice treating traumatic brain injuries, I have observed that bicycle helmets reduce skull fractures by 85%.' Which rhetorical appeals does the speaker use?",
      answerChoices: [
        "A) Ethos (20 years clinical experience) and Logos (85% reduction statistic)",
        "B) Pathos only",
        "C) Bandwagon and Ad Hominem",
        "D) Logos only"
      ],
      correctAnswer: "A) Ethos (20 years clinical experience) and Logos (85% reduction statistic)",
      teacherExemplarExplanation: "The speaker establishes credibility (Ethos) via their 20 years of medical experience and provides empirical data/statistics (Logos) regarding the 85% reduction."
    },
    worksheets: [
      {
        id: "ws-teks85e-1",
        title: "8th Grade ELA: Rhetorical Appeals & Speech Analysis",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. Annotate historic speech for Ethos, Pathos, and Logos.\n2. Explain the purpose of parallel structure in paragraph 3."
      }
    ]
  },

  // High School English I
  {
    id: "teks-eng-1-4f",
    state: "TX",
    stateSystem: "TEKS",
    grade: "High School (9-12)",
    subject: "Reading / ELA",
    code: "TEKS Eng 1.4F",
    title: "Synthesizing Multi-Source Arguments & Document-Based Essays",
    description: "Synthesize information from a range of texts including multi-modal sources, evaluate the credibility and biases of each source, and craft a cohesive, evidence-based argumentative synthesis essay.",
    swbatObjective: "SWBAT synthesize evidence from 3 contrasting multi-modal sources (informational article, infographic chart, historical primary source) to draft a cohesive argumentative essay with counterclaims and MLA citations with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS 8.9C", title: "Synthesize information across diverse genres and mediums" }],
      futureExtensionCodes: [{ code: "TEKS Eng 2.4F", title: "Synthesize complex texts and evaluate nuanced historical biases" }]
    },
    realWorldConnections: [
      "Conducting comprehensive multi-source academic research papers in collegiate studies.",
      "Synthesizing market trend reports and technical whitepapers in corporate careers.",
      "Evaluating competing legal briefs and statutory precedents in jurisprudence."
    ],
    sentenceStems: [
      "While Source A argues that _____, Source B complicates this perspective by demonstrating that _____.",
      "The empirical data illustrated in Source C corroborates Source A's central thesis regarding _____.",
      "Although critics contend that _____ (Source B), the overwhelming evidence indicates that _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that synthesis is not merely summarizing separate texts sequentially, but creating an original argumentative dialogue where sources converse with and qualify one another.",
      stage2AssessmentEvidence: "Document-Based Synthesis Essay (DBQ) synthesizing 3 sources into a 4-paragraph argumentative paper with in-text parenthetical citations.",
      stage3LearningPlanSequence: "Synthesis Conversation Matrix -> Source Credibility / Bias Evaluation -> Counterclaim Integration -> MLA Citation Workshop."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher displays a Synthesis Conversation Table, places Source A and Source B into dialogue regarding artificial intelligence ethics, models synthesizing quotes into a single topic sentence, and drafts a counterclaim.",
      weDoGuidedPractice: "Class works collaboratively on a digital document to synthesize an infographic chart with an editorial excerpt.",
      youDoTogetherCollaborative: "Student pairs outline a 3-source synthesis argument with color-coded citation attribution tags.",
      youDoAloneIndependentMastery: "Students independently draft a multi-source synthesis essay on their assessment prompt."
    },
    dokQuestions: {
      dok1Recall: "What is the primary difference between summarizing a source and synthesizing multiple sources?",
      dok2SkillConcept: "How do you introduce a source with an attribution signal phrase (e.g., 'According to Dr. Martinez in the New England Journal of Medicine...')?",
      dok3StrategicThinking: "How can you use Source C's statistical data to refute the counterclaim presented in Source B? Structure your paragraph.",
      dok4ExtendedThinking: "Write a full 4-paragraph synthesis essay addressing whether high schools should mandate financial literacy courses, incorporating all 3 provided documents."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Synthesis 'Dinner Party' Protocol (Imagine the 3 authors sitting at a dinner table discussing the prompt).",
        "Step 2: Source Matrix Table (Claim, Evidence, Potential Bias, Inter-Source Agreement/Disagreement).",
        "Step 3: Concession & Rebuttal Formula ('While it is true that [Source A], nonetheless [Source B] proves [Thesis]')."
      ],
      commonMisconceptions: [
        { flaw: "Writing a 'Source Dump' essay (Paragraph 1 = Source A summary, Paragraph 2 = Source B summary, Paragraph 3 = Source C summary).", correctionPath: "Enforce: 'Organize by IDEA, not by source! Every body paragraph must synthesize at least TWO sources talking to each other.'" }
      ],
      interventionTip: "Use physical puzzle piece cut-outs where students physically interlock quotes from different sources under one topic umbrella."
    },
    studentStrategy: {
      anchorTitle: "The Synthesis Conversation Table",
      visualHook: "🍽️ Source A & Source B & Source C at Dinner Table ➡️ 💬 Authors in Dialogue ➡️ 🏆 Your Original Thesis!",
      stepByStepGuide: [
        "1. Read all provided sources and annotate their core claims.",
        "2. Fill in the Synthesis Matrix: Where do sources agree? Where do they clash?",
        "3. Formulate YOUR original thesis taking a clear stance.",
        "4. In each body paragraph, bring at least TWO sources together.",
        "5. Use attribution signal phrases and in-text parenthetical citations (Author, Page).",
        "6. Include a robust Counterclaim and Rebuttal!"
      ],
      selfCheckChecklist: [
        "Did I organize my body paragraphs by IDEA, not by source?",
        "Did I put at least two sources in conversation in each body paragraph?",
        "Did I include a clear counterclaim and refute it with evidence?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Which of the following sentences represents true synthesis rather than a simple summary of a single source?",
      answerChoices: [
        "A) Source A states that renewable energy creates thousands of jobs across the country.",
        "B) In Source B, the author writes about how solar panels are manufactured in factories.",
        "C) While Source A emphasizes the economic job creation of renewable energy, Source C warns that initial infrastructure costs remain a barrier for developing nations.",
        "D) Source C was published in 2024 and contains a pie chart showing energy percentages."
      ],
      correctAnswer: "C) While Source A emphasizes the economic job creation of renewable energy, Source C warns that initial infrastructure costs remain a barrier for developing nations.",
      teacherExemplarExplanation: "Option C puts two distinct sources (Source A and Source C) into direct dialogue, comparing their complementary and conflicting perspectives into a unified synthesized insight."
    },
    worksheets: [
      {
        id: "ws-tekseng14f-1",
        title: "English I: Multi-Source Synthesis & DBQ Workshop",
        type: "Practice",
        estimatedTimeMin: 25,
        previewContent: "1. Complete 3-Source Synthesis Matrix on automation.\n2. Draft synthesized body paragraph combining a statistical infographic with an interview quote."
      }
    ]
  },

  // High School English III/IV & AP Literature
  {
    id: "ccss-rl-11-12-3",
    state: "US",
    stateSystem: "CCSS",
    grade: "High School (9-12)",
    subject: "Reading / ELA",
    code: "CCSS.ELA-LITERACY.RL.11-12.3",
    title: "Authorial Style, Syntax, Tone & Complex Irony",
    description: "Analyze the impact of the author's choices regarding how to develop and relate elements of a story or drama, including how complex syntax, non-linear narrative structures, and dramatic/situational irony shape aesthetic impact and philosophical themes.",
    swbatObjective: "SWBAT analyze how an author's stylistic syntax (polysyndeton, asyndeton, chiasmus), unreliable narration, and structural irony produce aesthetic effect and thematic subtext with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "CCSS.RL.9-10.3", title: "Analyze how complex characters develop over the course of a text" }],
      futureExtensionCodes: [{ code: "AP Lit STR-1", title: "Explain the function of structure and narrator perspective in literature" }]
    },
    realWorldConnections: [
      "Analyzing non-linear cinematic storytelling and psychological unreliable narrators (e.g. Christopher Nolan films).",
      "Deconstructing subtext and satire in contemporary cultural commentary.",
      "Writing sophisticated narrative prose with rhythmic syntactic variation."
    ],
    sentenceStems: [
      "The author employs _____ (e.g. polysyndeton / fragmented syntax) in paragraph _____ to mirror the protagonist's psychological state of _____.",
      "The dramatic irony arising from the reader knowing _____ while the character remains ignorant of _____ heightens the tragic atmosphere.",
      "The non-linear narrative structure challenges the reader to reconstruct _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that form mirrors content in high literature: an author's architectural choices in syntax, perspective, and irony function as the primary vehicle for philosophical subtext.",
      stage2AssessmentEvidence: "Stylistic Syntax & Irony Analytical Essay examining a passage from The Great Gatsby or Beloved with close structural annotation.",
      stage3LearningPlanSequence: "Syntactic Style Lab (Polysyndeton, Asyndeton, Inversion) -> Unreliable Narrator & Irony Matrices -> Aesthetic Impact Close Reading."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher displays an opening passage from The Great Gatsby, annotates Fitzgerald's expansive periodic sentences and polysyndetic rhythms, and explains how the syntax mirrors the illusions of the Jazz Age.",
      weDoGuidedPractice: "Class analyzes a stream-of-consciousness monologue from Faulkner, identifying how fractured syntax reflects psychological trauma.",
      youDoTogetherCollaborative: "Student pairs dissect instances of structural irony in satirical essays (e.g., Swift's 'A Modest Proposal'), mapping the gap between literal text and satirical subtext.",
      youDoAloneIndependentMastery: "Students complete an AP Literature-style close reading analysis on an unfamiliar prose excerpt."
    },
    dokQuestions: {
      dok1Recall: "What is the definition of polysyndeton in literary syntax?",
      dok2SkillConcept: "How does dramatic irony differ from situational irony in narrative fiction?",
      dok3StrategicThinking: "Analyze how the author's deliberate choice of an unreliable first-person narrator forces the reader to critically evaluate every factual claim in the novel.",
      dok4ExtendedThinking: "Write a 500-word stylistic pastiche mimicking an author's distinct syntax, sentence length variation, and ironical tone."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Syntax Rhythm Analyzer (Counting sentence lengths and highlighting conjunction chains).",
        "Step 2: Irony Triad (Verbal Irony, Situational Irony, Dramatic Irony).",
        "Step 3: Form-to-Meaning Bridge ('How does the WAY it is written illuminate WHAT is written?')."
      ],
      commonMisconceptions: [
        { flaw: "Treating irony as merely an unexpected coincidence (e.g., 'It rained on a picnic').", correctionPath: "Teach: 'Irony requires a fundamental contradiction between expectation and reality, or a discrepancy between what a character knows and what the audience understands.'" }
      ],
      interventionTip: "Use physical rhythm clapping to demonstrate the tempo acceleration of asyndeton vs. the heavy drag of polysyndeton."
    },
    studentStrategy: {
      anchorTitle: "The Literary Style & Irony Engine",
      visualHook: "🎼 Syntactic Rhythm (Sentence Architecture) ➕ 🎭 Tri-Level Irony ➡️ 💡 Deep Aesthetic Subtext!",
      stepByStepGuide: [
        "1. Read the passage aloud to hear its syntactic music and tempo.",
        "2. Look at sentence structures: Are they short and clipped (asyndeton) or long and flowing (polysyndeton)?",
        "3. Check the narrator: Can we trust them? What are they hiding?",
        "4. Spot the IRONY: Where is there a gap between expectation and reality?",
        "5. Connect the style to the theme: How does the form enhance the meaning?"
      ],
      selfCheckChecklist: [
        "Did I analyze the SYNTAX (sentence structure), not just the vocabulary?",
        "Did I identify the specific type of irony present?",
        "Did I explain the aesthetic and psychological impact on the reader?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "In an excerpt, an author describes a chaotic battlefield using a single, 80-word run-on sentence connected by repeated 'and... and... and...' (polysyndeton). What is the primary artistic effect of this syntactic choice?",
      answerChoices: [
        "A) It creates a calm, meditative atmosphere.",
        "B) It syntactically overwhelms the reader, mirroring the relentless, suffocating sensory overload of the battlefield.",
        "C) It proves the author had poor grammar skills.",
        "D) It signals that the narrator is lying."
      ],
      correctAnswer: "B) It syntactically overwhelms the reader, mirroring the relentless, suffocating sensory overload of the battlefield.",
      teacherExemplarExplanation: "Polysyndeton creates an unbroken, breathless rhythm that linguistically overwhelms the reader, directly reflecting the unending sensory onslaught and trauma of combat."
    },
    worksheets: [
      {
        id: "ws-ccssrl11123-1",
        title: "AP Literature: Syntax, Tone & Irony Close Reading",
        type: "Practice",
        estimatedTimeMin: 30,
        previewContent: "1. Annotate 20-line passage for polysyndeton, chiasmus, and periodic sentence structures.\n2. Write close-reading analysis explaining how dramatic irony creates tension."
      }
    ]
  }
];
