import * as React from "react";
import { FunctionComponent } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Logo } from "../logo";
import { useTranslation } from "react-i18next";
import { Sitemap } from "../sitemap/sitemap";
import { sitemapItems } from "../../assets/sitemap";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(12),
    minHeight: 396,
    backgroundColor: "#e5f5f4",
    padding: "78px 40px 27px 40px",
    [theme.breakpoints.down("md")]: {
      padding: "78px 10px 27px 10px",
    },
  },
  line: {
    height: 1,
    marginTop: theme.spacing(7.5),
    marginBottom: theme.spacing(3.25),
    width: "100%",
    backgroundColor: "rgba(108, 108, 108, 0.5)",
  },
  footerContent: {
    padding: `0 ${theme.spacing(4.75)}px`,
    [theme.breakpoints.down("md")]: {
      padding: `0 ${theme.spacing(1)}px`,
    },
  },
}));

export const Footer: FunctionComponent = () => {
  const styles = useStyles();
  const { t } = useTranslation("footer");

  return (
    <footer className={styles.footer}>
      <Grid container direction="column" alignItems="center">
        <Grid container direction="row" className={styles.footerContent}>
          <Grid sm={3} xs={5} item>
            <Logo height={75} width={80} />
          </Grid>
          <Grid sm={9} xs={7} item>
            <Sitemap items={sitemapItems} />
          </Grid>
        </Grid>
        <div className={styles.line} />
        <Typography variant="h5">
          © 2019 Manual. All rights reserved.
        </Typography>
      </Grid>
    </footer>
  );
};
