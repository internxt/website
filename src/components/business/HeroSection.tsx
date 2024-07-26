import Image from 'next/image';
import Button from '../shared/Button';
import Header from '../shared/Header';
import HeroSectionSafeArea from '../shared/HeroSectionSafeArea';
import { getImage } from '@/lib/getImage';

interface BusinessHeroSectionProps {
  textContent: Record<string, any>;
}

export const BusinessHeroSection = ({ textContent }: BusinessHeroSectionProps): JSX.Element => {
  const onButtonClick = () => {
    window.location.href = '#priceTable';
  };

  return (
    <section
      className="h-full overflow-hidden px-5 pt-20 pb-10"
      style={{
        background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #161616 100%)',
      }}
    >
      <HeroSectionSafeArea>
        <div className="flex w-full flex-col items-center justify-center gap-8 text-center text-white lg:max-w-[535px] lg:items-start lg:justify-start lg:text-start">
          <Header>{textContent.title}</Header>
          <div className="flex flex-col gap-4">
            <p className="text-xl">{textContent.description[0]}</p>
            <p className="text-xl font-semibold">{textContent.description[1]}</p>
          </div>
          <Button text={textContent.cta} onClick={onButtonClick} />
        </div>

        {/* !TODO: Adjust the images height  */}
        <div className="flex w-full justify-end">
          <Image
            draggable={false}
            src={getImage('/images/business/Internxt_b2b_business_solution.webp')}
            alt="Internxt B2B Business Solution"
            width={671}
            height={563}
          />
        </div>
      </HeroSectionSafeArea>
    </section>
  );
};
