import Header from '../shared/Header';

const ConversionsSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1 pt-32 pb-20">
      <div className="flex flex-col items-center space-y-12 py-20 px-5">
        <div className="flex max-w-[700px] flex-col space-y-5 text-center">
          <Header>{textContent.title}</Header>
          <div className="flex flex-col text-center text-xl text-gray-80">
            <p>{textContent.description.normal}</p>
            <p className="font-semibold">{textContent.description.bold}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionsSection;
