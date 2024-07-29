"use client";
import Script from "next/script";

const ParticleNetworkBG = () => {
  return (
    <Script
      strategy="afterInteractive"
      src="https://rawgit.com/JulianLaval/canvas-particle-network/master/particle-network.min.js"
      onLoad={() => {
        var canvasDiv = document.getElementById("particle-canvas");
        var options = {
          particleColor: "#0cc1c7",
          background:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1600px-HD_transparent_picture.png",
          interactive: true,
          speed: "medium",
          density: "high",
        };
        //@ts-ignore
        new ParticleNetwork(canvasDiv, options);
      }}
    />
  );
};

export default ParticleNetworkBG;
