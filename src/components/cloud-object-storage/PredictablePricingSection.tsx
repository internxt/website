import { CloudObjectStorageText } from '@/assets/types/cloud-object-storage';

interface PredictablePricingSectionProps {
  textContent: CloudObjectStorageText['PredictablePricingSection'];
}

export const PredictablePricingSection = ({ textContent }: PredictablePricingSectionProps): JSX.Element => {
  return (
    <section className="overflow-hidden bg-gray-1 py-20 px-5">
      <div className="flex flex-col items-center gap-12">
        <div className="flex max-w-[774px] flex-col gap-6 text-center">
          <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
          <h3 className="text-xl text-gray-80">{textContent.description}</h3>
        </div>
        <div className="flex flex-row flex-wrap items-start justify-center gap-32">
          {textContent.info.map((card) => (
            <div className="flex max-w-[230px] flex-col gap-3 text-center" key={card.title}>
              <p className="text-5xl font-semibold text-primary">{card.title}</p>
              <p className="text-xl font-medium text-gray-80">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
