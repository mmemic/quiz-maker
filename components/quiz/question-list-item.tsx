import { CreateQuestion } from '../types';

export type QuestionListItemProps = {
  question: CreateQuestion;
};

export default function QuestionListItem({ question }: QuestionListItemProps) {
  return (
    <details className='collapse collapse-arrow bg-base-200'>
      <summary className='collapse-title text-xl font-medium'>
        {question.question}
      </summary>
      <div className='collapse-content'>{question.answer}</div>
    </details>
  );
}
