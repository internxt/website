import RenderDescription from '../shared/RenderDescription';

const AchieveSecurityAndPrivacySection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center space-y-20 py-20 px-5">
        {/* First section */}
        <div className="flex max-w-[774px] flex-col items-center space-y-6 text-center">
          <h2 className="max-w-[700px] text-5xl font-semibold leading-tight text-gray-100">{textContent.title}</h2>
          <p className="text-2xl font-semibold text-gray-80">{textContent.subtitle}</p>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        {/* Image */}
        <div className="flex w-full flex-col items-center justify-center pt-6">
          <picture>
            <source srcSet="/images/home/Internxt-secure-cloud-storage.webp" type="image/webp" />
            <img
              src="/images/home/Internxt-secure-cloud-storage.webp"
              alt="Internxt secure cloud storage"
              width={757}
              draggable={false}
            />
          </picture>
        </div>
        {/* Second Section */}
        <div className="flex max-w-[774px] flex-col items-center space-y-6 text-center">
          <h2 className="max-w-[730px] text-5xl font-semibold leading-tight">
            {textContent.claimOffer.title.normalText1}
            <span className="text-primary">{textContent.claimOffer.title.blueText}</span>
            {textContent.claimOffer.title.normalText2}
          </h2>
          <p className="text-2xl font-semibold text-gray-80">{textContent.claimOffer.description}</p>
          <RenderDescription fontSize="text-xl" description={textContent.claimOffer.paragraph} />
          {/* CTA */}
          <div className="flex flex-col pt-6">
            <button
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById('discountCard')?.offsetTop,
                  behavior: 'smooth',
                });
              }}
              className="flex w-max rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white hover:bg-primary-dark"
            >
              {textContent.claimOffer.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchieveSecurityAndPrivacySection;
