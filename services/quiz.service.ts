import { Quiz } from '@prisma/client';
import { apiService } from './api.service';
import { CreateQuiz } from '@/types';

class QuizService {
  async createQuiz(data: CreateQuiz): Promise<Quiz> {
    return await apiService.post('/quizzes', data);
  }
}

export const quizService = new QuizService();
