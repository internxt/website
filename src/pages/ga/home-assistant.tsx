import { GetStaticPropsContext } from 'next';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Layout from '@/components/layout/Layout';
import { PromoCodeName } from '@/lib/types';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import usePricing from '@/hooks/usePricing';
import Navbar from '@/components/layout/navbars/Navbar';
import { Interval, stripeService } from '@/services/stripe.service';
import { HomeAssistantText } from '@/assets/types/home-assistant';
import ThreeCardsSection from '@/components/shared/sections/ThreeCardsWithImagesSection';
import TrustedSection from '@/components/home/TrustedSection';
import ThreeCardsIconsSection from '@/components/shared/sections/ThreeCardsIconsSection';
import CoreFeaturesSection from '@/components/drive/CoreFeaturesSection';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import ReviewsSection from '@/components/home/ReviewsSection';
import HeroSection from '@/components/home-assistant/HeroSection';

interface HomeAssistantProps {
    darkMode?: boolean;
    lang: GetStaticPropsContext['locale'];
    metatagsDescriptions: MetatagsDescription[];
    navbarLang: NavigationBarText;
    textContent: HomeAssistantText;
    footerLang: FooterText;
}

const HomeAssistantPage = ({ darkMode = false, metatagsDescriptions, textContent, lang, footerLang, navbarLang }: HomeAssistantProps): JSX.Element => {

    const metatags = metatagsDescriptions.find((desc) => desc.id === 'special-offer');
    const locale = lang as string;

    const {
        products,
        loadingCards,
        currencyValue,
        lifetimeCoupons,
        coupon: individualCoupon,
        lifetimeCoupon,
    } = usePricing({ couponCode: PromoCodeName.GADS85, couponCodeForLifetime: PromoCodeName.GADS85 });

    const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
    const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;

    const onCheckoutButtonClicked = async (
        priceId: string,
        isCheckoutForLifetime: boolean,
        interval: string,
        storage: string,
    ) => {
        const couponCodeForCheckout = isCheckoutForLifetime ? lifetimeCoupon : individualCoupon;

        const finalPrice = await stripeService.calculateFinalPrice(
            priceId,
            interval,
            currencyValue,
            'individuals',
            couponCodeForCheckout,
        );

        stripeService.redirectToCheckout(
            priceId,
            finalPrice,
            currencyValue,
            'individual',
            isCheckoutForLifetime,
            interval,
            storage,
            couponCodeForCheckout?.name,
        );
    };

    return (
        <Layout title={metatags?.title ?? ''} description={metatags?.description ?? ''} segmentName="Home" lang={lang}>
            <Navbar lang={locale} textContent={navbarLang} cta={['payment']} hideLogoLink />

            <HeroSection textContent={textContent.HeroSection} darkMode={darkMode} />

            <ReviewsSection textContent={textContent.ReviewSection} darkMode={darkMode} />

            <PricingSectionWrapper 
                textContent={textContent.TableSection}
                decimalDiscount={{
                individuals: decimalDiscount,
                lifetime: decimalDiscountForLifetime,
                }}
                backgroundGradientColor="bg-[linear-gradient(360deg,#F4F8FF_0%,#FFFFFF_100%)] dark:bg-[linear-gradient(360deg,#0D0D0D_0%,#1C1C1C_100%)]"
                lifetimeCoupons={lifetimeCoupons}
                lang={locale}
                products={products}
                loadingCards={loadingCards}
                onCheckoutButtonClicked={onCheckoutButtonClicked}
                popularPlanBySize="5TB"
                onlyUltimatePlan
                startFromPlan='Individuals'
                startIndividualPlansFromInterval={Interval.Year}
                sectionDetails="bg-white dark:bg-gray-95 lg:py-20"
                hideFreeCard
                darkMode={darkMode}
            />

            <ThreeCardsIconsSection
                textContent={textContent.ThreeCardsSection}
                cardColor="bg-white dark:bg-gray-95"
            />

            <CoreFeaturesSection textContent={textContent.CoreFeatures} darkMode={darkMode} />

            <TrustedSection
                textContent={textContent.TrustedBySection}
                bottomBar={true}
                bgColor="bg-neutral-17 dark:bg-gray-105"
                darkMode={darkMode}
            />

            <ThreeCardsSection
                textContent={textContent.MadeInEuropeSection}
                bgColor="bg-[linear-gradient(180deg,#F4F8FF_0%,#FFFFFF_100%)] dark:bg-[linear-gradient(180deg,#0D0D0D_0%,#1C1C1C_100%)]"
                darkMode={darkMode}
            />

            <MinimalFooter
                footerLang={footerLang.FooterSection}
                lang={locale}
                bgColor="bg-white dark:bg-gray-95"
            />

        </Layout>
    );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
    const lang = ctx.locale;

    const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
    const langJson = require(`@/assets/lang/${lang}/home-assistant.json`);
    const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
    const footerLang = require(`@/assets/lang/${lang}/footer.json`);

    return {
        props: {
            lang,
            metatagsDescriptions,
            textContent: langJson,
            navbarLang,
            footerLang,
        },
    };
}

export default HomeAssistantPage;