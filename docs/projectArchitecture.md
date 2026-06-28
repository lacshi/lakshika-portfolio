# Lakshika Portfolio — Project Documentation

## Overview

**Lakshika Nanthakumaran's portfolio website** — a single-page application (SPA) built with React and Vite that showcases her background as an MSc Computer Science student, her experience, achievements, and contact information. The site is designed as a professional landing page for recruiters and employers.

---

## Technologies Used

| Layer | Technology |
|-------|-----------|
| **UI Library** | React 18.3 |
| **Routing** | React Router DOM 6.28 |
| **Build Tool** | Vite 6.0 |
| **Language** | JavaScript (JSX) |
| **Styling** | Plain CSS (no framework) |
| **Fonts** | Google Fonts — Playfair Display (headings), Lato (body) |
| **Package Manager** | npm |
| **Static Assets** | Public image (`myimg.jpeg`) |

---

## Project Structure

```
D:\MaisonLakshi\
├── docs/
│   └── projectArchitecture.md          # This file
├── public/
│   └── myimg.jpeg                      # Static image asset (not currently imported)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                  # Fixed top navigation bar
│   │   └── Footer.jsx                  # Site footer with links
│   ├── pages/
│   │   ├── HomePage.jsx                # Home / Hero page
│   │   ├── AboutPage.jsx               # About Me with skills
│   │   ├── AchievementsPage.jsx        # Certifications, research, leadership
│   │   ├── ExperiencePage.jsx          # Timeline + Education
│   │   └── ContactPage.jsx             # Contact cards + message form
│   ├── App.jsx                         # Root component (routes setup)
│   ├── App.css                         # All component/page styles
│   ├── index.css                       # CSS variables, resets, base typography
│   └── main.jsx                        # Entry point (React root + BrowserRouter)
├── index.html                          # HTML shell (font loading, meta tags)
├── package.json                        # Dependencies & scripts
├── vite.config.js                      # Vite configuration
└── README.md                           # (if exists)
```

---

## Color Theme

The project uses a warm, coffee-inspired palette:

| CSS Variable | Hex Value | Usage |
|-------------|-----------|-------|
| `--espresso` | `#2C1A0E` | Navbar/footer backgrounds, main headings |
| `--coffee` | `#6F4E37` | Primary accent, buttons, hover states, timeline dots |
| `--khaki` | `#C3B091` | Card borders, decor accents, secondary borders |
| `--beige` | `#F5F0E8` | Section backgrounds (alternate), skill pills |
| `--cream` | `#FAF7F2` | Main page background, cards, form panels |
| `--gold` | `#A0845C` | Defined in `:root` but not currently used |

---

## Style & Design System

### Typography
- **Headings:** `Playfair Display` (serif, 600 weight)
- **Body / Navigation:** `Lato` (sans-serif, 300/400/700 weights)

### Layout Patterns
- **Flexbox-based** layout (`.app` column layout, `.navbar-inner` space-between, `.hero-content` centered)
- **CSS Grid** used selectively (about grid, contact cards grid, education grid)
- **Responsive breakpoints:** 768px (tablet) and 600px (mobile)
- **Sticky/fixed navbar** with 64px height and `padding-top: 64px` on main content
- **Max content width:** 1140px (navbar inner), 860px (timeline/contact/education), 700px (hero)

### Reusable Components (CSS classes)
- `.btn-filled` / `.btn-outline` — Primary and outline buttons
- `.pill` / `.pill-sm` — Skill tag pills
- `.card` — Generic card with hover border/shadow effect
- `.section-heading` — Section title + decorative accent bar
- `.page-section` / `.page-section-beige` / `.page-section-cream` — Page section wrappers

### Animation
- Page-level **fade-in** on mount using React state + inline opacity transition (0.4s ease)
- **Timeline entries** animate in with `fadeUp` keyframe (translateY + opacity)
- **Navbar** has smooth color transitions on hover/active states
- **Cards** (`achievement-card`, `contact-card`) lift on hover with `translateY(-3px)`

---

