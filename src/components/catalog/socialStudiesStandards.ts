import { StandardItem } from "../types";

export const SOCIAL_STUDIES_STANDARDS_CATALOG: StandardItem[] = [
  // Kindergarten Social Studies
  {
    id: "teks-k-8b",
    state: "TX",
    stateSystem: "TEKS",
    grade: "Kindergarten",
    subject: "Social Studies",
    code: "TEKS K.8B",
    title: "Community Helpers, Citizenship & Patriotic Symbols",
    description: "Identify purpose of rules in school and community, describe roles of community helpers (firefighters, police officers, doctors), and identify state and national patriotic symbols (US Flag, Texas Flag, Bald Eagle, Statue of Liberty).",
    swbatObjective: "SWBAT identify 4 essential community helpers and match American and Texas patriotic symbols (US Flag, Liberty Bell, Texas Star) with 90% accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "PK.IV.A.1", title: "Identify basic family and school community roles" }],
      futureExtensionCodes: [{ code: "TEKS 1.11A", title: "Describe characteristics of good citizenship and leaders" }]
    },
    realWorldConnections: [
      "Visiting the local fire station during community safety month.",
      "Reciting the Pledge of Allegiance to the US and Texas flags each morning.",
      "Following classroom community rules to keep recess safe and cooperative."
    ],
    sentenceStems: [
      "A community helper who keeps us safe is a _____.",
      "The American flag has 50 stars that represent _____ and 13 stripes that represent _____.",
      "A good citizen helps our classroom community by _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that rules create safe communities, community helpers provide essential services, and patriotic symbols unify our nation.",
      stage2AssessmentEvidence: "Community Helper Match & Symbol Identification Map where students place helper badges and national symbols into their neighborhood.",
      stage3LearningPlanSequence: "Community helper costume play -> Patriotic symbol parade -> Classroom Constitution rules creation."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher wears a firefighter helmet, displays equipment flashcards, explains the helper's job, and presents the American flag pointing to the 50 state stars.",
      weDoGuidedPractice: "Class recites the Pledge of Allegiance with hand over heart and matches symbols to the US and Texas maps.",
      youDoTogetherCollaborative: "Student pairs build a block-city neighborhood with police stations, hospitals, and post offices using wooden blocks.",
      youDoAloneIndependentMastery: "Students complete the Community Helper and Patriotic Symbol matching worksheet."
    },
    dokQuestions: {
      dok1Recall: "What do the 50 stars on the American flag stand for?",
      dok2SkillConcept: "How does following classroom rules show good citizenship?",
      dok3StrategicThinking: "If someone gets sick at school, which community helpers work together to help them get better?",
      dok4ExtendedThinking: "Draw your own community showing where a library, fire station, and park should be placed for your neighborhood."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Visual community helper tool matching cards (Stethoscope = Doctor, Hose = Firefighter).",
        "Step 2: Patriotic Symbol photo sorting cards (US Flag, Texas Flag, Bald Eagle, Liberty Bell).",
        "Step 3: Classroom Citizenship rules role-play."
      ],
      commonMisconceptions: [
        { flaw: "Thinking the 13 stripes on the US flag represent 13 states today.", correctionPath: "Explain: '13 stripes honor the original 13 colonies that founded America; the 50 stars honor all 50 states today!'" }
      ],
      interventionTip: "Use physical miniature fabric flags and community helper hats."
    },
    studentStrategy: {
      anchorTitle: "The Good Citizen & Community Map",
      visualHook: "🚒 Helpers (Keep Us Safe) ➕ 🇺🇸 Patriotic Symbols ➕ 🤝 Good Citizens ➡️ 🏙️ Strong Community!",
      stepByStepGuide: [
        "1. Identify the community helper and the tool they use.",
        "2. Look at the American symbol: Name what it stands for.",
        "3. Stand with hand on heart for the flag pledge.",
        "4. Follow the Golden Rule: Treat classmates with respect!",
        "5. Be a helper in your classroom community every day!"
      ],
      selfCheckChecklist: [
        "Did I put my hand over my heart for the flag pledge?",
        "Did I match the helper to their job?",
        "Did I follow classroom safety rules?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Which patriotic symbol represents American freedom and has a famous crack down its side in Philadelphia?",
      answerChoices: [
        "A) The Washington Monument",
        "B) The Liberty Bell",
        "C) The Golden Gate Bridge",
        "D) The Lincoln Memorial"
      ],
      correctAnswer: "B) The Liberty Bell",
      teacherExemplarExplanation: "The Liberty Bell in Philadelphia is a historic American symbol of freedom and liberty renowned for its distinctive crack."
    },
    worksheets: [
      {
        id: "ws-teksk8b-1",
        title: "Kindergarten Social Studies: Community Helpers & Symbols",
        type: "Practice",
        estimatedTimeMin: 10,
        previewContent: "1. Match firefighter, paramedic, and teacher to their tools.\n2. Color the American flag with 50 stars and 13 red/white stripes."
      }
    ]
  },

  // 4th Grade Social Studies: Texas History
  {
    id: "teks-4-3a",
    state: "TX",
    stateSystem: "TEKS",
    grade: "4th Grade",
    subject: "Social Studies",
    code: "TEKS 4.3A",
    title: "Texas Revolution, The Alamo & Texas Independence",
    description: "Analyze the causes, major events, and effects of the Texas Revolution, including the Battle of Gonzales, the siege and battle of the Alamo, the Goliad Massacre, the Runaway Scrape, and the Battle of San Jacinto.",
    swbatObjective: "SWBAT sequence the major chronological turning points of the Texas Revolution (1835-1836) and evaluate the military significance of the Battle of San Jacinto with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS 3.1A", title: "Describe how individuals, events, and ideas have influenced history" }],
      futureExtensionCodes: [{ code: "TEKS 7.3C", title: "Explain the significance of 1836, the Texas Declaration of Independence, and San Jacinto" }]
    },
    realWorldConnections: [
      "Visiting the historic Alamo mission and San Jacinto monument in San Antonio and Houston.",
      "Celebrating Texas Independence Day (March 2) and San Jacinto Day (April 21).",
      "Understanding constitutional state heritage and self-governance traditions."
    ],
    sentenceStems: [
      "The Texas Revolution began at the Battle of Gonzales with the famous motto: '_____'.",
      "The 13-day siege of the Alamo inspired the Texian army's battle cry: '_____!'.",
      "General Sam Houston defeated Santa Anna's army in an 18-minute surprise attack at the Battle of _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that Texas independence was forged through revolutionary conflict rooted in grievances over Mexican centralist governance, cultural autonomy, and constitutional liberty.",
      stage2AssessmentEvidence: "Texas Revolution Chronological Map Assessment where students place 5 pivotal battles on a geographic map and explain cause-and-effect outcomes.",
      stage3LearningPlanSequence: "Causes of Revolution inquiry -> Alamo 13-day siege primary source letters (William B. Travis) -> San Jacinto decisive victory analysis."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher reads William B. Travis's 'Victory or Death' letter aloud, traces the retreat of Sam Houston's army across Texas (Runaway Scrape), and explains the strategic surprise attack at San Jacinto.",
      weDoGuidedPractice: "Class constructs a timeline of 1835-1836 on the interactive whiteboard, matching events to dates and leaders.",
      youDoTogetherCollaborative: "Student pairs analyze battle maps of San Jacinto, evaluating terrain advantages between Buffalo Bayou and marshlands.",
      youDoAloneIndependentMastery: "Students complete the Texas Revolution battle chronology and significance assessment."
    },
    dokQuestions: {
      dok1Recall: "What famous slogan was on the flag at the Battle of Gonzales in 1835?",
      dok2SkillConcept: "How did the defense of the Alamo buy critical time for the Texian delegates at Washington-on-the-Brazos to write the Texas Declaration of Independence?",
      dok3StrategicThinking: "Why did General Sam Houston retreat across Texas during the Runaway Scrape instead of immediately fighting Santa Anna? What military strategy was he employing?",
      dok4ExtendedThinking: "Write a primary source newspaper article from April 22, 1836, reporting on the decisive victory at San Jacinto and the capture of General Santa Anna."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: 'Come and Take It' Cannon Anchor Origin Story.",
        "Step 2: 5-Battle Chronological Timeline (Gonzales -> Alamo -> Goliad -> Runaway Scrape -> San Jacinto).",
        "Step 3: Primary Source Analysis (Travis's Alamo letter and Texas Declaration of Independence)."
      ],
      commonMisconceptions: [
        { flaw: "Thinking the Battle of the Alamo was the final battle where Texas won its independence.", correctionPath: "Clarify: 'The Alamo was a heroic sacrifice in March 1836; Texas actually won independence at the Battle of San Jacinto in April 1836!'" }
      ],
      interventionTip: "Use physical historical replica battle flags (Gonzales Cannon Flag, 1824 Flag)."
    },
    studentStrategy: {
      anchorTitle: "The Texas Revolution 1836 Timeline",
      visualHook: "💣 Gonzales ('Come & Take It') ➡️ 🏰 Alamo (Sacrifice) ➡️ 📜 Texas Declaration ➡️ ⚔️ San Jacinto Victory!",
      stepByStepGuide: [
        "1. October 1835: Battle of Gonzales (Texians refuse to give up small cannon).",
        "2. March 2, 1836: Texas declares independence at Washington-on-the-Brazos.",
        "3. March 6, 1836: Fall of the Alamo after 13-day siege ('Remember the Alamo!').",
        "4. March 1836: Runaway Scrape (Sam Houston trains the army while retreating east).",
        "5. April 21, 1836: Battle of San Jacinto (18-minute surprise attack wins independence)!"
      ],
      selfCheckChecklist: [
        "Did I sequence the battles in exact chronological order?",
        "Did I recognize San Jacinto as the final decisive victory?",
        "Did I identify Sam Houston and Santa Anna as opposing generals?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "At which decisive battle in April 1836 did General Sam Houston's Texian forces defeat Santa Anna's Mexican army in just 18 minutes to secure Texas independence?",
      answerChoices: [
        "A) The Battle of Gonzales",
        "B) The Battle of the Alamo",
        "C) The Battle of San Jacinto",
        "D) The Battle of Coleto Creek"
      ],
      correctAnswer: "C) The Battle of San Jacinto",
      teacherExemplarExplanation: "On April 21, 1836, the Texian army under Sam Houston launched a surprise attack at San Jacinto, defeating Santa Anna's forces and winning the Texas Revolution."
    },
    worksheets: [
      {
        id: "ws-teks43a-1",
        title: "4th Grade Texas History: The Texas Revolution 1836",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. Sequence 5 major battles on the 1836 Texas map.\n2. Read excerpt of Travis's Alamo letter and answer 2 text-evidence questions."
      }
    ]
  },

  // 5th Grade Social Studies: US Civics & Constitution
  {
    id: "teks-5-14a",
    state: "TX",
    stateSystem: "TEKS",
    grade: "5th Grade",
    subject: "Social Studies",
    code: "TEKS 5.14A",
    title: "Three Branches of Government, Checks & Balances, and the Bill of Rights",
    description: "Explain the purposes of the U.S. Constitution as identified in the Preamble, describe the structure of the three branches of government (Legislative, Executive, Judicial), and identify individual liberties guaranteed by the Bill of Rights.",
    swbatObjective: "SWBAT analyze the constitutional separation of powers (Legislative, Executive, Judicial), identify mutual checks and balances, and list the 5 core freedoms of the First Amendment (R.A.P.P.S.) with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS 4.15A", title: "Identify the functions of state government branches in Texas" }],
      futureExtensionCodes: [{ code: "TEKS 8.15D", title: "Analyze the 7 Principles of the US Constitution" }]
    },
    realWorldConnections: [
      "Understanding presidential elections, Congressional lawmaking, and Supreme Court rulings on television news.",
      "Exercising First Amendment free speech and freedom of the press in school journalism.",
      "Recognizing how checks and balances prevent any single government leader from having absolute monarchical power."
    ],
    sentenceStems: [
      "The Legislative Branch (Congress) _____ laws, the Executive Branch (President) _____ laws, and the Judicial Branch (Supreme Court) _____ laws.",
      "An example of a check and balance is when the President can _____ a bill passed by Congress.",
      "The First Amendment protects five fundamental freedoms remembered by the acronym R.A.P.P.S.: Religion, Assembly, Press, Petition, and Speech."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that the US Constitution distributes governmental power across three distinct branches with mutual checks and balances to protect individual liberties and prevent tyranny.",
      stage2AssessmentEvidence: "Constitutional Branches & Bill of Rights Case Assessment where students resolve real-world constitutional scenarios.",
      stage3LearningPlanSequence: "Preamble breakdown -> Three Branches simulation (How a Bill Becomes a Law) -> First Amendment R.A.P.P.S. courtroom workshop."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher diagrams the 3 Branches of Government on the board, models the passage of a hypothetical school lunch bill, demonstrates a presidential veto, and shows a Congressional 2/3 override.",
      weDoGuidedPractice: "Class works in groups representing the House, Senate, President, and Supreme Court to enact and review legislation.",
      youDoTogetherCollaborative: "Student pairs match Bill of Rights amendment cards to contemporary scenario illustrations.",
      youDoAloneIndependentMastery: "Students complete the 5-item civics and constitutional branches assessment."
    },
    dokQuestions: {
      dok1Recall: "Which branch of government is responsible for making federal laws?",
      dok2SkillConcept: "How does the Supreme Court's power of Judicial Review check the power of Congress?",
      dok3StrategicThinking: "If the President vetoes a bill passed by Congress, what can Congress do to still turn that bill into law?",
      dok4ExtendedThinking: "Write a mock First Amendment petition to the school board proposing a new student elective course."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: The Three Branches Action Mnemonic (Legislative = Write the Law ✍️, Executive = Sign/Enforce the Law 👮, Judicial = Judge the Law ⚖️).",
        "Step 2: Checks & Balances Balance Scale Diagram (Veto, Override, Judicial Review, Appointments).",
        "Step 3: First Amendment R.A.P.P.S. Mnemonic (Religion, Assembly, Press, Petition, Speech)."
      ],
      commonMisconceptions: [
        { flaw: "Believing the President creates and writes all federal laws independently.", correctionPath: "Clarify: 'Only Congress (House and Senate) can write and vote on bills; the President can only sign or veto them!'" }
      ],
      interventionTip: "Use physical gavel, presidential seal, and scroll props."
    },
    studentStrategy: {
      anchorTitle: "The Three Branches & Bill of Rights Blueprint",
      visualHook: "🏛️ Congress (Makes Laws) ↔️ 🦅 President (Enforces) ↔️ ⚖️ Supreme Court (Judges) ➡️ 📜 Bill of Rights!",
      stepByStepGuide: [
        "1. Identify the 3 Branches: Legislative (Congress), Executive (President), Judicial (Supreme Court).",
        "2. Remember their primary jobs: Makes ✍️, Enforces 👮, Judges ⚖️.",
        "3. Find the CHECK: President Vetoes Congress, Congress Overrides Veto, Court Declares Unconstitutional.",
        "4. Recall 1st Amendment freedoms with R.A.P.P.S.: Religion, Assembly, Press, Petition, Speech!",
        "5. Protect human liberty!"
      ],
      selfCheckChecklist: [
        "Did I match each branch to its correct duty?",
        "Did I explain how branches check each other?",
        "Did I name all 5 freedoms in RAPPS?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Which amendment in the Bill of Rights protects the five fundamental freedoms of Religion, Assembly, Press, Petition, and Speech (R.A.P.P.S.)?",
      answerChoices: [
        "A) The First Amendment",
        "B) The Second Amendment",
        "C) The Fourth Amendment",
        "D) The Tenth Amendment"
      ],
      correctAnswer: "A) The First Amendment",
      teacherExemplarExplanation: "The First Amendment explicitly guarantees the five freedoms: Freedom of Religion, Freedom of Assembly, Freedom of the Press, Right to Petition, and Freedom of Speech."
    },
    worksheets: [
      {
        id: "ws-teks514a-1",
        title: "5th Grade Civics: Three Branches & Bill of Rights",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. Fill in Three Branches diagram with duties and leader titles.\n2. Identify which First Amendment freedom applies to 4 scenario cards."
      }
    ]
  },

  // 8th Grade Social Studies: US History to 1877
  {
    id: "teks-8-15d",
    state: "TX",
    stateSystem: "TEKS",
    grade: "8th Grade",
    subject: "Social Studies",
    code: "TEKS 8.15D",
    title: "Constitutional Amendments, 7 Principles & Landmark Supreme Court Cases",
    description: "Analyze how the US Constitution reflects the 7 principles of government (Popular Sovereignty, Republicanism, Limited Government, Federalism, Separation of Powers, Checks and Balances, Individual Rights), and evaluate landmark Supreme Court cases including Marbury v. Madison.",
    swbatObjective: "SWBAT categorize constitutional articles and amendments under the 7 Principles of Government (FLIP R CS) and explain how Marbury v. Madison established Judicial Review with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS 5.14A", title: "Describe the three branches and basic Bill of Rights" }],
      futureExtensionCodes: [{ code: "TEKS US Gov 7C", title: "Analyze the foundational principles of American representative democracy" }]
    },
    realWorldConnections: [
      "Analyzing contemporary Supreme Court judicial review rulings on constitutional rights.",
      "Understanding Federalism in state vs. national jurisdiction during public emergencies.",
      "Participating in democratic elections embodying popular sovereignty."
    ],
    sentenceStems: [
      "The constitutional principle of Federalism divides power between the _____ and the _____ governments.",
      "Chief Justice John Marshall established the principle of Judicial Review in the landmark case _____.",
      "The 7 Principles of the Constitution are remembered by the acronym FLIP R CS."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that the US Constitution structures a dynamic republican federation grounded in 7 foundational principles that constrain government power and protect liberty.",
      stage2AssessmentEvidence: "Constitutional Principles & Judicial Review Case Assessment where students match historical events to principles and explain Marbury v. Madison.",
      stage3LearningPlanSequence: "FLIP R CS 7 Principles breakdown -> Constitutional Convention debates (Federalists vs. Anti-Federalists) -> Marbury v. Madison landmark simulation."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher introduces the FLIP R CS mnemonic, models differentiating between Separation of Powers (who does what) vs. Checks and Balances (who stops whom), and explains John Marshall's ruling in Marbury v. Madison.",
      weDoGuidedPractice: "Class classifies 5 real-world scenarios under the correct constitutional principle (e.g. 10th Amendment = Federalism, 'We the People' = Popular Sovereignty).",
      youDoTogetherCollaborative: "Student pairs re-enact the Marbury v. Madison trial, drafting majority opinions on the Judiciary Act of 1789.",
      youDoAloneIndependentMastery: "Students complete the 5-item 7 Principles and Marshall Court assessment."
    },
    dokQuestions: {
      dok1Recall: "What power did the Supreme Court establish in Marbury v. Madison (1803)?",
      dok2SkillConcept: "How does Federalism divide power between Washington D.C. and state governments like Austin, Texas?",
      dok3StrategicThinking: "What is the key difference between Separation of Powers and Checks and Balances? Provide a concrete example of each.",
      dok4ExtendedThinking: "Evaluate how the Reconstruction Amendments (13th, 14th, 15th) expanded the principle of Individual Rights to previously enslaved African Americans."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: The FLIP R CS 7 Principles Mnemonic (Federalism, Limited Government, Individual Rights, Popular Sovereignty, Republicanism, Checks & Balances, Separation of Powers).",
        "Step 2: Marbury v. Madison Judicial Review Triangle (Constitution is Supreme Law -> Court Interprets Law -> Unconstitutional Laws are Null & Void).",
        "Step 3: Federalism Venn Diagram (Federal Powers, Shared Concurrent Powers, Reserved State Powers)."
      ],
      commonMisconceptions: [
        { flaw: "Confusing Republicanism (representative government) with the modern Republican political party.", correctionPath: "Explain: 'Republicanism means citizens elect representatives to make decisions on their behalf, a foundational principle shared by all Americans!'" }
      ],
      interventionTip: "Use physical balance scale manipulatives with State vs. Federal power weights."
    },
    studentStrategy: {
      anchorTitle: "The 7 Principles (FLIP R CS) Engine",
      visualHook: "🏛️ F (Federalism) • L (Limited Gov) • I (Individual Rights) • P (Popular Sovereignty) • R (Republicanism) • C (Checks/Balances) • S (Separation)!",
      stepByStepGuide: [
        "1. Read the constitutional scenario or quote.",
        "2. Ask: Does it divide Federal vs. State? ➡️ FEDERALISM.",
        "3. Ask: Does 'We the People' decide by voting? ➡️ POPULAR SOVEREIGNTY.",
        "4. Ask: Does it split duties across 3 branches? ➡️ SEPARATION OF POWERS.",
        "5. Ask: Does one branch block another? ➡️ CHECKS AND BALANCES.",
        "6. Ask: Does it protect rights in the Bill of Rights? ➡️ INDIVIDUAL RIGHTS!"
      ],
      selfCheckChecklist: [
        "Did I distinguish Separation of Powers from Checks and Balances?",
        "Did I identify Federalism as Federal vs. State power sharing?",
        "Did I connect Marbury v. Madison to Judicial Review?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Which principle of the US Constitution is directly reflected in the 10th Amendment, which reserves all powers not delegated to the federal government to the individual states or people?",
      answerChoices: [
        "A) Popular Sovereignty",
        "B) Federalism",
        "C) Checks and Balances",
        "D) Republicanism"
      ],
      correctAnswer: "B) Federalism",
      teacherExemplarExplanation: "The 10th Amendment defines Federalism by dividing and balancing sovereign powers between the national federal government and the individual state governments."
    },
    worksheets: [
      {
        id: "ws-teks815d-1",
        title: "8th Grade US History: 7 Principles & Marbury v. Madison",
        type: "Practice",
        estimatedTimeMin: 20,
        previewContent: "1. Match 7 constitutional scenarios to FLIP R CS principles.\n2. Trace the Supreme Court decision in Marbury v. Madison (1803)."
      }
    ]
  },

  // High School US History since 1877
  {
    id: "teks-us-hist-9a",
    state: "TX",
    stateSystem: "TEKS",
    grade: "High School (9-12)",
    subject: "Social Studies",
    code: "TEKS US Hist 9A",
    title: "Great Depression, Dust Bowl & Franklin D. Roosevelt's New Deal",
    description: "Analyze the causes of the Great Depression including the 1929 stock market crash, bank failures, and tariffs, and evaluate the domestic impact of Franklin D. Roosevelt's New Deal programs (FDIC, SEC, SSA, TVA, CCC) and the 3 R's (Relief, Recovery, Reform).",
    swbatObjective: "SWBAT analyze the multi-factor causes of the Great Depression and categorize New Deal agencies (FDIC, Social Security, CCC) under FDR's 3 R's (Relief, Recovery, Reform) with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS US Hist 8A", title: "Analyze causes and effects of economic boom in the Roaring Twenties" }],
      futureExtensionCodes: [{ code: "AP US Hist TOP-7", title: "Evaluate the transformative expansion of federal power under the New Deal" }]
    },
    realWorldConnections: [
      "Understanding Federal Deposit Insurance Corporation (FDIC) coverage on personal bank accounts today.",
      "Evaluating Social Security retirement safety nets and Medicare policies.",
      "Analyzing federal fiscal stimulus interventions during economic recessions."
    ],
    sentenceStems: [
      "The Great Depression was precipitated by multiple structural factors including overproduction, speculation, and the stock market crash of _____.",
      "President Franklin D. Roosevelt's New Deal addressed the economic crisis through the 3 R's: Relief, Recovery, and _____.",
      "The FDIC reformed the financial banking sector by guaranteeing that _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that the Great Depression fundamentally transformed the social contract in America, establishing a permanent federal regulatory welfare and economic stabilization role.",
      stage2AssessmentEvidence: "New Deal Agency Policy Dossier where students evaluate the efficacy of 3 New Deal alphabet agencies and debate long-term federal expansion.",
      stage3LearningPlanSequence: "Causes of the 1929 Crash simulation -> Dust Bowl ecological migration analysis (The Grapes of Wrath) -> New Deal 3 R's agency matrix."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher displays stock ticker tapes and bank run photographs from October 1929, explains buying on margin and bank failures, and maps FDR's First 100 Days into Relief, Recovery, and Reform.",
      weDoGuidedPractice: "Class categorizes 6 New Deal agencies (CCC, WPA, AAA, TVA, FDIC, SSA) into Relief (immediate jobs), Recovery (economic restarting), and Reform (permanent structural fixes).",
      youDoTogetherCollaborative: "Student pairs examine Dorothea Lange Dust Bowl photographs and primary source letters to Eleanor Roosevelt.",
      youDoAloneIndependentMastery: "Students complete the 5-item Great Depression and New Deal assessment."
    },
    dokQuestions: {
      dok1Recall: "What was 'Black Tuesday' in October 1929?",
      dok2SkillConcept: "How did the Dust Bowl environmental disaster in the Great Plains exacerbate the economic hardships of farmers?",
      dok3StrategicThinking: "Compare President Herbert Hoover's rugged individualism approach to the economic crisis with Franklin D. Roosevelt's direct federal intervention. Why did public sentiment shift to FDR?",
      dok4ExtendedThinking: "Evaluate whether FDR's court-packing scheme in 1937 threatened the constitutional principle of Separation of Powers and Judicial Independence."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Causes of the Great Depression Mnemonic: 'O.V.E.R.' (Overproduction, Vast speculation/margin buying, Extreme bank failures, Restrictive tariffs like Smoot-Hawley).",
        "Step 2: FDR's 3 R's Matrix (Relief = Direct Aid/Jobs, Recovery = Economic Industry Reboot, Reform = Permanent Banking/Social Security Safety Nets).",
        "Step 3: Alphabet Agency Decoding (FDIC = Banks, SEC = Stocks, SSA = Elderly Pension, CCC = Environmental Youth Jobs)."
      ],
      commonMisconceptions: [
        { flaw: "Believing the stock market crash was the sole isolated cause of the entire 10-year Great Depression.", correctionPath: "Explain: 'The 1929 crash triggered the collapse, but underlying agricultural depression, bank runs, debt, and international tariff wars caused the decade-long crisis!'" }
      ],
      interventionTip: "Use physical replica vintage WPA poster prints and bank run newspaper headlines."
    },
    studentStrategy: {
      anchorTitle: "The Great Depression & New Deal 3 R's Blueprint",
      visualHook: "📉 1929 Crash & Bank Runs ➡️ 🌾 Dust Bowl ➡️ 🏛️ FDR's 3 R's (Relief, Recovery, Reform) ➡️ 🛡️ Permanent Safety Net!",
      stepByStepGuide: [
        "1. Identify the CAUSES: Speculation (Margin buying), Bank Failures, Overproduction, Tariffs.",
        "2. Note the environmental crisis: Dust Bowl drought in the Great Plains (Okie migration to California).",
        "3. Understand FDR's 3 R's: Relief (Immediate help), Recovery (Rebuild economy), Reform (Fix the system so it never happens again).",
        "4. Match Key Agencies: FDIC (Bank insurance), SEC (Stock market police), Social Security (Retirement pension).",
        "5. Conclude: The New Deal forever expanded the role of the federal government in American life!"
      ],
      selfCheckChecklist: [
        "Did I distinguish Relief, Recovery, and Reform?",
        "Did I correctly identify the purpose of FDIC and Social Security?",
        "Did I analyze the ecological impact of the Dust Bowl?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "Which New Deal program was created to provide permanent financial reform by insuring individual bank deposits and restoring public confidence in the American banking system?",
      answerChoices: [
        "A) Civilian Conservation Corps (CCC)",
        "B) Federal Deposit Insurance Corporation (FDIC)",
        "C) Agricultural Adjustment Administration (AAA)",
        "D) Works Progress Administration (WPA)"
      ],
      correctAnswer: "B) Federal Deposit Insurance Corporation (FDIC)",
      teacherExemplarExplanation: "The FDIC was established under the Banking Act of 1933 (Glass-Steagall) to insure commercial bank deposits and prevent future catastrophic bank runs."
    },
    worksheets: [
      {
        id: "ws-teksushist9a-1",
        title: "High School US History: Great Depression & New Deal Agencies",
        type: "Practice",
        estimatedTimeMin: 25,
        previewContent: "1. Categorize 8 New Deal agencies into Relief, Recovery, or Reform.\n2. Analyze Dorothea Lange 'Migrant Mother' primary source photograph."
      }
    ]
  },

  // High School US Government: Constitutional Jurisprudence
  {
    id: "teks-us-gov-7c",
    state: "TX",
    stateSystem: "TEKS",
    grade: "High School (9-12)",
    subject: "Social Studies",
    code: "TEKS US Gov 7C",
    title: "Federalist No. 51, Separation of Powers & Constitutional Governance",
    description: "Analyze the foundational philosophical writings of American democracy including Federalist No. 51 (James Madison) on checks and balances and ambition counteracting ambition, and evaluate contemporary inter-branch conflicts.",
    swbatObjective: "SWBAT analyze James Madison's arguments in Federalist No. 51 ('Ambition must be made to counteract ambition') and evaluate how the constitutional architecture limits tyrannical consolidation of power with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS 8.15D", title: "Analyze 7 principles of the US Constitution" }],
      futureExtensionCodes: [{ code: "AP Gov CON-1", title: "Explain how the Constitution provides a multifaceted system of checks and balances" }]
    },
    realWorldConnections: [
      "Analyzing Congressional oversight committee hearings and subpoena battles with the executive branch.",
      "Evaluating federal judicial appointment confirmation filibusters in the US Senate.",
      "Understanding war powers resolution debates between the President and Congress."
    ],
    sentenceStems: [
      "In Federalist No. 51, James Madison famously asserts: 'If men were angels, no _____ would be necessary.'",
      "Madison argues that the greatest security against concentration of power is to enable 'ambition to counteract _____.'",
      "The compound republic of America divides power first between two distinct governments (Federal and State), and then within each government among separate _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that human nature necessitates institutional architectural constraints: dividing power across competing branches harnesses self-interest to safeguard democratic liberty.",
      stage2AssessmentEvidence: "Federalist vs. Anti-Federalist Jurisprudential Brief where students analyze Madison's Federalist 51 and Brutus I.",
      stage3LearningPlanSequence: "Federalist 51 close text annotation -> Compound Republic architecture mapping -> Contemporary inter-branch conflict simulations."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher displays Federalist No. 51 text, annotates Madison's foundational philosophical premise ('Ambition must be made to counteract ambition'), and models how the bicameral legislature and veto checks prevent factional dominance.",
      weDoGuidedPractice: "Class analyzes a modern War Powers dispute, applying Madisonian principles to evaluate legislative vs. executive authority.",
      youDoTogetherCollaborative: "Student pairs draft Supreme Court briefs debating the constitutionality of an executive order.",
      youDoAloneIndependentMastery: "Students complete the AP Government-style textual analysis on Federalist No. 51."
    },
    dokQuestions: {
      dok1Recall: "According to James Madison in Federalist 51, what is the primary check on government power?",
      dok2SkillConcept: "Why did Madison believe that dividing Congress into two separate chambers (House and Senate) with different modes of election was essential?",
      dok3StrategicThinking: "How does the 'Compound Republic' (Federalism + Separation of Powers) provide a 'double security' to the rights of the people?",
      dok4ExtendedThinking: "Write a contemporary political essay evaluating whether modern hyper-partisanship has weakened the Madisonian check where institutional loyalty is replaced by party loyalty."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: Madisonian Core Philosophy Breakdown ('Ambition must counteract Ambition').",
        "Step 2: The Double Security Diagram (Horizontal Separation of Powers + Vertical Federalism).",
        "Step 3: Primary Source Text-dependent annotation guide."
      ],
      commonMisconceptions: [
        { flaw: "Believing the Constitution relies on having virtuous, selfless leaders to function properly.", correctionPath: "Cite Madison: 'If men were angels, no government would be necessary! The Constitution is designed to work even with flawed, ambitious human politicians.'" }
      ],
      interventionTip: "Use physical interlocking puzzle models showing checks balancing opposing forces."
    },
    studentStrategy: {
      anchorTitle: "The Federalist No. 51 Madisonian Engine",
      visualHook: "🦅 'Ambition Must Counteract Ambition' ➡️ 🏛️ 3 Horizontal Branches ➕ 🗺️ Vertical Federalism ➡️ 🛡️ Double Security!",
      stepByStepGuide: [
        "1. Read Madison's famous words: 'If men were angels, no government would be necessary.'",
        "2. Recognize the problem: Power corrupts and leaders seek more power.",
        "3. Apply Madison's solution: Give each branch the constitutional means and personal motives to resist encroachments by other branches.",
        "4. Note the DOUBLE SECURITY: Federalism (State vs. Fed) + Separation of Powers (3 Branches).",
        "5. Conclude: Constitutional checks keep liberty safe through balanced competition!"
      ],
      selfCheckChecklist: [
        "Did I cite Madison's core thesis on ambition counteracting ambition?",
        "Did I explain the 'Double Security' of Federalism and Separation of Powers?",
        "Did I connect historical philosophy to modern governance checks?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "In Federalist No. 51, what constitutional mechanism does James Madison propose as the most effective defense against the gradual concentration of governmental powers into a single branch?",
      answerChoices: [
        "A) Relying on the moral virtue and altruism of elected leaders",
        "B) Giving the leaders in each branch the constitutional means and personal motives to resist encroachments ('ambition counteracting ambition')",
        "C) Eliminating state governments to form a unitary national system",
        "D) Banning political debate and dissent"
      ],
      correctAnswer: "B) Giving the leaders in each branch the constitutional means and personal motives to resist encroachments ('ambition counteracting ambition')",
      teacherExemplarExplanation: "Madison explicitly argues that constitutional checks work best when institutional ambitions counteract each other, ensuring that no single branch can consolidate unchecked power."
    },
    worksheets: [
      {
        id: "ws-teksusgov7c-1",
        title: "AP Government: Federalist No. 51 Primary Source Analysis",
        type: "Practice",
        estimatedTimeMin: 25,
        previewContent: "1. Annotate key paragraphs of Federalist 51.\n2. Explain the 'Double Security' concept in a 1-paragraph structured synthesis."
      }
    ]
  },

  // High School Economics
  {
    id: "teks-econ-3a",
    state: "TX",
    stateSystem: "TEKS",
    grade: "High School (9-12)",
    subject: "Social Studies",
    code: "TEKS Econ 3A",
    title: "Supply and Demand Curves, Market Equilibrium & Elasticity",
    description: "Analyze how the interaction of supply and demand determines equilibrium price and quantity in a free enterprise market, and evaluate the effects of price ceilings, price floors, and non-price determinants on market shifts.",
    swbatObjective: "SWBAT graph market supply and demand curves, calculate equilibrium price and quantity ($P_e, Q_e$), and predict curve shifts (T.I.M.E.R. / S.T.O.R.E.S.) with 85%+ accuracy.",
    priorKnowledge: {
      prerequisiteCodes: [{ code: "TEKS Econ 1A", title: "Explain basic economic concepts of scarcity and choice" }],
      futureExtensionCodes: [{ code: "AP Micro POL-1", title: "Evaluate market efficiency, consumer/producer surplus, and deadweight loss" }]
    },
    realWorldConnections: [
      "Understanding surging ticket prices for concert tours via dynamic pricing demand.",
      "Analyzing fuel price fluctuations during global oil supply disruptions.",
      "Evaluating the economic impacts of minimum wage laws (price floors) and rent control (price ceilings)."
    ],
    sentenceStems: [
      "When the price of a good increases, the quantity demanded _____ according to the Law of Demand.",
      "A rightward shift in the demand curve causes the equilibrium price to _____ and equilibrium quantity to _____.",
      "An increase in the cost of raw materials causes the supply curve to shift to the _____."
    ],
    ubdFramework: {
      stage1DesiredResults: "Students will understand that in a free enterprise economy, price and output are self-regulating through the competitive interaction of buyers (demand) and sellers (supply) reaching market equilibrium.",
      stage2AssessmentEvidence: "Market Equilibrium Simulation Assessment where students graph 4 supply/demand shift scenarios and calculate new equilibrium points.",
      stage3LearningPlanSequence: "Law of Demand and Supply graphs -> Determinants of Shift workshop (TIMER & STORES) -> Market Shocks & Equilibrium Price adjustments."
    },
    gradualReleaseModel: {
      iDoDirectInstruction: "Teacher plots a market graph with Price on Y-axis and Quantity on X-axis, draws downward-sloping Demand (D) and upward-sloping Supply (S), marks equilibrium at intersection ($4, 50 units), and models a demand surge shift.",
      weDoGuidedPractice: "Class analyzes what happens to the coffee market when a frost damages Brazilian coffee crops (Supply shifts left -> Price rises, Quantity drops).",
      youDoTogetherCollaborative: "Student pairs receive 4 market shock headlines (e.g. electric cars, airline tickets) and sketch supply/demand curve shifts.",
      youDoAloneIndependentMastery: "Students solve 5 multi-step economics graphing and calculation items."
    },
    dokQuestions: {
      dok1Recall: "What is the Law of Demand?",
      dok2SkillConcept: "What is the fundamental difference between a change in 'Quantity Demanded' (movement along the curve) vs. a change in 'Demand' (shift of the whole curve)?",
      dok3StrategicThinking: "If the government imposes a binding price ceiling below equilibrium on apartment rent, what happens to the quantity of housing supplied vs. demanded? Explain the resulting shortage.",
      dok4ExtendedThinking: "Analyze how a simultaneous increase in consumer demand and an increase in manufacturing technology affects equilibrium price and quantity."
    },
    teacherStrategy: {
      scaffoldingSteps: [
        "Step 1: 'P and Q' Coordinate Plane setup (Price on Vertical Y-axis, Quantity on Horizontal X-axis).",
        "Step 2: 'D is Down, S is to the Sky' visual mnemonic.",
        "Step 3: Shift Determinants Mnemonics (Demand shifts = T.I.M.E.R.: Tastes, Income, Market size, Expectations, Related goods; Supply shifts = S.T.O.R.E.S.: Subsidies/Taxes, Technology, Other goods, Resource costs, Expectations, Sellers count)."
      ],
      commonMisconceptions: [
        { flaw: "Confusing a shift OF the curve with movement ALONG the curve.", correctionPath: "Teach: 'A change in PRICE moves ALONG the curve; a non-price determinant SHIFTS the entire curve left or right!'" }
      ],
      interventionTip: "Use physical rubber bands on wooden pegboards to physically stretch and shift supply/demand lines."
    },
    studentStrategy: {
      anchorTitle: "The Supply & Demand Market Equilibrium Engine",
      visualHook: "📉 Demand (Down) ✖️ 📈 Supply (Up to Sky) ➡️ 🎯 Intersection ($P_e, Q_e$) ➡️ 🔄 Right = Increase, Left = Decrease!",
      stepByStepGuide: [
        "1. Draw your axes: P (Price on Y-axis) and Q (Quantity on X-axis).",
        "2. Draw Demand (Downward slope 📉) and Supply (Upward slope 📈).",
        "3. Mark Equilibrium where they cross: $P_e$ and $Q_e$.",
        "4. Read the headline: Does this affect Buyers (Demand) or Sellers (Supply)?",
        "5. Shift the curve: Increase = Shift RIGHT ➡️; Decrease = Shift LEFT ⬅️.",
        "6. Find your NEW equilibrium point and observe what happened to Price and Quantity!"
      ],
      selfCheckChecklist: [
        "Did I put Price on the Y-axis and Quantity on the X-axis?",
        "Did I shift the correct curve (Supply or Demand)?",
        "Did I shift RIGHT for increase and LEFT for decrease?"
      ]
    },
    exemplarProblem: {
      questionPrompt: "If a new automated robotic manufacturing technology dramatically lowers the production cost of solar panels, what will happen to the market equilibrium price and quantity of solar panels?",
      answerChoices: [
        "A) Supply shifts right: Equilibrium price decreases and equilibrium quantity increases",
        "B) Demand shifts left: Equilibrium price decreases and equilibrium quantity decreases",
        "C) Supply shifts left: Equilibrium price increases and equilibrium quantity decreases",
        "D) Demand shifts right: Equilibrium price increases and equilibrium quantity increases"
      ],
      correctAnswer: "A) Supply shifts right: Equilibrium price decreases and equilibrium quantity increases",
      teacherExemplarExplanation: "Technological innovation lowers production costs, shifting the Supply curve to the right. This creates downward pressure on equilibrium price and increases the total equilibrium quantity traded in the market."
    },
    worksheets: [
      {
        id: "ws-teksecon3a-1",
        title: "High School Economics: Supply, Demand & Market Shifts",
        type: "Practice",
        estimatedTimeMin: 25,
        previewContent: "1. Graph 4 market scenarios (Automobile subsidy, Coffee frost, Smartphone hype).\n2. Calculate consumer surplus at equilibrium."
      }
    ]
  }
];
