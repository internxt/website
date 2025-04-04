import { CloudObjectStorageText } from '@/assets/types/cloud-object-storage';
import { getImage } from '@/lib/getImage';
import Button from '../shared/Button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface PriceCardSectionProps {
  textContent: CloudObjectStorageText['PriceCardSection'];
}

export const CloudObjectStoragePriceCardSection = ({ textContent }: PriceCardSectionProps): JSX.Element => {
  const router = useRouter();
  return (
    <section className="overflow-hidden px-5 py-20" id="storageSection">
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex max-w-[774px] flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</h2>
          <h3 className="text-xl text-gray-80">{textContent.description}</h3>
        </div>
        <div className="flex flex-col-reverse gap-16 md:flex-row">
          {/* Pay-as-you go Card */}
          <div className="flex w-full max-w-[400px] flex-col justify-between rounded-2xl bg-primary md:w-screen">
            <div className="flex flex-col gap-2 p-10 text-white">
              <p className="text-4xl font-semibold">{textContent.payAsYouGoCard.title}</p>
              <p className="text-lg">{textContent.payAsYouGoCard.description}</p>
            </div>
            <div className="flex">
              <Image
                src={getImage('/images/cloud-object-storage/internxt_s3_pricing.webp')}
                alt="Internxt s3 pricing"
                width={372}
                height={87}
              />
            </div>
          </div>
          {/* Price Card */}
          <div className="flex w-full max-w-[400px] flex-col rounded-2xl border border-gray-10 md:w-screen md:max-w-[320px]">
            {/* Fist part */}
            <div className="flex flex-col items-center gap-8 px-6 py-6 text-center">
              <div className="flex flex-col items-center rounded-full bg-primary/7 px-3 py-0.5">
                <p className="text-2xl font-medium text-primary">{textContent.cardText.label}</p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <p className={` flex flex-row items-start space-x-1 whitespace-nowrap font-medium text-gray-100`}>
                  <span className={`currency`}>€</span>
                  <span className="price text-4xl font-bold">{textContent.cardText.price}</span>
                </p>
                <p className="text-gray-50">{textContent.cardText.perTB}</p>
              </div>
              <Button
                className="!w-full"
                text={textContent.cardText.cta}
                onClick={() => router.push('/cloud-object-storage/checkout')}
              />
            </div>

            {/* What's included */}
            <div className="flex flex-col gap-6 rounded-b-2xl bg-gray-1 px-6 py-6">
              <p className="text-lg font-medium text-gray-100">{textContent.cardText.whatsIncluded.title}</p>
              <div className="flex flex-col gap-4">
                {textContent.cardText.whatsIncluded.features.map((feature) => (
                  <div className="flex flex-row items-center gap-2" key={feature}>
                    <img
                      loading="lazy"
                      className="translate-y-px select-none"
                      src={getImage('/icons/checkPrimary.svg')}
                      draggable="false"
                      alt="check icon"
                    />
                    <p className="text-gray-80">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* One time payment
        <p className="text-gray-50">{textContent.oneTimePayment}</p> */}
      </div>
    </section>
  );
};
