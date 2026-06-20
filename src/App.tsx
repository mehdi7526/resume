import {
  Award,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Globe2,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Sparkles,
} from 'lucide-react';
import { resumeData } from './resumeData';

const contactItems = [
  { label: 'Phone', value: resumeData.contact.phone, href: `tel:${resumeData.contact.phone}`, icon: Phone },
  { label: 'Email', value: resumeData.contact.email, href: `mailto:${resumeData.contact.email}`, icon: Mail },
  { label: 'Location', value: resumeData.contact.location, href: undefined, icon: MapPin },
  { label: 'LinkedIn', value: 'mahdi-majidi', href: resumeData.contact.linkedin, icon: Linkedin },
  { label: 'GitHub', value: 'mehdi7526', href: resumeData.contact.github, icon: Github },
];

function SectionHeading({
  eyebrow,
  title,
  icon: Icon,
}: {
  eyebrow?: string;
  title: string;
  icon: typeof Sparkles;
}) {
  return (
    <div className="section-heading">
      <div className="section-icon">
        <Icon size={18} strokeWidth={2.4} />
      </div>
      <div>
        {eyebrow ? <p>{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header className="hero">
      <div className="hero-copy">
        <div className="status-pill">
          <span />
          Available for senior frontend opportunities
        </div>
        <h1>{resumeData.name}</h1>
        <p className="hero-title">{resumeData.title}</p>
        <p className="hero-summary">{resumeData.summary}</p>
        <div className="hero-actions" aria-label="Primary contact links">
          <a className="primary-action" href={`mailto:${resumeData.contact.email}`}>
            <Mail size={18} />
            Contact Me
          </a>
          <a className="ghost-action" href={resumeData.contact.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a className="ghost-action" href={resumeData.contact.github} target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <span className="signal-dot dot-one" />
        <span className="signal-dot dot-two" />
        <span className="signal-dot dot-three" />
        <div className="orbital-ring ring-one" />
        <div className="orbital-ring ring-two" />
        <div className="orbital-ring ring-three" />
        <div className="core-card">
          <Code2 size={34} />
          <strong>React</strong>
          <span>TypeScript / Micro Frontends / PWA</span>
        </div>
      </div>
    </header>
  );
}

function ContactPanel() {
  return (
    <section className="panel contact-panel" aria-labelledby="contact-heading">
      <SectionHeading title="Contact" icon={Phone} />
      <div className="contact-list" id="contact-heading">
        {contactItems.map(({ label, value, href, icon: Icon }) => {
          const content = (
            <>
              <span className="contact-icon">
                <Icon size={17} />
              </span>
              <span>
                <small>{label}</small>
                <strong>{value}</strong>
              </span>
            </>
          );

          return href ? (
            <a key={label} className="contact-item" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {content}
            </a>
          ) : (
            <div key={label} className="contact-item">
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function SkillsPanel() {
  return (
    <section className="panel" aria-labelledby="skills-heading">
      <SectionHeading title="Skills" icon={Sparkles} />
      <div className="skills-stack" id="skills-heading">
        {resumeData.skills.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-cloud">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationPanel() {
  return (
    <section className="panel compact-panel" aria-labelledby="education-heading">
      <SectionHeading title="Education" icon={GraduationCap} />
      <div className="stacked-list" id="education-heading">
        {resumeData.education.map((item) => (
          <article key={`${item.year}-${item.degree}`}>
            <span>{item.year}</span>
            <strong>{item.degree}</strong>
            <p>{item.school}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function LanguagesPanel() {
  return (
    <section className="panel compact-panel" aria-labelledby="languages-heading">
      <SectionHeading title="Languages" icon={Languages} />
      <div className="language-list" id="languages-heading">
        {resumeData.languages.map((language) => (
          <span key={language}>{language}</span>
        ))}
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  return (
    <section className="content-section" id="experience">
      <SectionHeading eyebrow="Professional path" title="Experience" icon={BriefcaseBusiness} />
      <div className="timeline">
        {resumeData.experience.map((item) => (
          <article className="timeline-item" key={`${item.role}-${item.company}`}>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <span>{item.period}</span>
              </div>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="content-section" id="achievements">
      <SectionHeading eyebrow="Selected outcomes" title="Key Achievements" icon={Award} />
      <div className="achievement-grid">
        {resumeData.achievements.map((achievement, index) => (
          <article className="achievement-card" key={achievement}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{achievement}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section className="content-section" id="selected-work">
      <SectionHeading eyebrow="Live products" title="Selected Work" icon={Globe2} />
      <div className="work-grid">
        {resumeData.projects.map((project, index) => (
          <a className="work-card" href={project.url} target="_blank" rel="noreferrer" key={project.domain}>
            <span className="work-index">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{project.name}</h3>
              <p>{project.domain}</p>
            </div>
            <span className="work-link" aria-hidden="true">
              <ExternalLink size={18} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <Rocket size={20} />
        <span>{resumeData.name}</span>
      </div>
      <nav aria-label="Footer links">
        <a href={`mailto:${resumeData.contact.email}`}>Email</a>
        <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={resumeData.contact.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </nav>
    </footer>
  );
}

export function App() {
  return (
    <main className="app-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <Hero />
      <div className="resume-layout">
        <aside className="sidebar" aria-label="Resume details">
          <ContactPanel />
          <SkillsPanel />
          <EducationPanel />
          <LanguagesPanel />
        </aside>
        <div className="main-content">
          <ExperienceTimeline />
          <SelectedWork />
          <Achievements />
        </div>
      </div>
      <Footer />
    </main>
  );
}
