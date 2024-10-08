import RenderDescription from '../shared/RenderDescription';

export const FeaturesSection = ({ textContent }) => (
  <section className="overflow-hidden py-20 px-5">
    <div className="flex w-full flex-col items-center space-y-16">
      <div id="incontent_3" className="flex w-full justify-center"></div>
      <div className="flex max-w-[672px] flex-col space-y-3">
        <p className="text-2xl font-medium text-gray-100">{textContent.howToConvert.title}</p>
        <p className="text-lg text-gray-80">{textContent.howToConvert.description}</p>
        <ul className="list-[square] space-y-1.5 pl-6 lg:max-w-2xl">
          {textContent.howToConvert.steps.map((feature) => (
            <li key={feature.step} className="text-lg text-primary">
              {feature.step}
              <span className="text-gray-80"> {feature.description}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex max-w-[672px] flex-col space-y-3">
        <p className="text-2xl font-medium text-gray-100">{textContent.whyConvert.title}</p>
        <RenderDescription description={textContent.whyConvert.paragraphs} />
      </div>
      <div id="incontent_4" className="flex w-full justify-center"></div>
    </div>
  </section>
);
