"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Provider as ReduxProvider } from "react-redux";
import store from "@/store";

Chart.register(CategoryScale);

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        {...themeProps}
      >
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
