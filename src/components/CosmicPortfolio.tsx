"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    number: "01",
    eyebrow: "Embedded system",
    title: "LED Clock + Alarm",
    description:
      "An ESP32-powered clock and alarm with a color display, rotary-encoder controls, and wireless control of a separate LED receiver.",
    detail:
      "The C++ firmware drives a multi-view interface for setting the clock, alarm, brightness, fade timing, and six LED colors. Alarm and lighting commands travel over ESP-NOW, with a 30-second heartbeat keeping the receiver in sync.",
    tags: ["ESP32", "C++", "ESP-NOW", "PlatformIO"],
    tone: "solar",
    visual: "clock",
    href: "https://github.com/RobStigau/LEDCLK",
  },
  {
    number: "02",
    eyebrow: "Wireless robotics",
    title: "Remote ESP Rover",
    description:
      "A wirelessly controlled ESP32 rover that turns incoming controller data into drive, braking, and servo-steering commands.",
    detail:
      "The receiver firmware uses ESP-NOW control data, a TB6612FNG dual motor driver, and an ESP32-compatible servo library. It handles forward and reverse motion, active braking, standby behavior, and real-time steering values.",
    tags: ["ESP32", "C++", "ESP-NOW", "Motor control"],
    tone: "lunar",
    visual: "rover",
    href: "https://github.com/RobStigau/Remote-controlled-ESP-rover",
  },
  {
    number: "03",
    eyebrow: "Creative research",
    title: "Experimental Signal",
    description:
      "A place for ambitious technical experiments, unusual visual ideas, and the discoveries that happen along the way.",
    detail:
      "This card is designed for work that proves curiosity, creative coding, or a technically difficult breakthrough.",
    tags: ["Creative code", "WebGL", "Interaction"],
    tone: "nebula",
    visual: "planet",
    href: "https://github.com/RobStigau",
  },
  {
    number: "04",
    eyebrow: "Open source",
    title: "Tools for the Voyage",
    description:
      "Useful software made to remove friction, automate repetitive work, or help other builders move faster.",
    detail:
      "Connect this project to its GitHub repository and explain who it helps, how it works, and what you learned building it.",
    tags: ["Tooling", "Automation", "GitHub"],
    tone: "aurora",
    visual: "planet",
    href: "https://github.com/RobStigau",
  },
];

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLElement>(null);
  const [expanded, setExpanded] = useState(false);

  const tilt = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || !cardRef.current) return;
    const bounds = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    cardRef.current.style.setProperty("--tilt-x", `${(0.5 - y) * 8}deg`);
    cardRef.current.style.setProperty("--tilt-y", `${(x - 0.5) * 9}deg`);
    cardRef.current.style.setProperty("--light-x", `${x * 100}%`);
    cardRef.current.style.setProperty("--light-y", `${y * 100}%`);
  };

  const resetTilt = () => {
    cardRef.current?.style.setProperty("--tilt-x", "0deg");
    cardRef.current?.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <article
      ref={cardRef}
      className={`missionCard ${project.tone} reveal`}
      onPointerMove={tilt}
      onPointerLeave={resetTilt}
    >
      <div className="missionVisual" aria-hidden="true">
        <div className="coordinateGrid" />
        {project.visual === "clock" ? (
          <div className="clockRig">
            <span className="clockAntenna" />
            <div className="clockScreen">
              <span className="clockStatus">ALARM · ARMED</span>
              <strong>12:00</strong>
              <span className="clockMeridiem">AM</span>
              <div className="clockColors"><i /><i /><i /><i /><i /><i /></div>
            </div>
            <span className="clockDial"><i /></span>
            <span className="signalWave waveOne" />
            <span className="signalWave waveTwo" />
            <span className="signalWave waveThree" />
          </div>
        ) : project.visual === "rover" ? (
          <div className="roverRig">
            <span className="roverScan" />
            <div className="roverBody">
              <span className="roverAntenna"><i /></span>
              <span className="roverDeck" />
              <span className="roverSensor" />
              <span className="roverWheel wheelLeft" />
              <span className="roverWheel wheelRight" />
            </div>
            <span className="roverPath pathOne" />
            <span className="roverPath pathTwo" />
          </div>
        ) : (
          <div className="projectPlanet">
            <span className="planetCore" />
            <span className="orbit orbitOne"><i /></span>
            <span className="orbit orbitTwo"><i /></span>
            <span className="orbit orbitThree" />
          </div>
        )}
        <span className="visualIndex">{project.number}</span>
        <span className="visualTelemetry">SYS / ONLINE</span>
        <span className="crosshair crosshairOne">+</span>
        <span className="crosshair crosshairTwo">+</span>
      </div>

      <div className="missionBody">
        <div className="missionHeading">
          <div>
            <p>{project.eyebrow}</p>
            <h3>{project.title}</h3>
          </div>
          <span className="missionNumber">/{project.number}</span>
        </div>
        <p className="missionDescription">{project.description}</p>
        <ul className="missionTags" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <button
          className="missionToggle"
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          <span>{expanded ? "Close transmission" : "Open transmission"}</span>
          <span className="toggleIcon" aria-hidden="true">{expanded ? "−" : "+"}</span>
        </button>
        <div className={expanded ? "missionDetail expanded" : "missionDetail"}>
          <div>
            <span>Mission note</span>
            <p>{project.detail}</p>
            <a href={project.href} target="_blank" rel="noreferrer">
              View repository <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export function CosmicPortfolio() {
  const shellRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;

    const reveals = shell.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5%" },
    );
    reveals.forEach((element) => observer.observe(element));

    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? window.scrollY / max : 0;
        progressRef.current?.style.setProperty("transform", `scaleX(${progress})`);
      });
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const moveGlow = (event: React.PointerEvent<HTMLDivElement>) => {
    const shell = shellRef.current;
    if (!shell || event.pointerType !== "mouse") return;
    shell.style.setProperty("--pointer-x", `${event.clientX}px`);
    shell.style.setProperty("--pointer-y", `${event.clientY}px`);
  };

  return (
    <div ref={shellRef} className="cosmicShell" onPointerMove={moveGlow}>
      <div className="scrollProgress" ref={progressRef} aria-hidden="true" />
      <div className="cosmicNoise" aria-hidden="true" />
      <div className="pointerGlow" aria-hidden="true" />

      <section className="entrySequence" aria-label="Introduction">
        <div className="entryBeam" aria-hidden="true"><span /></div>
        <div className="entryCopy reveal">
          <p className="cosmicLabel">Crossing the horizon</p>
          <h2>Ideas become real<br /><span>when you build them.</span></h2>
          <p>Scroll to enter the project archive.</p>
        </div>
        <div className="orbitTicker" aria-hidden="true">
          <span>Design</span><i />
          <span>Engineering</span><i />
          <span>Experimentation</span><i />
          <span>Iteration</span>
        </div>
      </section>

      <section className="missionArchive" id="projects">
        <header className="archiveHeader reveal">
          <div>
            <p className="cosmicLabel">Selected missions · 2026</p>
            <h2>Project archive</h2>
          </div>
          <p className="archiveIntro">
            A growing record of products, experiments, and useful things made
            with attention to both how they work and how they feel.
          </p>
        </header>

        <div className="missionGrid">
          {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
        </div>
      </section>

      <section className="aboutOrbit" id="about">
        <div className="aboutSystem reveal" aria-hidden="true">
          <div className="systemHalo haloOuter" />
          <div className="systemHalo haloMiddle" />
          <div className="systemHalo haloInner" />
          <div className="systemCore"><span>RS</span></div>
          <span className="systemMoon moonOne" />
          <span className="systemMoon moonTwo" />
          <span className="systemLabel labelOne">Curiosity</span>
          <span className="systemLabel labelTwo">Craft</span>
          <span className="systemLabel labelThree">Clarity</span>
        </div>

        <div className="aboutNarrative reveal">
          <p className="cosmicLabel">About the builder</p>
          <h2>Curious by nature.<br /><span>Intentional by design.</span></h2>
          <p>
            I&apos;m Rob, a developer and maker interested in the point where strong
            engineering meets thoughtful design. I learn by building, testing,
            and refining until the experience feels inevitable.
          </p>
          <div className="principleGrid">
            <div><strong>01</strong><span>Think clearly</span></div>
            <div><strong>02</strong><span>Build boldly</span></div>
            <div><strong>03</strong><span>Refine deeply</span></div>
          </div>
        </div>
      </section>

      <section className="signalSection" id="contact">
        <div className="signalStars" aria-hidden="true" />
        <div className="signalCopy reveal">
          <p className="cosmicLabel">Open channel</p>
          <h2>Let&apos;s make something<br /><span>worth discovering.</span></h2>
          <a href="https://github.com/RobStigau" target="_blank" rel="noreferrer">
            <span>Start a conversation</span>
            <i aria-hidden="true">↗</i>
          </a>
        </div>
      </section>

      <footer className="cosmicFooter">
        <p>© {new Date().getFullYear()} Rob Stigau</p>
        <p>Built in California · Orbiting Earth</p>
        <a href="#top">Return to launch ↑</a>
      </footer>
    </div>
  );
}
