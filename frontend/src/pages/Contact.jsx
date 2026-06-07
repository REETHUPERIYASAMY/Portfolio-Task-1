import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:230374.it@rmkec.ac.in?subject=${encodeURIComponent(
      `Portfolio Contact - ${form.name}`
    )}&body=${encodeURIComponent(
      `Name: ${form.name}
Email: ${form.email}

${form.message}`
    )}`;

    // open mail client (fallback). In production replace with API call.
    window.location.href = mailto;

    setSent(true);

    setForm({
      name: '',
      email: '',
      message: ''
    });

    // clear success message after a short delay
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="contact-section">
      <div className="contact-inner container">

        <header className="section-header">
          <span className="section-tag">CONTACT</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-lead">
            Have a project idea, internship opportunity, collaboration, or just want to say hello? Reach out — I reply quickly.
          </p>
        </header>

        <div className="contact-grid">

          {/* Left Side - Info Card */}
          <aside className="contact-info-card" aria-labelledby="contact-info-heading">
            <h3 id="contact-info-heading">Get In Touch</h3>

            <div className="info-item">
              <h4>Email</h4>
              <a className="info-link" href="mailto:230374.it@rmkec.ac.in">
                230374.it@rmkec.ac.in
              </a>
            </div>

            <div className="info-item">
              <h4>Location</h4>
              <p>Chennai, Tamil Nadu, India</p>
            </div>

            <div className="info-item">
              <h4>Availability</h4>
              <p>Open for internships and full-time opportunities</p>
            </div>

            <div className="info-item social">
              <h4>Social</h4>
              <div className="social-links">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </aside>

          {/* Right Side - Form */}
          <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
            <div className="field-row">
              <label className="field">
                <span className="label-text">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="field">
                <span className="label-text">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label className="field">
              <span className="label-text">Message</span>
              <textarea
                name="message"
                rows="7"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <div className="form-actions">
              <button type="submit" className="btn primary contact-btn">
                Send Message
              </button>

              {sent && (
                <p className="success-msg" role="status">
                  Email client opened successfully.
                </p>
              )}
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;