# Personal Portfolio Website

A modern Full Stack Personal Portfolio Website built using React, Node.js, Express.js, and MongoDB to showcase my projects, skills, achievements, and professional profile.

---

## 📌 Project Overview

This project was developed as part of my internship to gain hands-on experience in full-stack web development and deployment.

The portfolio serves as a centralized platform to showcase:

* Personal profile
* Technical skills
* Projects
* Achievements
* Research publications
* Contact information

The application follows a modern client-server architecture with a React frontend and Node.js backend connected to MongoDB.

---

## 🚀 Features

### Frontend

* Responsive user interface
* Modern Hero section
* Navigation bar
* About Me section
* Projects showcase
* Project detail pages
* Contact page
* Mobile-friendly design
* React Router navigation

### Backend

* REST API using Express.js
* MongoDB integration with Mongoose
* Project data management
* Environment variable configuration
* API endpoints for project retrieval

### Database

* MongoDB Atlas cloud database
* Project information storage
* Easy scalability for future enhancements

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* React Router DOM
* Axios
* Vite

### Backend

* Node.js
* Express.js
* Mongoose
* Dotenv
* CORS

### Database

* MongoDB Atlas

### Version Control

* Git
* GitHub

---

## 📂 Project Structure

```text
personal-portfolio/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── index.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env
│
├── scripts/
├── README.md
└── package.json
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/REETHUPERIYASAMY/Portfolio-Task-1.git
```

```bash
cd Portfolio-Task-1
```

---

## Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
NODE_ENV=development
```

Start backend server:

```bash
npm start
```

Server runs on:

```text
http://localhost:5000
```

---

## Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## MongoDB Configuration

1. Create a MongoDB Atlas account.
2. Create a cluster.
3. Create a database user.
4. Whitelist your IP address.
5. Obtain the connection string.
6. Add the connection string to `.env`.

Example:

```env
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

---

## API Endpoints

### Get All Projects

```http
GET /api/projects
```

### Get Project By ID

```http
GET /api/projects/:id
```

---

## Future Enhancements

* Admin Dashboard
* Authentication & Authorization
* Blog Section
* Dark Mode
* Resume Download
* Project Filtering
* Project Search
* Email Integration
* Visitor Analytics

---

## Learning Outcomes

Through this project, I gained practical experience in:

* React Component Architecture
* Routing using React Router
* REST API Development
* Express.js Backend Development
* MongoDB Integration
* Mongoose ODM
* Environment Variable Management
* Git & GitHub Workflow
* Full Stack Application Development
* Debugging and Deployment

---

## Author

### Reethu P

B.Tech Information Technology

Full Stack Developer

GitHub:
https://github.com/REETHUPERIYASAMY

LinkedIn:
(www.linkedin.com/in/reethu-p)

Email:
[230374.it@rmkec.ac.in](mailto:230374.it@rmkec.ac.in)

---

## License

This project is developed for educational and internship purposes.
