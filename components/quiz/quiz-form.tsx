'use client';

import Loading from '../loading';
import QuizFormTitle from './form/quiz-form-title';
import { QuestionButtons } from '../question/form/question-buttons';
import { QuestionModule } from '../question/form/question-module';
import { QuizFormButtons } from './form/quiz-form-buttons';
import { useQuizFormContext } from '@/contexts/quiz-form.context';

export default function QuizForm() {
  const { isSubmitting } = useQuizFormContext();

  return (
    <div className='form-control w-full max-w-lg flex flex-col gap-4 items-center m-4'>
      <QuizFormTitle />
      <QuestionButtons className='pb-2' />
      <QuestionModule />
      <Loading isLoading={isSubmitting} className='-my-2' />
      <QuizFormButtons />
    </div>
  );
}
