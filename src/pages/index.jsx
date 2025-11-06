import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from '../components/homepage/HeroSection';
import HomeFooter from '../components/homepage/HomeFooter';
import Head from '@docusaurus/Head';

export default function Homepage() {
  return (
    <Layout
      title="TAP Developer Platform | Trust Assurance Protocol"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <Head>
        <link rel="prefetch" href="/assets/css/elements.min.css" />
      </Head>

      <HeroSection />

      <HomeFooter />
    </Layout>
  );
}
