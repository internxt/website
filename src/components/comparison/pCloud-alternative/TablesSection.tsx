/* eslint-disable @next/next/no-img-element */
import { InxtTable } from './components/InxtTable';
import { CompetitorTable } from './components/CompetitorTable';

export const TablesSection = ({ textContent }) => {
  return (
    <section
      className="flex overflow-hidden px-4 lg:py-20"
      style={{ background: 'linear-gradient(180deg, #F9F9FC 0%, #FFFFFF 100%)' }}
    >
      <div className="flex flex-col items-center justify-center gap-16 ">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</h2>
          <p className="w-[330px] text-base text-gray-80 lg:w-[832px] lg:text-xl">{textContent.description}</p>
          <div className="flex h-full w-screen flex-row items-center justify-start overflow-x-auto pt-6 lg:justify-center">
            <InxtTable textContent={textContent.mainTable.inxtTable} />
            <CompetitorTable
              textContent={textContent.mainTable.pCloudTable}
              logo="/images/comparison/competitors/pCloud.webp"
            />
          </div>
          <div className="duration-250 flex flex-row items-center justify-start space-x-4 opacity-100 transition-opacity delay-1000 group-hover:opacity-0 xl:hidden">
            <img
              loading="lazy"
              className="h-8 w-8 object-cover object-center"
              src="/images/comparison/drag_horizontal.webp"
              draggable="false"
              alt="Drag horizontal"
            />
            <div className="mt-1 flex flex-col items-start justify-center text-left text-sm font-medium leading-tight text-gray-40">
              <span>{textContent.drag.line1}</span>
              <span>{textContent.drag.line2}</span>
            </div>
          </div>
        </div>

        {[
          { title: textContent.costAndValue.title, data: textContent.costAndValue },
          { title: textContent.transparencyAndTrust.title, data: textContent.transparencyAndTrust },
          { title: textContent.userExpAndFeatures.title, data: textContent.userExpAndFeatures },
        ].map((section, index) => (
          <div key={index} className="flex w-screen flex-col items-center gap-10 overflow-x-auto lg:gap-16">
            <p className="w-[330px] text-center text-3xl font-semibold text-gray-100 lg:w-full">{section.title}</p>
            <div className="w-full overflow-x-auto">
              <div className="flex h-full min-w-[600px] flex-row justify-start sm:min-w-full lg:justify-center">
                <InxtTable textContent={section.data.inxtTable} />
                <CompetitorTable
                  textContent={section.data.pCloudTable}
                  logo="/images/comparison/competitors/pCloud.webp"
                />
              </div>
            </div>
            <div className="duration-250 flex flex-row items-center justify-start space-x-4 opacity-100 transition-opacity delay-1000 group-hover:opacity-0 xl:hidden">
              <img
                loading="lazy"
                className="h-8 w-8 object-cover object-center"
                src="/images/comparison/drag_horizontal.webp"
                draggable="false"
                alt="Drag horizontal"
              />
              <div className="mt-1 flex flex-col items-start justify-center text-left text-sm font-medium leading-tight text-gray-40">
                <span>{textContent.drag.line1}</span>
                <span>{textContent.drag.line2}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
