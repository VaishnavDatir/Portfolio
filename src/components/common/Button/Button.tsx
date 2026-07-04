import clsx from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.scss";

type Variant = "primary" | "secondary";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

type ButtonProps =
  | (BaseProps &
      ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: never;
      })
  | (BaseProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
      });

const Button = ({ children, variant = "primary", className, ...props }: ButtonProps) => {
  const classes = clsx(styles.button, styles[variant], className);

  if ("href" in props) {
    return (
      <a {...props} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default Button;
