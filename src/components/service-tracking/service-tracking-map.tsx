"use client";
import { useAppSelector } from "@/components/hooks/rtk";
import MapMarkers from "@/map/MapMarkers";
import MapPositions from "@/map/MapPositions";
import MapView from "@/map/core/MapView";
import MapDefaultCamera from "@/map/main/MapDefaultCamera";
import { cn } from "@/utils/utils";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const filterType = (type: string) => {
  return (ele) => ele.type === type;
};

const ServiceTrackingMap = () => {
  const { t, i18n } = useTranslation("tracking");
  const bins = useAppSelector((state) =>
    state.tracking.filteredBins.map((bin) => ({
      ...bin,
      category: "default",
      color: "success",
    }))
  );

  const filteredMarkers = bins;

  useEffect(() => {
    console.log(filteredMarkers);
  }, []);

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
          <span>{t("empty")} : </span>
          <span>{filteredMarkers.filter(filterType("waste")).length}</span>
        </p>
        <p>
          <span>{t("unempty")} : </span>
          <span>{filteredMarkers.filter(filterType("dust")).length}</span>
        </p>
        <p>
          <span>{t("incomplete")} : </span>
          <span>{filteredMarkers.filter(filterType("scattered")).length}</span>
        </p>
      </div>
      <MapMarkers markers={filteredMarkers} showTitles />
      {/* <MapPositions positions={filteredMarkers} showStatus /> */}
      <MapDefaultCamera />
    </MapView>
  );
};

export default ServiceTrackingMap;
