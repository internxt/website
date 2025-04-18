import { getImage } from '@/lib/getImage';
import Link from 'next/link';

const CtaSection = ({
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
      }}
      className="overflow-hidden bg-primary bg-cover px-5 py-14"
    >
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className={`flex ${maxWidth} flex-col items-center space-y-4 text-center text-white`}>
          <p className="text-3xl font-semibold xl:text-4xl">{textContent.title}</p>
          {customDescription}
        </div>
        {url && (
          <Link
            href={url}
            target={target}
            className={`flex rounded-lg px-5 py-3 text-lg font-medium ${
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

export default CtaSection;
