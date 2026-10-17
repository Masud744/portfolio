import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { blueTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const currentTheme = blueTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={currentTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
