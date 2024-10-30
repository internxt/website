import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import Navbar from '@/components/layout/navbars/Navbar';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import FAQSection from '@/components/shared/sections/FaqSection';
import CtaSection from '@/components/shared/CtaSection';
import PaymentSection from '@/components/lifetime/PaymentSection';
import {HeroSection} from '@/components/shared/components/HeroSection';
import Button from '@/components/shared/Button';
import { getImage } from '@/lib/getImage';
import { SinglesDay } from '@/assets/types/singles-day';
import { PromoCodeName } from '@/lib/types';
import PlatformSection from '@/components/shared/components/PlatformSection';
import { TextAndCardsGroupColumnSection } from '@/components/shared/components/TextAndCardsGroupColumnSection';
import Image from 'next/image';
import { Eye, Fingerprint, LockKey, ShieldCheck } from '@phosphor-icons/react';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';

interface SinglesDayCelebrationTemplateProps {
  lang: string;
  langJson: SinglesDay;
  navbarLang: NavigationBarText;
  footerLang: FooterText;
  metatagsDescriptions: MetatagsDescription[];
}

const ALLOWED_LANGUAGES = ['en', 'zh', 'zh-tw'];

const SinglesdayCelebrationTemplate = ({
  lang,
  langJson,
  navbarLang,
  footerLang,
  metatagsDescriptions,
 
}: SinglesDayCelebrationTemplateProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'singles-day');
  const discount=0.2;
  const percent='80%'
  const currencySpecified='US';
  const locale = lang as string;
  const couponCode=PromoCodeName.SinglesDay;
  const Cards = [
      {
        icon: ShieldCheck,
        title: langJson.FeatureSection.cards[0].title,
        description: langJson.FeatureSection.cards[0].description,
      },
      {
        icon: LockKey,
        title: langJson.FeatureSection.cards[1].title,
        description: langJson.FeatureSection.cards[1].description,
      },
      {
        icon: Eye,
        title: langJson.FeatureSection.cards[2].title,
        description: langJson.FeatureSection.cards[2].description,
      },
      {
        icon: Fingerprint,
        title: langJson.FeatureSection.cards[3].title,
        description: langJson.FeatureSection.cards[3].description,
      },
    ];
  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="SinglesDay"
      lang={locale}
      specialOffer={`https://internxt.com/images/previewLink/LifetimePreviewLink.png`}
    >
      <Navbar textContent={navbarLang} lang={locale} cta={['default']} fixed />

     <div className="bg-gray-1">
      <HeroSection 
        TextComponent={
           <div className="flex flex-col items-center justify-center text-center md:text-left md:items-start md:justify-start">
          <p className='inline-block text-xl font-medium text-gray-80 bg-gray-10 p-2 mb-8 rounded-md text-center w-[160px]'>{langJson.HeroSection.offer}</p>
          <div className='mb-8'>
            <p className='text-6xl font-bold'>{langJson.HeroSection.title.previousBlueText}</p>
            <p className='text-6xl font-bold text-primary'>{langJson.HeroSection.title.blueText}</p>
            <p className='text-6xl font-bold'>{langJson.HeroSection.title.postBlueText}</p>
          </div>
          <p className='text-xl font-regular text-gray-100 mb-8'>{langJson.HeroSection.description}</p>
          <Button text={langJson.HeroSection.cta} className='mb-8' onClick={() => window.location.href = '#payment'} />
        </div>
        }
        imageProperties={{
          src: getImage('/images/lifetime/internxt_singles_day_offer.webp'),
          alt: 'Oferta especial Black Friday',
          width: 562,
          height: 529,
        }}
        background="bg-gray-1"

      />
      <PaymentSection 
        textContent={langJson.PaymentSection}
        discount={discount}
        showPriceBefore
        lang={locale}
        percent={percent}
        currencySpecified={currencySpecified}
        lifetimeMode="celebration"
        couponCode={couponCode}
      />
     <TextAndCardsGroupColumnSection
        TextComponent={
          <div className="flex max-w-[930px] flex-col space-y-6 text-center">
            <p className="text-5xl font-semibold text-gray-100">{langJson.FeatureSection.title}</p>
            <p className="max-w-[796px] text-xl text-gray-80">{langJson.FeatureSection.description}</p>
           <div className="flex justify-center">
            <Image
              src={getImage('/images/home/internxt_secure_cloud_storage.webp')}
              width={745}
              height={411}
              alt="Cloud Storage"
            />
          </div>
          </div>
        }
        cards={Cards}
        background='bg-gray-1'
        backgroundColorForCard='bg-white'
        
      />
      <PlatformSection textContent={langJson.FeatureSection}
       bgColor='bg-white' 
       textColor='text-gray-100' 
       textDescriptionColor='text-gray-80'
       />
      <CtaSection textContent={langJson.CtaSection1} url={'#payment'}/>
      <TestimonialsSection textContent={langJson.TestimonialsSection}/>
      <FAQSection textContent={langJson.FaqSection} bgColor='bg-gray-1'/>
      <CtaSection textContent={langJson.CtaSection2} url={'#payment'}/>
     </div>
       <MinimalFooter footerLang={footerLang.FooterSection} lang={locale} />
    </Layout>
     );
};
export async function getServerSideProps(ctx) {
    let lang = ctx.locale;

  if (!ALLOWED_LANGUAGES.includes(lang)) {
    lang = 'en';
  }
  cookies.setReferralCookie(ctx);

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/singles-day.json`);
  const testimonialsJson = require(`@/assets/lang/${lang}/home.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  
  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      testimonialsJson,
      navbarLang,
      footerLang
      },
  };
}
export default SinglesdayCelebrationTemplate;