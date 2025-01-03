import { CloudObjectStorageText } from '@/assets/types/cloud-object-storage';
import { CardGroup } from '../shared/CardGroup';
import { HandCoins, HardDrives, NumberCircleZero, ShieldPlus, SketchLogo, Speedometer } from '@phosphor-icons/react';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import Button from '../shared/Button';
import { MarqueeComponentV2 } from '../specialoffer/MarqueeComponentV2';

interface CloudObjectStorageWhyChooseInternxtSectionProps {
  textContent: CloudObjectStorageText['WhyChooseInternxtSection'];
}

export const CloudObjectStorageWhyChooseInternxtSection = ({
  textContent,
}: CloudObjectStorageWhyChooseInternxtSectionProps): JSX.Element => {
  const cards = [
    {
      icon: NumberCircleZero,
      title: textContent.cards[0].title,
      description: textContent.cards[0].description,
    },
    {
      icon: HandCoins,
      title: textContent.cards[1].title,
      description: textContent.cards[1].description,
    },
    {
      icon: SketchLogo,
      title: textContent.cards[2].title,
      description: textContent.cards[2].description,
    },
    {
      icon: ShieldPlus,
      title: textContent.cards[3].title,
      description: textContent.cards[3].description,
    },
    {
      icon: HardDrives,
      title: textContent.cards[4].title,
      description: textContent.cards[4].description,
    },
    {
      icon: Speedometer,
      title: textContent.cards[5].title,
      description: textContent.cards[5].description,
    },
  ];

  return (
    <section className="overflow-hidden bg-gray-1 px-5 py-20">
      <div className="flex flex-col items-center justify-center gap-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-[831px] text-5xl font-semibold text-gray-100">{textContent.title}</h2>
          <p className="max-w-[774px] text-xl text-gray-80">{textContent.description}</p>
        </div>
        <CardGroup cards={cards} backgroundColorCard="bg-white" />

        <div className={`bg-gray-1 py-10`}>
          <MarqueeComponentV2 bgColor="bg-gray-1" />
        </div>

        {/* Banner */}
        <div
          className="flex w-full max-w-[1200px] flex-row justify-between rounded-[32px]"
          style={{
            background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #161616 100%)',
          }}
        >
          <div>
            <Image
              src={getImage('/images/business/cta/internxt_b2b_cta_1.webp')}
              alt="Internxt B2B CTA 1"
              width={300}
              height={283}
              className="hidden lg:flex"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-9 px-5 py-20 lg:w-max lg:px-0">
            <div className="flex w-full max-w-[460px] flex-col gap-4 text-center text-white">
              <p className="text-4xl font-semibold">{textContent.bannerText.title}</p>
              <p className="text-xl">{textContent.bannerText.description}</p>
            </div>
            <Button text={textContent.bannerText.cta} onClick={() => (window.location.hash = '#storageSection')} />
          </div>
          <div className="hidden items-center lg:flex">
            <Image
              src={getImage('/images/business/cta/internxt_b2b_cta_2.webp')}
              alt="Internxt B2B CTA 2"
              width={250}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
