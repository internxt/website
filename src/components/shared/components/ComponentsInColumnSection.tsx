import { ReactNode } from 'react';

interface ComponentsInARowSectionProps {
  backgroundColor?: string;
  FirstComponent?: ReactNode;
  SecondComponent?: ReactNode;
}

export const ComponentsInARowSection = ({
  backgroundColor,
  FirstComponent,
  SecondComponent,
}: ComponentsInARowSectionProps): JSX.Element => {
  return (
    <section className={`overflow-hidden px-5 py-20 ${backgroundColor}`}>
      <div className="flex flex-col items-center gap-16">
        {FirstComponent}
        {SecondComponent}
      </div>
    </section>
  );
};
