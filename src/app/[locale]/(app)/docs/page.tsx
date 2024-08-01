import initTranslations from "@/i18n";
import { Button, Card, CardBody, CardHeader, Code } from "@nextui-org/react";
import { Locale } from "../../../../../i18nConfig";
import { CopyIcon, DotIcon } from "lucide-react";
import Image from "next/image";
import { Source_Code_Pro as FontCode } from "next/font/google";

const fontCode = FontCode({
  subsets: ["latin"],
  variable: "--font-code",
});

interface Props {
  params: {
    locale: Locale;
  };
}

const H3 = ({ children }) => {
  return <h3 className="text-lg font-semibold my-2">{children}</h3>;
};

const LI = ({ children }) => {
  return (
    <li className="text-sm ml-2 flex items-center">
      <DotIcon className="w-8 h-8" /> {children}
    </li>
  );
};

const P = ({ children }) => {
  return <p className="py-1">{children}</p>;
};

const PythonCodeHeader = () => {
  return (
    <div className="flex justify-between items-center bg-black/50 rounded-md mb-2">
      <Button variant="light" size="sm" disabled isIconOnly>
        <Image
          alt="python-icon"
          src="/python-icon-512x509.png"
          width={512}
          height={509}
          className="w-4 h-4"
        />
      </Button>
      <Button variant="light" size="sm" isIconOnly>
        <CopyIcon className="w-4 h-4" />
      </Button>
    </div>
  );
};

const Page = async ({ params: { locale } }: Props) => {
  const { t } = await initTranslations(locale, ["docs"]);

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="p-2">
        <CardHeader>
          <h2 className="text-center w-full text-2xl">{t("title")}</h2>
        </CardHeader>
        <CardBody>
          <div>
            <H3>{t("apiAccess.title")}</H3>
            <P>{t("apiAccess.p")}</P>
            <ul>
              <LI>{t("apiAccess.list.1")}</LI>
              <LI>{t("apiAccess.list.2")}</LI>
              <LI>{t("apiAccess.list.3")}</LI>
            </ul>
          </div>
          <div>
            <H3>{t("apiExample.title")}</H3>
            <P>{t("apiExample.p")}</P>
            <div className="w-full flex justify-start">
              <Code color="primary" size="sm" className="p-3">
                <PythonCodeHeader />
                <pre dir="ltr" className={fontCode.className}>
                  {t("apiExample.code")}
                </pre>
              </Code>
            </div>
          </div>
          <div>
            <H3>{t("jsessionUsage.title")}</H3>
            <P>{t("jsessionUsage.p")}</P>
            <div className="w-full flex justify-start">
              <Code color="primary" size="sm" className="p-3">
                <PythonCodeHeader />
                <pre dir="ltr" className={fontCode.className}>
                  {t("jsessionUsage.code")}
                </pre>
              </Code>
            </div>
          </div>
          <div>
            <H3>{t("notes.title")}</H3>
            <ul>
              <LI>{t("notes.list.1")}</LI>
              <LI>{t("notes.list.2")}</LI>
            </ul>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Page;
