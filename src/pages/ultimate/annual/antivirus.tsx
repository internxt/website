/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Layout from '@/components/layout/Layout';
import { MinimalNavbar } from '@/components/layout/navbars/MinimalNavbar';
import { CardGroup } from '@/components/shared/CardGroup';
import { ComponentsInColumnSection } from '@/components/shared/components/ComponentsInColumnSection';
import CtaSection from '@/components/shared/CtaSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import cookies from '@/lib/cookies';
import { PromoCodeName } from '@/lib/types';
import { BatteryCharging, Bomb, Broom, Browsers, Devices, ShieldCheck, ThermometerHot } from '@phosphor-icons/react';
import { AntivirusText } from '@/assets/types/antivirus';
import FeatureSectionV2 from '@/components/antivirus/FeatureSectionV2';
import FeatureSection from '@/components/antivirus/FeatureSection';
import AlternativeHeroSection from '@/components/antivirus/AlternativeHeroSection';
import { InfoSection } from '@/components/antivirus/InfoSecction';
import { downloadDriveLinks } from '@/lib/get-download-url';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import { HorizontalPriceCard } from '@/components/shared/pricing/PriceCard/HorizontalPriceCard';
import usePricing from '@/hooks/usePricing';
import { PlanById, normalizePlanById } from '@/utils/priceHelper';
import { analyticsService } from '@/services/ga.services';
import { handleImpactEvent } from '@/services/impact.service';
import { checkout } from '@/lib/auth';

const ESSENTIAL_PLAN_PRICE_ID = 'price_1U6Ev3FAOdcgaBMQHxOAmWPO';
const DEFAULT_CURRENCY = 'eur';
const CLAIM_DEAL_CTA_SELECTOR = 'a[href$="#priceCard"], #choose-storage-button, #billingButtons button';
const CLAIM_DEAL_EVENT = 'Claim Deal';

interface AntivirusProps {
  lang: GetServerSidePropsContext['locale'];
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: AntivirusText;
  footerLang: FooterText;
  relationalLinksText: any;
  download: {
    Windows: any;
    MacOS: any;
    Linux: any;
  };
  isGetAntivirus?: boolean;
}

