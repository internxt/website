import { CircleWavyCheck, Database, Eye, Key, Recycle } from '@phosphor-icons/react';

interface BestStorageSectionProps {
  textContent: Record<string, any>;
  hideTitleAndDescription?: boolean;
}

const BestStorageSection = ({ textContent, hideTitleAndDescription }: BestStorageSectionProps): JSX.Element => {
  const features = [
    {
      icon: Database,
      title: textContent.card1.title,
    },
    {
      icon: Key,
      title: textContent.card2.title,
    },
    {
      icon: Recycle,
      title: textContent.card3.title,
    },
    {
      icon: Eye,
      title: textContent.card4.title,
    },
    {
      icon: CircleWavyCheck,
      title: textContent.card5.title,
    },
  ];

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-4 px-5 pb-20">
        {!hideTitleAndDescription ? (
          <div className="flex w-full max-w-3xl flex-col space-y-4 text-center">
            <p className="text-5xl font-semibold">{textContent.title}</p>
            <p className="text-xl">{textContent.description}</p>
          </div>
        ) : undefined}
        <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-32">
          {features.map((feature, index) => (
            <div className="flex w-full max-w-[120px] flex-col items-center space-y-3 pt-16 text-center" key={index}>
              <feature.icon size={40} className="text-primary" />
              <p className="text-xl font-medium text-gray-100">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestStorageSection;
