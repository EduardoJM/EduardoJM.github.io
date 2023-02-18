import React from "react";
import HomepageMetricItem from "./homepage-metric-item";
import styles from "./homepage-metrics.module.css";

const HomepageMetrics = () => {
  return (
    <section className={styles.metric}>
      <div className="container">
        <div className={styles.inner}>
          <HomepageMetricItem variant="dashed" number="02" text="Awards" />
          <HomepageMetricItem number="50+" text="Clients" />
          <HomepageMetricItem
            variant="dashed"
            number="03"
            text="Years Experience"
          />
          <HomepageMetricItem variant="dashed" number="80+" text="Projects" />
        </div>
      </div>
    </section>
  );
};

export default HomepageMetrics;
