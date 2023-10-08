import { prisma } from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { QuizSchema } from '../schemas';

export async function GET() {
  const data = await prisma.quiz.findMany({
    include: { questions: true },
    orderBy: { updated_at: 'desc' },
  });
  return NextResponse.json(data);
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
  const quiz = await prisma.quiz.create({
    data: {
      name: data.name,
      questions: {
        create: data.questions,
      },
    },
    include: { questions: true },
  });

  return NextResponse.json(quiz);
}
