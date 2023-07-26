const HeroSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden py-20">
      <div className="flex flex-col items-center justify-center space-y-6 pt-16 text-center">
        <div className="flex w-full max-w-[796px] flex-col px-5">
          <h1 className="text-6xl font-semibold text-gray-100">
            {textContent.title.normalText} <span className="text-primary">{textContent.title.blueText}</span>
          </h1>
        </div>
        <div className="flex max-w-[850px] flex-col">
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
