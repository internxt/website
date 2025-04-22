import Layout from '@/components/layout/Layout';
import { Eye, Fingerprint, LockKey, ShieldCheck } from '@phosphor-icons/react';
import { PromoCodeName } from '@/lib/types';
import Footer from '@/components/layout/footers/Footer';
import Button from '@/components/shared/Button';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import RevealY from '@/components/components/RevealY';
import PriceTable from '@/components/annual-plans-for-affiliates/components/PriceTable';
import usePricing from '@/hooks/usePricing';
import { checkout } from '@/lib/auth';
import { ComponentsInColumnSection } from '@/components/shared/components/ComponentsInColumnSection';
import { CardGroup } from '@/components/shared/CardGroup';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/annual-plans-for-affiliates/HeroSection';
import CtaSection from '@/components/shared/CtaSection';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { AffiliatesPartnersText } from '@/assets/types/afiliates-partners';

interface CloudWardsProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: AffiliatesPartnersText;
  footerLang: FooterText;
  lang: string;
}

export type CardsType = 'all' | 'one';

function Cloudwards({ langJson, lang, metatagsDescriptions, footerLang, navbarLang }: CloudWardsProps): JSX.Element {
  const metatags = metatagsDescriptions.filter((item) => item.id === 'cloudwards');
  const offerDiscount = 15;
  const { currencyValue } = usePricing({});

  function handlePriceCardButton(planId, coupon) {
    checkout({
      planId: planId,
      planType: 'individual',
      mode: 'payment',
      currency: currencyValue,
      promoCodeId: PromoCodeName.StarWars ?? undefined,
    });
  }

  const cardsForFeatureSection = [
    {
      icon: ShieldCheck,
      title: langJson.FeatureSection.cards![0].title,
      description: langJson.FeatureSection.cards![0].description,
    },
    {
      icon: LockKey,
      title: langJson.FeatureSection.cards![1].title,
      description: langJson.FeatureSection.cards![1].description,
    },
    {
      icon: Eye,
      title: langJson.FeatureSection.cards![2].title,
      description: langJson.FeatureSection.cards![2].description,
    },
    {
      icon: Fingerprint,
      title: langJson.FeatureSection.cards![3].title,
      description: langJson.FeatureSection.cards![3].description,
    },
  ];

  const InfoTextComponent = (
    <p className="text-xl text-gray-80">
      {langJson.HeroSectionV2.info}
      <span className="font-semibold text-gray-80">{langJson.HeroSectionV2.infoHighlight}</span>
    </p>
  );

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Affiliates" lang={lang}>
      <Navbar lang={lang} textContent={navbarLang} cta={['payment']} />

      <HeroSection textContent={langJson.HeroSectionV2} InfoTextComponent={InfoTextComponent} isCloudWards />

      <PriceTable
        textContent={langJson.PriceTable}
        handlePriceCardButton={handlePriceCardButton}
        couponType={PromoCodeName.CloudwardsCoupon}
        discount={offerDiscount}
        billingFrequency="lifetime"
        isCloudwards
      />

      <ComponentsInColumnSection
        FirstComponent={
          <div className="flex w-full flex-col items-center gap-9">
            <div className="flex max-w-[774px] flex-col items-center gap-6 text-center">
              <h2 className="text-5xl font-semibold text-gray-100">{langJson.FeatureSection.title}</h2>
              <p className="text-xl text-gray-80">{langJson.FeatureSection.description}</p>
            </div>
          </div>
        }
        SecondComponent={
          <div className="flex flex-col items-center">
            <CardGroup cards={cardsForFeatureSection} backgroundColorCard="bg-white" />
          </div>
        }
        backgroundColor="bg-gray-1"
      />

      <div className="mt-20 flex w-full flex-col items-center gap-9">
        <div className="flex max-w-[774px] flex-col items-center gap-6 text-center">
          <h2 className="max-w-[550px] text-5xl font-semibold text-gray-100">{langJson.FeatureSectionV2.title}</h2>
          <p className="text-xl text-gray-80">{langJson.FeatureSectionV2.description}</p>
        </div>
        <div className="flex flex-col items-center ">
          <Button
            text={langJson.FeatureSectionV2.cta}
            onClick={() => {
              document.querySelector('#payment')?.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
              });
            }}
          />
          <RevealY className="content flex h-full w-full flex-col px-5 py-5 pb-5">
            <Image
              src={getImage('/images/home/internxt_secure_cloud_storage.webp')}
              alt="Internxt secure cloud storage"
              draggable={false}
              loading="lazy"
              width={757}
              height={426}
            />
          </RevealY>
        </div>
      </div>

      <CtaSection
        textContent={langJson.CtaSection['two']}
        url="#payment"
        customDescription={
          <p className="font-regular max-w-[500px] text-xl text-white">{langJson.CtaSection['two'].description}</p>
        }
      />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const langJson = require(`@/assets/lang/en/affiliates-partners-template.json`);
  const homeJson = require(`@/assets/lang/en/home.json`);
  const footerLang = require(`@/assets/lang/en/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      navbarLang,
      langJson,
      homeJson,
      footerLang,
    },
  };
}

export default Cloudwards;
