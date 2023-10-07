import Button from '@/components/button';
import Table from '@/components/table';
import { mockQuizzes } from '@/mock/quizzes';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col gap-2 items-center p-4'>
      <Link href='quiz/create'>
        <Button className='w-fit'>Create Quiz</Button>
      </Link>
      <Table data={mockQuizzes.slice(0, 10)} />
    </main>
  );
}
