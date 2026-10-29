import { ReactNode } from 'react';

interface ComponentsInColumnSectionSectionProps {
  darkMode?: boolean;
  backgroundColor?: string;
  FirstComponent?: ReactNode;
  SecondComponent?: ReactNode;
}

export const ComponentsInColumnSection = ({
  darkMode = false,
  backgroundColor = darkMode ? 'bg-[#1C1C1C]' : '',
  FirstComponent,
  SecondComponent,
}: ComponentsInColumnSectionSectionProps): JSX.Element => {
  return (
    <section className={`overflow-hidden px-5 py-20 ${backgroundColor}`}>
      <div className="flex flex-col items-center gap-16">
        {FirstComponent}
        {SecondComponent}
      </div>
    </section>
  );
};
