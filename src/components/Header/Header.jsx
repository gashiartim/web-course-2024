import { Link } from "react-router";
import styles from "./Header.module.css";

// export function Header() {}
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <div className={styles.logo}>LOGO</div>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/about">About</Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
