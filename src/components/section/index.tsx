import * as React from "react";
import { FunctionComponent } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    overflow: "hidden",
    marginTop: theme.spacing(7.5),
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  imageContainer: {
    maxWidth: 400,
    height: 480,
    position: "relative",
  },
  descriptionContainer: {
    maxWidth: 400,
    padding: "162px 0 0 80px",
    [theme.breakpoints.down("xs")]: {
      padding: "40px 0 40px 40px",
    },
  },
  descriptionContainerAlternative: {
    padding: "162px 80px 0 0",
    textAlign: "right",
    [theme.breakpoints.down("xs")]: {
      padding: "40px 80px 40px 0",
    },
  },
  index: {
    color: "#eeeeee",
    zIndex: -1,
    position: "absolute",
    fontSize: "427px",
    lineHeight: "427px",
    fontFamily: "Montserrat",
    top: 55,
    left: 267,
    [theme.breakpoints.down("xs")]: {
      top: -360,
      left: -100,
    },
  },
  indexAlternative: {
    left: -451,
    top: 25,
    [theme.breakpoints.down("xs")]: {
      top: -332,
      left: -15,
    },
  },
}));

export const SectionWithImage: FunctionComponent<{
  index: number;
  imagePath: string;
  alternativeRow: boolean;
}> = ({ index, imagePath, children, alternativeRow }) => {
  const styles = useStyles();

  return (
    <Grid
      container
      direction={alternativeRow ? "row-reverse" : "row"}
      justify="center"
      alignItems="center"
      className={styles.sectionContainer}
    >
      <Grid className={styles.imageContainer} item xs={12} sm={6}>
        <img src={imagePath} />
        <Grid
          className={`${styles.index} ${
            alternativeRow && styles.indexAlternative
          }`}
        >
          0{index}
        </Grid>
      </Grid>

      <Grid
        item
        sm={6}
        xs={12}
        className={`${styles.descriptionContainer} ${
          alternativeRow && styles.descriptionContainerAlternative
        }`}
      >
        {children}
      </Grid>
    </Grid>
  );
};

const useContentStyles = makeStyles((theme) => ({
  subheader: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1.375),
  },
  description: {
    maxWidth: 300,
  },
}));

export const SectionContent: FunctionComponent<{
  header: string;
  subheader: string;
  description: string;
  alternativeRow: boolean;
}> = ({ header, subheader, description, alternativeRow }) => {
  const style = useContentStyles();

  return (
    <Grid container direction="column">
      <Typography variant="h6">{header}</Typography>
      <Typography variant="subtitle1" className={style.subheader}>
        {subheader}
      </Typography>
      <Typography
        variant="body2"
        className={alternativeRow ? "" : style.description}
      >
        {description}
      </Typography>
    </Grid>
  );
};
