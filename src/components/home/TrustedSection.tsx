import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { Quotes } from '@phosphor-icons/react';
import { HomeText } from '@/assets/types/home';

interface TrustedSectionProps {
  textContent: HomeText['TrustedBySection'];
  bottomBar?: boolean;
}

export default function TrustedSection({ textContent, bottomBar = true }: Readonly<TrustedSectionProps>): JSX.Element {
  return (
    <section
      className={`relative flex h-min w-full flex-col items-start justify-start overflow-hidden px-8 py-10 lg:h-min lg:items-center lg:justify-center lg:gap-20 lg:gap-8 lg:px-32 lg:py-20`}
      style={{ background: 'linear-gradient(360deg, #FFFFFF 0%, #F4F8FF 100%)' }}
    >
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32"></div>
      {bottomBar && (
        <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32"></div>
      )}
      <p className="flex w-[260px] items-start justify-start text-start text-30 font-bold leading-tight lg:w-full lg:items-center lg:justify-center lg:text-center lg:text-3xl">
        {textContent.title}
      </p>
      <div className="flex h-[420px] w-full flex-col-reverse items-center justify-center lg:h-[220px] lg:w-min lg:flex-row lg:gap-8">
        <div className="relative h-full w-full lg:w-[650px]">
          <Image
            src={getImage('/images/home/NewDesign/mujer-joven-trabajar-desde-casa.jpg')}
            alt="Woman working fromhome"
            fill
            className="rounded-16"
            quality={100}
          />
        </div>
        <div className="flex h-full flex-col justify-center gap-3 lg:max-w-[400px] lg:justify-between lg:gap-0">
          <Quotes className="text-primary" height={24} width={24} weight="fill" />
          <p className="text-xs font-normal italic leading-tight text-gray-55 lg:text-base">{textContent.review}</p>
          <p className="text-xs font-semibold leading-tight text-gray-55 lg:text-base">{textContent.author}</p>
        </div>
      </div>
    </section>
  );
}
