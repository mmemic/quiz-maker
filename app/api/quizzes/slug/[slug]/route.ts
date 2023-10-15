import { quizServerService } from '@/services/server/quiz.server.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const slug = request.url.split('/').pop();
  if (!slug)
    return NextResponse.json(
      { msg: 'Invalid request. Slug is not defined.' },
      { status: 400 }
    );

  const data = await quizServerService.getQuizBySlug(slug);
  return NextResponse.json(data);
}
