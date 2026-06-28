import { useEffect, useState } from 'react';

const skillGroups = [
  { label: 'Languages', items: ['Java', 'Python', 'C', 'C++', 'SQL', 'JavaScript', 'HTML/CSS'] },
  { label: 'Frameworks', items: ['Spring Boot', 'TensorFlow', 'Keras', 'PyTorch', 'Scikit-Learn', 'Bootstrap'] },
  { label: 'Tools', items: ['Docker', 'GitHub', 'GitLab', 'Jupyter Notebook', 'IntelliJ IDEA', 'Selenium IDE'] },
  { label: 'Cloud & DB', items: ['AWS', 'MySQL'] },
];

export default function AboutPage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <div
      className="page-section page-section-cream"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease' }}
    >
      <div className="section-heading">
        <h2>About Me</h2>
        <div className="accent" />
      </div>

      <div className="about-grid">
        {/* Left */}
        <div className="about-left">
          <img src="/myimg.jpeg" alt="Lakshika Nanthakumaran" className="about-avatar" loading="lazy" />

          <div className="about-tags">
            {[
              '\uD83C\uDF93 MSc CS — UEL',
              '\uD83D\uDCCD London, UK',
              '\uD83D\uDDD3 Available Oct 2026',
              '\uD83D\uDCBC Seeking Placement',
              '\uD83D\uDD2C Deep Learning',
              '\u2601\uFE0F AWS Certified',
            ].map((t, i) => (
              <span key={i} className="about-tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <h3 className="about-subheading">Who I Am</h3>

          <div className="about-bio">
            <p>
              I am a final-year MSc Computer Science with Industrial Placement student
              at the University of East London, graduating in September 2026, and actively
              seeking an industrial placement from October 2026. I am targeting roles in
              Data Analytics, Big Data, and Backend Software Engineering.
            </p>
            <p>
              My technical foundation spans building RESTful APIs with Spring Boot and MySQL,
              applied deep learning research with TensorFlow and PyTorch, and cloud infrastructure
              on AWS. I have industry experience from my role as a Trainee Software Engineer at
              Codelantic PVT LTD — where I reduced QA time by 25% and improved transaction speed
              by 15% — and academic experience as an IT Demonstrator at the University of Jaffna,
              where I delivered 20+ lab sessions for undergraduate students.
            </p>
            <p>
              Beyond the technical, I am a FARS 2024 research presenter, a Student Voice Ambassador
              at UEL, and a career mentoring programme graduate. I bring clarity, reliability, and
              genuine curiosity to every team I join.
            </p>
          </div>

          <h3 className="about-subheading">Technical Skills</h3>

          <div className="skills-grid">
            {skillGroups.map(g => (
              <div key={g.label} className="skills-row">
                <strong className="skills-label">{g.label}:</strong>
                {g.items.map(i => (
                  <span key={i} className="pill pill-sm">{i}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
