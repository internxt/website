import { getImage } from '@/lib/getImage';
import { CaretRight } from '@phosphor-icons/react';
import Image from 'next/image';

const SecureAndManageSection = ({ textContent }): JSX.Element => {

  return (
    <section
      className="relative flex flex-col items-center justify-center gap-8 bg-neutral-17 px-5 py-10 lg:gap-12 lg:px-0 lg:py-20"
    >
      <div className="absolute left-5 right-5 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32" />

      <h2 className="w-full max-w-[832px] px-4 text-center text-[30px] font-bold leading-tight text-gray-100 lg:px-0 lg:text-[48px]">
        {textContent.title}
      </h2>

      <p className="w-full max-w-[832px] px-5 text-center text-[14px] font-normal leading-tight text-gray-55 lg:px-0 lg:text-lg">
        {textContent.description}
      </p>

      <div className="hidden flex-row gap-8 lg:flex">
        {textContent.cards.map((card, index) => (
          <div
            key={card.title}
            className="flex w-[544px] flex-col items-center gap-16 rounded-16 bg-white p-10"
          >
            <div className="flex flex-col gap-6">
              <p className="text-[20px] lg:text-[30px] font-semibold text-gray-100">
                {card.title}
              </p>

              <div className="flex flex-col gap-6">
                {card.description.map((paragraph) => (
                  <p
                    key={paragraph.slice(0,30)}
                    className="text-[14px] lg:text-base font-normal leading-tight text-gray-55"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <a 
                href={index === 0 ? '/drive' : 'https://send.internxt.com/'}
                className="flex flex-row gap-1 text-base font-medium leading-tight text-primary hover:underline"
                >
                {card.cta}
                <CaretRight className="h-[20px] w-[20px] pt-[2px] text-primary" />
              </a>
            </div>

            <div className={index === 1 ? '-mt-5' : ''}>
              <Image
                src={getImage(
                  index === 0
                    ? '/images/secure-file-transfer/iDrive.webp'
                    : '/images/secure-file-transfer/iSend.webp'
                )}
                alt={card.title}
                width={290}
                height={185}
                quality={100}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 lg:hidden">
        {textContent.cards.map((card, index) => (
          <div
            key={card.title}
            className="flex w-full max-w-[340px] flex-col items-center gap-16 rounded-16 bg-white p-10"
          >
            <div className="flex flex-col gap-6">
              <p className="text-xl font-semibold text-gray-100">
                {card.title}
              </p>

              <div className="flex flex-col gap-6">
                {card.description.map((paragraph) => (
                  <p
                    key={paragraph.slice(0,30)}
                    className="text-sm font-normal leading-tight text-gray-55"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <a 
                href={index === 0 ? '/drive' : 'https://send.internxt.com/'}
                className="flex flex-row gap-1 text-base font-medium leading-tight text-primary hover:underline"
                >
                {card.cta}
                <CaretRight className="h-[20px] w-[20px] pt-[2px] text-primary" />
              </a>
            </div>
            
            <div className={index === 1 ? '-mt-2' : ''}>
              <Image
                src={getImage(
                  index === 0
                    ? '/images/secure-file-transfer/iDrive.webp'
                    : '/images/secure-file-transfer/iSend.webp'
                )}
                alt={card.title}
                width={290}
                height={185}
                quality={100}
                className="w-full max-w-[215px] h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecureAndManageSection;