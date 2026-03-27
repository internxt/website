import Image from 'next/image';
import { getImage } from '@/lib/getImage';

interface DigitalIndependenceSectionProps {
    textContent: any;
}

export default function DigitalIndependenceSection({
  textContent,
}: Readonly<DigitalIndependenceSectionProps>): JSX.Element {
  const HighlightText = ({ text, className = 'text-base text-start leading-tight lg:whitespace-pre-line text-gray-55' }) => {
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
      className={`flex h-min flex flex-col w-full items-center justify-center overflow-hidden py-10 lg:py-20 lg:mt-16 lg:px-20 px-6 lg:gap-16 gap-8`}
      style={{ background: 'linear-gradient(360deg, #F4F8FF 63.1%, #FFFFFF 100%)' }}
    >
       <p className='text-30 lg:text-5xl lg:text-center text-start font-semibold leading-tight lg:whitespace-pre-line'>{textContent.title}</p>
       <div className='flex flex-col-reverse lg:flex-row gap-6'>
        <div className='flex flex-col gap-6'>
          {textContent.features.map((feature, index) => (
            <HighlightText text={feature}/>
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
