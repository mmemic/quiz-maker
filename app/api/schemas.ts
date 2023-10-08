import { z } from 'zod';

export const QuestionSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export const QuizSchema = z.object({
  name: z.string(),
  questions: z.array(QuestionSchema),
});
