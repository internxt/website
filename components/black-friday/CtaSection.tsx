import { CheckCircle } from '@phosphor-icons/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const CtaSection = ({ textContent }) => {
  const router = useRouter();

  function handleOnClick() {
    router.pathname === '/black-friday'
      ? window.scrollTo({
          top: document.getElementById('priceTable').offsetTop,
          behavior: 'smooth',
        })
      : router.push('/black-friday#priceTable');
  }

  return (
    <section className="overflow-hidden px-5 lg:px-0">
      <div
        className="flex w-full max-w-7xl flex-col items-center rounded-[32px]"
        style={{ background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #18181B 100%)' }}
      >
        <div className="flex flex-col lg:w-screen">
          <div className="flex flex-col items-center space-y-6 px-4 py-14 text-white lg:px-0">
            <div className="flex flex-col space-y-4 text-center">
              <p className="text-2xl font-medium">{textContent.title}</p>
              <p className="max-w-[430px] text-4xl font-bold lg:text-5xl">{textContent.subtitle}</p>
            </div>
            <button
              onClick={handleOnClick}
              className="flex items-center rounded-lg bg-primary px-5 py-3 font-medium text-white"
            >
              {textContent.cta}
            </button>
            <div className="flex flex-row items-center space-x-3">
              <CheckCircle size={24} className="text-primary" />
              <p className="font-medium text-gray-5 lg:text-lg">{textContent.guarantee}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-10 hidden -translate-x-28 rotate-12 animate-pulse flex-row lg:flex">
        <Image
          src="/images/black-friday/internxt_black_friday_offer.png"
          width={445}
          height={400}
          alt="Internxt Black Friday Offer"
        />
      </div>
      <div className="absolute right-0 top-5 hidden translate-x-16 -rotate-12 animate-pulse flex-row lg:flex">
        <Image
          src="/images/black-friday/internxt_black_friday_offer.png"
          width={361}
          height={326}
          alt="Internxt Black Friday Offer"
        />
      </div>
    </section>
  );
};

export default CtaSection;
