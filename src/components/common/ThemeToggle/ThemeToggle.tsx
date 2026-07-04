import { FiMoon, FiSun } from "react-icons/fi";

import { useTheme } from "@/hooks/useTheme";

import styles from "./ThemeToggle.module.scss";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button type="button" aria-label="Toggle theme" className={styles.toggle} onClick={toggleTheme}>
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ThemeToggle;
