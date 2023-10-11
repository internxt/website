import Header from '../shared/Header';

const HeroSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center space-y-6 py-20 px-5 text-center lg:pt-32 lg:pb-20">
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
