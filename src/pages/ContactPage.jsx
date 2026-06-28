import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { setVisible(true); }, []);

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div
      className="page-section page-section-beige"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease' }}
    >
      <div className="section-heading">
        <h2>Get In Touch</h2>
        <div className="accent" />
      </div>

      <p className="contact-intro">
        I'm actively looking for industrial placements from October 2026. Feel free
        to reach out — I'd love to connect.
      </p>

      {/* Contact cards */}
      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon">&#x1F4E7;</div>
          <div className="contact-label">Email</div>
          <div className="contact-value">
            <a href="mailto:nlakshika1999@gmail.com">nlakshika1999@gmail.com</a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon">&#x1F4BC;</div>
          <div className="contact-label">LinkedIn</div>
          <div className="contact-value">
            <a href="https://linkedin.com/in/lakshi-nantha" target="_blank" rel="noopener">
              linkedin.com/in/lakshi-nantha
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon">&#x1F4CD;</div>
          <div className="contact-label">Location</div>
          <div className="contact-value">London, UK</div>
          <div className="contact-extra">Open to remote &amp; on-site placements</div>
        </div>
      </div>

      {/* Form */}
      <div className="form-panel">
        <h3>Send a Message</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="What's this about?"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Write your message here..."
              className="form-input"
            />
          </div>

          <button type="submit" className="form-submit">Send Message</button>
        </form>

        {submitted && (
          <div className="form-success">&#x2705; Thank you! I'll be in touch soon.</div>
        )}
      </div>
    </div>
  );
}
