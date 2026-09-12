const projects = [
  {
    number: "01",
    title: "LED Clock + Alarm",
    type: "Embedded system",
    summary:
      "An ESP32-powered clock and alarm with a color display, rotary-encoder controls, and wireless control of a separate LED receiver.",
    details:
      "The firmware includes menus for time, alarms, brightness, fade timing, and six LED colors. Commands are sent over ESP-NOW, with a heartbeat keeping the receiver synchronized.",
    tags: ["ESP32", "C++", "ESP-NOW", "PlatformIO"],
    href: "https://github.com/RobStigau/LEDCLK",
    visual: "clock",
  },
  {
    number: "02",
    title: "Remote-Controlled ESP Rover",
    type: "Wireless robotics",
    summary:
      "I designed and built a rear-wheel-drive rover with Ackermann steering, controlled by two ESP32 microcontrollers communicating wirelessly through the ESP-NOW protocol.",
    details:
      "The system translates real-time user input into DC motor speed and direction commands while controlling a servo for front-wheel steering. During development, I tested multiple prototypes and redesigned the chassis, steering, and wheels several times to improve strength and stability. This project strengthened my skills in embedded programming, wireless communication, hardware integration, troubleshooting, and iterative engineering design.",
    tags: ["ESP32", "C++", "Motor control", "Robotics"],
    href: "https://github.com/RobStigau/Remote-controlled-ESP-rover",
    visual: "rover",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <div className="siteShell" id="top">
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="Rob Stigau, home">
          <span>R</span><span>S</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="headerLink" href="https://github.com/RobStigau" target="_blank" rel="noreferrer">
          GitHub <Arrow />
        </a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="heroCopy">
            <p className="eyebrow"><span /> Developer · Maker · California</p>
            <h1 id="hero-title">Clear ideas.<br /><em>Useful things.</em></h1>
            <p className="heroIntro">
              I&apos;m Rob Stigau. I build practical software and hardware projects
              with a focus on thoughtful design, reliable engineering, and
              learning by making.
            </p>
            <div className="heroActions">
              <a className="button buttonPrimary" href="#work">View selected work <span aria-hidden="true">↓</span></a>
              <a className="button buttonQuiet" href="#about">More about me</a>
            </div>
          </div>

          <div className="bauhausPoster" aria-hidden="true">
            <span className="posterLabel">Portfolio / 2026</span>
            <div className="posterCircle"><i /></div>
            <div className="posterBar" />
            <div className="posterGrid">
              <span>Design</span><span>Code</span><span>Build</span>
            </div>
            <strong>RS</strong>
          </div>
        </section>

        <div className="disciplineBar" aria-label="Areas of work">
          <span>Embedded systems</span><i />
          <span>Web development</span><i />
          <span>Hardware prototyping</span><i />
          <span>Interaction design</span>
        </div>

        <section className="workSection" id="work" aria-labelledby="work-title">
          <header className="sectionHeader">
            <div>
              <p className="sectionNumber">01 / Selected work</p>
              <h2 id="work-title">Projects built to work.</h2>
            </div>
            <p>
              A small collection of hands-on projects across embedded systems,
              wireless communication, and physical computing.
            </p>
          </header>

          <div className="projectList">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div className={`projectVisual ${project.visual}`} aria-hidden="true">
                  {project.visual === "clock" ? (
                    <div className="clockObject">
                      <div className="clockDisplay">
                        <small>ALARM · ON</small>
                        <strong>12:00</strong>
                        <span>AM</span>
                      </div>
                      <i className="clockKnob" />
                      <div className="colorKeys"><i /><i /><i /><i /><i /><i /></div>
                    </div>
                  ) : (
                    <div className="roverObject">
                      <i className="antenna" />
                      <div className="roverTop" />
                      <div className="roverBody"><span /></div>
                      <i className="wheel wheelOne" /><i className="wheel wheelTwo" />
                      <span className="signal signalOne" /><span className="signal signalTwo" />
                    </div>
                  )}
                  <span className="visualNumber">{project.number}</span>
                </div>

                <div className="projectContent">
                  <div className="projectHeading">
                    <p>{project.type}</p>
                    <span>Project {project.number}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="projectSummary">{project.summary}</p>
                  <p className="projectDetails">{project.details}</p>
                  <ul aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                  <a className="projectLink" href={project.href} target="_blank" rel="noreferrer">
                    View repository <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="aboutSection" id="about" aria-labelledby="about-title">
          <div className="aboutTitle">
            <p className="sectionNumber">02 / About</p>
            <h2 id="about-title">Curious by nature.<br /><em>Practical by design.</em></h2>
          </div>
          <div className="aboutCopy">
            <p className="aboutLead">
              I like taking an idea from the first sketch to something real,
              testable, and useful.
            </p>
            <p>
              My work sits between software and hardware. I enjoy understanding
              how a system works, reducing unnecessary complexity, and refining
              the details that make it easier for someone else to use.
            </p>
            <p>
              This portfolio is a growing record of the projects I&apos;ve built and
              the skills I&apos;ve developed along the way.
            </p>
          </div>
        </section>

        <section className="principles" aria-label="Working principles">
          <article><span>01</span><h3>Make it clear</h3><p>Good work should be easy to understand and easy to use.</p></article>
          <article><span>02</span><h3>Learn by building</h3><p>Real prototypes reveal the questions that planning alone cannot.</p></article>
          <article><span>03</span><h3>Refine the details</h3><p>Quality comes from testing, simplifying, and following through.</p></article>
        </section>

        <section className="contactSection" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="sectionNumber">03 / Contact</p>
            <h2 id="contact-title">Want to see what<br />I&apos;m building next?</h2>
          </div>
          <a href="https://github.com/RobStigau" target="_blank" rel="noreferrer">
            <span>Visit my GitHub</span><Arrow />
          </a>
        </section>
      </main>

      <footer className="siteFooter">
        <p>© {new Date().getFullYear()} Rob Stigau</p>
        <p>Designed and built with care.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
