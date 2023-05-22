import Image from 'next/image';
import { useEffect, useState } from 'react';
import TextInput from '../components/TextInput';

const BusinessBanner = ({ textContent }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Procesa tu lógica de envío del formulario aquí
    const form = event.target;
    const formData = new FormData(form);

    try {
      await fetch(form.action, {
        method: form.method,
        body: formData,
      });
      // Si el envío del formulario es exitoso, llama a la función de éxito

      window.top.location.href = 'https://internxt.com/pricing';
    } catch (e) {
      window.location.href = 'https://internxt.com/pricing';
    }
  };

  return (
    <section className="hidden overflow-hidden bg-gradient-to-br from-blue-20 to-white lg:flex">
      <div className="flex flex-row items-center justify-center">
        <div className="mt-11 mb-11 ml-11 flex w-full  flex-col items-start justify-center space-y-5">
          <p className="max-w-[495px] text-4xl font-semibold">
            {textContent.line1} <span className="text-primary">{textContent.blueText}</span>
          </p>
          <p className="max-w-[386px] text-xl font-medium text-gray-100">{textContent.subtitle}</p>
          <div className="flex w-max items-center space-x-4">
            <form
              className="-ml-4 flex flex-row items-start space-x-4"
              method="post"
              data-code="Y0NHkN"
              action={`${process.env.NEXT_PUBLIC_MAILERLITE_API}/jsonp/16439/forms/88880115360990445/subscribe`}
              target="_blank"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="ml-submit" value="1" />
              <input
                aria-label="email"
                aria-required="true"
                type="email"
                data-inputmask=""
                name="fields[email]"
                placeholder="Email"
                autoComplete="email"
                aria-invalid="false"
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
        <div className="-ml-40 flex w-full items-center">
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
