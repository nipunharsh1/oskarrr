import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';

export default function ProjectGallery({ onSelectImage }) {
  const [selectedProjectId, setSelectedProjectId] = useState(PROJECTS[0].id);

  const activeProject = PROJECTS.find(p => p.id === selectedProjectId) || PROJECTS[0];

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <div>
          <div className="section-pretitle">SELECTED MONOGRAPHS</div>
          <h2 className="section-title">FEATURED PROJECTS</h2>
        </div>

        <div className="project-tabs">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              className={`project-tab ${selectedProjectId === project.id ? 'active' : ''}`}
              onClick={() => setSelectedProjectId(project.id)}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '32px', maxWidth: '640px' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {activeProject.subtitle}
        </p>
        <span style={{ 
          fontFamily: 'var(--font-mono)', 
          fontSize: '0.75rem', 
          color: 'var(--text-muted)',
          display: 'inline-block',
          marginTop: '8px'
        }}>
          {activeProject.year} • {activeProject.count}
        </span>
      </div>

      <div className="project-display">
        {activeProject.images.map((item, idx) => (
          <div 
            key={item.id} 
            className="project-card"
            onClick={() => onSelectImage({
              ...item,
              series: activeProject.title,
              year: activeProject.year
            })}
          >
            <div className="project-card-image-wrap">
              <img 
                src={item.url} 
                alt={item.title} 
                className="project-card-image" 
                loading="lazy"
              />
            </div>
            <div className="project-card-info">
              <span className="project-card-title">{item.title}</span>
              <span className="project-card-exif">{item.exif || `0${idx + 1}`}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
