import type { PropsWithChildren } from "react";

import styles from "./Container.module.scss";

type ContainerProps = PropsWithChildren<{
  wide?: boolean;
}>;

const Container = ({ children, wide = false }: ContainerProps) => {
  return <div className={`${styles.container} ${wide ? styles.wide : ""}`}>{children}</div>;
};

export default Container;
