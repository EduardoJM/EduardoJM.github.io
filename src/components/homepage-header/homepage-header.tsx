import React from "react";
import styles from "./homepage-header.module.css";

const HomepageHeader = () => {
  return (
    <header className={styles.pageHeader}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2>Software Engineer</h2>
            <h1>Eduardo Oliveira</h1>
            <p>
              Full Stack Software Enginner with background in academic research
              in applied and computational mathematics.
            </p>
          </div>
          <div className={styles.imageContent}>
            <svg width="512" height="550" viewBox="0 110 512 550">
              <ellipse
                cx="300"
                cy="320"
                rx="200"
                ry="200"
                className={styles.firstBall}
              />
              <ellipse
                cx="230"
                cy="460"
                rx="150"
                ry="150"
                className={styles.secondBall}
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomepageHeader;
