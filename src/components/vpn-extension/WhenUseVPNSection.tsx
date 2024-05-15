import { CheckSquare } from '@phosphor-icons/react';
import Button from '../shared/Button';
import Image from 'next/image';

export const WhenUseVPNSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden py-20 px-5">
      <div className="flex flex-col items-center space-y-12 text-center">
        <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
        <div className="flex max-w-[800px] flex-col space-y-6 text-center">
          <p className="text-2xl font-medium text-gray-80">{textContent.subtitle}</p>
          <p className="text-lg font-medium text-gray-80">{textContent.description}</p>
        </div>
        <Button
          text={textContent.cta}
          onClick={() => {
            // NO OP RN
          }}
        />
        <div className="relative grid w-full max-w-6xl grid-cols-1 flex-row justify-between gap-5 bg-contain bg-center bg-no-repeat md:grid-cols-2 lg:bg-[url(/images/vpn-extension/map.svg)]">
          <div className="inset-0 ml-5 hidden items-center justify-center lg:absolute lg:flex">
            <Image
              src="/images/vpn-extension/superhero2.svg"
              alt="Super Hero"
              draggable={false}
              width={444}
              height={420}
              className="mx-auto"
            />
          </div>
          <div className="absolute"></div>
          {textContent.cards.map((card) => (
            <div className="flex justify-center lg:justify-start lg:even:justify-end" key={card}>
              <div className="flex w-full max-w-[300px] flex-col space-y-2 rounded-[10px] border border-gray-10 bg-white p-10 text-start">
                <CheckSquare size={32} className="text-green" />
                <p className="max-w-[260px] text-2xl font-medium text-gray-80">{card}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
