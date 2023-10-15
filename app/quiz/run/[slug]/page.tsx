import QuizSlideshow from '@/components/quiz-slideshow';
import { quizServerService } from '@/services/server/quiz.server.service';
import { notFound } from 'next/navigation';

export default async function ViewQuiz({
  params,
}: {
  params: { slug: string };
}) {
  const data = await quizServerService.getQuizBySlug(params.slug);

  if (!data) notFound();

  return (
    <main className='flex min-h-screen flex-col gap-4 items-center p-4'>
      <QuizSlideshow quiz={data} />
    </main>
  );
}
