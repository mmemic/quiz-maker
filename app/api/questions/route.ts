import { questionService } from '@/services/question.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const text = request.nextUrl.searchParams.get('search') ?? undefined;
  const limitParam = request.nextUrl.searchParams.get('limit');
  const limit = limitParam ? Number.parseInt(limitParam) : undefined;

  const data = await questionService.getQuestions(text, limit);
  return NextResponse.json(data);
}
