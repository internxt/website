import { HeroSection } from '@/components/vpn-extension/HeroSection';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { EncryptedVPNSection } from '@/components/vpn-extension/EncryptedVPNSection';
import { SecureVPNSection } from '@/components/vpn-extension/SecureVPNSection';
import { HowItWorksSection } from '@/components/vpn-extension/HowItWorksSection';
import { WhenUseVPNSection } from '@/components/vpn-extension/WhenUseVPNSection';
import CtaSection from '@/components/shared/CtaSection';
import { ToolsSection } from '@/components/shared/ToolsSection';

const VPN = ({ metatagsDescriptions, langJson, toolsContent, bannerJson, lang, navbarLang, footerLang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'vpn-extension');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={langJson.HeroSection} />

      <EncryptedVPNSection textContent={langJson.EncryptedVPNSection} bannerText={bannerJson.SignUpVPNBanner} />

      <SecureVPNSection textContent={langJson.SecureVPNSection} />

      <HowItWorksSection textContent={langJson.HowItWorksSection} />

      <WhenUseVPNSection textContent={langJson.WhenUseVPNSection} />

      <CtaSection textContent={langJson.CtaSection} url="" />

      <ToolsSection textContent={toolsContent} lang="en" />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = 'en';

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/vpn.json`);
  const toolsContent = require(`@/assets/lang/${lang}/components/tools/ToolSection.json`);
  const bannerJson = require(`@/assets/lang/${lang}/banners.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      toolsContent,
      bannerJson,
      navbarLang,
      footerLang,
    },
  };
}

export default VPN;
