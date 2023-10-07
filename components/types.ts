export type Question = {
  id: number;
  question: string;
  answer: string;
};

export type CreateQuestion = Omit<Question, 'id'>;

export type Quiz = {
  id: number;
  name: string;
  questions: Question[];
};
