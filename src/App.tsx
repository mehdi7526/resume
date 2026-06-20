import { useEffect, useMemo, useState } from 'react';
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
  Sparkles,
} from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import profilePhoto from './assets/mehdi-majidi.jpg';
import personalLogo from './assets/personal-logo.png';
import { commonData, type Locale, type ResumeLocaleData, resumeLocales } from './resumeData';

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

function getLocaleFromUrl(): Locale {
  if (typeof window === 'undefined') {
    return 'en';
  }

  return new URLSearchParams(window.location.search).get('lang') === 'fa' ? 'fa' : 'en';
}

function setLocaleInUrl(locale: Locale) {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', locale);
  window.history.replaceState(null, '', url);
}

function getContactItems(data: ResumeLocaleData) {
  return [
    { label: data.labels.phone, value: commonData.contact.phone, href: `tel:${commonData.contact.phone}`, icon: Phone },
    { label: data.labels.email, value: commonData.contact.email, href: `mailto:${commonData.contact.email}`, icon: Mail },
    { label: data.labels.location, value: data.location, href: undefined, icon: MapPin },
    { label: data.labels.linkedin, value: 'mahdi-majidi', href: commonData.contact.linkedin, icon: Linkedin },
    { label: data.labels.github, value: 'mehdi7526', href: commonData.contact.github, icon: Github },
  ];
}

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

function LanguageToggle({ locale, onToggle }: { locale: Locale; onToggle: () => void }) {
  return (
    <button className="language-toggle" type="button" onClick={onToggle} aria-label="Change language">
      <Languages size={16} />
      <span className={locale === 'fa' ? 'active' : undefined}>FA</span>
      <span className={locale === 'en' ? 'active' : undefined}>EN</span>
    </button>
  );
}

