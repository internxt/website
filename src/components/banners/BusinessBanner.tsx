import axios from 'axios';
import Image from 'next/legacy/image';
import { useState } from 'react';
import { notificationService } from '@/components/Snackbar';

const BusinessBanner = ({ textContent }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`api/subscribe`, {
        email,
        groups: [process.env.NEXT_PUBLIC_BUSINESS_GROUP_ID],
      })
      .then(() => {
        notificationService.openSuccessToast('Successfully submitted');
      })
      .catch((err) => {
        notificationService.openErrorToast('Something went wrong!');
      });
  };

  return (
    <section className="flex overflow-hidden bg-gradient-to-br from-blue-20 to-white">
      <div className="flex items-center justify-center lg:flex-row">
        <div className="mt-11 mb-11 flex w-full flex-col items-start justify-center space-y-5 px-5 text-center lg:ml-11 lg:px-0 lg:text-start">
          <p className="max-w-[495px] text-4xl font-semibold">
            {textContent.line1} <span className="text-primary">{textContent.blueText}</span>
          </p>
          <p className="max-w-[386px] text-xl font-medium text-gray-100">{textContent.subtitle}</p>
          <div className="flex w-full max-w-[386px] items-center space-x-4">
            <form
              className=" flex w-full flex-row items-center space-x-4"
              method="post"
              data-code="Y0NHkN"
              target="_blank"
              onSubmit={handleSubmit}
            >
              <input
                aria-label="email"
                aria-required="true"
                type="email"
                data-inputmask=""
                placeholder="Your email address"
                autoComplete="email"
                aria-invalid="false"
                onChange={(e) => setEmail(e.target.value)}
                className={`h-11 w-full appearance-none rounded-lg border border-gray-30 bg-white px-3  text-lg text-gray-100 shadow-sm transition duration-100 focus:border-primary focus:shadow-none focus:outline-none focus:ring focus:ring-primary/10 disabled:cursor-not-allowed disabled:border-gray-10 disabled:text-gray-30 md:text-base `}
              />
              <div className="ml-form-embedSubmit">
                <button
                  type="submit"
                  disabled={!email}
                  className="rounded-lg bg-primary px-5 py-3 font-medium text-white"
                >
                  {textContent.cta}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="-ml-40 hidden w-full items-center lg:flex">
          <div className="relative left-56 top-2 flex w-full flex-col bg-contain">
            <Image
              src="/images/home/internxt_secure_cloud_storage.webp"
              width={534}
              height={300}
              draggable={false}
              quality={100}
              loading="eager"
              layout="intrinsic"
              alt="desktop, laptop and phone with Internxt app"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessBanner;
