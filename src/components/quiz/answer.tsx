import { FunctionComponent } from "react";
import * as React from "react";
import { QuizAnswerType } from "./types";
import Button from "@material-ui/core/Button";
import { useQuizContext } from "./useQuiz";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
}));

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
  const styles = useStyles();
  const { goNext, setAnswer } = useQuizContext();
  const handleClick = () => {
    setAnswer(answer.value);
    goNext();
  };
  return (
    <Button
      className={styles.root}
      color="primary"
      variant={answer.isHTML ? "outlined" : "contained"}
      onClick={handleClick}
    >
      {answer.isHTML && (
        <div dangerouslySetInnerHTML={{ __html: answer.content }} />
      )}
      {!answer.isHTML && answer.content}
    </Button>
  );
};
