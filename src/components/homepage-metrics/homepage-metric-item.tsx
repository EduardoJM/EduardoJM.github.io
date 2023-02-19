import React from "react";
import clsx from "clsx";
import styles from "./homepage-metrics.module.css";

export interface HomepageMetricItemProps {
  number: string;
  text: string;
  variant?: "solid" | "dashed";
}

const HomepageMetricItem = (props: HomepageMetricItemProps) => {
  const { number, text, variant = "solid" } = props;

  return (
    <div
      className={clsx({
        [styles.metricItem]: true,
        [styles.dashed]: variant === "dashed",
      })}
    >
      <h2>{number}</h2>
      <h3>{text}</h3>
    </div>
  );
};

export default HomepageMetricItem;
