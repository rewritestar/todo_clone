import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import * as S from "./index.styles";
import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const ThemeModeProvider = ({ children }) => {
  const { darkMode } = useDarkMode();
  const themeMode = darkMode ? theme.DarkColors : theme.LightColors;
  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
};

root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <ThemeModeProvider>
        <S.Container>
          <App />
        </S.Container>
      </ThemeModeProvider>
    </DarkModeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
