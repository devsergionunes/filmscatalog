import {
  ThemeProvider as ThemeMaterial,
  ThemeOptions,
  createTheme,
} from "@mui/material";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyles";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <ThemeMaterial theme={createTheme(theme as ThemeOptions)}>
        <GlobalStyle />
        <Home />
      </ThemeMaterial>
    </ThemeProvider>
  );
}

export default App;
