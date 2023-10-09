'use client';
import { useState } from 'react';
import Button from '../button';
import { CreateQuestion } from '../../types';
import { v4 as uuidv4 } from 'uuid';

export type AddNewQuestionProps = {
  handleAddQuestions: (question: CreateQuestion[]) => void;
  resetAction: () => void;
};

export default function AddNewQuestion({
  handleAddQuestions,
  resetAction,
}: AddNewQuestionProps) {
  const [questionValue, setQuestionValue] = useState<string>('');
  const [answerValue, setAnswerValue] = useState<string>('');
  const resetFields = () => {
    setQuestionValue('');
    setAnswerValue('');
  };

  const handleCancel = () => {
    resetFields();
    resetAction();
  };

  const handleSave = () => {
    const newQuestion: CreateQuestion = {
      internalId: uuidv4(),
      question: questionValue,
      answer: answerValue,
    };
    handleAddQuestions([newQuestion]);
    resetFields();
    resetAction();
  };

  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className='form-control flex flex-col p-2'>
        <label className='label'>
          <span className='label-text'>Question</span>
        </label>
        <textarea
          className='textarea textarea-bordered h-48 w-full'
          placeholder='Question text'
          value={questionValue}
          onChange={(e) => setQuestionValue(e.target.value)}
        />
        <label className='label'>
          <span className='label-text'>Answer</span>
        </label>
        <textarea
          className='textarea textarea-bordered h-48 w-full'
          placeholder='Answer text'
          value={answerValue}
          onChange={(e) => setAnswerValue(e.target.value)}
        />
      </div>
      <div className='flex gap-4 justify-end'>
        <Button className='btn btn-primary' onClick={handleCancel}>
          Cancel
        </Button>
        <Button className='btn btn-secondary' onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}
