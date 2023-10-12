import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './button';
import { QuizResponse } from '@/types';
import { faPlay, faTrash } from '@fortawesome/free-solid-svg-icons';

export type TableRowProps = {
  data: QuizResponse;
};

export default function TableRow({ data }: TableRowProps) {
  const { id, name } = data;
  return (
    <tr className='hover hover:cursor-pointer group'>
      <th>{id}</th>
      <td>{name}</td>
      <td className='gap-4 flex'>
        <FontAwesomeIcon icon={faTrash} className='text-primary md:text-lg' />
        <FontAwesomeIcon icon={faPlay} className='text-secondary md:text-lg' />
      </td>
    </tr>
  );
}
