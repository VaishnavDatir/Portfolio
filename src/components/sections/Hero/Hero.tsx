import Button from "@/components/common/Button";
import { portfolio } from "@/data";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useMemo } from "react";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import styles from "./Hero.module.scss";

// Shared variants configuration
const leftContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const leftItemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const cloudContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const cloudItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
    },
  },
};

const Hero = () => {
  const { hero } = portfolio;
  const shouldReduceMotion = useReducedMotion();

  const socialIcons = {
    GitHub: <FiGithub />,
    LinkedIn: <FiLinkedin />,
    Email: <FiMail />,
  } as const;

  const dynamicTechnologies = useMemo(() => {
    const total = hero.technologies.length;

    return hero.technologies.map((tech, index) => {
      const angle = index * 2.4;

      const radiusX = 20 + (index / total) * 50;
      const radiusY = 30 + (index / total) * 25;

      const left = 50 + Math.cos(angle) * radiusX;
      const top = 48 + Math.sin(angle) * radiusY;

      const floatDelay = `${(index * 0.45).toFixed(2)}s`;

      return {
        name: tech,
        style: {
          left: `${left}%`,
          top: `${top}%`,
          transform: "translate(-50%, -50%)",
          animationDelay: floatDelay,
        },
      };
    });
  }, [hero.technologies]);

  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.grid}>
        <motion.div
          className={styles.left}
          variants={leftContainerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? false : "visible"}
        >
          <motion.div className={styles.badge} variants={leftItemVariants}>
            <span className={styles.dot} aria-hidden="true" />
            {hero.badge}
          </motion.div>

          <motion.h1 id="hero-title" className={styles.title} variants={leftItemVariants}>
            {hero.title}
          </motion.h1>

          <motion.p className={styles.description} variants={leftItemVariants}>
            {hero.description}
          </motion.p>

          <motion.div variants={leftItemVariants} className={styles.actions}>
            <Button href={hero.primaryButton.href}>{hero.primaryButton.text}</Button>
            <Button href={hero.secondaryButton.href} variant="secondary">
              {hero.secondaryButton.text}
            </Button>
          </motion.div>

          <motion.div variants={leftItemVariants} className={styles.footer}>
            <div className={styles.socials}>
              {portfolio.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.platform}
                >
                  {socialIcons[social.platform as keyof typeof socialIcons]}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.right}
          variants={shouldReduceMotion ? {} : cloudContainerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? false : "visible"}
        >
          {dynamicTechnologies.map((tech) => (
            <motion.div
              key={tech.name}
              className={styles.tech}
              style={tech.style}
              variants={shouldReduceMotion ? {} : cloudItemVariants}
            >
              {tech.name}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className={styles.scroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <FiArrowDown />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
