import { useId, useEffect } from "react";
// import { useTheme } from "@mui/styles";
// import { useMediaQuery } from "@mui/material";
import { map } from "./core/MapView";
import { useAttributePreference } from "@/utils/preferences";

const MapMarkers = ({ markers, showTitles }) => {
  const id = useId();

  // const theme = useTheme();
  // const desktop = useMediaQuery(theme.breakpoints.up("md"));
  // true is for desktop true
  const iconScale = useAttributePreference("iconScale", true ? 0.75 : 1);

  useEffect(() => {
    map.addSource(id, {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [],
      },
    });

    if (showTitles) {
      map.addLayer({
        id,
        type: "symbol",
        source: id,
        filter: ["!has", "point_count"],
        layout: {
          "icon-image": "{category}-{color}",
          "icon-size": iconScale,
          "icon-allow-overlap": true,
          "text-field": "{title}",
          "text-allow-overlap": true,
          "text-anchor": "bottom",
          "text-offset": [0, -2 * iconScale],
          "text-size": 12,
        },
        paint: {
          "text-halo-color": "white",
          "text-halo-width": 1,
        },
      });
    } else {
      map.addLayer({
        id,
        type: "symbol",
        source: id,
        layout: {
          "icon-image": "{category}-{color}",
          "icon-size": iconScale,
          "icon-allow-overlap": true,
        },
      });
    }

    return () => {
      if (map.getLayer(id)) {
        map.removeLayer(id);
      }
      if (map.getSource(id)) {
        map.removeSource(id);
      }
    };
  }, [showTitles]);

  useEffect(() => {
    map.getSource(id)?.setData({
      type: "FeatureCollection",
      features: markers.map(
        ({ latitude, longitude, category, color, title }) => ({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          properties: {
            category: category || "default",
            color: color || "neutral",
            title: title || "",
          },
        })
      ),
    });
  }, [showTitles, markers]);

  return null;
};

export default MapMarkers;
