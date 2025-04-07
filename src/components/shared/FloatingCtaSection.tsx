import { getImage } from '@/lib/getImage';
import Link from 'next/link';

const FloatingCtaSection = ({
  textContent,
  url,
  maxWidth,
  target,
  bgImage,
  customDescription,
}: {
  textContent: any;
  url?: string;
  maxWidth?: string;
  target?: string;
  bgImage?: string;
  customDescription?: React.ReactNode;
}) => {
  const defaultBgImage = getImage('/images/cyber-awareness/Background.svg');

  return (
    <section
      style={{
        backgroundImage: `url(${bgImage ? getImage(bgImage) : defaultBgImage})`,
        borderRadius: '32px',
      }}
      className="mx-80 hidden overflow-hidden bg-primary bg-cover py-14 lg:flex"
    >
      <div className="flex flex-row items-center justify-center text-center">
        <div className={`flex ${maxWidth} mr-20 flex-col items-center space-y-4 text-center text-white`}>
          <p className="text-3xl font-semibold xl:text-4xl">{textContent.title}</p>
          {customDescription}
        </div>
        {url && (
          <Link
            href={url}
            target={target}
            className={`mr-10 flex rounded-lg px-5 py-3 text-lg font-medium ${
              bgImage && bgImage !== defaultBgImage
                ? 'bg-primary text-xl text-white hover:bg-primary-dark'
                : 'bg-white text-primary hover:bg-blue-10'
            }`}
          >
            {textContent.cta}
          </Link>
        )}
      </div>
    </section>
  );
};

export default FloatingCtaSection;
