import { ArrowUpRight, CaretRight } from 'phosphor-react';

const SecuritumSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="bg- flex flex-col bg-gray-1 py-20">
        <div className="flex flex-col items-center justify-center space-y-16 px-6">
          {/* Text content */}
          <div className="flex max-w-[597px] flex-col space-y-10 text-center">
            <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
            <p className="text-xl text-gray-80">{textContent.subtitle}</p>
          </div>
          {/* Links to PDFs */}
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-32">
            <div
              className="flex cursor-pointer flex-row items-center space-x-2 text-primary hover:underline"
              onClick={() => window.open('/securitum/securitum-web.pdf', '_blank')}
            >
              <p className="text-lg font-semibold">{textContent.links.web}</p>
              <CaretRight size={14} weight="bold" />
            </div>
            <div
              className="flex cursor-pointer flex-row items-center space-x-2 text-primary hover:underline"
              onClick={() => window.open('/securitum/securitum-mobile.pdf', '_blank')}
            >
              <p className="text-lg font-semibold">{textContent.links.mobile}</p>
              <CaretRight size={14} weight="bold" />
            </div>
            <div
              className="flex cursor-pointer flex-row items-center space-x-2 text-primary hover:underline"
              onClick={() => window.open('/securitum/securitum-desk.pdf', '_blank')}
            >
              <p className="text-lg font-semibold">{textContent.links.desk}</p>
              <CaretRight size={14} weight="bold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritumSection;
