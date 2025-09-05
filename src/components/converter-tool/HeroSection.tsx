import React, { useEffect, useState } from 'react';
import { ArrowsLeftRight } from '@phosphor-icons/react';
import Select from 'react-select';

const allOptions = [
  { value: 'bit', label: 'Bits (bit)' },
  { value: 'b', label: 'Bytes (B)' },
  { value: 'kb', label: 'Kilobytes (KB)' },
  { value: 'mb', label: 'Megabytes (MB)' },
  { value: 'gb', label: 'Gigabytes (GB)' },
  { value: 'tb', label: 'Terabytes (TB)' },
  { value: 'pb', label: 'Petabytes (PB)' },
  { value: 'eb', label: 'Exabytes (EB)' },
  { value: 'zb', label: 'Zettabytes (ZB)' },
  { value: 'yb', label: 'Yottabytes (YB)' },
  { value: 'kib', label: 'Kibibytes (KiB)' },
  { value: 'mib', label: 'Mebibytes (MiB)' },
  { value: 'gib', label: 'Gibibytes (GiB)' },
  { value: 'tib', label: 'Tebibytes (TiB)' },
  { value: 'pib', label: 'Pebibytes (PiB)' },
  { value: 'eib', label: 'Exbibytes (EiB)' },
  { value: 'zib', label: 'Zebibytes (ZiB)' },
  { value: 'yib', label: 'Yobibytes (YiB)' },
];

