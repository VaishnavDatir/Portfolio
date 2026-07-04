import clsx from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.scss";

type Variant = "primary" | "secondary";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = ({ children, variant = "primary", className, ...props }: ButtonProps) => {
  const classes = clsx(styles.button, styles[variant], className);

  if ("href" in props) {
    const { href, ...anchorProps } = props as ButtonAsLink;

    return (
      <a
        {...(anchorProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
        href={href}
        className={classes}
      >
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButton;

  return (
    <button {...(buttonProps as ButtonHTMLAttributes<HTMLButtonElement>)} className={classes}>
      {children}
    </button>
  );
};

export default Button;
