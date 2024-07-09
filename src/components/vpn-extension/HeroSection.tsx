import Image from 'next/image';
import Header from '../shared/Header';
import HeroSectionSafeArea from '../shared/HeroSectionSafeArea';
import { RedirectButton } from '../shared/RedirectButton';
import { VPN_CHROME_WEB_STORE } from '@/constants';

interface HeroSectionProps {
  textContent: Record<string, any>;
}

export const HeroSection = ({ textContent }: HeroSectionProps): JSX.Element => {
  return (
    <section className="overflow-hidden pt-8">
      <HeroSectionSafeArea>
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:justify-between">
          <div className="flex w-full flex-col items-center space-y-8 lg:max-w-[524px] lg:items-start">
            <div className="flex flex-col items-center space-y-4 text-center lg:items-start lg:text-start">
              <div className="flex w-max rounded-lg bg-gray-5 py-2 px-4">
                <p className="text-xl font-medium text-gray-80">{textContent.label}</p>
              </div>
              <Header>
                {textContent.title.line1}
                <span> {textContent.title.line2}</span>
              </Header>
            </div>
            <h3 className="text-center text-xl text-gray-80 lg:text-left">{textContent.description}</h3>

            <RedirectButton
              className="flex w-max rounded-lg bg-primary py-3 px-5 text-xl font-medium text-white hover:bg-primary-dark"
              url={VPN_CHROME_WEB_STORE}
            >
              {textContent.cta}
            </RedirectButton>
          </div>
          <div className="relative flex h-full flex-col items-center justify-center bg-transparent">
            <Image
              src={'/images/vpn-extension/vpn-widget.svg'}
              alt="VPN Widget"
              className="rounded-lg shadow-subtle"
              width={364}
              draggable={false}
              height={444}
            />
            <div className="hidden xl:flex">
              <Image
                src={'/images/vpn-extension/vpn-hero.svg'}
                alt="VPN Hero"
                className={`top-10 left-0 -translate-x-72 rounded-lg lg:absolute`}
                width={328}
                height={385}
                draggable={false}
              />
            </div>
          </div>
        </div>
      </HeroSectionSafeArea>
    </section>
  );
};
