import { InxtTable } from './components/InxtTable';
import { CompetitorTable } from './components/CompetitorTable';

export const TablesSection = ({ textContent }) => {
  return (
    <section
      className="overflow-hidden px-4 py-20"
      style={{ background: 'linear-gradient(180deg, #F9F9FC 0%, #FFFFFF 100%)' }}
    >
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
          <p className="w-[832px] text-xl text-gray-80">{textContent.description}</p>
        </div>

        <div className="flex flex-col items-center gap-10 lg:gap-16">
          <p className="text-center text-3xl font-semibold text-gray-100">{textContent.mainTable.title}</p>
          <div className=" flex h-full flex-col md:flex-row">
            <InxtTable textContent={textContent.mainTable.inxtTable} />
            <CompetitorTable
              textContent={textContent.mainTable.pCloudTable}
              logo="/images/comparison/competitors/pCloud.webp"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 lg:gap-16">
          <p className="text-center text-3xl font-semibold text-gray-100">{textContent.costAndValue.title}</p>
          <div className=" flex h-full flex-col md:flex-row">
            <InxtTable textContent={textContent.costAndValue.inxtTable} />
            <CompetitorTable
              textContent={textContent.costAndValue.pCloudTable}
              logo="/images/comparison/competitors/pCloud.webp"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 lg:gap-16">
          <p className="text-center text-3xl font-semibold text-gray-100">{textContent.transparencyAndTrust.title}</p>
          <div className=" flex h-full flex-col md:flex-row">
            <InxtTable textContent={textContent.transparencyAndTrust.inxtTable} />
            <CompetitorTable
              textContent={textContent.transparencyAndTrust.pCloudTable}
              logo="/images/comparison/competitors/pCloud.webp"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-10 lg:gap-16">
          <p className="text-center text-3xl font-semibold text-gray-100">{textContent.userExpAndFeatures.title}</p>
          <div className="flex h-full flex-col md:flex-row">
            <InxtTable textContent={textContent.userExpAndFeatures.inxtTable} />
            <CompetitorTable
              textContent={textContent.userExpAndFeatures.pCloudTable}
              logo="/images/comparison/competitors/pCloud.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
