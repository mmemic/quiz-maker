import { prisma } from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const text = request.nextUrl.searchParams.get('search') ?? undefined;
  const limitParam = request.nextUrl.searchParams.get('limit');
  const limit = limitParam ? Number.parseInt(limitParam) : undefined;

  const data = await prisma.question.findMany({
    where: { question: { contains: text, mode: 'insensitive' } },
    take: limit,
  });

  return NextResponse.json(data);
}
