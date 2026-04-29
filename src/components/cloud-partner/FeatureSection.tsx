import { CloudPartnerText } from '@/assets/types/cloud-partner';

interface FeatureSectionProps {
  textContent: CloudPartnerText['FeatureSection'];
}

export default function FeatureSection({ textContent }: FeatureSectionProps): JSX.Element {
  return (
    <div
      className="flex flex-col items-center gap-6 pb-20 lg:px-10 xl:px-32 3xl:px-80 "
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 100%)' }}
    >
      <p className="text-4xl font-bold text-gray-95">{textContent.title}</p>
      <p className="w-[800px] text-center text-lg leading-tight text-gray-55">{textContent.description}</p>
    </div>
  );
}
