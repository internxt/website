import { InxtTable } from './components/InxtTable';
import { CompetitorTable } from './components/CompetitorTable';

export const TablesSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden py-20 px-4">
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        {/* Tables Section */}
        {/* Tables 1 */}
        <div className="flex flex-col items-center gap-10 lg:gap-16">
          <p className="text-center text-3xl font-semibold text-gray-100">{textContent.privacyAndSecurity.title}</p>
          <div className=" flex h-full flex-col gap-10 md:flex-row">
            <InxtTable textContent={textContent.privacyAndSecurity.inxtTable} />
            <CompetitorTable textContent={textContent.privacyAndSecurity.pCloudTable} />
          </div>
        </div>
        {/* Tables 2 */}
        <div className="flex flex-col items-center gap-10 lg:gap-16">
          <p className="text-center text-3xl font-semibold text-gray-100">{textContent.costAndValue.title}</p>
          <div className=" flex h-full flex-col gap-10 md:flex-row">
            <div>
              <InxtTable textContent={textContent.costAndValue.inxtTable} />
            </div>

            <CompetitorTable textContent={textContent.costAndValue.pCloudTable} />
          </div>
        </div>
        {/* Tables 3 */}
        <div className="flex flex-col items-center gap-10 lg:gap-16">
          <p className="text-center text-3xl font-semibold text-gray-100">{textContent.transparencyAndTrust.title}</p>
          <div className=" flex h-full flex-col gap-10 md:flex-row">
            <InxtTable textContent={textContent.transparencyAndTrust.inxtTable} />
            <div>
              <CompetitorTable textContent={textContent.transparencyAndTrust.pCloudTable} />
            </div>
          </div>
        </div>
        {/* Tables 4 */}
        <div className="flex flex-col items-center gap-10 lg:gap-16">
          <p className="text-center text-3xl font-semibold text-gray-100">{textContent.userExpAndFeatures.title}</p>
          <div className="flex h-full flex-col gap-10 md:flex-row">
            <div>
              <InxtTable textContent={textContent.userExpAndFeatures.inxtTable} />
            </div>
            <CompetitorTable textContent={textContent.userExpAndFeatures.pCloudTable} />
          </div>
        </div>
      </div>
    </section>
  );
};
