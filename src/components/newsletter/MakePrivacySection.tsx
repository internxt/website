const MakePrivacySection = ({ textContent }) => {
  return (
    <section className="overflow-hidden ">
      <div className="flex w-full flex-col items-center justify-center space-y-12 bg-gray-1 py-20 px-5">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
          <p className="max-w-[774px] text-xl text-gray-80">{textContent.description}</p>
          <button className="flex w-full justify-center rounded-lg bg-primary px-5 py-3 font-medium text-white lg:w-max">
            {textContent.cta}
          </button>
        </div>
        <picture className="max-w-[774px]">
          <source srcSet="/images/home/Internxt-secure-cloud-storage.webp" type="image/webp" />
          <img
            src="/images/home/Internxt-secure-cloud-storage.webp"
            alt="Internxt secure cloud storage"
            draggable={false}
          />
        </picture>
      </div>
    </section>
  );
};

export default MakePrivacySection;
