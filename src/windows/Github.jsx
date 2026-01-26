import React, { useState } from "react";
import MacWindow from "./MacWindow";
import github from "../assets/github.json"
import "./github.scss"
 
const GitCard = ({data = {id:1,name:"",description:"",language:"",stargazers_count:1,forks_count:2,updated_at:""}, onClick})=>{
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
        
        if (diffInHours < 24) {
            return `Updated ${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
        }
        
        const diffInDays = Math.floor(diffInHours / 24);
        if (diffInDays < 30) {
            return `Updated ${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
        }
        
        const diffInMonths = Math.floor(diffInDays / 30);
        if (diffInMonths < 12) {
            return `Updated ${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
        }
        
        const diffInYears = Math.floor(diffInMonths / 12);
        return `Updated ${diffInYears} year${diffInYears !== 1 ? 's' : ''} ago`;
    };

    const getLanguageColor = (language) => {
        const colors = {
            'JavaScript': '#f1e05a',
            'TypeScript': '#3178c6',
            'Python': '#3572A5',
            'Java': '#b07219',
            'CSS': '#563d7c',
            'SCSS': '#c6538c',
            'HTML': '#e34c26',
            'React': '#61dafb',
        };
        return colors[language] || '#858585';
    };

    return (
        <div className="git-card" onClick={onClick}>
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
        </div>
    );
}

const RepoModal = ({ data, onClose }) => {
    if (!data) return null;

    const getLanguageColor = (language) => {
        const colors = {
            'JavaScript': '#f1e05a',
            'TypeScript': '#3178c6',
            'Python': '#3572A5',
            'Java': '#b07219',
            'CSS': '#563d7c',
            'SCSS': '#c6538c',
            'HTML': '#e34c26',
            'React': '#61dafb',
        };
        return colors[language] || '#858585';
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
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
                    {data.image && (
                        <div className="modal-image-container">
                            <img src={data.image} alt={data.name} className="modal-image" />
                        </div>
                    )}

                    {data.description && (
                        <p className="modal-description">{data.description}</p>
                    )}

                    <div className="modal-info-grid">
                        <div className="info-item">
                            <span className="info-label">Language</span>
                            <div className="info-value">
                                <span 
                                    className="language-dot-large" 
                                    style={{ backgroundColor: getLanguageColor(data.language) }}
                                ></span>
                                <span>{data.language}</span>
                            </div>
                        </div>

                        <div className="info-item">
                            <span className="info-label">Stars</span>
                            <span className="info-value">⭐ {data.stargazers_count}</span>
                        </div>

                        <div className="info-item">
                            <span className="info-label">Forks</span>
                            <span className="info-value">🔱 {data.forks_count}</span>
                        </div>

                        <div className="info-item">
                            <span className="info-label">Watchers</span>
                            <span className="info-value">👁️ {data.watchers_count}</span>
                        </div>

                        <div className="info-item">
                            <span className="info-label">Open Issues</span>
                            <span className="info-value">⚠️ {data.open_issues_count}</span>
                        </div>

                        <div className="info-item">
                            <span className="info-label">Size</span>
                            <span className="info-value">{(data.size / 1024).toFixed(2)} MB</span>
                        </div>

                        <div className="info-item">
                            <span className="info-label">Created</span>
                            <span className="info-value">{formatDate(data.created_at)}</span>
                        </div>

                        <div className="info-item">
                            <span className="info-label">Updated</span>
                            <span className="info-value">{formatDate(data.updated_at)}</span>
                        </div>
                    </div>

                    {data.tags && data.tags.length > 0 && (
                        <div className="modal-tags">
                            <span className="tags-label">Tags:</span>
                            <div className="tags-list">
                                {data.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="modal-buttons">
                        <a href={data.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            View on GitHub
                        </a>
                        {data.homepage && (
                            <a href={data.homepage} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                View Project
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Github() {
    const [selectedRepo, setSelectedRepo] = useState(null);

    return (
        <>
            <MacWindow>
                <div className="cards">
                    {
                        github.map((project) => {
                            return <GitCard key={project.id} data={project} onClick={() => setSelectedRepo(project)} />
                        })
                    }
                </div>
            </MacWindow>
            {selectedRepo && <RepoModal data={selectedRepo} onClose={() => setSelectedRepo(null)} />}
        </>
    );
}

export default Github;
