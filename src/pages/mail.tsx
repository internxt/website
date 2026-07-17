import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { GetServerSidePropsContext } from 'next';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import HorizontalScrollableSection from "@/components/mail/HorizontalScrollableSection";
import HorizontalScrollableSectionWithPhotosSection from "@/components/mail/HorizontalSrollableSection";
import { HeroSection } from "@/components/mail/HeroSection";
import MailSection from '@/components/mail/MailSection';
import FAQSection from "@/components/shared/sections/FaqSection";
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import CoreFeaturesSection from "@/components/mail/CoreFeaturesSection";
import Link from 'next/link';
import { Check } from '@phosphor-icons/react';
import { MailText } from '@/assets/types/mail';


interface MailProps {
    metatagsDescription: MetatagsDescription[];
    navbarText: NavigationBarText;
    textContent: MailText;
    footerText: FooterText;
    locale: GetServerSidePropsContext['locale'];
}

const Mail = ({
    metatagsDescription,
    navbarText,
    footerText,
    textContent,
    locale
}: MailProps): JSX.Element => {

    const metatags = metatagsDescription.find((metatag) => metatag.id === 'mail');
    const lang = locale as string;

    return(
        <Layout title={metatags?.title ?? ''} description={metatags?.description ?? ''}>
            
            <Navbar cta={['default']} lang={lang} textContent={navbarText} fixed/>

            <HeroSection textContent={textContent.HeroSection} />

            <MailSection textContent={textContent.DriveSection} />

            <HorizontalScrollableSection 
                textContent={textContent.MailFeatureSection}
                bgGradient='linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 100%)'
            />

            <FloatingCtaSectionv2
                textContent={textContent.CtaSection}
                customText={
                <div className="w-[302px] items-center justify-center text-center lg:w-full gap-4 flex flex-col">
                    <h2 className="text-2xl font-semibold leading-tight lg:text-4xl">{textContent.CtaSection.title}</h2>
                    <p className="text-base font-normal text-gray-55 lg:text-xl">{textContent.CtaSection.description}</p>
                </div>
                }
                url="/pricing"
                bgGradientColor="#F4F8FF 100%"
                bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
                containerDetails="shadow-[0_4px_20px_0_rgba(0,0,0,0.1)] backdrop-blur-[55px]"
                bgPadding="lg:py-20"
            /> 

            <CoreFeaturesSection textContent={textContent.CoreFeatures} />

            <FloatingCtaSectionv2
                textContent={textContent.CtaSectionV2}
                customText={
                <div className="w-[302px] items-center justify-center text-center lg:w-full gap-4 flex flex-col">
                    <h2 className="text-2xl font-semibold leading-tight lg:text-4xl">{textContent.CtaSectionV2.title}</h2>
                    <p className="text-base font-normal text-gray-55 lg:text-xl">{textContent.CtaSectionV2.description}</p>
                </div>
                }
                url="/pricing"
                bgGradientColor="linear-gradient(0deg, #FFFFFF 0%, #F4F8FF 100%)"
                bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
                containerDetails="shadow-[0_4px_20px_0_rgba(0,0,0,0.1)] backdrop-blur-[55px]"
                bgPadding="lg:py-20"
            />

            <HorizontalScrollableSectionWithPhotosSection textContent={textContent.DesignedSection} />

            <FAQSection textContent={{
                title: textContent.SemanticAccordion.title,
                faq: textContent.SemanticAccordion.items
                }}
                needsH3={false}
                needsSpecialH3
                needsH2
            />

            <Footer textContent={footerText} lang={lang}/>

        </Layout>
    )
}

export function getServerSideProps(ctx: GetServerSidePropsContext) {
    const locale = ctx.locale as string;

    //add metatags translation files
    const metatagsDescription = require(`@/assets/lang/${locale}/metatags-descriptions.json`);
    const navbarText = require(`@/assets/lang/${locale}/navbar.json`);
    //add translation files
    const textContent = require(`@/assets/lang/${locale}/mail.json`);
    const footerText = require(`@/assets/lang/${locale}/footer.json`);

    return {
        props: {
            metatagsDescription,
            navbarText,
            textContent,
            footerText,
            locale,
        }
    }
}

export default Mail