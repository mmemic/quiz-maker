import { Question } from '@prisma/client';
import { apiService } from './api.service';

class QuestionService {
  async getQuestions(text: string, limit = 5): Promise<Question[]> {
    return await apiService.get(`/questions?search=${text}&limit=${limit}`);
  }
}

export const questionClientService = new QuestionService();
