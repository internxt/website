import { getImage } from '@/lib/getImage';
import Image from 'next/image';

interface PhotoSectionProps {
  darkMode?: boolean;
  textContent: {
    title: string;
    description: string[];
  };
}

const PhotoSection = ({ darkMode = false, textContent }: PhotoSectionProps): JSX.Element => {
  return (
    <section className={`flex w-full flex-col items-center justify-center gap-4 px-5 lg:pb-10 lg:gap-14 lg:px-10 lg:py-20 lg:pt-15 xl:px-32 3xl:px-80 ${darkMode ? 'bg-[#1C1C1C]' : ''}`}>
      <h2 className={`text-3xl font-bold ${darkMode ? 'text-white-95' : 'text-gray-100'} lg:text-5xl`}>
        {textContent.title}
      </h2>

      <div className="flex flex-col items-center gap-8">
        <div className="flex w-full flex-col gap-4 lg:w-[63%]">
          {textContent.description.map((desc) => (
            <p
              key={desc.slice(0, 20)}
              className={`text-center text-sm font-normal leading-tight ${
                darkMode ? 'text-green-120' : 'text-gray-55'
              } lg:text-center lg:text-lg`}
            >
              {desc}
            </p>
          ))}
        </div>

        <div className="hidden w-full lg:flex lg:w-2/3">
          <Image
            src={getImage('/images/photos/mobile.webp')}
            alt="Internxt Drive panel interface"
            height={562}
            width={1163}
            quality={200}
            className="h-auto w-full"
          />
        </div>
      </div>
      <div className="w-full max-w-[1700px] px-5 lg:px-8">
          <div className={`h-px w-full ${darkMode ? 'bg-gray-71' : 'bg-neutral-35'}`} />
      </div>
    </section>
  );
};

export default PhotoSection;