import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import TextType from "../TextType/TextType";
import Lanyard from "../Lanyard";



// ShinyText component
const ShinyText = ({ text, disabled = false, className = '' }) => {
  return (
    <div className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}>
      {text}
    </div>
  );
};

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <TextType
            text={["Halo, Saya Prima Hari Nugraha"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>

        {/* Description menggunakan ShinyText */}
        <ShinyText
          text="Fresh Graduate Teknik Informatika dengan fokus pada pengembangan website. Saya senang mempelajari teknologi baru, membangun aplikasi web yang bermanfaat, dan siap berkontribusi dalam tim untuk menciptakan solusi digital yang inovatif."
          className={styles.description + " mt-4"}
        />

        <a
          href="mailto:primaharinugraha18@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>

     
      <Lanyard position={[0, 0, 14]} gravity={[0, -40, 0]} className={styles.heroImg} />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

      {/* ShinyText CSS langsung di Hero.jsx */}
      <style jsx>{`
        .shiny-text {
          color: #b5b5b5a4; /* Warna dasar */
          background: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 60%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          display: inline-block;
          animation: shine 2s linear infinite;
        }

        @keyframes shine {
          0% {
            background-position: 100%;
          }
          100% {
            background-position: -100%;
          }
        }

        .shiny-text.disabled {
          animation: none;
        }
      `}</style>
    </section>
  );
};
