import { X } from '@phosphor-icons/react';

const IntercomTicketCreatedBanner = ({ textContent, bannerVisible, onClose }) => {
  return (
    <section
      className={`${
        bannerVisible ? 'flex' : 'hidden'
      }  fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-black bg-opacity-50`}
    >
      <div
        className={`${bannerVisible ? 'flex' : 'hidden'} absolute top-1/2 left-1/2
        flex w-full max-w-[800px] -translate-y-1/2 -translate-x-1/2 transform flex-col rounded-2xl bg-primary text-neutral-900`}
      >
        <button className="absolute right-0 m-7 flex w-auto text-white" onClick={onClose}>
          <X size={32} />
        </button>
        <div className="flex  flex-col items-center justify-center px-24 pt-20 pb-16">
          <div className="flex flex-col items-center justify-center space-y-10 text-center">
            <div className="flex w-full max-w-[610px] flex-col items-center space-y-4">
              <p className="text-3xl font-semibold text-white">{textContent.thanks}</p>
              <p className="text-5xl font-bold text-white">{textContent.title}</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-6">
              <p className="text-xl font-medium text-white">{textContent.description}</p>
              <button
                className="relative flex w-full cursor-pointer flex-col items-center justify-center rounded-lg bg-white py-3 px-5 text-base font-medium text-black transition duration-100 focus:outline-none active:bg-white active:text-black sm:text-lg lg:w-max"
                onClick={onClose}
              >
                {textContent.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntercomTicketCreatedBanner;
