import React from "react";
import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <section className={styles.container} id="resume">
      {/* Left Column */}
      <div className={styles.content}>
        <h2 className={styles.title}>Resume (CV)</h2>

        {/* Deskripsi dengan shiny-text justify */}
        <div style={{ textAlign: "justify", textJustify: "inter-word", marginBottom: "32px" }}>
          <span className="shiny-text">
            Saya percaya bahwa pengalaman dan keterampilan yang saya miliki dapat
            memberikan kontribusi positif. Silakan unduh CV saya untuk melihat
            profil lengkap, riwayat pendidikan, serta pengalaman kerja dan proyek
            yang pernah saya jalankan.
          </span>
        </div>

        {/* Tombol Download tetap sama */}
        <a
          href="/CV_Prima Hari Nugraha.pdf"
          download="PrimaHari-CV.pdf"
          className={styles.downloadBtn}
        >
          Download
        </a>
      </div>

      {/* Right Column */}
      <div className={styles.right}>
        <div className={styles.card}>
          <img
            src="/PrimaHari-CV-1.png"
            alt="Preview CV"
          />
        </div>
      </div>

      {/* ShinyText CSS langsung di file ini */}
      <style jsx>{`
        .shiny-text {
          display: inline; /* biar justify di wrapper bekerja */
          color: #b5b5b5a4;
          background: linear-gradient(
            120deg,
            rgba(255,255,255,0) 40%,
            rgba(255,255,255,0.8) 50%,
            rgba(255,255,255,0) 60%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shine 2s linear infinite;
          font-size: 25px;
          line-height: 1.5;
        }

        @keyframes shine {
          0% { background-position: 100%; }
          100% { background-position: -100%; }
        }

        .shiny-text.disabled {
          animation: none;
        }

        @media screen and (max-width: 480px) {
          .shiny-text {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default Resume;
