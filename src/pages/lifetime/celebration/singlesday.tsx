import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import Navbar from '@/components/layout/navbars/Navbar';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import FAQSection from '@/components/shared/sections/FaqSection';
import CtaSection from '@/components/shared/CtaSection';
<<<<<<< Updated upstream
import PaymentSection from '@/components/lifetime/celebration/singles-day/PaymentSection';
import FeatureSection from '@/components/lifetime/celebration/singles-day/FeatureSection';
import HeroSection from '@/components/lifetime/celebration/singles-day/HeroSection';
import { PromoCodeName } from '@/lib/types';

=======
import FeatureSection from '@/components/lifetime/celebration/singles-day/FeatureSection';
import PaymentSection from '@/components/lifetime/PaymentSection';
import {HeroSection} from '@/components/shared/components/HeroSection';
import Button from '@/components/shared/Button';
import { getImage } from '@/lib/getImage';
import { PromoCodeName } from '@/lib/types';



>>>>>>> Stashed changes
const SinglesdayCelebration = ({
  lang,
  langJson,
  navbarLang,
  footerLang,
  metatagsDescriptions,
  textContent
  
}) => {
const metatags = metatagsDescriptions.filter((desc) => desc.id === 'singles-day');
const discount=0.2;
const percent='80%'
const currencySpecified='US';
const locale = lang as string;
<<<<<<< Updated upstream
const couponCode=PromoCodeName.SinglesDay;
=======
const couponCode =PromoCodeName.SinglesDay
>>>>>>> Stashed changes

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="SinglesDay"
      lang={lang}
      specialOffer={`https://internxt.com/images/previewLink/LifetimePreviewLink.png`}
    >
    <Navbar textContent={navbarLang} lang={locale}  cta={['default']} fixed mode="payment" isLinksHidden hideNavbar />
    <div className="mt-16">
<<<<<<< Updated upstream
      <HeroSection textContent={langJson.HeroSection} percent={percent}/>
      <PaymentSection
=======
      <HeroSection 
        TextComponent={
          <>
          <>
            <p className='text-6xl font-bold text-primary'>{langJson.HeroSection.title}</p>
            <p className='text-xl font-regular text-gay-100'>{langJson.HeroSection.description}</p>
          </>
              <Button text={langJson.HeroSection.cta}></Button></>
        }
        imageProperties={{
            src: getImage('/images/lifetime/Group_1194.png'),
            alt: 'Oferta especial Black Friday',
            width: 562,
            height: 529,
          }}
        background="bg-gray-1" 
      />

      <PaymentSection 
>>>>>>> Stashed changes
        textContent={langJson.PaymentSection}
        discount={discount}
        showPriceBefore
        lang={lang}
        percent={percent}
        currencySpecified={currencySpecified}
<<<<<<< Updated upstream
        lifetimeMode="celebration"
        couponCode={couponCode}
      />
      <FeatureSection textContent={langJson.FeatureSection} backgroundColor='bg-white' />
      <CtaSection textContent={textContent.CtaSection1} url={''}/>
      <TestimonialsSection textContent={textContent.TestimonialsSection}/>
      <FAQSection textContent={textContent.FaqSection} bgColor='bg-gray-1'/>
      <CtaSection textContent={textContent.CtaSection2} url={''}/>
=======
        couponCode={couponCode}
        lifetimeMode="celebration"
      />
      <FeatureSection textContent={langJson.FeatureSection} backgroundColor='bg-gray-1'  />
      <CtaSection textContent={langJson.CtaSection1} url={''}/>
      <TestimonialsSection textContent={langJson.TestimonialsSection}/>
      <FAQSection textContent={langJson.FaqSection} bgColor='bg-gray-1'/>
      <CtaSection textContent={langJson.CtaSection2} url={''}/>
>>>>>>> Stashed changes
    </div>
    <MinimalFooter footerLang={footerLang.FooterSection} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  let lang = 'zh';

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/singles-day.json`);
  const testimonialsJson = require(`@/assets/lang/${lang}/home.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
<<<<<<< Updated upstream
  const textContent = require(`@/assets/lang/${lang}/singles-day.json`);
=======
  
>>>>>>> Stashed changes

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      testimonialsJson,
      navbarLang,
      footerLang,
<<<<<<< Updated upstream
      textContent
=======
>>>>>>> Stashed changes
    },
  };
}

export default SinglesdayCelebration;
