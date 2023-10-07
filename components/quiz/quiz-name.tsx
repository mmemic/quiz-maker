'use client';
import { ChangeEvent, useState } from 'react';

export default function QuizName() {
  const defaultName = 'Untitled quiz';
  const [name, setName] = useState<string>(defaultName);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  //prevent from setting empty name
  const handleBlur = () => {
    if (!name.length) {
      setName(defaultName);
    }
  };

  return (
    <input
      type='text'
      className='input hover:border-primary text-center text-2xl font-semibold'
      value={name}
      onChange={handleInputChange}
      onBlur={handleBlur}
    />
  );
}
