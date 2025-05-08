import Image from 'next/legacy/image';
import Link from 'next/link';
import { getImage } from '@/lib/getImage';

const language = {
  en: 'EN',
  es: 'ES',
};

const ConversionTableSection = ({ textContent, lang }) => {
  const langUpperCase = language[lang] || 'EN';
  const languageForImage = ['zh', 'zh-tw', 'ru', 'en'].includes(lang) ? 'en' : lang;

  const table = [
    {
      unit: textContent.header.unit,
      abbreviation: textContent.header.abbr,
      decimalValue: textContent.header.decValue,
      decimalSize: textContent.header.decSize,
    },
    {
      unit: textContent.firstRow.unit,
      abbreviation: textContent.firstRow.abbr,
      decimalValue: textContent.firstRow.decValue,
      decimalSize: textContent.firstRow.decSize,
    },
    { unit: 'Byte', abbreviation: 'B', decimalValue: '8 bits', decimalSize: '1 byte' },
    {
      unit: 'Kilobyte',
      abbreviation: 'kB',
      decimalValue: (
        <>
          1000<sup>1</sup> bytes
        </>
      ),
      decimalSize: '1,000 bytes',
    },
    {
      unit: 'Megabyte',
      abbreviation: 'MB',
      decimalValue: (
        <>
          1000<sup>2</sup> bytes
        </>
      ),
      decimalSize: '1,000,000 bytes',
    },
    {
      unit: 'Gigabyte',
      abbreviation: 'GB',
      decimalValue: (
        <>
          1000<sup>3</sup> bytes
        </>
      ),
      decimalSize: '1,000,000,000 bytes',
    },
    {
      unit: 'Terabyte',
      abbreviation: 'TB',
      decimalValue: (
        <>
          1000<sup>4</sup> bytes
        </>
      ),
      decimalSize: '1,000,000,000,000 bytes',
    },
    {
      unit: 'Petabyte',
      abbreviation: 'PB',
      decimalValue: (
        <>
          1000<sup>5</sup> bytes
        </>
      ),
      decimalSize: '1,000,000,000,000,000 bytes',
    },
    {
      unit: 'Exabyte',
      abbreviation: 'EB',
      decimalValue: (
        <>
          1000<sup>6</sup> bytes
        </>
      ),
      decimalSize: '1,000,000,000,000,000,000 bytes',
    },
    {
      unit: 'Zettabyte',
      abbreviation: 'ZB',
      decimalValue: (
        <>
          1000<sup>7</sup> bytes
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
    <section className="bg-gray-1">
      <div className="flex flex-col space-y-16 py-16 lg:items-center lg:justify-center">
        <div className="flex w-full flex-col items-center justify-center px-6">
          <Image
            src={getImage(`/banners/Ban_Internext_728x90_${languageForImage}.jpg`)}
            alt="File Arrow Up icon"
            width={800}
            height={110}
            quality={100}
            style={{ cursor: 'pointer' }}
            onClick={() =>
              window.open(
                `https://www.bitdefender.com/pages/consumer/${languageForImage}/new/trial/ts-trial-3m/internxt/`,
                '_blank',
                'noopener noreferrer',
              )
            }
          />
        </div>
        <div className="flex w-full max-w-[840px] flex-col items-center justify-center space-y-4 px-5 text-center">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="text-xl font-normal text-gray-100">{textContent.description}</p>
        </div>
        <div
          className="flex 
         items-start overflow-scroll px-5 lg:overflow-hidden"
        >
          <div className="flex max-w-[750px] flex-col rounded-lg border-gray-10">
            {table.map((item) => (
              <div
                key={item.unit}
                className="flex flex-row text-base first:rounded-t-lg first:font-medium first:text-white last:rounded-b-lg odd:bg-primary odd:bg-opacity-6 even:bg-white first-of-type:bg-primary"
              >
                <div className="flex w-full max-w-[105px]   flex-col">
                  <p className="py-2 pl-4 pr-6">{item.unit}</p>
                </div>
                <div className="flex w-full max-w-[133px]   flex-col">
                  <p className="py-2 pl-4 pr-6">{item.abbreviation}</p>
                </div>
                <div className="flex w-full max-w-[144px]   flex-col">
                  <p className="py-2 pl-4 pr-6">{item.decimalValue}</p>
                </div>
                <div className="flex w-screen max-w-[500px]  flex-col">
                  <p className="py-2 pl-4 pr-6">{item.decimalSize}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex cursor-pointer">
          <Link href="/password-checker" target="_blank" className="mx-5 flex max-w-4xl cursor-pointer flex-row">
            <Image
              src={`/images/converter-tool/PasswordChecker${langUpperCase}.webp`}
              width={897}
              height={350}
              layout="intrinsic"
              loading="lazy"
              alt="Password checker"
            />
          </Link>
        </div>
        <div className="flex w-full flex-col items-center justify-center px-6">
          <Image
            src={getImage(`/banners/Ban_Internext_728x90_${languageForImage}.jpg`)}
            alt="File Arrow Up icon"
            width={800}
            height={110}
            quality={100}
            style={{ cursor: 'pointer' }}
            onClick={() =>
              window.open(
                `https://www.bitdefender.com/pages/consumer/${languageForImage}/new/trial/ts-trial-3m/internxt/`,
                '_blank',
                'noopener noreferrer',
              )
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ConversionTableSection;
