'use client';

import { ChangeEvent, useState } from 'react';
import { CreateQuestion } from '../../types';
import QuestionList from '../question/question-list';
import AddNewQuestion from '../question/add-new-question';
import { UseExistingQuestions } from '../question/use-existing-questions';
import Button from '../button';
import clsx from 'clsx';
import { Question } from '@prisma/client';

enum QuestionActionEnum {
  ADD_NEW = 'add-new',
  USE_EXISTING = 'use-existing',
}

export default function QuizForm() {
  const defaultQuizName = 'Untitled quiz';
  const [name, setName] = useState<string>(defaultQuizName);
  const [questions, setQuestions] = useState<CreateQuestion[]>([]);

  const [questionAction, setQuestionAction] =
    useState<QuestionActionEnum | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  //prevent from setting empty name
  const handleBlur = () => {
    if (!name.length) {
      setName(defaultQuizName);
    }
  };

  const handleCreateQuiz = () => {
    //api call
    //POST /quizzes
    // const newQuiz: CreateQuiz = {name, questions}
    // mockQuizzes.push()
  };
  const handleAddQuestions = (questions: CreateQuestion[]) =>
    setQuestions((prev) => [...questions, ...prev]);

  const handleAction = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestionAction(e.target.value as QuestionActionEnum);
  };

  const resetAction = () => {
    setQuestionAction(null);
  };

  const handleReset = () => {
    setName(defaultQuizName);
    setQuestions([]);
  };

  const handleCreate = () => {
    const quiz = {
      name,
      questions,
    };

    console.log('🚀 ~ file: quiz-form.tsx:62 ~ quiz:', quiz);
  };

  const handleRemoveItem = (internalId: string) => {
    setQuestions((questions) =>
      questions.filter((item) => item.internalId != internalId)
    );
  };

  return (
    <div className='form-control w-full max-w-lg flex flex-col gap-4 items-center'>
      <input
        type='text'
        className='input hover:border-primary text-center text-2xl font-semibold'
        value={name}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      <div className='join items-center'>
        <input
          className='join-item btn'
          type='radio'
          aria-label='Create new question'
          value={QuestionActionEnum.ADD_NEW}
          checked={questionAction === QuestionActionEnum.ADD_NEW}
          onChange={handleAction}
        />
        <div className='bg-accent font-semibold rounded-none p-3'>OR</div>
        <input
          className='join-item btn'
          type='radio'
          aria-label='Add existing question'
          value={QuestionActionEnum.USE_EXISTING}
          checked={questionAction === QuestionActionEnum.USE_EXISTING}
          onChange={handleAction}
        />
      </div>
      <QuestionModule
        action={questionAction}
        handleAddQuestions={handleAddQuestions}
        questions={questions}
        resetAction={resetAction}
        handleRemoveItem={handleRemoveItem}
      />
      <div
        className={clsx(
          {
            'w-full flex gap-4 justify-end':
              questions.length && !questionAction,
          },
          { hidden: !questions.length || questionAction }
        )}
      >
        <Button className='btn btn-primary' onClick={handleReset}>
          Reset
        </Button>
        <Button className='btn btn-secondary' onClick={handleCreate}>
          Finish Quiz
        </Button>
      </div>
    </div>
  );
}
type QuestionModuleProps = {
  action: QuestionActionEnum | null;
  handleAddQuestions: (question: CreateQuestion[]) => void;
  questions: CreateQuestion[];
  resetAction: () => void;
  handleRemoveItem: (val: string) => void;
};
function QuestionModule({
  action,
  handleAddQuestions,
  questions,
  resetAction,
  handleRemoveItem,
}: QuestionModuleProps) {
  switch (action) {
    case QuestionActionEnum.ADD_NEW:
      return (
        <AddNewQuestion
          handleAddQuestions={handleAddQuestions}
          resetAction={resetAction}
        />
      );
    case QuestionActionEnum.USE_EXISTING:
      return (
        <UseExistingQuestions
          handleAddQuestions={handleAddQuestions}
          resetAction={resetAction}
        />
      );
    default:
      return (
        <QuestionList
          questions={questions}
          handleRemoveItem={handleRemoveItem}
        />
      );
  }
}
