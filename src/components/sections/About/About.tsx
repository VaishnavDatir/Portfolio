import { motion } from "framer-motion";

import { portfolio } from "@/data";

import styles from "./About.module.scss";

const About = () => {
  const { about } = portfolio;

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.sectionTitle}>{about.title}</span>

          <h2 className={styles.heading}>{about.heading}</h2>

          <p className={styles.description}>{about.description}</p>
        </motion.div>

        <div className={styles.right}>
          {about.cards.map((card, index) => (
            <motion.article
              key={card.title}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <h3>{card.title}</h3>

              <span>{card.subtitle}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
