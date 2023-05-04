import { useEffect, useState } from 'react';
import SelectSection from './components/SelectSection';
import CookiesSection from './CookiesSection';
import WhenWhyHowSection from './WhenWhyHowSection';

const TermsAndConditionsOverview = ({ textContent }) => {
  const [itemSelected, setItemSelected] = useState();

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  useEffect(() => {
    if (itemSelected) {
      scrollToSection(itemSelected);
    }
  }, [itemSelected]);

  return (
    <div className="sticky flex flex-col overflow-hidden pt-24 text-start">
      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-primary to-primary-dark py-20">
        <h1 className="mb-8 select-none text-6xl font-semibold text-white">{textContent.HeroSection.title}</h1>
      </div>
      <div className="flex flex-row items-start space-x-16 overflow-hidden py-20 px-24">
        <SelectSection textContent={textContent} itemSelected={itemSelected} setItemSelected={setItemSelected} />
        <div className="flex h-screen w-screen justify-end overflow-y-scroll">
          <div className="flex flex-col">
            <div className="mb-16 flex flex-col" id={textContent.title}>
              <p className="mb-3 text-2xl font-medium">{textContent.title}</p>
              <p className="mb-6">{textContent.subtitle}</p>
            </div>

            <div className="mb-16 flex flex-col" id={textContent.title2}>
              <h2 className="mb-3 text-2xl font-medium">{textContent.title2}</h2>

              <p className="mb-6">{textContent.subtitle2}</p>
            </div>

            <div className="mb-16 flex flex-col" id={textContent.title3}>
              <h2 className="mb-3 text-2xl font-medium">{textContent.title3}</h2>

              <p className="mb-6">{textContent.subtitle3}</p>
            </div>

            <div className="mb-16 flex flex-col" id={textContent.title4}>
              <h2 className="mb-3 text-2xl font-medium">{textContent.title4}</h2>

              <p className="mb-6">{textContent.subtitle4}</p>
            </div>

            <div className="mb-16 flex flex-col" id={textContent.title5}>
              <h2 className="mb-3 text-2xl font-medium">{textContent.title5}</h2>

              <p className="mb-6">{textContent.subtitle5}</p>
            </div>

            <div className="mb-16 flex flex-col" id={textContent.title6}>
              <h2 className="mb-3 text-2xl font-medium">{textContent.title6}</h2>

              <p className="mb-6">{textContent.subtitle6}</p>
            </div>

            <div className="mb-16 flex flex-col" id={textContent.title7}>
              <h2 className="mb-3 text-2xl font-medium">{textContent.title7}</h2>

              <p className="mb-6">{textContent.subtitle7}</p>
            </div>

            <div className="mb-16 flex flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title8}</h2>

              <p className="mb-6">{textContent.subtitle8}</p>
            </div>

            <div className="mb-16 flex flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title9}</h2>

              <p className="mb-6">{textContent.subtitle9}</p>
            </div>

            <div className="mb-16 flex flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title10}</h2>

              <p className="mb-6">{textContent.subtitle10}</p>

              <p className="mb-6">{textContent.subtitle102}</p>

              <p className="mb-6">{textContent.subtitle103}</p>
            </div>

            <div className="mb-16 flex flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title11}</h2>

              <p className="mb-6">{textContent.subtitle11}</p>
            </div>

            <div className="mb-16 flex flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title12}</h2>

              <p className="mb-6">{textContent.subtitle12}</p>

              <p className="mb-6">{textContent.subtitle122}</p>
            </div>

            <div className="mb-16 flex flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title13}</h2>

              <p className="mb-6">{textContent.subtitle13}</p>
            </div>

            <div className="mb-16 flex flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title14}</h2>

              <p className="mb-6">{textContent.subtitle14}</p>

              <p className="mb-6">{textContent.subtitle142}</p>
            </div>

            <div className="mb-16 flex flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title15}</h2>

              <p className="mb-6">{textContent.subtitle15}</p>
            </div>

            <div className="mb-16 flex flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title16}</h2>

              <p className="mb-6">{textContent.subtitle16}</p>

              <p className="mb-6">{textContent.subtitle162}</p>

              <p className="mb-6">{textContent.subtitle163}</p>

              <p className="mb-6">{textContent.subtitle164}</p>

              <p className="mb-6">{textContent.subtitle165}</p>

              <p className="mb-6">{textContent.subtitle166}</p>

              <p className="mb-6">{textContent.subtitle167}</p>
            </div>

            <div className="mb-16 flex flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title17}</h2>

              <p className="mb-6">{textContent.subtitle17}</p>
            </div>

            <div className="mb-16 flex flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title18}</h2>

              <p className="mb-6">{textContent.subtitle18}</p>
            </div>

            <div className="mb-16 flex flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title19}</h2>

              <p className="mb-6">{textContent.subtitle19}</p>
            </div>

            <div className="mb-16 flex flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title20}</h2>

              <p className="mb-6">{textContent.subtitle20}</p>
            </div>

            <div className="mb-16 flex flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title21}</h2>

              <p className="mb-6">{textContent.subtitle21}</p>

              <p className="mb-6">{textContent.subtitle212}</p>
            </div>

            <div className="mb-16 flex flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title22}</h2>

              <p className="mb-6">{textContent.subtitle22}</p>
            </div>

            <div className="mb-16 flex flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title23}</h2>

              <p className="mb-6">{textContent.subtitle23}</p>

              <p className="mb-6">{textContent.subtitle232}</p>

              <p className="mb-6">{textContent.subtitle233}</p>
            </div>

            <div className="mb-16 flex flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title24}</h2>

              <p className="mb-6">{textContent.subtitle24}</p>

              <p className="mb-6">{textContent.subtitle242}</p>

              <p className="mb-6">{textContent.subtitle243}</p>

              <p className="mb-6">{textContent.subtitle244}</p>

              <p className="mb-6">{textContent.subtitle245}</p>

              <p className="mb-6">{textContent.subtitle246}</p>
            </div>

            <div className="mb-16 flex flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title25}</h2>

              <p className="mb-6">{textContent.subtitle25}</p>
            </div>

            <div className="mb-16 flex flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title26}</h2>

              <p className="mb-6">{textContent.subtitle26}</p>
            </div>

            <div className="mb-16 flex w-full flex-col">
              <h2 className="mb-3 text-2xl font-medium">{textContent.title27}</h2>

              <p className="mb-6">{textContent.privacy_policy_intro_part1}</p>

              <p className="mb-6">{textContent.privacy_policy_intro_part2}</p>

              <p className="mb-6">{textContent.privacy_policy_intro_part3}</p>

              <h5 className="mb-3 text-2xl font-medium">{textContent.privacy_policy_person_responsible_title}</h5>

              <p className="mb-6">{textContent.privacy_policy_person_responsible_part1}</p>

              <div className="-mx-6 flex flex-col overflow-hidden overflow-x-auto px-6">
                <table className="table-auto bg-white">
                  <tr>
                    <th className="border border-cool-gray-30 bg-cool-gray-5 py-2 px-8">
                      {textContent.privacy_policy_table_row1_column1}
                    </th>
                    <th className="border border-cool-gray-30 bg-cool-gray-5 py-2 px-8">
                      {textContent.privacy_policy_table_row1_column2}
                    </th>
                  </tr>
                  <tr>
                    <td className="border border-cool-gray-20 p-2 px-4">
                      {textContent.privacy_policy_table_row2_column1}
                    </td>
                    <td className="border border-cool-gray-20 p-2 px-4">
                      {textContent.privacy_policy_table_row2_column2}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-cool-gray-20 p-2 px-4">
                      {textContent.privacy_policy_table_row3_column1}
                    </td>
                    <td className="border border-cool-gray-20 p-2 px-4">
                      {textContent.privacy_policy_table_row3_column2}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-cool-gray-20 p-2 px-4">
                      {textContent.privacy_policy_table_row4_column1}
                    </td>
                    <td className="border border-cool-gray-20 p-2 px-4">
                      {textContent.privacy_policy_table_row4_column2}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-cool-gray-20 p-2 px-4">
                      {textContent.privacy_policy_table_row5_column1}
                    </td>
                    <td className="border border-cool-gray-20 p-2 px-4">
                      {textContent.privacy_policy_table_row5_column2}
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-cool-gray-20 p-2 px-4">
                      {textContent.privacy_policy_table_row6_column1}
                    </td>
                    <td className="border border-cool-gray-20 p-2 px-4">
                      {textContent.privacy_policy_table_row6_column2}
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-cool-gray-20 p-2 px-4">
                      {textContent.privacy_policy_table_row7_column1}
                    </td>
                    <td className="border border-cool-gray-20 p-2 px-4">
                      {textContent.privacy_policy_table_row7_column2}
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-cool-gray-20 p-2 px-4">
                      {textContent.privacy_policy_table_row8_column1}
                    </td>
                    <td className="border border-cool-gray-20 p-2 px-4">
                      {textContent.privacy_policy_table_row8_column2}
                    </td>
                  </tr>
                </table>
              </div>

              <p className="mb-6 mt-4">{textContent.privacy_policy_person_responsible_part2}</p>
            </div>
            <CookiesSection textContent={textContent} />
            <WhenWhyHowSection textContent={textContent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsOverview;
