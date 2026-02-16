import { getImage } from '@/lib/getImage';

const WhatIsOSS = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center justify-center px-5 py-20 text-center">
        <div className="flex w-full max-w-[850px] flex-col items-center space-y-16">
          <div className="flex flex-col space-y-6">
            <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
            <p className="text-xl text-gray-80">{textContent.description}</p>
          </div>

          <img
            src={getImage('/images/open-source/Internxt-open-source.webp')}
            width={796}
            alt="Internxt Open Source Software"
          />
          <div className="flex flex-col space-y-6">
            {textContent.section.map((description, index) => (
              <p className="text-xl text-gray-80" key={index}>
                {description}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsOSS;
