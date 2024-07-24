import { HeroSection } from '@/components/vpn-extension/HeroSection';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import Footer from '@/components/layout/footers/Footer';
import { EncryptedVPNSection } from '@/components/vpn-extension/EncryptedVPNSection';
import { SecureVPNSection } from '@/components/vpn-extension/SecureVPNSection';
import { HowItWorksSection } from '@/components/vpn-extension/HowItWorksSection';
import { WhenUseVPNSection } from '@/components/vpn-extension/WhenUseVPNSection';
import CtaSection from '@/components/shared/CtaSection';
import { ToolsSection } from '@/components/shared/sections/ToolsSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import { VPN_CHROME_WEB_STORE } from '@/constants';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { VPNText } from '@/assets/types/vpn';
import { ToolsSectionText } from '@/assets/types/components/toolsSection';
import { BannersText } from '@/assets/types/components/banners';

interface VPNProps {
  metatagsDescriptions: MetatagsDescription[];
  textContent: VPNText;
  toolsContent: ToolsSectionText;
  bannerJson: BannersText;
  lang: string;
  navbarLang: NavigationBarText;
  footerLang: FooterText;
}

const VPN = ({
  metatagsDescriptions,
  textContent,
  toolsContent,
  bannerJson,
  lang,
  navbarLang,
  footerLang,
}: VPNProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'vpn-extension');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <HeroSection textContent={textContent.HeroSection} />

      <EncryptedVPNSection textContent={textContent.EncryptedVPNSection} bannerText={bannerJson.SignUpVPNBanner} />

      <SecureVPNSection textContent={textContent.SecureVPNSection} />

      <HowItWorksSection textContent={textContent.HowItWorksSection} />

      <WhenUseVPNSection textContent={textContent.WhenUseVPNSection} />

      <CtaSection textContent={textContent.CtaSection} url={VPN_CHROME_WEB_STORE} />

      <ToolsSection textContent={toolsContent} lang="en" />

      <CtaSection textContent={textContent.CtaSection2} url={VPN_CHROME_WEB_STORE} />

      <FAQSection textContent={textContent.FaqSection} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = 'en';

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/vpn.json`);
  const toolsContent = require(`@/assets/lang/${lang}/components/tools/ToolSection.json`);
  const bannerJson = require(`@/assets/lang/${lang}/banners.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      textContent,
      toolsContent,
      bannerJson,
      navbarLang,
      footerLang,
    },
  };
}

export default VPN;
