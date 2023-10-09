import TableRow from './table-row';
import { QuizResponse } from '@/types';

export type TableProps = {
  data: QuizResponse[];
};

export default function Table({ data }: TableProps) {
  return (
    <div className='w-full max-w-3xl'>
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <TableRow key={row.id} data={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
