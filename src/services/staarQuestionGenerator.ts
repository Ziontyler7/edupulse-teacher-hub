import { TexasTeksItem } from '../data/texasTeksData';

export interface StaarQuestionItem {
  id: string;
  type: 'Inline Choice' | 'Drag-and-Drop' | 'Hot Spot' | 'Short Constructed Response (SCR)' | 'Multipart';
  questionPrompt: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  dokLevel: number;
}

export function generateStaarQuestionSet(standard: TexasTeksItem): StaarQuestionItem[] {
  return [
    {
      id: `${standard.id}-q1`,
      type: standard.staarNewQuestionType || 'Inline Choice',
      questionPrompt: standard.exemplarProblem.questionPrompt || `Read the prompt carefully: How does ${standard.code} apply to ${standard.essentialConcepts[0] || standard.title}?`,
      options: standard.exemplarProblem.answerChoices || [
        `A) Incorrect option`,
        `B) ${standard.essentialConcepts[0] || 'Correct answer'} ⭐`,
        `C) Distractor option`,
        `D) Partial credit option`
      ],
      correctAnswer: standard.exemplarProblem.correctAnswer || `B) ${standard.essentialConcepts[0] || 'Correct answer'} ⭐`,
      explanation: standard.exemplarProblem.teacherExemplarExplanation || `Directly applies ${standard.code} standards as defined by Texas SBOE.`,
      dokLevel: 2
    },
    {
      id: `${standard.id}-q2`,
      type: 'Inline Choice',
      questionPrompt: `Select the correct term to complete the state objective statement for ${standard.code}: "${standard.title} requires students to [_____] key concepts."`,
      options: ['A) memorize without understanding', 'B) analyze and apply in problem solving ⭐', 'C) ignore text evidence', 'D) skip steps'],
      correctAnswer: 'B) analyze and apply in problem solving ⭐',
      explanation: 'Texas TEKS standards prioritize higher-order cognitive application over rote memorization.',
      dokLevel: 1
    },
    {
      id: `${standard.id}-q3`,
      type: 'Short Constructed Response (SCR)',
      questionPrompt: standard.dokQuestions.dok2SkillConcept || `Explain how you would solve a problem involving ${standard.title}. Write 2-3 sentences.`,
      correctAnswer: `Student response must cite key strategies: ${standard.teacherStrategy.scaffoldingSteps[0] || 'Step 1'} and show work.`,
      explanation: 'Short Constructed Response items require text-based evidence and mathematical/conceptual justification.',
      dokLevel: 3
    },
    {
      id: `${standard.id}-q4`,
      type: 'Hot Spot',
      questionPrompt: `Identify the critical step in the solution path for ${standard.code}: Which step represents the breakthrough reasoning?`,
      options: [
        `Step 1: ${standard.teacherStrategy.scaffoldingSteps[0] || 'Read prompt'}`,
        `Step 2: ${standard.teacherStrategy.scaffoldingSteps[1] || 'Apply strategy'} ⭐`,
        `Step 3: Check answer`
      ],
      correctAnswer: `Step 2: ${standard.teacherStrategy.scaffoldingSteps[1] || 'Apply strategy'} ⭐`,
      explanation: 'Hot spot questions assess identifying exact locations, text evidence lines, or mathematical solution steps.',
      dokLevel: 3
    },
    {
      id: `${standard.id}-q5`,
      type: 'Multipart',
      questionPrompt: `[Part A] What is the primary purpose of ${standard.title}? [Part B] Which evidence best supports Part A?`,
      options: [
        'Part A: Master state standards | Part B: Complete DOL worksheet ⭐',
        'Part A: Skip steps | Part B: Guess answer',
        'Part A: Ignore instructions | Part B: Leave blank'
      ],
      correctAnswer: 'Part A: Master state standards | Part B: Complete DOL worksheet ⭐',
      explanation: 'Multipart items require answering Part A correctly to unlock Part B evidence validation.',
      dokLevel: 4
    }
  ];
}
