import Link from 'next/link';

const FloatingCtaSectionv2 = ({
  textContent,
  url,
  target,
  customText,
  bgGradientContainerColor,
  bgGradientColor,
  containerDetails,
}: {
  textContent: any;
  url?: string;
  target?: string;
  bgGradientContainerColor?: string;
  bgGradientColor?: string;
  customText?: React.ReactNode;
  containerDetails?: string;
}) => {
  return (
    <section
      className="flex h-[281px] w-full items-center justify-center px-10 lg:py-9 xl:px-32 3xl:px-80"
      style={{ background: bgGradientColor }}
    >
      <div
        className={`z-10 flex h-[227px] w-full flex-col items-center justify-evenly rounded-20 ${containerDetails}`}
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

export default FloatingCtaSectionv2;
