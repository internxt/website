import { ReactNode } from 'react';
import { DARK_MODE_ENABLED } from '@/theme.config';

export default function Card({
  darkMode = DARK_MODE_ENABLED,
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
