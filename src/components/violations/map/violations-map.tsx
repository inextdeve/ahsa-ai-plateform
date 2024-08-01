"use client";

import MapMarkers from "@/map/MapMarkers";
import MapPositions from "@/map/MapPositions";
// import dynamic from "next/dynamic";
// import { positions } from "./data";

// const MapMarkers = dynamic(() => import("@/map/MapMarkers"), { ssr: false });
// // const MapView = dynamic(() => import("@/map/core/MapView"), { ssr: false });
// const MapDefaultCamera = dynamic(() => import("@/map/main/MapDefaultCamera"), {
//   ssr: false,
// });
import MapView from "@/map/core/MapView";
import MapDefaultCamera from "@/map/main/MapDefaultCamera";
import { filteredPositions } from "@/utils/data";
import { cn } from "@/utils/utils";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const violations = [
  {
    id: 82888204,
    latitude: 27.0674,
    longitude: 49.604185,
    category: "light",
    title: "Pole",
    type: "pole",
    processed: true,
  },
  {
    id: 82888205,
    latitude: 27.0374,
    longitude: 49.544185,
    category: "light",
    title: "Waste",
    type: "waste",
    processed: false,
  },
  {
    id: 82888206,
    latitude: 27.0574,
    longitude: 49.404185,
    category: "dust",
    title: "Dust",
    type: "dust",
    processed: true,
  },
  {
    id: 82888207,
    latitude: 27.0974,
    longitude: 49.554185,
    category: "scattered",
    title: "Scattered",
    type: "scattered",
    processed: true,
  },
  {
    id: 82888208,
    latitude: 27.0974,
    longitude: 49.504185,
    category: "scattered",
    title: "Scattered",
    type: "scattered",
    processed: false,
  },
];

const filterType = (type: string) => {
  return (ele) => ele.type === type;
};

const MainMap = () => {
  const { t, i18n } = useTranslation();
  const [markers] = useState(violations);

  const filteredMarkers = markers.map((violation) =>
    violation.processed
      ? { ...violation, color: "success" }
      : { ...violation, color: "error" }
  );

  return (
    <MapView>
      <div
        className={cn(
          "px-2 pb-1 bg-[#0924259d] absolute top-0 left-0 rounded-br-md",
          {
            "text-right": i18n.dir() === "rtl",
          }
        )}
      >
        <p>
          <span>{t("waste")} : </span>
          <span>{filteredMarkers.filter(filterType("waste")).length}</span>
        </p>
        <p>
          <span>{t("dust")} : </span>
          <span>{filteredMarkers.filter(filterType("dust")).length}</span>
        </p>
        <p>
          <span>{t("scattered")} : </span>
          <span>{filteredMarkers.filter(filterType("scattered")).length}</span>
        </p>
        <p>
          <span>{t("poles")} : </span>
          <span>{filteredMarkers.filter(filterType("pole")).length}</span>
        </p>
      </div>
      <MapMarkers markers={filteredMarkers} showTitles />
      {/* <MapPositions positions={filteredPositions} showStatus /> */}
      <MapDefaultCamera />
    </MapView>
  );
};

export default MainMap;
