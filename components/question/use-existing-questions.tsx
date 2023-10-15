'use client';
import useDebounce from '@/hooks/use-debounce';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import Button from '../button';
import { v4 as uuidv4 } from 'uuid';
import { QuestionDTO, QuestionResponse } from '@/types/question.type';
import { useQuizFormContext } from '@/contexts/quiz-form.context';
import { questionClientService } from '@/services/client/question.client.service';

type QuestionWithState = QuestionDTO & {
  checked: boolean;
};

export function UseExistingQuestions() {
  const [value, setValue] = useState<string>('');
  const [questions, setQuestions] = useState<QuestionWithState[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [anySelected, setAnySelected] = useState<boolean>(false);
  const {
    setQuestionAction,
    questions: existingQuestions,
    addQuestions,
  } = useQuizFormContext();

  const existingQuestionIds = existingQuestions.map((item) => item.id);
  const debounceDelay = 300;
  const debouncedSearchText = useDebounce(value, debounceDelay);

  useEffect(() => {
    const searchQuestions = async () => {
      const result = (
        await questionClientService.getQuestions(debouncedSearchText)
      ).filter((item) => !existingQuestionIds.includes(item.id));

      setQuestions(
        result.map(
          (item): QuestionWithState => ({
            ...item,
            checked: false,
            internalId: uuidv4(),
          })
        )
      );
      setIsLoading(false);
    };
    if (debouncedSearchText.length >= 2) {
      setIsLoading(true);
      searchQuestions();
    } else {
      setQuestions([]);
    }
  }, [debouncedSearchText]);

  const handleSelect = (internalId: string) => {
    const updatedQuestions = questions.map(
      (item): QuestionWithState =>
        item.internalId === internalId
          ? { ...item, checked: !item.checked }
          : item
    );
    const selectedQuestion = updatedQuestions.find((item) => item.checked);
    if (selectedQuestion && !anySelected) {
      setAnySelected(true);
    } else if (!selectedQuestion && anySelected) {
      setAnySelected(false);
    }
    setQuestions(updatedQuestions);
  };

  const resetSearch = () => {
    setQuestions([]);
    setValue('');
  };

  const handleCancel = () => {
    resetSearch();
    setQuestionAction(null);
  };

  const handleSave = () => {
    addQuestions(questions.filter((item) => item.checked));
    resetSearch();
    setQuestionAction(null);
  };

  return (
    <div className='form-control w-full flex flex-col p-2'>
      <label className='label'>
        <span className='label-text'>Search by question name:</span>
      </label>
      <input
        type='text'
        placeholder='Type here'
        className='input input-bordered w-full'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {isLoading ? (
        <span className='loading loading-spinner loading-md self-center m-6 text-primary' />
      ) : (
        <div className='py-4 flex flex-col gap-2'>
          {questions.map((question, index) => (
            <ListItem
              key={index}
              question={question}
              handleSelect={handleSelect}
            />
          ))}
        </div>
      )}
      <div className='flex gap-4 justify-end'>
        <Button className='btn btn-primary' onClick={handleCancel}>
          Cancel
        </Button>
        <Button
          className={clsx('btn btn-secondary', {
            'btn-disabled': !anySelected,
          })}
          onClick={handleSave}
        >
          Add Questions
        </Button>
      </div>
    </div>
  );
}

type ListItemProps = {
  question: QuestionWithState;
  handleSelect: (id: string) => void;
};

function ListItem({ question, handleSelect }: ListItemProps) {
  const { question: name, answer, checked, internalId } = question;

  return (
    <div
      className={clsx('collapse bg-base-200 flex items-center', {
        'bg-secondary text-base-100': checked,
      })}
      onClick={() => internalId && handleSelect(internalId)}
    >
      <div className='collapse-title p-4 w-11/12'>
        <p className='text-md font-medium truncate'>{name}</p>
        <p className='truncate'>{answer}</p>
      </div>
      <FontAwesomeIcon
        icon={faCheck}
        className={clsx({ visible: checked }, { invisible: !checked })}
      />
    </div>
  );
}
