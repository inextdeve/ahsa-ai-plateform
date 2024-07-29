import { Card, CardBody, CardHeader } from "@nextui-org/react";
import LineChart from "@/components/home/line-chart";
import ViolationsMap from "@/components/violations/map/MainMap";

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

const Page = () => {
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
        <Card className="overflow-hidden">
          <CardBody className="min-h-[400px]">
            <ViolationsMap />
          </CardBody>
        </Card>
      </div>
      {/* <div className="flex gap-2 p-2">
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
      </div> */}
    </div>
  );
};

export default Page;