const AntivirusPage = ({
  metatagsDescriptions,
  langJson,
  lang,
  footerLang,
  navbarLang,
  isGetAntivirus,
}: AntivirusProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'internxt-antivirus');
  const locale = lang as string;

  const cardsForComponentsIncolumn = [
    {
      icon: BatteryCharging,
      title: langJson.ComponentsInColumn.cards.element1.title,
      description: langJson.ComponentsInColumn.cards.element1.description,
    },
    {
      icon: Bomb,
      title: langJson.ComponentsInColumn.cards.element2.title,
      description: langJson.ComponentsInColumn.cards.element2.description,
    },
    {
      icon: Browsers,
      title: langJson.ComponentsInColumn.cards.element3.title,
      description: langJson.ComponentsInColumn.cards.element3.description,
    },
    {
      icon: ThermometerHot,
      title: langJson.ComponentsInColumn.cards.element4.title,
      description: langJson.ComponentsInColumn.cards.element4.description,
    },
  ];
  const infoSectionData = [
    {
      title: langJson.InfoSection.Percentage,
      description: langJson.InfoSection.PercentageText,
    },
    {
      title: langJson.InfoSection.MalwareRegisteredDaily,
      description: langJson.InfoSection.MalwareRegisteredDailyText,
    },
    {
      title: langJson.InfoSection.MalwareAttacks,
      description: langJson.InfoSection.MalwareAttacksText,
    },
  ];

  const InfoSectionV2 = [
    {
      icon: ShieldCheck,
      title: langJson.InfoSectionV2.AntivirusProtection,
    },
    {
      icon: Broom,
      title: langJson.InfoSectionV2.RemoveMalware,
    },
    {
      icon: Devices,
      title: langJson.InfoSectionV2.DeviceProtection,
    },
  ];

  const { currency, currencyValue, lifetimeCoupon, loadingCards } = usePricing({
    couponCodeForLifetime: PromoCodeName.antivirus,
  });

  const [essentialPlan, setEssentialPlan] = useState<PlanById>();

  useEffect(() => {
    if (loadingCards) return;

    let isStale = false;

    const fetchPrice = async (currencyToFetch: string) => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_PAYMENTS_API}/object-storage/price`, {
        params: { planId: ESSENTIAL_PLAN_PRICE_ID, currency: currencyToFetch },
      });
      return res.data;
    };

    const fetchEssentialPlan = async () => {
      try {
        let price;

        try {
          price = await fetchPrice(currencyValue ?? DEFAULT_CURRENCY);
        } catch (error) {
          price = await fetchPrice(DEFAULT_CURRENCY);
        }

        if (!isStale) setEssentialPlan(normalizePlanById(price));
      } catch (error) {
        console.error('Error fetching price by id:', error);
      }
    };

    fetchEssentialPlan();

    return () => {
      isStale = true;
    };
  }, [loadingCards, currencyValue]);

  const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;

  const handleClaimDealClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const cta = (event.target as HTMLElement).closest<HTMLElement>(CLAIM_DEAL_CTA_SELECTOR);
    if (!cta) return;

    const ctaProperties = {
      page: 'ultimate-antivirus',
      cta_id: cta.id || undefined,
      cta_text: cta.textContent?.trim() || undefined,
    };

    analyticsService.trackCustomEvent(CLAIM_DEAL_EVENT, ctaProperties);

    handleImpactEvent({ event: CLAIM_DEAL_EVENT, properties: ctaProperties });

    event.preventDefault();
    event.stopPropagation();

    checkout({
      planId: ESSENTIAL_PLAN_PRICE_ID,
      mode: 'payment',
      planType: 'individual',
      currency: currencyValue ?? 'eur',
      promoCodeId: lifetimeCoupon?.name,
    });
  };

  return (
    <div onClickCapture={handleClaimDealClick}>
      <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Home" lang={lang}>
        <MinimalNavbar
          lang={locale}
          isOffer
          isAnnual
          textContent={navbarLang}
          price={essentialPlan?.price.toString()}
        />

        <AlternativeHeroSection
          textContent={langJson.HeroSection}
          currentPrice={essentialPlan?.price.toString()}
          currency={currency}
          isAnnual
        />

        <InfoSection
          FirstComponent={
            <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:gap-32">
              {infoSectionData.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center">
                  <p className="pb-5 text-4xl font-semibold text-primary">{item.title}</p>
                  <p className="min-h-[80px] max-w-[229px] text-xl font-medium text-gray-80">{item.description}</p>
                </div>
              ))}
            </div>
          }
        />

        {essentialPlan && (
          <div className="flex w-full justify-center px-6 py-12 lg:px-0 lg:py-24" id="priceCard">
            <HorizontalPriceCard
              decimalDiscountValue={decimalDiscountForLifetime || undefined}
              storage={essentialPlan.storage}
              popular={false}
              currency={currency}
              priceBefore={essentialPlan.price.toString().split('.')[0]}
              price={Number(essentialPlan.price)}
              planId={essentialPlan.priceId}
              currencyValue={currencyValue}
              coupon={lifetimeCoupon}
              interval={essentialPlan.interval}
            />
          </div>
        )}

        <FeatureSection textContent={langJson.FeatureSection} isGetAntivirus={isGetAntivirus} showPlan />

        <InfoSection
          FirstComponent={
            <div className="flex flex-col items-center justify-center space-y-5 md:flex-row md:space-x-20 md:space-y-0">
              {InfoSectionV2.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center px-5 text-center">
                  <item.icon className="text-primary" size={64} />
                  <p className="pt-5 text-xl font-medium text-gray-80">{item.title}</p>
                </div>
              ))}
            </div>
          }
        />

        <CtaSection
          textContent={langJson.cta1}
          url={'#priceCard'}
          customDescription={<p className="w-full text-xl font-normal">{langJson.cta1.subtitle}</p>}
        />

        <FeatureSectionV2 textContent={langJson.FeatureSectionV2} />

        <ComponentsInColumnSection
          FirstComponent={
            <div className="flex w-full flex-col items-center gap-9 ">
              <div className="flex max-w-[850px] flex-col items-center gap-6 text-center">
                <h2 className="text-3xl font-semibold text-gray-100 lg:text-5xl">
                  {langJson.ComponentsInColumn.title}
                </h2>
                <p className="font-regular text-xl text-gray-80">{langJson.ComponentsInColumn.description}</p>
              </div>
            </div>
          }
          SecondComponent={
            <div className="flex flex-col items-center">
              <CardGroup cards={cardsForComponentsIncolumn} backgroundColorCard="bg-white" />
            </div>
          }
          backgroundColor="bg-white"
        />
        <CtaSection
          textContent={langJson.cta2}
          url={'#priceCard'}
          customDescription={<p className="w-full  text-xl font-normal">{langJson.cta2.subtitle}</p>}
        />

        <FAQSection textContent={langJson.FaqSection} />

        <MinimalFooter footerLang={footerLang.FooterSection} lang={locale} />
      </Layout>
    </div>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const download = await downloadDriveLinks();
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/antivirus.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);
  const relationalLinksText = require(`@/assets/lang/${lang}/relational-links.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
      download,
      relationalLinksText,
    },
  };
}

export default AntivirusPage;
