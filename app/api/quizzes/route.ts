import { NextRequest, NextResponse } from 'next/server';
import { QuizSchema } from '../schemas';
import { DEFAULT_LIMIT, DEFAULT_PAGE } from '../const';
import { quizServerService } from '@/services/server/quiz.server.service';

export async function GET(request: NextRequest) {
  const pageParam = request.nextUrl.searchParams.get('page');
  const limitParam = request.nextUrl.searchParams.get('limit');
  const page = pageParam ? Number.parseInt(pageParam) : DEFAULT_PAGE;
  const limit = limitParam ? Number.parseInt(limitParam) : DEFAULT_LIMIT;

  const data = await quizServerService.getQuizzes(page, limit);

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

  const quiz = await quizServerService.createQuiz(data);

  return NextResponse.json(quiz);
}
