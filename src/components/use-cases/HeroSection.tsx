import Header from '@/components/shared/Header';

const HeroSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden pt-14">
      <div className="flex flex-col items-center space-y-6 px-5 py-16 pb-20 text-center lg:py-20">
        <Header className="text-gray-100">
          {textContent.title.normalText} <br />
          <span className="text-primary">{textContent.title.blueText}</span>
        </Header>
        <p className="max-w-[550px] text-xl text-gray-80">{textContent.description}</p>
      </div>
    </section>
  );
};

export default HeroSection;
