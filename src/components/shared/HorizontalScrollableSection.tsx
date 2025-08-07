export default function HorizontalScrollableSection({ textContent }) {
  const cardTitles = textContent?.scrollableSection.titles ?? [];
  const cardDescriptions = textContent?.scrollableSection.descriptions;

  return (
    <section className="flex h-[653px] w-full items-center justify-center bg-white lg:px-10 lg:py-9 xl:px-32 3xl:px-80">
      <div className="flex h-[509px] w-[1120px] flex-col items-center justify-between">
        <p className="w-[832px] text-5xl font-bold text-gray-100">{textContent.title}</p>
        <p className="font-nomral w-[832px] text-lg text-gray-55">{textContent.description}</p>
        <div className="flex flex-row gap-8 ">
          {cardTitles.map((title, index) => (
            <div key={index} className="w-[400px] overflow-hidden rounded-16 bg-white transition-all duration-300">
              <div className="flex flex-row items-center justify-center gap-4">
                <p className="text-xl font-medium text-gray-100">{title}</p>
              </div>
              <div className="bg-white p-4">
                <p className="text-lg font-normal text-gray-55">{cardDescriptions[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
