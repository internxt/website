import { ClockCounterClockwise, CloudCheck, Devices, Eye, Key, ShieldCheck } from '@phosphor-icons/react';
import { Fragment, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import RevealX from '@/components/components/RevealX';

const FeaturesSection = ({ textContent }) => {
  const [cardIndex, setCardIndex] = useState(0);

  const cardInfo = [
    {
      icon: ClockCounterClockwise,
      title: textContent.info[0].title,
      description: textContent.info[0].description,
    },
    {
      icon: ShieldCheck,
      title: textContent.info[1].title,
      description: textContent.info[1].description,
    },
    {
      icon: Key,
      title: textContent.info[2].title,
      description: textContent.info[2].description,
    },
    {
      icon: CloudCheck,
      title: textContent.info[3].title,
      description: textContent.info[3].description,
    },
    {
      icon: Eye,
      title: textContent.info[4].title,
      description: textContent.info[4].description,
    },
    {
      icon: Devices,
      title: textContent.info[5].title,
      description: textContent.info[5].description,
    },
  ];

  const DescriptionIcon = cardInfo[cardIndex].icon;

  return (
    <section className="overflow-hidden">
      <section className="flex flex-col items-center justify-center space-y-12 overflow-hidden px-5 py-20">
        <div className="flex w-full max-w-[858px] flex-col items-center justify-center space-y-6 text-center">
          <p className="text-4xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</p>
          <div className="flex flex-col space-y-6">
            <p className="text-lg text-gray-80">{textContent.description}</p>
          </div>
        </div>
      </section>
      <div className="hidden flex-row items-start justify-center pb-20 lg:flex">
        <div className="flex max-w-[378px] flex-col ">
          {textContent.info.map((info, index) => (
            <Fragment key={info.title}>
              <button
                className={`flex ${
                  cardIndex === index ? 'border-primary' : 'border-gray-10'
                } cursor-pointer flex-row items-center border-r-4 p-2 pr-8`}
                onClick={() => {
                  setCardIndex(index);
                }}
              >
                <p className="text-2xl text-left font-medium text-gray-100 hover:text-primary">{info.title}</p>
              </button>
              <div className="h-8 border-r-4 border-gray-10 pr-8 last:hidden" />
            </Fragment>
          ))}
        </div>
        <RevealX direction="left" className="flex flex-col justify-start">
          <div className="flex w-auto justify-center px-6">
            <div className="flex flex-col rounded-3xl pl-6">
              <div className="flex w-full max-w-[384px] flex-col space-y-6">
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
    </section>
  );
};

export default FeaturesSection;
