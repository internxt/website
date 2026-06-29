import { getImage } from '@/lib/getImage';
import { CaretRight } from '@phosphor-icons/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const SecureAndManageSection = ({ textContent }): JSX.Element => {
  const router = useRouter();

  return (
    <section
      className="relative flex flex-col items-center justify-center gap-8 bg-neutral-17 px-5 py-10 lg:gap-12 lg:px-0 lg:py-20"
    >
      <div className="absolute left-5 right-5 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32" />

      <h2 className="w-full max-w-[832px] px-4 text-center text-30 font-bold leading-tight text-gray-100 lg:px-0 lg:text-3xl">
        {textContent.title}
      </h2>

      <p className="w-full max-w-[832px] px-5 text-center text-sm font-normal leading-tight text-gray-55 lg:px-0 lg:text-lg">
        {textContent.description}
      </p>

      <div className="hidden flex-row gap-8 lg:flex">
        {textContent.cards.map((card, index) => (
          <div
            key={card.title}
            className="flex w-[544px] flex-col items-center gap-16 rounded-16 bg-white p-10"
          >
            <div className="flex flex-col gap-6">
              <p className="text-30 font-semibold text-gray-100">
                {card.title}
              </p>

              <div className="flex flex-col gap-6">
                {card.description.map((paragraph) => (
                  <p
                    key={paragraph.slice(0,30)}
                    className="text-base font-normal leading-tight text-gray-55"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <button
                onClick={() => {
                  const url =
                    index === 0 ? '/drive' : '/cloud-object-storage';
                  router.push(url);
                }}
                className="flex flex-row gap-1 text-base font-medium leading-tight text-primary hover:underline"
              >
                {card.cta}
                <CaretRight className="h-[20px] w-[20px] pt-[2px] text-primary" />
              </button>
            </div>

            <Image
              src={getImage(
                index === 0
                  ? '/images/secure-file-sharing/drive.webp'
                  : '/images/secure-file-sharing/S3.webp'
              )}
              alt={card.title}
              width={290}
              height={185}
              quality={100}
              className="object-cover"
            />
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
                {card.description.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-sm font-normal leading-tight text-gray-55"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <button
                onClick={() => {
                  const url =
                    index === 0 ? '/drive' : '/cloud-object-storage';
                  router.push(url);
                }}
                className="flex flex-row gap-1 text-base font-medium leading-tight text-primary hover:underline"
              >
                {card.cta}
                <CaretRight className="h-[20px] w-[20px] pt-[2px] text-primary" />
              </button>
            </div>

            <Image
              src={getImage(
                index === 0
                  ? '/images/secure-file-sharing/drive.webp'
                  : '/images/secure-file-sharing/S3.webp'
              )}
              alt={card.title}
              width={290}
              height={185}
              quality={100}
              className="w-full max-w-[215px] h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecureAndManageSection;