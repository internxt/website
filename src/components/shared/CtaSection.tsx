import { getImage } from '@/lib/getImage';
import Link from 'next/link';

const CtaSection = ({
  textContent,
  url,
  maxWidth = '',
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
  const bgClass = 'bg-white dark:bg-gray-95';
  const hoverClass = 'hover:bg-blue-10 dark:hover:bg-purple-100';
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
          <h2 className="text-30 font-semibold lg:text-3xl">{textContent.title}</h2>
          {customDescription}
        </div>
        {url && (
          <Link
            href={url}
            target={target}
            className={`flex rounded-lg px-5 py-3 text-lg font-medium ${bgImage && bgImage !== defaultBgImage ? 'bg-primary text-xl text-white hover:bg-primary-dark' : `${bgClass} text-primary ${hoverClass}`}`}
          >
            {textContent.cta}
          </Link>
        )}
      </div>
    </section>
  );
};

export default CtaSection;
