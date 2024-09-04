import initTranslations from "@/i18n";
import {
  Card,
  CardBody,
  CardHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Locale } from "../../../../../i18nConfig";
import ZoneFilter from "@/components/road-monitoring/zone-filter";
import AccidentTrafficBar from "@/components/road-monitoring/accident-trafic-bar";
import TrafficJamLine from "@/components/road-monitoring/traffic-jam-line";

interface PageProps {
  params: {
    locale: Locale;
  };
}

const Page = async ({ params: { locale } }: PageProps) => {
  const { t } = await initTranslations(locale, ["road"]);

  return (
    <main className="grid gap-3">
      <div className="grid grid-cols-3 gap-3">
        <Card className="bg-primary hover:bg-primary/80">
          <CardHeader className="flex justify-center">
            <p className="text-xl">{t("vehiclesThisMinute")}</p>
          </CardHeader>
          <CardBody className="text-3xl text-center font-bold">15</CardBody>
        </Card>
        <Card className="bg-primary hover:bg-primary/80">
          <CardHeader className="flex justify-center">
            {" "}
            <p className="text-xl">{t("accidents")}</p>
          </CardHeader>
          <CardBody className="text-3xl text-center font-bold">5</CardBody>
        </Card>
        <Card className="bg-primary hover:bg-primary/80">
          <CardHeader className="flex justify-center">
            {" "}
            <p className="text-xl">{t("trafficViolations")}</p>
          </CardHeader>
          <CardBody className="text-3xl text-center font-bold">30</CardBody>
        </Card>
      </div>
      <Card className="bg-white/70 dark:bg-black/50 border-1 border-primary w-full">
        <CardHeader className="flex justify-between px-5">
          <span>{t("trafficAccidents")}</span>
          <ZoneFilter />
        </CardHeader>
        <CardBody>
          <AccidentTrafficBar />
        </CardBody>
      </Card>
      <Card className="bg-white/70 dark:bg-black/50 border-1 border-primary w-full">
        <CardHeader className="flex justify-between px-5">
          <span>{t("trafficJam")}</span>
          <ZoneFilter />
        </CardHeader>
        <CardBody>
          <TrafficJamLine />
        </CardBody>
      </Card>
    </main>
  );
};

export default Page;
