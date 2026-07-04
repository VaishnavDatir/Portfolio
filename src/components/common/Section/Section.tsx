import clsx from "clsx";
import type { PropsWithChildren } from "react";

import Container from "@/components/common/Container";

import styles from "./Section.module.scss";

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
}>;

const Section = ({ id, className, children }: SectionProps) => {
  return (
    <section id={id} className={clsx(styles.section, className)}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
