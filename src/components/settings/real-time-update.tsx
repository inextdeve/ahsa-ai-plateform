"use client";
import { Select, SelectItem, Switch } from "@nextui-org/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const intervals = [5, 10, 30];

const RealTimeUpdate = () => {
  const { t } = useTranslation("settings");

  const [selected, setSelected] = useState(false);

  return (
    <div className="grid">
      <Switch
        onValueChange={(isSelected) => setSelected(isSelected)}
        className="mb-4"
        size="sm"
      >
        {t("autoUpdate")}
      </Switch>
      <Select
        disabled={selected}
        label={t("updateInterval")}
        className="max-w-xl"
      >
        {intervals.map((interval) => (
          <SelectItem key={interval}>
            {`${interval} ${t("seconds")}`}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default RealTimeUpdate;
