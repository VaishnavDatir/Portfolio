import type { PortfolioData } from "@/types/portfolio";

export const portfolio: PortfolioData = {
  site: {
    title: "Vaishnav Datir",
    description:
      "Software Engineer specializing in Java, Spring Boot, React, Flutter, Kafka, Azure, AWS and Cloud Native Applications.",
  },

  hero: {
    badge: "Available for freelance opportunities",

    title: "Building dependable software for modern products.",

    description:
      "Software engineer focused on backend systems, cloud-native applications, and polished user experiences. I enjoy turning complex requirements into reliable, maintainable software.",

    primaryButton: {
      text: "View Projects",
      href: "#projects",
    },

    secondaryButton: {
      text: "Contact Me",
      href: "#contact",
    },

    technologies: [
      "Spring Boot",
      "Java",
      "Kafka",
      "React",
      "Flutter",
      "Azure",
      "AWS",
      "Docker",
      "Kubernetes",
      "SQL",
      "NoSQL",
      "TypeScript",
      "Firebase"
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
    "MySQL",
  ],

  about: {
    title: "About",

    heading: "Great software is built by solving the right problems well.",

    description:
      "I’m a software engineer with experience designing scalable backend systems, modern web applications, and cross-platform products. I care deeply about reliability, maintainability, and thoughtful user experience.",

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
        "Building high-performance backend services using Java and Spring Boot.",
        "Collaborating with cross-functional teams to deliver secure, reliable software.",
        "Contributing to production-grade systems using strong engineering practices.",
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
        "Optimized SQL and backend processing for high-volume workloads.",
        "Integrated Kafka, Azure Event Hubs, and enterprise messaging solutions.",
        "Worked in agile teams delivering production-ready software.",
      ],
    },
  ],

  projects: [
    {
      title: "Personal Portfolio",

      description:
        "A polished portfolio showcasing my experience, engineering approach, and recent work using React, TypeScript, and SCSS.",

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
        "An offline-first personal productivity platform for finance, health, habits, and goals built with Flutter.",

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
        "Enterprise backend services for a large-scale tolling modernization platform built with cloud-native architecture.",

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
      url: "mailto:vaishnav.datir@gmail.com",
    },
  ],

  contact: {
    title: "Let’s build something meaningful together.",

    description:
      "Whether you have an opportunity, a freelance project, or simply want to connect, I’d be happy to hear from you.",

    email: "vaishnav.datir@gmail.com",

    location: "Mumbai, India",

    availability: "Open to opportunities",
  },
};
