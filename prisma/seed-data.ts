export type SeedQuizDTO = {
  name: string;
  slug?: string;
  questions: { question: string; answer: string }[];
};

export const seedQuizzes: SeedQuizDTO[] = [
  {
    name: 'Enterwell Quiz 1',
    slug: 'enterwell-quiz-1',
    questions: [
      {
        question:
          "Who was the English mathematician and writer widely considered as the world's first computer programmer for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine?",
        answer: 'Ada Lovelace',
      },
      {
        question: 'What is the chemical symbol for the element oxygen?',
        answer: 'O',
      },
      {
        question:
          'In which year did Christopher Columbus first reach the Americas?',
        answer: '1492',
      },
      {
        question: 'Which planet is known as the Red Planet?',
        answer: 'Mars',
      },
      {
        question: 'What is the capital city of France?',
        answer: 'Paris',
      },
    ],
  },
  {
    name: 'Enterwell Quiz 2',
    slug: 'enterwell-quiz-2',
    questions: [
      {
        question: 'Who painted the Mona Lisa?',
        answer: 'Leonardo da Vinci',
      },
      {
        question: 'What is the largest mammal in the world?',
        answer: 'Blue whale',
      },
      {
        question: "Which element does 'O' represent on the periodic table?",
        answer: 'Oxygen',
      },
      {
        question: 'What is the tallest mountain in the world?',
        answer: 'Mount Everest',
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        answer: 'William Shakespeare',
      },
    ],
  },
  {
    name: 'Enterwell Quiz 3',
    slug: 'enterwell-quiz-3',
    questions: [
      {
        question: 'What is the largest planet in our solar system?',
        answer: 'Jupiter',
      },
      {
        question: 'What is the chemical symbol for gold?',
        answer: 'Au',
      },
      {
        question:
          'Which famous scientist developed the theory of general relativity?',
        answer: 'Albert Einstein',
      },
      {
        question: 'What is the largest organ in the human body?',
        answer: 'Skin',
      },
      {
        question: 'Who painted the Starry Night?',
        answer: 'Vincent van Gogh',
      },
    ],
  },
  {
    name: 'Enterwell Quiz 4',
    slug: 'enterwell-quiz-4',
    questions: [
      {
        question: 'What is the chemical symbol for iron?',
        answer: 'Fe',
      },
      {
        question: 'Which gas do plants absorb from the atmosphere?',
        answer: 'Carbon dioxide',
      },
      {
        question: 'Who was the first President of the United States?',
        answer: 'George Washington',
      },
      {
        question: 'What is the smallest prime number?',
        answer: '2',
      },
      {
        question: "Who wrote '1984'?",
        answer: 'George Orwell',
      },
    ],
  },
  {
    name: 'Enterwell Quiz 5',
    slug: 'enterwell-quiz-5',
    questions: [
      {
        question: 'What gas do plants release during photosynthesis?',
        answer: 'Oxygen',
      },
      {
        question: 'Who is the author of the Harry Potter book series?',
        answer: 'J.K. Rowling',
      },
      {
        question: 'What is the tallest mountain in North America?',
        answer: 'Denali',
      },
      {
        question: 'Who painted the Sistine Chapel ceiling?',
        answer: 'Michelangelo',
      },
      {
        question: 'What is the chemical symbol for silver?',
        answer: 'Ag',
      },
    ],
  },
];
