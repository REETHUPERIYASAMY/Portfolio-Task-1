import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const fetchProjects = async () => {
    try {
        const response = await axios.get(`${API_URL}/projects`);
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};

export const fetchProjectById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/projects/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching project with id ${id}:`, error);
        throw error;
    }
};