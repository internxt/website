import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { Quotes } from '@phosphor-icons/react';
import { HomeText } from '@/assets/types/home';

interface TrustedSectionProps {
  textContent: HomeText['TrustedBySection'];
}

export default function TrustedSection({ textContent }: Readonly<TrustedSectionProps>): JSX.Element {
  return (
    <section
      className={`relative flex h-[532px] w-full flex-col items-center justify-center gap-8 overflow-hidden px-8 lg:h-min lg:gap-20 lg:px-32 lg:py-20 xl:py-32`}
      style={{ background: 'linear-gradient(360deg, #FFFFFF 0%, #F4F8FF 100%)' }}
    >
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32"></div>
      <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32"></div>
      <p className="flex w-full items-center justify-center text-start text-30 font-bold leading-tight lg:text-center lg:text-3xl">
        {textContent.title}
      </p>
      <div className="flex h-[370px] w-full flex-col-reverse justify-center gap-8 lg:h-[220px] lg:w-min lg:flex-row">
        <div className="relative h-full w-[323px] lg:w-[650px]">
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
