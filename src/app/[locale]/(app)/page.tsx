import initTranslations from "@/i18n";
import { Locale } from "../../../../i18nConfig";

import LineChart from "@/components/home/line-chart";

// import { lineData as Data } from "@/utils/data";
import { Card, CardBody } from "@nextui-org/react";
import PieChart from "@/components/home/pie-chart";
import PolarChart from "@/components/home/polar-chart";
import { useAppSelector } from "@/components/hooks/rtk";

interface PageProps {
  params: {
    locale: Locale;
  };
}

var currentDate = new Date();
var currentMonthDays = Array.from(
  { length: currentDate.getDate() },
  (_, i) =>
    (i + 1).toString().padStart(2, "0") +
    "/" +
    (currentDate.getMonth() + 1).toString().padStart(2, "0")
);

export default async function Home({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, ["common"]);

  // const kpis = useAppSelector((state) => state.reports.kpis);

  const data = {
    labels: [
      "27/08",
      "28/08",
      "29/08",
      "30/08",
      "31/08",
      "01/09",
      "02/09",
      "03/09",
      "04/09",
    ],
    datasets: [
      {
        label: "Notes",
        data: [2, 10, 4, 9, 3, 1, 12, 9, 1],
        backgroundColor: ["#0cc1c7"],
        borderColor: "#0cc1c7",
        borderWidth: 2,
      },
    ],
  };

  return (
    <main className="grid gap-2">
      <Card className="bg-white/70 dark:bg-black/50 border-1 border-primary w-full">
        <CardBody>
          <LineChart chartData={data} />
        </CardBody>
      </Card>
      <div className="flex gap-2">
        <Card className="bg-white/70 dark:bg-black/50 border-1 border-primary w-full">
          <CardBody>
            <PieChart
              chartData={{
                labels: ["الأتربة", "المبعثرات", "الحفريات", "اعمدة الانارة"],
                values: [55, 49, 44, 24],
              }}
            />
          </CardBody>
        </Card>
        <Card className="bg-white/70 dark:bg-black/50 border-1 border-primary w-full">
          <CardBody>
            <PolarChart
              chartData={{
                labels: [
                  "المنطقة١ ",
                  " المنطقة٢ ",
                  " المنطقة٣ ",
                  " المنطقة٤ ",
                ].reverse(),
                values: [11, 16, 7, 3],
              }}
            />
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
