import { CertificationsSection } from '../cloud-object-storage/certificationsSections';
import { DARK_MODE_ENABLED } from '@/theme.config';

interface TrustedObjectStorageSectionProps {
  darkMode?: boolean;
  textContent: any;
}

export const TrustedObjectStorageSection = ({
  darkMode = DARK_MODE_ENABLED,
  textContent,
}: TrustedObjectStorageSectionProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-12 p-20"
      style={{
        background: darkMode
          ? 'linear-gradient(0deg, var(--Neutral-neutral-0, #1C1C1C) 0%, var(--Brand-primary-brand-0, #0D0D0D) 100%)'
          : 'linear-gradient(0deg, var(--Neutral-neutral-0, #FFF) 0%, var(--Brand-primary-brand-0, #F4F8FF) 100%)',
      }}
    >
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <h2
          className={`text-2xl font-semibold leading-tight ${darkMode ? 'text-white-95' : 'text-gray-95'} lg:text-4xl`}
        >
          {textContent.title}
        </h2>
        <p
          className={`w-[774px] text-base font-normal leading-tight ${
            darkMode ? 'text-green-120' : 'text-gray-55'
          } lg:text-center lg:text-xl`}
        >
          {textContent.description}
        </p>
      </div>

      <CertificationsSection bgColor="" />
    </div>
  );
};
