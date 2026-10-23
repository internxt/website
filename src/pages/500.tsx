import React from 'react';
import { DARK_MODE_ENABLED } from '@/theme.config';

export default function Custom500() {
  return (
    <section>
      <div className="content flex h-screen w-screen flex-col items-center justify-center">
        <h1 className={`${DARK_MODE_ENABLED ? 'text-white-95' : 'text-cool-gray-90'} text-4xl font-medium`}>500</h1>
        <p className={`${DARK_MODE_ENABLED ? 'text-cool-gray-30' : 'text-cool-gray-60'} text-xl`}>
          Server-side error occurred
        </p>
      </div>
    </section>
  );
}
