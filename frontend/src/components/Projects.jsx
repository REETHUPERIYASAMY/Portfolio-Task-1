import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { fetchProjects } from '../api/api';

const SAMPLE_PROJECTS = [
  {
    _id: 'sample-1',
    title: 'Sample Project — Task Manager',
    description: 'A lightweight task manager built with React and Node.js. Includes authentication and CRUD features.',
    liveUrl: 'https://example.com/sample-task-manager',
    githubUrl: 'https://github.com/your/sample-task-manager',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB']
  },
  {
    _id: 'sample-2',
    title: 'Sample Project — Weather App',
    description: 'Responsive weather app that consumes a public API and displays forecasts with a clean UI.',
    liveUrl: 'https://example.com/sample-weather',
    githubUrl: 'https://github.com/your/sample-weather',
    technologies: ['React', 'OpenWeatherMap', 'CSS Grid']
  },
  {
    _id: 'sample-3',
    title: 'Sample Project — Portfolio Boilerplate',
    description: 'A production-ready portfolio template with routing, responsive layout, and CMS-friendly content.',
    liveUrl: 'https://example.com/sample-portfolio',
    githubUrl: 'https://github.com/your/sample-portfolio',
    technologies: ['React', 'Vite', 'Netlify']
  }
];

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [usedFallback, setUsedFallback] = useState(false);

    useEffect(() => {
        let mounted = true;
        const getProjects = async () => {
            try {
                const data = await fetchProjects();
                if (!mounted) return;
                setProjects(Array.isArray(data) ? data : []);
                setUsedFallback(false);
            } catch (err) {
                // If API fails or DB is unreachable, use sample projects as fallback.
                if (!mounted) return;
                console.error('Projects fetch failed, using fallback sample projects:', err);
                setError('Unable to load projects from server — showing sample projects.');
                setProjects(SAMPLE_PROJECTS);
                setUsedFallback(true);
            } finally {
                if (!mounted) return;
                setLoading(false);
            }
        };

        getProjects();
        return () => { mounted = false; };
    }, []);

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1rem',marginBottom:'1rem'}}>
                  <h2 className="section-title">My Projects</h2>
                  {usedFallback && <div className="state-message error small">Offline: showing sample projects</div>}
                </div>

                {loading && <div className="state-message">Loading projects...</div>}
                {error && !usedFallback && <div className="state-message error">Error: {error}</div>}
                {!loading && projects.length === 0 && (
                    <div className="state-message">No projects found</div>
                )}

                <div className="projects-grid">
                    {projects.map(project => (
                        <ProjectCard key={project._id || project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;