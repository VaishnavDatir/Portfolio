import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

import { portfolio } from "@/data";

import styles from "./Projects.module.scss";

const Projects = () => (
  <section id="projects" className={styles.projects}>
    <div className={styles.container}>
      <span className={styles.sectionTitle}>Featured Projects</span>

      <h2 className={styles.heading}>Selected work that reflects my engineering approach.</h2>

      <div className={styles.grid}>
        {portfolio.projects.map((project, index) => (
          <motion.article
            key={project.title}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.15 }}
          >
            <div className={styles.preview} />

            <div className={styles.content}>
              <h3 className={styles.projectTitle}>{project.title}</h3>

              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.stack}>
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className={styles.footer}>
                {project.github ? (
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

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} live`}
                  >
                    Live
                    <FiArrowUpRight />
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
