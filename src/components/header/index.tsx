import * as React from "react";
import { FunctionComponent, useEffect, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Image from "./assets/hair-cat-header.png";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Logo } from "../logo";
import Dialog from "@material-ui/core/Dialog";
import { useTranslation } from "react-i18next";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Quiz } from "../quiz";
import { QuizQuestionType } from "../quiz/types";
import { loadQuestions } from "../../assets/quiz";
import { QuizContext, useQuiz } from "../quiz/useQuiz";
import { Summary } from "./summary";

const useStyles = makeStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing(10),
    minHeight: 680,
    background: `url(${Image}) bottom right no-repeat #b8e6e3`,
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: 1080,
    },
  },
  responsiveHeader: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 62,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 42,
    },
  },
  logoContainer: {
    height: 172,
    padding: "40px 0 0 10px",
    [theme.breakpoints.down("sm")]: {
      height: 120,
    },
  },
  content: {
    maxWidth: 620,
  },
  appBar: {
    position: "relative",
  },
  description: {
    maxWidth: 400,
    margin: "22px 0 38px 0",
  },
}));

/**
 * Renders page header.
 * Has quiz button and Quiz component.
 *
 * @constructor
 */
export const Header: FunctionComponent = () => {
  const styles = useStyles();
  const [isQuizOpen, setQuizOpen] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuizQuestionType[]>([]);
  const { t } = useTranslation("header");

  const quizContext = useQuiz({
    questions,
    hasSummaryStep: true,
  });

  // Simulate load from API.
  useEffect(() => {
    (async () => {
      setQuestions(await loadQuestions());
    })();
  }, []);

  return (
    <header className={styles.header}>
      <Grid container direction="column" className={styles.content}>
        <Grid className={styles.logoContainer}>
          <Logo />
        </Grid>
        <Grid>
          <Typography variant="h2" className={styles.responsiveHeader}>
            {t("mainText1")}
          </Typography>
          <Typography variant="h2" className={styles.responsiveHeader}>
            {t("mainText2")}
          </Typography>
        </Grid>
        <Grid className={styles.description}>
          <Typography variant="h3">{t("description")}</Typography>
        </Grid>
      </Grid>
      <Grid>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setQuizOpen(true)}
        >
          {t("quizButton")}
        </Button>
      </Grid>
      <QuizContext.Provider value={quizContext}>
        <Dialog
          open={isQuizOpen}
          fullScreen
          onExited={() => quizContext.reset()}
        >
          <AppBar className={styles.appBar}>
            <Toolbar>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Typography variant="subtitle2">{t("takeTheQuiz")}</Typography>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={() => setQuizOpen(false)}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Toolbar>
          </AppBar>
          <Quiz
            renderSummary={({ questions, answers }) => (
              <Summary
                questions={questions}
                answers={answers}
                onConfirm={() => setQuizOpen(false)}
              />
            )}
          />
        </Dialog>
      </QuizContext.Provider>
    </header>
  );
};
