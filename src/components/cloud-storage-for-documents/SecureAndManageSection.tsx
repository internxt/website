import { getImage } from '@/lib/getImage';
import { CaretRight } from '@phosphor-icons/react';
import Image from 'next/image';
const SecureAndManageSection = ({ textContent }): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 bg-neutral-17 py-10 lg:gap-12 lg:py-20">
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32 lg:top-0"></div>
      <h2 className="w-[323px] text-center text-30 font-bold leading-tight text-gray-100 lg:w-[832px] lg:text-3xl">
        {textContent.title}
      </h2>
      <p className="w-[323px] text-center text-sm font-normal leading-tight text-gray-55 lg:w-[832px] lg:text-lg">
        {textContent.description}
      </p>
      <div className="hidden flex-row gap-8 lg:flex">
        {textContent.cards.map((card, index) => (
          <div key={index} className="flex w-[544px] flex-col items-center gap-16 rounded-16  bg-white p-10">
            <div className="flex flex-col gap-6">
              <p className="text-30 font-semibold text-gray-100 ">{card.title}</p>
              <div className="flex flex-col gap-6">
                {card.description.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-base font-normal leading-tight text-gray-55">
                    {paragraph}
                  </p>
                ))}
              </div>
              <button
                onClick={() => {
                  const url = index === 0 ? '/drive' : '/cloud-object-storage';
                  window.location.href = url;
                }}
                className="flex flex-row gap-1 text-base font-medium leading-tight text-primary hover:underline"
              >
                {card.cta}
                <CaretRight className="h-[20px] w-[20px] pt-[2px] text-primary" />
              </button>
            </div>
            <div className="relative">
              {index === 0 ? (
                <>
                  <Image
                  src={getImage('/images/secure-file-sharing/drive.webp')}
                  alt="Drive"
                  width={290}
                  height={185}
                  quality={100}
                  className="object-cover"
                />
                </>
              ) : (
                <Image
                  src={getImage('/images/secure-file-sharing/S3.webp')}
                  alt="S3 Preview"
                  width={290}
                  height={185}
                  quality={100}
                  className="object-cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 lg:hidden">
        {textContent.cards.map((card, index) => (
          <div key={index} className="flex w-[340px] flex-col items-center gap-16 rounded-16 bg-white p-10">
            <div className="flex flex-col gap-6">
              <p className="text-xl font-semibold text-gray-100 ">{card.title}</p>
              <div className="flex flex-col gap-6">
                {card.description.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-xs font-normal leading-tight text-gray-55">
                    {paragraph}
                  </p>
                ))}
              </div>
              <button
                onClick={() => {
                  const url = index === 0 ? '/drive' : '/cloud-object-storage';
                  window.location.href = url;
                }}
                className="flex flex-row gap-1 text-base font-medium leading-tight text-primary hover:underline"
              >
                {card.cta}
                <CaretRight className="h-[20px] w-[20px] pt-[2px] text-primary" />
              </button>
            </div>
            <div className="relative">
              {index === 0 ? (
                <Image
                  src={getImage('/images/secure-file-sharing/drive.webp')}
                  alt="Drive"
                  width={290}
                  height={185}
                  quality={100}
                  className="object-cover"
                />
              ) : (
                <Image
                  src={getImage('/images/secure-file-sharing/S3.webp')}
                  alt="S3 Preview"
                  width={215}
                  height={135}
                  quality={100}
                  className="h-[135px] w-[215px] object-cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecureAndManageSection;
