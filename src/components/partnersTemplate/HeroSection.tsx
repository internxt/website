import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import { CellTower, CloudArrowUp, Envelope, ShieldPlus, Sparkle, VideoConference, X } from '@phosphor-icons/react';
import Link from 'next/link';
import { currencyService } from '@/services/currency.service';
import { useEffect, useState } from 'react';
import { HighlightText } from '../components/HighlightText';

interface HeroSectionForPartnerProps {
  textContent: any;
  percentOff: string;
  cloudWards?: boolean;
}

export default function HeroSection({
  textContent,
  percentOff,
  cloudWards = false,
}: Readonly<HeroSectionForPartnerProps>): JSX.Element {
  const [currency, setCurrency] = useState<string>('€');

  useEffect(() => {
    currencyService
      .filterCurrencyByCountry()
      .then((currency) => {
        setCurrency(currency.currency);
      })
      .catch(() => {
        //
      });
  }, []);

  const products = [
    {
      icon: CloudArrowUp,
      text: textContent.products.drive,
    },
    {
      icon: ShieldPlus,
      text: textContent.products.antivirus,
    },
    {
      icon: Sparkle,
      text: textContent.products.cleaner,
    },
    {
      icon: CellTower,
      text: textContent.products.vpn,
    },
    {
      icon: VideoConference,
      text: textContent.products.meet,
    },
    {
      icon: Envelope,
      text: textContent.products.mail,
    },
  ];

  const parsePercentText = (text: string) => {
    return typeof text === 'string' ? text.replace(/{{discount}}/g, percentOff) : text;
  };

  return (
    <section
      className={`mt-20 flex h-min w-full flex-row items-center justify-center overflow-hidden py-10 lg:mt-16 lg:h-[657px] lg:justify-between lg:pl-10 lg:pr-4 xl:pl-32 xl:pr-16 3xl:pl-80 3xl:pr-60`}
      style={{ background: 'linear-gradient(180deg, #E5EFFF 0%, #FFFFFF 100%)' }}
    >
      <div className="flex h-min w-[345px] flex-col justify-center gap-6 lg:h-[392px] lg:w-[566px] lg:justify-between">
        {cloudWards && (
          <div className="flex flex-row items-center justify-center space-x-3.5 lg:justify-start ">
            <Image
              src={getImage('/images/partnerships/cloudwards/logo.svg')}
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
        )}

        <div className="flex w-full flex-wrap items-start justify-start gap-2 lg:flex-nowrap lg:justify-between">
          {products.map((feature, index) => (
            <div
              key={index}
              className="flex h-6 w-min flex-row items-center justify-center gap-1 rounded bg-white/50 px-1 py-0.5 shadow-sm lg:h-8 lg:px-2 lg:py-1"
            >
              <feature.icon className="h-5 w-5 text-primary lg:h-6 lg:w-6" />
              <p className="whitespace-nowrap text-sm font-medium leading-tight text-gray-80">{feature.text}</p>
            </div>
          ))}
        </div>
        <p className="text-30 font-semibold leading-tight text-gray-100 lg:text-5xl">
          <HighlightText text={textContent.title} />
        </p>
        <div className="flex w-full flex-col justify-center gap-4 lg:gap-8">
          <div className="flex flex-col justify-center gap-4">
            {percentOff !== '0' && (
              <p className="w-min whitespace-nowrap rounded-2 bg-neutral-37 px-1 py-0.5 text-base font-semibold leading-tight text-primary lg:text-xl">
                {parsePercentText(textContent.subtitle)}
              </p>
            )}
            <p className="font-regular text-lg leading-tight text-gray-100 lg:text-xl">
              {parsePercentText(textContent.description)}
            </p>
          </div>
        </div>

        <div className="flex h-min w-full flex-col justify-center gap-4">
          <div className="flex w-full flex-row items-start gap-4">
            <Link
              href={'#billingButtons'}
              className="no z-10 flex h-[48px] w-1/2 items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary  py-4 text-base font-medium text-white hover:bg-primary-dark lg:w-[177px]"
            >
              {textContent.claimDeal}
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden h-[500px] w-[562px] justify-center lg:flex">
        <Image
          src={getImage('/images/affiliates/internxt-private-cloud.webp')}
          alt="Internxt Partners HeroSection Image"
          height={529}
          width={562}
          quality={100}
        />
      </div>
    </section>
  );
}
