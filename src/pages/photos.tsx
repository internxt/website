import { Photos, PhotosProps } from '@/components/templates/photosTemplate';
import { GetStaticPropsContext } from 'next';

const PhotosLP = (props: PhotosProps) => <Photos {...props} />;

export function getStaticProps(ctx: GetStaticPropsContext) {
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

export default PhotosLP;
