const WhenToUseSection = ({ textContent }) => {
  const features = textContent?.features ?? [];
  const midIndex = Math.ceil(features.length / 2);
  const firstColumn = features.slice(0, midIndex);
  const secondColumn = features.slice(midIndex);
  return (
    <section
      className="flex h-[562px] w-full flex-col items-center justify-evenly bg-neutral-15 lg:px-10 lg:py-9 xl:px-32 3xl:px-80"
      style={{ background: 'linear-gradient(180deg, #F9F9FC 0%, #FFFFFF 100%)' }}
    >
      <div className="flex w-[812px] flex-col gap-8">
        <p className="text-center text-5xl font-bold text-gray-100">{textContent.title}</p>
        <p className="text-center text-lg font-normal text-gray-55">{textContent.description}</p>
      </div>
      <div className="flex h-[212px] w-[812px] flex-row items-center justify-center gap-8  text-2xl font-semibold text-gray-95">
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
