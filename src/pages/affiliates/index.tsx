import Link from 'next/link';
import { CalendarBlank, ClockCountdown, Devices, FolderLock, ShareNetwork } from '@phosphor-icons/react';

import FaqSection from '@/components/shared/sections/FaqSection';
import FeatureSection from '@/components/affiliates/FeatureSection';
import { HeroSection } from '@/components/shared/components/HeroSection';
import WhatIsInternxtSection from '@/components/affiliates/WhatIsInternxtSection';
import WhyJoinSection from '@/components/affiliates/WhyJoinSection';
import FileParallaxSection from '@/components/home/FileParallaxSection';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import CtaSection from '@/components/shared/CtaSection';
import { AffiliatesText } from '@/assets/types/affiliates';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { IMPACT_LOGIN_USER, SIGNUP_DRIVE_WEB } from '@/constants';
import { TextAndCardsGroupColumnSection } from '@/components/shared/components/TextAndCardsGroupColumnSection';
import { ComponentsInARowSection } from '@/components/shared/components/ComoponentsInARowSection';
import Button from '@/components/shared/Button';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import RenderDescription from '@/components/shared/RenderDescription';

interface AffiliatesProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: AffiliatesText;
  footerLang: FooterText;
  lang: string;
}

const InfinityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" viewBox="0 0 256 256" width="48" height="48">
    <rect width="48" height="48" fill="none" />
    <path
      d="M106.63,152.13l-8.69,9.81a48,48,0,1,1,0-67.88l60.12,67.88a48,48,0,1,0,0-67.88l-8.69,9.81"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="16"
    />
  </svg>
);

const ImageAndTextRow = ({ textContent, imageUrl, alt, direction = 'right' }) => {
  const containerObjDirection = direction === 'left' ? 'flex-row' : 'flex-row-reverse';
  return (
    <div className={`flex flex-col-reverse items-center justify-center gap-20 lg:${containerObjDirection}`}>
      <div className="flex">
        <Image
          src={imageUrl}
          loading="lazy"
          width={496}
          height={520}
          alt={alt}
          className="rounded-[32px]"
          draggable={false}
        />
      </div>
      <div className="flex max-w-[388px] flex-col items-center gap-4 text-center lg:items-start lg:text-left">
        <h2 className="text-3xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</h2>
        <RenderDescription description={textContent.description} />
      </div>
    </div>
  );
};

const HERO_SECTION_CTA_BUTTON = 'https://app.impact.com/campaign-promo-signup/Internxt.brand?execution=e3s1';

