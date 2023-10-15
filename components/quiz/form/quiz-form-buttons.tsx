import Button from '@/components/button';
import { useQuizFormContext } from '@/contexts/quiz-form.context';
import clsx from 'clsx';

export function QuizFormButtons() {
  const {
    questionAction,
    questions,
    handleSubmit,
    handleCancel,
    isQuizChanged,
    isSubmitting,
  } = useQuizFormContext();

  return (
    <div
      className={clsx(
        {
          'w-full flex gap-4 justify-end': questions.length && !questionAction,
        },
        { hidden: !questions.length || questionAction }
      )}
    >
      <Button
        className={clsx('btn btn-primary', { hidden: !isQuizChanged })}
        onClick={handleCancel}
      >
        Cancel
      </Button>
      <Button
        className={clsx('btn btn-secondary', {
          'btn-disabled': !isQuizChanged || isSubmitting,
        })}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
}
