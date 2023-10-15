'use client';
import { QuizResponse } from '@/types/quiz.type';
import QuestionListItem from './question/question-list-item';
import clsx from 'clsx';
import { useState } from 'react';
import { QuestionResponse } from '@/types/question.type';

type QuizSlideshowProps = {
  quiz: QuizResponse;
};

export default function QuizSlideshow({ quiz }: QuizSlideshowProps) {
  const { name, questions } = quiz;
  const [index, setIndex] = useState<number>(0);
  const [question, setQuestion] = useState<QuestionResponse>(quiz.questions[0]);

  const hasPrevious = index > 0;
  const hasNext = index < questions.length - 1;
  const handlePrevious = () => {
    if (!hasPrevious) return;
    setQuestion(quiz.questions[index - 1]);
    setIndex(index - 1);
  };

  const handleNext = () => {
    if (!hasNext) return;
    setQuestion(quiz.questions[index + 1]);
    setIndex(index + 1);
  };
  return (
    <div className='w-full max-w-lg flex flex-col gap-4 items-center'>
      <p className='text-xl font-semibold'>{name}</p>
      <p className='pt-6'>
        Question {index + 1} of {questions.length}
      </p>
      <QuestionListItem question={question} enableDelete={false} />
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