function Hero({ data, locale, onToggleLocale }: { data: ResumeLocaleData; locale: Locale; onToggleLocale: () => void }) {
  return (
    <header className="hero">
      <LanguageToggle locale={locale} onToggle={onToggleLocale} />
      <motion.div className="hero-copy" variants={stagger} initial="hidden" animate="visible">
        <motion.div className="hero-identity" variants={fadeUp}>
          <span className="hero-avatar">
            <img src={profilePhoto} alt={data.name} />
          </span>
          <div>
            <div className="status-pill">
              <span />
              {data.availability}
            </div>
            <p>{data.identityLine}</p>
          </div>
        </motion.div>
        <motion.h1 variants={fadeUp}>{data.name}</motion.h1>
        <motion.p className="hero-title" variants={fadeUp}>
          {data.title}
        </motion.p>
        <motion.p className="hero-summary" variants={fadeUp}>
          {data.summary}
        </motion.p>
        <motion.div className="hero-actions" aria-label="Primary contact links" variants={fadeUp}>
          <motion.a className="primary-action" href={`mailto:${commonData.contact.email}`} {...cardMotion}>
            <Mail size={18} />
            {data.actions.contact}
          </motion.a>
          <motion.a className="ghost-action" href={commonData.contact.linkedin} target="_blank" rel="noreferrer" {...cardMotion}>
            <Linkedin size={18} />
            {data.actions.linkedin}
          </motion.a>
          <motion.a className="ghost-action" href={commonData.contact.github} target="_blank" rel="noreferrer" {...cardMotion}>
            <Github size={18} />
            {data.actions.github}
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
          <strong>{data.heroCard.title}</strong>
          <span>{data.heroCard.subtitle}</span>
          <div className="architecture-stack">
            {data.heroCard.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}

function ContactPanel({ data }: { data: ResumeLocaleData }) {
  const contactItems = getContactItems(data);

  return (
    <motion.section
      className="panel contact-panel"
      aria-labelledby="contact-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.24 }}
    >
      <SectionHeading title={data.sections.contact} icon={Phone} />
      <div className="contact-list" id="contact-heading">
        {contactItems.map(({ label, value, href, icon: Icon }) => {
          const content = (
            <>
              <span className="contact-icon">
                <Icon size={17} />
              </span>
              <span>
                <small>{label}</small>
                <strong dir={href?.startsWith('tel:') ? 'ltr' : undefined}>{value}</strong>
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

function SkillsPanel({ data }: { data: ResumeLocaleData }) {
  return (
    <motion.section className="panel" aria-labelledby="skills-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
      <SectionHeading title={data.sections.skills} icon={Sparkles} />
      <div className="skills-stack" id="skills-heading">
        {data.skills.map((group) => (
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

function EducationPanel({ data }: { data: ResumeLocaleData }) {
  return (
    <motion.section className="panel compact-panel" aria-labelledby="education-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.28 }}>
      <SectionHeading title={data.sections.education} icon={GraduationCap} />
      <div className="stacked-list" id="education-heading">
        {data.education.map((item) => (
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

function LanguagesPanel({ data }: { data: ResumeLocaleData }) {
  return (
    <motion.section className="panel compact-panel" aria-labelledby="languages-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.28 }}>
      <SectionHeading title={data.sections.languages} icon={Languages} />
      <div className="language-list" id="languages-heading">
        {data.languages.map((language) => (
          <motion.span key={language} whileHover={{ y: -2, scale: 1.04 }} transition={{ type: 'spring', stiffness: 420, damping: 24 }}>
            {language}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}

function ExperienceTimeline({ data }: { data: ResumeLocaleData }) {
  return (
    <motion.section className="content-section" id="experience" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}>
      <SectionHeading eyebrow={data.sections.experienceEyebrow} title={data.sections.experience} icon={BriefcaseBusiness} />
      <motion.div className="timeline" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }}>
        {data.experience.map((item) => (
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

function Achievements({ data }: { data: ResumeLocaleData }) {
  return (
    <motion.section className="content-section" id="achievements" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.16 }}>
      <SectionHeading eyebrow={data.sections.achievementsEyebrow} title={data.sections.achievements} icon={Award} />
      <motion.div className="achievement-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
        {data.achievements.map((achievement, index) => (
          <motion.article className="achievement-card" key={achievement} variants={fadeUp} {...cardMotion}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{achievement}</p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

function SelectedWork({ data }: { data: ResumeLocaleData }) {
  return (
    <motion.section className="content-section" id="selected-work" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <SectionHeading eyebrow={data.sections.selectedWorkEyebrow} title={data.sections.selectedWork} icon={Globe2} />
      <motion.div className="work-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.22 }}>
        {commonData.projects.map((project, index) => (
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

function Footer({ data }: { data: ResumeLocaleData }) {
  return (
    <motion.footer className="footer" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
      <div>
        <img className="footer-logo" src={personalLogo} alt="" />
        <span>{data.name}</span>
      </div>
      <nav aria-label="Footer links">
        <a href={`mailto:${commonData.contact.email}`}>{data.labels.email}</a>
        <a href={commonData.contact.linkedin} target="_blank" rel="noreferrer">
          {data.actions.linkedin}
        </a>
        <a href={commonData.contact.github} target="_blank" rel="noreferrer">
          {data.actions.github}
        </a>
      </nav>
    </motion.footer>
  );
}

export function App() {
  const [locale, setLocale] = useState<Locale>(() => getLocaleFromUrl());
  const data = resumeLocales[locale];
  const appClassName = useMemo(() => `app-shell ${locale === 'fa' ? 'is-fa' : 'is-en'}`, [locale]);
  const toggleLocale = () => {
    setLocale((current) => {
      const nextLocale = current === 'en' ? 'fa' : 'en';
      setLocaleInUrl(nextLocale);
      return nextLocale;
    });
  };

  useEffect(() => {
    const syncLocaleFromUrl = () => setLocale(getLocaleFromUrl());
    window.addEventListener('popstate', syncLocaleFromUrl);
    return () => window.removeEventListener('popstate', syncLocaleFromUrl);
  }, []);

  return (
    <main className={appClassName} dir={data.dir} lang={locale}>
      <div className="ambient-grid" aria-hidden="true" />
      <Hero data={data} locale={locale} onToggleLocale={toggleLocale} />
      <div className="resume-layout">
        <aside className="sidebar" aria-label="Resume details">
          <ContactPanel data={data} />
          <SkillsPanel data={data} />
          <EducationPanel data={data} />
          <LanguagesPanel data={data} />
        </aside>
        <div className="main-content">
          <ExperienceTimeline data={data} />
          <SelectedWork data={data} />
          <Achievements data={data} />
        </div>
      </div>
      <Footer data={data} />
    </main>
  );
}
