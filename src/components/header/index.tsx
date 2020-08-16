import * as React from "react";
import { FunctionComponent, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Image from "./assets/hair-cat-header.png";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Logo } from "../logo";
import Dialog from "@material-ui/core/Dialog";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing(10),
    minHeight: 680,
    background: `url(${Image}) bottom right no-repeat #b8e6e3`,
    [theme.breakpoints.down("md")]: {
      minHeight: 1080,
      padding: "0 10px",
    },
  },
  responsiveHeader: {
    [theme.breakpoints.down("md")]: {
      fontSize: 42,
    },
  },
  logoContainer: {
    height: 172,
    padding: "40px 0 0 10px",
  },
  content: {
    maxWidth: 620,
  },
  description: {
    maxWidth: 400,
    margin: "22px 0 38px 0",
  },
}));

export const Header: FunctionComponent = () => {
  const styles = useStyles();
  const [isQuizOpen, setQuizOpen] = useState<boolean>(false);
  const { t } = useTranslation("header");

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
      <Dialog open={isQuizOpen} fullScreen>
        quiz
      </Dialog>
    </header>
  );
};
