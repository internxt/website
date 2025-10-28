import Image from 'next/image';

const FeaturesSliderImg = ({ textContent, cardInfo }) => {
  return (
    <section className={`overflow-hidden bg-gray-1`}>
      <section className="flex flex-col items-center justify-center space-y-12 overflow-hidden px-5 py-20">
        <div className="flex w-full max-w-[858px] flex-col items-center justify-center space-y-6 text-center">
          <p className="text-4xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</p>
          <div className="flex flex-col space-y-6">
            <p className="text-lg text-gray-80">{textContent.description}</p>
          </div>
        </div>
      </section>

      {/* Mobile view */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-5 pb-20 md:grid-cols-2">
        {cardInfo.map((info) => (
          <div key={info.title} className="flex h-full flex-col items-start justify-start rounded-2xl bg-white">
            {info.image && (
              <div className="w-full overflow-hidden rounded-t-lg pb-10">
                <Image
                  src={info.image}
                  alt={info.title}
                  className="h-auto w-full object-cover"
                  width={488}
                  height={488}
                />
              </div>
            )}
            <info.icon className="ml-10 text-4xl text-primary" size={32} />
            <div className="flex w-full flex-col p-8 sm:p-10">
              <p className="mb-6 text-2xl font-medium text-gray-100">{info.title}</p>
              {Array.isArray(info.description) ? (
                info.description.map((line, index) => (
                  <p key={index} className="mb-4 text-base text-cool-gray-80 sm:text-lg">
                    {line}
                  </p>
                ))
              ) : (
                <p className="text-base text-cool-gray-80 sm:text-lg">{info.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSliderImg;
