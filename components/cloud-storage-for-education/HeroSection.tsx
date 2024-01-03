import Image from 'next/image';
import Header from '../shared/Header';

const HeroSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden px-5 pt-14">
      <div className="lg:mx-10 xl:mx-32">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center space-y-6 py-20 lg:flex-row lg:justify-between lg:space-y-0">
          <div className="flex max-w-[530px] flex-col space-y-8">
            {/* Label */}
            <div className="flex w-max rounded-lg bg-gray-5 px-4 py-2">
              <p className="text-xl font-medium text-black">
                {textContent.inxtLabel}
                <span className="text-primary"> x </span>
                {textContent.educationLabel}
              </p>
            </div>
            {/* Title */}
            <Header maxWidth="max-w-[533px]">
              {textContent.title.line1} <span className="text-primary">{textContent.title.line2}</span>
            </Header>
            {/* Description */}
            <div className="text-xl font-normal text-gray-80">
              <span className="font-semibold">{textContent.description.boldText}</span>
              {textContent.description.text}
            </div>
            {/* CTA */}
            <button
              onClick={() => {
                window.scrollTo({
                  top: document.getElementById('discountCard').offsetTop,
                  behavior: 'smooth',
                });
              }}
              className="flex w-max rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white hover:bg-primary-dark"
            >
              {textContent.cta}
            </button>
          </div>
          <div className="flex">
            <Image src="/images/cloud-storage-for-education/file_sharing_for_education.webp" width={496} height={520} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
