import { Question } from '@prisma/client';
import { prisma } from '@/prisma/client';

class QuestionService {
  async getQuestions(text?: string, limit = 5): Promise<Question[]> {
    return await prisma.question.findMany({
      where: { question: { contains: text, mode: 'insensitive' } },
      take: limit,
    });
  }
}

export const questionService = new QuestionService();
