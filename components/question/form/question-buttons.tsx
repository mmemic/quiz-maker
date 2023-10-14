import { useQuizFormContext } from '@/contexts/quiz-form.context';
import { QuestionActionEnum } from '@/enums/question-action.enum';
import { ChangeEvent } from 'react';

type QuestionButtonsProps = {
  className?: string;
};

export function QuestionButtons({ className }: QuestionButtonsProps) {
  const { questionAction, setQuestionAction } = useQuizFormContext();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestionAction(e.target.value as QuestionActionEnum);
  };
  return (
    <div
      className={`join flex flex-col md:flex-row items-center gap-1 md:gap-0 ${className}`}
    >
      <input
        className='btn rounded-r-lg md:rounded-r-none'
        type='radio'
        aria-label='Create new question'
        value={QuestionActionEnum.ADD_NEW}
        checked={questionAction === QuestionActionEnum.ADD_NEW}
        onChange={handleChange}
      />
      <div className='bg-accent font-semibold rounded-lg md:rounded-none p-1 md:p-3 w-fit'>
        OR
      </div>
      <input
        className='btn rounded-l-lg md:rounded-l-none'
        type='radio'
        aria-label='Add existing question'
        value={QuestionActionEnum.USE_EXISTING}
        checked={questionAction === QuestionActionEnum.USE_EXISTING}
        onChange={handleChange}
      />
    </div>
  );
}
