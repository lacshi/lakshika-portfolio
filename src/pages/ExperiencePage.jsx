import { useEffect, useState } from 'react';

const timelineEntries = [
  {
    role: 'Student Voice Ambassador',
    company: 'University of East London',
    period: 'Dec 2025 \u2013 Present',
    type: 'text',
    content: 'Acting as a representative between students and the university, gathering feedback and advocating for improvements to the student experience.',
  },
  {
    role: 'IT Demonstrator',
    company: 'University of Jaffna',
    period: 'Dec 2024 \u2013 Aug 2025',
    type: 'bullets',
    content: [
      'Delivered 20+ hands-on lab sessions in Python, MS Office, and E-commerce',
      'Marked assessments and provided actionable student feedback',
      'Guided students through coding challenges and software troubleshooting',
      'Supported invigilation for 150+ students across examinations',
      'Assisted external degree programme delivery for 80+ learners',
    ],
  },
  {
    role: 'Trainee Software Engineer (Backend)',
    company: 'Codelantic PVT LTD',
    period: 'Apr 2024 \u2013 Oct 2024',
    type: 'bullets',
    content: [
      'Developed 8+ RESTful APIs using Spring Boot & MySQL — \u219115% transaction speed',
      'Created 40+ automated test cases — \u219325% QA time',
      'Resolved 100+ SonarQube issues, improving maintainability',
      'Worked in an Agile team of 9: stand-ups, sprint planning, code reviews',
      'Managed deployments using GitLab CI/CD pipelines',
    ],
  },
  {
    role: 'Maths & Science Teacher / Administrative Support',
    company: 'PEC Tuition Centre',
    period: 'Oct 2018 \u2013 Dec 2019',
    type: 'bullets',
    content: [
      'Taught Mathematics and Science to students across varied age groups',
      'Managed records, attendance logs, and class schedules',
      'Utilised MS Office for lesson planning and reporting',
    ],
  },
];

export default function ExperiencePage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <div
      className="page-section page-section-cream"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease' }}
    >
      <div className="section-heading">
        <h2>Experience</h2>
        <div className="accent" />
      </div>

      {/* Timeline */}
      <div className="timeline-container">
        <div className="timeline-line" />

        {timelineEntries.map((entry, i) => (
          <div
            key={i}
            className="timeline-entry"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="timeline-dot" />

            <div className="timeline-card">
              <div className="timeline-header">
                <h3 className="timeline-role">{entry.role}</h3>
                <span className="timeline-period">{entry.period}</span>
              </div>

              <div className="timeline-company">{entry.company}</div>

              {entry.type === 'text' ? (
                <p className="timeline-desc">{entry.content}</p>
              ) : (
                <ul className="timeline-bullets">
                  {entry.content.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="education-section">
        <h3 className="education-heading">Education</h3>
        <div className="section-heading" style={{ marginBottom: '32px' }}>
          <div className="accent" />
        </div>

        <div className="education-grid">
          <div className="edu-card">
            <div className="edu-icon">&#x1F393;</div>
            <h4 className="edu-title">MSc Computer Science with Industrial Placement</h4>
            <p className="edu-meta">University of East London &middot; Sep 2025 – Present</p>
            <p className="edu-modules">
              <strong>Modules:</strong> Advanced Software Engineering, Big Data Analytics, AI &amp; Machine Vision, Cloud Computing
            </p>
          </div>

          <div className="edu-card">
            <div className="edu-icon">&#x1F393;</div>
            <h4 className="edu-title">BSc (Hons) Information Technology</h4>
            <p className="edu-meta">University of Jaffna &middot; Jul 2020 – Oct 2024</p>
            <p className="edu-modules">
              <strong>Modules:</strong> OOP, Data Structures, DBMS, Computer Networks, Machine Learning, Software Engineering, Computer Security
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
