import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import cookies from '@/lib/cookies';
import Footer from '@/components/layout/footers/Footer';
import FAQSection from '@/components/shared/sections/FaqSection';
import FirstFeaturesSection from '@/components/home/FirstFeaturesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import InxtAppsSection from '@/components/privacy/InxtAppsSection';
import { ChooseStorageSizeSection } from '@/components/home/ChooseStorageSizeSection';
import router from 'next/router';
import { MarqueeComponent } from '@/components/specialoffer/MarqueeComponent';
import SocialProofSection from '@/components/home/SocialProofSection';

const ResurrectionCampaign = ({
  lang,
  navbarLang,
  metatagsDescriptions,
  textContent,
  footerLang
}) => {
const metatags = metatagsDescriptions.filter((desc) => desc.id === 'resurrection-campaign');
const locale = lang as string;
const navbarCta = 'chooseStorage';
const onChooseStorageButtonClicked = () => {
  router.push('/pricing');
};
const marqueeBgColor = 'bg-gray-1';

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Comeback"
      lang={lang}
    >
    <Navbar textContent={navbarLang} lang={locale} cta={[navbarCta]} fixed />
    <ChooseStorageSizeSection
        textContent={textContent.ChooseStorageSizeSection}
        onButtonClicked={onChooseStorageButtonClicked}
    />
    <TestimonialsSection textContent={textContent.TestimonialsSection} bgColor='bg-white'/>
    <div className={`${marqueeBgColor} py-10`}>
      <MarqueeComponent bgColor={marqueeBgColor} />
    </div>
    <FirstFeaturesSection textContent={textContent.FirstFeaturesSection} lang={lang}/>
    <InxtAppsSection textContent={textContent.InxtAppsSection} lang={lang} />
    <FAQSection textContent={textContent.FaqSection} bgColor='bg-gray-1'/>
    <SocialProofSection textContent={textContent.InvestorsSection} lang={lang} />
     <Footer textContent={footerLang} lang={locale} />
    </Layout>
    
    
  );
};

export async function getServerSideProps(ctx) {
  let lang = 'en';

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);

  cookies.setReferralCookie(ctx);
    const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
    const textContent = require(`@/assets/lang/${lang}/comeback.json`);
    const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  return {
    props: {
      lang,
      metatagsDescriptions,
      navbarLang,
      textContent,
      footerLang
    },
  };
}

export default ResurrectionCampaign;
