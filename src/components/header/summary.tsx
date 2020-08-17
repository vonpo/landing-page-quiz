import * as React from "react";
import { FunctionComponent } from "react";
import { Answers, QuizQuestionType } from "../quiz/types";
import { useTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const isBoolean = (value: any) => typeof value === "boolean";

export const Summary: FunctionComponent<{
  questions: QuizQuestionType[];
  answers: Answers;
}> = ({ answers }) => {
  const { t } = useTranslation("summary");
  const hasAllNegativeAnswers =
    answers &&
    Object.values(answers)
      .filter(isBoolean)
      .every((answer) => !answer);

  return (
    <Grid>
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
    </Grid>
  );
};
