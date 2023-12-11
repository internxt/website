import { CheckCircle } from '@phosphor-icons/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const CampaignCtaSection = ({ textContent }) => {
  const router = useRouter();

  function handleOnClick() {
    router.pathname === '/lifetime'
      ? window.scrollTo({
          top: document.getElementById('payment').offsetTop,
          behavior: 'smooth',
        })
      : router.push('/lifetime');
  }

  return (
    <section className="overflow-hidden px-5 lg:px-0">
      <div
        className="flex w-full max-w-7xl flex-col items-center rounded-[32px]"
        style={{ background: 'linear-gradient(180deg, #112D91 0%, #060C40 100%)' }}
      >
        <div className="flex flex-col lg:w-screen">
          <div className="flex flex-col items-center justify-center space-y-6 px-4 py-14 text-white lg:px-0">
            <div className="flex flex-col items-center space-y-4 text-center">
              <p className="max-w-[558px] text-4xl font-bold md:text-5xl">{textContent.title}</p>
              <p className="max-w-[443px] text-xl">{textContent.subtitle}</p>
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
      <div className="absolute top-2 hidden -translate-x-24 flex-row lg:flex">
        <Image
          src="/images/lifetime/Internxt_christmas_ball.webp"
          width={300}
          height={380}
          alt="Internxt christmas ball"
        />
      </div>
      <div className="absolute top-16 right-0 hidden translate-x-10 flex-row lg:flex">
        <Image
          src="/images/lifetime/internxt-christmas_tree.webp"
          width={271}
          height={266}
          alt="Internxt christmas tree"
        />
      </div>
    </section>
  );
};

export default CampaignCtaSection;
