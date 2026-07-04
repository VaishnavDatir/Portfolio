import type { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  site: {
    title: "Vaishnav Datir",
    description:
      "Software Engineer specializing in Java, Spring Boot, React, Flutter, Kafka, Azure and Cloud Native Applications.",
  },

  hero: {
    badge: "Available for Full-time & Freelance",

    title: "Building reliable software for modern businesses.",

    description:
      "Software Engineer specializing in Java, Spring Boot, React, Flutter, Kafka, Azure, Docker and Kubernetes. Passionate about building scalable backend systems and delightful user experiences.",

    primaryButton: {
      text: "View Projects",
      href: "#projects",
    },

    secondaryButton: {
      text: "Contact Me",
      href: "#contact",
    },

    technologies: [
      "Java",
      "Spring Boot",
      "Kafka",
      "React",
      "Flutter",
      "Azure",
      "Docker",
      "Kubernetes",
      "Oracle",
      "TypeScript",
    ],
  },

  technologies: [
    "Java",
    "Spring Boot",
    "Spring Batch",
    "Kafka",
    "React",
    "Flutter",
    "TypeScript",
    "Azure",
    "Docker",
    "Kubernetes",
    "Oracle",
    "MySQL"
  ],

  about: {
    title: "About",

    heading: "Building software isn't just writing code—it's solving real business problems.",

    description:
      "I'm a Software Engineer with experience designing scalable backend systems, modern web applications and cross-platform mobile apps. I enjoy building products that are reliable, maintainable and enjoyable to use.",

    cards: [
      {
        title: "3.5+ Years",
        subtitle: "Professional Experience",
      },
      {
        title: "Backend",
        subtitle: "Java • Spring Boot • Kafka",
      },
      {
        title: "Frontend",
        subtitle: "React • Flutter • TypeScript",
      },
      {
        title: "Cloud",
        subtitle: "Azure • Docker • Kubernetes",
      },
    ],
  },

  experience: [
    {
      company: "JPMorgan Chase",

      role: "Software Engineer II",

      duration: "Jan 2026 — Present",

      location: "Mumbai, India",

      technologies: [
        "Java",
        "Spring Boot",
        "Kafka",
        "React",
        "Azure",
        "Docker",
        "Kubernetes",
      ],

      highlights: [
        "Developing scalable enterprise applications for global financial platforms.",
        "Building performant backend services using Java and Spring Boot.",
        "Collaborating with cross-functional teams to deliver secure and reliable software.",
        "Contributing to production-grade systems following engineering best practices.",
      ],
    },

    {
      company: "Birlasoft",

      role: "Senior Software Developer",

      duration: "Jun 2022 — Dec 2025",

      location: "Navi Mumbai, India",

      technologies: [
        "Java",
        "Spring Boot",
        "Spring Batch",
        "Kafka",
        "Azure",
        "Oracle",
        "Docker",
      ],

      highlights: [
        "Developed cloud-native microservices for the New York Tolling Modernization project.",
        "Optimized SQL queries and backend processing for high-volume workloads.",
        "Integrated Kafka, Azure Event Hubs and enterprise messaging solutions.",
        "Worked in Agile teams delivering production-ready software.",
      ],
    },
  ],

  projects: [
    {
      title: "Personal Portfolio",

      description:
        "Modern portfolio showcasing my experience, projects and engineering approach using React, TypeScript and SCSS.",

      technologies: [
        "React",
        "TypeScript",
        "SCSS",
        "Framer Motion",
        "Vite",
      ],

      github: "",

      live: "",

      featured: true,
    },

    {
      title: "LifeOS",

      description:
        "Offline-first personal productivity platform for finance, health, habits and goals built with Flutter.",

      technologies: [
        "Flutter",
        "Isar",
        "Provider",
        "MVVM",
      ],

      github: "",

      live: "",

      featured: true,
    },

    {
      title: "New York Tolling Modernization",

      description:
        "Enterprise backend services for a large-scale tolling modernization platform with cloud-native architecture.",

      technologies: [
        "Java",
        "Spring Boot",
        "Kafka",
        "Azure",
        "Oracle",
      ],

      github: "",

      live: "",

      featured: true,
    },
  ],

  achievements: [
    {
      value: "3.5+",

      label: "Years Building Production Software",
    },

    {
      value: "Enterprise",

      label: "Financial Systems",
    },

    {
      value: "Cloud Native",
      label: "Azure • Docker • Kubernetes",
    },

    {
      value: "Backend",
      label: "Java • Spring Boot • Kafka",
    },
  ],
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/vaishnavdatir",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/vaishnavdatir",
    },
    {
      platform: "Email",
      url: "mailto:your@email.com",
    },
  ],

  contact: {
    title: "Let's build something great together.",

    description:
      "Whether you have an opportunity, a freelance project, or simply want to connect, I'd be happy to hear from you.",

    email: "your@email.com",

    location: "Mumbai, India",

    availability: "Open to opportunities",
  },


};
