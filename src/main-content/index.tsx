import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { SectionContent, SectionWithImage } from "../components/section";
import * as React from "react";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Section1 from "../assets/section1/hair-photo-1-2-x.png";
import Section2 from "../assets/section2/sex-photo-1-2-x.png";

const useStyles = makeStyles((theme) => ({
  sectionHeader: {
    marginTop: theme.spacing(10),
  },
}));

const SECTIONS = [
  {
    name: "section1",
    image: Section1,
  },
  {
    name: "section2",
    image: Section2,
  },
];

/**
 * Main content displays:
 * - main content header
 * - info sections with images.
 * @constructor
 */
export const MainContent: FunctionComponent = () => {
  const { t } = useTranslation("section");
  const styles = useStyles();

  return (
    <Grid container alignItems="center" direction="column">
      <Typography className={styles.sectionHeader} variant="h4" align="center">
        {t("header")}
      </Typography>
      {SECTIONS.map(({ name, image }, index) => (
        <SectionWithImage
          key={name}
          index={index + 1}
          imagePath={image}
          alternativeRow={index % 2 === 1}
        >
          <SectionContent
            alternativeRow={index % 2 === 1}
            header={t(`${name}.header`)}
            subheader={t(`${name}.subheader`)}
            description={t(`${name}.description`)}
          />
        </SectionWithImage>
      ))}
    </Grid>
  );
};
