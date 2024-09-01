'use client';
import { createTheme } from "@mui/material/styles";
import { Nanum_Gothic, Love_Ya_Like_A_Sister } from "next/font/google";

const nanumGothic = Nanum_Gothic({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  display: "swap"
 });

const loveYaLikeASister = Love_Ya_Like_A_Sister({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap"
});

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: nanumGothic.style.fontFamily,
    h1: {
      fontFamily: loveYaLikeASister.style.fontFamily
    },
    h2: {
      fontFamily: loveYaLikeASister.style.fontFamily
    },
    h3: {
      fontFamily: loveYaLikeASister.style.fontFamily
    }
  },
  palette: {
    primary: {
      main: 'hsl(280, 45%, 50%)'
    }
  }
});

export default theme;