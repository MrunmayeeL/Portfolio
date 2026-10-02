import React from "react";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SchoolIcon from '@mui/icons-material/School';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

function Leadership() {
  return (
    <section className="leadership-section" id="leadership">
      <div className="container">
        <h2 className="section-title">Positions of Responsibility</h2>
        <p className="section-subtitle">Mentorship, student leadership, and technical event organization.</p>

        <div className="leadership-grid">
          <div className="leadership-main paper-card">
            <div className="lead-header">
              <PeopleOutlineIcon className="lead-icon" />
              <h3>Student Mentor</h3>
            </div>
            <div className="lead-body">
              <p>
                Selected as a senior-student mentor serving as a role model and guide for a group of first-year undergraduate students, providing guidance on academics, opportunities, campus life, and navigating the transition into college.
              </p>
              <ul>
                <li><strong>Mentorship:</strong> Serve as a trusted senior point of contact, guiding students through academics, campus life, extracurriculars, and opportunities available at VNIT.</li>
                <li><strong>Career Guidance:</strong> Help mentees understand how to approach technical learning, projects, internships, and early career preparation through practical, experience-based guidance.</li>
                <li><strong>Peer Development:</strong>Encourage mentees to explore beyond coursework, develop their interests, and make informed decisions about their college journey.</li>
              </ul>
            </div>
          </div>

          <div className="leadership-sub paper-card">
            <div className="lead-header">
              <SchoolIcon className="lead-icon" />
              <h3>Class & Event Leadership</h3>
            </div>
            <div className="workshops-list">
              <div className="workshop-item">
                <h5>First Year Class Representative (CR)</h5>
                <p>Served as the primary coordinator between 100+ first-year Computer Science students and department faculty, managing academic schedules, lab sessions, and student queries.</p>
                <span className="ws-date">2023 - 2024</span>
              </div>
              <div className="workshop-item">
                <h5 style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <EventAvailableIcon fontSize="inherit" /> Event Head @ IvLabs
                </h5>
                <p>Organized and conducted technical robotics workshops and competition events, designing hands-on tutorials for participants and managing event execution.</p>
                <span className="ws-date">2024 - Present</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .leadership-section {
          padding: 60px 0;
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: 3.5fr 2.5fr;
          gap: 24px;
          text-align: left;
        }

        @media (max-width: 1024px) {
          .leadership-grid {
            grid-template-columns: 1fr;
          }
        }

        .lead-header {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 14px;
          margin-bottom: 20px;
        }

        .lead-header h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .lead-icon {
          color: var(--accent-primary);
        }

        .lead-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .lead-body strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .lead-body ul {
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .lead-body li {
          font-size: 0.92rem;
        }

        .workshops-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .workshop-item {
          border-left: 2px solid var(--accent-support);
          padding-left: 14px;
          position: relative;
        }

        .workshop-item h5 {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .workshop-item p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.4;
          margin-top: 4px;
        }

        .ws-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          color: var(--accent-primary);
          display: inline-block;
          margin-top: 4px;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}

export default Leadership;

