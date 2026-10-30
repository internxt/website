import { CertificationsSection } from '../cloud-object-storage/certificationsSections';

interface TrustedObjectStorageSectionProps {
  textContent: any;
}

export const TrustedObjectStorageSection = ({ textContent }: TrustedObjectStorageSectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 p-20 bg-[linear-gradient(0deg,var(--Neutral-neutral-0,#FFF)_0%,var(--Brand-primary-brand-0,#F4F8FF)_100%)] dark:bg-[linear-gradient(0deg,var(--Neutral-neutral-0,#1C1C1C)_0%,var(--Brand-primary-brand-0,#0D0D0D)_100%)]">
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <h2 className="text-2xl font-semibold leading-tight text-gray-95 dark:text-white-95 lg:text-4xl">
          {textContent.title}
        </h2>
        <p className="w-[774px] text-base font-normal leading-tight text-gray-55 dark:text-green-120 lg:text-center lg:text-xl">
          {textContent.description}
        </p>
      </div>

      <CertificationsSection bgColor="" />
    </div>
  );
};
