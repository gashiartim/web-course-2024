import styles from "./Footer.module.css";

// export function Footer() {}
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__container}`}>
        <p>2025 Copyright ©</p>
      </div>
    </footer>
  );
};
