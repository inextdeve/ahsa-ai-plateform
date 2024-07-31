"use client";
import { Radio, RadioGroup, Select, SelectItem } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const violationsType = [
  { name: "all", id: 0 },
  { name: "waste", id: 1 },
  { name: "dust", id: 2 },
  { name: "scattered", id: 3 },
  { name: "poles", id: 4 },
];

const MapFilter = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <RadioGroup size="sm" classNames={{ wrapper: "flex-row text-primary" }}>
        <Radio value="processed">{t("processed")}</Radio>
        <Radio value="none-processed">{t("none-processed")}</Radio>
        <Radio value="all">{t("all")}</Radio>
      </RadioGroup>
      <Select label="violations" className="max-w-xs" size="sm">
        {violationsType.map((violationType) => (
          <SelectItem key={violationType.id}>{violationType.name}</SelectItem>
        ))}
      </Select>
    </>
  );
};

export default MapFilter;
