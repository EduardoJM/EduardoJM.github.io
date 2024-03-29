import React from 'react';
import Layout from '@theme/Layout';
import HomepageMetrics from '@site/src/components/homepage-metrics';
import HomepageHeader from '@site/src/components/homepage-header';
import HomepagePortfolio from '@site/src/components/homepage-portfolio';

export default function Home() {
  return (
    <Layout title='Início' description='Anotações de Eduardo Oliveira'>
      <HomepageHeader />
      <main>
        <HomepageMetrics />
        <HomepagePortfolio />
      </main>
    </Layout>
  );
}
