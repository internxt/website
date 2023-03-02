import React from 'react';

import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/temp-email/HeroSection';
import InfoSection from '../components/temp-email/InfoSection';
import ToolsSection from '../components/temp-email/ToolsSection';
import QASection from '../components/temp-email/QASection';
import SignupSection from '../components/temp-email/SignupSection';

//Delete mailbox
// action=deleteMailbox&login=${this.username}&domain=${this.domain}

const TempEmail = ({ metatagsDescriptions, langJson, footerLang, navbarLang, lang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'virus-scanner');

  return (
    <Layout segmentName="Temporary email" title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection />

      <InfoSection />

      <ToolsSection lang={lang} />

      <QASection />

      <SignupSection />

      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  if (lang !== 'en') {
    return {
      redirect: {
        destination: '/temporary-email',
        permanent: false,
      },
    };
  }
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/virus-scanner.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);

  return {
    props: {
      metatagsDescriptions,
      langJson,
      footerLang,
      navbarLang,
      lang,
    },
  };
}

export default TempEmail;
