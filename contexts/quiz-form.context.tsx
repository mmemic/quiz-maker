'use client';
import { createContext, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { CreateQuizDTO, UpdateQuizDTO } from '@/types/quiz.type';
import { QuizFormEnum } from '@/enums/quiz-form.enum';
import { QuestionActionEnum } from '@/enums/question-action.enum';
import { QuestionDTO } from '@/types/question.type';
import { useRouter } from 'next/navigation';
import { useQuizContext } from './quiz.context';
import { quizClientService } from '@/services/client/quiz.client.service';

interface QuizFormContextProps {
  name: string;
  setName: (val: string) => void;
  defaultName: string;
  questions: QuestionDTO[];
  addQuestions: (val: QuestionDTO[]) => void;
  removeQuestion: (val: string) => void;
  questionAction: QuestionActionEnum | null;
  setQuestionAction: (val: QuestionActionEnum | null) => void;
  handleSubmit: () => void;
  isSubmitting: boolean;
  isQuizChanged: boolean;
  resetToDefault: () => void;
}

const QuizFormContext = createContext<QuizFormContextProps>({
  name: '',
  setName: () => {},
  defaultName: '',
  questions: [],
  addQuestions: () => {},
  removeQuestion: () => {},
  questionAction: null,
  setQuestionAction: () => {},
  handleSubmit: () => {},
  isSubmitting: false,
  isQuizChanged: false,
  resetToDefault: () => {},
});

type QuizFormProviderProps = {
  children?: ReactNode | ReactNode[];
} & (
  | { formType: QuizFormEnum.CREATE; quiz: CreateQuizDTO }
  | { formType: QuizFormEnum.EDIT; quiz: UpdateQuizDTO }
);

export const QuizFormProvider = ({
  children,
  quiz,
  formType,
}: QuizFormProviderProps) => {
  const [name, setName] = useState<string>(quiz.name);
  const [questions, setQuestions] = useState<QuestionDTO[]>(quiz.questions);
  const [questionAction, setQuestionAction] =
    useState<QuestionActionEnum | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isQuizChanged, setIsQuizChanged] = useState<boolean>(false);
  const router = useRouter();
  const { refetch } = useQuizContext();

  useEffect(() => {
    setIsQuizChanged(name !== quiz.name || questions !== quiz.questions);
  }, [name, questions, quiz.name, quiz.questions]);

  const addQuestions = (newQuestions: QuestionDTO[]) =>
    setQuestions((prev) => [...prev, ...newQuestions]);

  const removeQuestion = (internalId: string) =>
    setQuestions((prev) =>
      prev.filter((item) => item.internalId != internalId)
    );

  const handleSubmit = () => {
    // a switch would be nicer looking but wouldn't recognize types correctly
    if (formType === QuizFormEnum.CREATE) {
      const data: CreateQuizDTO = { name, questions };
      setIsSubmitting(true);
      quizClientService
        .createQuiz(data)
        .then(() => {
          refetch();
          router.push('/');
        })
        .finally(() => setIsSubmitting(false));
    } else if (formType === QuizFormEnum.EDIT) {
      const data: UpdateQuizDTO = { ...quiz, name, questions };
      setIsSubmitting(true);
      quizClientService
        .updateQuiz(quiz.id, data)
        .then(() => {
          refetch();
          router.push('/');
        })
        .finally(() => setIsSubmitting(false));
    }
  };

  const resetToDefault = () => {
    setName(quiz.name);
    setQuestions(quiz.questions);
    setIsSubmitting(false);
    setIsQuizChanged(false);
  };

  return (
    <QuizFormContext.Provider
      value={{
        name,
        setName,
        defaultName: quiz.name,
        questions,
        addQuestions,
        removeQuestion,
        questionAction,
        setQuestionAction,
        handleSubmit,
        isSubmitting,
        isQuizChanged,
        resetToDefault,
      }}
    >
      {children}
    </QuizFormContext.Provider>
  );
};

export const useQuizFormContext = () => useContext(QuizFormContext);
