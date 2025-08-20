const WhenToUseSection = ({ textContent }) => {
  const features = textContent?.features ?? [];
  const midIndex = Math.ceil(features.length / 2);
  const firstColumn = features.slice(0, midIndex);
  const secondColumn = features.slice(midIndex);
  return (
    <section
      style={{ background: 'linear-gradient(180deg, #F9F9FC 0%, #FFFFFF 100%)' }}
      className=" flex h-[560px] w-full flex-col items-center justify-around gap-4 pt-10 lg:h-[562px] lg:gap-0 lg:px-10 lg:py-9 lg:pt-0 xl:px-32 3xl:px-80"
    >
      <div className="flex w-[300px] flex-col items-center gap-4 lg:w-[1012px] lg:gap-12">
        <p className="text-start text-30 font-bold text-gray-100 lg:text-center lg:text-5xl">{textContent.title}</p>
        <p className="text-start text-base font-normal leading-tight text-gray-55 lg:w-[812px] lg:text-center lg:text-lg">
          {textContent.description}
        </p>
      </div>
      <div className="flex h-min w-[300px] flex-col items-center justify-center gap-4 whitespace-nowrap  text-start text-base font-semibold text-gray-95 lg:h-[228px] lg:w-[1012px] lg:flex-row lg:gap-8 lg:text-left lg:text-2xl">
        <div className="flex w-[300px] flex-col gap-4 lg:w-auto lg:gap-8">
          {firstColumn.map((feature) => (
            <p key={feature}>{feature}</p>
          ))}
        </div>

        <div className="flex w-[300px] flex-col gap-4 lg:w-auto lg:gap-8">
          {secondColumn.map((feature) => (
            <p key={feature}>{feature}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhenToUseSection;
