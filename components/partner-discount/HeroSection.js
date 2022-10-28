import React from 'react';
import ShowSnackbar from '../ShowSnackbar';

const HeroSection = ({ textContent }) => {
  const subtitle1 = textContent.subtitle.split('FLASH')[0];
  const subtitle2 = textContent.subtitle.split('FLASH')[1];
  const flash = textContent.subtitle.substr(textContent.subtitle.indexOf('FLASH'), 5);
  const [open, setOpen] = React.useState(false);

  const copyCoupon = () => {
    if (flash) {
      navigator.clipboard.writeText(flash);
      //Show snackbar
      setOpen(true);
    }
  };

  if (open === true) {
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  }

  return (
    <section className="overflow-hidden">
      <div className="mt-[77px] mb-20 flex flex-col justify-center lg:flex-row lg:justify-between">
        <div className="mx-20 mb-6 flex w-auto flex-col md:hidden">
          <img
            loading="lazy"
            src="/images/home/devicesMobileView.webp"
            draggable="false"
            alt="laptop and phone with Internxt app"
          />
        </div>
        <div className="mx-4 flex flex-col items-center justify-center space-y-8 text-center text-white lg:ml-10 lg:max-w-[456px] lg:items-start lg:text-start xl:ml-32 2xl:ml-80">
          <h1 className=" text-6xl font-semibold">{textContent.title}</h1>
          <p className=" text-2xl font-normal">
            {subtitle1}
            {
              <button onClick={copyCoupon} className="">
                <b>
                  <p className="underline underline-offset-4">{flash}</p>
                </b>
              </button>
            }
            {subtitle2}
          </p>
          <div className="flex rounded-full bg-white px-9 py-4">
            <a href="#pricing">
              <button className="text-lg font-normal text-primary" onClick={() => {}}>
                {textContent.cta}
              </button>
            </a>
          </div>
        </div>
        <div className="hidden flex-col pl-32 pt-8 lg:flex lg:pt-0">
          <img
            src="/images/partners-discount/partners-image.png"
            alt="Laptop and smartphone image"
            className="max-w-[679px]"
          />
        </div>
      </div>
      <ShowSnackbar open={open} />
    </section>
  );
};

export default HeroSection;
