import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTrash } from '@fortawesome/free-solid-svg-icons';
import DeleteModal from './modals/delete-modal';
import { QuizResponse } from '@/types/quiz.type';
import Link from 'next/link';
import Button from './button';

export type TableRowProps = {
  data: QuizResponse;
};

export default function TableRow({ data }: TableRowProps) {
  const { id, name, slug } = data;
  const modalId = `delete_modal_${id}`;
  return (
    <div className='w-full flex hover hover:cursor-pointer group p-3 bg-base-200 hover:bg-base-300 last:rounded-b-md'>
      <Link href={`/quiz/edit/${slug}`} className='w-11/12 flex items-center'>
        <p className='w-2/12'>{id}</p>
        <p className='w-10/12'>{name}</p>
      </Link>
      <div className='w-1/12'>
        <div className='flex justify-end'>
          <button
            className='btn btn-square btn-sm btn-ghost'
            onClick={() =>
              (
                document?.getElementById(modalId) as HTMLDialogElement
              ).showModal()
            }
          >
            <FontAwesomeIcon icon={faTrash} className='text-primary text-xl' />
          </button>
          <Link
            href={`/quiz/run/${slug}`}
            className='btn btn-square btn-sm btn-ghost'
          >
            <FontAwesomeIcon icon={faPlay} className='text-secondary text-lg' />
          </Link>
        </div>
        <DeleteModal id={id} name={name} modalId={modalId} />
      </div>
    </div>
  );
}
