import React from 'react';
import { ArrowsLeftRight } from 'phosphor-react';
import Select from 'react-select';
import bytes from 'bytes';

const options = [
  { value: 'b', label: 'Bytes' },
  { value: 'kb', label: 'Kilobytes' },
  { value: 'mb', label: 'Megabytes' },
  { value: 'gb', label: 'Gigabytes' },
  { value: 'tb', label: 'Terabytes' },
];

const HeroSection = ({ textContent }) => {
  const [value1, setValue1] = React.useState();
  const [value2, setValue2] = React.useState();
  const [convertFrom, setConvertFrom] = React.useState('b');
  const [convertTo, setConvertTo] = React.useState('kb');
  const [reverse, setReverse] = React.useState(false);

  function convert(valueToConvert, convertFromMeasure, convertToMeasure) {
    const valueConverted = bytes.format(bytes.parse(valueToConvert + convertFromMeasure), {
      unit: convertToMeasure,
      decimalPlaces: 100,
      unitSeparator: ' ',
    });
    const valueConvertedNumber = valueConverted.split(' ')[0];
    return valueConvertedNumber;
  }

  return (
    <section className="overflow-hidden">
      <div className="mx-3 flex pt-32 pb-20 md:mx-10 lg:mx-32">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center space-y-20">
          {/* Title and subtitle */}
          <div className=" flex w-full max-w-[700px] flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-semibold lg:text-5xl">{textContent.title}</h1>
            <p className="pt-5 text-lg font-normal text-gray-80 lg:text-xl">{textContent.description}</p>
            <p className="pt-5 text-lg font-normal text-gray-80 lg:text-xl">{textContent.description1}</p>
          </div>
          {/* Container */}
          <div className="relative w-full  lg:flex lg:w-auto">
            {/*  */}
            <div
              className={`flex  ${
                reverse
                  ? 'flex-col-reverse items-center justify-center gap-y-4 lg:flex-row-reverse lg:gap-20 lg:gap-y-0'
                  : 'flex-col items-center justify-center gap-y-4 lg:flex-row lg:gap-20 lg:gap-y-0'
              }`}
            >
              <div
                className={
                  'flex max-w-[400px] flex-col focus-within:rounded-xl focus-within:ring-4 focus-within:ring-primary focus-within:ring-opacity-6 md:w-screen'
                }
              >
                <div className="flex flex-row justify-between rounded-xl border border-gray-10 bg-gray-1 focus-within:border-primary focus-within:bg-white">
                  <input
                    className="ml-2 w-full rounded-xl bg-transparent p-2 focus:outline-none"
                    alt="convert to"
                    value={value1}
                    type="number"
                    onChange={(e) => {
                      if (!e.target.value) {
                        setValue1('');
                        setValue2('');
                      } else {
                        setValue1(e.target.value);
                        setValue2(convert(e.target.value, convertFrom, convertTo));
                      }
                    }}
                  />

                  <Select
                    className="z-50 inline-block w-screen max-w-[160px] flex-shrink-0 rounded-lg border-gray-10 p-2"
                    defaultValue={options[0]}
                    id="Dropdown menu"
                    menuPosition="fixed"
                    // menuPlacement={ ? 'top' : 'bottom'}
                    onChange={(e) => {
                      setConvertFrom(e.value);
                      console.log(e.value);
                      if (reverse) {
                        setValue1();
                        setValue1(convert(value2, convertTo, e.value));
                      } else {
                        setValue2();
                        setValue2(convert(value1, e.value, convertTo));
                      }
                    }}
                    options={options}
                    instanceId="dropdown menu"
                  />
                </div>
              </div>
              <div className="flex max-w-[400px] flex-col focus-within:rounded-xl focus-within:ring-4 focus-within:ring-primary focus-within:ring-opacity-6 md:w-screen">
                <div className="z-20 flex flex-row rounded-xl border border-gray-10 bg-gray-1 focus-within:border-primary focus-within:bg-white">
                  <input
                    className="ml-2 w-full rounded-xl bg-transparent p-2 focus:outline-none"
                    value={value2}
                    type="number"
                    onChange={(e) => {
                      if (e.target.value === '') {
                        setValue1('');
                        setValue2('');
                      } else {
                        setValue2(e.target.value);
                        setValue1(convert(e.target.value, convertTo, convertFrom));
                      }
                    }}
                  />

                  <Select
                    className="z-50 inline-block w-screen max-w-[160px] flex-shrink-0 rounded-lg border-gray-10 p-2"
                    defaultValue={options[1]}
                    id="Dropdown menu"
                    menuPosition="fixed"
                    // menuPlacement={reverseMobile ? 'top' : 'button'}
                    options={options}
                    onChange={(e) => {
                      setConvertTo(e.value);
                      if (reverse) {
                        setValue1();
                        setValue1(convert(value2, e.value, convertFrom));
                      } else {
                        setValue2();
                        setValue2(convert(value1, convertFrom, e.value));
                      }
                    }}
                    instanceId="dropdown menu"
                  />
                </div>
              </div>
            </div>
            <div
              className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rotate-90 cursor-pointer items-center justify-center rounded-full border border-gray-20 bg-white p-2 lg:rotate-0"
              onClick={() => {
                setReverse(!reverse);
                if (reverse) {
                  setValue1(value2);
                  setValue2(convert(value2, convertFrom, convertTo));
                } else {
                  setValue2(value1);
                  setValue1(convert(value1, convertTo, convertFrom));
                }
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
