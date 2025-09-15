/* eslint-disable @typescript-eslint/no-explicit-any */
import { CircleWavyCheck, Database, Eye, Key, Recycle } from '@phosphor-icons/react';

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
}

interface BestStorageSectionProps {
  textContent: {
    card1: { title: string };
    card2: { title: string };
    card3: { title: string };
    card4: { title: string };
    card5: { title: string };
  };
}

const BestStorageSection = ({ textContent }: BestStorageSectionProps): JSX.Element => {
  const features: Feature[] = [
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

  const FeatureItem = ({
    feature,
    iconSize,
    containerWidth,
    textSize,
  }: {
    feature: Feature;
    iconSize: number;
    containerWidth: string;
    textSize: string;
  }) => (
    <div className={`flex ${containerWidth} flex-col items-center text-center`}>
      <feature.icon
        size={iconSize}
        className="mb-2 text-primary transition-colors duration-200 hover:text-primary/80"
      />
      <p className={`${textSize} font-medium text-gray-100`}>{feature.title}</p>
    </div>
  );

  return (
    <section className="overflow-hidden bg-neutral-17">
      <div className="hidden items-center justify-center py-16 lg:flex">
        <div className="flex w-full max-w-4xl flex-row justify-between gap-4 px-4">
          {features.map((feature, index) => (
            <FeatureItem
              key={`desktop-${index}`}
              feature={feature}
              iconSize={32}
              containerWidth="w-[150px]"
              textSize="text-lg"
            />
          ))}
        </div>
      </div>

      <div className="flex min-h-[256px] w-full flex-col items-center justify-center gap-6 p-4 lg:hidden">
        <div className="flex w-full max-w-sm flex-row justify-center gap-6">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureItem
              key={`mobile-row1-${index}`}
              feature={feature}
              iconSize={24}
              containerWidth="flex-1 max-w-[74px]"
              textSize="text-xs"
            />
          ))}
        </div>

        <div className="flex w-full max-w-sm flex-row justify-center gap-6">
          {features.slice(3, 5).map((feature, index) => (
            <FeatureItem
              key={`mobile-row2-${index}`}
              feature={feature}
              iconSize={24}
              containerWidth="flex-1 max-w-[74px]"
              textSize="text-xs"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestStorageSection;
