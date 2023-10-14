import { QuestionDTO, QuestionResponse } from './question.type';

export type CreateQuizDTO = {
  name: string;
  questions: QuestionDTO[];
};

export type UpdateQuizDTO = {
  id: number;
  name: string;
  slug: string | null;
  questions: QuestionDTO[];
};

export type QuizResponse = {
  id: number;
  name: string;
  slug: string | null;
  questions: QuestionResponse[];
};
