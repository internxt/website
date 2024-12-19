import { useState, useEffect } from 'react';
import { GetServerSidePropsContext } from 'next';

import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import CtaSection from '@/components/media-area/CtaSection';
import ProductsSection from '@/components/media-area/ProductsSection';
import SocialProofSection from '@/components/home/SocialProofSection';
import ThirdFeaturesSection from '@/components/media-area/FeatureSection';
import InternxtInTheNews from '@/components/media-area/InternxtInTheNews';
import AnalysisSection from '@/components/media-area/AnalysisSection';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { MediaAreaText } from '@/assets/types/media-area';
import { ComponentsInColumnSection } from '@/components/shared/components/ComponentsInColumnSection';
import { getImage } from '@/lib/getImage';
import Header from '@/components/shared/Header';
import { TextAndImageColumnSection } from '@/components/shared/components/TextAndImageColumnSection';
import RenderDescription from '@/components/shared/RenderDescription';
import { KitCard } from '@/components/media-area/components/KitCard';
import downloadItem from '@/lib/downloadItem';

interface MediaAreaProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarText: NavigationBarText;
  textContent: MediaAreaText;
  footerText: FooterText;
  lang: GetServerSidePropsContext['locale'];
}

const MediaArea = ({
  metatagsDescriptions,
  textContent,
  lang,
  navbarText,
  footerText,
}: MediaAreaProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'media-area');
  const locale = lang as string;
  const [inxtScreenshotMockups, setInxtScreenshotMockups] = useState('');
  useEffect(() => {
    downloadItem('internxt-screenshots-mockups.zip')
      .then((dataURL) => {
        setInxtScreenshotMockups(dataURL);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Media Area" lang={lang}>
      <Navbar textContent={navbarText} lang={locale} cta={['default']} fixed />

      <TextAndImageColumnSection
        TextComponent={
          <div className="flex w-full flex-shrink-0 flex-col items-center justify-center pt-10 text-center">
            <Header>{textContent.HeroSection.title}</Header>
            <h3 className="mb-6 w-full max-w-3xl text-xl font-normal text-gray-80">
              {textContent.HeroSection.description}
            </h3>
          </div>
        }
        imageProperties={{
          src: getImage('/images/home/internxt_secure_cloud_storage.webp'),
          alt: 'Internxt Secure Cloud Storage',
          width: 1920,
          height: 1080,
        }}
      />

      <ComponentsInColumnSection
        FirstComponent={
          <div className="flex w-screen bg-gray-1">
            <div className="flex w-full flex-col items-center justify-center px-5 py-20">
              <div className="flex max-w-[774px] flex-col items-center space-y-6 text-center">
                <p className="max-w-[500px] text-5xl font-semibold leading-tight text-gray-100">
                  {textContent.StandForPrivacySection.title}
                </p>
                <RenderDescription description={textContent.StandForPrivacySection.description} fontSize="text-xl" />
              </div>
            </div>
          </div>
        }
        SecondComponent={
          <div className="flex flex-col items-center justify-center gap-20 px-5">
            <div className="flex max-w-[914px] flex-col items-center gap-6 text-center">
              <p className="text-5xl font-semibold text-gray-100">{textContent.KitSection.title}</p>
              <p className="text-xl text-gray-80">{textContent.KitSection.description}</p>
            </div>
            <div className="flex flex-row flex-wrap items-stretch gap-10">
              <KitCard
                downloadImagesLink={`https://internxt.com/media-area/internxt-logo-set.zip`}
                image={getImage('/images/media-area/inxt-logo-set.svg')}
                textContent={textContent.KitSection.firstSection}
              />
              <KitCard
                downloadImagesLink={`${inxtScreenshotMockups}`}
                image={getImage('/images/media-area/screenshots-mockup.webp')}
                textContent={textContent.KitSection.secondSection}
              />
            </div>
            <p className="max-w-[976px] text-center text-xl text-gray-50">
              <span className="font-semibold">{textContent.KitSection.footer.boldText}</span>{' '}
              {textContent.KitSection.footer.normalText}
            </p>
          </div>
        }
      />

      <CtaSection textContent={textContent.CtaSection} />

      <ProductsSection textContent={textContent.ProductsSection} lang={lang} />

      <SocialProofSection textContent={textContent.InvestorsSection} lang={lang} />

      <ThirdFeaturesSection textContent={textContent.FeatureSection} />

      <InternxtInTheNews textContent={textContent.InternxtInTheNewsSection} />

      <AnalysisSection textContent={textContent.AnalysisSection} />

      <CtaSection textContent={textContent.CtaSection} />

      <Footer textContent={footerText} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/en/media-area.json`);
  const navbarText = require(`@/assets/lang/en/navbar.json`);
  const footerText = require(`@/assets/lang/en/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      textContent,
      navbarText,
      footerText,
    },
  };
}

export default MediaArea;
