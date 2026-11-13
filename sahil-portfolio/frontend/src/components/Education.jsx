
import {
  GraduationCap,
  School,
  BookOpen,
  CalendarDays,
  Award
} from "lucide-react";

const education = [
  {
    level: "Secondary Education",
    institution: "St. Anne's Convent School",
    location: "Baripada, Odisha",
    course: "Class 10",
    year: "2021",
    result: "85.33%",
    icon: School,
  },
  {
    level: "Higher Secondary Education",
    institution: "MPC Higher Secondary School",
    location: "Baripada, Odisha",
    course: "Class 12 - MPC",
    year: "2023",
    result: "77.33%",
    icon: BookOpen,
  },
  {
    level: "Undergraduate",
    institution: "Institute of Technical Education and Research",
    location: "Bhubaneswar, Odisha",
    course: "Bachelor of Technology (B.Tech)",
    year: "Pursuing",
    result: "9.35 CGPA",
    icon: GraduationCap,
  },
];

function Education() {
  return (
    <section className="section education-section" id="education">

      <p className="section-label">MY ACADEMIC JOURNEY</p>

      <h2 className="section-title">
        Education & <span>Qualifications</span>
      </h2>

      <p className="education-subtitle">
        My academic journey and achievements so far.
      </p>

      <div className="education-timeline">

        {education.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="timeline-item" key={item.level}>

              <div className="timeline-marker">
                <Icon size={23} />
              </div>

              <div className="timeline-card">

                <div className="timeline-card-header">
                  <div>
                    <span className="education-tag">
                      {item.level}
                    </span>

                    <h3>{item.institution}</h3>

                    <p className="education-location">
                      {item.location}
                    </p>
                  </div>

                  <span className="education-year">
                    <CalendarDays size={15} />
                    {item.year}
                  </span>
                </div>

                <div className="timeline-card-footer">

                  <span className="education-course">
                    {item.course}
                  </span>

                  <div className="education-score">
                    <Award size={18} />
                    <strong>{item.result}</strong>
                  </div>

                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}

export default Education;
