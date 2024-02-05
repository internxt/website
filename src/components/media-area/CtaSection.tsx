import { Envelope } from '@phosphor-icons/react';

const CtaSection = ({ textContent }: { textContent: any }) => {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-primary-dark to-primary px-5 py-14">
      <div className="flex flex-col items-center justify-center space-y-8 text-center text-white">
        <Envelope size={63} />
        <p className=" text-4xl font-semibold">{textContent.title}</p>

        <button
          className="flex text-3xl font-light underline underline-offset-4 hover:no-underline"
          onClick={() => {
            // Mail To hello@internxt.com
            window.location.href = 'mailto:hello@internxt.com';
          }}
        >
          {textContent.cta}
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
