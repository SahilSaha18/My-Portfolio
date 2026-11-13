
import {
  Code2,
  ExternalLink,
  Trophy,
  FolderCode,
  GraduationCap,
  MessageCircle,
} from "lucide-react";

function About() {
  return (
    <section className="section about-section" id="about">
      <p className="section-label">GET TO KNOW ME</p>

      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <div className="about-content">
        {/* Profile Image */}
        <div className="about-image">
          <div className="image-wrapper">
            <img src="/Sahil.png" alt="Sahil Saha" />
          </div>
        </div>

        {/* About Text */}
        <div className="about-text">
          <h3>
            I'm Sahil Saha, a{" "}
            <span>Student & Aspiring Developer</span>
          </h3>

          <p>
            I'm a passionate and enthusiastic developer who enjoys
            building modern, responsive, and user-friendly web
            applications. I love exploring new technologies and
            turning creative ideas into real-world projects.
          </p>

          <p>
            I have experience working with HTML, CSS, JavaScript,
            React.js, Node.js, Express.js, and MongoDB. I'm
            continuously improving my development skills while
            exploring full-stack web development.
          </p>

          <p>
            Along with development, I actively practice Data
            Structures and Algorithms and have solved 400+ coding
            problems across LeetCode and GeeksforGeeks.
          </p>

          {/* Statistics */}
          <div className="about-stats">
            <div className="stat">
              <Trophy size={22} />
              <h3>400+</h3>
              <p>Problems Solved</p>
            </div>

            <div className="stat">
              <FolderCode size={22} />
              <h3>06</h3>
              <p>Projects Built</p>
            </div>

            <div className="stat">
              <GraduationCap size={22} />
              <h3>9.35</h3>
              <p>Current CGPA</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="about-socials">
            <a
              href="https://github.com/SahilSaha18"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Code2 size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/sahil-saha-03035532a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <ExternalLink size={20} />
            </a>

            <a
              href="https://leetcode.com/u/Sahil_Saha49/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              title="LeetCode"
            >
              <Code2 size={20} />
            </a>

            <a
              href="https://www.geeksforgeeks.org/profile/sahilsa4mul"
              target="_blank"
              rel="noreferrer"
              aria-label="GeeksforGeeks"
              title="GeeksforGeeks"
            >
              <Trophy size={20} />
            </a>
          </div>

          <a href="#contact" className="about-btn">
            <MessageCircle size={17} />
            Let's Talk
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
