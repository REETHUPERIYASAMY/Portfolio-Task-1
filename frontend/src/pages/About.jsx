import React from 'react';

const About = () => {
  return (
    <section className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Passionate Developer & Continuous Learner
          </h2>
          <p className="section-subtitle">
            Transforming ideas into impactful digital solutions through
            innovation, problem-solving, and modern technologies.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <h3>Who I Am</h3>

            <p>
              Hi, I'm <strong>Reethu P</strong>, a B.Tech Information Technology
              student and aspiring Full Stack Developer with a strong interest
              in building scalable web applications and solving real-world
              problems through technology.
            </p>

            <p>
              My development journey started with web technologies and gradually
              expanded into full-stack development using React.js, Java, Spring
              Boot, MySQL, and MongoDB. I enjoy designing intuitive user
              interfaces while also building robust backend systems.
            </p>

            <p>
              Beyond development, I actively improve my problem-solving skills
              through Data Structures & Algorithms and have worked on multiple
              academic and personal projects that strengthened my practical
              knowledge of software engineering.
            </p>

            <p>
              I also published a research paper titled
              <em>
                {' '}
                "An Automated Tool for Parsing of Social Media Feeds of the
                Suspects for the Ease of Investigation"
              </em>
              , which enhanced my research, analytical, and technical writing
              skills.
            </p>
          </div>

          <aside className="about-sidebar">
            <div className="skill-card">
              <h3>Technical Skills</h3>

              <div className="skills-list">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>Java</span>
                <span>Spring Boot</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>MySQL</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Git</span>
                <span>GitHub</span>
              </div>
            </div>

            <div className="achievement-card">
              <h3>Highlights</h3>

              <ul>
                <li>📚 Published Research Paper</li>
                <li>💻 Built Multiple Full Stack Projects</li>
                <li>🧩 Active DSA & LeetCode Learner</li>
                <li>🚀 Exploring Cloud & Modern Web Technologies</li>
                <li>🎯 Preparing for Software Development Roles</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;