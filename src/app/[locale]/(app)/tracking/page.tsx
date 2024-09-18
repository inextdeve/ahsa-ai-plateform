import TransparentCard from "@/components/common/transparent-card";
import TrackingMapFilter from "@/components/tracking/map-filter";
import ServiceTrackingMap from "@/components/tracking/service-tracking-map";
import { CardBody, CardHeader } from "@nextui-org/react";

const Page = () => {
  return (
    <section>
      <div>
        <TransparentCard>
          <CardHeader>
            <TrackingMapFilter />
          </CardHeader>
          <CardBody className="h-[400px]">
            <div className="w-full h-full rounded overflow-hidden relative">
              <ServiceTrackingMap />
            </div>
          </CardBody>
        </TransparentCard>
      </div>
    </section>
  );
};
export default Page;
