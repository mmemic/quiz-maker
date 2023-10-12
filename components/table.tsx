import TableRow from './table-row';
import { QuizResponse } from '@/types';

export type TableProps = {
  data: QuizResponse[];
  handleDelete: (val: number) => void;
};

export default function Table({ data, handleDelete }: TableProps) {
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
            <TableRow key={row.id} data={row} handleDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
