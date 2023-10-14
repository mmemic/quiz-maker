import { prisma } from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const slug = request.url.split('/').pop();
  if (!slug)
    return NextResponse.json(
      { msg: 'Invalid request. Slug is not defined.' },
      { status: 400 }
    );

  const data = await prisma.quiz.findFirst({
    where: { slug },
    include: { questions: true },
  });
  return NextResponse.json(data);
}
