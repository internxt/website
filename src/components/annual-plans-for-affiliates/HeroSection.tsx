import Image from 'next/image';
import HeroSectionSafeArea from '../shared/HeroSectionSafeArea';
import Button from '../shared/Button';
import { Percent } from '@phosphor-icons/react';

const HeroSection = ({ textContent, InfoTextComponent }: { textContent: any; InfoTextComponent?: React.ReactNode }) => {
  function redirectToPricingTable() {
    window.scrollTo({
      top: document?.getElementById('pricing-table')?.offsetTop! + 500,
      behavior: 'smooth',
    });
  }
  return (
    <section className="overflow-hidden pt-12">
      <HeroSectionSafeArea>
        <div className="flex max-w-[550px] flex-col items-center justify-center space-y-8 text-center lg:items-start lg:text-left">
          <div className="flex flex-col space-y-4">
            <h1 className="text-6xl font-bold text-gray-100">{textContent.title}</h1>
            <h2 className="text-4xl font-semibold text-primary">{textContent.subtitle}</h2>
          </div>
          <div className="flex flex-row items-center space-x-2.5 rounded-lg bg-primary/7 p-4">
            <Percent className="h-16 w-16 text-primary" />
            {InfoTextComponent ? InfoTextComponent : <p className="text-xl text-gray-80">{textContent.info}</p>}
          </div>
          <Button onClick={redirectToPricingTable} text={textContent.cta} />
        </div>
        <Image
          src="/images/affiliates/startpage_collab.webp"
          alt="Affiliates Hero Section"
          draggable={false}
          width={500}
          height={500}
        />
      </HeroSectionSafeArea>
    </section>
  );
};

export default HeroSection;
