import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPAI - AHSA",
  description: "Integration plateform AI for Ahsa",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
