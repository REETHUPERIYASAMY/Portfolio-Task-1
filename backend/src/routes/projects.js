const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

// Get all projects
router.get('/', projectsController.getAllProjects);

// Get a single project by ID
router.get('/:id', projectsController.getProjectById);

// Create a new project
router.post('/', projectsController.createProject);

// Update an existing project
router.put('/:id', projectsController.updateProject);

// Delete a project
router.delete('/:id', projectsController.deleteProject);

module.exports = router;