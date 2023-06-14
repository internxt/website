import React from 'react';

const CookiesSection = ({ textContent }) => {
  return (
    <>
      <div className="flex w-full flex-col" id={textContent.cookies_title}>
        <h2 className="mb-3 text-2xl font-medium">{textContent.cookies_title}</h2>
        <h5 className="mb-6 text-2xl">{textContent.cookies_subtitle1}</h5>

        <p className="mb-6">{textContent.cookies_data_part1}</p>

        <p className="mb-6">{textContent.cookies_data_part2}</p>

        <h5 className="mb-6 text-2xl">{textContent.cookies_subtitle2}</h5>

        <p className="mb-6">{textContent.cookies_data_part3}</p>

        <p className="mb-6">{textContent.cookies_data_part4}</p>

        <p className="mb-6">{textContent.cookies_data_part5}</p>

        <p className="mb-6">{textContent.cookies_data_part6}</p>

        <h5 className="mb-6 text-2xl">{textContent.cookies_subtitle3}</h5>

        <p className="mb-6">{textContent.cookies_data_part7}</p>

        <p className="mb-6">{textContent.cookies_data_part8}</p>

        <p className="mb-6">{textContent.cookies_data_part9}</p>

        <p className="mb-6">{textContent.cookies_data_part10}</p>

        <p className="mb-6">{textContent.cookies_data_part11}</p>

        <p className="mb-6">{textContent.cookies_data_part12}</p>

        <p className="mb-6">{textContent.cookies_data_part13}</p>

        <p className="mb-6">{textContent.cookies_data_part14}</p>

        <p className="mb-6">{textContent.cookies_data_part15}</p>

        <p className="mb-6">{textContent.cookies_data_part16}</p>

        <p className="mb-6">{textContent.cookies_data_part17}</p>

        <p className="mb-6">{textContent.cookies_data_part18}</p>

        <p className="mb-6">{textContent.cookies_data_part19}</p>

        <p className="mb-6">{textContent.cookies_data_part20}</p>

        <p className="mb-6">{textContent.cookies_data_part21}</p>

        <p className="mb-6">{textContent.cookies_data_part22}</p>

        <h5 className="mb-6 text-2xl">{textContent.cookies_subtitle4}</h5>

        <p className="mb-6">{textContent.cookies_data_part23}</p>

        <p className="mb-6">{textContent.cookies_data_part24}</p>

        <p className="mb-6">{textContent.cookies_data_part25}</p>

        <p className="mb-6">{textContent.cookies_data_part26}</p>

        <p className="mb-6">{textContent.cookies_data_part27}</p>

        <p className="mb-6">{textContent.cookies_data_part28}</p>

        <p className="mb-6">{textContent.cookies_data_part29}</p>

        <p className="mb-6">{textContent.cookies_data_part30}</p>

        <p className="mb-6">{textContent.cookies_data_part31}</p>

        <p className="mb-6">{textContent.cookies_data_part32}</p>

        <div className="-mx-6 flex flex-col overflow-hidden overflow-x-auto px-6">
          <table className="table-auto bg-white">
            <tr>
              <th className="border border-cool-gray-30 bg-cool-gray-10 py-3" colSpan="2">
                {textContent.cookies_table_title}
              </th>
            </tr>
            <tr>
              <th className="border border-cool-gray-30 bg-cool-gray-5 py-2 px-6">
                {textContent.cookies_table_row1_column1}
              </th>
              <th className="border border-cool-gray-30 bg-cool-gray-5 py-2">
                {textContent.cookies_table_row1_column2}
              </th>
            </tr>
            <tr>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row2_column1}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row2_column2}</td>
            </tr>
            <tr>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row3_column1}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row3_column2}</td>
            </tr>
            <tr>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row4_column1}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row4_column2}</td>
            </tr>
            <tr>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row5_column1}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row5_column2}</td>
            </tr>

            <tr>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row6_column1}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row6_column2}</td>
            </tr>

            <tr>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row7_column1}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row7_column2}</td>
            </tr>

            <tr>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row8_column1}</td>
              <td className="border border-cool-gray-20 p-2 px-4">{textContent.cookies_table_row8_column2}</td>
            </tr>
          </table>
        </div>

        <h5 className=" text-2.5xl mb-6 mt-4">{textContent.cookies_subtitle5}</h5>

        <p className="mb-6">{textContent.cookies_data_part33}</p>

        <p className="mb-6">{textContent.cookies_data_part34}</p>

        <ol>
          <li className="mb-6">{textContent.cookies_data_part35}</li>

          <li className="mb-6">{textContent.cookies_data_part36}</li>

          <li className="mb-6">{textContent.cookies_data_part37}</li>

          <li className="mb-6">{textContent.cookies_data_part38}</li>

          <li className="mb-6">{textContent.cookies_data_part39}</li>

          <li className="mb-6">{textContent.cookies_data_part40}</li>
        </ol>

        <p className="mb-6">{textContent.cookies_data_part41}</p>

        <p className="mb-6">{textContent.cookies_data_part42}</p>
      </div>

      <div className="mb-6 flex flex-col">
        <h2 className="mb-3 text-2xl font-medium">{textContent.title33}</h2>

        <p className="mb-6">{textContent.subtitle33}</p>
      </div>
    </>
  );
};

export default CookiesSection;
