import { ReactNode } from 'react';

export default function Card({
  className = '',
  children,
}: {
  className?: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <div className={`${className} rounded-lg border border-gray-10 dark:border-gray-71 p-3`}>
      {children}
    </div>
  );
}
