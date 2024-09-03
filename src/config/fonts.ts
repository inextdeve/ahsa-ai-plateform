import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Roboto as FontRoboto,
  Almarai,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontAlmarai = Almarai({
  subsets: ["arabic"],
  variable: "--font-almarai",
  weight: "400",
});

export const fontRoboto = FontRoboto({
  subsets: ["latin"],
  weight: "400",
});

//Cairo Good
//Almarai Good
