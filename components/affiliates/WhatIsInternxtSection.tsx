import RevealY from '../components/RevealY';

const WhatIsInternxtSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden py-20">
      <div className="content flex flex-col items-center justify-center space-y-20 px-5">
        <div className="flex max-w-[750px] flex-col space-y-6 text-center">
          <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
          <p className="text-2xl font-medium text-gray-100">{textContent.subtitle}</p>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        <RevealY className="flex h-full w-full flex-col pt-6">
          <picture>
            <source srcSet="/images/home/Internxt-secure-cloud-storage.webp" type="image/webp" />
            <img
              src="/images/home/Internxt-secure-cloud-storage.webp"
              alt="Internxt secure cloud storage"
              draggable={false}
            />
          </picture>
        </RevealY>
      </div>
    </section>
  );
};

export default WhatIsInternxtSection;
