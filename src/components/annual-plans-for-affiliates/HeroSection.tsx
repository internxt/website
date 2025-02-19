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
  isCloudWards,
  isBrave,
}) => {
  function redirectToPricingTable() {
    window.location.href = redirect ?? '#payment';
  }

  return (
    <section className="overflow-hidden pt-12">
      <HeroSectionSafeArea>
        <div className="flex max-w-[550px] flex-col items-center justify-center space-y-8 text-center lg:items-start lg:text-left">
          <div className="flex flex-col space-y-4">
            {isStartPage ? <StartPageLabel /> : null}
            {isCloudWards ? <CloudWardsLabel /> : null}
            <h1 className="text-4xl font-bold text-gray-100 xl:text-6xl">{textContent.title}</h1>
            <h2 className="text-2xl font-semibold text-primary xl:text-4xl">{textContent.subtitle}</h2>
          </div>
          <div className="flex flex-row items-start  space-x-2.5 rounded-lg bg-primary/7 p-4 xl:items-center">
            <Percent className="h-8 w-8 text-primary xl:h-12 xl:w-12" />
            {InfoTextComponent ?? <p className="text-md text-gray-80">{textContent.info}</p>}
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
        ) : null}
        {isBrave ? (
          <Image
            src={getImage('/images/partnerships/brave/internxt_brave_secure_cloud_storage.webp')}
            alt="Affiliates Hero Section"
            draggable={false}
            width={500}
            height={500}
          />
        ) : null}
        {isCloudWards ? (
          <Image
            src={getImage('/images/partnerships/cloudwards/internxt_lifetime_cloudwards.webp')}
            alt="Affiliates Hero Section"
            draggable={false}
            width={500}
            height={500}
          />
        ) : null}
      </HeroSectionSafeArea>
    </section>
  );
};

export default HeroSection;
