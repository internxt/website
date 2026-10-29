import { CloudPartnerText } from '@/assets/types/cloud-partner';

interface FeatureSectionProps {
  darkMode?: boolean;
  textContent: CloudPartnerText['FeatureSection'];
}

export default function FeatureSection({ darkMode = false, textContent }: Readonly<FeatureSectionProps>): JSX.Element {
  return (
    <div
      className="flex flex-col items-center gap-6 pb-20 lg:px-10 xl:px-32 3xl:px-80 "
      style={{
        background: darkMode
          ? 'linear-gradient(180deg, #1C1C1C 0%, #0D0D0D 100%)'
          : 'linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 100%)',
      }}
    >
      <p className={`text-4xl font-bold ${darkMode ? 'text-white-95' : 'text-gray-95'}`}>{textContent.title}</p>
      <p className={`w-[800px] text-center text-lg leading-tight ${darkMode ? 'text-green-120' : 'text-gray-55'}`}>
        {textContent.description}
      </p>
    </div>
  );
}
