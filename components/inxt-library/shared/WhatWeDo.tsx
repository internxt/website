import { useRouter } from 'next/router';

const WhatWeDo = ({ textContent }) => {
  const router = useRouter();
  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center justify-center space-y-16 py-20 px-5">
        <div className="flex max-w-[774px] flex-col items-center space-y-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex w-full max-w-[600px]">
              <p className="text-5xl font-semibold leading-tight text-gray-100">{textContent.title}</p>
            </div>
            <p className="text-2xl font-medium text-gray-100">{textContent.subtitle}</p>
          </div>
          <div className="flex flex-col space-y-3">
            {textContent.paragraph.map((paragraph, index) => {
              return (
                <p id={index} className="text-lg text-gray-80">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => {
            router.push('#download-ebook');
          }}
          className="flex rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white"
        >
          {textContent.cta}
        </button>
      </div>
    </section>
  );
};

export default WhatWeDo;
