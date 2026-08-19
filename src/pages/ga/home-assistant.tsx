import { GetServerSidePropsContext } from 'next';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Layout from '@/components/layout/Layout';
import cookies from '@/lib/cookies';
import { PromoCodeName } from '@/lib/types';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import usePricing from '@/hooks/usePricing';
import Navbar from '@/components/layout/navbars/Navbar';
import HeroSection from '@/components/home-assistant/HeroSection';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { stripeService } from '@/services/stripe.service';
import { HomeAssistantText } from '@/assets/types/home-assistant';
import ThreeCardsIconsSection from '@/components/shared/sections/ThreeCardsIconsSection';
import ConfigurationSection from '@/components/home-assistant/ConfigurationSection';
import HorizontalScrollableSection from '@/components/shared/HorizontalScrollableSection';

interface HomeAssistantProps {
    lang: GetServerSidePropsContext['locale'];
    metatagsDescriptions: MetatagsDescription[];
    navbarLang: NavigationBarText;
    langJson: HomeAssistantText;
    footerLang: FooterText;
}

const HomeAssistantPage = ({ metatagsDescriptions, langJson, lang, footerLang, navbarLang }: HomeAssistantProps): JSX.Element => {

    const metatags = metatagsDescriptions.find((desc) => desc.id === 'special-offer');
    const locale = lang as string;

    const {
        products,
        loadingCards,
        currencyValue,
        coupon: individualCoupon,
        lifetimeCoupon,
        lifetimeCoupons,
    } = usePricing({ couponCode: PromoCodeName.GADS85, couponCodeForLifetime: PromoCodeName.GADS85 });

    const percentOff = lifetimeCoupon?.percentOff === undefined ? '0' : String(lifetimeCoupon.percentOff);
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

            <HeroSection textContent={langJson.HeroSection} percentOff={percentOff} />

            <PricingSectionWrapper
                textContent={langJson.TableSection}
                decimalDiscount={{
                    individuals: decimalDiscount,
                    lifetime: decimalDiscountForLifetime,
                }}
                lifetimeCoupons={lifetimeCoupons}
                lang={locale}
                products={products}
                loadingCards={loadingCards}
                onCheckoutButtonClicked={onCheckoutButtonClicked}
                hideBusinessCards
                hideBusinessSelector
                popularPlanBySize="5TB"
                onlyUltimatePlan
                sectionDetails="bg-white lg:py-20"
                hideFreeCard
            />

            <ConfigurationSection textContent={langJson.ConfigurationSection} />

            <ThreeCardsIconsSection
                textContent={langJson.ThreeCardsSection}
                bgColor='white'
            />

            <HorizontalScrollableSection
                textContent={langJson.NextGenSection} 
                bgGradient="linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 100%)"
                needsDivider={false}
                />

            <MinimalFooter
                footerLang={footerLang.FooterSection}
                lang={locale}
                bgColor='bg-neutral-17'
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
            langJson,
            navbarLang,
            footerLang,
        },
    };
}

export default HomeAssistantPage;