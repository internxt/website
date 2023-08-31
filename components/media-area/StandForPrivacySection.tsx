import RenderDescription from '../shared/RenderDescription';

const StandForPrivacySection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex w-full flex-col items-center justify-center px-5 py-20">
        <div className="flex max-w-[774px] flex-col items-center space-y-6 text-center">
          <p className="max-w-[500px] text-5xl font-semibold leading-tight text-gray-100">{textContent.title}</p>
          <RenderDescription description={textContent.description} />
        </div>
      </div>
    </section>
  );
};

export default StandForPrivacySection;
