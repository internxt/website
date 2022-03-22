import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { isMobile } from 'react-device-detect';
import cookies from '../lib/cookies';
import { downloadDriveLinks } from '../lib/get-download-url';
import HeroSection from '../components/home/HeroSection';
import GetStartedSection from '../components/home/GetStartedSection';
import InvestorsSection from '../components/home/InvestorsSection';
import FeaturesSection from '../components/home/FeaturesSection';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';

const Home = ({
  metatagsDescriptions,
  langJson,
  lang,
  navbarLang,
  footerLang,
  downloadURL
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

    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home">

      <Navbar
        textContent={navbarLang}
        lang={lang}
        cta={['default']}
        fixed
      />

      <HeroSection
        textContent={langJson.HeroSection}
        download={downloadUrl}
        lang={lang}
      />

      <FeaturesSection
        textContent={langJson.FeaturesSection}
        lang={lang}
      />

      <InvestorsSection
        textContent={langJson.InvestorsSection}
      />

      <div className="getStartedSection">
        <GetStartedSection
          textContent={langJson.GetStartedSection}
          lang={lang}
        />
      </div>

      <Footer
        textContent={footerLang}
        lang={lang}
      />

    </Layout>

  );
};

export async function getServerSideProps(ctx) {
  const downloadURL = await downloadDriveLinks(ctx);

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
