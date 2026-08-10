import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { GetServerSidePropsContext } from 'next';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import FAQSection from "@/components/shared/sections/FaqSection";
import { PhotoText, RelationalLinksText } from '@/assets/types/photos';
import HorizontalScrollableSection from '@/components/photos/HorizontalScrollableSection';
import { HeroSection } from '@/components/photos/HeroSection';
import PhotoSection from '@/components/photos/PhotoSection';
import CoreFeaturesSection from '@/components/photos/CoreFeaturesSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import ThreeCardsSection from '@/components/shared/sections/ThreeCardsWithImagesSection';
import HorizontalScrollableWithPhotoSection from '@/components/photos/HorizontalScrollableWithPhotoSection'
import RelationalLinks from '@/components/shared/sections/RelationalLinks';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import usePricing from '@/hooks/usePricing';
import { PromoCodeName } from '@/lib/types';
import { stripeService } from '@/services/stripe.service';

interface PhotoProps {
    metatagsDescription: MetatagsDescription[];
    navbarText: NavigationBarText;
    textContent: PhotoText;
    footerText: FooterText;
    locale: GetServerSidePropsContext['locale'];
    relationalLinksText: RelationalLinksText;
}

const Photo = ({
    metatagsDescription,
    navbarText,
    footerText,
    textContent,
    locale,
    relationalLinksText,
} : PhotoProps): JSX.Element => {
    const metatags = metatagsDescription.find((metatag) => metatag.id === 'photos');
    const lang = locale as string;
    const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon: lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({ couponCode: PromoCodeName.OFFSUB, couponCodeForLifetime: PromoCodeName.OFFLFT });

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
        <Layout title={metatags?.title ?? ''} description={metatags?.description ?? ''}>
            <Navbar cta={['default']} lang={lang} textContent={navbarText} fixed/>

            <HeroSection textContent={textContent.HeroSection}/>

            <PhotoSection textContent={textContent.PhotoSection}/>

            <PricingSectionWrapper 
                textContent={textContent.TableSection}
                decimalDiscount={{
                individuals: decimalDiscount,
                lifetime: decimalDiscountForLifetime,
                }}
                backgroundGradientColor='linear-gradient(360deg, #F4F8FF 0%, #FFFFFF 100%)'
                lifetimeCoupons={lifetimeCoupons}
                lang={lang}
                products={products}
                loadingCards={loadingCards}
                onCheckoutButtonClicked={onCheckoutButtonClicked}
                hideBusinessCards
                hideBusinessSelector
                popularPlanBySize="3TB"
                sectionDetails="bg-white lg:py-20"
                hideFreeCard
            />

            <CoreFeaturesSection textContent={textContent.CoreFeatures} needsDivider/>

            <HorizontalScrollableSection 
                textContent={textContent.PhotoFeatureSection}
                bgGradient='linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 100%)'
                />

            <HorizontalScrollableWithPhotoSection textContent={textContent.DesignedSection}/>

            <ThreeCardsSection
                textContent={textContent.MadeInEuropeSection}
                bgColor='#FFFFFF'
            />

            <FloatingCtaSectionv2
                textContent={textContent.CtaSectionV2}
                customText={
                <div className="w-[302px] items-center justify-center text-center lg:w-full gap-4 flex flex-col">
                    <h2 className="text-2xl font-semibold leading-tight lg:text-4xl">{textContent.CtaSectionV2.title}</h2>
                    <p className="text-base font-normal text-gray-55 lg:text-xl">{textContent.CtaSectionV2.description}</p>
                </div>
                }
                url="/pricing"
                bgGradientColor="#FFFFFF 100%"
                bgGradientContainerColor="background: linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
                containerDetails="shadow-[0_4px_20px_0_rgba(0,0,0,0.1)] backdrop-blur-[55px]"
                bgPadding="lg:py-20 lg:pb-20 pb-10"
            /> 

            <FAQSection textContent={{
                title: textContent.SemanticAccordion.title,
                faq: textContent.SemanticAccordion.items
                }}
                needsH3
                needsH2
            />

            <RelationalLinks textContent={relationalLinksText}/>

            <Footer textContent={footerText} lang={lang}/>

        </Layout>
    )
} 

export function getServerSideProps(ctx: GetServerSidePropsContext) {
    const locale = ctx.locale as string;
    const metatagsDescription = require(`@/assets/lang/${locale}/metatags-descriptions.json`);
    const navbarText = require(`@/assets/lang/${locale}/navbar.json`);
    const textContent = require(`@/assets/lang/${locale}/photos.json`);
    const footerText = require(`@/assets/lang/${locale}/footer.json`);
    const relationalLinksText = require(`@/assets/lang/${locale}/relational-links.json`);

    return {
        props: {
            metatagsDescription,
            navbarText,
            textContent,
            footerText,
            locale,
            relationalLinksText,
        }
    }
}

export default Photo