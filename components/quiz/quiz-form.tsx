import QuizName from './quiz-name';
import QuizQuestions from './quiz-questions';

export default function QuizForm() {
  return (
    <div className='form-control w-full max-w-sm flex flex-col gap-4'>
      <QuizName />
      <QuizQuestions />
    </div>
  );
}
