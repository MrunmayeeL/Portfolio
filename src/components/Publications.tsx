import React, { useState } from "react";
import ShareIcon from '@mui/icons-material/Share';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import BookIcon from '@mui/icons-material/Book';

interface PublicationData {
  title: string;
  authors: string;
  venue: string;
  status: "Published" | "In Press" | "Accepted";
  abstract: string;
  keywords: string[];
  bibtex: string;
  citation: string;
  doiLink?: string;
}

function Publications() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(type);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const publications: PublicationData[] = [
    {
      title: "A Visual-to-Symbolic Pipeline for Automated Verification of Handwritten Mathematical Derivations Using Multimodal LLMs",
      authors: "Hrishikesh Vichare, Arjun Jaishankar SV, Avinav Mendu, Mrunmayee N. Limaye, Praveen Kumar",
      venue: "11th International Conference on Computer Vision & Image Processing (CVIP 2026)",
      status: "In Press",
      abstract: "Automated verification of handwritten mathematical derivations requires reliable transcription of symbolic notation from images and step-by-step logical consistency evaluation. We propose a four-layer visual-to-symbolic verification pipeline evaluating multimodal LLMs across 66 real handwritten student pages. Gemini achieved 93.3% verdict accuracy and 78.3% exact score match in rubric-based step-continuity grading.",
      keywords: ["Computer Vision", "Multimodal LLMs", "Symbolic Verification", "OCR Grading", "Pattern Recognition"],
      bibtex: `@inproceedings{vichare2026visual,\n  title={A Visual-to-Symbolic Pipeline for Automated Verification of Handwritten Mathematical Derivations Using Multimodal LLMs},\n  author={Vichare, Hrishikesh and Jaishankar SV, Arjun and Mendu, Avinav and Limaye, Mrunmayee N. and Kumar, Praveen},\n  booktitle={11th International Conference on Computer Vision \\& Image Processing (CVIP)},\n  year={2026}\n}`,
      citation: "Vichare, H., Jaishankar SV, A., Mendu, A., Limaye, M. N., & Kumar, P. (2026). A Visual-to-Symbolic Pipeline for Automated Verification of Handwritten Mathematical Derivations Using Multimodal LLMs. 11th International Conference on Computer Vision & Image Processing (CVIP 2026)."
    },
    {
      title: "Prompted to Fly: Translating Free-Form Instructions into Schema-Constrained Mission Generation for UAVs using LLMs",
      authors: "A. Sharma, M. Ravikiran, S. Chakrabarty, R. Saluja, M. Limaye, H. Kolhe, and S. Samiron",
      venue: "IEEE International Conference on Big Data (BigData 2025) · Macau, China (pp. 7278–7286)",
      status: "Published",
      abstract: "A system that translates natural-language operator instructions into schema-constrained UAV mission plans using large language models, enabling non-expert users to command autonomous drones through free-form text.",
      keywords: ["LLMs for Robotics", "UAV Mission Planning", "NLP", "Schema Constraints", "IEEE BigData"],
      bibtex: `@inproceedings{sharma2025prompted,\n  title={Prompted to Fly: Translating Free-Form Instructions into Schema-Constrained Mission Generation for UAVs using LLMs},\n  author={Sharma, A. and Ravikiran, M. and Chakrabarty, S. and Saluja, R. and Limaye, M. and Kolhe, H. and Samiron, S.},\n  booktitle={IEEE International Conference on Big Data (BigData)},\n  pages={7278--7286},\n  year={2025},\n  doi={10.1109/BigData66926.2025.11401432}\n}`,
      citation: "Sharma, A., et al. (2025). Prompted to Fly: Translating Free-Form Instructions into Schema-Constrained Mission Generation for UAVs using LLMs. IEEE International Conference on Big Data (BigData), pp. 7278-7286.",
      doiLink: "https://doi.org/10.1109/BigData66926.2025.11401432"
    },
    {
      title: "ATLAS: A Cooperative Aerial System for Large-Scale Search and Delivery",
      authors: "Harshal Kolhe, Spruha Kshirsagar, Mrunmayee Limaye, Sanchet Dhalwar, Ishani Khaty, Vishnu S, Ajinkya Baxy",
      venue: "ASME International Mechanical Engineering Congress & Exposition (IMECE India 2026)",
      status: "In Press",
      abstract: "A distributed fleet of aerial agents using shared communication meshes to dynamically map and scan massive geographic areas. This framework is designed for disaster response, search-and-rescue, and area coverage.",
      keywords: ["Multi-Drone Coordination", "Aerial Human Detection", "Coverage Path Planning", "Autonomous UAVs"],
      bibtex: `@inproceedings{kolhe2026atlas,\n  title={ATLAS: A Cooperative Aerial System for Large-Scale Search and Delivery},\n  author={Kolhe, Harshal and Kshirsagar, Spruha and Limaye, Mrunmayee and Dhalwar, Sanchet and Khaty, Ishani and Vishnu, S. and Baxy, Ajinkya},\n  booktitle={ASME International Mechanical Engineering Congress \\& Exposition (IMECE India)},\n  year={2026}\n}`,
      citation: "Kolhe, H., Kshirsagar, S., Limaye, M., et al. (2026). ATLAS: A Cooperative Aerial System for Large-Scale Search and Delivery. ASME IMECE India 2026."
    },
    {
      title: "A Multi-Agent Drone System for Real-Time Victim Detection and Aid Delivery",
      authors: "S. Kshirsagar, H. Kolhe, R. Deshmukh, K. Ayush, S. Dhalwar, S. Biswas, M. Limaye, and S. S. Chiddarwar",
      venue: "International Conference on Advances in Mechanical and Manufacturing Systems (ICAMMS) · VNIT Nagpur, 2026",
      status: "In Press",
      abstract: "Cooperative multi-UAV framework combining area coverage, coordination algorithms, localization, and real-time YOLO-based victim detection for autonomous aid delivery in disaster response.",
      keywords: ["Multi-UAV", "Disaster Response", "Computer Vision", "UAV Autonomy", "RTK"],
      bibtex: `@inproceedings{kshirsagar2026multi,\n  title={A Multi-Agent Drone System for Real-Time Victim Detection and Aid Delivery},\n  author={Kshirsagar, S. and Kolhe, H. and Deshmukh, R. and Ayush, K. and Dhalwar, S. and Biswas, S. and Limaye, M. and Chiddarwar, S. S.},\n  booktitle={International Conference on Advances in Mechanical and Manufacturing Systems (ICAMMS)},\n  year={2026}\n}`,
      citation: "Kshirsagar, S., Kolhe, H., Limaye, M., et al. (2026). A Multi-Agent Drone System for Real-Time Victim Detection and Aid Delivery. ICAMMS 2026."
    }
  ];

  return (
    <section className="publications-section" id="publications">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        <p className="section-subtitle">Conference papers in computer vision, LLM agent pipelines, and autonomous multi-agent systems.</p>

        <div className="publications-list">
          {publications.map((pub, idx) => (
            <div className="publication-card paper-card" key={idx}>
              <div className="pub-header">
                <div className="pub-badge-row">
                  <span className={`pub-status-tag ${pub.status.toLowerCase().replace(" ", "-")}`}>
                    {pub.status}
                  </span>
                  <span className="pub-type-tag"><BookIcon fontSize="inherit"/> Conference Paper</span>
                </div>
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-venue">{pub.venue}</p>
              </div>

              <details className="pub-details-dropdown">
                <summary className="pub-details-summary">View Abstract & Details</summary>
                <div className="pub-details-body">
                  <div className="details-block">
                    <h5>Abstract</h5>
                    <p>{pub.abstract}</p>
                  </div>
                  <div className="details-block">
                    <h5>Keywords</h5>
                    <div className="pub-keywords-chips">
                      {pub.keywords.map((kw, kIdx) => (
                        <span className="kw-chip" key={kIdx}>{kw}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </details>

              <div className="pub-actions">
                <button 
                  className="btn-secondary font-mono" 
                  onClick={() => handleCopy(pub.bibtex, `bib-${idx}`)}
                >
                  <ShareIcon fontSize="small" /> 
                  {copiedId === `bib-${idx}` ? "Copied BibTeX!" : "Copy BibTeX"}
                </button>
                <button 
                  className="btn-secondary font-mono" 
                  onClick={() => handleCopy(pub.citation, `cite-${idx}`)}
                >
                  <FileCopyIcon fontSize="small" /> 
                  {copiedId === `cite-${idx}` ? "Copied Citation!" : "Copy Citation"}
                </button>
                {pub.doiLink && (
                  <a href={pub.doiLink} target="_blank" rel="noreferrer" className="btn-secondary">
                    [IEEE Link ↗]
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .publications-section {
          padding: 60px 0;
        }

        .publications-list {
          display: flex;
          flex-direction: column;
          gap: 28px;
          text-align: left;
        }

        .publication-card {
          border-left: 4px solid var(--accent-support) !important;
          padding: 32px !important;
        }

        .pub-badge-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .pub-status-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 4px;
          text-transform: uppercase;
        }

        .pub-status-tag.published {
          background-color: var(--accent-support);
          color: #ffffff;
        }

        .pub-status-tag.in-press, .pub-status-tag.accepted {
          background-color: var(--accent-primary);
          color: #ffffff;
        }

        .pub-type-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .pub-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .pub-authors {
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-top: 6px;
          font-weight: 500;
        }

        .pub-venue {
          font-size: 0.88rem;
          font-style: italic;
          color: var(--text-secondary);
          margin-top: 4px;
        }

        .pub-details-dropdown {
          margin-top: 16px;
          border-top: 1px solid var(--border-color);
          padding-top: 14px;
        }

        .pub-details-summary {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--accent-primary);
          cursor: pointer;
          outline: none;
          user-select: none;
          padding: 4px 0;
        }

        .pub-details-summary:hover {
          color: var(--accent-secondary);
        }

        .pub-details-body {
          padding-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .details-block h5 {
          font-size: 0.78rem;
          font-family: 'JetBrains Mono', monospace;
          text-transform: uppercase;
          color: var(--accent-primary);
          margin-bottom: 4px;
        }

        .details-block p {
          font-size: 0.9rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .pub-keywords-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .kw-chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          background-color: var(--border-color);
          color: var(--text-secondary);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .pub-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 20px;
          border-top: 1px dashed var(--border-color);
          padding-top: 16px;
        }

        .pub-actions button, .pub-actions a {
          font-size: 0.82rem;
          padding: 8px 14px;
        }
      `}</style>
    </section>
  );
}

export default Publications;

