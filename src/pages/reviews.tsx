import { GetServerSidePropsContext } from 'next';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import FAQSection from '@/components/shared/sections/FaqSection';
import cookies from '@/lib/cookies';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import { ReviewsTextPage } from '@/assets/types/reviews';
import SupportSection from '@/components/reviews/support-section';
import VideotSection from '@/components/reviews/VideoSection';
import HeroSection from '@/components/reviews/HeroSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import HorizontalScrollableSection from '@/components/reviews/HorizontalScrollableSection';

interface CleanerProps {
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: ReviewsTextPage;
  footerLang: FooterText;
}

const CleanerPage = ({
  metatagsDescriptions,
  textContent,
  lang,
  navbarLang,
  footerLang,
}: CleanerProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'reviews');
  const locale = lang as string;
  const navbarCta = 'chooseStorage';

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={locale} cta={[navbarCta]} fixed />

      <HeroSection textContent={textContent.heroSection} />

      <ReviewsSection textContent={textContent.ReviewSection} />

      <HorizontalScrollableSection textContent={textContent.ReviewFromIndustrySection} />

      <VideotSection textContent={textContent.videoSection} />

      <SupportSection textContent={textContent.supportSection} />

      <FloatingCtaSectionv2
        textContent={textContent.ctaSection}
        url={'/pricing'}
        customText={
          <div className="flex flex-col gap-4 px-10 text-center lg:px-0">
            <p className="text-2xl font-semibold text-gray-95 lg:text-4xl">{textContent.ctaSection.title}</p>
            <p className="text-base font-normal text-gray-55 lg:text-xl">{textContent.ctaSection.description}</p>
          </div>
        }
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
        bgGradientColor="linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)"
        containerDetails="shadow-lg backdrop-blur-[55px]"
        bgPadding="p-8 lg:py-10"
      />

      <FAQSection textContent={textContent.FaqSection} />

      <Footer textContent={footerLang} lang={locale} />
    </Layout>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/reviews.json`);
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

export default CleanerPage;
