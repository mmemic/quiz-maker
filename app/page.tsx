import Button from '@/components/button';
import QuizList from '@/components/quiz/quiz-list';
import { QuizProvider } from '@/contexts/quiz.context';
import Link from 'next/link';

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col gap-2 items-center p-4'>
      <Link href='quiz/create'>
        <Button className='w-fit'>Create Quiz</Button>
      </Link>
      <QuizProvider>
        <QuizList />
      </QuizProvider>
    </main>
  );
}
