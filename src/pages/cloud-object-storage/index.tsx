import { CloudObjectStorageText } from '@/assets/types/cloud-object-storage';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { HowMuchYouNeedSection } from '@/components/cloud-object-storage/HowMuchYouNeedSection';
import { PredictablePricingSection } from '@/components/cloud-object-storage/PredictablePricingSection';
import { CloudObjectStoragePriceCardSection } from '@/components/cloud-object-storage/PriceCardSection';
import { CloudObjectStorageWhyChooseInternxtSection } from '@/components/cloud-object-storage/WhyChooseInternxtSection';
import { HeroSection } from '@/components/shared/components/HeroSection';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import FAQSection from '@/components/shared/sections/FaqSection';
import { GetServerSidePropsContext } from 'next';
import Header from '@/components/shared/Header';
import Button from '@/components/shared/Button';
import { getImage } from '@/lib/getImage';
import { ContactSalesForm } from '@/components/shared/ContactSalesForm';
import Image from 'next/image';
import { Check } from '@phosphor-icons/react';
import { isMobile } from 'react-device-detect';
interface CloudObjectStorageProps {
  metatagsDescription: MetatagsDescription[];
  navbarText: NavigationBarText;
  textContent: CloudObjectStorageText;
  footerText: FooterText;
  locale: GetServerSidePropsContext['locale'];
}

const CloudObjectStorage = ({
  metatagsDescription,
  navbarText,
  textContent,
  footerText,
  locale,
}: CloudObjectStorageProps): JSX.Element => {
  const metatags = metatagsDescription.filter((metatag) => metatag.id === 'cloud-object-storage')[0];

  const lang = locale as string;

  const scrollToTop = () => {
    document.querySelector('#contactSales')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <Layout title={metatags.title} description={metatags.description}>
      <Navbar cta={['default']} lang={lang} textContent={navbarText} fixed />

      <HeroSection
        TextComponent={
          <>
            <div
              className={`flex min-h-[92px] items-center justify-center gap-4 rounded-2xl border-2 border-black/15 bg-black/50 text-center ${
                isMobile ? 'px-16a' : 'px-24 md:px-4'
              } md:max-h-[92px] md:min-h-[92px] md:min-w-[390px] md:max-w-[390px]`}
            >
              <Image
                src={getImage('/images/cloud-object-storage/discount.svg')}
                alt="S3 discount badge"
                width={40}
                height={56}
                draggable={false}
              />
              <p className="text-center text-3xl font-bold text-green-1">{textContent.HeroSection.firstYearDiscount}</p>
            </div>

            <div className="flex max-w-[533px] flex-col items-center justify-center gap-8 pt-4 text-center text-white lg:items-start lg:text-left">
              <Header withoutLeading className="leading-none" textHeightForDesk="sm:text-7xl">
                <span className="font-bold lg:text-5xl">
                  {textContent.HeroSection.title.line1}
                  {textContent.HeroSection.title.line2}
                </span>
              </Header>
              <div className="mx-auto flex min-w-[280px] max-w-[300px] flex-col space-y-2 px-4 text-start md:px-0 lg:mx-0">
                {textContent.HeroSection.features.map((feat) => (
                  <div key={feat} className="flex min-w-[300px] flex-row gap-2 md:min-w-[400px]">
                    <Check className="min-h-[24px] min-w-[24px] text-green-1 " weight="bold" />
                    <p className="font-regular text-lg text-white ">{feat}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 text-start">
                <span className="font-regular text-lg text-white">
                  {textContent.HeroSection.priceInfoLine1.normalText}
                  <span className="font-bold">{textContent.HeroSection.priceInfoLine1.boldText}</span>
                  <span className="line-through">{textContent.HeroSection.priceInfoLine1.crossedText}</span>
                </span>
                <span className="font-regular text-lg text-white">
                  {textContent.HeroSection.priceInfoLine2.normalText}
                  <span className="font-bold">{textContent.HeroSection.priceInfoLine2.boldText}</span>
                  <span className="line-through">{textContent.HeroSection.priceInfoLine2.crossedText}</span>
                </span>
              </div>

              <div className="flex flex-row items-center gap-4">
                <Button
                  className="!w-full lg:!w-max"
                  text={textContent.HeroSection.cta}
                  onClick={() => (window.location.hash = '#storageSection')}
                />
                <p className="text-center text-xl text-gray-40">{textContent.HeroSection.separator}</p>
                <Button className="!w-full lg:!w-max" text={textContent.HeroSection.cta2} onClick={scrollToTop} />
              </div>
            </div>
          </>
        }
        style={{
          background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #161616 100%)',
        }}
        imageProperties={{
          src: getImage('/images/cloud-object-storage/s3_internxt.webp'),
          alt: 'cloud object storage',
          width: 631,
          height: 745,
        }}
      />

      <PredictablePricingSection textContent={textContent.PredictablePricingSection} />

      <CloudObjectStoragePriceCardSection textContent={textContent.PriceCardSection} />

      <HowMuchYouNeedSection textContent={textContent.HowMuchYouNeedSection} />

      <CloudObjectStorageWhyChooseInternxtSection textContent={textContent.WhyChooseInternxtSection} />

      <FAQSection textContent={textContent.FaqSection} />

      <ContactSalesForm textContent={textContent.ContactSales} />

      <Footer textContent={footerText} lang={lang} />
    </Layout>
  );
};

export function getServerSideProps(ctx: GetServerSidePropsContext) {
  const locale = ctx.locale as string;

  const metatagsDescription = require(`@/assets/lang/${locale}/metatags-descriptions.json`);
  const navbarText = require(`@/assets/lang/${locale}/navbar.json`);
  const textContent = require(`@/assets/lang/${locale}/cloud-object-storage.json`);
  const footerText = require(`@/assets/lang/${locale}/footer.json`);

  return {
    props: {
      metatagsDescription,
      navbarText,
      textContent,
      footerText,
      locale,
    },
  };
}

export default CloudObjectStorage;
