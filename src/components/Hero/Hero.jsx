import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>HI, SAYA PRIMA HARI NUGRAHA</h1>
        <p className={styles.description}>
        Fresh Graduate Teknik Informatika dengan fokus pada pengembangan website.
        Saya senang mempelajari teknologi baru, membangun aplikasi web yang bermanfaat, dan siap berkontribusi dalam tim untuk menciptakan solusi digital yang inovatif.
        </p>
        <a href="mailto:primaharinugraha18@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/almet.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
