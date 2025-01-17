import React from 'react';
import { goToSignUpURL } from '@/lib/auth';
import { handleAdsConversion } from '../services/ga.services';

const CtaSection = ({ textContent, freePlan }: { textContent: any; freePlan?: boolean }) => {
  return (
    <section className="overflow-hidden bg-primary py-14">
      <div className="flex flex-col items-center justify-center space-y-8 px-5 text-center">
        <div className="flex flex-col items-center space-y-4 text-center text-white">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="w-full max-w-[570px] text-xl font-normal">{textContent.description}</p>
        </div>
        <button
          className="flex rounded-lg bg-white px-5 py-3 text-lg font-medium text-primary hover:bg-blue-10"
          onClick={() => {
            handleAdsConversion('#priceTable', 'Cta', 1, 'USD');
            if (freePlan) {
              goToSignUpURL();
            } else {
              const priceTable = document.getElementById('priceTable');
              if (priceTable) {
                window.scrollTo({
                  top: priceTable.offsetTop,
                  behavior: 'smooth',
                });
              }
            }
          }}
        >
          {textContent.cta}
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
