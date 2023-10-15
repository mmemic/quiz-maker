'use client';
import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { ResponseMeta } from '@/types/meta.type';
import { QuizResponse } from '@/types/quiz.type';
import { quizClientService } from '@/services/client/quiz.client.service';

interface QuizContextProps {
  quizzes: QuizResponse[];
  hasPrevious: boolean;
  hasNext: boolean;
  isLoading: boolean;
  fetchPrevious: () => void;
  fetchNext: () => void;
  refetch: () => void;
  deleteQuiz: (val: number) => void;
}

const QuizContext = createContext<QuizContextProps>({
  quizzes: [],
  hasPrevious: false,
  hasNext: false,
  isLoading: false,
  fetchPrevious: () => {},
  fetchNext: () => {},
  refetch: () => {},
  deleteQuiz: () => {},
});

type QuizData = {
  data: QuizResponse[];
  meta: ResponseMeta;
};

interface QuizProviderProps {
  children?: ReactNode | ReactNode[];
  initialData: QuizData;
}

export const QuizProvider = ({ children, initialData }: QuizProviderProps) => {
  const [data, setData] = useState<QuizData>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { data: quizzes, meta } = data;
  const { page, pageCount, pageSize, total } = meta;

  const hasPrevious: boolean = page > 1;
  const hasNext: boolean = pageCount > page;

  const fetchQuizzes = (page: number) => {
    setIsLoading(true);
    quizClientService
      .getQuizzes(page)
      .then((data) => {
        setData(data);
      })
      .finally(() => setIsLoading(false));
  };

  const fetchPrevious = () => {
    if (hasPrevious) {
      fetchQuizzes(page - 1);
    }
  };

  const fetchNext = () => {
    if (hasNext) {
      fetchQuizzes(page + 1);
    }
  };

  const refetch = () => {
    fetchQuizzes(page);
  };

  const deleteQuiz = (id: number) => {
    quizClientService.deleteQuiz(id).then(() => {
      //case when deleting last quiz on current page
      if (page != 1 && total === (page - 1) * pageSize + 1) {
        fetchQuizzes(page - 1);
      } else fetchQuizzes(page);
    });
  };

  return (
    <QuizContext.Provider
      value={{
        quizzes,
        hasPrevious,
        hasNext,
        isLoading,
        fetchPrevious,
        fetchNext,
        refetch,
        deleteQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);
