import { Question } from '@prisma/client';

export type CreateQuestion = Pick<Question, 'question' | 'answer'> & {
  internalId: string;
  id?: number; //this id is available when reusing existing questions
};

export type CreateQuiz = {
  name: string;
  questions: CreateQuestion[];
};
