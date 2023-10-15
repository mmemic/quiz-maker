import { Quiz } from '@prisma/client';
import { apiService } from './api.service';
import { CreateQuizDTO, QuizResponse, UpdateQuizDTO } from '@/types/quiz.type';

class QuizService {
  async createQuiz(data: CreateQuizDTO): Promise<Quiz> {
    return await apiService.post('/quizzes', data);
  }

  async getQuizzes(page = 1, limit = 10) {
    return await apiService.get(`/quizzes?page=${page}&limit=${limit}`);
  }

  async deleteQuiz(id: number) {
    return await apiService.delete(`/quizzes/${id}`);
  }

  async getQuizBySlug(slug: string): Promise<QuizResponse | null> {
    return await apiService.get(`/quizzes/slug/${slug}`);
  }

  async updateQuiz(id: number, data: UpdateQuizDTO): Promise<Quiz> {
    return await apiService.put(`/quizzes/${id}`, data);
  }
}

export const quizClientService = new QuizService();
