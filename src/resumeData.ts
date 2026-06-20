export const resumeData = {
  name: 'Mehdi Majidi',
  title: 'Senior Front-End Engineer',
  summary:
    'Senior Front-End Engineer with 5+ years of experience building scalable, high-performance web applications using React and TypeScript. Experienced in Micro Frontend architecture, design systems, PWA, performance optimization, and modern frontend tooling. Passionate about writing clean, maintainable code and delivering excellent user experiences.',
  contact: {
    phone: '9374477013',
    email: 'mahdimajidi7526@gmail.com',
    location: 'Iran, Tehran',
    linkedin: 'https://www.linkedin.com/in/mahdi-majidi-1b34b018b/',
    github: 'https://github.com/mehdi7526',
  },
  skills: [
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Material UI (MUI)', 'Tailwind CSS'],
    },
    {
      title: 'State Management',
      items: ['Redux Toolkit', 'Context API'],
    },
    {
      title: 'Data Fetching & Server State',
      items: ['TanStack Query'],
    },
    {
      title: 'Routing',
      items: ['TanStack Router', 'React Router'],
    },
    {
      title: 'Architecture & Performance',
      items: [
        'Micro Frontends',
        'Design Systems',
        'Scalable Frontend Architecture',
        'PWA (Progressive Web Apps)',
        'Service Workers',
        'Code Splitting',
        'Lazy Loading',
        'Bundle Optimization',
        'Image Optimization',
        'Web Performance',
        'Core Web Vitals',
      ],
    },
    {
      title: 'Testing',
      items: ['Jest', 'React Testing Library'],
    },
    {
      title: 'Others',
      items: ['REST APIs', 'Native / Web Integration', 'AI-Assisted Development'],
    },
  ],
  education: [
    {
      year: '2022',
      degree: 'Master Economics',
      school: "Allameh Tabataba'i University",
    },
    {
      year: '2019',
      degree: 'Bachelor Economics',
      school: "Allameh Tabataba'i University",
    },
  ],
  languages: ['English (Professional)', 'Persian (Native)'],
  projects: [
    {
      name: 'Injast',
      domain: 'injast.life',
      url: 'https://injast.life',
    },
    {
      name: 'Tooko',
      domain: 'tooko.co',
      url: 'https://tooko.co',
    },
    {
      name: 'Danajou',
      domain: 'danajou.com',
      url: 'https://danajou.com',
    },
  ],
  experience: [
    {
      role: 'Frontend Lead',
      company: 'Injast (Entekhab Group)',
      period: 'Nov 2024 - Present',
      bullets: [
        'Lead frontend architecture and technical decisions across multiple products.',
        'Designed and implemented a scalable Micro Frontend Architecture to enable independent deployment, team autonomy, and long-term scalability.',
        'Developed and published a shared component library based on Material UI (MUI) to standardize UI/UX and accelerate development across multiple applications.',
        'Built scalable frontend applications using React, TypeScript, TanStack Query, TanStack Router, and Material UI.',
        'Implemented PWA features and Service Workers to deliver offline capabilities, caching strategies, and improved performance.',
        'Reduced bundle size through code splitting, lazy loading, dependency optimization, and build analysis.',
        'Improved visual quality and loading performance through responsive images, modern formats (WebP/AVIF), lazy loading, and asset optimization.',
        'Integrated web applications with native platforms and WebView communication layers.',
        'Architected frontend solutions with a focus on scalability, maintainability, and long-term product growth.',
        'Established frontend standards, code review processes, and scalable project structures.',
        'Leveraged AI-assisted development workflows to increase development speed and code quality.',
      ],
    },
    {
      role: 'Senior Front-End Developer',
      company: 'RayanTejaratDezpart',
      period: 'Feb 2024 - Oct 2024',
      bullets: [
        'Developed and maintained responsive web applications using React, TypeScript, and MUI.',
        'Used TanStack Query for server state management and TanStack Router for type-safe routing.',
        'Collaborated with designers to implement pixel-perfect and accessible interfaces.',
        'Implemented SSR and CSR for optimal performance and SEO.',
        'Improved application performance and reduced load times by optimizing assets, images, and API requests.',
      ],
    },
    {
      role: 'Front-End Developer',
      company: 'Zendegi Hooshmandaneh Mali',
      period: 'Jan 2021 - Jan 2024',
      bullets: [
        'Developed single-page applications (SPA) using React and Next.js.',
        'Built reusable components and maintained a consistent design system.',
        'Implemented SSR/CSR and optimized pages for better performance.',
        'Enhanced image quality and performance through proper sizing, lazy loading, and modern image formats.',
        'Ensured cross-browser compatibility and wrote unit tests for critical components.',
      ],
    },
    {
      role: 'Back-End Developer & Data Analyst',
      company: 'Daric Team',
      period: 'Jul 2019 - Jan 2021',
      bullets: [
        'Developed and maintained backend services for the accounting website system.',
        'Performed data mining and analysis of financial data.',
      ],
    },
  ],
  achievements: [
    'Designed and published a shared MUI-based component library adopted across multiple frontend applications.',
    'Implemented Micro Frontend architecture that improved team scalability and deployment independence.',
    'Reduced production bundle size and improved Core Web Vitals through performance optimization and asset management.',
    'Implemented PWA with Service Workers, improving offline experience and performance.',
  ],
};

export type ResumeData = typeof resumeData;
