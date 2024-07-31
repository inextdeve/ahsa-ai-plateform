"use client";

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

const MainMap = () => {
  return (
    <div className="h-[300px]">
      <MapView>
        <MapPositions positions={filteredPositions} showStatus />
        <MapDefaultCamera />
      </MapView>
    </div>
  );
};

export default MainMap;
