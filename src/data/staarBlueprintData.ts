export interface StaarReportingCategory {
  id: number;
  name: string;
  readinessStandardsCount: number;
  supportingStandardsCount: number;
  questionCountRange: string;
  pointRange: string;
  description: string;
  frequentTeksCodes: string[];
}

export interface StaarNewQuestionTypeSpec {
  type: 'Inline Choice' | 'Drag-and-Drop' | 'Hot Spot' | 'Multipart' | 'Text Entry' | 'Graphing' | 'Short Constructed Response (SCR)' | 'Extended Constructed Response (ECR)';
  pointsPossible: 1 | 2 | 3 | 5 | 10;
  description: string;
  teaExampleUrl?: string;
  scoringRule: string;
}

export interface StaarBlueprintSpec {
  id: string;
  title: string;
  grade: string;
  subject: string;
  language: 'English' | 'Spanish';
  effectiveYear: '2022-2023' | '2023-2024' | '2024-2025' | '2025-2026' | '2026 TEA Baseline';
  totalQuestions: number;
  totalPoints: number;
  readinessPercentage: string; // e.g. "60%–65%"
  supportingPercentage: string; // e.g. "35%–40%"
  newQuestionTypeMinPercentage: string; // e.g. ">= 25%"
  reportingCategories: StaarReportingCategory[];
  allowedDesignatedSupports: string[];
  newQuestionTypes: StaarNewQuestionTypeSpec[];
  overviewNotes: string;
}

