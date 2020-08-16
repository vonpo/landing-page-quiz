import * as React from "react";
import { FunctionComponent } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";
import { FacebookLogo, LinkedInLogo, TwitterLogo } from "./assets/logos";

const useStyles = makeStyles((theme) => ({
  sitemapGroup: {
    width: 200,
  },
  groupName: {
    marginBottom: theme.spacing(1.3),
  },
  sitemapLink: {
    marginRight: theme.spacing(3.75),
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

type SitemapItem = {
  name: string;
  type: string;
  link: string;
  image?: string;
};
type SitemapGroup = {
  name: string;
  row?: boolean;
  items: SitemapItem[];
};

const SitemapImage: FunctionComponent<{ image?: string }> = ({ image }) => {
  switch (image) {
    case "facebook":
      return <FacebookLogo />;
    case "linkedIn":
      return <LinkedInLogo />;
    case "twitter":
      return <TwitterLogo />;
  }

  throw new Error("image not supported");
};
export const Sitemap: FunctionComponent<{ items: SitemapGroup[] }> = ({
  items,
}) => {
  const styles = useStyles();
  const { t } = useTranslation("sitemap");

  return (
    <Grid direction="row" container justify="flex-end">
      {items.map((sitemapGroupItem) => (
        <Grid
          container
          direction="column"
          className={styles.sitemapGroup}
          key={sitemapGroupItem.name}
        >
          <Typography variant="h6" className={styles.groupName}>
            {t(sitemapGroupItem.name)}
          </Typography>
          <Grid container direction={sitemapGroupItem.row ? "row" : "column"}>
            {sitemapGroupItem.items.map((sitemapItem) => (
              <a
                href={sitemapItem.link}
                className={styles.sitemapLink}
                key={sitemapItem.name}
                target="_blank"
              >
                {sitemapItem.type === "text" && (
                  <Typography variant="body1">{t(sitemapItem.name)}</Typography>
                )}
                {sitemapItem.type === "image" && (
                  <SitemapImage image={sitemapItem.image} />
                )}
              </a>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};
