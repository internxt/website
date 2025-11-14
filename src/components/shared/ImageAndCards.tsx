import { getImage } from '@/lib/getImage';
import Image from 'next/image';

interface ImageAndCardsProps {
  textContent: any;
  image: string;
}

export const ImageAndCards = ({ textContent, image }: ImageAndCardsProps) => {
  return (
    <section className="flex flex-col gap-16 px-6 pb-16">
      <div className={`absolute bottom-0 left-8 right-8 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32`} />
      <div className="flex h-min flex-col justify-center gap-6 lg:text-center">
        <h2 className={`whitespace-pre-line text-30 font-bold leading-tight text-gray-100 lg:text-5xl`}>
          {textContent.title}
        </h2>
        <p className={`whitespace-pre-line text-base font-normal leading-tight text-gray-55 lg:text-lg`}>
          {textContent.description}
        </p>
      </div>
      <div className="flex w-full flex-col-reverse gap-8 lg:flex-row lg:px-10 xl:px-32 3xl:px-80">
        <Image
          loading="lazy"
          src={getImage(image)}
          draggable="false"
          alt="Internxt data centers and certifications"
          width={541}
          height={120}
          quality={100}
        />
        <div className="flex flex-col justify-between gap-8">
          {textContent.features.titles.map((title: string, index: number) => (
            <div key={index} className="flex w-full flex-col gap-6 rounded-16 bg-white p-8">
              <h3 className="text-xl font-medium leading-tight text-gray-100">{title}</h3>
              <p className="text-base font-normal leading-tight text-gray-55">
                {textContent.features.description[index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
