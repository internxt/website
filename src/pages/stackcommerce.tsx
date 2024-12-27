import { useState } from 'react';

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
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import { GetServerSidePropsContext } from 'next';
import router from 'next/router';
import AhrefsAnalytics from '@/components/shared/components/AhrefAnalytics';

const StackCommerce = ({ lang, metatagsDescriptions, langJson, footerLang, navbarLang }): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'lifetime');

  const [openDialog, setOpenDialog] = useState(false);

  const onButtonClicked = () => {
    setOpenDialog(true);
  };

  return (
    <>
      <AhrefsAnalytics lang={lang} />
      <Layout
        title={metatags[0].title}
        description={metatags[0].description}
        segmentName="StackCommerce"
        lang={lang}
        specialOffer={`https://internxt.com/images/previewLink/LifetimePreviewLink.png`}
      >
        {openDialog ? (
          <div className={`fixed bottom-0 left-0 right-0 top-0 z-40 h-screen bg-black bg-opacity-50 px-5 lg:px-0`}>
            <div
              className={`absolute left-1/2 top-1/2
        z-20 flex w-max -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-2xl bg-white p-7 text-neutral-900`}
            >
              <X className={`absolute right-5 top-5 cursor-pointer`} size={24} onClick={() => setOpenDialog(false)} />
              <SignUp textContent={langJson.Auth} provider="STACKCOMMERCE" />
            </div>
          </div>
        ) : null}

        <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed mode="payment" isLinksHidden />

        <HeroSection
          hideTimer={true}
          previewImg="/images/lifetime/file_item.webp"
          textContent={langJson.HeroSection}
          onRedirectButtonClicked={() => router.push('#payment')}
        />

        <PaymentSection
          textContent={langJson.PaymentSection}
          lang={'en'}
          lifetimeMode="redeem"
          onButtonClicked={onButtonClicked}
        />

        <GetLifetimeSection textContent={langJson.GetLifetimeSection} />

        <FeatureSection textContent={langJson.FeatureSection} withoutCta />

        <CtaSection textContent={langJson.CtaSection} />

        <MinimalFooter lang={lang} footerLang={footerLang.FooterSection} />
      </Layout>
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/en/techcult.json`);
  const navbarLang = require(`@/assets/lang/en/navbar.json`);
  const footerLang = require(`@/assets/lang/en/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default StackCommerce;
