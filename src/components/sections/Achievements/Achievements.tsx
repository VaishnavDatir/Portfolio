import { motion } from "framer-motion";

import { portfolio } from "@/data";

import styles from "./Achievements.module.scss";

const Achievements = () => {
  return (
    <section className={styles.achievements}>
      <div className={styles.container}>
        <span className={styles.sectionTitle}>Engineering Highlights</span>

        <div className={styles.grid}>
          {portfolio.achievements.map((item, index) => (
            <motion.article
              key={item.value}
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
              transition={{
                delay: index * 0.12,
              }}
            >
              <h2>{item.value}</h2>

              <p>{item.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
