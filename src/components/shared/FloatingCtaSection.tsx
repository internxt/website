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
      className=" mx-6 overflow-hidden bg-primary bg-cover py-14 xl:mx-80"
    >
      <div className="flex flex-col items-center justify-center space-y-4 text-center xl:flex-row xl:space-y-0">
        <div
          className={`flex ${maxWidth} flex-col items-center space-y-4 px-12 text-center text-white xl:mr-20 xl:px-0`}
        >
          <p className="text-3xl font-semibold xl:text-4xl">{textContent.title}</p>
          {customDescription}
        </div>
        {url && (
          <Link
            href={url}
            target={target}
            className={`flex rounded-lg px-5 py-3 text-lg font-medium xl:mr-10 ${
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
