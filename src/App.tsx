import {
  ThemeProvider as ThemeMaterial,
  ThemeOptions,
  createTheme,
} from "@mui/material";
import { ToastContainer } from "react-toastify";
import { DefaultTheme, ThemeProvider } from "styled-components";

// import { ToastContainerCustom } from "./components/Toasts";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyles";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme as DefaultTheme}>
      <ThemeMaterial theme={createTheme(theme as ThemeOptions)}>
        <GlobalStyle />
        <Home />
        <ToastContainer autoClose={3000} />
      </ThemeMaterial>
    </ThemeProvider>
  );
}

export default App;
