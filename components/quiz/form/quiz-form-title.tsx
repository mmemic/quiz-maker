import { useQuizFormContext } from '@/contexts/quiz-form.context';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState, ChangeEvent } from 'react';

export default function QuizFormTitle() {
  const { name, setName, defaultName } = useQuizFormContext();
  const [showPen, setShowPen] = useState<boolean>(true);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  //prevent from setting empty name
  const handleBlur = () => {
    setShowPen(true);
    if (!name.length) {
      setName(defaultName);
    }
  };

  return (
    <div className='flex items-center gap-2'>
      <input
        type='text'
        className='input hover:border-primary text-center text-2xl font-semibold w-48 md:w-full'
        value={name}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onFocus={() => setShowPen(false)}
      />
      <FontAwesomeIcon icon={faPen} className={clsx({ invisible: !showPen })} />
    </div>
  );
}
