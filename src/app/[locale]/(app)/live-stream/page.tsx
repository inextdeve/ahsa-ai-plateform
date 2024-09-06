import TransparentCard from "@/components/common/transparent-card";
import { Locale } from "../../../../../i18nConfig";
import { CardBody, CardHeader } from "@nextui-org/react";
import initTranslations from "@/i18n";
import LiveViolations from "@/components/live-stream/live-violations";
import { Dot } from "lucide-react";

interface PageProps {
  params: {
    locale: Locale;
  };
}

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

const routeStreams = [
  {
    title: "الطريق الرئيسية الأولى",
    src: "https://videos.pexels.com/video-files/3892818/3892818-hd_1920_1080_30fps.mp4",
  },
  {
    title: "الطريق الرئيسية الثانية",
    src: "https://videos.pexels.com/video-files/15176709/15176709-hd_1920_1080_60fps.mp4",
  },
  {
    title: "طريق الولالية",
    src: "https://videos.pexels.com/video-files/3826035/3826035-hd_1920_1080_30fps.mp4",
  },
  {
    title: "طريق الرابعة",
    src: "https://videos.pexels.com/video-files/4615524/4615524-hd_1920_1080_30fps.mp4",
  },
];

const Page = async ({ params: { locale } }: PageProps) => {
  const { t } = await initTranslations(locale, ["live"]);

  return (
    <section className="grid gap-2 grid-cols-12">
      <h1 className="col-span-12 text-3xl text-bold grid justify-center mb-3">
        <span className="text-center">{t("liveStream")}</span>
        <span className="text-center text-foreground-400 text-sm">
          {t("headerDesc")}
        </span>
      </h1>

      <LiveViolations className="col-span-3 h-[70vh]" />

      <div className="col-span-9">
        <div className="flex justify-around gap-2 my-4 mt-0">
          {streams.map((stream) => (
            <TransparentCard className="bg-black/50 border-1 border-primary w-full">
              <CardHeader className="justify-center">{stream.title}</CardHeader>
              <CardBody>
                <video controls preload="auto" loop muted>
                  <source src={stream.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardBody>
            </TransparentCard>
          ))}
        </div>
        <div className="flex justify-around gap-2 my-4">
          {routeStreams.map((stream) => (
            <TransparentCard className="bg-black/50 border-1 border-primary w-full">
              <CardHeader className="justify-center">{stream.title}</CardHeader>
              <CardBody>
                <video controls preload="auto" loop muted>
                  <source src={stream.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardBody>
            </TransparentCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
