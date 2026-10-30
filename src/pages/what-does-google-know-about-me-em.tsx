import {
  WhatDoesGoogleKnowAboutMeTemplate,
  WhatDoesGoogleKnowAboutMeTemplateProps,
} from '@/components/templates/whatDoesGoogleKnowAboutMeTemplate';
import { GetStaticPropsContext } from 'next';
import { PromoCodeName } from '@/lib/types';

const WhatDoesGoogleKnowAboutMeEm = (props: WhatDoesGoogleKnowAboutMeTemplateProps) => (
  <WhatDoesGoogleKnowAboutMeTemplate
    {...props}
    couponCode={PromoCodeName.FreePlanUpsell}
    couponCodeForLifetime={PromoCodeName.FreePlanUpsell}
    robots="noindex,follow"
    darkMode={props.darkMode}
  />
);

export function getStaticProps(ctx: GetStaticPropsContext) {
  const locale = ctx.locale as string;

  const metatagsDescription = require(`@/assets/lang/${locale}/metatags-descriptions.json`);
  const navbarText = require(`@/assets/lang/${locale}/navbar.json`);
  const textContent = require(`@/assets/lang/${locale}/what-does-google-know-about-me.json`);
  const toolsContent = require(`@/assets/lang/${locale}/components/tools/ToolSection.json`);
  const bannerText = require(`@/assets/lang/${locale}/banners.json`);
  const footerText = require(`@/assets/lang/${locale}/footer.json`);

  return {
    props: {
      metatagsDescription,
      navbarText,
      textContent,
      toolsContent,
      bannerText,
      footerText,
      locale,
    },
  };
}

export default WhatDoesGoogleKnowAboutMeEm;
