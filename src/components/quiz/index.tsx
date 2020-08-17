import * as React from "react";
import { FunctionComponent, ReactNode, useState } from "react";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { QuizQuestion } from "./question";
import { useQuizContext } from "./useQuiz";
import { Answers, QuizQuestionType } from "./types";

const useStyles = makeStyles((theme) => ({
  question: {
    margin: theme.spacing(4),
  },
  stepper: {
    maxWidth: 1200,
  },
  root: {
    padding: theme.spacing(4),
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  questionRoot: {
    flexGrow: 1,
  },
  quizRoot: {},
}));

export const Quiz: FunctionComponent<{
  hasStepper?: boolean;
  onClose?: () => void;
  renderSummary: ({
    questions,
    answers,
  }: {
    questions: QuizQuestionType[];
    answers: Answers;
  }) => ReactNode;
}> = ({ onClose, hasStepper, renderSummary }) => {
  const styles = useStyles();
  const {
    currentQuestion,
    quizLength,
    isSummaryStep,
    canGoNext,
    canGoBack,
    activeStep,
    goNext,
    goBack,
    questions,
    answers,
  } = useQuizContext();

  if (!currentQuestion && !isSummaryStep) {
    return null;
  }

  return (
    <Paper className={styles.root}>
      <Grid
        className={styles.questionRoot}
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
      >
        {!isSummaryStep && currentQuestion && (
          <QuizQuestion question={currentQuestion} />
        )}
        {isSummaryStep && renderSummary({ questions, answers })}
      </Grid>
      {hasStepper && (
        <MobileStepper
          variant="dots"
          steps={quizLength}
          position="static"
          activeStep={activeStep}
          className={styles.stepper}
          nextButton={
            <Button size="small" onClick={goNext} disabled={!canGoNext}>
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={goBack} disabled={!canGoBack}>
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      )}
    </Paper>
  );
};
