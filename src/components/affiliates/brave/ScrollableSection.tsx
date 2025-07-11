import { Devices, Eye, FolderLock, ShieldCheck } from '@phosphor-icons/react';
import { Fragment, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import RevealX from '@/components/components/RevealX';

const ScrollableSection = ({ textContent }) => {
  const [cardIndex, setCardIndex] = useState(0);

  const cardElements = [
    {
      icon: ShieldCheck,
      title: textContent.elements[0].title,
      description: textContent.elements[0].description,
    },
    {
      icon: FolderLock,
      title: textContent.elements[1].title,
      description: textContent.elements[1].description,
    },
    {
      icon: Devices,
      title: textContent.elements[2].title,
      description: textContent.elements[2].description,
    },
    {
      icon: Eye,
      title: textContent.elements[3].title,
      description: textContent.elements[3].description,
    },
  ];

  const DescriptionIcon = cardElements[cardIndex].icon;

  return (
    <section className="overflow-hidden">
      <section className="flex flex-col items-center justify-center space-y-12 overflow-hidden bg-white px-5 lg:py-10">
        <div className="flex w-full max-w-[1500px] flex-col items-center justify-center space-y-0 text-center lg:pb-10">
          <p className="text-4xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</p>
          <div className="flex flex-col space-y-6">
            <p className="max-w-[980px] pt-10 text-lg text-gray-80">{textContent.description}</p>
          </div>
        </div>
      </section>
      <div className="hidden flex-row items-start justify-center pb-20 lg:flex">
        <div className="flex max-w-[378px] flex-col">
          {textContent.elements.map((info, index) => (
            <Fragment key={info.title}>
              <button
                className={`flex ${
                  cardIndex === index ? 'border-primary' : 'border-gray-10'
                } cursor-pointer flex-row items-center border-r-4 p-2 pr-8`}
                onClick={() => {
                  setCardIndex(index);
                }}
              >
                <p className="text-left text-2xl font-medium text-gray-100 hover:text-primary">{info.title}</p>
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
                <p className="text-4xl font-semibold text-gray-100">{cardElements[cardIndex].title}</p>
                <ReactMarkdown className="markdown text-xl font-normal text-gray-80">
                  {cardElements[cardIndex].description}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </RevealX>
      </div>
      <div className="flex flex-col items-center justify-center space-y-10 px-5 py-10 lg:hidden">
        {cardElements.map((info) => (
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

export default ScrollableSection;
