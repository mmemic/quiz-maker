import { CreateQuestion } from '../types';
import QuestionListItem from './question-list-item';

export type QuestionListProps = {
  questions: CreateQuestion[];
};

export default function QuestionList({ questions }: QuestionListProps) {
  return (
    <>
      {questions.map((question, index) => (
        <QuestionListItem key={index} question={question} />
      ))}
    </>
  );
}
