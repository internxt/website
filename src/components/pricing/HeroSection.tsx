import Image from 'next/legacy/image';
import { Alarm, Coin, CreditCard, Detective } from '@phosphor-icons/react';
import Countdown from '@/components/components/Countdown';

const HeroSection = ({ textContent }) => {
  const feeds = [
    {
      icon: Coin,
      title: textContent.feeds.firstFeed,
    },
    {
      icon: CreditCard,
      title: textContent.feeds.secondFeed,
    },
    {
      icon: Detective,
      title: textContent.feeds.thirdFeed,
    },
  ];

  return (
    <section className="overflow-hidden pt-12">
      <div className="xl:pl-58 flex w-full flex-col items-center justify-center space-y-10 px-6 py-24 lg:flex-row lg:space-x-28 lg:space-y-0">
        <div className="flex flex-col items-center justify-center space-y-10 lg:items-start lg:justify-start">
          <div className="flex max-w-[470px] flex-col items-center justify-center space-y-10 lg:items-start">
            <div className="flex flex-row rounded-lg bg-gray-5 px-5 py-2">
              <Alarm size={32} className="mr-4 text-primary" />
              <Countdown textColor={'black'} dt={'2023-10-31T23:59:59'} />
            </div>
            <div className="flex flex-col space-y-16">
              <div className="flex flex-col text-center lg:text-start">
                <p className="text-6xl font-bold">
                  {textContent.title.line1} <br /> <span className="text-primary">{textContent.title.line2}</span>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center lg:items-start">
                <div className="flex flex-col items-start space-y-4">
                  {feeds.map((feed) => (
                    <div className="flex flex-row items-center space-x-4" key={feed.title}>
                      <feed.icon size={32} className="text-primary" />
                      <p className="text-xl font-medium text-gray-80">{feed.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center space-x-8 space-y-5 lg:flex-row lg:space-y-0">
            <button
              className="flex h-max w-max items-center justify-center rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-dark"
              onClick={() => {
                window.scrollTo({ top: document.getElementById('priceTable')?.offsetTop, behavior: 'smooth' });
              }}
            >
              {textContent.cta.title}
            </button>
            <p className="flex max-w-[274px] text-sm text-gray-40">{textContent.cta.description}</p>
          </div>
        </div>
        <div className="flex flex-col rounded-3xl bg-white">
          <Image
            alt="woman using file storage"
            src="/images/pricing/cyber-awareness-offer-per-month.svg"
            className=" rounded-3xl"
            width={496}
            height={520}
            layout="intrinsic"
            loading="eager"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
