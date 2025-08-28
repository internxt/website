import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { CaretRight } from '@phosphor-icons/react';

interface OfficialCloudProviderProps {
  textContent: any;
}
const onButtonClick = () => (window.location.href = '#priceTable');

export default function OfficialCloudProviderSection({ textContent }: OfficialCloudProviderProps): JSX.Element {
  return (
    <section
      className={`flex h-min w-full flex-col-reverse items-center justify-center gap-8 overflow-hidden px-6 py-10 lg:h-min lg:flex-row lg:p-10 xl:p-32 3xl:p-80`}
      style={{ background: 'linear-gradient(0deg, #F4F8FF 0%, #FFFFFF 100%)' }}
    >
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32"></div>
      <Image
        src={getImage('/images/home/NewDesign/Frame 1984077264.png')}
        alt="Valencia CF Badge"
        height={200}
        width={400}
        quality={100}
      />

      <div className="flex flex-1 flex-col justify-between gap-6 lg:h-auto lg:w-[842px] lg:flex-initial">
        <p className="text-30 font-bold leading-tight text-gray-100 lg:text-3xl">{textContent.title}</p>
        <p className="text-sm font-normal leading-tight text-gray-55 lg:text-xl">{textContent.description}</p>
        <span className="flex w-max cursor-pointer flex-row gap-1 text-base font-normal leading-tight text-primary hover:text-primary-dark hover:underline">
          {textContent.cta}
          <CaretRight className="pt-[2px] text-primary" size={20} />
        </span>
      </div>
    </section>
  );
}
