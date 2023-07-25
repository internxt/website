import { Check, X } from '@phosphor-icons/react';

const DifferencesBetweenOpenAndCloseSS = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center justify-center space-y-20 px-5 py-20">
        {/* Title and description */}
        <div className="flex flex-col space-y-6 text-center">
          <p className="max-w-[756px] text-5xl font-semibold text-gray-100">{textContent.title}</p>
          <p className="max-w-[850px] text-xl text-gray-80">{textContent.description}</p>
        </div>

        {/* Table */}
        <div className="flex w-full flex-row space-x-10 overflow-x-auto md:space-x-20 lg:items-center lg:justify-center">
          <div className="flex w-[387px] flex-col lg:w-full lg:max-w-[387px]">
            <div className="flex w-full items-center space-x-4 rounded-l-lg bg-primary bg-opacity-3 py-4 pl-6">
              <img src={'/images/open-source/open-source.svg'} className="h-8 w-8" alt="Open Source" />
              <p className="text-lg font-semibold text-gray-100">{textContent.table.OpenSource.title}</p>
            </div>
            <div className="flex h-full flex-col">
              {textContent.table.OpenSource.feat.map((item, index) => (
                <div className="flex h-full w-full flex-row bg-primary bg-opacity-3" key={index}>
                  <div className="flex h-full w-full flex-row items-center justify-between border-b border-primary border-opacity-3 bg-gray-1 pl-6">
                    <div className="flex w-[275px] py-4 lg:max-w-[275px]">
                      <p className="text-gray-80">{item}</p>
                    </div>
                  </div>
                  <div className="flex h-full flex-col">
                    <div className="flex flex-grow flex-col items-center justify-center p-4">
                      <Check size={32} className="text-green-dark" weight="bold" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-[387px] flex-col lg:w-full lg:max-w-[387px]">
            <div className="flex w-full items-center space-x-4 rounded-l-lg bg-primary bg-opacity-3 py-4 pl-6">
              <img src={'/images/open-source/close-source.svg'} className="h-8 w-8" alt="Closed Source" />
              <p className="text-lg font-semibold text-gray-100">{textContent.table.CloseSource.title}</p>
            </div>
            <div className="flex h-full flex-col">
              {textContent.table.CloseSource.disadvantages.map((item, index) => (
                <div className="flex h-full w-full flex-row bg-primary bg-opacity-3" key={index}>
                  <div className="flex h-full w-full flex-row items-center justify-between border-b border-primary border-opacity-3 bg-gray-1 pl-6">
                    <div className="flex w-[275px] py-4 lg:max-w-[275px]">
                      <p className="text-gray-80">{item}</p>
                    </div>
                  </div>
                  <div className="flex h-full flex-col">
                    <div className="flex flex-grow flex-col items-center justify-center p-4">
                      <X size={32} className="text-red-dark" weight="bold" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer text */}
        <p className="max-w-[850px] text-center text-xl text-gray-80">{textContent.footer}</p>
      </div>
    </section>
  );
};

export default DifferencesBetweenOpenAndCloseSS;
