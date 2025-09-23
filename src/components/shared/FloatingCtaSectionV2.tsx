import Link from 'next/link';

const FloatingCtaSectionv2 = ({
  textContent,
  url,
  target,
  customText,
  bgGradientContainerColor,
  bgGradientColor,
  containerDetails,
  bgPadding,
}: {
  textContent: any;
  url?: string;
  target?: string;
  bgGradientContainerColor?: string;
  bgGradientColor?: string;
  customText?: React.ReactNode;
  containerDetails?: string;
  bgPadding?: string;
}) => {
  return (
    <section
      className={`flex h-min  w-full items-center justify-center ${bgPadding} xl:px-32 3xl:px-80`}
      style={{ background: bgGradientColor }}
    >
      <div
        className={`z-10 flex h-auto flex-col items-center gap-6 rounded-20  py-6 text-center lg:w-full lg:py-10 ${containerDetails}`}
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
