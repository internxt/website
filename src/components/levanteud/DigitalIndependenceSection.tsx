import Image from 'next/image';
import { getImage } from '@/lib/getImage';

interface DigitalIndependenceSectionProps {
    textContent: any;
}

const HighlightText = ({
  text,
  className = 'text-base text-start leading-tight lg:whitespace-pre-line text-gray-55 dark:text-green-120',
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

export default function DigitalIndependenceSection({
  textContent,
}: Readonly<DigitalIndependenceSectionProps>): JSX.Element {
  return (
    <section
      className={`flex h-min flex flex-col w-full items-center justify-center overflow-hidden py-10 lg:py-20 lg:mt-16 lg:px-20 px-6 lg:gap-16 gap-8 lg:px-10 xl:px-32 3xl:px-80 bg-[linear-gradient(360deg,#F4F8FF_63.1%,#FFFFFF_100%)] dark:bg-[linear-gradient(360deg,#0D0D0D_63.1%,#1C1C1C_100%)]`}
    >
      <p className="text-start text-30 font-semibold leading-tight lg:whitespace-pre-line lg:text-center lg:text-5xl">
        {textContent.title}
      </p>
      <div className="flex flex-col-reverse gap-6 lg:flex-row">
        <div className='flex flex-col gap-6'>
          {textContent.features.map((feature) => (
            <HighlightText key={feature} text={feature} />
          ))}
        </div>
        <Image
            src={getImage('/images/Levante/Levante6.webp')}
            alt="Internxt x Levante"
            width={534}
            height={320}
            className='rounded-16'
            quality={100}
        />
       </div>

    </section>
  );
}
