import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <div>
            {/* Home only renders page-specific sections.
                Header/Footer are rendered once by App */}
            <Hero />
            <section className="section">
              <Projects />
            </section>
        </div>
    );
};

export default Home;