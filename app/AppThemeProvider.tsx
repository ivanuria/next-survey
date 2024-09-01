import theme from "@/app/theme";
import { ThemeProvider } from "@mui/material/styles"

export default function AppThemeProvider({
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