import { createContext, useContext, useEffect, useState } from "react";
import { Answers, QuizQuestionType } from "./types";

/**
 * Use quiz hook provides method to get state of quiz and go back/forward.
 *
 * @param hasSummaryStep
 * @param questions
 */
export const useQuiz = ({
  hasSummaryStep,
  questions,
}: {
  hasSummaryStep: boolean;
  questions: QuizQuestionType[];
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestionType[]>(
    questions
  );
  const [answers, setAnswers] = useState<{ [key: string]: any }>();
  const [state, setState] = useState<{
    currentQuestion: QuizQuestionType | null;
    quizLength: number;
    isSummaryStep: boolean;
    canGoNext: boolean;
    canGoBack: boolean;
    activeStep: number;
  }>({
    currentQuestion: null,
    activeStep: 0,
    canGoNext: true,
    canGoBack: false,
    isSummaryStep: false,
    quizLength: 0,
  });

  const reset = () => {
    setActiveStep(0);
    setAnswers({});
  };
  const goNext = () => state.canGoNext && setActiveStep(activeStep + 1);
  const goBack = () => state.canGoBack && setActiveStep(activeStep - 1);
  const setAnswer = (value: string | boolean) => {
    setAnswers({
      ...answers,
      [activeStep]: value,
    });
  };

  useEffect(() => {
    setQuizQuestions(questions);
  }, [questions]);

  useEffect(() => {
    if (quizQuestions.length === 0) {
      return;
    }

    const quizLength = quizQuestions.length + (hasSummaryStep ? 1 : 0);

    setState({
      activeStep,
      canGoNext: activeStep < quizLength - 1,
      canGoBack: activeStep > 0,
      isSummaryStep: hasSummaryStep && activeStep === quizLength - 1,
      currentQuestion: quizQuestions[activeStep],
      quizLength,
    });
  }, [activeStep, quizQuestions, hasSummaryStep]);
  return {
    ...state,
    setAnswer,
    goNext,
    goBack,
    reset,
    questions: quizQuestions,
    answers,
  };
};

export const QuizContext = createContext<{
  questions: QuizQuestionType[];
  answers: Answers;
  currentQuestion: QuizQuestionType | null;
  quizLength: number;
  isSummaryStep: boolean;
  canGoNext: boolean;
  canGoBack: boolean;
  activeStep: number;
  goNext: () => any;
  goBack: () => any;
  reset: () => any;
  setAnswer: (value: string) => any;
}>({
  answers: undefined,
  questions: [],
  reset: () => {
    return;
  },
  goNext: () => {
    return;
  },
  goBack: () => {
    return;
  },
  setAnswer: (_: string) => {
    return;
  },
  activeStep: 0,
  canGoBack: false,
  canGoNext: false,
  isSummaryStep: false,
  quizLength: 0,
  currentQuestion: null,
});

export const useQuizContext = () => useContext(QuizContext);