interface HeroSectionProps {
  textContent: {
    title: string;
    description: string;
    description1: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ textContent }) => {
  const [value1, setValue1] = useState<number>(1);
  const [value2, setValue2] = useState<number>(1000);
  const [convertFrom, setConvertFrom] = useState('tb');
  const [convertTo, setConvertTo] = useState('gb');
  const [reverse, setReverse] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  function convert(valueToConvert: number, fromUnit: string, toUnit: string): number {
    if (valueToConvert === 0) return 0;
    if (fromUnit === toUnit) return valueToConvert;

    const decimalUnits: Record<string, number> = {
      bit: 0.125, // 1 bit = 0.125 bytes
      b: 1,
      kb: 1e3,
      mb: 1e6,
      gb: 1e9,
      tb: 1e12,
      pb: 1e15,
      eb: 1e18,
      zb: 1e21,
      yb: 1e24,
    };

    const binaryUnits: Record<string, number> = {
      bit: 0.125,
      b: 1,
      kib: 1024,
      mib: Math.pow(1024, 2),
      gib: Math.pow(1024, 3),
      tib: Math.pow(1024, 4),
      pib: Math.pow(1024, 5),
      eib: Math.pow(1024, 6),
      zib: Math.pow(1024, 7),
      yib: Math.pow(1024, 8),
    };

    const units: Record<string, number> = {
      ...decimalUnits,
      ...binaryUnits,
    };

    const valueInBytes = valueToConvert * units[fromUnit];
    const convertedValue = valueInBytes / units[toUnit];

    if (convertedValue < 0.001) {
      return Number(convertedValue.toExponential(6));
    } else if (convertedValue > 1e15) {
      return Number(convertedValue.toExponential(6));
    } else {
      return Number(convertedValue.toPrecision(12));
    }
  }

  const updateValues = (newValue: number, isFromFirst: boolean) => {
    if (isUpdating) return;

    setIsUpdating(true);

    if (isFromFirst) {
      const converted = convert(newValue, convertFrom, convertTo);
      setValue2(converted);
    } else {
      const converted = convert(newValue, convertTo, convertFrom);
      setValue1(converted);
    }

    setTimeout(() => setIsUpdating(false), 10);
  };

  useEffect(() => {
    if (isUpdating) return;

    if (reverse) {
      const converted = convert(value2, convertTo, convertFrom);
      setValue1(converted);
    } else {
      const converted = convert(value1, convertFrom, convertTo);
      setValue2(converted);
    }
  }, [convertFrom, convertTo]);

  const handleSwap = () => {
    const tempValue = value1;
    const tempUnit = convertFrom;

    setValue1(value2);
    setValue2(tempValue);
    setConvertFrom(convertTo);
    setConvertTo(tempUnit);
    setReverse(!reverse);
  };

  const handleInput1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === '' ? 0 : Number(e.target.value);
    setValue1(newValue);
    updateValues(newValue, true);
  };

  const handleInput2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === '' ? 0 : Number(e.target.value);
    setValue2(newValue);
    updateValues(newValue, false);
  };

  const handleFromUnitChange = (selectedOption: any) => {
    if (selectedOption) {
      setConvertFrom(selectedOption.value);
    }
  };

  const handleToUnitChange = (selectedOption: any) => {
    if (selectedOption) {
      setConvertTo(selectedOption.value);
    }
  };

  return (
    <section className="pb-20 pt-32">
      <div className="mx-3 flex md:mx-10 lg:mx-32">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center space-y-20">
          <div className="flex w-full max-w-[700px] flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</h1>
            <p className="pt-5 text-lg font-semibold text-gray-80 lg:text-xl">{textContent.description}</p>
            <p className="pt-5 text-lg font-normal text-gray-80 lg:text-xl">{textContent.description1}</p>
          </div>

          <div className="relative w-full rounded-2xl border-4 border-primary/7 bg-primary/2 p-9 lg:flex lg:w-auto">
            <div className="flex flex-col items-center justify-center gap-y-4 lg:flex-row lg:gap-20 lg:gap-y-0">
              <div className="flex max-w-[400px] flex-col focus-within:rounded-xl focus-within:ring-4 focus-within:ring-primary focus-within:ring-opacity-6 md:w-screen">
                <div className="flex flex-row justify-between rounded-xl border border-gray-10 bg-gray-1 focus-within:border-primary focus-within:bg-white">
                  <input
                    className="ml-2 w-full rounded-xl bg-transparent p-2 focus:outline-none"
                    alt="convert from"
                    value={value1 === 0 ? '' : value1}
                    autoComplete="off"
                    type="number"
                    placeholder="0"
                    onChange={handleInput1Change}
                  />
                  <Select
                    className="inline-block w-screen max-w-[180px] flex-shrink-0 rounded-lg border-gray-10 p-2"
                    value={allOptions.find((option) => option.value === convertFrom)}
                    id="from-unit-dropdown"
                    menuPosition="absolute"
                    onChange={handleFromUnitChange}
                    options={allOptions}
                    instanceId="from-unit-dropdown"
                    isSearchable={false}
                  />
                </div>
              </div>

              <div className="flex max-w-[400px] flex-col focus-within:rounded-xl focus-within:ring-4 focus-within:ring-primary focus-within:ring-opacity-6 md:w-screen">
                <div className="flex flex-row rounded-xl border border-gray-10 bg-gray-1 focus-within:border-primary focus-within:bg-white">
                  <input
                    className="ml-2 w-full rounded-xl bg-transparent p-2 focus:outline-none"
                    alt="convert to"
                    value={value2 === 0 ? '' : value2}
                    type="number"
                    autoComplete="off"
                    placeholder="0"
                    onChange={handleInput2Change}
                  />
                  <Select
                    className="inline-block w-screen max-w-[180px] flex-shrink-0 rounded-lg border-gray-10 p-2"
                    value={allOptions.find((option) => option.value === convertTo)}
                    id="to-unit-dropdown"
                    menuPosition="absolute"
                    options={allOptions}
                    onChange={handleToUnitChange}
                    instanceId="to-unit-dropdown"
                    isSearchable={false}
                  />
                </div>
              </div>
            </div>

            <button
              className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 rotate-90 cursor-pointer items-center justify-center rounded-full border border-gray-20 bg-white p-2 transition-transform hover:scale-105 lg:rotate-0"
              onClick={handleSwap}
              aria-label="Intercambiar unidades"
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
