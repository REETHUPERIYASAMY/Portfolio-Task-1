const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI not set in environment');
    return;
  }

  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // fail fast when DB is unreachable
  };

  const maxRetries = 5;
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await mongoose.connect(uri, opts);
      console.log('MongoDB connected successfully');
      return;
    } catch (err) {
      console.error(`MongoDB connect attempt ${attempt} failed:`, err.message);
      if (attempt === maxRetries) {
        console.error('Exceeded max MongoDB connection attempts');
        throw err;
      }
      // wait before retrying (exponential backoff)
      await new Promise((res) => setTimeout(res, 1000 * attempt));
    }
  }
};

module.exports = connectDB;