"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const ZoneFilter = () => {
  const { t } = useTranslation("common");
  return (
    <Select
      label={t("zone")}
      className="max-w-[120px]"
      size="sm"
      defaultSelectedKeys={["All"]}
    >
      {[{ name: "Zone 1" }, { name: "Zone 2" }, { name: "All" }].map((zone) => (
        <SelectItem key={zone.name}>{zone.name}</SelectItem>
      ))}
    </Select>
  );
};

export default ZoneFilter;
