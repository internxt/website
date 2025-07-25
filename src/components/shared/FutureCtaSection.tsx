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
  const DEFAULT_BACKGROUND = 'radial-gradient(ellipse at center, #F9F9FC 0%, #E5EFFF 100%)';
  return (
    <section
      style={{
        background: bgImage ? `url(${getImage(bgImage)})` : DEFAULT_BACKGROUND,
      }}
      className="overflow-hidden bg-cover px-5 py-14"
    >
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className={`flex ${maxWidth} flex-col items-center space-y-4 text-center text-black`}>
          <p className="text-3xl font-semibold xl:text-4xl">{textContent.title}</p>
          {customDescription}
        </div>
        {url && (
          <Link
            href={url}
            target={target}
            className={`flex rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white`}
          >
            {textContent.cta}
          </Link>
        )}
      </div>
    </section>
  );
};

export default CtaSection;
