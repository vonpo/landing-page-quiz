import * as React from "react";
import * as ReactDOM from "react-dom";
import { FunctionComponent } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { ThemeProvider } from "@material-ui/core/styles";
import { lightTheme } from "./theme";
import { MainContent } from "./main-content";

require("./i18n");

const App: FunctionComponent = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Header />
        <MainContent />
        <Footer />
      </ThemeProvider>
    </>
  );
};

const element = document.createElement("div");

document.body.appendChild(element);

ReactDOM.render(<App />, element);
