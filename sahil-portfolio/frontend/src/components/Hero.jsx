
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Download,
  Sparkles,
  Code2,
  Terminal,
  Braces,
} from "lucide-react";

const roles = [
  "Aspiring Full Stack Developer",
  "React Developer",
  "JavaScript Enthusiast",
  "Creative Problem Solver",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero section" id="home">
      <div className="hero-content">

        <p className="intro hero-intro">
          <span className="status-dot"></span>
          Hello, I'm Sahil Saha
          <Sparkles size={16} />
        </p>

        <h1>
          Turning ideas
          <br />
          into <span className="gradient-text">digital</span>
          <br />
          experiences.
        </h1>

        <div className="hero-role">
          <span className="role-line"></span>
          <h2 key={roleIndex}>{roles[roleIndex]}</h2>
        </div>

        <p className="hero-description">
          I'm a passionate developer who enjoys building
          modern, responsive and user-friendly web
          applications using React, JavaScript and Node.js.
          I love learning new technologies and bringing
          creative ideas to life.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            Explore My Work
            <ArrowUpRight size={19} />
          </a>

          {/* Download Resume */}
          <a
  href={`${import.meta.env.BASE_URL}Sahil_Resume.pdf`}
  className="secondary-btn"
  download="Sahil_Saha_Resume.pdf"
>
  <Download size={18} />
  Download Resume
</a>

        </div>

        <div className="hero-social-proof">
          <span className="hero-line"></span>
          <p>Building. Learning. Creating.</p>
        </div>

      </div>

      <div className="hero-visual">

        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>

        <div className="floating-tech tech-react">
          <Code2 size={19} />
          <span>React</span>
        </div>

        <div className="floating-tech tech-js">
          <Braces size={19} />
          <span>JavaScript</span>
        </div>

        <div className="floating-tech tech-node">
          <Terminal size={19} />
          <span>Node.js</span>
        </div>

        <div className="hero-card">

          <div className="card-top">
            <div className="card-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>developer.js</p>
          </div>

          <div className="code-content">

            <div className="code-line">
              <span className="code-purple">const</span>{" "}
              <span className="code-blue">developer</span>{" "}
              = {"{"}
            </div>

            <div className="code-line indent">
              <span className="code-cyan">name</span>:{" "}
              <span className="code-green">"Sahil Saha"</span>,
            </div>

            <div className="code-line indent">
              <span className="code-cyan">role</span>:{" "}
              <span className="code-green">"Developer"</span>,
            </div>

            <div className="code-line indent">
              <span className="code-cyan">skills</span>: [
            </div>

            <div className="code-line indent double-indent">
              <span className="code-green">"React"</span>,
            </div>

            <div className="code-line indent double-indent">
              <span className="code-green">"JavaScript"</span>,
            </div>

            <div className="code-line indent double-indent">
              <span className="code-green">"Node.js"</span>,
            </div>

            <div className="code-line indent double-indent">
              <span className="code-green">"MongoDB"</span>
            </div>

            <div className="code-line indent">],</div>

            <div className="code-line indent">
              <span className="code-cyan">passion</span>:{" "}
              <span className="code-green">"Building the web"</span>
            </div>

            <div className="code-line">{"};"}</div>

            <div className="code-output">
              <span className="output-dot"></span>
              console.log("Hello, World!");
            </div>

          </div>

          <div className="card-bottom">
            <span>● JavaScript</span>
            <span>UTF-8</span>
          </div>

        </div>

        <div className="floating-badge">
          <span>✦</span> Always Learning
        </div>

      </div>
    </section>
  );
}

export default Hero;