## Routes & Pages

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `HomePage` | Hero section with avatar, tagline, skill pills, and teaser stats |
| `/about` | `AboutPage` | Bio, personal tags, and technical skills grouped by category |
| `/achievements` | `AchievementsPage` | Three cards: Certifications, Academic/Research, Leadership/Community |
| `/experience` | `ExperiencePage` | Vertical timeline of work roles + education grid |
| `/contact` | `ContactPage` | Contact info cards + message form (client-side only, no backend) |

---

## Functionalities Implemented

### ✅ Navigation
- Fixed top navbar with 5 links using `NavLink` (active state tracking)
- Mobile hamburger toggle (state-driven `open`/`close`)
- Logo links to home
- Active page visually indicated via `--khaki` color and bottom border (desktop) / left border (mobile)

### ✅ Home Page (Hero)
- Animated fade-in on mount
- Avatar placeholder (initials "LN")
- Name, role title, tagline
- Two CTA buttons: "About Me" (filled) and "Contact Me" (outline)
- Skill pills row (Java, Spring Boot, Python, AWS, SQL, Deep Learning)
- Teaser strip with 3 stat cards (8+ APIs Built, FARS 2024 Presenter, AWS Certified)

### ✅ About Page
- Avatar placeholder
- 6 personal info tags (degree, location, availability, etc.)
- Bio paragraphs (3 sections)
- Skills grid grouped into: Languages, Frameworks, Tools, Cloud & DB
- Each skill rendered as a pill badge

### ✅ Experience Page
- Vertical timeline with connecting line and dots
- 4 timeline entries: Student Voice Ambassador, IT Demonstrator, Trainee SE, Maths Teacher
- Each entry has role, company, period, and either paragraph or bullet-point descriptions
- Staggered fade-in animation (0.1s delay per entry)
- Education section below timeline with 2 cards (MSc and BSc)

### ✅ Achievements Page
- 3 grouped cards: Certifications, Academic & Research, Leadership & Community
- Each card has an icon, title, subtitle, and bullet list
- Hover lift effect

### ✅ Contact Page
- Introductory text
- 3 contact cards: Email (with mailto link), LinkedIn (external link), Location (London)
- Contact form with 4 fields: Full Name, Email, Subject, Message
- Form validation via `required` attribute
- Client-side success message (5-second timeout, no backend submission yet)
- Form fields reset on submit

### ✅ Footer
- Copyright notice (2026)
- Degree program line
- LinkedIn profile external link

### ✅ Responsive Design
- Mobile navigation toggle at 768px
- Single-column layout for about, contact, and education grids on mobile
- Reduced font/component sizes for small screens (600px)
- Desktop navbar hidden on mobile and vice versa via media queries

### ✅ Global Styles
- CSS custom properties for consistent theming
- CSS reset (`box-sizing: border-box`, margin/padding reset)
- Smooth scrolling
- Font smoothing

---

## Not Yet Implemented (Potential Enhancements)

- **Contact form backend:** The form currently shows a success message on submit but does not send data anywhere (no API endpoint, no email service)
- **Image usage:** `public/myimg.jpeg` exists but is not referenced in any component (avatar is currently a styled `div` with initials)
- **404 page:** No catch-all route for unknown paths
- **Scroll-to-top:** On route change, page position does not reset to top
- **SEO / meta tags:** No per-page SEO meta descriptions or Open Graph tags
- **Smooth page transitions:** Currently a simple opacity fade via inline style; no route transition library
- **Dark mode:** Not supported
- **Lazy loading:** Pages could be lazy-loaded with `React.lazy` and `Suspense`
- **Analytics:** No tracking or analytics integrated

---

## Available Scripts

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
```

---

## Entry Flow

1. `index.html` loads Google Fonts, mounts `<div id="root">`, and loads `/src/main.jsx`
2. `main.jsx` creates a React root wrapped in `<StrictMode>` and `<BrowserRouter>`
3. `<App>` renders `<Navbar>`, `<Routes>` (5 page routes), and `<Footer>`
4. Each page component manages its own fade-in visibility via `useState` + `useEffect`
