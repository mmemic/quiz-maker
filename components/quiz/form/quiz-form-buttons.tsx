import Button from '@/components/button';
import { useQuizFormContext } from '@/contexts/quiz-form.context';
import clsx from 'clsx';

export function QuizFormButtons() {
  const { questionAction, questions, handleSubmit, isQuizChanged } =
    useQuizFormContext();

  return (
    <div
      className={clsx(
        {
          'w-full flex gap-4 justify-end': questions.length && !questionAction,
        },
        { hidden: !questions.length || questionAction }
      )}
    >
      <Button className='btn btn-primary' /* onClick={handleReset} */>
        Cancel
      </Button>
      <Button
        className={clsx('btn btn-secondary', {
          'btn-disabled': !isQuizChanged,
        })}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
}
