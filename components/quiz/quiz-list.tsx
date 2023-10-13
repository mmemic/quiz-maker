'use client';
import Table from '../table';
import clsx from 'clsx';
import { useQuizContext } from '@/contexts/quiz.context';

export default function QuizList() {
  const { quizzes, isLoading, hasPrevious, hasNext, fetchPrevious, fetchNext } =
    useQuizContext();
  return (
    <div className='w-full flex flex-col items-center gap-4'>
      <Table data={quizzes} />
      {isLoading && (
        <span className='loading loading-spinner loading-md'></span>
      )}
      <div className='join grid grid-cols-2'>
        <button
          className={clsx('join-item btn btn-outline', {
            'btn-disabled': !hasPrevious,
          })}
          onClick={fetchPrevious}
        >
          Previous page
        </button>
        <button
          className={clsx('join-item btn btn-outline', {
            'btn-disabled': !hasNext,
          })}
          onClick={fetchNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
