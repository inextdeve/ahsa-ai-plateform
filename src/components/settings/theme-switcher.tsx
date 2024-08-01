"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation("settings");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="grid">
      <p className="text-sm mb-4 pl-1 h-6">{t("changeTheme")}</p>
      <Select
        selectedKeys={[theme as string]}
        onChange={(e) => setTheme(e.target.value)}
        label={t("theme")}
        className="max-w-xl"
        startContent={
          theme === "dark" ? (
            <MoonIcon className="w-4 h-4" />
          ) : (
            <SunIcon className="w-4 h-4" />
          )
        }
      >
        <SelectItem key={"light"}>{t("light")}</SelectItem>
        <SelectItem key={"dark"}>{t("dark")}</SelectItem>
      </Select>
    </div>
  );
}
