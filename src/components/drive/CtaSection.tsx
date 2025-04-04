import React from 'react';
import Link from 'next/link';

const CtaSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-primary py-14">
      <div className="flex flex-col items-center justify-center space-y-8 px-5 text-center">
        <div className="flex  flex-col items-center space-y-4 text-center text-white">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="w-full max-w-[520px] text-xl font-normal">{textContent.description}</p>
        </div>
        <Link href="/pricing" legacyBehavior>
          <div className="flex cursor-pointer rounded-lg bg-white px-5 py-3 text-lg font-medium text-primary">
            {textContent.cta}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
