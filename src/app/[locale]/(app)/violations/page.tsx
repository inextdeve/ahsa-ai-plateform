import { Card, CardBody, CardHeader } from "@nextui-org/react";
import LineChart from "@/components/home/line-chart";
import ViolationsMap from "@/components/violations/map/violations-map";
import MapFilter from "@/components/violations/map/map-filter";
import initTranslations from "@/i18n";

const streams = [
  {
    title: "إكتشاف الأتربة",
    src: "https://videos.pexels.com/video-files/5597043/5597043-uhd_2560_1440_24fps.mp4",
  },
  {
    title: "تفريغ الحاويات",
    src: "https://videos.pexels.com/video-files/4064322/4064322-uhd_2560_1440_25fps.mp4",
  },
  {
    title: "اكتشاف الحفريات",
    src: "https://videos.pexels.com/video-files/5407529/5407529-uhd_2560_1440_24fps.mp4",
  },
  {
    title: "اكتشاف اعمدة الانارة",
    src: "https://videos.pexels.com/video-files/5108886/5108886-uhd_2560_1440_30fps.mp4",
  },
];

var currentDate = new Date();
var currentMonthDays = Array.from(
  { length: currentDate.getDate() },
  (_, i) =>
    (i + 1).toString().padStart(2, "0") +
    "/" +
    (currentDate.getMonth() + 1).toString().padStart(2, "0")
);

const Page = async ({}) => {
  const data = {
    labels: currentMonthDays,
    datasets: [
      {
        label: "Users Gained",
        data: currentMonthDays.map((day) => Math.floor(Math.random() * 9) + 2),
        backgroundColor: ["#0cc1c7"],
        borderColor: "#0cc1c7",
        borderWidth: 2,
      },
    ],
  };
  return (
    <div>
      <div className="map">
        <Card className="bg-black/50 border-1 border-primary">
          <CardHeader className="justify-between">
            {/* Filter */}
            <MapFilter />
          </CardHeader>
          <CardBody className="h-[400px]">
            <div className="w-full h-full rounded overflow-hidden relative">
              <ViolationsMap />
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="flex justify-around gap-2 my-4">
        {streams.map((stream) => (
          <Card className="bg-black/50 border-1 border-primary w-full">
            <CardHeader className="justify-center">{stream.title}</CardHeader>
            <CardBody>
              <video controls preload="auto" loop muted>
                <source src={stream.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </CardBody>
          </Card>
        ))}
      </div>
      <div>
        <Card className="bg-black/50 border-1 border-primary w-full">
          <CardBody>
            <LineChart chartData={data} />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Page;
