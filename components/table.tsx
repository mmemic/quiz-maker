import { QuizResponse } from '@/types/quiz.type';
import TableRow from './table-row';

export type TableProps = {
  data: QuizResponse[];
};

export default function Table({ data }: TableProps) {
  return (
    <div className='w-full max-w-3xl rounded-md'>
      <div className='w-full flex p-3 bg-primary rounded-t-md text-base-100'>
        <p className='w-2/12'>Id</p>
        <p className='w-10/12'>Name</p>
      </div>
      <div>
        {data.map((row) => (
          <TableRow key={row.id} data={row} />
        ))}
      </div>
    </div>
  );
}
