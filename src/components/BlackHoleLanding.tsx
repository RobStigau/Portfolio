"use client";

import { useEffect, useState } from "react";
import { BlackHoleHeroSection } from "@/components/ui/blackhole-hero-section";

function useNarrowScreen() {
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const sync = () => setNarrow(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return narrow;
}

export function BlackHoleLanding() {
  const narrow = useNarrowScreen();
  const [paused, setPaused] = useState(false);
  const [azimuth, setAzimuth] = useState(0);
  const [elevation, setElevation] = useState(-5.5);

  const moveCamera = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setAzimuth(x * 12);
    setElevation(-5.5 - y * 8);
  };

  const resetCamera = () => {
    setAzimuth(0);
    setElevation(-5.5);
  };

  return (
    <section
      className="blackHoleLanding"
      aria-label="Portfolio introduction"
      onPointerMove={moveCamera}
      onPointerLeave={resetCamera}
    >
      <BlackHoleHeroSection
        focus={narrow ? [0.5, 0.76] : [0.72, 0.46]}
        scrim={narrow ? "top" : "left"}
        scrimStrength={0.92}
        distance={24}
        elevation={narrow ? -7 : elevation}
        azimuth={narrow ? 0 : azimuth}
        fov={narrow ? 58 : 42}
        glow={narrow ? 0.85 : 1.1}
        steps={narrow ? 170 : 260}
        resolution={narrow ? 0.55 : 0.68}
        paused={paused}
      >
        <nav className="blackHoleNav" aria-label="Primary navigation">
          <a className="blackHoleMark" href="#top" aria-label="Rob Stigau, home">
            RS<span>.</span>
          </a>
          <div>
            <a href="#projects">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="blackHoleCopy">
          <p className="blackHoleEyebrow">Rob Stigau · Developer &amp; maker</p>
          <h1>
            Building at the edge
            <br />
            <span>of what&apos;s possible.</span>
          </h1>
          <p className="blackHoleIntro">
            Thoughtful digital experiences, useful tools, and experiments made
            with code.
          </p>
          <div className="blackHoleActions">
            <a className="blackHolePrimary" href="#projects">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="blackHoleSecondary"
              href="https://github.com/RobStigau"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="blackHoleControls">
          <span className="cameraHint">Move your cursor to shift perspective</span>
          <button type="button" onClick={() => setPaused((value) => !value)}>
            <span className={paused ? "statusDot paused" : "statusDot"} />
            {paused ? "Resume motion" : "Pause motion"}
          </button>
        </div>
      </BlackHoleHeroSection>
    </section>
  );
}
