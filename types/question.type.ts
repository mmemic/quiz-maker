//same for create and update so no prefix is used
export type QuestionDTO = {
  id?: number; //this id is available when reusing existing questions
  internalId?: string;
  question: string;
  answer: string;
};

export type QuestionResponse = { id: number; question: string; answer: string };
