import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjectById } from '../api/api'; // ensure this path/file exists
import './ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const data = await fetchProjectById(id);
                setProject(data);
            } catch (err) {
                setError(err.message || String(err));
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchProject();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!project) return <div>Project not found</div>;

    // backend returns liveUrl / githubUrl; support both
    const liveLink = project.liveUrl || project.link || project.githubUrl;

    return (
        <div className="project-detail">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            {liveLink && (
                <a href={liveLink} target="_blank" rel="noopener noreferrer">View Project</a>
            )}
        </div>
    );
};

export default ProjectDetail;