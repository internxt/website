import React from 'react';

const CookiesSection = ({ textContent, lang }) => {
  return (
    <>
      <div className="mb-6 flex flex-col" id={textContent.title32}>
        <h2 className="mb-3 text-2xl font-medium">{textContent.title32}</h2>
        <p className="mb-6">{textContent.cookies_data_part1}</p>
        <p className="mb-6">{textContent.cookies_data_part2}</p>

        <h5 className="mb-6 text-2xl">{textContent.cookies_subtitle2}</h5>
        <p className="mb-6">{textContent.cookies_data_part3}</p>
        <p className="mb-6">{textContent.cookies_data_part5}</p>

        <h5 className="mb-6 text-2xl">{textContent.cookies_subtitle3}</h5>
        {/* Según la entidad que las gestiona */}
        <h6 className="mb-4 text-xl font-medium">{textContent.cookies_subsubtitle3}</h6>
        <ul className="list-disc pl-6">
          <li className="mb-4">
            <strong>{textContent.cookies_data_part8}: </strong>
            {textContent.cookies_data_part8_2}
          </li>
          <li className="mb-4">
            <strong>{textContent.cookies_data_part9}: </strong>
            {textContent.cookies_data_part9_2}
          </li>
        </ul>

        {/* Según el plazo de tiempo que permanecen activadas */}
        <h6 className="mb-4 text-xl font-medium">{textContent.cookies_sub2subtitle3}</h6>
        <ul className="list-disc pl-6">
          <li className="mb-4">
            <strong>{textContent.cookies_data_part11}: </strong>
            {textContent.cookies_data_part11_2}
          </li>
          <li className="mb-4">
            <strong>{textContent.cookies_data_part12}: </strong>
            {textContent.cookies_data_part12_2}
          </li>
        </ul>

        {/* Según su finalidad */}
        <h6 className="mb-4 text-xl font-medium">{textContent.cookies_sub3subtitle3}</h6>
        <ul className="list-disc pl-6">
          <li className="mb-4">
            <strong>{textContent.cookies_data_part14}: </strong>
            {textContent.cookies_data_part14_2}
          </li>
          <li className="mb-4">
            <strong>{textContent.cookies_data_part15}: </strong>
            {textContent.cookies_data_part15_2}
          </li>
          <li className="mb-4">
            <strong>{textContent.cookies_data_part16}: </strong>
            {textContent.cookies_data_part16_2}
          </li>
          <li className="mb-4">
            <strong>{textContent.cookies_data_part17}: </strong>
            {textContent.cookies_data_part17_2}
          </li>
        </ul>

        <h5 className="mb-6 text-2xl">{textContent.cookies_subtitle4}</h5>
        <p className="mb-6">{textContent.cookies_data_part19}</p>

        <table className="border-gray-300 mb-6 w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-cool-gray-30 bg-cool-gray-5 px-8 py-2">
                {textContent.cookies_table_row1_column1}
              </th>
              <th className="border border-cool-gray-30 bg-cool-gray-5 px-8 py-2">
                {textContent.cookies_table_row1_column2}
              </th>
              <th className="border border-cool-gray-30 bg-cool-gray-5 px-8 py-2">
                {textContent.cookies_table_row1_column3}
              </th>
              <th className="border border-cool-gray-30 bg-cool-gray-5 px-8 py-2">
                {textContent.cookies_table_row1_column4}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row2_column1}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row2_column2}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row2_column3}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row2_column4}</td>
            </tr>
            <tr>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row3_column1}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row3_column2}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row3_column3}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row3_column4}</td>
            </tr>
            <tr>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row4_column1}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row4_column2}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row4_column3}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row4_column4}</td>
            </tr>
            <tr>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row5_column1}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row5_column2}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row5_column3}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row5_column4}</td>
            </tr>
            <tr>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row6_column1}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row6_column2}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row6_column3}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row6_column4}</td>
            </tr>
            <tr>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row8_column1}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row8_column2}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row8_column3}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row8_column4}</td>
            </tr>
            <tr>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row9_column1}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row9_column2}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row9_column3}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row9_column4}</td>
            </tr>
          </tbody>
        </table>

        <h5 className="mb-6 text-2xl">{textContent.cookies_subtitle5}</h5>
        <p className="mb-6">{textContent.cookies_data_part20}</p>

        <ul className="list-disc pl-6">
          <li className="mb-2">{textContent.cookies_data_part21}</li>
          <li className="mb-2">{textContent.cookies_data_part22}</li>
          <li className="mb-2">{textContent.cookies_subtitle41}</li>
          <li className="mb-2">{textContent.cookies_data_part23}</li>
          <li className="mb-2">{textContent.cookies_data_part24}</li>
          <li className="mb-2">{textContent.cookies_data_part25}</li>
        </ul>

        <p className="mb-6">{textContent.cookies_data_part26}</p>

        <h5 className="mb-6 text-2xl">{textContent.cookies_subtitle6}</h5>
        <p className="mb-6">{textContent.cookies_data_part28}</p>
      </div>
    </>
  );
};

export default CookiesSection;
