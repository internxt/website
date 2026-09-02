import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const DropboxComparison = (props) => (
  <ComparisonPage
    {...props}
    competitor="Dropbox"
    tablesCompetitor="Dropbox"
    metaTagId="dropbox-alternative"
    segmentName="dropbox Comparison"
    logo="/images/comparison/competitors/Dropbox_Letters.webp"
    couponCodeName={PromoCodeName.Dropbox85}
    breadcrumbName="Alternative to dropbox"
    urlSlug="dropbox-alternative"
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
    ctaUrl="/pricing"
    ctaCustomTextPadding="items-center px-10 text-center lg:px-32"
    ctaTitleClass="text-2xl font-semibold leading-tight text-gray-95 lg:text-4xl"
    ctaDescriptionClass="text-base font-normal leading-tight text-gray-55  lg:text-center lg:text-xl"
    ctaContainerDetails="shadow-lg backdrop-blur-[55px]"
    ctaBgPadding="lg:pb-20 pb-20"
    ctaSkipDynamicText
    faqSkipPercentage
    headings={{
      comparisonTableH2: true,
      tablesSectionH2: true,
      tableNameTag: 'h3',
      faqH3: false,
      footerH2: false,
    }}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/dropbox-alternative.json`);
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

export default DropboxComparison;
