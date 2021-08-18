import React, { useEffect, useState } from 'react';
import AOS from 'aos';

import HeroSection from '../components/drive/HeroSection';
import Container2 from '../components/drive/Container2';
import Container3 from '../components/drive/Container3';
import Container4 from '../components/drive/Container4';
import Container5 from '../components/drive/Container5';
import Container6 from '../components/drive/Container6';
import Container7 from '../components/drive/Container7';
import Container8 from '../components/drive/Container8';
import Footer from '../components/layout/Footer';
import TopBar from '../components/layout/TopBar';
import Layout from '../components/layout/Layout';
import cookies from '../lib/cookies';
import { getDriveDownloadUrl } from '../lib/get-download-url';
import setUTM from '../lib/conversions';

const Home = ({
  metatagsDescriptions, descriptions, cardDescriptions, footerDescriptions, downloadUrl
}) => {
  const [consentCookie, setConsentCookie] = useState(true);
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'drive');

  const handleAcceptCookies = () => {
    localStorage.setItem('CookieConsent', 'true');
    setConsentCookie(true);
  };

  useEffect(() => {
    AOS.init();
    const cookie = localStorage.getItem('CookieConsent');
    setUTM();

    if (!cookie) setConsentCookie(false);
  }, []);

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="home">
      <TopBar />
      <HeroSection descriptions={descriptions} />
      <Container2 id="2" descriptions={descriptions} cardDescriptions={cardDescriptions} />
      <Container3 id="3" descriptions={descriptions} />
      <Container4 id="4" descriptions={descriptions} />
      <Container5 id="5" {...{ downloadUrl, descriptions }} />
      {' '}
      <Container6 id="6" descriptions={descriptions} />
      <Container7 id="7" descriptions={descriptions} />
      <Container8 id="8" descriptions={descriptions} />
      <Footer descriptions={footerDescriptions} cardDescriptions={cardDescriptions} />

      <div className={consentCookie ? 'hidden' : 'cookies-warning position-fixed mobile:w-60'}>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="alert alert-cookies alert-dismissible my-0 mobile:text-xxxs mobile:pr-8">
                Internxt uses cookies to make its website easier to use.
                <a
                  href="/legal"
                  className="alert-cookies__link"
                >
                  Learn more about cookies.
                </a>

                <button
                  type="button"
                  onClick={handleAcceptCookies}
                  className="close alert-cookies__close"
                >
                  <span>×</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const downloadUrl = await getDriveDownloadUrl(ctx);

  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const descriptions = require(`../assets/lang/${lang}/drive-descriptions.json`);
  const footerDescriptions = require(`../assets/lang/${lang}/footer-descriptions.json`);
  const cardDescriptions = require(`../assets/lang/${lang}/card-descriptions.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      downloadUrl, metatagsDescriptions, descriptions, footerDescriptions, cardDescriptions,
    },
  };
}

export default Home;
