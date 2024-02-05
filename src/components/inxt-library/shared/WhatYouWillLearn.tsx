import Card from '../components/Card';

const WhatYouWillLearn = ({ textContent, stepsImage, stepsAltImage }) => {
  return (
    <section className="overflow-hidden py-20 px-5">
      <div className="flex flex-col items-center space-y-16">
        <div className="flex max-w-[774px] flex-col items-center justify-center space-y-8">
          <p className="text-center text-5xl font-semibold text-gray-100">{textContent.title}</p>
          <div className="flex flex-col space-y-3">
            {textContent.paragraph.map((paragraph) => {
              return <p className="text-lg text-gray-80">{paragraph}</p>;
            })}
          </div>
        </div>
        <Card textContent={textContent.steps} imageUrl={stepsImage} imageAlt={stepsAltImage} />
      </div>
    </section>
  );
};

export default WhatYouWillLearn;
