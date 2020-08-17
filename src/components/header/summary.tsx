import * as React from "react";
import { FunctionComponent } from "react";
import { Answers, QuizQuestionType } from "../quiz/types";
import { useTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const isBoolean = (value: any) => typeof value === "boolean";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(5),
  },
}));
export const Summary: FunctionComponent<{
  questions: QuizQuestionType[];
  answers: Answers;
  onConfirm: () => any;
}> = ({ answers, onConfirm }) => {
  const styles = useStyles();
  const { t } = useTranslation("summary");
  const hasAllNegativeAnswers =
    answers &&
    Object.values(answers)
      .filter(isBoolean)
      .every((answer) => !answer);

  return (
    <Grid direction="column" container alignItems="center">
      {hasAllNegativeAnswers && (
        <Typography variant="h3" align="center">
          {t("allFalse")}
        </Typography>
      )}
      {!hasAllNegativeAnswers && (
        <Typography variant="h3" align="center">
          {t("anyTrue")}
        </Typography>
      )}
      <Button
        color="primary"
        variant="contained"
        className={styles.button}
        onClick={onConfirm}
      >
        Ok
      </Button>
    </Grid>
  );
};
