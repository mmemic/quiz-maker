import QuestionListItem from './question-list-item';
import { useQuizFormContext } from '@/contexts/quiz-form.context';

export default function QuestionList() {
  const { questions } = useQuizFormContext();

  return (
    <div className='flex flex-col gap-2 w-full'>
      {questions.length ? (
        questions.map((question, index) => (
          <QuestionListItem key={index} question={question} enableDelete />
        ))
      ) : (
        <p className='text-sm text-center'>No questions found.</p>
      )}
    </div>
  );
}
