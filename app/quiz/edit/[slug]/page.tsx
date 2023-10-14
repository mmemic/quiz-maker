import QuizForm from '@/components/quiz/quiz-form';
import { QuizFormProvider } from '@/contexts/quiz-form.context';
import { QuizFormEnum } from '@/enums/quiz-form.enum';
import { quizService } from '@/services/quiz.service';
import { QuestionDTO } from '@/types/question.type';
import { notFound } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

export default async function EditQuiz({
  params,
}: {
  params: { slug: string };
}) {
  const data = await quizService.getQuizBySlug(params.slug);

  if (!data) notFound();

  const quiz = {
    ...data,
    questions: data.questions.map(
      (item): QuestionDTO => ({ ...item, internalId: uuidv4() })
    ),
  };

  return (
    <main className='flex min-h-screen flex-col gap-4 items-center p-4'>
      <QuizFormProvider formType={QuizFormEnum.EDIT} quiz={quiz}>
        <QuizForm />
      </QuizFormProvider>
    </main>
  );
}
