import { prisma } from '@/prisma/client';
import { quizService } from '@/services/quiz.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const slug = request.url.split('/').pop();
  if (!slug)
    return NextResponse.json(
      { msg: 'Invalid request. Slug is not defined.' },
      { status: 400 }
    );

  const data = await quizService.getQuizBySlug(slug);
  return NextResponse.json(data);
}
