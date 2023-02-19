import React from "react";
import Button from "../button";
import HomepagePortfolioItem from "./homepage-portfolio-item";
import styles from "./homepage-portfolio.module.css";

const HomepagePortfolio = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.titleBar}>
            <div className={styles.text}>
              <h2>Portfolio</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                enim quis lectus varius pulvinar. Curabitur luctus sit amet nunc
                id rhoncus.
              </p>
            </div>
          </div>

          <div className={styles.grid}>
            <HomepagePortfolioItem
              image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              link="/"
              tag="Django-Admin"
              title="Admin Dashboard Template"
            />
            <HomepagePortfolioItem
              image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              link="/"
              tag="Django-Admin"
              title="Admin Dashboard Template"
            />
            <HomepagePortfolioItem
              image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              link="/"
              tag="Django-Admin"
              title="Admin Dashboard Template"
            />
            <HomepagePortfolioItem
              image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              link="/"
              tag="Django-Admin"
              title="Admin Dashboard Template"
            />
            <HomepagePortfolioItem
              image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              link="/"
              tag="Django-Admin"
              title="Admin Dashboard Template"
            />
            <HomepagePortfolioItem
              image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              link="/"
              tag="Django-Admin"
              title="Admin Dashboard Template"
            />
          </div>

          <div className={styles.allRow}>
            <Button>View All</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepagePortfolio;
