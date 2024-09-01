'use client';
import { createTheme } from "@mui/material/styles";
import { Nanum_Gothic, Nanum_Pen_Script } from "next/font/google";

const nanumGothic = Nanum_Gothic({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  display: "swap"
 });

const nanumPenScript = Nanum_Pen_Script({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap"
});

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: nanumGothic.style.fontFamily,
    h1: {
      typography: {
        fontfamily: nanumPenScript.style.fontFamily
      }
    },
    h2: {
      typography: {
      }
    },
    h3: {
      typography: {
        fontfamily: nanumPenScript.style.fontFamily
      }
    }
  },
});

export default theme;