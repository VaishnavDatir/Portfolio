import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

import { portfolio } from "@/data";

import styles from "./Projects.module.scss";

const hasValidUrl = (value?: string) => Boolean(value && /^https?:\/\//i.test(value));

const Projects = () => (
  <section id="projects" className={styles.projects}>
    <div className={styles.container}>
      <span className={styles.sectionTitle}>Featured Projects</span>

      <h2 className={styles.heading}>Selected work that reflects my engineering approach.</h2>

      <div className={styles.grid}>
        {portfolio.projects.map((project, index) => {
          const showGitHub = hasValidUrl(project.github);
          const showLive = hasValidUrl(project.live);

          return (
            <motion.article
              key={project.title}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
              whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}
            >
              <div className={styles.header}>
                <span className={styles.eyebrow}>Selected work</span>
                <span className={styles.dot} aria-hidden="true" />
              </div>

              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>

                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.stack}>
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              {(showGitHub || showLive) && (
                <div className={styles.footer}>
                  {showGitHub ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FiGithub />
                      GitHub
                    </a>
                  ) : null}

                  {showLive ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} live`}
                    >
                      Live Demo
                      <FiArrowUpRight />
                    </a>
                  ) : null}
                </div>
              )}
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Projects;
