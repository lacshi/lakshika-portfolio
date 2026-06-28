import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <div style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease' }}>
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-content">
          <img src="/myimg.jpeg" alt="Lakshika Nanthakumaran" className="hero-avatar" loading="lazy" />

          <h1 className="hero-name">Lakshika Nanthakumaran</h1>

          <p className="hero-role">
            MSc Computer Science Student &amp; Aspiring Data / Software Engineer
          </p>

          <p className="hero-tagline">
            From backend APIs to deep learning — building things that work.
          </p>

          <div className="hero-buttons">
            <Link to="/about" className="btn-filled">About Me</Link>
            <Link to="/contact" className="btn-outline">Contact Me</Link>
          </div>

          <div className="hero-pills">
            {['Java', 'Spring Boot', 'Python', 'AWS', 'SQL', 'Deep Learning'].map(s => (
              <span key={s} className="pill">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Teaser strip */}
      <section className="teaser-strip">
        <div className="teaser-grid">
          {[
            { icon: '\uD83D\uDCBB', label: '8+ APIs Built' },
            { icon: '\u2697\uFE0F', label: 'FARS 2024 Presenter' },
            { icon: '\u2601\uFE0F', label: 'AWS Certified' },
          ].map((item, i) => (
            <div key={i} className="teaser-card">
              <div className="teaser-icon">{item.icon}</div>
              <div className="teaser-label">{item.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
