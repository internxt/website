import { getImage } from '@/lib/getImage';
import Link from 'next/link';
import Image from 'next/image';

const CTA_BG =
  'bg-[radial-gradient(ellipse_at_center,#E5EFFF_25%,#F9F9FC_100%)] dark:bg-[radial-gradient(ellipse_at_center,#082D66_25%,#0D0D0D_100%)]';

const CtaSection = ({
  textContent,
  url,
  maxWidth = '',
  target,
  bgImage,
  image,
  customDescription,
}: {
  textContent: any;
  url?: string;
  maxWidth?: string;
  target?: string;
  bgImage?: string;
  image?: string;
  customDescription?: React.ReactNode;
}) => {
  return (
    <section
      style={bgImage ? { background: `url(${getImage(bgImage)})` } : undefined}
      className={`overflow-hidden bg-primary bg-cover px-5 py-14 ${bgImage ? '' : CTA_BG}`}
    >
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div
          className={`flex ${maxWidth} flex-col items-center space-y-4 text-center text-black dark:text-white-95`}
        >
          {image ? (
            <Image src={getImage(image)} alt="Internxt Logo" draggable={false} loading="lazy" width={262} height={32} />
          ) : (
            <p className="text-3xl font-semibold uppercase tracking-wider text-[#091E42] xl:text-6xl">
              {textContent.title}
            </p>
          )}
          <div className="text-xl">{customDescription}</div>
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
