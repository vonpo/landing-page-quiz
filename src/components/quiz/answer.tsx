import { FunctionComponent } from "react";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { QuizAnswerType } from "./types";
import Button from "@material-ui/core/Button";
import { useQuizContext } from "./useQuiz";

/**
 * Quiz answer component.
 *
 * Displays answer.
 * After answer is clicked in uses quiz context and goes to next question.
 *
 * @param answer
 * @constructor
 */
export const QuizAnswer: FunctionComponent<{ answer: QuizAnswerType }> = ({
  answer,
}) => {
  const { goNext, setAnswer } = useQuizContext();
  const handleClick = () => {
    setAnswer(answer.value);
    goNext();
  };
  return (
    <Button onClick={handleClick}>
      {answer.isHTML && (
        <div dangerouslySetInnerHTML={{ __html: answer.content }} />
      )}
      {!answer.isHTML && (
        <Typography variant="h4" align="center">
          {answer.content}
        </Typography>
      )}
    </Button>
  );
};
