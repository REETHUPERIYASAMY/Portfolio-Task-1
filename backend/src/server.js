const express = require('express');
const cors = require('cors');
const projectRoutes = require('./routes/projects');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // built-in body parser
// Allow Vite dev server origin (port 3000) and any other trusted origins during development
const allowedOrigins = [ 'http://localhost:3000', 'http://127.0.0.1:3000' ];
app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (e.g. curl, server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      // allow for production variable or deny
      return callback(null, false);
    }
  },
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.options('*', cors()); // preflight

// health route
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Routes
app.use('/api/projects', projectRoutes);

// Connect to DB and start server
(async () => {
  try {
    await connectDB();
  } catch (err) {
    console.error('Continuing without DB connection (requests will fail).');
  }

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})();

// centralized error logging
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

// handle unhandled rejections
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});