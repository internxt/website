import { FooterText, MetatagsDescription, NavigationBarText } from "@/assets/types/layout/types";
import Footer from "@/components/layout/footers/Footer";
import Layout from "@/components/layout/Layout";
import Navbar from "@/components/layout/navbars/Navbar";
import HeroSection from "@/components/levanteud/HeroSection";
import cookies from "@/lib/cookies";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import DigitalIndependenceSection from "@/components/levanteud/DigitalIndependenceSection";
import LeadingOrganizationsSection from "@/components/levanteud/LeadingOrganitationsSection";
import FloatingCtaSectionv2 from "@/components/shared/FloatingCtaSectionV2";
import { getImage } from "@/lib/getImage";

interface LevanteProps {
  lang: GetServerSidePropsContext['locale'];
  textContent: any;
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  footerLang: FooterText;
}


const LevantePage = ({ metatagsDescriptions, textContent, lang, navbarLang, footerLang }: LevanteProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'levante-ud');

  const locale = lang as string;
  const navbarCta = '';


  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={locale} cta={[navbarCta]} fixed />

      <HeroSection textContent={textContent.HeroSection} />

      <DigitalIndependenceSection textContent={textContent.DigitalIndependenceSection} />

      <LeadingOrganizationsSection textContent={textContent.LeadingOrganizationsSection} />

       <FloatingCtaSectionv2
          textContent={textContent.ctaBanner}
          url={'/pricing'}
          customText={

            <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
              <Image
                src={getImage('/images/Levante/InternxtLevanteOP.webp')}
                alt="Internxt x Levante"
                width={534}
                height={320}
                className='rounded-16 hidden lg:flex'
                quality={100}
            />
             <Image
                src={getImage('/images/Levante/InternxtLevanteOP.webp')}
                alt="Internxt x Levante"
                width={420}
                height={252}
                className='rounded-16 lg:hidden flex'
                quality={100}
            />
              <p className="text-base font-normal leading-tight text-gray-55 lg:w-[633px] lg:text-center lg:text-xl">
                {textContent.ctaBanner.description}
              </p>
            </div>
          }
          bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
          containerDetails="shadow-lg backdrop-blur-[55px]"
          bgPadding="lg:pb-20 pb-20"
        />
      
      <Footer textContent={footerLang} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/levante-ud.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      textContent,
      navbarLang,
      footerLang,
    },
  };
}

export default LevantePage;