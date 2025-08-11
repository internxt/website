const WhenToUseSection = ({ textContent }) => {
  const features = textContent?.features ?? [];
  const midIndex = Math.ceil(features.length / 2);
  const firstColumn = features.slice(0, midIndex);
  const secondColumn = features.slice(midIndex);
  return (
    <section
      className="flex h-[700px] w-full flex-col items-center justify-evenly bg-neutral-15 lg:h-[562px] lg:px-10 lg:py-9 xl:px-32 3xl:px-80"
      style={{ background: 'linear-gradient(180deg, #F9F9FC 0%, #FFFFFF 100%)' }}
    >
      <div className="flex w-[300px] flex-col gap-8 lg:w-[812px]">
        <p className="text-center text-3xl font-bold text-gray-100 lg:text-5xl">{textContent.title}</p>
        <p className="text- base text-center font-normal text-gray-55 lg:text-lg">{textContent.description}</p>
      </div>
      <div className="flex h-[560px] w-[812px] flex-col items-center justify-center gap-4 text-center text-2xl font-semibold text-gray-95 lg:h-[212px]  lg:flex-row lg:gap-8 lg:text-left">
        <div className="flex w-[323px] flex-col gap-4 ">
          {firstColumn.map((feature, index) => (
            <p key={index}>{feature}</p>
          ))}
        </div>
        <div className="flex w-[323px] flex-col gap-4 ">
          {secondColumn.map((feature, index) => (
            <p key={index}>{feature}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhenToUseSection;
