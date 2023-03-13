import React from 'react';
import RevealY from '../components/RevealY';

const SecondFeaturesSection = ({ textContent }) => {
  const [index, setIndex] = React.useState(0);

  return (
    <section className="overflow-hidden">
      <RevealY className="flex flex-row items-center justify-center bg-gray-1 py-24">
        <div className="flex max-w-[250px] flex-col space-y-8 overflow-y-scroll">
          {textContent.info.map((info) => (
            <div
              key={info.title}
              className="flex flex-row items-center"
              onClick={() => {
                setIndex(index);
              }}
            >
              <p className="text-2xl font-medium">{info.title}</p>
            </div>
          ))}
        </div>
        <div className="flex snap-y snap-mandatory flex-col overflow-scroll pb-6">
          <div className="flex h-72 w-96 flex-col items-start justify-start">
            {textContent.info.map((card) => (
              <div key={index} className="flex w-auto snap-start justify-center px-6">
                <div className="flex snap-start flex-col rounded-3xl p-8">
                  <div className="flex w-auto max-w-[300px] flex-col">
                    <p className="pt-9 text-lg font-normal">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealY>
    </section>
  );
};

export default SecondFeaturesSection;
