import { portfolio } from "@/data";

import styles from "./TechMarquee.module.scss";

const items = [...portfolio.technologies, ...portfolio.technologies];

const TechMarquee = () => (
  <section className={styles.wrapper}>
    <div className={styles.track}>
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className={styles.item}>
          {item}
        </span>
      ))}
    </div>
  </section>
);

export default TechMarquee;
