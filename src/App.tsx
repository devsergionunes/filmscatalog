import { ThemeProvider as ThemeMaterial, ThemeOptions } from "@mui/material";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/GlobalStyles";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <ThemeMaterial theme={theme as ThemeOptions}>
        <div>HELO WORD</div>
        <GlobalStyle />
      </ThemeMaterial>
    </ThemeProvider>
  );
}

export default App;
