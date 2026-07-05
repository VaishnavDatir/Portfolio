import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

import { portfolio } from "@/data";

import styles from "./Footer.module.scss";

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();

  const year = new Date().getFullYear();

  return (
    <motion.footer
      className={styles.footer}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <div className={styles.bottom}>
          <div className={styles.info}>
            <p>Built with React, TypeScript, AI & lots of 🍺</p>

            <span>
              © {year} {portfolio.site.title}. All rights reserved.
            </span>
          </div>

          <button
            className={styles.topButton}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            aria-label="Back to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
