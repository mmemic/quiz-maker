import { z } from 'zod';

export const QuestionSchema = z.object({
  question: z.string(),
  answer: z.string(),
  id: z.optional(z.number()),
});

export const QuizSchema = z.object({
  name: z.string(),
  questions: z.array(QuestionSchema),
});
