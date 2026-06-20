export type Locale = "en" | "fa";

export const commonData = {
  contact: {
    phone: "+98 9374477013",
    email: "mahdimajidi7526@gmail.com",
    linkedin: "https://www.linkedin.com/in/mahdi-majidi-1b34b018b/",
    github: "https://github.com/mehdi7526",
  },
  projects: [
    {
      name: "Injast",
      domain: "injast.life",
      url: "https://injast.life",
    },
    {
      name: "Tooko",
      domain: "tooko.co",
      url: "https://tooko.co",
    },
    {
      name: "Danajou",
      domain: "danajou.com",
      url: "https://danajou.com",
    },
  ],
};

export const resumeLocales = {
  en: {
    dir: "ltr",
    langLabel: "فارسی",
    name: "Mehdi Majidi",
    title: "Senior Front-End Engineer",
    location: "Iran, Tehran",
    availability: "Available for senior frontend opportunities",
    identityLine: "Tehran-based senior frontend engineer",
    summary:
      "Senior Front-End Engineer with 5+ years of experience building scalable, high-performance web applications using React and TypeScript. Experienced in Micro Frontend architecture, design systems, PWA, performance optimization, and modern frontend tooling. Passionate about writing clean, maintainable code and delivering excellent user experiences.",
    actions: {
      contact: "Contact Me",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    sections: {
      contact: "Contact",
      skills: "Skills",
      education: "Education",
      languages: "Languages",
      experience: "Experience",
      experienceEyebrow: "Professional path",
      selectedWork: "Selected Work",
      selectedWorkEyebrow: "Live products",
      achievements: "Key Achievements",
      achievementsEyebrow: "Selected outcomes",
    },
    labels: {
      phone: "Phone",
      email: "Email",
      location: "Location",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    heroCard: {
      title: "React",
      subtitle: "TypeScript / Micro Frontends / PWA",
      tags: ["Design Systems", "Core Web Vitals", "AI-Assisted DX"],
    },
    skills: [
      {
        title: "Frontend",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript (ES6+)",
          "Material UI (MUI)",
          "Tailwind CSS",
        ],
      },
      {
        title: "State Management",
        items: ["Redux Toolkit", "Context API"],
      },
      {
        title: "Data Fetching & Server State",
        items: ["TanStack Query"],
      },
      {
        title: "Routing",
        items: ["TanStack Router", "React Router"],
      },
      {
        title: "Architecture & Performance",
        items: [
          "Micro Frontends",
          "Design Systems",
          "Scalable Frontend Architecture",
          "PWA (Progressive Web Apps)",
          "Service Workers",
          "Code Splitting",
          "Lazy Loading",
          "Bundle Optimization",
          "Image Optimization",
          "Web Performance",
          "Core Web Vitals",
        ],
      },
      {
        title: "Testing",
        items: ["Jest", "React Testing Library"],
      },
      {
        title: "Others",
        items: [
          "REST APIs",
          "Native / Web Integration",
          "AI-Assisted Development",
        ],
      },
    ],
    education: [
      {
        year: "2022",
        degree: "Master Economics",
        school: "Allameh Tabataba'i University",
      },
      {
        year: "2019",
        degree: "Bachelor Economics",
        school: "Allameh Tabataba'i University",
      },
    ],
    languages: ["English (Professional)", "Persian (Native)"],
    experience: [
      {
        role: "Frontend Lead",
        company: "Injast (Entekhab Group)",
        period: "Nov 2024 - Present",
        bullets: [
          "Led frontend architecture and technical decisions across multiple products.",
          "Designed and implemented a scalable Micro Frontend architecture enabling independent deployments, team autonomy, and long-term scalability.",
          "Developed and published a shared MUI-based component library to standardize UI/UX and accelerate development across multiple applications.",
          "Built scalable React/TypeScript applications using TanStack Query, TanStack Router, Material UI, PWA features, Service Workers, and WebView integrations.",
          "Improved performance and Core Web Vitals through code splitting, lazy loading, bundle optimization, responsive images, and modern asset formats.",
          "Established frontend standards, code review processes, scalable project structures, and AI-assisted workflows to improve development speed and code quality.",
        ],
      },
      {
        role: "Senior Front-End Developer",
        company: "RayanTejaratDezpart",
        period: "Feb 2024 - Oct 2024",
        bullets: [
          "Developed and maintained responsive web applications using React, TypeScript, and MUI.",
          "Used TanStack Query for server state management and TanStack Router for type-safe routing.",
          "Collaborated with designers to implement pixel-perfect and accessible interfaces.",
          "Implemented SSR and CSR for optimal performance and SEO.",
          "Improved application performance and reduced load times by optimizing assets, images, and API requests.",
        ],
      },
      {
        role: "Front-End Developer",
        company: "Zendegi Hooshmandaneh Mali",
        period: "Jan 2021 - Jan 2024",
        bullets: [
          "Developed single-page applications (SPA) using React and Next.js.",
          "Built reusable components and maintained a consistent design system.",
          "Implemented SSR/CSR and optimized pages for better performance.",
          "Enhanced image quality and performance through proper sizing, lazy loading, and modern image formats.",
          "Ensured cross-browser compatibility and wrote unit tests for critical components.",
        ],
      },
      {
        role: "Back-End Developer & Data Analyst",
        company: "Daric Team",
        period: "Jul 2019 - Jan 2021",
        bullets: [
          "Developed and maintained backend services for the accounting website system.",
          "Performed data mining and analysis of financial data.",
        ],
      },
    ],
    achievements: [
      "Designed and published a shared MUI-based component library adopted across multiple frontend applications.",
      "Implemented Micro Frontend architecture that improved team scalability and deployment independence.",
      "Reduced production bundle size and improved Core Web Vitals through performance optimization and asset management.",
      "Implemented PWA with Service Workers, improving offline experience and performance.",
    ],
  },
  fa: {
    dir: "rtl",
    langLabel: "English",
    name: "مهدی مجیدی",
    title: "مهندس ارشد فرانت‌اند",
    location: "ایران، تهران",
    availability: "آماده همکاری در موقعیت‌های ارشد فرانت‌اند",
    identityLine: "مهندس ارشد فرانت‌اند مستقر در تهران",
    summary:
      "مهندس ارشد فرانت‌اند با بیش از ۵ سال تجربه در ساخت اپلیکیشن‌های وب مقیاس‌پذیر و پرفورمنس‌محور با React و TypeScript. دارای تجربه در معماری Micro Frontend، طراحی Design System، PWA، بهینه‌سازی عملکرد و ابزارهای مدرن فرانت‌اند. علاقه‌مند به نوشتن کد تمیز، قابل نگهداری و ساخت تجربه کاربری باکیفیت.",
    actions: {
      contact: "تماس با من",
      linkedin: "لینکدین",
      github: "گیت‌هاب",
    },
    sections: {
      contact: "تماس",
      skills: "مهارت‌ها",
      education: "تحصیلات",
      languages: "زبان‌ها",
      experience: "سوابق کاری",
      experienceEyebrow: "مسیر حرفه‌ای",
      selectedWork: "نمونه‌کارها",
      selectedWorkEyebrow: "محصولات آنلاین",
      achievements: "دستاوردهای کلیدی",
      achievementsEyebrow: "نتایج منتخب",
    },
    labels: {
      phone: "تلفن",
      email: "ایمیل",
      location: "موقعیت",
      linkedin: "لینکدین",
      github: "گیت‌هاب",
    },
    heroCard: {
      title: "React",
      subtitle: "TypeScript / Micro Frontends / PWA",
      tags: ["Design Systems", "Core Web Vitals", "AI-Assisted DX"],
    },
    skills: [
      {
        title: "فرانت‌اند",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript (ES6+)",
          "Material UI (MUI)",
          "Tailwind CSS",
        ],
      },
      {
        title: "مدیریت State",
        items: ["Redux Toolkit", "Context API"],
      },
      {
        title: "دریافت داده و Server State",
        items: ["TanStack Query"],
      },
      {
        title: "مسیریابی",
        items: ["TanStack Router", "React Router"],
      },
      {
        title: "معماری و پرفورمنس",
        items: [
          "Micro Frontends",
          "Design Systems",
          "Scalable Frontend Architecture",
          "PWA (Progressive Web Apps)",
          "Service Workers",
          "Code Splitting",
          "Lazy Loading",
          "Bundle Optimization",
          "Image Optimization",
          "Web Performance",
          "Core Web Vitals",
        ],
      },
      {
        title: "تست",
        items: ["Jest", "React Testing Library"],
      },
      {
        title: "سایر",
        items: [
          "REST APIs",
          "Native / Web Integration",
          "AI-Assisted Development",
        ],
      },
    ],
    education: [
      {
        year: "۱۴۰۱",
        degree: "کارشناسی ارشد اقتصاد",
        school: "دانشگاه علامه طباطبایی",
      },
      {
        year: "۱۳۹۸",
        degree: "کارشناسی اقتصاد",
        school: "دانشگاه علامه طباطبایی",
      },
    ],
    languages: ["انگلیسی (حرفه‌ای)", "فارسی (زبان مادری)"],
    experience: [
      {
        role: "Frontend Lead",
        company: "Injast (Entekhab Group)",
        period: "آذر ۱۴۰۳ - اکنون",
        bullets: [
          "رهبری معماری فرانت‌اند و تصمیم‌گیری‌های فنی در چند محصول مختلف.",
          "طراحی و پیاده‌سازی معماری Micro Frontend برای استقرار مستقل، افزایش استقلال تیم‌ها و مقیاس‌پذیری بلندمدت.",
          "توسعه و انتشار کتابخانه کامپوننت مبتنی بر MUI برای یکپارچه‌سازی UI/UX و افزایش سرعت توسعه در چند اپلیکیشن.",
          "ساخت اپلیکیشن‌های مقیاس‌پذیر با React و TypeScript در کنار TanStack Query، TanStack Router، Material UI، PWA، Service Worker و WebView integration.",
          "بهبود Performance و Core Web Vitals با code splitting، lazy loading، bundle optimization، تصاویر responsive و فرمت‌های مدرن asset.",
          "ایجاد استانداردهای فرانت‌اند، فرآیند code review، ساختارهای مقیاس‌پذیر پروژه و workflowهای AI-assisted برای افزایش سرعت و کیفیت توسعه.",
        ],
      },
      {
        role: "Senior Front-End Developer",
        company: "RayanTejaratDezpart",
        period: "بهمن ۱۴۰۲ - آبان ۱۴۰۳",
        bullets: [
          "توسعه و نگهداری اپلیکیشن‌های وب responsive با React، TypeScript و MUI.",
          "استفاده از TanStack Query برای مدیریت server state و TanStack Router برای routing type-safe.",
          "همکاری با تیم طراحی برای پیاده‌سازی رابط‌های pixel-perfect و accessible.",
          "پیاده‌سازی SSR و CSR برای بهبود performance و SEO.",
          "کاهش زمان بارگذاری با بهینه‌سازی assetها، تصاویر و درخواست‌های API.",
        ],
      },
      {
        role: "Front-End Developer",
        company: "Zendegi Hooshmandaneh Mali",
        period: "دی ۱۳۹۹ - دی ۱۴۰۲",
        bullets: [
          "توسعه اپلیکیشن‌های تک‌صفحه‌ای (SPA) با React و Next.js.",
          "ساخت کامپوننت‌های قابل استفاده مجدد و نگهداری Design System یکپارچه.",
          "پیاده‌سازی SSR/CSR و بهینه‌سازی صفحات برای performance بهتر.",
          "بهبود کیفیت و سرعت بارگذاری تصاویر با sizing مناسب، lazy loading و فرمت‌های مدرن.",
          "اطمینان از سازگاری cross-browser و نوشتن unit test برای کامپوننت‌های مهم.",
        ],
      },
      {
        role: "Back-End Developer & Data Analyst",
        company: "Daric Team",
        period: "تیر ۱۳۹۸ - دی ۱۳۹۹",
        bullets: [
          "توسعه و نگهداری سرویس‌های بک‌اند برای سیستم وب حسابداری.",
          "داده‌کاوی و تحلیل داده‌های مالی.",
        ],
      },
    ],
    achievements: [
      "طراحی و انتشار کتابخانه کامپوننت مبتنی بر MUI که در چند اپلیکیشن فرانت‌اند استفاده شد.",
      "پیاده‌سازی معماری Micro Frontend برای افزایش مقیاس‌پذیری تیمی و استقلال در deployment.",
      "کاهش bundle size محصول و بهبود Core Web Vitals با بهینه‌سازی performance و مدیریت assetها.",
      "پیاده‌سازی PWA با Service Worker برای بهبود تجربه offline و performance.",
    ],
  },
} as const;

export type ResumeLocaleData = (typeof resumeLocales)[Locale];
