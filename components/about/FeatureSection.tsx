import { HandHeart, Lightbulb, RocketLaunch, UsersThree } from '@phosphor-icons/react';
import { Fragment, useState } from 'react';
import RevealX from '../components/RevealX';

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
    <section className="overflow-hidden py-20">
      <div className="hidden flex-row items-start justify-center lg:flex">
        <RevealX direction="right" className="flex max-w-[250px] flex-col">
          {textContent.info.map((info, index) => (
            <Fragment key={info.title}>
              <div
                className={`flex ${
                  cardIndex === index ? 'border-gray-80' : 'border-gray-10'
                } cursor-pointer flex-row items-center border-r-4 p-2 pr-8`}
                onClick={() => {
                  setCardIndex(index);
                }}
              >
                <p className="text-2xl font-medium text-gray-100  hover:text-primary">{info.title}</p>
              </div>
              <div className="h-8 border-r-4 border-gray-10 pr-8 last:hidden" />
            </Fragment>
          ))}
        </RevealX>
        <div className="flex flex-col justify-start">
          <div className="flex w-auto justify-center px-6">
            <div className="flex flex-col rounded-3xl pl-6">
              <div className="flex  w-full max-w-[384px] flex-col space-y-6">
                <DescriptionIcon className="text-primary" size={64} />
                <p className="text-4xl font-semibold text-gray-100">{cardInfo[cardIndex].title}</p>
                <p className="text-xl font-normal text-gray-80">{cardInfo[cardIndex].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile view */}
      <div className="flex flex-col items-center justify-center space-y-10 px-5 lg:hidden">
        {cardInfo.map((info) => (
          <div
            key={info.title}
            className="flex flex-col items-start justify-start rounded-2xl bg-white p-8 sm:p-10 md:max-w-[488px]"
          >
            <info.icon className="mb-6 text-4xl text-primary" size={32} />
            <div className="flex w-full max-w-[400px] flex-col">
              <p className="mb-6 text-2xl font-medium text-gray-100">{info.title}</p>
              <p className="text-base text-cool-gray-80 sm:text-lg">{info.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
