import React, { useState } from "react";
import ProjectModal, { ProjectData } from "./ProjectModal";
import VisibilityIcon from '@mui/icons-material/Visibility';
import HubIcon from '@mui/icons-material/Hub';
import GitHubIcon from '@mui/icons-material/GitHub';

function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"overview" | "architecture">("overview");
  const [showAllMoreProjects, setShowAllMoreProjects] = useState(false);

  const projects: ProjectData[] = [
    {
      id: "careflow-clinic",
      title: "CareFlow Clinic Management System",
      subtitle: "Full-stack clinic platform with role-based access control, normalized DB, and analytics.",
      badges: ["Full Stack", "Database", "REST API"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
      status: "Completed",
      duration: "Apr 2026",
      role: "Full-Stack Developer",
      impact: "Designed a 10-table normalized database with PL/SQL triggers automating billing and scheduling workflows.",
      lessons: "Database-level triggers and constraints maintain data integrity better than application layer checks alone.",
      techStack: ["React.js", "Node.js", "Oracle SQL", "PL/SQL", "PostgreSQL", "REST APIs"],
      problem: "Clinic operations suffer from scheduling collisions, manual paper billing, and lack of real-time patient history tracking.",
      solution: "Engineered a web management system featuring 3 distinct user roles (Doctor, Patient, Admin), automated billing triggers, and revenue/workload analytics dashboards.",
      challenges: "Ensuring atomic appointment scheduling under high concurrency. Solved by writing custom PL/SQL row-locking procedures.",
      futureWork: "Adding automated SMS reminders and integrated telemedicine video calls.",
      github: "https://github.com/MrunmayeeL/careflow-clinic-management",
      diagramType: "data"
    },
    {
      id: "safe-apr-engine",
      title: "SAFE: Structured Agentic Feedback Engine",
      subtitle: "Multi-agent Automated Program Repair (APR) pipeline using AST analysis and LLMs.",
      badges: ["AI Systems", "Python", "AST Parsing"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
      status: "Completed",
      duration: "Mar 2026",
      role: "Software Developer",
      impact: "Achieved 100% syntactically valid patch generation while reducing patch size by 37% on QuixBugs benchmarks.",
      lessons: "Abstract Syntax Tree (AST) validation prevents language model hallucinations from creating broken code syntax.",
      techStack: ["Python", "AST Parsing", "LLMs", "Multi-Agent Systems", "PyTorch"],
      problem: "Naïve LLM code generation often introduces syntax errors or changes unrelated lines of code when fixing bugs.",
      solution: "Developed an automated program repair system combining AST-based localized code analysis with multi-agent verification to produce minimal, syntax-preserving patches.",
      challenges: "Preserving existing code structure while patching logic flaws. Solved using AST node substitution.",
      futureWork: "Expanding repair benchmarks to multi-file Java repos.",
      github: "https://github.com/MrunmayeeL/SAFE-structured_agentic_feedback_engine",
      diagramType: "grading"
    },
    {
      id: "uav-search-rescue",
      title: "Autonomous Multi-UAV Search & Rescue System",
      subtitle: "Multi-agent coordination, spatial exploration, YOLO object detection, and payload delivery.",
      badges: ["Systems", "Computer Vision", "MAVLink"],
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80",
      status: "Completed",
      duration: "Nov 2025 - Jan 2026",
      role: "Robotics & Software Developer",
      impact: "Achieved sub-1m target localization error across 20+ autonomous flight tests.",
      lessons: "Decentralized state synchronization over wireless MAVLink avoids single-point-of-failure bottlenecks.",
      techStack: ["Python", "OpenCV", "YOLOv5", "ArduPilot", "MAVLink", "DroneKit", "ROS"],
      problem: "Single drones have limited battery life and coverage area when searching large disaster zones.",
      solution: "Developed an autonomous multi-drone system with lawnmower grid search, real-time YOLO human detection, and automated GPS target localization for emergency relief payload delivery.",
      challenges: "Maintaining accurate target GPS coordinates from camera pixel frames. Solved using camera calibration and geometric projection matrices.",
      futureWork: "Integrating dynamic mesh networking for extended range.",
      github: "https://github.com/HarshalKolhe02/Multiagent_Disaster_Rescue_Drones_NIDAR",
      diagramType: "swarm"
    },
    {
      id: "autograde-eval",
      title: "AutoGrade: Intelligent Exam Evaluation System",
      subtitle: "OCR transcription and semantic grading pipeline using PaddleOCR, EasyOCR, and SBERT.",
      badges: ["AI / OCR", "Python", "NLP"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
      status: "Completed",
      duration: "Aug 2024 - Oct 2024",
      role: "AI Pipeline Developer",
      impact: "Evaluated 4,200+ handwritten student answers with question segmentation and semantic scoring.",
      lessons: "Preprocessing scanned paper images dramatically increases OCR word recognition accuracy.",
      techStack: ["Python", "PaddleOCR", "EasyOCR", "SBERT", "OpenCV", "PyTorch"],
      problem: "Manual grading of handwritten descriptive student answer sheets is slow and subjective.",
      solution: "Built a pipeline that crops answer regions, transcribes handwritten text using vision OCR models, and computes conceptual scoring using SBERT vector embeddings.",
      challenges: "Handling varied handwriting styles and low-contrast scans. Solved with adaptive thresholding image preprocessing.",
      futureWork: "Adding automatic mathematical equation parsing.",
      github: "https://github.com/MrunmayeeL",
      diagramType: "grading"
    },
    {
      id: "qr-checkin-system",
      title: "Real-Time QR Event Check-in System",
      subtitle: "Full-stack event management with UUID credentials, QR scanning, and live Socket.IO dashboard.",
      badges: ["Full Stack", "Web Development", "Socket.IO"],
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80",
      status: "Completed",
      duration: "Jan 2024 - Mar 2024",
      role: "Full-Stack Developer",
      impact: "Streamlined event entry with sub-second QR pass scanning and real-time attendance sync across 6 pages.",
      lessons: "WebSockets provide immediate live dashboard updates without client polling overhead.",
      techStack: ["React.js", "Express.js", "Socket.IO", "PostgreSQL", "Node.js", "REST APIs"],
      problem: "Paper guest lists at large events cause bottlenecks, queue delays, and untracked entry.",
      solution: "Engineered a web application that generates digital QR passes sent via automated email, featuring real-time Socket.IO check-in status sync across multiple entrance scanners.",
      challenges: "Handling rapid check-in scans simultaneously. Solved with optimistic UI updates and backend queue handling.",
      futureWork: "Adding offline QR scanning sync.",
      github: "https://github.com/MrunmayeeL",
      diagramType: "qr"
    },
    {
      id: "gesture-robot",
      title: "Gesture Controlled Omnidirectional Robot",
      subtitle: "Wireless spatial navigation controller using ESP32, MPU6050 IMU, and ESP-NOW protocol.",
      badges: ["Embedded Systems", "C++", "Hardware"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
      status: "Completed",
      duration: "May 2024 - Oct 2024",
      role: "Embedded Software Lead",
      impact: "Presented at PCEMS 2024; achieved sub-10ms wireless command transmission latency.",
      lessons: "Complementary filtering combining accelerometer and gyroscope signals eliminates sensor tilt drift.",
      techStack: ["ESP32", "MPU6050", "C++", "ESP-NOW", "PWM Motor Control"],
      problem: "Manual joystick controllers require two hands, restricting operator mobility in field environments.",
      solution: "Developed a wearable glove controller reading hand inclination via an MPU6050 IMU, transmitting 10 wireless navigation commands to a 4-wheeled omnidirectional chassis.",
      challenges: "Filtering hand jitter. Solved by implementing a rolling-average digital noise filter in C++.",
      futureWork: "Adding haptic vibration feedback for obstacle proximity.",
      github: "https://github.com/IvLabs/Summer-Projects/tree/main/Summer%202024/Gesture%20Controlled%20Omnidirectional%20Robot",
      diagramType: "embedded"
    }
  ];

  const extraGithubProjects = [
    {
      name: "mpu6050-filter",
      desc: "Complementary tilt calculation and IMU noise filter implemented in C++ for ESP32.",
      link: "https://github.com/MrunmayeeL"
    },
    {
      name: "dec-uav-planner",
      desc: "Standalone path-planning simulator implementing A* and RRT* algorithms in Python.",
      link: "https://github.com/MrunmayeeL"
    },
    {
      name: "sql-analytics-views",
      desc: "Optimized relational database views and index schemas for Northwind dataset analysis.",
      link: "https://github.com/MrunmayeeL"
    },
    {
      name: "cli-expense-tracker",
      desc: "Command-line transaction manager in C leveraging binary search trees for fast category indexing.",
      link: "https://github.com/MrunmayeeL"
    }
  ];

  const handleOpenModal = (project: ProjectData, tab: "overview" | "architecture") => {
    setSelectedProject(project);
    setModalTab(tab);
    setModalOpen(true);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Software applications, database platforms, AI tools, and embedded systems.</p>

        <div className="projects-grid-new">
          {projects.map((proj) => (
            <div className="project-card-new paper-card" key={proj.id}>
              
              <div className="proj-image-wrapper">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  loading="lazy"
                />
                <span className="proj-status-tag">{proj.status}</span>
              </div>

              <div className="proj-body">
                <div className="proj-badges">
                  {proj.badges.map((b, idx) => (
                    <span className={`badge ${b.toLowerCase().replace(" ", "-")}`} key={idx}>{b}</span>
                  ))}
                </div>
                
                <h3 className="proj-title">{proj.title}</h3>
                <p className="proj-desc">{proj.subtitle}</p>

                <div className="proj-meta-info">
                  <span><strong>Duration:</strong> {proj.duration}</span>
                  <span><strong>Role:</strong> {proj.role}</span>
                </div>

                <div className="proj-card-actions">
                  <button 
                    className="btn-primary" 
                    onClick={() => handleOpenModal(proj, "overview")}
                  >
                    <VisibilityIcon fontSize="small" /> Details
                  </button>
                  <button 
                    className="btn-secondary" 
                    onClick={() => handleOpenModal(proj, "architecture")}
                  >
                    <HubIcon fontSize="small" /> Architecture
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* More Projects on GitHub Block */}
        <div className="more-projects-block paper-card">
          <div className="more-projects-header">
            <div>
              <h3>Explore All Repositories on GitHub</h3>
              <p className="more-projects-subtitle">Utilities, libraries, standalone scripts, and course projects.</p>
            </div>
            <a 
              href="https://github.com/MrunmayeeL" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-secondary"
            >
              <GitHubIcon fontSize="small" /> GitHub Profile
            </a>
          </div>

          <div className="more-projects-list">
            {(showAllMoreProjects ? extraGithubProjects : extraGithubProjects.slice(0, 3)).map((item, idx) => (
              <a href={item.link} target="_blank" rel="noreferrer" className="more-proj-link" key={idx}>
                <span><strong>{item.name}</strong> — {item.desc}</span>
                <span className="arrow-link">↗</span>
              </a>
            ))}
          </div>

          <button 
            className="toggle-more-btn"
            onClick={() => setShowAllMoreProjects(!showAllMoreProjects)}
          >
            {showAllMoreProjects ? "Show Less" : "Show All Projects"}
          </button>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        initialTab={modalTab}
      />

      <style>{`
        .projects-section {
          padding: 60px 0;
        }

        .more-projects-block {
          margin-top: 48px;
          text-align: left;
          padding: 32px !important;
          border-left: 4px solid var(--accent-primary) !important;
        }

        .more-projects-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 20px;
        }

        @media (max-width: 640px) {
          .more-projects-header {
            flex-direction: column;
          }
        }

        .more-projects-block h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .more-projects-subtitle {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-bottom: 0;
        }

        .more-projects-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .more-proj-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          font-size: 0.9rem;
          color: var(--text-secondary) !important;
          transition: all 0.2s ease;
          background-color: rgba(255, 255, 255, 0.01);
          text-decoration: none;
        }

        .more-proj-link strong {
          color: var(--text-primary);
          font-family: 'JetBrains Mono', monospace;
        }

        .more-proj-link:hover {
          border-color: var(--accent-primary);
          background-color: rgba(201, 108, 74, 0.03);
          transform: translateX(4px);
          color: var(--accent-primary) !important;
        }

        .arrow-link {
          font-weight: 700;
          color: var(--accent-primary);
        }

        .toggle-more-btn {
          margin-top: 16px;
          background: none;
          border: 1px dashed var(--accent-primary);
          color: var(--accent-primary);
          padding: 8px 16px;
          border-radius: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .toggle-more-btn:hover {
          background-color: rgba(201, 108, 74, 0.08);
        }

        .projects-grid-new {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          text-align: left;
        }

        @media (max-width: 1024px) {
          .projects-grid-new {
            grid-template-columns: 1fr;
          }
        }

        .project-card-new {
          display: flex;
          flex-direction: column;
          padding: 0px !important;
          border-radius: 16px;
        }

        .proj-image-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          border-bottom: 1px solid var(--border-color);
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
        }

        .proj-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card-new:hover .proj-image-wrapper img {
          transform: scale(1.05);
        }

        .proj-status-tag {
          position: absolute;
          top: 12px;
          right: 12px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          font-weight: 700;
          background-color: var(--accent-primary);
          color: #ffffff;
          padding: 4px 8px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .proj-body {
          padding: 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .proj-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 14px;
        }

        .proj-title {
          font-size: 1.25rem;
          font-weight: 750;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 8px;
        }

        .proj-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 20px;
          flex: 1;
        }

        .proj-meta-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
          padding-top: 12px;
          border-top: 1px dashed var(--border-color);
        }

        .proj-meta-info strong {
          color: var(--text-primary);
        }

        .proj-card-actions {
          display: flex;
          gap: 12px;
          margin-top: auto;
        }

        .proj-card-actions button {
          flex: 1;
          font-size: 0.88rem;
          padding: 10px 16px;
        }
      `}</style>
    </section>
  );
}

export default Project;
