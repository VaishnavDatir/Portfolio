import Button from "@/components/common/Button";
import { portfolio } from "@/data";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import styles from "./Hero.module.scss";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
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

const Hero = () => {
  const { hero } = portfolio;
  const shouldReduceMotion = useReducedMotion();
  const socialIcons = {
    GitHub: <FiGithub />,
    LinkedIn: <FiLinkedin />,
    Email: <FiMail />,
  } as const;
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.grid}>
        <motion.div
          className={styles.left}
          variants={container}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? false : "visible"}
        >
          <motion.div className={styles.badge} variants={item}>
            <span className={styles.dot} aria-hidden="true" />
            {hero.badge}
          </motion.div>

          <motion.h1 id="hero-title" className={styles.title} variants={item}>
            {hero.title}
          </motion.h1>

          <motion.p className={styles.description} variants={item}>
            {hero.description}
          </motion.p>

          <motion.div variants={item} className={styles.actions}>
            <Button href={hero.primaryButton.href}>{hero.primaryButton.text}</Button>

            <Button href={hero.secondaryButton.href} variant="secondary">
              {hero.secondaryButton.text}
            </Button>
          </motion.div>

          <motion.div variants={item} className={styles.footer}>
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

            <div className={styles.location}>📍 Mumbai, India</div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
          animate={shouldReduceMotion ? false : { opacity: 1, scale: 1 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.8, delay: 0.5 }}
        >
          {hero.technologies.map((tech) => (
            <div key={tech} className={styles.tech}>
              {tech}
            </div>
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
