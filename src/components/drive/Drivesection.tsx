import { getImage } from '@/lib/getImage';
import Image from 'next/image';

interface DriveSectionProps {
  textContent: {
    title: string;
    description: string[];
  };
}

const DriveSection = ({ textContent }: DriveSectionProps): JSX.Element => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-8 px-5 pb-10 lg:gap-16 lg:px-10 lg:py-20 lg:pt-32 xl:px-32 3xl:px-80">
      <h2 className="text-30 font-bold text-gray-100 lg:text-5xl">{textContent.title}</h2>

      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start">
        <div className="hidden w-full lg:flex lg:w-1/2">
          <Image
            src={getImage('/images/drive/mockup7.webp')}
            alt="Internxt Drive panel interface"
            height={508}
            width={508}
            quality={100}
            className="h-auto w-full"
          />
        </div>

        <div className="flex w-full flex-col gap-4 lg:w-1/3">
          {textContent.description.map((desc, index) => (
            <p key={index} className="text-base font-normal leading-tight text-gray-55 lg:text-lg">
              {desc}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriveSection;
