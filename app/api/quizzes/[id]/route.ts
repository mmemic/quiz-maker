import { prisma } from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { QuizSchema } from '../../schemas';
import { parsePathId } from '../../util';
import { Question } from '@prisma/client';

export async function GET(request: NextRequest) {
  const id = parsePathId(request.url);
  if (!id)
    return NextResponse.json(
      { msg: 'Invalid request. Id must be a number.' },
      { status: 400 }
    );

  const data = await prisma.quiz.findUnique({
    where: { id },
    include: { questions: true },
  });
  return NextResponse.json(data);
}

export async function PUT(request: NextRequest) {
  const id = parsePathId(request.url);
  if (!id)
    return NextResponse.json(
      { msg: 'Invalid request. Id must be a number.' },
      { status: 400 }
    );

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

  const updatedQuiz = await prisma.quiz.update({
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

  return NextResponse.json(updatedQuiz);
}

export async function DELETE(request: NextRequest) {
  const id = parsePathId(request.url);
  if (!id)
    return NextResponse.json(
      { msg: 'Invalid request. Id must be a number.' },
      { status: 400 }
    );

  const data = await prisma.quiz.delete({ where: { id } });
  return NextResponse.json(data);
}
