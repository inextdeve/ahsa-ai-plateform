"use client";
import { loadImage, prepareIcon } from "./mapUtil";

import directionSvg from "@/resources/images/direction.svg";
import backgroundSvg from "@/resources/images/background.svg";
import animalSvg from "@/resources/images/icon/animal.svg";
import bicycleSvg from "@/resources/images/icon/bicycle.svg";
import boatSvg from "@/resources/images/icon/boat.svg";
import busSvg from "@/resources/images/icon/bus.svg";
import carSvg from "@/resources/images/icon/car.svg";
import camperSvg from "@/resources/images/icon/camper.svg";
import craneSvg from "@/resources/images/icon/crane.svg";
import defaultSvg from "@/resources/images/icon/default.svg";
import helicopterSvg from "@/resources/images/icon/helicopter.svg";
import motorcycleSvg from "@/resources/images/icon/motorcycle.svg";
import offroadSvg from "@/resources/images/icon/offroad.svg";
import personSvg from "@/resources/images/icon/person.svg";
import pickupSvg from "@/resources/images/icon/pickup.svg";
import planeSvg from "@/resources/images/icon/plane.svg";
import scooterSvg from "@/resources/images/icon/scooter.svg";
import shipSvg from "@/resources/images/icon/ship.svg";
import tractorSvg from "@/resources/images/icon/tractor.svg";
import trainSvg from "@/resources/images/icon/train.svg";
import tramSvg from "@/resources/images/icon/tram.svg";
import trolleybusSvg from "@/resources/images/icon/trolleybus.svg";
import truckSvg from "@/resources/images/icon/truck.svg";
import vanSvg from "@/resources/images/icon/van.svg";
import lightSvg from "@/resources/images/icon/light.svg";

export const mapIcons = {
  animal: animalSvg,
  bicycle: bicycleSvg,
  boat: boatSvg,
  bus: busSvg,
  car: carSvg,
  camper: camperSvg,
  crane: craneSvg,
  default: defaultSvg,
  helicopter: helicopterSvg,
  motorcycle: motorcycleSvg,
  offroad: offroadSvg,
  person: personSvg,
  pickup: pickupSvg,
  plane: planeSvg,
  scooter: scooterSvg,
  ship: shipSvg,
  tractor: tractorSvg,
  train: trainSvg,
  tram: tramSvg,
  trolleybus: trolleybusSvg,
  truck: truckSvg,
  van: vanSvg,
  light: lightSvg,
};

export const mapIconKey = (category) =>
  mapIcons.hasOwnProperty(category) ? category : "default";

export const mapImages = {};

const mapPalette = {
  common: {
    black: "#000",
    white: "#fff",
  },
  mode: "light",
  primary: {
    main: "#1976d2",
    light: "#42a5f5",
    dark: "#1565c0",
    contrastText: "#fff",
  },
  secondary: {
    main: "#9c27b0",
    light: "#ba68c8",
    dark: "#7b1fa2",
    contrastText: "#fff",
  },
  error: {
    main: "#d32f2f",
    light: "#ef5350",
    dark: "#c62828",
    contrastText: "#fff",
  },
  warning: {
    main: "#ed6c02",
    light: "#ff9800",
    dark: "#e65100",
    contrastText: "#fff",
  },
  info: {
    main: "#0288d1",
    light: "#03a9f4",
    dark: "#01579b",
    contrastText: "#fff",
  },
  success: {
    main: "#2e7d32",
    light: "#4caf50",
    dark: "#1b5e20",
    contrastText: "#fff",
  },
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: "#fff",
    default: "#fff",
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
  neutral: {
    main: "#9e9e9e",
  },
};

export default async () => {
  const background = await loadImage(backgroundSvg);
  mapImages.background = await prepareIcon(background);
  mapImages.direction = await prepareIcon(await loadImage(directionSvg));
  await Promise.all(
    Object.keys(mapIcons).map(async (category) => {
      const results = [];
      ["info", "success", "error", "neutral"].forEach((color) => {
        results.push(
          loadImage(mapIcons[category]).then((icon) => {
            mapImages[`${category}-${color}`] = prepareIcon(
              background,
              icon,
              mapPalette[color].main
            );
          })
        );
      });
      await Promise.all(results);
    })
  );
};
