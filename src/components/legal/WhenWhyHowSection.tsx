import React from 'react';

const WhenWhyHowSection = ({ textContent, lang }) => {
  return (
    <>
      {lang !== 'es' ? (
        <>
          <div className="mb-16 mt-1 flex flex-col">
            <h5 className=" mb-6 text-4xl" id={textContent.privacy_policy_process_personal_data_title}>
              {textContent.privacy_policy_process_personal_data_title}
            </h5>

            <h5 className=" text-3.5xl mb-6">{textContent.privacy_policy_process_personal_data_subtitle1}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part1}</p>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part2}</p>

            <h5 className=" text-3.5xl mb-6">{textContent.privacy_policy_process_personal_data_subtitle2}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part3}</p>

            <h5 className=" text-3.5xl mb-6">{textContent.privacy_policy_process_personal_data_subtitle3}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part4}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part5}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part6}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part7}</p>

            <h5 className=" text-3.5xl mb-6">{textContent.privacy_policy_process_personal_data_subtitle4}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part8}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part9}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part10}</p>

            <h5 className=" text-3.5xl mb-6">{textContent.privacy_policy_process_personal_data_subtitle5}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part11}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part12}</p>

            <h5 className=" text-3.5xl mb-6">{textContent.privacy_policy_process_personal_data_subtitle6}</h5>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle6_1}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part13}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle6_2}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part14}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle6_3}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part15}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle6_4}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part16}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle6_5}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part17}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle6_6}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part18}</p>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part19}</p>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part17}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle6_7}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part20}</p>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part21}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle6_8}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part22}</p>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part23}</p>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part24}</p>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part25}</p>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part26}</p>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part27}</p>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part28}</p>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part29}</p>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part30}</p>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part31}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_subtitle7}</h5>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle7_1}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part32}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle7_2}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part33}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle7_3}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part34}</p>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part35}</p>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part36}</p>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part37}</p>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part38}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part39}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part40}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle7_4}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part41}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle7_5}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part42}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part43}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part44}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part45}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle7_6}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part46}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part47}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part48}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part49}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle7_7}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part50}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle7_8}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part51}</p>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part52}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle7_9}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part53}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle7_9}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part53}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle7_10}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part54}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part55}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle7_11}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part56}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part57}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle7_12}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part58}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle7_13}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part59}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part60}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part61}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part62}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part63}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part63}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part64}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part65}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part66}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part67}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part68}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part69}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part70}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part71}</p>

            <h5 className=" text-2.5xl mb-6">{textContent.privacy_policy_process_personal_data_sub_subtitle7_14}</h5>

            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part72}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part73}</p>
            <p className="mb-6">{textContent.privacy_policy_process_personal_data_part74}</p>

            <div className="relative -mx-6 flex flex-col overflow-hidden overflow-x-scroll px-6">
              <table className="relative table-auto bg-white">
                <tr>
                  <th className="border border-cool-gray-30 bg-cool-gray-5 px-8 py-2">
                    {textContent.privacy_policy_table2_row1_column1}
                  </th>
                  <th className="border border-cool-gray-30 bg-cool-gray-5 px-8 py-2">
                    {textContent.privacy_policy_table2_row1_column2}
                  </th>
                  <th className="border border-cool-gray-30 bg-cool-gray-5 px-8 py-2">
                    {textContent.privacy_policy_table2_row1_column3}
                  </th>
                </tr>

                <tr>
                  <td className="border border-cool-gray-20 p-2 px-4" rowSpan={2}>
                    {textContent.privacy_policy_table2_row2_column1}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row2_column2_1}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row2_column3_1}
                  </td>
                </tr>
                <tr>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row2_column2_2}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row2_column3_2}
                  </td>
                </tr>

                <tr>
                  <td className="border border-cool-gray-20 p-2 px-4" rowSpan={4}>
                    {textContent.privacy_policy_table2_row3_column1}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row3_column2_1}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row3_column3_1}
                  </td>
                </tr>
                <tr>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row3_column2_2}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row3_column3_2}
                  </td>
                </tr>
                <tr>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row3_column2_3}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row3_column3_3}
                  </td>
                </tr>
                <tr>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row3_column2_4}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row3_column3_4}
                  </td>
                </tr>

                <tr>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row4_column1}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row4_column2}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row4_column3}
                  </td>
                </tr>

                <tr>
                  <td className="border border-cool-gray-20 p-2 px-4" rowSpan={2}>
                    {textContent.privacy_policy_table2_row5_column1}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row5_column2_1}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row5_column3_1}
                  </td>
                </tr>

                <tr>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row5_column2_2}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row5_column3_2}
                  </td>
                </tr>

                <tr>
                  <td className="border border-cool-gray-20 p-2 px-4" rowSpan={2}>
                    {textContent.privacy_policy_table2_row6_column1}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row6_column2_1}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row6_column3_1}
                  </td>
                </tr>

                <tr>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row6_column2_2}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row6_column3_2}
                  </td>
                </tr>

                <tr>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row7_column1}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row7_column2}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row7_column3}
                  </td>
                </tr>

                <tr>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row8_column1}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row8_column2}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row8_column3}
                  </td>
                </tr>

                <tr>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row9_column1}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row9_column2}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row9_column3}
                  </td>
                </tr>

                <tr>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row10_column1}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row10_column2}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row10_column3}
                  </td>
                </tr>

                <tr>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row11_column1}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row11_column2}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row11_column3}
                  </td>
                </tr>

                <tr>
                  <td className="border border-cool-gray-20 p-2 px-4" rowSpan={2}>
                    {textContent.privacy_policy_table2_row12_column1}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row12_column2_1}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row12_column3_1}
                  </td>
                </tr>

                <tr>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row12_column2_2}
                  </td>
                  <td className="border border-cool-gray-20 p-2 px-4">
                    {textContent.privacy_policy_table2_row12_column3_2}
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title28}>
              {textContent.title28}
            </h2>

            <p className="mb-6">{textContent.subtitle28}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title29}>
              {textContent.title29}
            </h2>

            <p className="mb-6">{textContent.subtitle29}</p>

            <p className="mb-6">{textContent.subtitle292}</p>

            <p className="mb-6">{textContent.subtitle293}</p>

            <p className="mb-6">{textContent.subtitle294}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title30}>
              {textContent.title30}
            </h2>

            <p className="mb-6">{textContent.subtitle30}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title31}>
              {textContent.title31}
            </h2>

            <p className="mb-6">{textContent.subtitle31}</p>
          </div>
        </>
      ) : (
        <>
          <div className="mb-16 flex flex-col">
            <p className="mb-3 text-2xl font-medium" id={textContent.title}>
              {textContent.title}
            </p>
            <p className="mb-6">{textContent.subtitle}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title2}>
              {textContent.title2}
            </h2>
            <p className="mb-6">{textContent.subtitle2}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title3}>
              {textContent.title3}
            </h2>
            <p className="mb-6">{textContent.subtitle3}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title4}>
              {textContent.title4}
            </h2>
            <p className="mb-6">{textContent.subtitle4}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title5}>
              {textContent.title5}
            </h2>
            <p className="mb-6">{textContent.subtitle5}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title6}>
              {textContent.title6}
            </h2>
            <p className="mb-6">{textContent.subtitle6}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title7}>
              {textContent.title7}
            </h2>
            <p className="mb-6">{textContent.subtitle7}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title8}>
              {textContent.title8}
            </h2>
            <p className="mb-6">{textContent.subtitle8}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title9}>
              {textContent.title9}
            </h2>
            <p className="mb-6">{textContent.subtitle9}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title10}>
              {textContent.title10}
            </h2>
            <p className="mb-6">{textContent.subtitle10}</p>
            <p className="mb-6">{textContent.subtitle102}</p>
            <p className="mb-6">{textContent.subtitle103}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title11}>
              {textContent.title11}
            </h2>
            <p className="mb-6">{textContent.subtitle11}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title12}>
              {textContent.title12}
            </h2>
            <p className="mb-6">{textContent.subtitle12}</p>
            <p className="mb-6">{textContent.subtitle122}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title13}>
              {textContent.title13}
            </h2>
            <p className="mb-6">{textContent.subtitle13}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title14}>
              {textContent.title14}
            </h2>
            <p className="mb-6">{textContent.subtitle14}</p>
            <p className="mb-6">{textContent.subtitle142}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title15}>
              {textContent.title15}
            </h2>
            <p className="mb-6">{textContent.subtitle15}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title16}>
              {textContent.title16}
            </h2>
            <p className="mb-6">{textContent.subtitle16}</p>
            <p className="mb-6">{textContent.subtitle162}</p>
            <p className="mb-6">{textContent.subtitle163}</p>
            <p className="mb-6">{textContent.subtitle164}</p>
            <p className="mb-6">{textContent.subtitle165}</p>
            <p className="mb-6">{textContent.subtitle166}</p>
            <p className="mb-6">{textContent.subtitle167}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title17}>
              {textContent.title17}
            </h2>
            <p className="mb-6">{textContent.subtitle17}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title18}>
              {textContent.title18}
            </h2>
            <p className="mb-6">{textContent.subtitle18}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title19}>
              {textContent.title19}
            </h2>
            <p className="mb-6">{textContent.subtitle19}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title20}>
              {textContent.title20}
            </h2>
            <p className="mb-6">{textContent.subtitle20}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title21}>
              {textContent.title21}
            </h2>
            <p className="mb-6">{textContent.subtitle21}</p>
            <p className="mb-6">{textContent.subtitle212}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title22}>
              {textContent.title22}
            </h2>
            <p className="mb-6">{textContent.subtitle22}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title23}>
              {textContent.title23}
            </h2>
            <p className="mb-6">{textContent.subtitle23}</p>
            <p className="mb-6">{textContent.subtitle232}</p>
            <p className="mb-6">{textContent.subtitle233}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title24}>
              {textContent.title24}
            </h2>
            <p className="mb-6">{textContent.subtitle24}</p>
            <p className="mb-6">{textContent.subtitle242}</p>
            <p className="mb-6">{textContent.subtitle243}</p>
            <p className="mb-6">{textContent.subtitle244}</p>
            <p className="mb-6">{textContent.subtitle245}</p>
            <p className="mb-6">{textContent.subtitle246}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title25}>
              {textContent.title25}
            </h2>
            <p className="mb-6">{textContent.subtitle25}</p>
          </div>
          <div className="mb-16 flex flex-col">
            <h2 className="mb-3 text-2xl font-medium" id={textContent.title26}>
              {textContent.title26}
            </h2>
            <p className="mb-6">{textContent.subtitle26}</p>
          </div>
        </>
      )}
    </>
  );
};

export default WhenWhyHowSection;
