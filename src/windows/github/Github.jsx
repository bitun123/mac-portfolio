import React, { useState } from "react";
import MacWindow from "../MacWindow";
import github from "../../assets/github.json";
import "./github.scss";

import { motion } from "framer-motion";
import RepoModels from "./repo/RepoModels";

const GitCard = ({
  data = {
    id: 1,
    name: "",
    description: "",
    language: "",
    stargazers_count: 1,
    forks_count: 2,
    updated_at: "",
  },
  onClick,
}) => {
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

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: "#f1e05a",
      TypeScript: "#3178c6",
      Python: "#3572A5",
      Java: "#b07219",
      CSS: "#563d7c",
      SCSS: "#c6538c",
      HTML: "#e34c26",
      React: "#61dafb",
    };
    return colors[language] || "#858585";
  };

  return (
    <motion.div
      className="git-card"
      onClick={onClick}
      style={{ "--accent-color": data.color }}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="card-glow"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="card-header">
        <h3 className="card-title">{data.name}</h3>
        <span className="card-badge">Public</span>
      </div>
      <div className="card-meta">
        <div className="language-info">
          <span
            className="language-dot"
            style={{ backgroundColor: getLanguageColor(data.language) }}
          ></span>
          <span className="language-name">{data.language}</span>
        </div>
        <span className="updated-time">{formatDate(data.updated_at)}</span>
      </div>
    </motion.div>
  );
};

function Github({ windowName, windowsState, setWindowsState }) {
  const [selectedRepo, setSelectedRepo] = useState(null);
  return (
    <>
      <MacWindow
        windowName={windowName}
        windowsState={windowsState}
        setWindowsState={setWindowsState}
      >
        <div className="cards">
          {github.map((project) => {
            return (
              <GitCard
                key={project.id}
                data={project}
                onClick={() => setSelectedRepo(project)}
              />
            );
          })}
        </div>
      </MacWindow>
      {selectedRepo && (
        <RepoModels
          data={selectedRepo}
          onClose={() => setSelectedRepo(null)}
        />
      )}
    </>
  );
}

export default Github;
