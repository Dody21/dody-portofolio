import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // load all tsparticles features
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "transparent" }, // biar transparan
        },
        style: {
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #9333ea 100%)",
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: ["#00ffff", "#ff00ff", "#ffff00"] }, // multi-color neon
          links: {
            color: "#00ffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: { enable: true, speed: 2, outModes: { default: "bounce" } },
          number: { value: 80, density: { enable: true, area: 800 } },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