export const OFFICIAL_STAAR_2026_BLUEPRINTS: StaarBlueprintSpec[] = [
  // 1. Grade 3 Math (English)
  {
    id: "staar-g3-math-en",
    title: "STAAR Grade 3 Mathematics Blueprint",
    grade: "3rd Grade",
    subject: "Mathematics",
    language: "English",
    effectiveYear: "2026 TEA Baseline",
    totalQuestions: 32,
    totalPoints: 38,
    readinessPercentage: "60%–65%",
    supportingPercentage: "35%–40%",
    newQuestionTypeMinPercentage: ">= 25% (8+ items)",
    reportingCategories: [
      {
        id: 1,
        name: "Numerical Representations & Relationships",
        readinessStandardsCount: 2,
        supportingStandardsCount: 5,
        questionCountRange: "6–8 questions",
        pointRange: "7–11 points",
        description: "Place value to 100,000, fraction models (halves to eighths), and comparing numbers.",
        frequentTeksCodes: ["TEKS 3.2A", "TEKS 3.2D", "TEKS 3.3F", "TEKS 3.3H"]
      },
      {
        id: 2,
        name: "Computations & Algebraic Relationships",
        readinessStandardsCount: 6,
        supportingStandardsCount: 9,
        questionCountRange: "13–15 questions",
        pointRange: "14–19 points",
        description: "Multiplication and division facts within 100, arrays, two-step word problems, and number pairs in tables.",
        frequentTeksCodes: ["TEKS 3.4A", "TEKS 3.4K", "TEKS 3.5A", "TEKS 3.5B", "TEKS 3.5E"]
      },
      {
        id: 3,
        name: "Geometry & Measurement",
        readinessStandardsCount: 3,
        supportingStandardsCount: 7,
        questionCountRange: "7–9 questions",
        pointRange: "8–12 points",
        description: "2D and 3D geometric figures, area of rectangles using unit squares, perimeter, and liquid volume.",
        frequentTeksCodes: ["TEKS 3.6A", "TEKS 3.6C", "TEKS 3.7B"]
      },
      {
        id: 4,
        name: "Data Analysis & Personal Financial Literacy",
        readinessStandardsCount: 2,
        supportingStandardsCount: 3,
        questionCountRange: "4–6 questions",
        pointRange: "5–8 points",
        description: "Frequency tables, dot plots, bar graphs, pictographs, and costs/benefits of spending decisions.",
        frequentTeksCodes: ["TEKS 3.8A", "TEKS 3.9D"]
      }
    ],
    allowedDesignatedSupports: [
      "Calculation Applications (Basic 4-function calculator for eligible SPED/504)",
      "Manipulatives (Fraction strips, base-10 blocks, geometric counters)",
      "Oral/Signed Administration (Text-to-Speech audio reader)",
      "Supplemental Aids (100s chart, addition/multiplication grid blanks)"
    ],
    newQuestionTypes: [
      {
        type: "Inline Choice",
        pointsPossible: 1,
        description: "Dropdown selector embedded within an equation or word problem.",
        scoringRule: "1 pt for selecting the exact correct dropdown option."
      },
      {
        type: "Drag-and-Drop",
        pointsPossible: 2,
        description: "Sorting numbers or fraction tiles into correct comparison slots or ten-frames.",
        scoringRule: "2 pts for fully correct; 1 pt for partial credit (1 error)."
      },
      {
        type: "Hot Spot",
        pointsPossible: 1,
        description: "Clicking active regions on a number line, bar graph, or geometric grid.",
        scoringRule: "1 pt for selecting the correct graphic zone."
      },
      {
        type: "Multipart",
        pointsPossible: 2,
        description: "Part A calculates multi-step total; Part B justifies with algebraic model.",
        scoringRule: "1 pt per independent part."
      }
    ],
    overviewNotes: "STAAR 2.0 blueprint emphasizes CRA conceptual reasoning, multi-step problem solving, and elimination of pure multiple-choice tests."
  },

  // 2. Grade 4 Math (English)
  {
    id: "staar-g4-math-en",
    title: "STAAR Grade 4 Mathematics Blueprint",
    grade: "4th Grade",
    subject: "Mathematics",
    language: "English",
    effectiveYear: "2026 TEA Baseline",
    totalQuestions: 34,
    totalPoints: 40,
    readinessPercentage: "60%–65%",
    supportingPercentage: "35%–40%",
    newQuestionTypeMinPercentage: ">= 25% (9+ items)",
    reportingCategories: [
      {
        id: 1,
        name: "Numerical Representations & Relationships",
        readinessStandardsCount: 3,
        supportingStandardsCount: 10,
        questionCountRange: "7–9 questions",
        pointRange: "8–12 points",
        description: "Decimals to hundredths, fraction equivalence and ordering, and place value to 1,000,000,000.",
        frequentTeksCodes: ["TEKS 4.2B", "TEKS 4.2G", "TEKS 4.3D", "TEKS 4.3E"]
      },
      {
        id: 2,
        name: "Computations & Algebraic Relationships",
        readinessStandardsCount: 5,
        supportingStandardsCount: 7,
        questionCountRange: "10–12 questions",
        pointRange: "12–16 points",
        description: "Multi-digit whole number multiplication and division, strip diagrams, equations, and perimeter/area formulas.",
        frequentTeksCodes: ["TEKS 4.4A", "TEKS 4.4H", "TEKS 4.5A", "TEKS 4.5B"]
      },
      {
        id: 3,
        name: "Geometry & Measurement",
        readinessStandardsCount: 4,
        supportingStandardsCount: 7,
        questionCountRange: "8–10 questions",
        pointRange: "9–13 points",
        description: "Measuring angles with protractors, classifying 2D figures by parallel/perpendicular lines, and unit conversions.",
        frequentTeksCodes: ["TEKS 4.6D", "TEKS 4.7C", "TEKS 4.8C"]
      },
      {
        id: 4,
        name: "Data Analysis & Personal Financial Literacy",
        readinessStandardsCount: 2,
        supportingStandardsCount: 4,
        questionCountRange: "4–6 questions",
        pointRange: "5–8 points",
        description: "Frequency tables, dot plots, stem-and-leaf plots, fixed vs. variable expenses, and profit calculations.",
        frequentTeksCodes: ["TEKS 4.9A", "TEKS 4.10B"]
      }
    ],
    allowedDesignatedSupports: [
      "Calculation Applications for qualified SPED",
      "Protractors and transparent angle measurement overlays",
      "Bilingual Glossary (English/Spanish dictionary)"
    ],
    newQuestionTypes: [
      {
        type: "Graphing",
        pointsPossible: 1,
        description: "Plotting points or sketching lines on a coordinate angle grid.",
        scoringRule: "1 pt for accurate geometric coordinate plotting."
      },
      {
        type: "Inline Choice",
        pointsPossible: 1,
        description: "Selecting fraction inequality symbols (<, >, =).",
        scoringRule: "1 pt for correct logical operator."
      },
      {
        type: "Drag-and-Drop",
        pointsPossible: 2,
        description: "Ordering stem-and-leaf data points into frequency categories.",
        scoringRule: "2 pts for perfect placement; 1 pt for single error."
      }
    ],
    overviewNotes: "Rigorous focus on multi-step decimal computation and protractor geometric ray measurements."
  },

  // 3. Grade 5 Math (English)
  {
    id: "staar-g5-math-en",
    title: "STAAR Grade 5 Mathematics Blueprint",
    grade: "5th Grade",
    subject: "Mathematics",
    language: "English",
    effectiveYear: "2026 TEA Baseline",
    totalQuestions: 36,
    totalPoints: 42,
    readinessPercentage: "60%–65%",
    supportingPercentage: "35%–40%",
    newQuestionTypeMinPercentage: ">= 25% (9+ items)",
    reportingCategories: [
      {
        id: 1,
        name: "Numerical Representations & Relationships",
        readinessStandardsCount: 2,
        supportingStandardsCount: 4,
        questionCountRange: "5–7 questions",
        pointRange: "5–9 points",
        description: "Decimals to thousandths, rounding, prime and composite numbers.",
        frequentTeksCodes: ["TEKS 5.2B", "TEKS 5.4A"]
      },
      {
        id: 2,
        name: "Computations & Algebraic Relationships",
        readinessStandardsCount: 6,
        supportingStandardsCount: 9,
        questionCountRange: "15–17 questions",
        pointRange: "17–21 points",
        description: "Adding and subtracting fractions with unlike denominators, decimal multiplication/division, and order of operations.",
        frequentTeksCodes: ["TEKS 5.3E", "TEKS 5.3G", "TEKS 5.3K", "TEKS 5.3L", "TEKS 5.4B", "TEKS 5.4F"]
      },
      {
        id: 3,
        name: "Geometry & Measurement",
        readinessStandardsCount: 3,
        supportingStandardsCount: 5,
        questionCountRange: "7–9 questions",
        pointRange: "8–12 points",
        description: "Volume of rectangular prisms (V = lwh, V = Bh), coordinate grid plotting in Quadrant I, and classifying 2D figures.",
        frequentTeksCodes: ["TEKS 5.4H", "TEKS 5.5A", "TEKS 5.8C"]
      },
      {
        id: 4,
        name: "Data Analysis & Personal Financial Literacy",
        readinessStandardsCount: 2,
        supportingStandardsCount: 3,
        questionCountRange: "4–6 questions",
        pointRange: "5–8 points",
        description: "Scatter plots, frequency tables, gross vs. net income, sales tax, and payment methods.",
        frequentTeksCodes: ["TEKS 5.9C", "TEKS 5.10A", "TEKS 5.10B"]
      }
    ],
    allowedDesignatedSupports: [
      "Calculation Applications for qualified SPED",
      "Quadrant I Coordinate Plane Grid templates",
      "Spanish/English Glossary"
    ],
    newQuestionTypes: [
      {
        type: "Multipart",
        pointsPossible: 2,
        description: "Part A calculates unlike denominator fraction sum; Part B simplifies and graphs result.",
        scoringRule: "1 pt per correct part."
      },
      {
        type: "Hot Spot",
        pointsPossible: 1,
        description: "Identifying coordinate points (x, y) on a Quadrant I graph.",
        scoringRule: "1 pt for clicking exact intersection."
      }
    ],
    overviewNotes: "Heavy emphasis on fraction division/multiplication and 3D rectangular prism volume computations."
  },

  // 4. Grade 5 Science (English) - 2026 Redesigned Blueprint
  {
    id: "staar-g5-sci-en",
    title: "STAAR Grade 5 Science Blueprint (2026 Redesign)",
    grade: "5th Grade",
    subject: "Natural Sciences",
    language: "English",
    effectiveYear: "2026 TEA Baseline",
    totalQuestions: 32,
    totalPoints: 38,
    readinessPercentage: "60%–65%",
    supportingPercentage: "35%–40%",
    newQuestionTypeMinPercentage: ">= 25% (8+ items)",
    reportingCategories: [
      {
        id: 1,
        name: "Matter and Energy",
        readinessStandardsCount: 3,
        supportingStandardsCount: 4,
        questionCountRange: "6–8 questions",
        pointRange: "7–10 points",
        description: "Physical properties of matter, mass conservation during phase changes, mixtures vs. solutions, and solubility.",
        frequentTeksCodes: ["TEKS 5.5A", "TEKS 5.5B", "TEKS 5.5C"]
      },
      {
        id: 2,
        name: "Force, Motion, and Energy",
        readinessStandardsCount: 3,
        supportingStandardsCount: 4,
        questionCountRange: "6–8 questions",
        pointRange: "7–10 points",
        description: "Forms of energy (M.E.L.T.S.), electrical circuit flow, light behavior (reflection & refraction), and push/pull forces.",
        frequentTeksCodes: ["TEKS 5.6A", "TEKS 5.6B", "TEKS 5.6C"]
      },
      {
        id: 3,
        name: "Earth and Space",
        readinessStandardsCount: 4,
        supportingStandardsCount: 5,
        questionCountRange: "8–10 questions",
        pointRange: "9–12 points",
        description: "Sedimentary rock & fossil fuel formation, weathering/erosion/deposition, water cycle, and Sun/Earth/Moon rotation & shadows.",
        frequentTeksCodes: ["TEKS 5.7A", "TEKS 5.7B", "TEKS 5.8A", "TEKS 5.8C"]
      },
      {
        id: 4,
        name: "Organisms and Environments",
        readinessStandardsCount: 4,
        supportingStandardsCount: 5,
        questionCountRange: "8–10 questions",
        pointRange: "9–12 points",
        description: "Food webs, ecosystem energy flow, inherited traits vs. learned behaviors, and organism physical adaptations.",
        frequentTeksCodes: ["TEKS 5.9A", "TEKS 5.9B", "TEKS 5.10A", "TEKS 5.10B"]
      }
    ],
    allowedDesignatedSupports: [
      "Content and Language Supports (Pop-up glossaries, highlighted text)",
      "Oral/Signed Administration (Full Audio Reader)",
      "Spanish Translation Edition (STAAR 5 Ciencia)"
    ],
    newQuestionTypes: [
      {
        type: "Short Constructed Response (SCR)",
        pointsPossible: 2,
        description: "Student types a 2–3 sentence scientific explanation utilizing Claim-Evidence-Reasoning.",
        scoringRule: "2 pts for complete CER justification; 1 pt for partial claim with missing evidence."
      },
      {
        type: "Drag-and-Drop",
        pointsPossible: 2,
        description: "Placing organisms into correct producer, consumer, and decomposer trophic levels in a food web.",
        scoringRule: "2 pts for complete web; 1 pt for 1 error."
      },
      {
        type: "Hot Spot",
        pointsPossible: 1,
        description: "Selecting which circuit wire must be closed to illuminate the lightbulb.",
        scoringRule: "1 pt for clicking correct switch/terminal."
      }
    ],
    overviewNotes: "Includes both Grade 5 direct TEKS and assessed supporting concepts from Grades 3 and 4."
  },

  // 5. Grade 8 Social Studies (English)
  {
    id: "staar-g8-ss-en",
    title: "STAAR Grade 8 Social Studies Blueprint",
    grade: "8th Grade",
    subject: "Social Studies",
    language: "English",
    effectiveYear: "2026 TEA Baseline",
    totalQuestions: 40,
    totalPoints: 46,
    readinessPercentage: "60%–65%",
    supportingPercentage: "35%–40%",
    newQuestionTypeMinPercentage: ">= 25% (10+ items)",
    reportingCategories: [
      {
        id: 1,
        name: "History (Early Colonial to Reconstruction)",
        readinessStandardsCount: 12,
        supportingStandardsCount: 20,
        questionCountRange: "18–20 questions",
        pointRange: "20–24 points",
        description: "Colonization, American Revolution, Constitutional Convention, Early Republic, Jacksonian Era, Sectionalism, Civil War, and Reconstruction.",
        frequentTeksCodes: ["TEKS 8.1A", "TEKS 8.4A", "TEKS 8.4C", "TEKS 8.6A", "TEKS 8.8B"]
      },
      {
        id: 2,
        name: "Geography and Culture",
        readinessStandardsCount: 4,
        supportingStandardsCount: 6,
        questionCountRange: "6–8 questions",
        pointRange: "7–10 points",
        description: "Physical geography impact on plantation economy, Manifest Destiny territorial expansion, and reform movements.",
        frequentTeksCodes: ["TEKS 8.10A", "TEKS 8.11A", "TEKS 8.23A"]
      },
      {
        id: 3,
        name: "Government and Citizenship",
        readinessStandardsCount: 5,
        supportingStandardsCount: 8,
        questionCountRange: "8–10 questions",
        pointRange: "9–12 points",
        description: "7 Principles of the Constitution (FLIP R CS), Bill of Rights (RAPPS), Marbury v. Madison Judicial Review, and Reconstruction 13/14/15th Amendments.",
        frequentTeksCodes: ["TEKS 8.15D", "TEKS 8.16A", "TEKS 8.18A"]
      },
      {
        id: 4,
        name: "Economics, Science, Technology, and Society",
        readinessStandardsCount: 3,
        supportingStandardsCount: 6,
        questionCountRange: "6–8 questions",
        pointRange: "7–10 points",
        description: "Free enterprise system, Industrial Revolution, plantation cotton gin, steam engine transportation, and telegraph communication.",
        frequentTeksCodes: ["TEKS 8.12B", "TEKS 8.27A", "TEKS 8.27B"]
      }
    ],
    allowedDesignatedSupports: [
      "Bilingual dictionary (English/Spanish)",
      "Oral/Signed Administration",
      "High-contrast color overlays"
    ],
    newQuestionTypes: [
      {
        type: "Multipart",
        pointsPossible: 2,
        description: "Part A identifies historical cause of Civil War sectionalism; Part B selects corroborating primary source excerpt.",
        scoringRule: "1 pt per correct part."
      },
      {
        type: "Short Constructed Response (SCR)",
        pointsPossible: 2,
        description: "2–3 sentence analysis explaining how Marbury v. Madison established the principle of Judicial Review.",
        scoringRule: "2 pts for complete explanation citing Supreme Court power to declare laws unconstitutional."
      },
      {
        type: "Hot Spot",
        pointsPossible: 1,
        description: "Clicking the region on the US Map representing the Mexican Cession (1848).",
        scoringRule: "1 pt for selecting the correct territorial boundary."
      }
    ],
    overviewNotes: "Examines United States history from early European exploration through the end of Reconstruction in 1877."
  },

  // 6. High School U.S. History EOC (English)
  {
    id: "staar-ush-eoc-en",
    title: "STAAR U.S. History End-of-Course (EOC) Blueprint",
    grade: "High School (9-12)",
    subject: "Social Studies",
    language: "English",
    effectiveYear: "2026 TEA Baseline",
    totalQuestions: 60,
    totalPoints: 72,
    readinessPercentage: "60%–65%",
    supportingPercentage: "35%–40%",
    newQuestionTypeMinPercentage: ">= 25% (15+ items)",
    reportingCategories: [
      {
        id: 1,
        name: "History (1877 to Present)",
        readinessStandardsCount: 22,
        supportingStandardsCount: 29,
        questionCountRange: "28–30 questions",
        pointRange: "33–38 points",
        description: "Gilded Age, Progressive Era, Imperialism & WWI, Roaring 20s, Great Depression & New Deal, WWII, Cold War, Civil Rights, and Modern America.",
        frequentTeksCodes: ["TEKS US 2A", "TEKS US 4A", "TEKS US 9A", "TEKS US 11A"]
      },
      {
        id: 2,
        name: "Geography and Culture",
        readinessStandardsCount: 7,
        supportingStandardsCount: 5,
        questionCountRange: "10–12 questions",
        pointRange: "10–14 points",
        description: "Urbanization, Great Migration, Dust Bowl displacement, Sunbelt growth, and cultural movements (Harlem Renaissance, Rock & Roll).",
        frequentTeksCodes: ["TEKS US 12A", "TEKS US 13A", "TEKS US 25A"]
      },
      {
        id: 3,
        name: "Government and Citizenship",
        readinessStandardsCount: 5,
        supportingStandardsCount: 10,
        questionCountRange: "8–10 questions",
        pointRange: "9–13 points",
        description: "Constitutional amendments, expansion of civil rights (1964 Act, 1965 Voting Rights), landmark SCOTUS cases (Brown v. Board, Miranda).",
        frequentTeksCodes: ["TEKS US 19B", "TEKS US 20A", "TEKS US 21A"]
      },
      {
        id: 4,
        name: "Economics, Science, Technology, and Society",
        readinessStandardsCount: 6,
        supportingStandardsCount: 8,
        questionCountRange: "10–12 questions",
        pointRange: "11–15 points",
        description: "Free enterprise expansion, assembly line mass production, space race NASA technology, and personal computer internet revolution.",
        frequentTeksCodes: ["TEKS US 15B", "TEKS US 27A", "TEKS US 28A"]
      }
    ],
    allowedDesignatedSupports: [
      "Bilingual English/Spanish Dictionary",
      "Oral Text-to-Speech Accessibility",
      "Extended time allowances"
    ],
    newQuestionTypes: [
      {
        type: "Short Constructed Response (SCR)",
        pointsPossible: 2,
        description: "Evaluating primary source political cartoons from the Great Depression.",
        scoringRule: "2 pts for identifying author's stance on New Deal federal expansion with text evidence."
      },
      {
        type: "Drag-and-Drop",
        pointsPossible: 2,
        description: "Chronologically sequencing major Cold War events (Berlin Airlift, Cuban Missile Crisis, Vietnam War).",
        scoringRule: "2 pts for exact sequence; 1 pt for 1 error."
      }
    ],
    overviewNotes: "Comprehensive high school graduation requirement covering 1877 through contemporary America."
  },

  // 7. High School Biology EOC (English) - 2026 Redesigned Blueprint
  {
    id: "staar-bio-eoc-en",
    title: "STAAR Biology End-of-Course (EOC) Blueprint",
    grade: "High School (9-12)",
    subject: "Natural Sciences",
    language: "English",
    effectiveYear: "2026 TEA Baseline",
    totalQuestions: 45,
    totalPoints: 52,
    readinessPercentage: "60%–65%",
    supportingPercentage: "35%–40%",
    newQuestionTypeMinPercentage: ">= 25% (12+ items)",
    reportingCategories: [
      {
        id: 1,
        name: "Cell Structure and Function",
        readinessStandardsCount: 3,
        supportingStandardsCount: 5,
        questionCountRange: "8–10 questions",
        pointRange: "9–12 points",
        description: "Prokaryotic vs eukaryotic cells, cellular transport (osmosis/diffusion), biomolecules (lipids, carbs, proteins, nucleic acids), and enzyme catalysis.",
        frequentTeksCodes: ["TEKS Bio 4A", "TEKS Bio 4B", "TEKS Bio 9A"]
      },
      {
        id: 2,
        name: "Mechanisms of Genetics",
        readinessStandardsCount: 4,
        supportingStandardsCount: 3,
        questionCountRange: "9–11 questions",
        pointRange: "10–13 points",
        description: "DNA replication, transcription/translation central dogma, mutations, and monohybrid/dihybrid genetic crosses.",
        frequentTeksCodes: ["TEKS Bio 6A", "TEKS Bio 6E", "TEKS Bio 6F"]
      },
      {
        id: 3,
        name: "Biological Evolution and Classification",
        readinessStandardsCount: 3,
        supportingStandardsCount: 4,
        questionCountRange: "8–10 questions",
        pointRange: "9–12 points",
        description: "Natural selection, fossil and anatomical homologies, taxonomic domains and kingdoms, and phylogenetic trees.",
        frequentTeksCodes: ["TEKS Bio 7A", "TEKS Bio 7E", "TEKS Bio 8B"]
      },
      {
        id: 4,
        name: "Biological Processes and Systems",
        readinessStandardsCount: 4,
        supportingStandardsCount: 4,
        questionCountRange: "9–11 questions",
        pointRange: "10–13 points",
        description: "Human body system interactions (nervous, circulatory, endocrine), plant vascular transport (xylem/phloem), and photosynthesis/cellular respiration.",
        frequentTeksCodes: ["TEKS Bio 9B", "TEKS Bio 10A", "TEKS Bio 10B"]
      },
      {
        id: 5,
        name: "Interdependence within Environmental Systems",
        readinessStandardsCount: 3,
        supportingStandardsCount: 3,
        questionCountRange: "7–9 questions",
        pointRange: "8–11 points",
        description: "Ecological succession, carbon and nitrogen biogeochemical cycles, symbiotic relationships, and ecosystem stability.",
        frequentTeksCodes: ["TEKS Bio 11B", "TEKS Bio 12A", "TEKS Bio 12C"]
      }
    ],
    allowedDesignatedSupports: [
      "Four-function calculator",
      "Spanish/English Glossary",
      "Text-to-Speech audio reader"
    ],
    newQuestionTypes: [
      {
        type: "Short Constructed Response (SCR)",
        pointsPossible: 2,
        description: "Evaluating enzyme denaturation under extreme pH or temperature changes.",
        scoringRule: "2 pts for explaining how active site shape distortion prevents substrate binding."
      },
      {
        type: "Drag-and-Drop",
        pointsPossible: 2,
        description: "Matching mRNA codons to amino acids using a digital codon wheel.",
        scoringRule: "2 pts for accurate translation."
      }
    ],
    overviewNotes: "Aligned directly with TEA 2026 Biology Assessed Curriculum and End-of-Course requirements."
  },

  // 8. Grades 3-5 STAAR Español (Spanish Counterparts)
  {
    id: "staar-g3-math-es",
    title: "Plan de Evaluación STAAR de 3er Grado Matemáticas en Español",
    grade: "3rd Grade",
    subject: "Mathematics",
    language: "Spanish",
    effectiveYear: "2026 TEA Baseline",
    totalQuestions: 32,
    totalPoints: 38,
    readinessPercentage: "60%–65%",
    supportingPercentage: "35%–40%",
    newQuestionTypeMinPercentage: ">= 25% (8+ items)",
    reportingCategories: [
      {
        id: 1,
        name: "Representaciones y relaciones numéricas",
        readinessStandardsCount: 2,
        supportingStandardsCount: 5,
        questionCountRange: "6–8 preguntas",
        pointRange: "7–11 puntos",
        description: "Valor posicional hasta 100,000, modelos de fracciones y comparación de números.",
        frequentTeksCodes: ["TEKS 3.2A", "TEKS 3.3F"]
      },
      {
        id: 2,
        name: "Cálculos y relaciones algebraicas",
        readinessStandardsCount: 6,
        supportingStandardsCount: 9,
        questionCountRange: "13–15 preguntas",
        pointRange: "14–19 puntos",
        description: "Multiplicación y división hasta 100, matrices y problemas de dos pasos.",
        frequentTeksCodes: ["TEKS 3.4A", "TEKS 3.4K", "TEKS 3.5A"]
      },
      {
        id: 3,
        name: "Geometría y medición",
        readinessStandardsCount: 3,
        supportingStandardsCount: 7,
        questionCountRange: "7–9 preguntas",
        pointRange: "8–12 puntos",
        description: "Figuras geométricas 2D y 3D, área con cuadrículas y perímetro.",
        frequentTeksCodes: ["TEKS 3.6A", "TEKS 3.7B"]
      },
      {
        id: 4,
        name: "Análisis de datos y educación financiera",
        readinessStandardsCount: 2,
        supportingStandardsCount: 3,
        questionCountRange: "4–6 preguntas",
        pointRange: "5–8 puntos",
        description: "Tablas de frecuencia, diagramas de puntos y decisiones financieras.",
        frequentTeksCodes: ["TEKS 3.8A", "TEKS 3.9D"]
      }
    ],
    allowedDesignatedSupports: [
      "Lectura oral en español (Text-to-Speech)",
      "Apoyos visuales y tiras de fracciones",
      "Calculadora básica de 4 funciones para SPED"
    ],
    newQuestionTypes: [
      {
        type: "Inline Choice",
        pointsPossible: 1,
        description: "Selección desplegable integrada en problemas de palabras en español.",
        scoringRule: "1 punto por selección correcta."
      },
      {
        type: "Drag-and-Drop",
        pointsPossible: 2,
        description: "Arrastrar y soltar fracciones equivalentes en español.",
        scoringRule: "2 puntos por solución perfecta."
      }
    ],
    overviewNotes: "Versión auténtica en español para estudiantes bilingües emergentes en Texas."
  }
];
