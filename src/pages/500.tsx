import React from 'react';
import { DARK_MODE_ENABLED } from '@/theme.config';

export default function Custom500({ darkMode = DARK_MODE_ENABLED }: { darkMode?: boolean }) {
  return (
    <section className={`${darkMode ? 'bg-[#1C1C1C]' : ''}`}>
      <div className="content flex flex-col w-screen h-screen items-center justify-center">
        <h1 className="text-cool-gray-90 text-4xl font-medium">500</h1>
        <p className="text-cool-gray-60 text-xl">Server-side error occurred</p>
      </div>
    </section>
  );
}
