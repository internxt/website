import React, { memo, useEffect, useState } from 'react';
import AOS from 'aos';
import { isMobile } from 'react-device-detect';
import cookies from '../lib/cookies';
import { downloadDriveLinks } from '../lib/get-download-url';
import HeroSection from '../components/home/HeroSection';
import SocialProofSection from '../components/home/SocialProofSection';
import FirstFeaturesSection from '../components/home/FirstFeaturesSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import TestimonialsSection from '../components/home/TestimonialsSection';
import InfoSection from '../components/home/InfoSection';
import SecondFeaturesSection from '../components/home/SecondFeaturesSection';
import SecondWhatWeDoSection from '../components/home/SecondWhatWeDoSection';
import FirstWhatWeDoSection from '../components/home/FirstWhatWeDoSection';
import ThirdFeaturesSection from '../components/home/ThirdFeaturesSection';
import FileParallaxSection from '../components/home/FileParallaxSection';

const Home = memo(
  ({
    metatagsDescriptions,
    langJson,
    lang,
    navbarLang,
    footerLang,
    downloadURL,
  }: {
    metatagsDescriptions: any;
    langJson: any;
    lang: string;
    navbarLang: any;
    footerLang: any;
    downloadURL: any;
  }) => {
    const metatags = metatagsDescriptions.filter((desc) => desc.id === 'home');
    const [downloadUrl, setDownloadUrl] = useState(null);

    function getOS() {
      const osList = [
        { keyword: 'Android', name: 'Android' },
        { keyword: 'iPad', name: 'iPad' },
        { keyword: 'iPhone', name: 'iPhone' },
        { keyword: 'Win', name: 'Windows' },
        { keyword: 'Mac', name: isMobile ? 'iPad' : 'MacOS' },
        { keyword: 'X11', name: 'UNIX' },
        { keyword: 'Linux', name: 'Linux' },
      ];

      const res = osList.find((os) => window.navigator.appVersion.indexOf(os.keyword) !== -1);

      return res ? res.name : `Not known (${window.navigator.appVersion})`;
    }

    useEffect(() => {
      setDownloadUrl(downloadURL[getOS()]);
      AOS.init();
    }, [downloadURL]);

    return (
      <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

        <HeroSection textContent={langJson.HeroSection} lang={lang} />

        <FirstFeaturesSection textContent={langJson.FirstFeaturesSection} lang={lang} />

        <InfoSection textContent={langJson.InfoSection} lang={lang} />

        <FileParallaxSection />

        <SecondFeaturesSection textContent={langJson.SecondFeaturesSection} />

        <FirstWhatWeDoSection textContent={langJson.FirstWhatWeDoSection} lang={lang} />

        <SecondWhatWeDoSection textContent={langJson.SecondWhatWeDoSection} lang={lang} />

        <TestimonialsSection textContent={langJson.TestimonialsSection} />

        <ThirdFeaturesSection textContent={langJson.ThirdFeaturesSection} />

        <SocialProofSection textContent={langJson.InvestorsSection} lang={lang} />

        <Footer textContent={footerLang} lang={lang} />
      </Layout>
    );
  },
);
export async function getServerSideProps(ctx) {
  const downloadURL = await downloadDriveLinks();

  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/home.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      downloadURL,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default Home;
