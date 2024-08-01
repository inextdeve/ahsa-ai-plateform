import LanguageChanger from "@/components/settings/lang-changer";
import RealTimeUpdate from "@/components/settings/real-time-update";
import { ThemeSwitcher } from "@/components/settings/theme-switcher";
import { Card, CardBody } from "@nextui-org/react";

const Page = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <Card>
        <CardBody>
          <LanguageChanger />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <ThemeSwitcher />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <RealTimeUpdate />
        </CardBody>
      </Card>
    </div>
  );
};

export default Page;
