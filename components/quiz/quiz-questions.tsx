'use client';
import { useState } from 'react';
import { CreateQuestion } from '../types';
import Button from '../button';
import QuestionList from './question-list';

export default function QuizQuestions() {
  const [questions, setQuestions] = useState<CreateQuestion[]>([]);
  const [isQuestionOpen, setIsQuestionOpen] = useState<boolean>(false);
  const [questionValue, setQuestionValue] = useState<string>('');
  const [answerValue, setAnswerValue] = useState<string>('');

  const resetFields = () => {
    setQuestionValue('');
    setAnswerValue('');
  };

  const handleCancel = () => {
    setIsQuestionOpen(false);
    resetFields();
  };

  const handleSave = () => {
    setIsQuestionOpen(false);
    const newQuestion: CreateQuestion = {
      question: questionValue,
      answer: answerValue,
    };
    setQuestions((questions) => [...questions, newQuestion]);
    resetFields();
  };

  return (
    <>
      <QuestionList questions={questions} />
      {!isQuestionOpen ? (
        <Button onClick={() => setIsQuestionOpen(true)}>
          Add new question
        </Button>
      ) : (
        <div className='form-control w-full max-w-sm flex flex-col gap-4'>
          <div>
            <label className='label'>
              <span className='label-text'>Question</span>
            </label>
            <textarea
              className='textarea textarea-bordered h-48 w-full'
              placeholder='Question text'
              value={questionValue}
              onChange={(e) => setQuestionValue(e.target.value)}
            />
          </div>
          <div>
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

          <div className='flex gap-4'>
            <Button className='btn-outline btn-error' onClick={handleCancel}>
              Cancel
            </Button>
            <Button className='btn-outline btn-success' onClick={handleSave}>
              Save
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
