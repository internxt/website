import { getImage } from '@/lib/getImage';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import router from 'next/router';
import { currencyService } from '@/services/currency.service';
import { NavigationBarText } from '@/assets/types/layout/types';

export interface MinimalNavbarProps {
  lang: string;
  isOffer?: boolean;
  textContent?: NavigationBarText;
}

export const MinimalNavbar = ({ isOffer, textContent }: MinimalNavbarProps) => {
  const [scrolled, setScrolled] = useState<boolean>(true);
  const [currencySymbol, setCurrencySymbol] = useState<string>('€');

  const handleScroll = () => setScrolled(window.pageYOffset > 0);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    currencyService.filterCurrencyByCountry().then(({ currency }) => {
      setCurrencySymbol(currency);
    });
  }, []);

  const priceLabel = textContent?.MinimalNavbar.price.replace('{currency}', currencySymbol);

  return (
    <div
      id="navbar"
      className={`fixed flex h-20 w-full items-center justify-center bg-white backdrop-blur-lg backdrop-saturate-150 backdrop-filter transition-all duration-100 lg:h-16 ${
        scrolled ? 'border-opacity-5 bg-opacity-90' : 'border-opacity-0'
      } z-50 border-b border-black`}
    >
      <div className="relative flex w-full items-center justify-center">
        <Image
          width={96}
          height={10.5}
          loading="lazy"
          className="h-[10.5px] w-24 select-none lg:h-3 lg:w-[110px]"
          src={getImage(`/logos/internxt/cool-gray-90.svg`)}
          alt="Internxt logo"
        />
        {isOffer && (
          <div className="absolute right-0 flex flex-row items-center gap-4 px-5 lg:gap-8 lg:px-10 xl:px-32 3xl:px-80">
            <p className="text-gray-800 text-sm font-medium">{priceLabel}</p>
            <button
              onClick={() => router.push('#priceCard')}
              id="choose-storage-button"
              className="flex justify-center rounded-lg border border-transparent bg-primary px-3 py-1 text-sm font-medium text-white transition-all duration-75 hover:bg-primary-dark focus:outline-none active:bg-primary-dark sm:inline-flex"
            >
              <p className="whitespace-nowrap">{textContent?.MinimalNavbar.cta}</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
