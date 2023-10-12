import { prisma } from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { QuizSchema } from '../schemas';
import { DEFAULT_LIMIT, DEFAULT_PAGE } from '../const';
import { Question } from '@prisma/client';

export async function GET(request: NextRequest) {
  const pageParam = request.nextUrl.searchParams.get('page');
  const limitParam = request.nextUrl.searchParams.get('limit');
  const page = pageParam ? Number.parseInt(pageParam) : DEFAULT_PAGE;
  const limit = limitParam ? Number.parseInt(limitParam) : DEFAULT_LIMIT;

  const total = await prisma.quiz.count();
  const pageCount = Math.ceil(total / limit);
  const data = await prisma.quiz.findMany({
    include: { questions: true },
    orderBy: { updated_at: 'desc' },
    take: limit,
    skip: (page - 1) * limit,
  });

  return NextResponse.json({
    meta: { page, pageSize: limit, pageCount, total },
    data,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const response = QuizSchema.safeParse(body);

  if (!response.success) {
    const { errors } = response.error;

    return NextResponse.json(
      {
        error: { message: 'Invalid request', errors },
      },
      { status: 400 }
    );
  }

  const { data } = response;
  type NewQuestion = Pick<Question, 'question' | 'answer'>;
  type ExistingQuestion = NewQuestion & { id: number };
  const newQuestions: NewQuestion[] = [];
  const existingQuestions: ExistingQuestion[] = [];

  for (const q of data.questions) {
    q.id ? existingQuestions.push(q as ExistingQuestion) : newQuestions.push(q);
  }

  const quiz = await prisma.quiz.create({
    data: {
      name: data.name,
      questions: {
        connect: existingQuestions,
        create: newQuestions,
      },
    },
    include: { questions: true },
  });

  return NextResponse.json(quiz);
}
