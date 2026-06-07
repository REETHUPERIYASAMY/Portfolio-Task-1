# Personal Portfolio

This is a full-stack personal portfolio website designed to showcase projects and skills. The project is structured into a frontend and backend, utilizing modern web technologies.

## Project Structure

```
personal-portfolio
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── index.jsx
│   │   ├── App.jsx
│   │   ├── api
│   │   │   └── api.js
│   │   ├── components
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   └── ProjectDetail.jsx
│   │   └── styles
│   │       └── main.css
│   ├── package.json
│   ├── vite.config.js
│   └── .env.example
├── backend
│   ├── src
│   │   ├── server.js
│   │   ├── routes
│   │   │   └── projects.js
│   │   ├── controllers
│   │   │   └── projectsController.js
│   │   ├── models
│   │   │   └── projectModel.js
│   │   └── config
│   │       └── db.js
│   ├── package.json
│   ├── .env.example
│   ├── Procfile
│   └── Dockerfile
├── scripts
│   └── seed.js
├── .gitignore
├── docker-compose.yml
├── README.md
└── netlify.toml
```

## Technologies Used

- **Frontend**: React.js, Vite, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (or your choice of MySQL/PostgreSQL)
- **Deployment**: Heroku for backend, Netlify for frontend

## Setup Instructions

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your environment variables in a `.env` file based on the `.env.example`.
4. Start the server:
   ```
   node src/server.js
   ```

## Features

- Responsive design to showcase projects effectively.
- Dynamic fetching of project data from the backend.
- Detailed project pages for in-depth information.

## Deployment

- The frontend is deployed on Netlify. Ensure to configure the `netlify.toml` file for proper routing.
- The backend is deployed on Heroku. Use the `Procfile` for startup commands.

## License

This project is open-source and available under the MIT License.