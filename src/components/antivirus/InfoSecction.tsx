import { ReactNode } from 'react';
import { DARK_MODE_ENABLED } from '@/theme.config';

export interface InfoSectionProps {
  darkMode?: boolean;
  FirstComponent?: ReactNode;
}

export const InfoSection: React.FC<InfoSectionProps> = ({ darkMode = DARK_MODE_ENABLED, FirstComponent }) => {
  return (
    <section className={`overflow-hidden  px-5 lg:py-20 ${darkMode ? 'bg-[#1C1C1C]' : ''}`}>
      <div className="flex flex-col items-center gap-16">{FirstComponent}</div>
    </section>
  );
};
