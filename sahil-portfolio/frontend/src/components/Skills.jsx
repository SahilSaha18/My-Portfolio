
import {
  Code2,
  Server,
  Globe,
  Braces,
  Sparkles,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Braces,
    color: "purple",
    skills: ["JavaScript", "Basic Python","Java"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    color: "yellow",
    skills: ["HTML5", "CSS3", "React.js","Tailwind CSS"],
  },
  {
    title: "Backend & Databases",
    icon: Server,
    color: "purple",
    skills: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Development Tools",
    icon: Sparkles,
    color: "yellow",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="skills-heading">
        <p className="section-label">
          <Sparkles size={15} />
          WHAT I WORK WITH
        </p>

        <h2 className="section-title">
          My <span>Skills</span>
        </h2>

        <p className="skills-description">
          Technologies and tools I use to turn ideas into
          functional, beautiful and interactive web experiences.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <div className="skill-card" key={group.title}>
              <div className="skill-card-heading">
                <div className={`skill-icon ${group.color}`}>
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <h3>{group.title}</h3>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="skills-footer">
        <span className="skills-pulse"></span>
        Always learning and exploring new technologies
      </div>
    </section>
  );
}

export default Skills;
