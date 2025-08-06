import { getImage } from '@/lib/getImage';
import Link from 'next/link';

const FutureCtaSection = ({
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
  const DEFAULT_BACKGROUND = 'linear-gradient(115.95deg, #F4F8FFBF 0%, #FFFFFF14 100%)';
  return (
    <section className="mx-20 my-10 bg-white">
      <div
        style={{
          background: bgImage ? `url(${getImage(bgImage)})` : DEFAULT_BACKGROUND,
        }}
        className="overflow-hidden rounded-[20px] bg-cover px-5 py-14 shadow-soft"
      >
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className={`flex ${maxWidth} flex-col items-center space-y-4 text-center text-black`}>
            {customDescription}
          </div>
          {url && (
            <Link
              href={url}
              target={target}
              className={`flex rounded-lg bg-primary px-5 py-3 text-base font-medium text-white`}
            >
              {textContent.cta}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default FutureCtaSection;
