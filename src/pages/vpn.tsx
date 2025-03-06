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
import { HeroSection } from '@/components/shared/components/HeroSection';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { VPNText } from '@/assets/types/vpn';
import { ToolsSectionText } from '@/assets/types/components/toolsSection';
import { BannersText } from '@/assets/types/components/banners';
import Header from '@/components/shared/Header';
import { RedirectButton } from '@/components/shared/RedirectButton';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { GetServerSidePropsContext } from 'next';

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

      <HeroSection
        TextComponent={
          <div className="flex w-full flex-col items-center space-y-8 lg:max-w-[524px] lg:items-start">
            <div className="flex flex-col items-center space-y-4 text-center lg:items-start lg:text-start">
              <div className="flex w-max rounded-lg bg-gray-5 px-4 py-2">
                <p className="text-xl font-medium text-gray-80">{textContent.HeroSection.label}</p>
              </div>
              <Header>
                {textContent.HeroSection.title.line1}
                <span> {textContent.HeroSection.title.line2}</span>
              </Header>
            </div>
            <h3 className="text-center text-xl text-gray-80 lg:text-left">{textContent.HeroSection.description}</h3>

            <RedirectButton
              className="flex w-max rounded-lg bg-primary px-5 py-3 text-xl font-medium text-white hover:bg-primary-dark"
              url={VPN_CHROME_WEB_STORE}
            >
              {textContent.HeroSection.cta}
            </RedirectButton>
          </div>
        }
        ImageComponent={
          <div className="relative flex h-full flex-col items-center justify-center bg-transparent">
            <Image
              src={getImage('/images/vpn-extension/vpn-widget.svg')}
              alt="VPN Widget"
              className="rounded-lg shadow-subtle"
              width={364}
              draggable={false}
              height={444}
            />
            <div className="hidden xl:flex">
              <Image
                src={getImage('/images/vpn-extension/vpn-hero.svg')}
                alt="VPN Hero"
                className={`left-0 top-10 -translate-x-72 rounded-lg lg:absolute`}
                width={328}
                height={385}
                draggable={false}
              />
            </div>
          </div>
        }
      />

      <EncryptedVPNSection textContent={textContent.EncryptedVPNSection} bannerText={bannerJson.SignUpVPNBanner} />

      <SecureVPNSection textContent={textContent.SecureVPNSection} />

      <HowItWorksSection textContent={textContent.HowItWorksSection} />

      <WhenUseVPNSection textContent={textContent.WhenUseVPNSection} />

      <CtaSection textContent={textContent.CtaSection} url={VPN_CHROME_WEB_STORE} customDescription />

      <ToolsSection textContent={toolsContent} lang="en" />

      <CtaSection textContent={textContent.CtaSection2} url={VPN_CHROME_WEB_STORE} customDescription />

      <FAQSection textContent={textContent.FaqSection} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

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
