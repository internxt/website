import { CloudPartnerText } from '@/assets/types/cloud-partner';

interface FeatureSectionProps {
  textContent: CloudPartnerText['FeatureSection'];
}

export default function FeatureSection({ textContent }: Readonly<FeatureSectionProps>): JSX.Element {
  return (
    <div
      className="flex flex-col items-center gap-6 pb-20 lg:px-10 xl:px-32 3xl:px-80  bg-[linear-gradient(180deg,#FFFFFF_0%,#F4F8FF_100%)] dark:bg-[linear-gradient(180deg,#1C1C1C_0%,#0D0D0D_100%)]"
    >
      <p className="text-4xl font-bold text-gray-95 dark:text-white-95">{textContent.title}</p>
      <p className="w-[800px] text-center text-lg leading-tight text-gray-55 dark:text-green-120">
        {textContent.description}
      </p>
    </div>
  );
}
