'use client';
import Button from '../button';
import { v4 as uuidv4 } from 'uuid';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useQuizFormContext } from '@/contexts/quiz-form.context';
import { QuestionDTO } from '@/types/question.type';
import { useChat } from 'ai/react';
import { useEffect } from 'react';
import clsx from 'clsx';

type Inputs = {
  question: string;
  answer: string;
};

export default function AddNewQuestion() {
  const { setQuestionAction, addQuestions } = useQuizFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<Inputs>({
    defaultValues: {
      question: '',
      answer: '',
    },
  });
  const { messages, setInput, handleSubmit: submitQuery } = useChat();
  const questionValue = watch().question;
  const answerValue = watch().answer;

  useEffect(() => {
    setInput(questionValue);
  }, [questionValue, setInput]);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1]?.content;

    if (lastMessage && answerValue != lastMessage) {
      if (messages.length % 2) {
        setValue('answer', '...');
      } else {
        setValue('answer', lastMessage);
      }
    }
  }, [messages, answerValue, setValue]);

  const createValidationOptions = (name: string) => ({
    required: `${name} is required`,
    minLength: {
      value: 10,
      message: `${name} must have a minimum of 10 characters.`,
    },
    setValueAs: (val: string) => val.trim(),
  });

  const validationOptions = {
    question: createValidationOptions('Question'),
    answer: createValidationOptions('Answer'),
  };

  const handleCancel = () => {
    setQuestionAction(null);
  };

  const onSubmit: SubmitHandler<Inputs> = ({ question, answer }) => {
    const newQuestion: QuestionDTO = {
      internalId: uuidv4(),
      question,
      answer,
    };
    addQuestions([newQuestion]);
    setQuestionAction(null);
  };

  return (
    <div className='flex flex-col w-full'>
      <form
        className='form-control flex flex-col'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className='label'>
          <span className='label-text'>Question</span>
        </label>
        <textarea
          className='textarea textarea-bordered h-48 w-full'
          placeholder='Question text'
          {...register('question', validationOptions.question)}
        />
        <p className='text-error text-sm p-2'>{errors.question?.message}</p>
      </form>
      <form onSubmit={submitQuery} className='flex justify-end'>
        <Button
          className={clsx('btn btn-secondary', {
            'btn-disabled': questionValue.length < 10,
          })}
          type='submit'
        >
          Let AI answer
        </Button>
      </form>
      <form
        className='form-control flex flex-col'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className='label flex items-end'>
          <span className='label-text'>Answer</span>
        </label>
        <textarea
          className='textarea textarea-bordered h-48 w-full'
          placeholder='Answer text'
          {...register('answer', validationOptions.answer)}
        />
        <p className='text-error text-sm p-2'>{errors.answer?.message}</p>
        <div className='flex gap-4 justify-end'>
          <Button className='btn btn-primary' onClick={handleCancel}>
            Cancel
          </Button>
          <Button className='btn btn-secondary' type='submit'>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
