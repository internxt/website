import { ReactNode } from 'react';

export interface InfoSectionProps {
  FirstComponent?: ReactNode;
}

export const InfoSection: React.FC<InfoSectionProps> = ({ FirstComponent }) => {
  return (
    <section className={`overflow-hidden bg-gray-1 px-5 py-20`}>
      <div className="flex flex-col items-center gap-16">{FirstComponent}</div>
    </section>
  );
};
