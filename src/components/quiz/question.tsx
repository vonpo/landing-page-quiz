import { FunctionComponent } from "react";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { QuizQuestionType } from "./types";
import Grid from "@material-ui/core/Grid";
import { QuizAnswer } from "./answer";

/**
 * Display quz question.
 *
 * @param question
 * @constructor
 */
export const QuizQuestion: FunctionComponent<{
  question: QuizQuestionType;
}> = ({ question }) => {
  if (question.type !== "ChoiceType") {
    return <div>question not supported</div>;
  }

  return (
    <>
      <Typography variant="h4" align="center">
        {question.question}
      </Typography>
      <Grid container direction="row" justify="center">
        {question.options.map((questionOption, index) => (
          <QuizAnswer answer={questionOption} key={"question" + index} />
        ))}
      </Grid>
    </>
  );
};
