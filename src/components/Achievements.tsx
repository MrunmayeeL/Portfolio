import React from "react";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

interface Achievement {
  title: string;
  category: string;
  description: string;
  metric?: string;
}

function Achievements() {
  const list: Achievement[] = [
    {
      title: "AIR 5401 — JEE Mains",
      category: "Academic Rank",
      description: "Secured All India Rank 5401 in JEE Mains among over 1 million candidates nationwide, securing admission to B.Tech Computer Science at VNIT Nagpur.",
      metric: "Top 0.5% Nationally"
    },
    {
      title: "Ignite Prize — NIDAR",
      category: "Competition",
      description: "National-level UAV Autonomy Competition ranker (Top 5 out of 100+ teams nationwide), demonstrating end-to-end autonomous search & payload delivery.",
      metric: "Top 5 Nationwide"
    },
    {
      title: "First Runner-Up — Drone Helix",
      category: "Robotics Competition",
      description: "SVNIT Surat autonomous drone challenge showcasing precision flight control, obstacle avoidance, and dynamic navigation.",
      metric: "1st Runner-Up"
    },
    {
      title: "Conference Research Publications",
      category: "Research",
      description: "Published and accepted research papers across IEEE BigData 2025, CVIP 2026, ASME IMECE 2026, and ICAMMS 2026.",
      metric: "4 Papers"
    }
  ];

  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        <h2 className="section-title">Key Achievements & Honors</h2>
        <p className="section-subtitle">Academic ranks, competition awards, and publication milestones.</p>

        <div className="achievements-grid-layout">
          {list.map((item, idx) => (
            <div className="achievement-card paper-card" key={idx}>
              <div className="ach-header">
                <span className="ach-icon-wrapper">
                  <EmojiEventsIcon fontSize="small"/>
                </span>
                <span className="ach-category">{item.category}</span>
              </div>
              <h3 className="ach-title">{item.title}</h3>
              <p className="ach-desc">{item.description}</p>
              {item.metric && (
                <div className="ach-metric-tag">
                  <span>{item.metric}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .achievements-section {
          padding: 60px 0;
        }

        .achievements-grid-layout {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          text-align: left;
        }

        @media (max-width: 1024px) {
          .achievements-grid-layout {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .achievements-grid-layout {
            grid-template-columns: 1fr;
          }
        }

        .achievement-card {
          padding: 24px !important;
          display: flex;
          flex-direction: column;
          border-top: 3px solid var(--accent-primary) !important;
        }

        .ach-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
        }

        .ach-icon-wrapper {
          color: var(--accent-highlight);
          display: flex;
          align-items: center;
        }

        .ach-category {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          flex: 1;
        }

        .ach-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 8px;
        }

        .ach-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 16px;
          flex: 1;
        }

        .ach-metric-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--accent-primary);
          background-color: rgba(201, 108, 74, 0.05);
          border: 1px dashed var(--accent-primary);
          padding: 4px 10px;
          border-radius: 6px;
          align-self: flex-start;
        }
      `}</style>
    </section>
  );
}

export default Achievements;

