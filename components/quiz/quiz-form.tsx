import QuizQuestions from './quiz-questions';

export default function QuizForm() {
  return (
    <div className='form-control w-full max-w-sm flex flex-col gap-4'>
      <div>
        <label className='label'>
          <span className='label-text'>Name</span>
        </label>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered input-secondary w-full max-w-sm'
        />
      </div>
      <QuizQuestions />
    </div>
  );
}
