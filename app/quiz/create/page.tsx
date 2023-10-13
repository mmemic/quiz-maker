import QuizForm from '@/components/quiz/quiz-form';
import { QuizProvider } from '@/contexts/quiz.context';

export default function CreateQuiz() {
  return (
    <main className='flex min-h-screen flex-col gap-4 items-center p-4'>
      <QuizProvider>
        <QuizForm />
      </QuizProvider>
    </main>
  );
}
