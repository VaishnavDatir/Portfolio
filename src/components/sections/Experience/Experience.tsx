import { motion } from "framer-motion";

import { portfolio } from "@/data";

import styles from "./Experience.module.scss";

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <span className={styles.sectionTitle}>Experience</span>

        <h2>Building software that powers real-world products.</h2>

        <div className={styles.timeline}>
          {portfolio.experience.map((job, index) => (
            <motion.article
              key={job.company}
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
                amount: 0.3,
              }}
              transition={{
                delay: index * 0.15,
              }}
            >
              <div className={styles.marker} />

              <header>
                <h3>{job.role}</h3>

                <h4>{job.company}</h4>

                <p>
                  {job.duration}
                  {" • "}
                  {job.location}
                </p>
              </header>

              <ul>
                {job.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className={styles.tech}>
                {job.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
