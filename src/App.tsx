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
import { motion, type Variants } from 'motion/react';
import profilePhoto from './assets/mehdi-majidi.jpg';
import { resumeData } from './resumeData';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const cardMotion = {
  whileHover: { y: -5, scale: 1.01 },
  whileTap: { scale: 0.985 },
  transition: { type: 'spring', stiffness: 360, damping: 26 },
};

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
      <motion.div className="hero-copy" variants={stagger} initial="hidden" animate="visible">
        <motion.div className="hero-identity" variants={fadeUp}>
          <span className="hero-avatar">
            <img src={profilePhoto} alt="Mehdi Majidi" />
          </span>
          <div>
            <div className="status-pill">
              <span />
              Available for senior frontend opportunities
            </div>
            <p>Tehran-based senior frontend engineer</p>
          </div>
        </motion.div>
        <motion.h1 variants={fadeUp}>{resumeData.name}</motion.h1>
        <motion.p className="hero-title" variants={fadeUp}>
          {resumeData.title}
        </motion.p>
        <motion.p className="hero-summary" variants={fadeUp}>
          {resumeData.summary}
        </motion.p>
        <motion.div className="hero-actions" aria-label="Primary contact links" variants={fadeUp}>
          <motion.a className="primary-action" href={`mailto:${resumeData.contact.email}`} {...cardMotion}>
            <Mail size={18} />
            Contact Me
          </motion.a>
          <motion.a className="ghost-action" href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" {...cardMotion}>
            <Linkedin size={18} />
            LinkedIn
          </motion.a>
          <motion.a className="ghost-action" href={resumeData.contact.github} target="_blank" rel="noreferrer" {...cardMotion}>
            <Github size={18} />
            GitHub
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-visual"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
      >
        <span className="signal-dot dot-one" />
        <span className="signal-dot dot-two" />
        <span className="signal-dot dot-three" />
        <div className="orbital-ring ring-one" />
        <div className="orbital-ring ring-two" />
        <div className="orbital-ring ring-three" />
        <motion.div
          className="core-card"
          whileHover={{ y: -8, rotateX: 2, rotateY: -3 }}
          transition={{ type: 'spring', stiffness: 220, damping: 22 }}
        >
          <Code2 size={34} />
          <strong>React</strong>
          <span>TypeScript / Micro Frontends / PWA</span>
          <div className="architecture-stack">
            <span>Design Systems</span>
            <span>Core Web Vitals</span>
            <span>AI-Assisted DX</span>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}

function ContactPanel() {
  return (
    <motion.section
      className="panel contact-panel"
      aria-labelledby="contact-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.24 }}
    >
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
            <motion.a key={label} className="contact-item" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" {...cardMotion}>
              {content}
            </motion.a>
          ) : (
            <motion.div key={label} className="contact-item" {...cardMotion}>
              {content}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

function SkillsPanel() {
  return (
    <motion.section className="panel" aria-labelledby="skills-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
      <SectionHeading title="Skills" icon={Sparkles} />
      <div className="skills-stack" id="skills-heading">
        {resumeData.skills.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-cloud">
              {group.items.map((item) => (
                <motion.span key={item} whileHover={{ y: -2, scale: 1.04 }} transition={{ type: 'spring', stiffness: 420, damping: 24 }}>
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function EducationPanel() {
  return (
    <motion.section className="panel compact-panel" aria-labelledby="education-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.28 }}>
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
    </motion.section>
  );
}

function LanguagesPanel() {
  return (
    <motion.section className="panel compact-panel" aria-labelledby="languages-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.28 }}>
      <SectionHeading title="Languages" icon={Languages} />
      <div className="language-list" id="languages-heading">
        {resumeData.languages.map((language) => (
          <motion.span key={language} whileHover={{ y: -2, scale: 1.04 }} transition={{ type: 'spring', stiffness: 420, damping: 24 }}>
            {language}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}

function ExperienceTimeline() {
  return (
    <motion.section className="content-section" id="experience" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}>
      <SectionHeading eyebrow="Professional path" title="Experience" icon={BriefcaseBusiness} />
      <motion.div className="timeline" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }}>
        {resumeData.experience.map((item) => (
          <motion.article className="timeline-item" key={`${item.role}-${item.company}`} variants={fadeUp}>
            <div className="timeline-marker" aria-hidden="true" />
            <motion.div className="timeline-card" {...cardMotion}>
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
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

function Achievements() {
  return (
    <motion.section className="content-section" id="achievements" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.16 }}>
      <SectionHeading eyebrow="Selected outcomes" title="Key Achievements" icon={Award} />
      <motion.div className="achievement-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
        {resumeData.achievements.map((achievement, index) => (
          <motion.article className="achievement-card" key={achievement} variants={fadeUp} {...cardMotion}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{achievement}</p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

function SelectedWork() {
  return (
    <motion.section className="content-section" id="selected-work" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <SectionHeading eyebrow="Live products" title="Selected Work" icon={Globe2} />
      <motion.div className="work-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.22 }}>
        {resumeData.projects.map((project, index) => (
          <motion.a className="work-card" href={project.url} target="_blank" rel="noreferrer" key={project.domain} variants={fadeUp} {...cardMotion}>
            <span className="work-index">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{project.name}</h3>
              <p>{project.domain}</p>
            </div>
            <span className="work-link" aria-hidden="true">
              <ExternalLink size={18} />
            </span>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}

function Footer() {
  return (
    <motion.footer className="footer" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
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
    </motion.footer>
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
