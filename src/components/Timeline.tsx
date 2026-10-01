import React, { useState } from "react";
import SchoolIcon from '@mui/icons-material/School';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ScienceIcon from '@mui/icons-material/Science';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

interface TimelineEvent {
  date: string;
  category: "education" | "internship" | "research" | "project" | "publication" | "award";
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

function Timeline() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const events: TimelineEvent[] = [
    {
      date: "May 2026 - July 2026",
      category: "internship",
      title: "Summer SDE Intern",
      subtitle: "NatWest Group",
      description: "Optimized enterprise banking telemetry, eliminating 10,000 unnecessary AWS CloudWatch logs per day in Spring Boot microservices.",
      icon: <EngineeringIcon fontSize="small"/>
    },
    {
      date: "Apr 2026",
      category: "project",
      title: "CareFlow Clinic System",
      subtitle: "Full-Stack & Database Engineering",
      description: "Engineered full-stack clinic platform with 10-table normalized relational DB and PL/SQL billing triggers.",
      icon: <ScienceIcon fontSize="small"/>
    },
    {
      date: "Mar 2026",
      category: "project",
      title: "SAFE: Agentic Feedback Engine",
      subtitle: "Automated Program Repair",
      description: "Built multi-agent AST code analysis and patch generation pipeline, achieving 100% syntactically valid code repair.",
      icon: <ScienceIcon fontSize="small"/>
    },
    {
      date: "CVIP 2026 (In Press)",
      category: "publication",
      title: "Handwritten Math Derivation Verification Paper",
      subtitle: "11th CVIP Conference 2026",
      description: "Co-authored visual-to-symbolic verification pipeline using multimodal LLMs for automated math grading (93.3% verdict accuracy).",
      icon: <LibraryBooksIcon fontSize="small"/>
    },
    {
      date: "May 2025 - July 2025",
      category: "internship",
      title: "Summer Research Intern",
      subtitle: "IIT Roorkee",
      description: "Built 200 Hz data pipeline and deployed reinforcement learning policies for quadcopter payload stabilization.",
      icon: <EngineeringIcon fontSize="small"/>
    },
    {
      date: "Dec 2025",
      category: "publication",
      title: "LLM UAV Mission Planning Paper",
      subtitle: "IEEE BigData 2025 (Macau, China)",
      description: "Published paper on schema-constrained mission generation from free-form natural language instructions using LLMs.",
      icon: <LibraryBooksIcon fontSize="small"/>
    },
    {
      date: "May 2024 - Oct 2024",
      category: "internship",
      title: "Robotics & Software Developer Intern",
      subtitle: "IvLabs (VNIT Nagpur)",
      description: "Built 4-wheeled gesture-controlled omnidirectional robot with ESP32 and MPU6050, presenting paper at PCEMS 2024.",
      icon: <EngineeringIcon fontSize="small"/>
    },
    {
      date: "Aug 2023",
      category: "education",
      title: "Admitted to VNIT Nagpur B.Tech CSE",
      subtitle: "AIR 5401 in JEE Mains",
      description: "Secured All India Rank 5401 in JEE Mains among 1M+ candidates to join B.Tech Computer Science & Engineering.",
      icon: <SchoolIcon fontSize="small"/>
    }
  ];

  const filteredEvents = activeFilter === "all" 
    ? events 
    : events.filter(e => e.category === activeFilter);

  const filters = [
    { key: "all", label: "All Milestones" },
    { key: "education", label: "Education" },
    { key: "internship", label: "Internships" },
    { key: "project", label: "Projects" },
    { key: "publication", label: "Publications" },
    { key: "award", label: "Honors" }
  ];

  return (
    <section className="timeline-section" id="timeline">
      <div className="container">
        <h2 className="section-title">Timeline & Milestones</h2>
        <p className="section-subtitle">Chronological record of software engineering internships, projects, research papers, and academic achievements.</p>

        <div className="timeline-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`timeline-filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="vertical-timeline-container">
          {filteredEvents.length === 0 ? (
            <div className="timeline-empty">No milestones match this filter.</div>
          ) : (
            filteredEvents.map((ev, idx) => (
              <div className="timeline-item-new" key={idx}>
                <div className="timeline-item-date">
                  <span>{ev.date}</span>
                </div>

                <div className="timeline-item-node" style={{ '--node-color': `var(--accent-${ev.category === 'education' ? 'secondary' : ev.category === 'internship' ? 'primary' : ev.category === 'research' ? 'support' : ev.category === 'project' ? 'support-sec' : ev.category === 'publication' ? 'highlight' : 'primary'})` } as React.CSSProperties}>
                  <div className="node-icon-inner">
                    {ev.icon}
                  </div>
                </div>

                <div className="timeline-item-content paper-card">
                  <span className={`badge ${ev.category}`}>
                    {ev.category}
                  </span>
                  <h4 className="timeline-item-title">{ev.title}</h4>
                  <h5 className="timeline-item-subtitle">{ev.subtitle}</h5>
                  <p className="timeline-item-desc">{ev.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <style>{`
        .timeline-section {
          padding: 60px 0;
          position: relative;
        }

        .timeline-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-bottom: 48px;
        }

        .timeline-filter-btn {
          background-color: var(--card-bg);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .timeline-filter-btn:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          background-color: rgba(201, 108, 74, 0.03);
        }

        .timeline-filter-btn.active {
          background-color: var(--accent-primary);
          color: #ffffff;
          border-color: var(--accent-primary);
        }

        .vertical-timeline-container {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 20px 0;
          text-align: left;
        }

        .vertical-timeline-container::before {
          content: '';
          position: absolute;
          left: 160px;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: var(--border-color);
        }

        @media (max-width: 768px) {
          .vertical-timeline-container::before {
            left: 28px;
          }
        }

        .timeline-item-new {
          display: flex;
          margin-bottom: 32px;
          position: relative;
        }

        @media (max-width: 768px) {
          .timeline-item-new {
            flex-direction: column;
            padding-left: 56px;
          }
        }

        .timeline-item-date {
          width: 140px;
          text-align: right;
          padding-right: 24px;
          padding-top: 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.82rem;
          color: var(--text-secondary);
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .timeline-item-date {
            width: auto;
            text-align: left;
            padding-right: 0;
            padding-top: 0;
            margin-bottom: 8px;
          }
        }

        .timeline-item-node {
          position: absolute;
          left: 145px;
          top: 8px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: var(--card-bg);
          border: 2px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          color: var(--node-color);
          transition: all 0.3s ease;
        }

        .timeline-item-new:hover .timeline-item-node {
          border-color: var(--node-color);
          box-shadow: 0 0 0 4px rgba(201, 108, 74, 0.08);
        }

        @media (max-width: 768px) {
          .timeline-item-node {
            left: 13px;
            top: 0;
          }
        }

        .node-icon-inner {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .timeline-item-content {
          flex: 1;
          margin-left: 44px;
          padding: 24px !important;
        }

        @media (max-width: 768px) {
          .timeline-item-content {
            margin-left: 0;
          }
        }

        .timeline-item-content .badge {
          margin-bottom: 8px;
        }

        .timeline-item-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .timeline-item-subtitle {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--accent-primary);
          margin-top: 4px;
          margin-bottom: 8px;
        }

        .timeline-item-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .timeline-empty {
          text-align: center;
          color: var(--text-secondary);
          padding: 40px;
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
}

export default Timeline;