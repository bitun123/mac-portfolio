import React from "react";

import "./repoModels.scss";
import MacWindow from "../../MacWindow";


const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

  if (diffInHours < 24) {
    return `Updated ${diffInHours} hour${diffInHours !== 1 ? "s" : ""} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `Updated ${diffInDays} day${diffInDays !== 1 ? "s" : ""} ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `Updated ${diffInMonths} month${diffInMonths !== 1 ? "s" : ""} ago`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `Updated ${diffInYears} year${diffInYears !== 1 ? "s" : ""} ago`;
};

const RepoModal = ({ data, onClose }) => {
  if (!data) return null;

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: "#f1e05a",
      TypeScript: "#3178c6",
      Python: "#3572A5",
      Java: "#b07219",
      CSS: "#563d7c",
      SCSS: "#c6538c",
      HTML: "#e34c26",
      React: "#00a5d7",
    };
    return colors[language] || "#858585";
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Mac Window Title Bar */}
        <div className="modal-titlebar">
          <div className="window-controls">
            <button className="control-btn red" onClick={onClose}></button>
            <button className="control-btn yellow"></button>
            <button className="control-btn green"></button>
          </div>
          <h2 className="titlebar-title">{data.name}</h2>
        </div>

        {/* Modal Content */}
        <div className="modal-content">
          <div className="image">
            {data.image && (
              <div className="modal-image-container">
                <img src={data.image} alt={data.name} className="modal-image" />
              </div>
            )}
          </div>
          <div className="name">
            <span>{data.name}</span>
          </div>

          <div className="desc">
            <h1>
              <i className="ri-arrow-right-line"></i> About This Project
            </h1>
            {data.description && (
              <p className="modal-description">{data.description}</p>
            )}
          </div>
          <div className="technology-stack">
            {data.tags && data.tags.length > 0 && (
              <div className="modal-tags">
                <span className="tags-label">
                  <i className="ri-arrow-right-line"></i> Technology Stack
                </span>
                <div className="tags-list">
                  {data.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="key-features">
            {data.Key_Features && data.Key_Features.length > 0 && (
              <div className="modal-tags">
                <span className="tags-label">
                  {" "}
                  <i className="ri-arrow-right-line"></i> Key Features
                </span>
                <div className="tags-list">
                  {data.Key_Features.map((tag, index) => (
                    <div className="list">
                      <i class="ri-checkbox-circle-line"></i>
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="demo">
            <div className="modal-buttons">
              <a
                href={data.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="ri-github-fill"></i> View on GitHub
              </a>
              {data.homepage && (
                <a
                  href={data.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <i class="ri-arrow-right-line"></i>  View Project
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function RepoModels({ data, onClose }) {
  return (
<MacWindow>
    <RepoModal data={data} onClose={onClose} />
</MacWindow>
  );
}

export default RepoModels;
