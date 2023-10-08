import { prisma } from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { QuizSchema } from '../../schemas';
import { parsePathId } from '../../util';

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
  const oldQuestions = await prisma.question.findMany({
    where: { quizId: id },
  });

  const updatedQuiz = await prisma.quiz.update({
    where: {
      id,
    },
    data: {
      name: data.name,
      questions: {
        disconnect: oldQuestions,
        create: data.questions,
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
