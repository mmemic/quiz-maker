import QuizSlideshow from '@/components/quiz-slideshow';
import QuizForm from '@/components/quiz/quiz-form';
import { quizService } from '@/services/quiz.service';
import { QuestionDTO } from '@/types/question.type';
import { notFound } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default async function ViewQuiz({
  params,
}: {
  params: { slug: string };
}) {
  const data = await quizService.getQuizBySlug(params.slug);

  if (!data) notFound();

  return (
    <main className='flex min-h-screen flex-col gap-4 items-center p-4'>
      <QuizSlideshow quiz={data} />
    </main>
  );
}
