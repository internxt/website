import Image from "next/legacy/image";
import Header from '../../shared/Header';

const HeroSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden pt-16">
      <div className="flex flex-col items-center justify-center space-y-16 px-5 py-20">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="flex flex-col rounded-lg bg-gray-5 py-2 px-4">
            <p className="text-xl font-medium text-gray-80">{textContent.label}</p>
          </div>
          <Header className="text-center">
            {textContent.title.normalText}
            <span className="text-primary">{textContent.title.blueText}</span>
          </Header>
          <p className="text-xl text-gray-80">{textContent.subtitle}</p>
        </div>
        <div className="flex">
          <Image
            src="/images/inxt-library/Internxt_ebooks.webp"
            quality={100}
            loading="eager"
            width={660}
            height={488}
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
