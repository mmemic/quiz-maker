import { useQuizFormContext } from '@/contexts/quiz-form.context';
import { QuestionActionEnum } from '@/enums/question-action.enum';
import AddNewQuestion from '../add-new-question';
import QuestionList from '../question-list';
import { UseExistingQuestions } from '../use-existing-questions';

export function QuestionModule() {
  const { questionAction } = useQuizFormContext();

  switch (questionAction) {
    case QuestionActionEnum.ADD_NEW:
      return <AddNewQuestion />;
    case QuestionActionEnum.USE_EXISTING:
      return <UseExistingQuestions />;
    default:
      return <QuestionList />;
  }
}
