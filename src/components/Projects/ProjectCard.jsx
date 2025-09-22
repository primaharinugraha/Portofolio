import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  
  const handleDemoClick = (e) => {
    e.preventDefault();
    if (window.confirm("Maaf, saya belum memperpanjang masa hostingannya, jadi saya alihkan ke repository GitHub saya hehehe..")) {
      window.location.href = demo;  // Mengarahkan ke link repository GitHub
    }
  };

  return (
    <div className={styles.container} data-aos="flip-down">
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      
      <div className={styles.links}>
        <a href={demo} className={styles.demolink} onClick={handleDemoClick}>
          Demo
        </a>
      </div>
    </div>
  );
};
