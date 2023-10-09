import { Question, Quiz } from '@prisma/client';

export type CreateQuestion = Pick<Question, 'question' | 'answer'> & {
  internalId: string;
  id?: number; //this id is available when reusing existing questions
};

export type CreateQuiz = {
  name: string;
  questions: CreateQuestion[];
};

export type QuizResponse = Omit<Quiz, 'created_at' | 'updated_at'> & {
  questions: Omit<Question, 'created_at' | 'updated_at' | 'quizId'>[];
};
