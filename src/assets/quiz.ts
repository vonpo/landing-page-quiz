import { QuizQuestionType } from "../components/quiz/types";

export const QUIZ_QUESTIONS = {
  questions: [
    {
      question: "Which image best matches your hair loss?",
      type: "ChoiceType",
      options: [
        {
          '<img alt="Temples"src="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss%402x.png 2x" />':
            "Temples",
        },
        {
          '<img alt="Temples & Crown" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss%402x.png 2x"/>':
            "Temples & Crown",
        },
        {
          '<img alt="Patchy" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss%402x.png 2x"/>':
            "Patchy",
        },
        {
          '<img alt="Moderate" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss%402x.png 2x" />':
            "Moderate",
        },
        {
          '<img alt="Extensive" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss%402x.png 2x"/>':
            "Extensive",
        },
        {
          '<img alt="Complete" src="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png" srcset="https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss%402x.png 2x" />':
            "Complete",
        },
      ],
    },
    {
      question:
        "Have you ever been diagnosed with prostate cancer, or are you currently undergoing PSA/Prostate monitoring?",
      type: "ChoiceType",
      options: [
        {
          Yes: true,
        },
        {
          No: false,
        },
      ],
    },
    {
      question:
        "Have you ever been diagnosed with breast cancer or noticed any changes in your breast tissue such as lumps, pain, nipple discharge or swelling?",
      type: "ChoiceType",
      options: [
        {
          Yes: true,
        },
        {
          No: false,
        },
      ],
    },
  ],
};

/**
 * Normalize question option.
 * This structure is bit nasty as we hold img as object key.
 * This could be vulnerable to XSS.
 *
 * @param option
 */
const normalizeOption = (option: { [key: string]: any }) => {
  const entries = Object.entries(option);

  if (entries.length !== 1) {
    throw new Error(`Option ${option} should have only one key-value entry`);
  }

  const [entry] = entries;
  return {
    content: entry[0],
    value: entry[1],
    isHTML: /^<img/.test(entry[0]),
  };
};

/**
 * Simulate promise when loading question.
 * This function also normalized quiz data so it's easier to map it to components.
 */
export const loadQuestions: () => Promise<QuizQuestionType[]> = async () => {
  const quizQuestionsNormalized: QuizQuestionType[] = QUIZ_QUESTIONS.questions.map(
    (quizQuestion) => {
      return {
        question: quizQuestion.question,
        type: quizQuestion.type,
        // @ts-ignore
        options: quizQuestion.options.map(normalizeOption),
      };
    }
  );
  return Promise.resolve(quizQuestionsNormalized);
};
