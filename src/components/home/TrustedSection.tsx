import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { Quotes } from '@phosphor-icons/react';

interface TrustedSectionProps {
  textContent: any;
  bottomBar?: boolean;
  darkMode?: boolean;
  image?: string;
}

export default function TrustedSection({
  textContent,
  bottomBar = true,
  darkMode,
  image,
}: Readonly<TrustedSectionProps>): JSX.Element {
  return (
    <section
      className={` flex h-full w-full flex-col items-start justify-start overflow-hidden px-8 py-10 lg:h-min lg:items-center lg:justify-center lg:gap-20 lg:px-32 lg:py-20 ${
        darkMode ? 'bg-[#1C1C1C]' : ''
      }`}
      style={!darkMode && !image ? { background: 'linear-gradient(360deg, #FFFFFF 0%, #F4F8FF 100%)' } : undefined}
    >
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32"></div>
      {bottomBar && (
        <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32"></div>
      )}
      <p
        className={`${
          darkMode ? 'text-white-95' : 'text-gray-100'
        } flex w-[260px] items-start justify-start text-start text-30 font-bold leading-tight lg:w-full lg:items-center lg:justify-center lg:text-center lg:text-3xl`}
      >
        {textContent.title}
      </p>
      <div className="flex w-full flex-col-reverse items-center justify-center lg:w-min lg:flex-row lg:gap-8">
        {image ? (
          <div className="relative h-full w-full lg:w-[650px]">
            <Image
              src={getImage(image ? image : '/images/home/NewDesign/mujer-joven-trabajar-desde-casa.jpg')}
              alt="mauricio hoody techbg"
              height={600}
              width={600}
              className="rounded-16"
              quality={100}
            />
          </div>
        ) : (
          <div className="relative h-full w-full lg:w-[650px]">
            <Image
              src={getImage('/images/home/NewDesign/mujer-joven-trabajar-desde-casa.jpg')}
              alt="Woman working fromhome"
              height={600}
              width={600}
              className="rounded-16"
              quality={100}
            />
          </div>
        )}

        <div className="flex h-full flex-col justify-center gap-3 lg:max-w-[400px] lg:justify-center lg:gap-3">
          <Quotes className="text-primary" height={24} width={24} weight="fill" />
          <p
            className={`${darkMode ? 'text-white-95' : 'text-gray-55'} text-sm font-normal italic
        leading-tight lg:text-base`}
          >
            {image ? textContent.cloudwardsReview : textContent.review}
          </p>
          <p
            className={`${
              darkMode ? 'text-white-95' : 'text-gray-55'
            } text-sm font-semibold leading-tight lg:text-base`}
          >
            {image ? textContent.cloudwardsAuthor : textContent.author}
          </p>
        </div>
      </div>
    </section>
  );
}
