import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles"

export default function SurveryThemeProvider({
    children
  }:
    Readonly<{
    children: React.ReactNode;
  }> ) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}