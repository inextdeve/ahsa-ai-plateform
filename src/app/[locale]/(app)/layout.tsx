"use client";
import "@/styles/globals.css";
import { Layout } from "@/components/layout/layout";
import preloadImages from "@/map/core/preloadImages";
interface LayoutProps {
  children: React.ReactNode;
}
preloadImages();
export default function RootLayout({ children }: LayoutProps) {
  return <Layout>{children}</Layout>;
}
