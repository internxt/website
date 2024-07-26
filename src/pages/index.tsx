import { ChooseStorageSizeSection } from '@/components/home/ChooseStorageSizeSection';
import { FeatureSectionV2 } from '@/components/home/FeatureSectionV2';
import HeroSection from '@/components/home/HeroSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import CtaSection from '@/components/shared/CtaSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import { MarqueeComponent } from '@/components/specialoffer/MarqueeComponent';
import cookies from '@/lib/cookies';
import { useRouter } from 'next/router';
import { HomeText } from '@/assets/types/home';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';

interface HomePageProps {
  lang: string;
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: HomeText;
  footerLang: FooterText;
}

const HomePage = ({ metatagsDescriptions, textContent, lang, navbarLang, footerLang }: HomePageProps): JSX.Element => {
const HomePageV2 = ({ metatagsDescriptions, textContent, lang, navbarLang, footerLang }: HomeProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'home');
  const router = useRouter();

  const navbarCta = 'chooseStorage';

  const navbarCta = 'default';
  const marqueeBgColor = 'bg-gray-1';

  const { products, loadingCards, currencyValue, coupon, businessCoupon } = usePricing({
    couponCode: CouponType.AllPlansCoupon,
  });
  const [isBusiness, setIsBusiness] = useState<boolean>();

  const onCheckoutButtonClicked = (planId: string, isCheckoutForLifetime: boolean) => {
    const couponCodeForCheckout = isBusiness ? businessCoupon : coupon;
    stripeService.redirectToCheckout(planId, currencyValue, isCheckoutForLifetime, couponCodeForCheckout);
  };

  const marqueeBgColor = 'bg-white';

  const onChooseStorageButtonClicked = () => {
    router.push('/pricing');
  };

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={[navbarCta]} fixed />

      <HeroSection textContent={textContent.HeroSection} lang={lang} isHomePageV2={true} />

      <ChooseStorageSizeSection
        textContent={textContent.ChooseStorageSizeSection}
        onButtonClicked={onChooseStorageButtonClicked}
      />

      <TestimonialsSection textContent={textContent.TestimonialsSection} />

      <div className={`${marqueeBgColor} py-10`}>
        <MarqueeComponent bgColor={marqueeBgColor} />
      </div>

      <FeatureSectionV2 textContent={textContent.FeatureSectionV2} />

      <FAQSection textContent={textContent.FaqSection} />

      <CtaSection textContent={textContent.CtaSection} url={'/pricing'} />

      <Footer textContent={footerLang} lang={lang} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/home.json`);
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

export default HomePageV2;
