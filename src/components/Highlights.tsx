import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import EngineeringIcon from '@mui/icons-material/Engineering';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArticleIcon from '@mui/icons-material/Article';

interface StatCardProps {
  number: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  accent: string;
}

function StatCard({ number, label, sublabel, icon, accent }: StatCardProps) {
  return (
    <div className="stat-card paper-card" style={{ '--accent-color': accent } as React.CSSProperties}>
      <div className="stat-icon-wrapper">
        {icon}
      </div>
      <div className="stat-data">
        <h3 className="stat-number">{number}</h3>
        <p className="stat-label">{label}</p>
        <span className="stat-sublabel">{sublabel}</span>
      </div>
    </div>
  );
}

function Highlights() {
  const highlights = [
    {
      number: "8.70",
      label: "CGPA (VNIT Nagpur)",
      sublabel: "B.Tech in Computer Science & Engineering",
      icon: <SchoolIcon fontSize="medium" />,
      accent: "var(--accent-secondary)"
    },
    {
      number: "AIR 5401",
      label: "JEE Mains Rank",
      sublabel: "Top 0.5% nationally",
      icon: <EmojiEventsIcon fontSize="medium" />,
      accent: "var(--accent-primary)"
    },
    {
      number: "3",
      label: "Internships",
      sublabel: "NatWest Group • IIT Roorkee • IvLabs",
      icon: <EngineeringIcon fontSize="medium" />,
      accent: "var(--accent-support)"
    },
    {
      number: "4",
      label: "Research Papers",
      sublabel: "IEEE BigData • CVIP • ASME IMECE • ICAMMS",
      icon: <ArticleIcon fontSize="medium" />,
      accent: "var(--accent-highlight)"
    }
  ];

  return (
    <section className="highlights-section" id="highlights">
      <div className="container">
        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <StatCard
              key={index}
              number={item.number}
              label={item.label}
              sublabel={item.sublabel}
              icon={item.icon}
              accent={item.accent}
            />
          ))}
        </div>
      </div>

      <style>{`
        .highlights-section {
          padding: 20px 0;
          margin-top: -40px;
          position: relative;
          z-index: 5;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .highlights-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .highlights-grid {
            grid-template-columns: 1fr;
          }
        }

        .stat-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px !important;
          border-left: 4px solid var(--accent-color) !important;
        }

        .stat-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(201, 108, 74, 0.06);
          color: var(--accent-color);
          flex-shrink: 0;
        }

        .stat-data {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .stat-number {
          font-size: 1.55rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          line-height: 1.1;
          font-family: 'JetBrains Mono', monospace;
        }

        .stat-label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-top: 2px;
        }

        .stat-sublabel {
          font-size: 0.72rem;
          color: var(--text-secondary);
          margin-top: 1px;
        }
      `}</style>
    </section>
  );
}

export default Highlights;

