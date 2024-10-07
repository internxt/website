import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import Navbar from '@/components/layout/navbars/Navbar';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import FAQSection from '@/components/shared/sections/FaqSection';
import CtaSection from '@/components/shared/CtaSection';
import PaymentSection from '@/components/lifetime/celebration/singles-day/PaymentSection';
import FeatureSection from '@/components/lifetime/celebration/singles-day/FeatureSection';
import HeroSection from '@/components/lifetime/celebration/singles-day/HeroSection';

const SinglesdayCelebrationTemplate = ({
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
//const couponCode=PromoCodeName.SinglesDay;

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="SinglesDay"
      lang={lang}
      specialOffer={`https://internxt.com/images/previewLink/LifetimePreviewLink.png`}
    >
    <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed mode="payment" isLinksHidden hideNavbar />
    <div className="mt-16">
      <HeroSection textContent={langJson.HeroSection} percent={percent}/>
      <PaymentSection
        textContent={langJson.PaymentSection}
        discount={discount}
        showPriceBefore
        lang={lang}
        percent={percent}
        currencySpecified={currencySpecified}
        lifetimeMode="celebration"
      />
      <FeatureSection textContent={langJson.FeatureSection} backgroundColor='bg-white' />
      <CtaSection textContent={textContent.CtaSection1} url={''}/>
      <TestimonialsSection textContent={textContent.TestimonialsSection}/>
      <FAQSection textContent={textContent.FaqSection} bgColor='bg-gray-1'/>
      <CtaSection textContent={textContent.CtaSection2} url={''}/>
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
  const textContent = require(`@/assets/lang/${lang}/singles-day.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      testimonialsJson,
      navbarLang,
      footerLang,
      textContent
    },
  };
}

export default SinglesdayCelebrationTemplate;
