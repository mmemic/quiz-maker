import QuizForm from '@/components/quiz/quiz-form';
import { QuizFormProvider } from '@/contexts/quiz-form.context';
import { QuizFormEnum } from '@/enums/quiz-form.enum';

export default async function CreateQuiz() {
  return (
    <main className='flex min-h-screen flex-col gap-4 items-center p-4'>
      <QuizFormProvider
        formType={QuizFormEnum.CREATE}
        quiz={{ name: 'Untitled quiz', questions: [] }}
      >
        <QuizForm />
      </QuizFormProvider>
    </main>
  );
}
