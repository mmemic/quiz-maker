import Button from './button';
import { QuizResponse } from '@/types';

export type TableRowProps = {
  data: QuizResponse;
};

export default function TableRow({ data }: TableRowProps) {
  const { id, name } = data;
  return (
    <tr className='hover hover:cursor-pointer group'>
      <th>{id}</th>
      <td>{name}</td>
      <td className='flex gap-4'>
        <Button className='btn-sm btn-outline btn-error invisible group-hover:visible'>
          delete
        </Button>
        <Button className='btn-sm btn-outline btn-info invisible group-hover:visible'>
          view
        </Button>
      </td>
    </tr>
  );
}
