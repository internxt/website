import React from 'react';

const TestimonialsSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col py-24">
        <div className="center flex flex-col items-center text-center">
          <p className="text-4xl font-semibold">{textContent.TestimonialSection.title}</p>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-y-10 p-5 sm:justify-evenly lg:pt-12 xl:px-40">
          <div className={`w-ful flex h-full rounded-2xl bg-gray-5 ${lang === 'fr' ? 'lg:h-full' : 'lg:h-80'} lg:w-80`}>
            <div className="flex flex-col place-items-start justify-between p-8">
              <p className="text-xl font-normal">{textContent.TestimonialSection.cristian.text}</p>
              <p className="text-lg font-bold">— {textContent.TestimonialSection.cristian.footer}</p>
            </div>
          </div>
          <div className="h-full w-full rounded-2xl bg-gray-5 lg:h-full lg:w-80">
            <div className="p-8">
              <p className="text-xl font-normal">{textContent.TestimonialSection.josep.text}</p>
              <p className="mt-2 text-lg font-bold">— {textContent.TestimonialSection.josep.footer}</p>
            </div>
          </div>
          <div className="h-full w-full  rounded-2xl bg-gray-5 lg:h-full lg:w-80">
            <div className="p-8">
              <p className="text-xl font-normal">{textContent.TestimonialSection.eva.text}</p>
              <p className="mt-2 text-lg font-bold">— {textContent.TestimonialSection.eva.footer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
