'use client';
import { createContext, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { QuizResponse, ResponseMeta } from '@/types';
import { quizService } from '@/services/quiz.service';

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

interface QuizProviderProps {
  children?: ReactNode | ReactNode[];
}

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const [quizzes, setQuizzes] = useState<QuizResponse[]>([]);
  const [meta, setMeta] = useState<ResponseMeta>({
    page: 1,
    pageCount: 0,
    pageSize: 10,
    total: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchQuizzes(page);
  }, []);

  const { page, pageCount } = meta;
  const hasPrevious: boolean = page > 1;
  const hasNext: boolean = pageCount > page;

  const fetchQuizzes = (page: number) => {
    setIsLoading(true);
    quizService
      .getQuizzes(page)
      .then((res) => {
        setQuizzes(res.data);
        setMeta(res.meta);
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
    quizService.deleteQuiz(id).then(() => fetchQuizzes(page));
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
