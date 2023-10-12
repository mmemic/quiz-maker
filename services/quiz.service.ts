import { Quiz } from '@prisma/client';
import { apiService } from './api.service';
import { CreateQuiz } from '@/types';

class QuizService {
  async createQuiz(data: CreateQuiz): Promise<Quiz> {
    return await apiService.post('/quizzes', data);
  }

  async getQuizzes(page = 1, limit = 10) {
    return await apiService.get(`/quizzes?page=${page}&limit=${limit}`);
  }

  async deleteQuiz(id: number) {
    return await apiService.delete(`/quizzes/${id}`);
  }
}

export const quizService = new QuizService();
