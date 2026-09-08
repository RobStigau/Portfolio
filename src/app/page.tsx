const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Rob Stigau, home">
          RS<span className="accent">.</span>
        </a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="https://github.com/RobStigau" target="_blank" rel="noreferrer">
            GitHub <Arrow />
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">
          <span className="statusDot" /> Available for the next good idea
        </p>
        <h1>
          I make digital things
          <br />
          <span>that feel human.</span>
        </h1>
        <div className="heroFooter">
          <p>
            I&apos;m Rob — a builder focused on thoughtful products, useful
            software, and the details that make both memorable.
          </p>
          <a className="roundButton" href="#work" aria-label="See selected work">
            ↓
          </a>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="sectionHeading">
          <p>01 / Selected work</p>
          <p>More coming soon</p>
        </div>

        <article className="projectCard">
          <div className="projectNumber">001</div>
          <div className="projectCopy">
            <p className="projectLabel">Current project</p>
            <h2>This portfolio is just getting started.</h2>
            <p>
              The foundation is live: fast, responsive, and ready for the work
              worth sharing next.
            </p>
          </div>
          <div className="projectMark" aria-hidden="true">R</div>
        </article>
      </section>

      <section className="about section" id="about">
        <div className="sectionHeading">
          <p>02 / About</p>
        </div>
        <div className="aboutGrid">
          <h2>Curious by default. Precise by choice.</h2>
          <div className="aboutCopy">
            <p>
              I enjoy turning fuzzy ideas into clear, useful experiences. This
              space will collect the projects, experiments, and lessons along
              the way.
            </p>
            <a className="textLink" href="https://github.com/RobStigau" target="_blank" rel="noreferrer">
              Follow the work on GitHub <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Rob Stigau</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
