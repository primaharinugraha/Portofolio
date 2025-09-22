import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Let’s stay connected and collaborate to build something amazing together.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/instagram.png")} alt="instagram icon" />
          <a href="https://www.instagram.com/primahn_" target="_blank" rel="noopener noreferrer">primahn_</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/prima-hari-nugraha-70715929b" target="_blank" rel="noopener noreferrer">
            Prima Hari Nugraha
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/primaharinugraha">primaharinugraha</a>
        </li>
      </ul>
    </footer>
  );
};
