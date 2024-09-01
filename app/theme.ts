'use client';
import { createTheme } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: pink[500]
    }
  }
});

export default theme;