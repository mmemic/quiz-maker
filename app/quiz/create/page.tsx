import QuizForm from '@/components/quiz/quiz-form';
import { QuizProvider } from '@/contexts/quiz.context';
import { quizService } from '@/services/quiz.service';

export default async function CreateQuiz() {
  const quizData = await quizService.getQuizzes();

  return (
    <main className='flex min-h-screen flex-col gap-4 items-center p-4'>
      <QuizProvider initialData={quizData}>
        <QuizForm />
      </QuizProvider>
    </main>
  );
}
