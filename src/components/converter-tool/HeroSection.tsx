import React, { useEffect, useState } from 'react';
import { ArrowsLeftRight } from '@phosphor-icons/react';
import Select from 'react-select';
import Header from '@/components/shared/Header';

const options = [
  { value: 'b', label: 'Bytes' },
  { value: 'kb', label: 'Kilobytes' },
  { value: 'mb', label: 'Megabytes' },
  { value: 'gb', label: 'Gigabytes' },
  { value: 'tb', label: 'Terabytes' },
];

const HeroSection = ({ textContent }) => {
  const [value1, setValue1] = useState<number>(1);
  const [value2, setValue2] = useState<number>(1000);
  const [convertFrom, setConvertFrom] = useState('tb');
  const [convertTo, setConvertTo] = useState('gb');
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (!value1 && !value2) return;
    if (reverse) {
      setValue2(convert(value1, convertFrom, convertTo));
    } else {
      setValue1(convert(value2, convertTo, convertFrom));
    }
  }, [convertFrom, convertTo, reverse]);

  // TODO: Fix this function
  // function convert(valueToConvert, convertFromMeasure, convertToMeasure) {
  //   const valueConverted = bytes.format(bytes.parse(valueToConvert + convertFromMeasure), {
  //     unit: convertToMeasure,
  //     decimalPlaces: 100,
  //     unitSeparator: ' ',
  //   });
  //   const valueConvertedNumber = valueConverted.split(' ')[0];
  //   return valueConvertedNumber;
  // }

  //Temporal function to convert
  function convert(valueToConvert: number, convertFromMeasure: string, convertToMeasure: string): number {
    const units: Record<string, number> = {
      b: 1,
      kb: 1000,
      mb: 1000 * 1000,
      gb: 1000 * 1000 * 1000,
      tb: 1000 * 1000 * 1000 * 1000,
    };

    const valueInBytes = valueToConvert * units[convertFromMeasure];
    const valueConverted = valueInBytes / units[convertToMeasure];

    return Number(valueConverted.toFixed(15));
  }

  return (
    <section className="pb-20 pt-32">
      <div className="mx-3 flex md:mx-10 lg:mx-32">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center space-y-20">
          {/* Title and subtitle */}
          <div className=" flex w-full max-w-[700px] flex-col items-center justify-center text-center">
            <Header isToolsPage>{textContent.title}</Header>
            <p className="pt-5 text-lg font-semibold text-gray-80 lg:text-xl">{textContent.description}</p>
            <p className="pt-5 text-lg font-normal text-gray-80 lg:text-xl">{textContent.description1}</p>
          </div>
          {/* Container */}
          <div className="relative w-full rounded-2xl border-4 border-primary/7 bg-primary/2 p-9 lg:flex lg:w-auto">
            <div
              className={`flex ${
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
                    autoComplete="off"
                    type="number"
                    onChange={(e) => {
                      if (!e.target.value) {
                        setValue1(0);
                      } else {
                        setValue1(Number(e.target.value));
                        setValue2(convert(Number(e.target.value), convertFrom, convertTo));
                      }
                    }}
                  />

                  <Select
                    className={`${
                      !reverse ? 'z-10' : null
                    } inline-block w-screen max-w-[160px] flex-shrink-0 rounded-lg border-gray-10 p-2`}
                    defaultValue={options[4]}
                    id="Dropdown menu"
                    menuPosition="absolute"
                    onChange={(e) => {
                      if (e) {
                        setConvertFrom(e.value);
                        if (!value2 && !value1) {
                          return;
                        } else {
                          if (reverse) {
                            setValue1(0);
                            setValue1(convert(value2, convertTo, e.value));
                          } else {
                            setValue2(0);
                            setValue2(convert(value1, e.value, convertTo));
                          }
                        }
                      }
                    }}
                    options={options}
                    instanceId="dropdown menu"
                  />
                </div>
              </div>
              <div className="flex max-w-[400px] flex-col focus-within:rounded-xl focus-within:ring-4 focus-within:ring-primary focus-within:ring-opacity-6 md:w-screen">
                <div className="flex flex-row rounded-xl border border-gray-10 bg-gray-1 focus-within:border-primary focus-within:bg-white">
                  <input
                    className="ml-2 w-full rounded-xl bg-transparent p-2 focus:outline-none"
                    value={value2}
                    type="number"
                    autoComplete="off"
                    onChange={(e) => {
                      if (e.target.value === '') {
                        setValue2(0);
                      } else {
                        setValue2(Number(e.target.value));
                        setValue1(convert(Number(e.target.value), convertTo, convertFrom));
                      }
                    }}
                  />

                  <Select
                    className={`absolute ${
                      reverse ? 'z-10' : null
                    } inline-block w-screen max-w-[160px] flex-shrink-0 rounded-lg border-gray-10 p-2`}
                    defaultValue={options[3]}
                    id="Dropdown menu"
                    menuPosition="absolute"
                    options={options}
                    onChange={(e) => {
                      if (e) {
                        setConvertTo(e.value);
                        if (!value1 && !value2) {
                          return;
                        } else {
                          if (reverse) {
                            setValue1(convert(value2, e.value, convertFrom));
                          } else {
                            setValue2(convert(value1, convertFrom, e.value));
                          }
                        }
                      }
                    }}
                    instanceId="dropdown menu"
                  />
                </div>
              </div>
            </div>
            <button
              className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rotate-90 cursor-pointer items-center justify-center rounded-full border border-gray-20 bg-white p-2 lg:rotate-0"
              onClick={() => {
                setReverse(!reverse);
                if (reverse && value1) {
                  setValue1(value2);
                  setValue2(convert(value2, convertFrom, convertTo));
                } else {
                  if (!value2) return;
                  setValue2(value1);
                  setValue1(convert(value1, convertTo, convertFrom));
                }
              }}
            >
              <ArrowsLeftRight size={28} weight="light" className="text-gray-60" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
