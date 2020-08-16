import { createMuiTheme } from "@material-ui/core/styles";
import "./assets/style.less";

const primaryColor = "#34d1d1";
const secondaryColor = "rgba(108, 108, 108, 0.5)";
/**
 * Spec https://app.zeplin.io/project/5c584668b74a4430819e5056/styleguide/textstyles
 */
export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        color: "#0c3c3d",
        lineHeight: "22px",
        fontSize: "20px",
        fontFamily: "OpenSans",
      },
      h2: {
        lineHeight: "98px",
        fontSize: "82px",
        fontFamily: "Montserrat",
        letterSpacing: 0,
      },
      h3: {
        lineHeight: "26px",
        fontSize: "18px",
        letterSpacing: 0,
        fontFamily: "Helvetica",
      },
      h4: {
        lineHeight: "48px",
        fontSize: "36px",
        letterSpacing: 0,
        fontFamily: "Helvetica",
      },
      h5: {
        fontSize: "12px",
        lineHeight: "22px",
        letterSpacing: 0,
        color: "rgba(108, 108, 108, 0.5)",
      },
      h6: {
        textTransform: "uppercase",
        fontFamily: "Montserrat",
        fontSize: "12px",
        letterSpacing: "2.4px",
        color: primaryColor,
      },
      body1: {
        fontSize: "14px",
        lineHeight: "36px",
        letterSpacing: 0,
        fontFamily: "Helvetica",
      },
    },
    MuiButton: {
      containedPrimary: {
        height: 48,
        borderRadius: 49.5,
        fontFamily: "'Montserrat'",
        letterSpacing: "2.4px",
        backgroundColor: primaryColor,
        padding: "17px 37px 16px 38px",
        boxShadow: "0 10px 30px -20px rgba(0, 0, 0, 0.5)",
        color: "#fff",
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: "rgba(255, 255, 255, 0.89)",
      },
    },
  },
});
