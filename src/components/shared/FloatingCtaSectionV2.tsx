import Link from 'next/link';
import { DARK_MODE_ENABLED } from '@/theme.config';

const DARK_CONTAINER_GRADIENT =
  'linear-gradient(115.95deg, rgba(255, 255, 255, 0.3) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)';

const FloatingCtaSectionv2 = ({
  textContent,
  url,
  target,
  customText,
  bgGradientContainerColor,
  bgGradientColor,
  containerDetails = '',
  bgPadding = '',
  darkMode = DARK_MODE_ENABLED,
}: {
  textContent: any;
  url?: string;
  target?: string;
  bgGradientContainerColor?: string;
  bgGradientColor?: string;
  customText?: React.ReactNode;
  containerDetails?: string;
  bgPadding?: string;
  darkMode?: boolean;
}) => {
  return (
    <section
      className={`flex h-min w-full items-center justify-center px-6 ${bgPadding} ${
        darkMode && !bgGradientColor ? 'bg-[#1C1C1C]' : ''
      } xl:px-32 3xl:px-80`}
      style={{ background: bgGradientColor }}
    >
      <div
        className={`z-10 flex h-auto w-full flex-col items-center justify-center gap-6 rounded-20 py-6 text-center ${
          darkMode ? 'text-white' : ''
        } lg:w-full lg:py-10 ${containerDetails}`}
        style={{ background: darkMode ? DARK_CONTAINER_GRADIENT : bgGradientContainerColor }}
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
