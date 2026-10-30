import Link from 'next/link';

const DARK_CONTAINER_GRADIENT =
  'dark:bg-[linear-gradient(115.95deg,rgba(255,255,255,0.3)_10.92%,rgba(255,255,255,0.08)_96.4%)]';

const FloatingCtaSectionv2 = ({
  textContent,
  url,
  target,
  customText,
  bgGradientContainerColor = '',
  bgGradientColor = '',
  containerDetails = '',
  bgPadding = '',
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
      className={`flex h-min w-full items-center justify-center px-6 ${bgPadding} ${bgGradientColor} xl:px-32 3xl:px-80`}
    >
      <div
        className={`z-10 flex h-auto w-full flex-col items-center justify-center gap-6 rounded-20 py-6 text-center dark:text-white lg:w-full lg:py-10 ${bgGradientContainerColor} ${DARK_CONTAINER_GRADIENT} ${containerDetails}`}
      >
        {customText}
        {url && (
          <Link
            href={url}
            target={target}
            className={`flex rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white hover:bg-primary-dark`}
          >
            {textContent.cta}
          </Link>
        )}
      </div>
    </section>
  );
};

export default FloatingCtaSectionv2;
