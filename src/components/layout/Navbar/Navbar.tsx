import clsx from "clsx";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import ThemeToggle from "@/components/common/ThemeToggle";
import useScroll from "@/hooks/useScroll";

import styles from "./Navbar.module.scss";

const LINKS = [
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "projects",
    label: "Projects",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

const Navbar = () => {
  const scrolled = useScroll();

  const [mobileOpen, setMobileOpen] = useState(false);

  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean,
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header
      className={clsx(styles.header, {
        [styles.scrolled]: scrolled,
      })}
    >
      <nav className={styles.nav} aria-label="Primary">
        <a href="#hero" className={styles.logo}>
          VD
        </a>

        <ul className={styles.links}>
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={clsx({
                  [styles.active]: active === link.id,
                })}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.right}>
          <ThemeToggle />

          <button
            type="button"
            className={styles.menuButton}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <aside
        id="mobile-navigation"
        className={clsx(styles.mobileMenu, {
          [styles.mobileOpen]: mobileOpen,
        })}
        aria-hidden={!mobileOpen}
      >
        {LINKS.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </aside>
    </header>
  );
};

export default Navbar;
