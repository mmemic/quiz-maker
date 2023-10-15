import { Question, Quiz } from '@prisma/client';
import { CreateQuizDTO, QuizResponse, UpdateQuizDTO } from '@/types/quiz.type';
import { prisma } from '@/prisma/client';
import slugify from '@sindresorhus/slugify';
import { v4 as uuidv4 } from 'uuid';
import { QuestionDTO } from '@/types/question.type';

type NewQuestion = Pick<Question, 'question' | 'answer'>;
type ExistingQuestion = NewQuestion & { id: number };

class QuizService {
  async getQuizzes(page = 1, limit = 10) {
    const total = await prisma.quiz.count();
    const pageCount = Math.ceil(total / limit);
    const data = await prisma.quiz.findMany({
      include: { questions: true },
      orderBy: { updated_at: 'desc' },
      take: limit,
      skip: (page - 1) * limit,
    });

    return {
      meta: { page, pageSize: limit, pageCount, total },
      data,
    };
  }

  async getQuiz(id: number) {
    const quiz = await prisma.quiz.findUnique({
      where: { id },
      include: { questions: true },
    });

    if (!quiz) throw Error('Quiz with given id does not exist');
    return quiz;
  }

  async createQuiz(data: CreateQuizDTO): Promise<Quiz> {
    const { newQuestions, existingQuestions } = this.parseQuestions(
      data.questions
    );

    let slug = slugify(data.name);
    const existingQuiz = (await prisma.quiz.findMany({ where: { slug } }))
      .length;

    if (existingQuiz) {
      slug = `${slugify(data.name)}-${uuidv4()}`;
    }

    return await prisma.quiz.create({
      data: {
        name: data.name,
        slug,
        questions: {
          connect: existingQuestions,
          create: newQuestions,
        },
      },
      include: { questions: true },
    });
  }

  async updateQuiz(id: number, data: UpdateQuizDTO): Promise<Quiz> {
    const { newQuestions, existingQuestions } = this.parseQuestions(
      data.questions
    );

    const quiz = await prisma.quiz.findUnique({ where: { id } });
    if (!quiz) throw Error('Quiz with given id does not exist');

    return await prisma.quiz.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        questions: {
          connect: existingQuestions,
          create: newQuestions,
        },
      },
      include: { questions: true },
    });
  }

  async deleteQuiz(id: number) {
    const quiz = await prisma.quiz.findUnique({ where: { id } });
    if (!quiz) throw Error('Quiz with given id does not exist');
    return await prisma.quiz.delete({ where: { id } });
  }

  async getQuizBySlug(slug: string): Promise<QuizResponse | null> {
    return await prisma.quiz.findFirst({
      where: { slug },
      include: { questions: true },
    });
  }

  parseQuestions(questions: QuestionDTO[]) {
    const newQuestions: NewQuestion[] = [];
    const existingQuestions: ExistingQuestion[] = [];

    for (const q of questions) {
      q.id
        ? existingQuestions.push(q as ExistingQuestion)
        : newQuestions.push(q);
    }

    return { newQuestions, existingQuestions };
  }
}

export const quizServerService = new QuizService();
