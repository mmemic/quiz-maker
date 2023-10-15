import Button from '@/components/button';
import QuizList from '@/components/quiz/quiz-list';
import { QuizProvider } from '@/contexts/quiz.context';
import { quizServerService } from '@/services/server/quiz.server.service';
import Link from 'next/link';

export default async function Home() {
  const quizData = await quizServerService.getQuizzes();

  return (
    <main className='flex min-h-screen flex-col gap-2 items-center p-4'>
      <Link href='quiz/create'>
        <Button className='w-fit'>Create Quiz</Button>
      </Link>
      <QuizProvider initialData={quizData}>
        <QuizList />
      </QuizProvider>
    </main>
  );
}
