import { BlackHoleLanding } from "@/components/BlackHoleLanding";

const projects = [
  {
    number: "01",
    title: "Project name",
    type: "Web application",
    description:
      "A short description of the project, the problem it solves, and what makes it interesting.",
    tags: ["Next.js", "TypeScript", "Design"],
    tone: "lime",
  },
  {
    number: "02",
    title: "Project name",
    type: "Product concept",
    description:
      "Use this space to explain your role, the central idea, and the outcome of the work.",
    tags: ["Product", "Research", "Prototype"],
    tone: "blue",
  },
  {
    number: "03",
    title: "Project name",
    type: "Creative experiment",
    description:
      "A home for smaller experiments, unusual ideas, or a technically challenging side project.",
    tags: ["Experiment", "Interaction", "Code"],
    tone: "orange",
  },
  {
    number: "04",
    title: "Project name",
    type: "Open-source tool",
    description:
      "Highlight what you built, who it helps, and the most important thing you learned from it.",
    tags: ["Open source", "Tooling", "GitHub"],
    tone: "violet",
  },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main id="top">
      <BlackHoleLanding />

      <section className="section" id="projects">
        <div className="sectionHeader">
          <div>
            <p className="sectionLabel">Selected projects</p>
            <h2>Things I&apos;ve worked on.</h2>
          </div>
          <p className="sectionCount">04 projects</p>
        </div>

        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.number}>
              <div className={`projectVisual ${project.tone}`}>
                <span>{project.number}</span>
                <div className="projectWindow" aria-hidden="true">
                  <div className="windowBar">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="windowContent">
                    <b />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <div className="projectInfo">
                <div className="projectTitleRow">
                  <div>
                    <p>{project.type}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="projectArrow" aria-hidden="true">↗</span>
                </div>
                <p className="projectDescription">{project.description}</p>
                <ul className="tagList" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <p className="sectionLabel">About me</p>
        <div className="aboutGrid">
          <h2>I like making ideas real.</h2>
          <div className="aboutCopy">
            <p>
              I&apos;m interested in the space where thoughtful design meets
              solid engineering. I enjoy learning quickly, solving practical
              problems, and building work that feels clear and intentional.
            </p>
            <p>
              This site is a living archive. I&apos;ll keep adding projects,
              notes, and experiments as I make them.
            </p>
            <a href="https://github.com/RobStigau" target="_blank" rel="noreferrer">
              Visit my GitHub <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="sectionLabel">Get in touch</p>
        <h2>Have something interesting in mind?</h2>
        <a href="https://github.com/RobStigau" target="_blank" rel="noreferrer">
          Start a conversation <Arrow />
        </a>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Rob Stigau</p>
        <div>
          <a href="https://github.com/RobStigau" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
