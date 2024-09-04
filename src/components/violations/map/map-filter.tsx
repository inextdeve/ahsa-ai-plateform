"use client";
import { useAppDispatch, useAppSelector } from "@/components/hooks/rtk";
import { violationsActions } from "@/store";
import { Radio, RadioGroup, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const violationsType = [
  { name: "all", id: 0 },
  { name: "waste", id: 1 },
  { name: "dust", id: 2 },
  { name: "scattered", id: 3 },
  { name: "pole", id: 4 },
];

const MapFilter = () => {
  const { t } = useTranslation("common");
  const dispatch = useAppDispatch();

  const [filter, setFilter] = useState({ processed: "all", type: "all" });

  const violations = useAppSelector((state) => state.violations.items);

  useEffect(() => {
    dispatch(
      violationsActions.updateFilteredViolations(
        violations.filter((item) => {
          let processed: boolean | "all" =
            filter.processed === "processed"
              ? true
              : filter.processed === "none-processed"
              ? false
              : "all";

          if (typeof processed === "string" && processed === "all") {
            return filter.type === "all" || item.type === filter.type;
          }

          return (
            (filter.type === "all" || item.type === filter.type) &&
            item.processed === processed
          );
        })
      )
    );
  }, [filter]);

  return (
    <>
      <RadioGroup
        defaultValue="all"
        size="sm"
        classNames={{
          wrapper: "flex-row text-primary",
        }}
        onValueChange={(value) =>
          setFilter((prev) => ({ ...prev, processed: value }))
        }
      >
        <Radio className="gap-1" value="processed">
          {t("processed")}
        </Radio>
        <Radio className="gap-1" value="none-processed">
          {t("none-processed")}
        </Radio>
        <Radio className="gap-1" defaultChecked value="all">
          {t("all")}
        </Radio>
      </RadioGroup>
      <Select
        label={t("violations")}
        className="max-w-[120px]"
        size="sm"
        onChange={(event) =>
          setFilter((prev) => ({ ...prev, type: event.target.value }))
        }
        defaultSelectedKeys={["all"]}
      >
        {violationsType.map((violationType) => (
          <SelectItem key={violationType.name}>
            {t(violationType.name)}
          </SelectItem>
        ))}
      </Select>
    </>
  );
};

export default MapFilter;
