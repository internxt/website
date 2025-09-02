import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import MostSecureSection from '@/components/affiliates/brave/MostSecureSection';
import AnimatedHeroSection from '@/components/shared/HeroSections/AnimatedHeroSection';
import Button from '@/components/shared/Button';
import { RedeemText } from '@/assets/types/redeem';
import FeatureSection from '@/components/lifetime/FeatureSection';
import SignUp from '@/components/auth/SignUp';
import { X } from '@phosphor-icons/react';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';

interface RedeemPageProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: RedeemText;
  footerLang: FooterText;
  pathname: string;
  lang: string;
}

const ALLOWED_PATHS = ['stackcommerce', 'coingate', 'driffle'];

const SpecialOfferPage = ({
  metatagsDescriptions,
  langJson,
  navbarLang,
  footerLang,
  pathname,
  lang,
}: RedeemPageProps): JSX.Element => {
  const router = useRouter();
  const selectedPathname = ALLOWED_PATHS.find((p) => p === pathname);

  useEffect(() => {
    if (!selectedPathname) {
      router.replace('/');
    }
  }, [selectedPathname, router]);

  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'special-offer');

  const [openDialog, setOpenDialog] = useState(false);

  const onButtonClicked = () => {
    setOpenDialog(true);
  };

  const ALLOWED_PROVIDERS = ['STACKCOMMERCE', 'COINGATE', 'DRIFFLE'] as const;

  type Provider = typeof ALLOWED_PROVIDERS[number];

  const toProvider = (path: string): Provider | undefined => {
    const upper = path.toUpperCase();
    return ALLOWED_PROVIDERS.includes(upper as Provider) ? (upper as Provider) : undefined;
  };
  const rawAffiliate = ALLOWED_PATHS.find((p) => p === pathname) ?? '';
  const affiliate = rawAffiliate.charAt(0).toUpperCase() + rawAffiliate.slice(1);
  const provider = toProvider(rawAffiliate);
  const parseText = (text: string) => (typeof text === 'string' ? text.replace(/{{enterpise}}/g, affiliate) : text);

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
            <SignUp textContent={langJson.Auth} provider={provider} />
          </div>
        </div>
      ) : null}

      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed mode="payment" isLinksHidden />

      <AnimatedHeroSection
        textComponent={
          <>
            <div className="flex flex-col lg:space-y-4">
              <h1 className="text-4xl font-bold text-white xl:text-5xl">{langJson.HeroSection.title}</h1>
              <h2 className="text-2xl font-semibold text-primary xl:text-3xl">{langJson.HeroSection.subtitle}</h2>
            </div>

            <div className="flex max-w-[400px] flex-row items-start justify-start space-x-2.5 rounded-lg bg-primary/25 p-4 xl:items-center">
              <p
                className="text-md font-regular text-white"
                dangerouslySetInnerHTML={{ __html: parseText(langJson.HeroSection.info) }}
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

export async function getServerSideProps(ctx) {
  const lang = 'es';
  const pathname = ctx.params.filename;

  const metatagsDescriptions = require(`@/assets/lang/es/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/en/redeem.json`);
  const navbarLang = require(`@/assets/lang/es/navbar.json`);
  const footerLang = require(`@/assets/lang/es/footer.json`);

  return {
    props: {
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
      lang,
      pathname,
    },
  };
}

export default SpecialOfferPage;
