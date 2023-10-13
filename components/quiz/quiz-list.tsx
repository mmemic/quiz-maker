'use client';
import Table from '../table';
import clsx from 'clsx';
import { useQuizContext } from '@/contexts/quiz.context';

export default function QuizList() {
  const { quizzes, isLoading, hasPrevious, hasNext, fetchPrevious, fetchNext } =
    useQuizContext();
  return (
    <>
      <div
        className={clsx('w-full flex flex-col items-center gap-4', {
          hidden: !quizzes.length,
        })}
      >
        <Table data={quizzes} />
        {isLoading && <span className='loading loading-spinner loading-md' />}
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
      <p className={clsx({ hidden: quizzes.length != 0 })}>
        No quizzes found. Go ahead and create some :D
      </p>
    </>
  );
}
