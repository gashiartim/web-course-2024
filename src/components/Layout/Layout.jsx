import { Outlet } from "react-router";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={`${styles.main} container`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
