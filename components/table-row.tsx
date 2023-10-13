import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { QuizResponse } from '@/types';
import { faPlay, faTrash } from '@fortawesome/free-solid-svg-icons';
import DeleteModal from './modals/delete-modal';

export type TableRowProps = {
  data: QuizResponse;
};

export default function TableRow({ data }: TableRowProps) {
  const { id, name } = data;
  const modalId = `delete_modal_${id}`;
  return (
    <tr className='hover hover:cursor-pointer group'>
      <th>{id}</th>
      <td>{name}</td>
      <td className='gap-4 flex'>
        <FontAwesomeIcon
          icon={faTrash}
          className='text-primary text-lg'
          onClick={() =>
            (document?.getElementById(modalId) as HTMLDialogElement).showModal()
          }
        />
        <FontAwesomeIcon icon={faPlay} className='text-secondary text-lg' />
      </td>
      <td>
        <DeleteModal id={id} name={name} modalId={modalId} />
      </td>
    </tr>
  );
}
