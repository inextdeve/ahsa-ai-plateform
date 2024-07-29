"use client";
import "@/styles/globals.css";
// import type { Metadata } from "next";
import { Providers } from "@/providers";
import { fontSans } from "@/config/fonts";
import clsx from "clsx";
import ParticleNetworkBG from "@/components/ParticleNetwork";
import TranslationsProvider from "@/providers/translation-provider";
import initTranslations from "@/i18n";
import { Locale, Namespaces } from "../../i18nConfig";
import { useEffectAsync } from "@/components/hooks/reactHelper";
import { useState } from "react";
import preloadImages from "@/map/core/preloadImages";
preloadImages();
const i18nNamespaces: Namespaces = ["common", "sidebar"];

// export const metadata: Metadata = {
//   title: "IPAI - AHSA",
//   description: "Integration plateform AI for Ahsa",
// };

export default function RootLayout({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  const [resources, setResources] = useState(null);

  // useEffectAsync(async () => {
  //   const { resources } = await initTranslations(locale, i18nNamespaces);

  //   setResources(resources);
  // }, []);
  return (
    <html>
      <body className={clsx("font-sans antialiased", fontSans.className)}>
        <Providers>
          {/* <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
          > */}
          {children}
          {/* </TranslationsProvider> */}
        </Providers>
        <div className="absolute inset-0 -z-50">
          <div id="particle-canvas"></div>
        </div>
        <ParticleNetworkBG />
      </body>
    </html>
  );
}
