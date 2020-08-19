import { createMuiTheme } from "@material-ui/core/styles";
import "./assets/style.less";

/**
 * Spec https://app.zeplin.io/project/5c584668b74a4430819e5056/styleguide/textstyles
 */

const primaryColor = "#34d1d1";
const secondaryColor = "rgba(108, 108, 108, 0.5)";

declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

export const lightTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 800, // redefine small breakpoints as 800px is size when we need to change from row to column <SectionWithImage>
      md: 960,
      lg: 1080,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  overrides: {
    MuiToolbar: {
      root: {
        color: "#fff",
      },
    },
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
        fontFamily: "'Montserrat', sans-serif",
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
      subtitle1: {
        fontSize: "22px",
        lineHeight: "32px",
        letterSpacing: 0,
        fontFamily: "Helvetica",
      },
      subtitle2: {
        fontSize: "22px",
        lineHeight: "32px",
        letterSpacing: 0,
        fontFamily: "Montserrat",
        color: "#fff",
      },
      body1: {
        fontSize: "14px",
        lineHeight: "36px",
        letterSpacing: 0,
        fontFamily: "Helvetica",
      },
      body2: {
        fontSize: "12px",
        lineHeight: "22px",
        letterSpacing: 0,
        fontFamily: "Open Sans",
      },
    },
    MuiButton: {
      containedPrimary: {
        height: 48,
        fontSize: 12,
        borderRadius: 49.5,
        fontFamily: "Montserrat",
        letterSpacing: "2.4px",
        backgroundColor: primaryColor,
        padding: "0 37px",
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
