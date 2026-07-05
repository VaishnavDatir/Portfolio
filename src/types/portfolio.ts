export interface ButtonLink {
    text: string;
    href: string;
}

export interface HeroData {
    badge: string;
    title: string;
    description: string;
    primaryButton: ButtonLink;
    secondaryButton: ButtonLink;
    technologies: string[];
}

export interface Social {
    platform: string;
    url: string;
}

export interface Contact {
    title: string;
    description: string;
    email: string;
    location: string;
    availability: string;
}

export interface AboutCard {
    title: string;
    subtitle: string;
}

export interface AboutData {
    title: string;
    heading: string;
    description: string;
    cards: AboutCard[];
}

export interface ExperienceItem {
    company: string;
    role: string;
    duration: string;
    location: string;
    technologies: string[];
    highlights: string[];
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    live: string;
    featured: boolean;
}

export interface Achievement {
    value: string;
    label: string;
}

export interface Footer {
    tagline: string,
    builtWith: string[]
}

export interface PortfolioData {
    site: {
        title: string;
        description: string;
    };

    hero: HeroData;

    technologies: string[];

    about: AboutData;

    experience: ExperienceItem[];

    projects: Project[];

    achievements: Achievement[];

    socials: Social[];

    contact: Contact;

    footer: Footer;
}
