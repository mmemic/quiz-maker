import Button from '@/components/button';
import QuizForm from '@/components/quiz/quiz-form';
import Table from '@/components/table';
import { mockQuizzes } from '@/mock/quizzes';

export default function CreateQuiz() {
  return (
    <main className='flex min-h-screen flex-col gap-4 items-center p-4'>
      <p className='text-2xl font-semibold'>Create new quiz</p>
      <QuizForm />
    </main>
  );
}
