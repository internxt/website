import Image from 'next/image';
import HeroSectionSafeArea from '../shared/HeroSectionSafeArea';
import Button from '../shared/Button';
import { Percent, X } from '@phosphor-icons/react';

interface HeroSectionProps {
  textContent: any;
  InfoTextComponent?: React.ReactNode;
  isStartPage?: boolean;
}

const StartPageLabel = () => {
  return (
    <div className="flex flex-row items-center space-x-3.5">
      <Image src={'/images/partnerships/start-page/Startpage_logo.svg'} width={117} height={27} alt="StartPage logo" />
      <X size={16} />
      <Image
        loading="lazy"
        className="select-none"
        src={`../../logos/internxt/cool-gray-90.svg`}
        alt="Internxt logo"
        width={130}
        height={16}
      />
    </div>
  );
};

const HeroSection: React.FC<HeroSectionProps> = ({ textContent, InfoTextComponent, isStartPage }) => {
  function redirectToPricingTable() {
    window.scrollTo({
      top: document?.getElementById('payment')?.offsetTop! + 500,
      behavior: 'smooth',
    });
  }

  return (
    <section className="overflow-hidden pt-12">
      <HeroSectionSafeArea>
        <div className="flex max-w-[550px] flex-col items-center justify-center space-y-8 text-center lg:items-start lg:text-left">
          <div className="flex flex-col space-y-4">
            {isStartPage ? <StartPageLabel /> : null}
            <h1 className="text-6xl font-bold text-gray-100">{textContent.title}</h1>
            <h2 className="text-4xl font-semibold text-primary">{textContent.subtitle}</h2>
          </div>
          <div className="flex flex-row items-center space-x-2.5 rounded-lg bg-primary/7 p-4">
            <Percent className="h-16 w-16 text-primary" />
            {InfoTextComponent ?? <p className="text-xl text-gray-80">{textContent.info}</p>}
          </div>
          <Button onClick={redirectToPricingTable} text={textContent.cta} />
        </div>
        <Image
          src="/images/affiliates/Startpage_discount_collab.webp"
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
