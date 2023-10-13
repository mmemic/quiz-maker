'use client';
import Button from '../button';
import { CreateQuestion } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  question: string;
  answer: string;
};

export type AddNewQuestionProps = {
  handleAddQuestions: (question: CreateQuestion[]) => void;
  resetAction: () => void;
};

export default function AddNewQuestion({
  handleAddQuestions,
  resetAction,
}: AddNewQuestionProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      question: '',
      answer: '',
    },
  });

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
    resetAction();
  };

  const onSubmit: SubmitHandler<Inputs> = ({ question, answer }) => {
    const newQuestion: CreateQuestion = {
      internalId: uuidv4(),
      question,
      answer,
    };
    handleAddQuestions([newQuestion]);
    resetAction();
  };

  return (
    <div className='flex flex-col gap-4 w-full'>
      <form
        className='form-control flex flex-col p-2'
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
        <label className='label'>
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
