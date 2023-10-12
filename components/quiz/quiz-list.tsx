'use client';
import { quizService } from '@/services/quiz.service';
import Table from '../table';
import { QuizResponse, ResponseMeta } from '@/types';
import { useState } from 'react';
import clsx from 'clsx';

export type QuizListProps = {
  data: QuizResponse[];
  meta: ResponseMeta;
};

export default function QuizList({
  data: initialData,
  meta: initialMeta,
}: QuizListProps) {
  const [data, setData] = useState<QuizResponse[]>(initialData);
  const [meta, setMeta] = useState<ResponseMeta>(initialMeta);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { page, pageCount } = meta;
  const hasPrevious: boolean = page > 1;
  const hasNext: boolean = pageCount > page;

  const fetchQuizzes = (page: number) => {
    setIsLoading(true);
    quizService
      .getQuizzes(page)
      .then((res) => {
        setData(res.data);
        setMeta(res.meta);
      })
      .finally(() => setIsLoading(false));
  };

  const handlePrevious = () => {
    if (hasPrevious) {
      fetchQuizzes(page - 1);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      fetchQuizzes(page + 1);
    }
  };

  return (
    <div className='w-full flex flex-col items-center gap-4'>
      <Table data={data} />
      {isLoading && (
        <span className='loading loading-spinner loading-md'></span>
      )}
      <div className='join grid grid-cols-2'>
        <button
          className={clsx('join-item btn btn-outline', {
            'btn-disabled': !hasPrevious,
          })}
          onClick={handlePrevious}
        >
          Previous page
        </button>
        <button
          className={clsx('join-item btn btn-outline', {
            'btn-disabled': !hasNext,
          })}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}