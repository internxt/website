import { Photos, PhotosProps } from '@/components/templates/photosTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetServerSidePropsContext } from 'next';

const FbPhotos = (props: PhotosProps) => (
  <Photos
    {...props}
    couponCode={PromoCodeName.META85}
    couponCodeForLifetime={PromoCodeName.META85}
    segmentName="PPC FB Photos"
  />
);

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
    },
  };
}

export default FbPhotos;
