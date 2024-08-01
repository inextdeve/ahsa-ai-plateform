import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Cairo as FontCairo,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontCairo = FontCairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});
