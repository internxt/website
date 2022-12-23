import { ArrowsLeftRight, ArrowUp } from 'phosphor-react';
import React from 'react';
import Select from 'react-select';

const HeroSection = ({ textContent }) => {
  const [value, setValue] = React.useState(0);
  const [convertFrom, setConvertFrom] = React.useState();
  const [convertTo, setConvertTo] = React.useState();
  const [reverse, setReverse] = React.useState(false);

  const options = [
    { value: 'b', label: 'Bytes' },
    { value: 'kb', label: 'Kilobytes' },
    { value: 'mb', label: 'Megabytes' },
    { value: 'gb', label: 'Gigabytes' },
    { value: 'tb', label: 'Terabytes' },
  ];

  const formatGroupLabel = (data) => {
    return (
      <div className="absolute z-20 flex">
        <span className="text-green">{data.label}</span>
      </div>
    );
  };

  function convert() {}

  return (
    <section className="overflow-hidden">
      <div className="mx-4 flex py-32 md:mx-10 lg:mx-32">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center space-y-20">
          {/* Title and subtitle */}
          <div className=" flex w-full max-w-[700px] flex-col items-center justify-center text-center">
            <h1 className="text-5xl font-semibold">{textContent.title}</h1>
            <p className="pt-6 text-xl font-normal text-gray-80">{textContent.description}</p>
            <p className="pt-6 text-xl font-normal text-gray-80">{textContent.description1}</p>
          </div>
          {/* Container */}
          <div className="relative flex flex-row">
            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-20">
              <div className="flex max-w-[400px] flex-col focus-within:rounded-xl focus-within:border-2 focus-within:border-primary focus-within:border-opacity-6 md:w-screen">
                <div className="flex flex-row justify-between rounded-xl border border-gray-10 bg-gray-1 focus-within:border-primary focus-within:bg-white">
                  <input className="w-52 rounded-xl bg-transparent p-4 focus:outline-none" />
                  <Select
                    className="z-50 inline-block w-screen max-w-[160px] rounded-lg border-gray-10 p-2"
                    defaultValue={options[0]}
                    id="convertTo"
                    formatGroupLabel={formatGroupLabel}
                    menuPosition="fixed"
                    options={options}
                  />
                </div>
              </div>
              <div className="flex max-w-[400px] flex-col focus-within:rounded-xl focus-within:border-2 focus-within:border-primary focus-within:border-opacity-6 md:w-screen">
                <div className="z-20 flex flex-row justify-between rounded-xl border border-gray-10 bg-gray-1 focus-within:border-primary focus:bg-white">
                  <input className="w-52 rounded-xl bg-transparent p-4 focus:outline-none" />
                  <Select
                    className="inline-block w-screen max-w-[160px] rounded-lg border-gray-10 p-2"
                    defaultValue={options[1]}
                    id="convertTo"
                    formatGroupLabel={formatGroupLabel}
                    menuPosition="fixed"
                    options={options}
                  />
                </div>
              </div>
            </div>
            <div
              className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-20 bg-white p-2"
              onClick={() => {
                setReverse(!reverse);
              }}
            >
              <ArrowsLeftRight size={28} weight="light" className="text-gray-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
