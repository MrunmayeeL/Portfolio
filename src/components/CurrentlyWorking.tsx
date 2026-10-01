import React from "react";
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import VisibilityIcon from '@mui/icons-material/Visibility';

function CurrentlyWorking() {
  const items = [
    {
      title: "Backend & Systems Development",
      description: "Building production-ready backend services using Java, Spring Boot, PostgreSQL, and Oracle SQL with robust REST APIs.",
      icon: <StorageIcon fontSize="small"/>,
      tag: "SDE"
    },
    {
      title: "Automated Program Repair & Agents",
      description: "Developing AST-based code analysis pipelines and LLM agent frameworks for automated localized bug fixing.",
      icon: <CodeIcon fontSize="small"/>,
      tag: "Software AI"
    },
    {
      title: "Computer Vision & OCR Pipelines",
      description: "Engineering image processing and OCR pipelines (PaddleOCR, OpenCV, SBERT) for automated text and derivation evaluation.",
      icon: <VisibilityIcon fontSize="small"/>,
      tag: "Vision / AI"
    },
    {
      title: "Autonomous Systems & Controls",
      description: "Working on telemetry communication and control software (MAVLink, Python, C++) for autonomous aerial platforms.",
      icon: <AutoAwesomeIcon fontSize="small"/>,
      tag: "Systems"
    }
  ];

  return (
    <section className="currently-working-section" id="currently-working">
      <div className="container">
        <div className="working-card paper-card">
          <div className="working-header">
            <span className="live-badge">
              <span className="live-dot"></span> Currently Engaged In
            </span>
            <p className="working-subtitle">Core software engineering focus, AI application development, and academic projects.</p>
          </div>
          <div className="working-grid">
            {items.map((item, idx) => (
              <div className="working-item" key={idx}>
                <div className="working-item-icon">
                  {item.icon}
                </div>
                <div className="working-item-body">
                  <div className="working-item-title-row">
                    <h4 className="working-item-title">{item.title}</h4>
                    <span className="working-item-tag">{item.tag}</span>
                  </div>
                  <p className="working-item-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .currently-working-section {
          padding: 20px 0;
        }

        .working-card {
          padding: 40px !important;
          border: 1px solid var(--border-color);
          background-color: var(--card-bg);
          box-shadow: 0 4px 20px var(--shadow-color);
        }

        .working-header {
          margin-bottom: 32px;
          text-align: left;
        }

        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--accent-primary);
          border: 1px solid rgba(201, 108, 74, 0.2);
          background-color: rgba(201, 108, 74, 0.05);
          padding: 4px 10px;
          border-radius: 6px;
        }

        .live-dot {
          width: 6px;
          height: 6px;
          background-color: var(--accent-primary);
          border-radius: 50%;
          display: inline-block;
          animation: blink 1.2s infinite alternate;
        }

        @keyframes blink {
          from { opacity: 0.3; }
          to { opacity: 1; }
        }

        .working-subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-top: 8px;
        }

        .working-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        @media (max-width: 768px) {
          .working-grid {
            grid-template-columns: 1fr;
          }
        }

        .working-item {
          display: flex;
          gap: 16px;
          padding: 16px;
          border-radius: 10px;
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }

        .working-item:hover {
          border-color: var(--border-color);
          background-color: rgba(44, 36, 29, 0.02);
        }
        
        .dark-mode .working-item:hover {
          background-color: rgba(255, 255, 255, 0.01);
        }

        .working-item-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(201, 108, 74, 0.06);
          color: var(--accent-primary);
          flex-shrink: 0;
          border: 1px solid var(--border-color);
        }

        .working-item-body {
          display: flex;
          flex-direction: column;
          text-align: left;
          flex: 1;
        }

        .working-item-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }

        .working-item-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .working-item-tag {
          font-size: 0.68rem;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          background-color: var(--border-color);
          color: var(--text-secondary);
          padding: 2px 6px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .working-item-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-top: 4px;
        }
      `}</style>
    </section>
  );
}

export default CurrentlyWorking;

