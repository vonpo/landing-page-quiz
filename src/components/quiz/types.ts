export type QuizAnswerType = {
  value: string;
  content: string;
  isHTML: boolean;
};

export type QuizQuestionType = {
  question: string;
  type: string;
  options: QuizAnswerType[];
};

export type Answers =
  | {
      [key: string]: any;
    }
  | undefined;
