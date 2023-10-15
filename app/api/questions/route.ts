import { questionServerService } from '@/services/server/question.server.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const text = request.nextUrl.searchParams.get('search') ?? undefined;
  const limitParam = request.nextUrl.searchParams.get('limit');
  const limit = limitParam ? Number.parseInt(limitParam) : undefined;

  const data = await questionServerService.getQuestions(text, limit);
  return NextResponse.json(data);
}
