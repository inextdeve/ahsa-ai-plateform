"use client";
import useAuth from "@/components/hooks/useAuth";
import { Layout } from "@/components/layout/layout";
import { FullScreenProvider } from "@/providers/full-screen";
import { Progress } from "@nextui-org/react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [initialized] = useAuth();

  return (
    <>
      {!initialized ? (
        <Progress
          size="sm"
          isIndeterminate
          aria-label="Loading..."
          className="min-w-full"
        />
      ) : (
        <FullScreenProvider>
          <Layout>
            <div>{children}</div>
          </Layout>
        </FullScreenProvider>
      )}
    </>
  );
}
