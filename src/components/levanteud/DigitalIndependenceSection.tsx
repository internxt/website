import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { DARK_MODE_ENABLED } from '@/theme.config';

interface DigitalIndependenceSectionProps {
  darkMode?: boolean;
  textContent: any;
}

export default function DigitalIndependenceSection({
  darkMode = DARK_MODE_ENABLED,
  textContent,
}: Readonly<DigitalIndependenceSectionProps>): JSX.Element {
  const HighlightText = ({
    darkMode = DARK_MODE_ENABLED,
    text,
    className = `text-base text-start leading-tight lg:whitespace-pre-line ${
      darkMode ? 'text-green-120' : 'text-gray-55'
    }`,
  }) => {
    const parts = text.split(/(\*\*.*?\*\*)/);

    return (
      <span className={className}>
        {parts.map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <span key={index} className="font-semibold">
                {part.slice(2, -2)}
              </span>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </span>
    );
  };

  return (
    <section
      className={`flex flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden px-6 py-10 lg:mt-16 lg:gap-16 lg:px-10 lg:px-20 lg:py-20 xl:px-32 3xl:px-80`}
      style={{
        background: darkMode
          ? 'linear-gradient(360deg, #0D0D0D 63.1%, #1C1C1C 100%)'
          : 'linear-gradient(360deg, #F4F8FF 63.1%, #FFFFFF 100%)',
      }}
    >
      <p className="text-start text-30 font-semibold leading-tight lg:whitespace-pre-line lg:text-center lg:text-5xl">
        {textContent.title}
      </p>
      <div className="flex flex-col-reverse gap-6 lg:flex-row">
        <div className="flex flex-col gap-6">
          {textContent.features.map((feature, index) => (
            <HighlightText text={feature} />
          ))}
        </div>
        <Image
          src={getImage('/images/Levante/Levante6.webp')}
          alt="Internxt x Levante"
          width={534}
          height={320}
          className="rounded-16"
          quality={100}
        />
      </div>
    </section>
  );
}
