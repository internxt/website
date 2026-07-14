import { ReactNode } from 'react';

export interface InfoSectionProps {
  FirstComponent?: ReactNode;
}

export const InfoSection: React.FC<InfoSectionProps> = ({ FirstComponent }) => {
  return (
    <section className={`overflow-hidden  px-5 lg:py-20`}>
      <div className="flex flex-col items-center gap-16">{FirstComponent}</div>
    </section>
  );
};
