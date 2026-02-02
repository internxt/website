import { CloudObjectStorageText } from '@/assets/types/cloud-object-storage';

interface PredictablePricingSectionProps {
  textContent: CloudObjectStorageText['PredictablePricingSection'];
}

export const PredictablePricingSection = ({ textContent }: PredictablePricingSectionProps): JSX.Element => {
  return (
    <section className="overflow-hidden bg-white px-5 py-10 lg:py-20">
      <div className="flex flex-col items-center gap-12">
        <div className="flex max-w-[774px] flex-col gap-6 text-center">
          <h2 className="text-30 font-semibold leading-tight text-gray-100 lg:whitespace-pre-line lg:text-3xl">
            {textContent.title}
          </h2>
          <h3 className="text-xl leading-tight text-gray-55">{textContent.description}</h3>
        </div>
        <div className="flex flex-row flex-wrap items-start justify-center gap-8 lg:gap-32">
          {textContent.info.map((card) => (
            <div className="flex max-w-[230px] flex-col gap-3 text-center" key={card.title}>
              <p className="text-30 font-semibold leading-tight text-primary md:whitespace-nowrap lg:text-3xl">
                {card.title}
              </p>
              <p className="text-xl font-medium leading-tight text-gray-95">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
