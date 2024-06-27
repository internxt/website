import cookies from '@/lib/cookies';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/techradar-discount/HeroSection';
import PaymentsSection from '@/components/techradar-discount/PaymentsSection';
import InfoSection from '@/components/techradar-discount/InfoSection';
import Footer from '@/components/layout/footers/Footer';

const PartnerDiscount = ({ lang, metatagsDescriptions, navbarLang, langJson, footerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'techradar-discount');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Partners" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} />

      <PaymentsSection textContent={langJson.PaymentSection} />

      <InfoSection textContent={langJson.InfoSection} />

      <Footer textContent={footerLang} lang="en" />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/en/techradar-discount.json`);
  const navbarLang = require(`@/assets/lang/en/navbar.json`);
  const footerLang = require(`@/assets/lang/en/footer.json`);

  cookies.setReferralCookie(ctx);

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

export default PartnerDiscount;
