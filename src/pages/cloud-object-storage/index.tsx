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
import Button from '@/components/shared/Button';
import { getImage } from '@/lib/getImage';
import { ContactSalesForm } from '@/components/shared/ContactSalesForm';

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
          <div className="flex max-w-[533px] flex-col items-center justify-center gap-8 pb-6 pt-10 text-center text-white lg:items-start lg:pt-0 lg:text-left">
            <h1 className="text-3xl font-semibold text-white lg:text-5xl">
              {lang === 'es' ? (
                <>
                  {textContent.HeroSection.title.line2} {textContent.HeroSection.title.line1}
                </>
              ) : (
                <>
                  {textContent.HeroSection.title.line1}
                  {textContent.HeroSection.title.line2}
                </>
              )}
            </h1>
            <p className="px-10 text-xl lg:px-0">{textContent.HeroSection.description}</p>
            <div className="flex flex-row items-center gap-4 pb-16 lg:pb-0">
              <Button
                className="w-full lg:w-max"
                text={textContent.HeroSection.cta}
                onClick={() => (window.location.hash = '#storageSection')}
              />
              <p className="text-center text-xl text-gray-40">{textContent.HeroSection.separator}</p>
              <Button className="w-full lg:w-max" text={textContent.HeroSection.cta2} onClick={scrollToTop} />
            </div>
          </div>
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
