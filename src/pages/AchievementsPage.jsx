import { useEffect, useState } from 'react';

const cards = [
  {
    icon: '\uD83C\uDFC5',
    title: 'Certifications',
    subtext: 'Professional credentials and verified learning',
    items: [
      'AWS Academy Cloud Foundations',
      'IBM Python for Data Science',
      'Microsoft Introduction to Data Centres',
      'IBM Introduction to Cloud Development',
      'Diploma in Fluent English — DMI',
      'English Language Proficiency Certificate — London',
    ],
  },
  {
    icon: '\uD83D\uDD2C',
    title: 'Academic & Research',
    subtext: 'Research presentations and dissertation work',
    items: [
      'Poster Presenter, FARS 2024 — Deep Learning Model for Urban Area Detection from Satellite Imagery, Sri Lanka',
      'MSc Dissertation: Interpretability-Driven Evaluation of Vision Transformers in Diabetic Retinopathy Progression Staging (submission Sep 2026)',
      'BSc Dissertation: U-Net Segmentation Model for Urban Detection — high accuracy on Sri Lankan satellite imagery dataset',
    ],
  },
  {
    icon: '\uD83C\uDF1F',
    title: 'Leadership & Community',
    subtext: 'Roles beyond the classroom',
    items: [
      'Career Mentoring Programme Graduate — University of East London',
      'Student Voice Ambassador, UEL — Dec 2025 to Present',
      'Mentored undergraduate students in programming labs and workshops',
      'Academic Sub-warden, Aanandacoomaraswamy Girls\' Hostel — supervised academic and residential welfare for 100+ students',
      'Technical Support Volunteer, URSA 2024 Jaffna International Research Conference — managed 10+ projector systems across 3 venues',
    ],
  },
];

export default function AchievementsPage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <div
      className="page-section page-section-beige"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease' }}
    >
      <div className="section-heading">
        <h2>Achievements &amp; Certifications</h2>
        <div className="accent" />
      </div>

      <div className="achievements-list">
        {cards.map((card, ci) => (
          <div key={ci} className="achievement-card">
            <div className="achievement-icon">{card.icon}</div>
            <h3 className="achievement-title">{card.title}</h3>
            <p className="achievement-sub">{card.subtext}</p>
            <ul className="achievement-list">
              {card.items.map((item, ii) => (
                <li key={ii}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
