import { useQuizContext } from '@/contexts/quiz.context';
import Button from '../button';

export type DeleteModalProps = {
  id: number;
  name: string;
  modalId: string;
};

export default function DeleteModal({ id, name, modalId }: DeleteModalProps) {
  const { deleteQuiz } = useQuizContext();
  const handleClick = () => {
    deleteQuiz(id);
  };
  return (
    <dialog id={modalId} className='modal modal-bottom sm:modal-middle'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>Delete quiz</h3>
        <p className='py-4'>
          Are you sure you want to delete quiz: <strong>{name}</strong>
        </p>
        <div className='modal-action'>
          <form method='dialog' className='flex gap-4'>
            {/* if there is a button in form, it will close the modal */}
            <Button>Close</Button>
            <Button className='btn-error' onClick={handleClick}>
              Delete
            </Button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
