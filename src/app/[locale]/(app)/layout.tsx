import "@/styles/globals.css";
import { Layout } from "@/components/layout/layout";
interface LayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: LayoutProps) {
  return <Layout>{children}</Layout>;
}
