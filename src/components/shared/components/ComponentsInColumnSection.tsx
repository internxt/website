import { ReactNode } from 'react';

interface ComponentsInColumnSectionSectionProps {
  backgroundColor?: string;
  FirstComponent?: ReactNode;
  SecondComponent?: ReactNode;
}

export const ComponentsInColumnSection = ({
  backgroundColor,
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
