import Button from '@/components/button';
import QuizList from '@/components/quiz/quiz-list';
import { quizService } from '@/services/quiz.service';
import Link from 'next/link';

export default async function Home() {
  const { data, meta } = await quizService.getQuizzes();

  return (
    <main className='flex min-h-screen flex-col gap-2 items-center p-4'>
      <Link href='quiz/create'>
        <Button className='w-fit'>Create Quiz</Button>
      </Link>
      <QuizList data={data} meta={meta} />
    </main>
  );
}
