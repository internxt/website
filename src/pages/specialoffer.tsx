import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import { HeroSection } from '@/components/shared/components/HeroSection';
import CtaSection from '@/components/shared/CtaSection';
import { Eye, Fingerprint, LockKey, ShieldCheck } from '@phosphor-icons/react';
import { getImage } from '@/lib/getImage';
import usePricing from '@/hooks/usePricing';
import { PromoCodeName } from '@/lib/types';
import { Interval, stripeService } from '@/services/stripe.service';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { ComponentsInColumnSection } from '@/components/shared/components/ComponentsInColumnSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { PartnerDiscountText } from '@/assets/types/partner-discount';
import Image from 'next/image';
import { CardGroup } from '@/components/shared/CardGroup';
import Link from 'next/link';
import Header from '@/components/shared/Header';

interface PartnerDiscountProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: PartnerDiscountText;
  footerLang: FooterText;
}

const PartnerDiscount = ({
  metatagsDescriptions,
  langJson,
  navbarLang,
  footerLang,
}: PartnerDiscountProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'special-offer');
  const lang = 'en';
  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
  } = usePricing({
    couponCode: PromoCodeName.SoftSales,
  });

  const cardsData = [
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

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    stripeService.redirectToCheckout(
      priceId,
      currencyValue,
      'individual',
      isCheckoutForLifetime,
      individualCoupon?.name,
    );
  };

  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Partners" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['priceTable']} fixed isLinksHidden />

      <HeroSection
        TextComponent={
          <div className="flex flex-col gap-10">
            <div className="flex max-w-[533px] flex-col items-center justify-center space-y-10 lg:items-start">
              <div className="flex flex-row rounded-lg bg-gray-5 px-5 py-2">
                <p className="text-xl font-medium text-gray-80">{langJson.HeroSection.header}</p>
              </div>
              <div className="flex flex-col space-y-8">
                <div className="flex flex-col text-center lg:text-start">
                  <p className="text-6xl font-semibold">
                    {langJson.HeroSection.title.normalText}
                    <span className="text-6xl font-semibold text-primary">{langJson.HeroSection.title.blueText}</span>
                  </p>
                </div>
                <p className="text-center text-xl text-gray-80 lg:text-left">
                  {langJson.HeroSection.description.normal}{' '}
                  <span className="font-bold text-primary">{langJson.HeroSection.description.blue}</span>
                  {langJson.HeroSection.description.normal1}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-x-8 space-y-5 lg:flex-row lg:justify-start lg:space-y-0">
              <Link
                href={'#priceTable'}
                className={`z-10 flex w-max justify-center rounded-lg bg-primary px-10 py-3 text-xl font-medium text-white hover:bg-primary-dark`}
              >
                {langJson.HeroSection.cta}
              </Link>
            </div>
          </div>
        }
        imageProperties={{
          src: getImage('/images/partners-discount/internxt_cloud_storage.webp'),
          alt: 'Internxt Partners Discount',
          width: 671,
          height: 563,
        }}
      />

      <PricingSectionWrapper
        textContent={langJson.PaymentSection}
        decimalDiscount={{
          individuals: decimalDiscount,
          lifetime: decimalDiscount,
        }}
        lang={lang}
        products={products}
        popularPlanBySize={'5TB'}
        loadingCards={loadingCards}
        startIndividualPlansFromInterval={Interval.Lifetime}
        hideFreeCard
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideSwitchSelector
        hideBusinessSelector
        showPromo={false}
        CustomDescription={
          <>
            <Header maxWidth="max-w-4xl">{langJson.PaymentSection.planTitles.homePage}</Header>
            <span className="text-regular max-w-[800px] text-xl text-gray-80">
              {langJson.PaymentSection.planDescription}
            </span>
          </>
        }
      />

      <CtaSection textContent={langJson.CtaSection} url={`#priceTable`} />

      <ComponentsInColumnSection
        FirstComponent={
          <div className="flex flex-col items-center gap-9">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-5xl font-semibold text-gray-100">{langJson.FeatureSection.title}</h2>
              <h3 className="max-w-[774px] text-xl text-gray-80">{langJson.FeatureSection.description}</h3>
            </div>
            <div className="content flex h-full w-full flex-col px-5 pt-6">
              <Image
                src={getImage('/images/home/internxt_secure_cloud_storage.webp')}
                alt="Internxt secure cloud storage"
                draggable={false}
                loading="lazy"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        }
        SecondComponent={
          <div className="flex flex-col items-center">
            <CardGroup cards={cardsData} backgroundColorCard="bg-white" />
          </div>
        }
        backgroundColor="bg-gray-1"
      />

      <TestimonialsSection textContent={langJson.TestimonialsSection} />

      <CtaSection textContent={langJson.CtaSection1} url={`#priceTable`} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/en/specialoffer/specialOffer.json`);
  const navbarLang = require(`@/assets/lang/en/navbar.json`);
  const footerLang = require(`@/assets/lang/en/footer.json`);

  return {
    props: {
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default PartnerDiscount;
