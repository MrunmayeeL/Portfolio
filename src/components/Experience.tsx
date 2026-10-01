import React from "react";

interface Internship {
  role: string;
  company: string;
  duration: string;
  location: string;
  type: "industry" | "research";
  summary: string;
  highlights: string[];
  technologies: string[];
  certificateUrl?: string;
  githubUrl?: string;
}

function Experience() {
  const internships: Internship[] = [
    {
      role: "Summer SDE Intern",
      company: "NatWest Group",
      duration: "May 2026 - July 2026",
      location: "Bangalore, India",
      type: "industry",
      summary: "Worked as a Software Engineering Intern in the enterprise banking division, investigating production telemetry and optimizing Java/Spring Boot microservices.",
      highlights: [
        "Investigated excessive production logging in AWS CloudWatch, traced root causes within the Java / Spring Boot codebase, and implemented logging optimizations merged into release branches, eliminating 10,000 unnecessary log entries per day.",
        "Collaborated in an Agile development team using GitLab and JIRA to develop backend features, participate in code reviews, and maintain clean version control workflows."
      ],
      technologies: ["Java", "Spring Boot", "AWS CloudWatch", "GitLab CI/CD", "JIRA", "REST APIs", "Git"],
      certificateUrl: "https://drive.google.com/file/d/1knvvS6QI_SLudmgSfFP5iFkOTq_8-MNO/view?usp=sharing"
    },
    {
      role: "Summer Research Intern",
      company: "IIT Roorkee",
      duration: "May 2025 - July 2025",
      location: "Roorkee, India",
      type: "research",
      summary: "Built high-frequency data pipelines and applied reinforcement learning algorithms for autonomous quadcopter control with suspended payloads.",
      highlights: [
        "Applied a reinforcement learning policy for autonomous quadcopter stabilization with a suspended payload.",
        "Built a 200 Hz data collection and processing pipeline for real-time policy deployment on quadcopter hardware, generating a 3,000+ sample dataset across 50+ flight experiments."
      ],
      technologies: ["Python", "PyTorch", "ArduPilot", "MAVLink", "DroneKit", "Data Processing"],
      certificateUrl: "https://drive.google.com/file/d/1Z84ynfKuNfnyAFH0qaHPKGVPcMzFM9H5/view?usp=sharing"
    },
    {
      role: "Robotics & Software Developer Intern",
      company: "IvLabs (VNIT Nagpur)",
      duration: "May 2024 - Oct 2024",
      location: "Nagpur, India",
      type: "research",
      summary: "Developed motion control software and embedded hardware for an omnidirectional gesture-controlled robot, presenting the work at PCEMS 2024.",
      highlights: [
        "Built a 4-wheeled gesture-controlled omnidirectional robot for real-time multi-axis navigation.",
        "Programmed motion control using ESP32, MPU6050 IMU, ESP-NOW wireless protocol, and PWM motor drivers to support 10 wireless navigation commands.",
        "Co-authored and presented the project paper at the 3rd International Conference on PCEMS 2024."
      ],
      technologies: ["ESP32", "MPU6050", "C++", "ESP-NOW", "PWM", "Embedded Systems"],
      githubUrl: "https://github.com/IvLabs/Summer-Projects/tree/main/Summer%202024/Gesture%20Controlled%20Omnidirectional%20Robot"
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Software engineering and research internships bridging backend systems and hardware control.</p>

        <div className="experience-list">
          {internships.map((job, idx) => (
            <div className="experience-card paper-card" key={idx}>
              <div className="exp-card-header">
                <div className="exp-title-block">
                  <h3 className="exp-role">{job.role}</h3>
                  <h4 className="exp-company">{job.company}</h4>
                </div>
                <div className="exp-meta-block">
                  <span className={`badge ${job.type === 'research' ? 'research' : 'industry'}`}>
                    {job.type}
                  </span>
                  <span className="exp-duration">{job.duration}</span>
                  <span className="exp-location">{job.location}</span>
                </div>
              </div>

              <div className="exp-content">
                <div className="exp-summary-box">
                  <p className="exp-summary-text">{job.summary}</p>
                </div>

                <div className="exp-highlights-box">
                  <h5 className="exp-label">Key Contributions & Engineering Details</h5>
                  <ul className="exp-bullets">
                    {job.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>

                <div className="exp-footer-row">
                  <div className="exp-tech-list">
                    {job.technologies.map((tech, tIdx) => (
                      <span className="exp-tech-chip" key={tIdx}>{tech}</span>
                    ))}
                  </div>

                  <div className="exp-links">
                    {job.certificateUrl && (
                      <a href={job.certificateUrl} target="_blank" rel="noreferrer" className="exp-link-btn">
                        [Certificate ↗]
                      </a>
                    )}
                    {job.githubUrl && (
                      <a href={job.githubUrl} target="_blank" rel="noreferrer" className="exp-link-btn">
                        [GitHub Repo ↗]
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          padding: 60px 0;
        }

        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
          text-align: left;
        }

        .experience-card {
          border-left: 4px solid var(--accent-primary) !important;
          padding: 32px !important;
        }

        .exp-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
          margin-bottom: 20px;
          gap: 20px;
        }

        @media (max-width: 768px) {
          .exp-card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }

        .exp-role {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .exp-company {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--accent-primary);
          margin-top: 4px;
        }

        .exp-meta-block {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
        }

        @media (max-width: 768px) {
          .exp-meta-block {
            align-items: flex-start;
          }
        }

        .exp-duration {
          color: var(--text-primary);
          font-weight: 600;
        }

        .exp-location {
          color: var(--text-secondary);
        }

        .exp-content {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .exp-summary-box {
          background-color: rgba(201, 108, 74, 0.04);
          border: 1px solid rgba(201, 108, 74, 0.15);
          padding: 14px 18px;
          border-radius: 8px;
        }

        .exp-summary-text {
          font-size: 0.98rem;
          color: var(--text-primary);
          font-weight: 500;
          line-height: 1.6;
          margin: 0;
        }

        .exp-label {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--accent-primary);
          font-family: 'JetBrains Mono', monospace;
          margin-bottom: 8px;
        }

        .exp-bullets {
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 0;
        }

        .exp-bullets li {
          font-size: 0.93rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .exp-footer-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 10px;
          padding-top: 16px;
          border-top: 1px dashed var(--border-color);
        }

        .exp-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .exp-tech-chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          font-weight: 500;
          background-color: var(--border-color);
          color: var(--text-secondary);
          padding: 4px 10px;
          border-radius: 6px;
        }

        .exp-links {
          display: flex;
          gap: 12px;
        }

        .exp-link-btn {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--accent-primary);
          text-decoration: none;
        }

        .exp-link-btn:hover {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
}

export default Experience;

