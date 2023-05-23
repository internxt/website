import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TextInput from '../components/TextInput';

const BusinessBanner = ({ textContent }) => {
  const { locale, pathname } = useRouter();
  const [email, setEmail] = useState('');
  const redirectUrl = `${window.origin}${locale === 'en' ? '' : `/${locale}`}${pathname}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      await axios.post(`api/subscribe`, {
        body: email,
      });
    } catch (error) {
      console.log(error);
    }
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
                placeholder="Email"
                autoComplete="email"
                aria-invalid="false"
                onChange={(e) => setEmail(e.target.value)}
                className={`h-11 w-full appearance-none rounded-lg border border-gray-30 bg-white px-3  text-lg text-gray-100 shadow-sm transition duration-100 focus:border-primary focus:shadow-none focus:outline-none focus:ring focus:ring-primary/10 disabled:cursor-not-allowed disabled:border-gray-10 disabled:text-gray-30 md:text-base `}
              />
              <div className="ml-form-embedSubmit">
                <button type="submit" className="rounded-lg bg-primary px-5 py-3 font-medium text-white">
                  {textContent.cta}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="-ml-40 hidden w-full items-center lg:flex">
          <div className="relative left-56 top-6 flex w-full flex-col bg-contain">
            <Image
              src="/images/special-offer/black-friday/Devices.png"
              width={534}
              height={340}
              draggable="false"
              unoptimized
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
