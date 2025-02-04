import Image from 'next/image';
import HeroSectionSafeArea from '../shared/HeroSectionSafeArea';
import Button from '../shared/Button';
import { Percent, X } from '@phosphor-icons/react';
import { getImage } from '@/lib/getImage';

interface HeroSectionProps {
  textContent: any;
  InfoTextComponent?: React.ReactNode;
  isStartPage?: boolean;
  isBrave?: boolean;
  isCloudWards?: boolean;
  redirect?: string;
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

const BraveLabel = () => {
  return (
    <div className="flex flex-row items-center justify-center space-x-3.5 lg:justify-start ">
      <Image
        src={getImage('/images/partnerships/brave/Brave_Browser_logotype.svg')}
        width={117}
        height={27}
        alt="Brave logo"
      />
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

const CloudWardsLabel = () => {
  return (
    <div className="flex flex-row items-center justify-center space-x-3.5 lg:justify-start ">
      <Image src={getImage('/images/partnerships/cloudwards/logo.svg')} width={117} height={27} alt="Brave logo" />
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

const HeroSection: React.FC<HeroSectionProps> = ({
  textContent,
  InfoTextComponent,
  isStartPage,
  redirect,
  isBrave,
  isCloudWards,
}) => {
  function redirectToPricingTable() {
    window.location.href = redirect ?? '#payment';
  }

  return (
    <section className="overflow-hidden pt-12">
      <HeroSectionSafeArea>
        <div className="flex max-w-[550px] flex-col items-center justify-center space-y-8 text-center text-center lg:items-start lg:text-left">
          <div className="flex flex-col space-y-4">
            {isStartPage ? <StartPageLabel /> : null}
            {isCloudWards ? <CloudWardsLabel /> : null}
            {isBrave ? <BraveLabel /> : null}
            <h1 className="text-6xl font-bold text-gray-100">{textContent.title}</h1>
            <h2 className="text-4xl font-semibold text-primary">{textContent.subtitle}</h2>
          </div>
          <div className="flex flex-row items-center space-x-2.5 rounded-lg bg-primary/7 p-4">
            <Percent className="h-16 w-16 text-primary" />
            {InfoTextComponent ?? <p className="text-xl text-gray-80">{textContent.info}</p>}
          </div>
          <Button onClick={redirectToPricingTable} text={textContent.cta} />
        </div>
        {isStartPage ? (
          <Image
            src="/images/affiliates/Startpage_discount_collab.webp"
            alt="Affiliates Hero Section"
            draggable={false}
            width={500}
            height={500}
          />
        ) : (
          <Image
            src={getImage('/images/partnerships/brave/internxt_brave_secure_cloud_storage.webp')}
            alt="Affiliates Hero Section"
            draggable={false}
            width={500}
            height={500}
          />
        )}
      </HeroSectionSafeArea>
    </section>
  );
};

export default HeroSection;
