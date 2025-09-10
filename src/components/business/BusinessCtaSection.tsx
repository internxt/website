import Link from 'next/link';

const BusinessCtaSection = ({
  textContent,
  url,
  target,
  customText,
  bgGradientContainerColor,
  bgGradientColor,
  containerDetails,
  bgColor,
}: {
  textContent: any;
  url?: string;
  target?: string;
  bgGradientContainerColor?: string;
  bgGradientColor?: string;
  customText?: React.ReactNode;
  containerDetails?: string;
  bgColor?: string;
}) => {
  return (
    <section
      className={`flex h-[400px] items-start justify-center py-10 lg:w-full  xl:px-32 3xl:px-80 ${bgColor}`}
      style={{ background: bgGradientColor }}
    >
      <div
        className={`z-10 flex h-auto w-[345px] flex-col items-center justify-evenly gap-4 rounded-20 py-6 lg:w-full lg:py-10 ${containerDetails}`}
        style={{ background: bgGradientContainerColor }}
      >
        {customText}
        {url && (
          <Link
            href={url}
            target={target}
            className={`flex rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white hover:bg-primary-dark xl:mr-10`}
          >
            {textContent.cta}
          </Link>
        )}
      </div>
    </section>
  );
};

export default BusinessCtaSection;