const Affiliates = ({ langJson, lang, metatagsDescriptions, navbarLang, footerLang }: AffiliatesProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((item) => item.id === 'affiliates');

  const groupCards = [
    {
      icon: Devices,
      title: langJson.WhatWeDoSection.cards[0].title,
      description: langJson.WhatWeDoSection.cards[0].description,
    },
    {
      icon: FolderLock,
      title: langJson.WhatWeDoSection.cards[1].title,
      description: langJson.WhatWeDoSection.cards[1].description,
    },
    {
      icon: ShareNetwork,
      title: langJson.WhatWeDoSection.cards[2].title,
      description: langJson.WhatWeDoSection.cards[2].description,
    },
    {
      icon: ClockCountdown,
      title: langJson.WhatWeDoSection.cards[3].title,
      description: langJson.WhatWeDoSection.cards[3].description,
    },
  ];

  const commissionStructureIcons = [
    {
      icon: CalendarBlank,
    },
    {
      icon: InfinityIcon,
    },
  ];

  const logos = [
    {
      src: getImage('/logos/featured/techradar.svg'),
      alt: 'Techradar logo',
      width: 130,
      height: 23,
    },
    {
      src: getImage('/logos/featured/toms_guide.svg'),
      alt: "Tom's guide logo",
      width: 160,
      height: 30,
    },
    {
      src: getImage('/logos/featured/itsfoss-logo.webp'),
      alt: 'It is foss logo',
      width: 110,
      height: 27,
    },
    {
      src: getImage('/logos/featured/zdnet.svg'),
      alt: 'ZDNET logo',
      width: 120,
      height: 22,
    },
    {
      src: getImage('/logos/featured/heise_online.svg'),
      alt: 'Heise logo',
      width: 180,
      height: 34,
    },
  ];

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Affiliates" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection
        TextComponent={
          <div className="flex w-full flex-col items-center space-y-4 text-center lg:items-start lg:text-left">
            <div className="flex w-max items-center rounded-lg bg-gray-5 px-4 py-2">
              <p className="text-xl font-medium text-gray-80">{langJson.HeroSection.label}</p>
            </div>
            <div className="flex w-full max-w-[533px] flex-col space-y-8">
              <h1 className="text-6xl font-semibold leading-tight">
                <span className="text-primary">{langJson.HeroSection.title.blueText}</span>
                {langJson.HeroSection.title.normalText}
              </h1>
              <p className="text-xl text-gray-80">{langJson.HeroSection.description}</p>
              {/* CTA Section */}
              <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
                <button
                  onClick={() => {
                    window.open(HERO_SECTION_CTA_BUTTON, '_blank', 'noopener noreferrer nofollow');
                  }}
                  className="flex cursor-pointer items-center rounded-lg border border-primary bg-primary px-5 py-3 hover:bg-primary-dark"
                >
                  <p className="text-lg font-medium text-white">{langJson.HeroSection.signUp}</p>
                </button>
                <Link
                  href={IMPACT_LOGIN_USER}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex cursor-pointer rounded-lg border border-primary bg-transparent px-5 py-3 hover:bg-blue-10"
                >
                  <p className="text-lg font-medium text-primary">{langJson.HeroSection.logIn}</p>
                </Link>
              </div>
            </div>
          </div>
        }
        imageProperties={{
          src: getImage('/images/affiliates/internxt-private-cloud-storage-service.webp'),
          alt: 'Internxt private cloud storage service',
          width: 496,
          height: 520,
        }}
      />

      <FeatureSection textContent={langJson.FeatureSection} />

      <WhatIsInternxtSection textContent={langJson.WhatIsInternxtSection} />

      <WhyJoinSection textContent={langJson.WhyJoinSection} />

      <TextAndCardsGroupColumnSection
        TextComponent={
          <div className="flex max-w-[930px] flex-col space-y-6 text-center">
            <p className="text-5xl font-semibold text-gray-100">{langJson.WhatWeDoSection.title}</p>
            <p className="max-w-[796px] text-xl text-gray-80">{langJson.WhatWeDoSection.description}</p>
          </div>
        }
        cards={groupCards}
      />

      <ComponentsInARowSection
        backgroundColor="bg-gray-1"
        FirstComponent={
          <p className="text-center text-5xl font-semibold text-gray-100">
            {langJson.CommissionStructureSection.title}
          </p>
        }
        SecondComponent={
          <div className="flex w-full flex-row flex-wrap justify-center gap-5">
            {langJson.CommissionStructureSection.cards.map((card, index) => {
              const Icon = commissionStructureIcons[index]?.icon;

              return (
                <div
                  key={index}
                  className="flex w-full max-w-[488px] flex-col items-center gap-9 rounded-2xl bg-black p-10 text-center text-white"
                >
                  <div className="flex flex-col gap-4">
                    <p className="text-2xl font-medium">{langJson.CommissionStructureSection.startEarning}</p>
                    <div className="flex flex-col items-center gap-2">
                      {Icon ? <Icon size={48} className="text-primary" /> : null}
                      <p className="text-5xl font-semibold">{card.OFF}</p>
                      <p className="text-2xl font-medium">{card.plans}</p>
                    </div>
                  </div>
                  <Button
                    text={langJson.CommissionStructureSection.cta}
                    onClick={() => (window.location.href = SIGNUP_DRIVE_WEB)}
                  />
                </div>
              );
            })}
          </div>
        }
      />

      <ComponentsInARowSection
        FirstComponent={
          <>
            <ImageAndTextRow
              direction={'left'}
              textContent={langJson.DescribingPlansSection.drive}
              imageUrl={getImage('/images/affiliates/internxt-b2b-b2c-affiliates.webp')}
              alt={'Internxt B2C & B2B'}
            />
            <ImageAndTextRow
              textContent={langJson.DescribingPlansSection.s3}
              imageUrl={getImage('/images/affiliates/internxt-s3-storage-affiliates.webp')}
              alt={'Internxt B2C & B2B'}
            />
          </>
        }
        SecondComponent={
          <div className="flex flex-row flex-wrap justify-center gap-32 pt-10">
            {langJson.DescribingPlansSection.feat.map((feature) => (
              <div className="flex max-w-[220px] flex-col gap-2 text-center">
                <p className="whitespace-nowrap text-5xl font-semibold text-primary">{feature.title}</p>
                <p className="text-xl font-medium text-gray-80">{feature.description}</p>
              </div>
            ))}
          </div>
        }
      />

      <div className="flex flex-col items-center justify-center gap-12 bg-gray-1 px-5 py-20 text-center">
        <h2 className="text-5xl font-semibold">
          {langJson.Number1Section.title.line1}{' '}
          <span className="text-primary">{langJson.Number1Section.title.blue} </span>
          {langJson.Number1Section.title.line2}
        </h2>
        <div className="flex h-full w-full flex-row flex-wrap justify-center gap-10">
          {logos.map((image) => (
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              loading="lazy"
              draggable={false}
            />
          ))}
        </div>
      </div>

      <FileParallaxSection />

      <FaqSection textContent={langJson.FaqSection} />

      <CtaSection
        textContent={langJson.CtaSection}
        url={
          'https://app.impact.com/campaign-mediapartner-signup/Internxt.brand?type=dm&io=e2AXxeEh7q3EO8TzTRQ1yfzRimhVUUQ4VIYp7wvigF46G5y9GkCkRC94J2GfuR%2Fa'
        }
      />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/en/affiliates.json`);
  const navbarLang = require(`@/assets/lang/en/navbar.json`);
  const footerLang = require(`@/assets/lang/en/footer.json`);

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

export default Affiliates;
