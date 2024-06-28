import { useEffect, useState } from 'react';

import HeroSection from '@/components/lifetime/HeroSection';
import FeatureSection from '@/components/lifetime/FeatureSection';
import GetLifetimeSection from '@/components/lifetime/GetLifetimeSection';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import PaymentSection from '@/components/lifetime/PaymentSection';
import Navbar from '@/components/layout/navbars/Navbar';
import CtaSection from '@/components/lifetime/CtaSection';

import SignUp from '@/components/auth/SignUp';
import { X } from '@phosphor-icons/react';
import moment from 'moment';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';

const DealMirror = ({ lang, metatagsDescriptions, langJson, footerLang, deviceLang, navbarLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'lifetime');
  const year = moment().format('YYYY');
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    //Get the onclick event from the button and open the dialog. The button id is "redeemCode"
    const TB2Button = document.getElementById('planButton2TB');
    const TB5Button = document.getElementById('planButton5TB');
    const TB10Button = document.getElementById('planButton10TB');
    [TB2Button, TB5Button, TB10Button].forEach((button) =>
      button?.addEventListener('click', () => {
        setOpenDialog(true);
      }),
    );
  }, []);

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="DealMirror"
      lang={lang}
      specialOffer={`https://internxt.com/images/previewLink/LifetimePreviewLink.png`}
    >
      {openDialog ? (
        <div className={`fixed top-0 left-0 right-0 bottom-0 z-40 h-screen bg-black bg-opacity-50 px-5 lg:px-0`}>
          <div
            className={`absolute top-1/2 left-1/2
        z-20 flex w-max -translate-y-1/2 -translate-x-1/2 transform flex-col rounded-2xl bg-white p-7 text-neutral-900`}
          >
            <X className={`absolute top-5 right-5 cursor-pointer`} size={24} onClick={() => setOpenDialog(false)} />
            <SignUp textContent={langJson.Auth} provider="DEALMIRROR" />
          </div>
        </div>
      ) : null}

      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed mode="payment" isLinksHidden />

      <HeroSection hideTimer={true} previewImg="/images/lifetime/file_item.webp" textContent={langJson.HeroSection} />

      <PaymentSection textContent={langJson.PaymentSection} lang={lang} lifetimeMode="redeem" />

      <GetLifetimeSection textContent={langJson.GetLifetimeSection} />

      <FeatureSection textContent={langJson.FeatureSection} withoutCta />

      <CtaSection textContent={langJson.CtaSection} />

      <MinimalFooter lang={lang} footerLang={footerLang.FooterSection} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/en/techcult.json`);
  const navbarLang = require(`@/assets/lang/en/navbar.json`);
  const footerLang = require(`@/assets/lang/en/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      deviceLang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default DealMirror;
