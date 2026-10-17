import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { blueTheme, materialDarkTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("portfolio-theme", themeMode);
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [themeMode]);

  const currentTheme = themeMode === "dark" ? materialDarkTheme : blueTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={currentTheme} themeMode={themeMode} onToggle={toggleTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
