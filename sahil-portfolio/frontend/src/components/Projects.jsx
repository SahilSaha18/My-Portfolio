
import {
  ExternalLink,
  ShoppingCart,
  Film,
  Gamepad2,
  Hand,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";

const projects = [
  {
    title: "Amazon Clone",
    description:
      "An e-commerce website inspired by Amazon, featuring a modern shopping interface and product-focused layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: ShoppingCart,
    demo: "#",
    github: "#",
  },
  {
    title: "Netflix Clone",
    description:
      "A Netflix-inspired streaming platform UI with movie sections, attractive visuals, and a responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: Film,
    demo: "#",
    github: "https://github.com/SahilSaha18/Netflix-Clone",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "An interactive two-player Tic Tac Toe game with game logic, winning combinations, and a simple interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: Gamepad2,
    demo: "#",
    github: "https://github.com/SahilSaha18/Tic-Tac-Toe",
  },
  {
    title: "Rock Paper Scissors",
    description:
      "An interactive Rock Paper Scissors game where players compete against the computer with real-time results and score tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: Hand,
    demo: "#",
    github: "https://github.com/SahilSaha18/rock-paper-scissors",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern and responsive personal portfolio showcasing my skills, education, projects, and achievements with smooth animations and a dark UI.",
    tech: ["React", "JavaScript", "CSS"],
    icon: BriefcaseBusiness,
    demo: "#",
    github: "#",
  },
  {
    title: "Online Code Editor",
    description:
      "A browser-based code editor where users can write HTML, CSS, and JavaScript and see the output through a live preview.",
    tech: ["React", "JavaScript", "CSS"],
    icon: Code2,
    demo: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section-label">MY RECENT WORK</p>

      <h2 className="section-title">
        Featured <span>Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <div className="project-icon">
                  <Icon size={28} />
                </div>

                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo
                    <ExternalLink size={18} />
                  </a>
                )}

                {project.github !== "#" && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                    <Code2 size={18} />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
