import Button from '@/components/button';
import QuizList from '@/components/quiz/quiz-list';
import { QuizProvider } from '@/contexts/quiz.context';
import { quizServerService } from '@/services/server/quiz.server.service';
import Link from 'next/link';

export default async function Home() {
  const quizData = await quizServerService.getQuizzes();

  return (
    <main className='flex min-h-screen flex-col gap-2 items-center p-4'>
      <Link href='quiz/create'>
        <Button className='w-fit'>Create Quiz</Button>
      </Link>
      <QuizProvider initialData={quizData}>
        <QuizList />
      </QuizProvider>
    </main>
  );
}

// 'use client';

// import { useChat } from 'ai/react';

// export default function Chat() {
//   const { messages, input, handleInputChange, handleSubmit } = useChat();

//   return (
//     <main className='mx-auto w-full h-screen max-w-lg p-24 flex flex-col'>
//       <section className='mb-auto m'>
//         {messages.map((m) => (
//           <div className='mb-4' key={m.id}>
//             {m.role === 'user' ? 'User: ' : 'AI: '}
//             {m.content}
//           </div>
//         ))}
//       </section>
//       <form className='flex space-x-4' onSubmit={handleSubmit}>
//         <input
//           className='rounded-md p-2 text-black'
//           value={input}
//           onChange={handleInputChange}
//           placeholder='Say something...'
//         />
//         <button
//           className='border-solid border-2 border-white p-2 rounded-md'
//           type='submit'
//         >
//           Send
//         </button>
//       </form>
//     </main>
//   );
// }
