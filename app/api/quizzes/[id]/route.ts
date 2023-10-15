import { NextRequest, NextResponse } from 'next/server';
import { parsePathId } from '../../util';
import { quizService } from '@/services/quiz.service';
import { QuizSchema } from '../../schemas';

export async function GET(request: NextRequest) {
  const id = parsePathId(request.url);
  if (!id)
    return NextResponse.json(
      { msg: 'Invalid request. Id must be a number.' },
      { status: 400 }
    );

  const data = await quizService.getQuiz(id);
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
  try {
    const updatedQuiz = await quizService.updateQuiz(id, {
      ...data,
      id,
      slug: data.slug ?? null,
    });
    return NextResponse.json(updatedQuiz);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function DELETE(request: NextRequest) {
  const id = parsePathId(request.url);
  if (!id)
    return NextResponse.json(
      { msg: 'Invalid request. Id must be a number.' },
      { status: 400 }
    );

  try {
    const data = await quizService.deleteQuiz(id);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
