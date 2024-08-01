import "@/styles/globals.css";
import { Layout } from "@/components/layout/layout";
import TranslationsProvider from "@/providers/translation-provider";
import initTranslations from "@/i18n";
import { Locale, i18nNamespaces } from "../../../../i18nConfig";
import { Providers } from "@/providers";
import ParticleNetworkBG from "@/components/ParticleNetwork";
import { fontSans } from "@/config/fonts";
import clsx from "clsx";

interface LayoutProps {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: LayoutProps) {
  const { resources, i18n } = await initTranslations(locale, i18nNamespaces);
  return (
    <html lang={i18n.language} dir={i18n.dir()}>
      <body className={clsx("font-sans antialiased", fontSans.className)}>
        <Providers>
          <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
          >
            <Layout>{children}</Layout>
          </TranslationsProvider>
        </Providers>
        <div className="absolute inset-0 -z-50">
          <div id="particle-canvas"></div>
        </div>
        <ParticleNetworkBG />
      </body>
    </html>
  );
}
