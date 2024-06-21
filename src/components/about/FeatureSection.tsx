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
      <div className="flex flex-col items-center justify-center space-y-10 py-10 px-5 lg:hidden">
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
      {/* Hiring people Section */}
      <div className="flex flex-col-reverse items-center justify-center bg-gray-1 px-5 pt-16 pb-20 text-center md:flex-row md:space-y-0 md:space-x-24 md:text-start">
        <RevealX direction="right" className="flex flex-col rounded-3xl pt-10 md:pt-0">
          <Image
            src={getImage('/images/about/photos/Internxt-gift.webp')}
            width={496}
            height={520}
            quality={100}
            layout="intrinsic"
            className="rounded-3xl"
            draggable={false}
            alt="Internxt gift"
            loading="eager"
          />
        </RevealX>
        <div className="flex max-w-[390px] flex-col items-center justify-center space-y-6 md:items-start">
          <ShieldStar size={60} className="text-primary" />
          <p className="mb-6 text-4xl font-semibold text-gray-100 md:text-5xl md:leading-tight">
            {textContent.BetterFutureSection.title}
          </p>
          <ReactMarkdown className="text-xl font-normal text-gray-80">
            {textContent.BetterFutureSection.description}
          </ReactMarkdown>
          <div className="flex flex-row items-center space-x-1">
            <button
              className="cursor-pointer text-lg font-semibold text-primary hover:text-primary-dark hover:underline"
              onClick={() => {
                window.open('mailTo:hello@internxt.com', '_blank', 'noopener noreferrer');
              }}
            >
              {textContent.BetterFutureSection.cta}
            </button>
            <CaretRight size={10} className="text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
