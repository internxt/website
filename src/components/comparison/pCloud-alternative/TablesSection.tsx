/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { InxtTable } from './components/InxtTable';
import { CompetitorTable } from './components/CompetitorTable';
import { CaretDown, CaretUp } from '@phosphor-icons/react';

type TablesSectionProps = {
  textContent: {
    title: string;
    description: string;
    mainTable: {
      title?: string;
      description?: string;
      inxtTable: any;
      competitorTable: any;
    };
    costAndValue?: {
      title: string;
      description?: string;
      inxtTable: any;
      competitorTable: any;
    };
    transparencyAndTrust?: {
      title: string;
      description?: string;
      inxtTable: any;
      competitorTable: any;
    };
    userExpAndFeatures?: {
      title: string;
      description?: string;
      inxtTable: any;
      competitorTable: any;
    };
  };
  logo?: string;
  competitor: string;
};

export const TablesSection = ({ textContent, logo, competitor }: TablesSectionProps) => {
  const availableSections = [
    textContent.costAndValue
      ? {
          title: textContent.costAndValue.title,
          data: textContent.costAndValue,
        }
      : null,
    textContent.transparencyAndTrust
      ? {
          title: textContent.transparencyAndTrust.title,
          data: textContent.transparencyAndTrust,
        }
      : null,
    textContent.userExpAndFeatures
      ? {
          title: textContent.userExpAndFeatures.title,
          data: textContent.userExpAndFeatures,
        }
      : null,
  ].filter((section): section is { title: string; data: any } => section !== null);

  const [openSections, setOpenSections] = useState<Record<number, boolean>>(
    availableSections.reduce(
      (acc, _, index) => ({
        ...acc,
        [index]: false,
      }),
      {},
    ),
  );

  const toggleSection = (index: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const parseText = (text: string) => (typeof text === 'string' ? text.replace(/{{competitor}}/g, competitor) : text);

  return (
    <section className="flex flex-col items-center justify-center gap-8 overflow-hidden bg-white py-8 lg:py-20">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="text-30 font-semibold text-gray-100 lg:text-3xl">{parseText(textContent.title)}</h2>
        <p className="w-[330px] text-base text-gray-80 lg:w-[832px] lg:text-xl">{parseText(textContent.description)}</p>

        {textContent.mainTable && (
          <>
            <div className="flex flex-col items-center justify-center">
              {textContent.mainTable.title && (
                <h2 className="pb-6 pt-8 text-30 font-semibold text-gray-100 lg:text-3xl">
                  {textContent.mainTable.title}
                </h2>
              )}
              {textContent.mainTable.description && (
                <p className="w-[330px]  text-base text-gray-80 lg:w-[832px] lg:text-xl">
                  {textContent.mainTable.description}
                </p>
              )}
              <div className="flex h-full w-screen flex-row items-center justify-center pb-6 pt-6">
                <InxtTable textContent={textContent.mainTable.inxtTable} />
                <CompetitorTable textContent={textContent.mainTable.competitorTable} logo={logo} />
              </div>
            </div>
          </>
        )}
      </div>

      {availableSections.length > 0 && (
        <div className="flex w-full flex-col items-center justify-center gap-6 lg:gap-16">
          {availableSections.map((section, index) => {
            const isOpen = !!openSections[index];
            return (
              <div key={index} className="flex w-screen flex-col items-center gap-2 lg:gap-16">
                <div className="h-[1px] w-[360px] bg-green-120 lg:hidden" />

                <button
                  onClick={() => toggleSection(index)}
                  className="flex w-[330px] cursor-pointer items-center justify-between pt-5 text-left text-2xl font-semibold text-gray-100 transition-opacity hover:opacity-80 lg:hidden"
                  aria-expanded={isOpen}
                  aria-controls={`section-content-${index}`}
                >
                  <span>{section.title}</span>
                  {isOpen ? (
                    <CaretDown className="h-8 w-8 shrink-0 text-primary" />
                  ) : (
                    <CaretUp className="h-8 w-8 shrink-0 text-primary" />
                  )}
                </button>

                <div className="flex flex-col gap-6">
                  <p className="hidden w-[330px] text-center text-3xl font-semibold text-gray-100 lg:block lg:w-full">
                    {section.title}
                  </p>

                  {section.data.description && (
                    <p className="text- hidden w-[330px] pb-5 text-center font-normal text-gray-55 lg:block lg:w-[832px] lg:text-xl">
                      {parseText(section.data.description)}
                    </p>
                  )}
                </div>
                <div
                  id={`section-content-${index}`}
                  className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  } lg:block lg:max-h-none lg:opacity-100`}
                >
                  <div className="flex h-full w-screen flex-row justify-center sm:min-w-full">
                    <InxtTable textContent={section.data.inxtTable} />
                    <CompetitorTable textContent={section.data.competitorTable} logo={logo} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
