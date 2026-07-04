import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";

import Button from "@/components/common/Button";
import { portfolio } from "@/data";

import styles from "./Contact.module.scss";

const Contact = () => {
  const { contact, socials } = portfolio;

  const github = socials.find((x) => x.platform === "GitHub");

  const linkedin = socials.find((x) => x.platform === "LinkedIn");

  return (
    <section id="contact" className={styles.contact}>
      <motion.div
        className={styles.card}
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <span className={styles.badge}>{contact.availability}</span>

        <h2>{contact.title}</h2>

        <p>{contact.description}</p>

        <div className={styles.actions}>
          <Button href={`mailto:${contact.email}`}>
            <FiMail />
            Email Me
          </Button>

          <Button href={linkedin?.url ?? "#"} variant="secondary">
            <FiLinkedin />
            LinkedIn
          </Button>
        </div>

        <div className={styles.info}>
          <a href={`mailto:${contact.email}`}>
            <FiMail />

            {contact.email}
          </a>

          <span>
            <FiMapPin />

            {contact.location}
          </span>

          <a href={github?.url} target="_blank" rel="noreferrer">
            <FiGithub />
            GitHub
          </a>
        </div>

        <a href="#hero" className={styles.back}>
          Back to Top
          <FiArrowRight />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
