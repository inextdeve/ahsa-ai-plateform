"use client";
import { CardHeader } from "@nextui-org/react";
import TransparentCard from "../common/transparent-card";
import { cn } from "@/utils/utils";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const violationsData = [
  {
    name: "route",
    severity: "high",
  },
  {
    name: "dust",
    severity: "low",
  },
  {
    name: "pole",
    severity: "medium",
  },
  {
    name: "wast",
    severity: "medium",
  },
  {
    name: "route",
    severity: "high",
  },
  {
    name: "pole",
    severity: "medium",
  },
  {
    name: "pole",
    severity: "medium",
  },
  {
    name: "wast",
    severity: "medium",
  },
  {
    name: "route",
    severity: "high",
  },
  {
    name: "wast",
    severity: "medium",
  },
  {
    name: "route",
    severity: "high",
  },
  {
    name: "dust",
    severity: "low",
  },

  {
    name: "dust",
    severity: "low",
  },
  {
    name: "pole",
    severity: "medium",
  },
  {
    name: "wast",
    severity: "medium",
  },
];

const LiveViolations = () => {
  const { t } = useTranslation("live");
  return (
    <>
      <ul>
        {violationsData.map((violation, index) => (
          <li className="text-right">
            <span>{index * 1000}</span> -{" "}
            <span
              className={cn({
                "text-warning-400": violation.severity === "medium",
                "text-danger-400": violation.severity === "high",
                "text-white-400": violation.severity === "low",
              })}
            >
              {t(violation.name)}
            </span>
            :{" "}
            <Link
              className="underline text-sm light"
              href="https://maps.app.goo.gl/fwAHeLWwP5V9Bt8s5"
            >
              {t("consultLocation")}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LiveViolations;
