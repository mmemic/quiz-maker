import { CreateQuestion } from '../../types';
import QuestionListItem from './question-list-item';

export type QuestionListProps = {
  questions: CreateQuestion[];
  handleRemoveItem: (val: string) => void;
};

export default function QuestionList({
  questions,
  handleRemoveItem,
}: QuestionListProps) {
  return (
    <div className='py-4 flex flex-col gap-2 w-full'>
      {questions.length ? (
        questions.map((question, index) => (
          <QuestionListItem
            key={index}
            question={question}
            handleRemoveItem={handleRemoveItem}
          />
        ))
      ) : (
        <p>No questions added.</p>
      )}
    </div>
  );
}
