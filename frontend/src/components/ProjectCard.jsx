import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    const liveLink = project?.liveUrl || project?.link;
    const github = project?.githubUrl || project?.github;

    return (
        <article className="project-card premium">
            <header className="project-card-head">
              <h3 className="project-title">{project?.title || 'Untitled'}</h3>
            </header>

            <p className="project-desc">{project?.description || ''}</p>

            {Array.isArray(project?.technologies) && project.technologies.length > 0 && (
              <div className="project-tags">
                {project.technologies.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            )}

            <footer className="project-card-footer">
              <div className="project-actions">
                {github && <a href={github} target="_blank" rel="noopener noreferrer" className="btn small outline">GitHub</a>}
                {liveLink && <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn small">Live Demo</a>}
              </div>
            </footer>
        </article>
    );
};

export default ProjectCard;