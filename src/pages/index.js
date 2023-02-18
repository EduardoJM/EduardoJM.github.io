import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageMetrics from "@site/src/components/homepage-metrics";
import HomepageHeader from "@site/src/components/homepage-header";

export default function Home() {
  return (
    <Layout title="Início" description="Anotações de Eduardo Oliveira">
      <HomepageHeader />
      <main>
        <HomepageMetrics />
      </main>
    </Layout>
  );
}
