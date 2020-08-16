import * as React from "react";
import { FunctionComponent } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    overflow: "hidden",
    marginTop: theme.spacing(7.5),
  },
  imageContainer: {
    width: 400,
    height: 480,
    position: "relative",
  },
  descriptionContainer: {
    width: 400,
    padding: "162px 80px 0 80px",
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
  },
  indexAlternative: {
    left: -451,
    top: 25,
  },
}));

export const SectionWithImage: FunctionComponent<{
  index: number;
  imagePath: string;
  alternative?: boolean;
}> = ({ index, imagePath, children, alternative }) => {
  const styles = useStyles();

  return (
    <Grid
      container
      direction={alternative ? "row-reverse" : "row"}
      justify="center"
      className={styles.sectionContainer}
    >
      <Grid className={styles.imageContainer}>
        <img src={imagePath} />
        <Grid
          className={`${styles.index} ${
            alternative ? styles.indexAlternative : ""
          }`}
        >
          0{index}
        </Grid>
      </Grid>

      <Grid className={styles.descriptionContainer}>{children}</Grid>
    </Grid>
  );
};

export const SectionContent: FunctionComponent<{
  header: string;
  subheader: string;
  description: string;
}> = ({ header, subheader, description }) => {
  return (
    <Grid container direction="column">
      <Typography>{header}</Typography>
      <Typography>{subheader}</Typography>
      <Typography>{description}</Typography>
    </Grid>
  );
};
