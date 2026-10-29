import { ReactNode } from 'react';

export default function Card({
  darkMode = false,
  className = '',
  children,
}: {
  darkMode?: boolean;
  className?: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <div className={`${className} rounded-lg border ${darkMode ? 'border-gray-71' : 'border-gray-10'} p-3`}>
      {children}
    </div>
  );
}
