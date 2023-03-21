import React from 'react';
import RevealY from '../components/RevealY';
import RevealX from '../components/RevealX';
import { Gauge } from 'phosphor-react';

const SecondFeaturesSection = ({ textContent }) => {
  const [cardIndex, setCardIndex] = React.useState(0);

  return (
    <section className="overflow-hidden bg-gray-1 py-24">
      <div className="hidden flex-row items-center justify-center lg:flex">
        <RevealX direction="right" className="flex max-w-[250px] flex-col">
          {textContent.info.map((info, index) => (
            <>
              <div
                key={info.title}
                className={`flex ${
                  cardIndex === index ? 'border-gray-80' : 'border-gray-10'
                } cursor-pointer flex-row items-center border-r-4  pr-8`}
                onClick={() => {
                  setCardIndex(index);
                }}
              >
                <p className="text-2xl font-medium">{info.title}</p>
              </div>
              <div className="h-8 border-r-4 border-gray-10 pr-8 last:hidden" />
            </>
          ))}
        </RevealX>
        <RevealX direction="left" key={textContent.info[cardIndex].title} className="flex flex-col pb-6">
          <div className="flex w-auto justify-center px-6">
            <div className="flex flex-col rounded-3xl p-8">
              <div className="flex h-80 w-auto max-w-[384px] flex-col space-y-6">
                <Gauge className="text-primary" size={64} />
                <p className="text-4xl font-semibold">{textContent.info[cardIndex].title}</p>
                <p className="text-lg font-normal">{textContent.info[cardIndex].description}</p>
              </div>
            </div>
          </div>
        </RevealX>
      </div>
      <div className="flex flex-col items-center justify-center space-y-10 px-5 lg:hidden">
        {textContent.info.map((info) => (
          <div key={info.title} className={`revealY flex flex-col items-start space-y-6 rounded-2xl bg-white p-4`}>
            <Gauge className="text-primary" size={64} />
            <p className="text-4xl font-semibold">{info.title}</p>
            <p className="text-lg font-normal">{info.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecondFeaturesSection;
