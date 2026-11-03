import { GetStaticPropsContext } from 'next';
import { ReviewsTemplate, ReviewsTemplateProps } from '@/components/templates/reviewsTemplate';
import { PromoCodeName } from '@/lib/types';

const ReviewsEm = (props: ReviewsTemplateProps) => (
  <ReviewsTemplate
    {...props}
    couponCode={PromoCodeName.FreePlanUpsell}
    couponCodeForLifetime={PromoCodeName.FreePlanUpsell}
    robots="noindex,follow"
  />
);

export function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const textContent = require(`@/assets/lang/${lang}/reviews.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

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

export default ReviewsEm;
