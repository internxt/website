import { useState } from 'react';

import FeatureSection from '@/components/lifetime/FeatureSection';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import Navbar from '@/components/layout/navbars/Navbar';

import SignUp from '@/components/auth/SignUp';
import { Percent, X } from '@phosphor-icons/react';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import { GetServerSidePropsContext } from 'next';
import MostSecureSection from '@/components/affiliates/brave/MostSecureSection';
import AnimatedHeroSection from '@/components/shared/HeroSections/AnimatedHeroSection';
import Button from '@/components/shared/Button';

const StackCommerce = ({ lang, metatagsDescriptions, langJson, footerLang, navbarLang }): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'lifetime');

  const [openDialog, setOpenDialog] = useState(false);

  const onButtonClicked = () => {
    setOpenDialog(true);
  };

  return (
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

      <AnimatedHeroSection
        textComponent={
          <>
            <div className="mr-20 flex flex-col ">
              <h1 className="text-4xl font-bold text-white xl:text-5xl">{langJson.HeroSection.title}</h1>
              <h2 className="text-2xl font-semibold text-primary xl:text-3xl">{langJson.HeroSection.subtitle}</h2>
            </div>

            <div className="flex max-w-[400px] flex-row items-start justify-start space-x-2.5 rounded-lg bg-primary/25 p-4 xl:items-center">
              <p
                className="text-md font-regular text-white"
                dangerouslySetInnerHTML={{ __html: langJson.HeroSection.info }}
              ></p>
            </div>

            <Button onClick={onButtonClicked} text={langJson.HeroSection.cta} className="z-10" />
          </>
        }
      />

      <MostSecureSection textContent={langJson.MostSecureSection} onRedirectButtonClicked={onButtonClicked} />

      <FeatureSection textContent={langJson.FeatureSection} withoutCta />

      <MinimalFooter lang={lang} footerLang={footerLang.FooterSection} />
    </Layout>
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
