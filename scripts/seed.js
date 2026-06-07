const mongoose = require('mongoose');
const Project = require('../backend/src/models/projectModel');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/personal-portfolio', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected...');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// Sample project data
const projects = [
    {
        title: 'Project One',
        description: 'This is a description for project one.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/user/project-one',
    },
    {
        title: 'Project Two',
        description: 'This is a description for project two.',
        technologies: ['React', 'Node.js', 'MongoDB'],
        link: 'https://github.com/user/project-two',
    },
    {
        title: 'Project Three',
        description: 'This is a description for project three.',
        technologies: ['Python', 'Django', 'PostgreSQL'],
        link: 'https://github.com/user/project-three',
    },
];

// Seed the database
const seedDatabase = async () => {
    try {
        await Project.deleteMany({});
        await Project.insertMany(projects);
        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close();
    }
};

// Run the seed function
seedDatabase();