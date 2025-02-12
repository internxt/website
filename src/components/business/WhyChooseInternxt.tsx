import { Eye, NumberCircleZero, Scales, UserGear } from '@phosphor-icons/react';
import { CardGroup } from '../shared/CardGroup';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import Button from '../shared/Button';

interface WhyChooseInternxtForBusinessProps {
  textContent: any;
  withoutBanner?: boolean;
}

const scrollToTop = () => {
  document.querySelector('#contactSales')?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
};

export const WhyChooseInternxtForBusiness = ({
  textContent,
  withoutBanner,
}: WhyChooseInternxtForBusinessProps): JSX.Element => {
  const onButtonClick = () => {
    window.location.href = '#priceTable';
  };

  const cards = [
    {
      icon: Scales,
      title: textContent.WhyChooseInternxt.cards[0].title,
      description: textContent.WhyChooseInternxt.cards[0].description,
    },
    {
      icon: NumberCircleZero,
      title: textContent.WhyChooseInternxt.cards[1].title,
      description: textContent.WhyChooseInternxt.cards[1].description,
    },
    {
      icon: UserGear,
      title: textContent.WhyChooseInternxt.cards[2].title,
      description: textContent.WhyChooseInternxt.cards[2].description,
    },
    {
      icon: Eye,
      title: textContent.WhyChooseInternxt.cards[3].title,
      description: textContent.WhyChooseInternxt.cards[3].description,
    },
  ];

  return (
    <section className="overflow-hidden bg-gray-1 px-5 py-20">
      <div className="flex flex-col items-center justify-center gap-20">
        {/* Banner */}
        {withoutBanner ? undefined : (
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
            <div className="+ flex w-full flex-col items-center justify-center  gap-9 py-20 pr-10 lg:w-max lg:px-0">
              <div className="flex w-full max-w-[460px] flex-col gap-4 text-center text-white">
                <p className="text-4xl font-semibold">{textContent.WhyChooseInternxt.banner.title}</p>
                <p className="text-xl">{textContent.WhyChooseInternxt.banner.description}</p>
              </div>
              <div className="flex flex-col items-center gap-4 lg:flex-row ">
                <Button text={textContent.WhyChooseInternxt.banner.cta} onClick={onButtonClick} />
                <p className="hidden text-center text-xl text-gray-40 lg:flex">{textContent.HeroSection.separator}</p>
                <Button text={textContent.HeroSection.cta2} onClick={scrollToTop} />
              </div>
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
        )}
        {/* Title and description */}
        <div className="flex w-full max-w-[774px] flex-col items-center justify-center gap-6 text-center">
          <h2 className="text-5xl font-semibold text-gray-100">{textContent.WhyChooseInternxt.title}</h2>
          <h3 className="text-xl text-gray-80">{textContent.WhyChooseInternxt.description}</h3>
        </div>

        {/* Cards */}
        <CardGroup cards={cards} backgroundColorCard="bg-white" />
      </div>
    </section>
  );
};
