import { items } from '@internxt/lib';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const ConversionTableSection = ({ textContent }) => {
  const table = [
    { unit: 'Unit', abbreviation: 'Abbreviation', decimalValue: 'Decimal Value', decimalSize: 'Decimal Size' },
    { unit: 'Bit', abbreviation: 'b', decimalValue: '0 or 1', decimalSize: '⅛ of a byte' },
    { unit: 'Byte', abbreviation: 'B', decimalValue: '8 bits', decimalSize: '1 byte' },
    {
      unit: 'Kilobyte',
      abbreviation: 'kB',
      decimalValue: (
        <>
          <p>
            100<sup>1</sup> bytes
          </p>
        </>
      ),
      decimalSize: '1,000 bytes',
    },
    {
      unit: 'Megabyte',
      abbreviation: 'MB',
      decimalValue: (
        <>
          <p>
            1000<sup>2</sup> bytes
          </p>
        </>
      ),
      decimalSize: '1,000,000 bytes',
    },
    {
      unit: 'Gigabyte',
      abbreviation: 'GB',
      decimalValue: (
        <>
          <p>
            1000<sup>3</sup> bytes
          </p>
        </>
      ),
      decimalSize: '1,000,000,000 bytes',
    },
    {
      unit: 'Terabyte',
      abbreviation: 'TB',
      decimalValue: (
        <>
          <p>
            1000<sup>4</sup> bytes
          </p>
        </>
      ),
      decimalSize: '1,000,000,000,000 bytes',
    },
    {
      unit: 'Petabyte',
      abbreviation: 'PB',
      decimalValue: (
        <>
          <p>
            1000<sup>5</sup> bytes
          </p>
        </>
      ),
      decimalSize: '1,000,000,000,000,000 bytes',
    },
    {
      unit: 'Exabyte',
      abbreviation: 'EB',
      decimalValue: (
        <>
          <p>
            1000<sup>6</sup> bytes
          </p>
        </>
      ),
      decimalSize: '1,000,000,000,000,000,000 bytes',
    },
    {
      unit: 'Zettabyte',
      abbreviation: 'ZB',
      decimalValue: (
        <>
          <p>
            1000<sup>7</sup> bytes
          </p>
        </>
      ),
      decimalSize: '1,000,000,000,000,000,000,000 bytes',
    },
    {
      unit: 'Yottabyte',
      abbreviation: 'YB',
      decimalValue: '1000* bytes',
      decimalSize: '1,000,000,000,000,000,000,000,000 bytes',
    },
  ];

  return (
    <section className="overflow-scroll">
      <div className="flex flex-col items-center justify-center space-y-16 py-20 px-10">
        <div className="flex w-full max-w-[835px] flex-col space-y-4 text-center">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="text-xl font-normal text-gray-100">{textContent.description}</p>
        </div>
        <div className="flex items-start ">
          <div className="flex w-[740px] flex-col rounded-lg border-gray-10">
            {table.map((item, index) => (
              <div
                key={item.unit}
                className="flex flex-row first:rounded-t-lg first:font-medium first:text-gray-100 last:rounded-b-lg odd:bg-gray-5 even:bg-white"
              >
                <div className="flex w-full max-w-[105px] flex-col">
                  <p className="py-2 pl-4 pr-6 text-base">{item.unit}</p>
                </div>
                <div className="flex w-full max-w-[133px] flex-col">
                  <p className="py-2 pl-4 pr-6 text-base">{item.abbreviation}</p>
                </div>
                <div className="flex w-full max-w-[144px] flex-col">
                  <p className="py-2 pl-4 pr-6 text-base">{item.decimalValue}</p>
                </div>
                <div className="flex w-full max-w-[448px] flex-col">
                  <p className="py-2 pl-4 pr-6 text-base">{item.decimalSize}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionTableSection;
