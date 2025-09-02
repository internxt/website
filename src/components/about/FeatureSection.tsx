import { CaretRight, HandHeart, Lightbulb, RocketLaunch, ShieldStar, UsersThree } from '@phosphor-icons/react';
import Image from 'next/legacy/image';
import { Fragment, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import RevealX from '@/components/components/RevealX';
import { getImage } from '@/lib/getImage';

const FeatureSection = ({ textContent }) => {
  const [cardIndex, setCardIndex] = useState(0);

  const cardInfo = [
    {
      icon: RocketLaunch,
      title: textContent.info[0].title,
      description: textContent.info[0].description,
    },
    {
      icon: Lightbulb,
      title: textContent.info[1].title,
      description: textContent.info[1].description,
    },
    {
      icon: UsersThree,
      title: textContent.info[2].title,
      description: textContent.info[2].description,
    },
    {
      icon: HandHeart,
      title: textContent.info[3].title,
      description: textContent.info[3].description,
    },
  ];

  const DescriptionIcon = cardInfo[cardIndex].icon;

  return (
    <section className="overflow-hidden">
      {/* Info cards Section */}
      <div className="hidden flex-row items-start justify-center py-20 lg:flex">
        <div className="flex max-w-[288px] flex-col">
          {textContent.info.map((info, index) => (
            <Fragment key={info.title}>
              <button
                className={`flex ${
                  cardIndex === index ? 'border-gray-80' : 'border-gray-10'
                } cursor-pointer flex-row items-center border-r-4 p-2 pr-8`}
                onClick={() => {
                  setCardIndex(index);
                }}
              >
                <p className="text-2xl font-medium text-gray-100  hover:text-primary">{info.title}</p>
              </button>
              <div className="h-8 border-r-4 border-gray-10 pr-8 last:hidden" />
            </Fragment>
          ))}
        </div>
        <RevealX direction="left" className="flex flex-col justify-start">
          <div className="flex w-auto justify-center px-6">
            <div className="flex flex-col rounded-3xl pl-6">
              <div className="flex  w-full max-w-[384px] flex-col space-y-6">
                <DescriptionIcon className="text-primary" size={64} />
                <p className="text-4xl font-semibold text-gray-100">{cardInfo[cardIndex].title}</p>
                <ReactMarkdown className="markdown text-xl font-normal text-gray-80">
                  {cardInfo[cardIndex].description}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </RevealX>
      </div>
      {/* Mobile view */}
      <div className="flex flex-col items-center justify-center space-y-10 px-5 py-10 lg:hidden">
        {cardInfo.map((info) => (
          <div
            key={info.title}
            className="flex flex-col items-start justify-start rounded-2xl bg-gray-1 p-8 sm:p-10 md:max-w-[488px]"
          >
            <info.icon className="mb-6 text-4xl text-primary" size={32} />
            <div className="flex w-full max-w-[400px] flex-col">
              <p className="mb-6 text-2xl font-medium text-gray-100">{info.title}</p>
              <ReactMarkdown className="text-base text-cool-gray-80 sm:text-lg">{info.description}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>

      <section className="flex flex-row items-center justify-center gap-8 border bg-white py-20">
        <RevealX direction="right" className="flex">
          <Image
            src={getImage('/images/about/photos/Internxt-gift.webp')}
            width={554}
            height={520}
            quality={100}
            layout="intrinsic"
            className="rounded-2xl"
            draggable={false}
            alt="Internxt gift"
            loading="eager"
          />
        </RevealX>
        <div className="flex w-[554px] flex-col items-center justify-center space-y-6 md:items-start">
          <p className="text-30 font-bold leading-tight text-gray-100 lg:text-4xl">
            {textContent.BetterFutureSection.title}
          </p>
          <p className="text-base font-normal leading-tight text-gray-55">
            {textContent.BetterFutureSection.description}
          </p>
          <div className="flex flex-row items-center justify-center space-x-1 hover:underline">
            <button
              className="cursor-pointer text-base font-medium text-primary hover:text-primary-dark"
              onClick={() => {
                window.open('https://internxt.com/pricing', '_blank', 'noopener noreferrer');
              }}
            >
              {textContent.BetterFutureSection.cta}
            </button>
            <CaretRight size={20} className="text-primary" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default FeatureSection;
