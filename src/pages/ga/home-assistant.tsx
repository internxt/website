import { GetServerSidePropsContext } from 'next';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
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
    lang: GetServerSidePropsContext['locale'];
    metatagsDescriptions: MetatagsDescription[];
    navbarLang: NavigationBarText;
    textContent: HomeAssistantText;
    footerLang: FooterText;
}

const HomeAssistantPage = ({ metatagsDescriptions, textContent, lang, footerLang, navbarLang }: HomeAssistantProps): JSX.Element => {

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

    // const percentOff = lifetimeCoupon?.percentOff === undefined ? '0' : String(lifetimeCoupon.percentOff);
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
            <Navbar lang={locale} textContent={navbarLang} cta={['payment']} isLinksHidden hideCTA hideLogoLink />

            <HeroSection textContent={textContent.HeroSection} />

            <ReviewsSection textContent={textContent.ReviewSection} />

            <PricingSectionWrapper 
                textContent={textContent.TableSection}
                decimalDiscount={{
                individuals: decimalDiscount,
                lifetime: decimalDiscountForLifetime,
                }}
                backgroundGradientColor='linear-gradient(360deg, #F4F8FF 0%, #FFFFFF 100%)'
                lifetimeCoupons={lifetimeCoupons}
                lang={locale}
                products={products}
                loadingCards={loadingCards}
                onCheckoutButtonClicked={onCheckoutButtonClicked}
                hideBusinessCards
                hideBusinessSelector
                popularPlanBySize="5TB"
                onlyUltimatePlan
                startFromPlan='Individuals'
                startIndividualPlansFromInterval={Interval.Year}
                sectionDetails="bg-white lg:py-20"
                hideFreeCard
            />

            <ThreeCardsIconsSection
                textContent={textContent.ThreeCardsSection}
                cardColor='bg-white'
            />

            <CoreFeaturesSection textContent={textContent.CoreFeatures} />

            <TrustedSection
                textContent={textContent.TrustedBySection}
                bottomBar={true}
                bgColor='bg-neutral-17'
            />

            <ThreeCardsSection
                textContent={textContent.MadeInEuropeSection}
                bgColor="linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)"
            />

            <MinimalFooter
                footerLang={footerLang.FooterSection}
                lang={locale}
                bgColor='bg-white'
            />

        </Layout>
    );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const lang = ctx.locale;

    const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
    const langJson = require(`@/assets/lang/${lang}/home-assistant.json`);
    const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
    const footerLang = require(`@/assets/lang/${lang}/footer.json`);

    cookies.setReferralCookie(ctx);

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