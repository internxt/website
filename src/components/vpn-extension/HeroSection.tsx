import Image from 'next/image';
import Button from '../shared/Button';
import Header from '../shared/Header';
import HeroSectionSafeArea from '../shared/HeroSectionSafeArea';

export const HeroSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden pt-8">
      <HeroSectionSafeArea>
        <div className="flex max-w-[447px] flex-col items-center space-y-8 md:items-start">
          <div className="flex flex-col items-center space-y-4 text-center md:items-start md:text-start">
            <div className="flex w-max rounded-lg bg-gray-5 py-2 px-4">
              <p className="text-xl font-medium text-gray-80">{textContent.label}</p>
            </div>
            <Header>
              {textContent.title.line1}
              <br />
              <span className="text-4xl">{textContent.title.line2}</span>
            </Header>
          </div>
          <h3 className="text-center text-xl text-gray-80 md:text-left">{textContent.description}</h3>
          <Button
            text={textContent.cta}
            onClick={() => {
              // NO OP RN
            }}
          />
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
          <div className="hidden md:flex">
            <Image
              src={'/images/vpn-extension/vpn-hero.svg'}
              alt="VPN Hero"
              className={`top-10 left-0 -translate-x-72 rounded-lg  md:absolute`}
              width={328}
              height={385}
              draggable={false}
            />
          </div>
        </div>
      </HeroSectionSafeArea>
    </section>
  );
};
