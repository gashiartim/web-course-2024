import styles from "./HeroBanner.module.css";
import heroBannerImg from "../../../assets/hero-banner.avif";

export const HeroBanner = () => {
  return (
    <div className={styles.heroBanner}>
      <img
        src={heroBannerImg}
        alt="Hero Banner Image"
        className={styles.heroBanner__img}
      />
    </div>
  );
};
