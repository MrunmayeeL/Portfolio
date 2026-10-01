import React from "react";
import CodeIcon from '@mui/icons-material/Code';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import StorageIcon from '@mui/icons-material/Storage';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

function TechnicalSkills() {
  const categories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <CodeIcon fontSize="small"/>,
      skills: ["Java", "Python", "C++", "C", "SQL", "JavaScript", "HTML5 / CSS3"]
    },
    {
      title: "Backend & Web Engineering",
      icon: <StorageIcon fontSize="small"/>,
      skills: ["Spring Boot", "REST APIs", "FastAPI", "Node.js", "Express.js", "React.js", "PL/SQL", "Socket.IO"]
    },
    {
      title: "Databases & Storage",
      icon: <StorageIcon fontSize="small"/>,
      skills: ["PostgreSQL", "Oracle SQL", "MySQL", "MongoDB", "Redis", "Relational Modeling"]
    },
    {
      title: "AI, ML & Computer Vision",
      icon: <AutoAwesomeIcon fontSize="small"/>,
      skills: ["PyTorch", "OpenCV", "Multimodal LLMs", "SBERT Embeddings", "PaddleOCR / EasyOCR", "YOLO (v5/v8)", "AST Code Analysis"]
    },
    {
      title: "Cloud, DevOps & Tools",
      icon: <CloudQueueIcon fontSize="small"/>,
      skills: ["AWS CloudWatch", "Docker", "Git", "GitLab CI/CD", "JIRA", "Linux", "Postman", "Valgrind"]
    },
    {
      title: "Embedded & Control Systems",
      icon: <PrecisionManufacturingIcon fontSize="small"/>,
      skills: ["ESP32", "MPU6050 IMU", "ESP-NOW Protocol", "MAVLink", "ArduPilot", "ROS", "DroneKit"]
    }
  ];

  return (
    <section className="skills-section-new" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Segregated technologies and frameworks extracted from backend software projects, AI pipelines, and systems work.</p>

        <div className="skills-grid-layout">
          {categories.map((cat, idx) => (
            <div className="skills-card paper-card" key={idx}>
              <div className="skills-card-header">
                <span className="skills-icon-box">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skills-list-box">
                {cat.skills.map((skill, sIdx) => (
                  <span className="skill-chip-item" key={sIdx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section-new {
          padding: 60px 0;
        }

        .skills-grid-layout {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          text-align: left;
        }

        @media (max-width: 900px) {
          .skills-grid-layout {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .skills-grid-layout {
            grid-template-columns: 1fr;
          }
        }

        .skills-card {
          padding: 28px !important;
          border-left: 3px solid var(--accent-primary) !important;
        }

        .skills-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 12px;
          margin-bottom: 18px;
        }

        .skills-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(201, 108, 74, 0.05);
          color: var(--accent-primary);
          border: 1px solid var(--border-color);
        }

        .skills-card-header h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .skills-list-box {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-chip-item {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.78rem;
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 4px 10px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: all 0.2s ease;
        }

        .skills-card:hover .skill-chip-item {
          border-color: var(--accent-primary);
          color: var(--text-primary);
          background-color: rgba(201, 108, 74, 0.02);
        }
      `}</style>
    </section>
  );
}

export default TechnicalSkills;

