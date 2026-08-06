import { getImage } from '@/lib/getImage';
import Image from 'next/image';

interface PhotoSectionProps {
  textContent: {
    title: string;
    description: string[];
  };
}

const PhotoSection = ({ textContent }: PhotoSectionProps): JSX.Element => {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-8 px-5 lg:pb-10 lg:gap-16 lg:px-10 lg:py-20 lg:pt-15 xl:px-32 3xl:px-80">
      <h2 className="text-3xl font-bold text-gray-100 lg:text-6xl">{textContent.title}</h2>

      <div className="flex flex-col items-center gap-8">
        <div className="flex w-full flex-col gap-4 lg:w-[70%]">
          {textContent.description.map((desc) => (
            <p key={desc.slice(0,20)} className="text-sm text-center font-normal leading-tight text-gray-55 lg:text-lg lg:text-center">
              {desc}
            </p>
          ))}
        </div>

        <div className="hidden w-full lg:flex lg:w-1/2">
          <Image
            src={getImage('/images/photos/mobile.webp')}
            alt="Internxt Drive panel interface"
            height={402}
            width={832}
            quality={200}
            className="h-auto w-full"
          />
        </div>
      </div>
      <div className="w-full max-w-[1700px] px-5 lg:px-8">
          <div className="h-px w-full bg-neutral-35" />
      </div>
    </section>
  );
};

export default PhotoSection;