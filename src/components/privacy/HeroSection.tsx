const HeroSection = ({ textContent }) => {
  return (
    <>
      <section className="relative flex w-full flex-col overflow-hidden pt-14">
        <div className="flex flex-col items-center py-16 pb-20 lg:py-20">
          <div className="flex flex-col items-center justify-center space-y-10 px-6 text-center">
            <h1 className="text-3xl font-semibold text-gray-100 lg:text-5xl">
              {textContent.title.normalText}
              <span className="text-primary">{textContent.title.blueText}</span>
            </h1>

            <h2 className="mb-8 w-full max-w-[850px] text-xl font-normal text-gray-80 sm:mb-10">
              {textContent.description}
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
