import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const MegaComparison = (props) => (
  <ComparisonPage
    {...props}
    competitor="MEGA"
    heroCompetitor="Mega"
    tablesCompetitor="Mega"
    metaTagId="mega-alternative"
    segmentName="mega Comparison"
    logo="/images/comparison/competitors/Mega_Letters.webp"
    couponCodeName={PromoCodeName.Mega85}
    breadcrumbName="Mega alternative"
    urlSlug="mega-alternative"
    sectionsOrder={['tables', 'pricing', 'scrollable']}
    scrollableSections={[
      {
        key: 'HorizontalScrollableSectionV2',
        bgGradient: 'linear-gradient(180deg, #FFFFFF 0%, #D6F3DD 50%, #FFFFFF 100%)',
        needsH2: true,
        needsH3: true,
      },
      {
        key: 'HorizontalScrollableSection',
        bgGradient: 'linear-gradient(180deg, #FFFFFF 0%, #FFCECC 50%, #FFFFFF 100%)',
        needsH2: true,
      },
    ]}
    useComparisonScrollable
    ctaUrl="#billingButtons"
    ctaCustomTextPadding="px-10 text-center lg:px-32"
    ctaSkipDynamicText
    ctaBgPadding=""
    faqSkipPercentage
    headings={{
      comparisonTableH2: true,
      tablesSectionH2: true,
      faqH3: false,
      footerH2: false,
    }}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/mega-alternative.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

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

export default MegaComparison;
