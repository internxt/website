import React from 'react';

const CookiesSection = ({ textContent }) => {
  return (
    <>
      <div className="flex w-full flex-col" id={textContent.cookies_title}>
        <h2 className="mb-3 text-2xl font-medium">{textContent.cookies_title}</h2>

        <p className="mb-6">{textContent.cookies_data_part1}</p>
        <p className="mb-6">{textContent.cookies_data_part2}</p>

        <h5 className="mb-6 text-2xl">{textContent.cookies_subtitle1}</h5>
        <p className="mb-6">{textContent.cookies_data_part3}</p>
        <p className="mb-6">{textContent.cookies_data_part4}</p>
        <p className="mb-6">{textContent.cookies_data_part5}</p>

        <h5 className="mb-6 text-2xl">{textContent.cookies_subtitle2}</h5>
        <h6 className="mb-4 text-xl">{textContent.cookies_subsubtitle1}</h6>
        <p className="mb-6">{textContent.cookies_data_part6}</p>
        <p className="mb-6">{textContent.cookies_data_part7}</p>

        <h6 className="mb-4 text-xl">{textContent.cookies_subsubtitle2}</h6>
        <p className="mb-6">{textContent.cookies_data_part8}</p>
        <p className="mb-6">{textContent.cookies_data_part9}</p>

        <h6 className="mb-4 text-xl">{textContent.cookies_subsubtitle3}</h6>
        <p className="mb-6">{textContent.cookies_data_part10}</p>
        <p className="mb-6">{textContent.cookies_data_part11}</p>
        <p className="mb-6">{textContent.cookies_data_part12}</p>
        <p className="mb-6">{textContent.cookies_data_part13}</p>

        <h5 className="mb-6 text-2xl">{textContent.cookies_subtitle3}</h5>
        <p className="mb-6">{textContent.cookies_data_part14}</p>

        <table className="border-gray-400 w-full table-auto border-collapse border">
          <thead>
            <tr>
              <th className="border-gray-300 border px-4 py-2">{textContent.cookies_table_title}</th>
              <th className="border-gray-300 border px-4 py-2">{textContent.cookies_table_row1_column1}</th>
              <th className="border-gray-300 border px-4 py-2">{textContent.cookies_table_row1_column2}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-gray-300 border px-4 py-2">1</td>
              <td className="border-gray-300 border px-4 py-2">{textContent.cookies_table_row2_column1}</td>
              <td className="border-gray-300 border px-4 py-2">{textContent.cookies_table_row2_column2}</td>
            </tr>
          </tbody>
        </table>

        <h5 className="mb-6 text-2xl">{textContent.cookies_subtitle4}</h5>
        <p className="mb-6">{textContent.cookies_data_part15}</p>
        <p className="mb-6">{textContent.cookies_data_part16}</p>
        <ul className="ml-6 list-disc">
          <li className="mb-6">{textContent.cookies_data_part17}</li>
          <li className="mb-6">{textContent.cookies_data_part18}</li>
        </ul>
      </div>
    </>
  );
};

export default CookiesSection;
