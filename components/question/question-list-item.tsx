import { useQuizFormContext } from '@/contexts/quiz-form.context';
import { QuestionDTO, QuestionResponse } from '@/types/question.type';
import { Question } from '@prisma/client';

export type QuestionListItemProps = {
  question: QuestionDTO;
  // handleRemoveItem: (val: string) => void;
};

export default function QuestionListItem({ question }: QuestionListItemProps) {
  const { question: name, answer, internalId } = question;
  const { removeQuestion } = useQuizFormContext();
  const handleClick = () => {
    removeQuestion(internalId);
  };
  return (
    <div className='relative flex items-center gap-2'>
      <details className='collapse collapse-arrow bg-base-200 peer'>
        <summary className='collapse-title text-md font-medium'>{name}</summary>
        <div className='collapse-content'>{answer}</div>
      </details>
      <div className='md:pl-4 md:absolute md:-right-16 md:inset-y-0 md:hidden hover:flex peer-hover:flex'>
        <button className='btn btn-circle hover:bg-error' onClick={handleClick}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
