import React from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Layout from '../components/layout/Layout';
import descriptionsEnglish from '../assets/lang/en/terms-and-conditions.json';
import descriptionsSpanish from '../assets/lang/es/terms-and-conditions.json';
import cookies from '../lib/cookies';

const Legal = ({
  metatagsDescriptions,
  navbarLang,
  footerLang,
  deviceLang
}) => {
  const router = useRouter();
  const { locale } = router;

  const description = locale === 'en' ? descriptionsEnglish : descriptionsSpanish;
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'photos');

  return (
    <Layout segmentName="Legal" title={metatags.title} description={metatags[0].description}>

      <Navbar
        textContent={navbarLang}
        lang={deviceLang}
        cta={['default']}
        fixed
      />

      <div className="flex flex-col items-center py-32 pt-44 px-6 md:px-0 mt-0 m-6 md:m-10 md:mt-0 lg:m-32 lg:mt-0 xl:mx-auto max-w-5xl">
        <div className="flex flex-col mb-16">
          <h1 className=" text-2xl font-semibold mb-8">
            {description.title}
          </h1>

          <p className=" mb-6">
            {description.subtitle}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title2}
          </h1>

          <p className=" mb-6">
            {description.subtitle2}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title3}
          </h1>

          <p className=" mb-6">
            {description.subtitle3}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title4}
          </h1>

          <p className=" mb-6">
            {description.subtitle4}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title5}
          </h1>

          <p className=" mb-6">
            {description.subtitle5}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title6}
          </h1>

          <p className=" mb-6">
            {description.subtitle6}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title7}
          </h1>

          <p className=" mb-6">
            {description.subtitle7}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title8}
          </h1>

          <p className=" mb-6">
            {description.subtitle8}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title9}
          </h1>

          <p className=" mb-6">
            {description.subtitle9}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title10}
          </h1>

          <p className=" mb-6">
            {description.subtitle10}
          </p>

          <p className=" mb-6">
            {description.subtitle102}
          </p>

          <p className=" mb-6">
            {description.subtitle103}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title11}
          </h1>

          <p className=" mb-6">
            {description.subtitle11}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title12}
          </h1>

          <p className=" mb-6">
            {description.subtitle12}
          </p>

          <p className=" mb-6">
            {description.subtitle122}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title13}
          </h1>

          <p className=" mb-6">
            {description.subtitle13}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title14}
          </h1>

          <p className=" mb-6">
            {description.subtitle14}
          </p>

          <p className=" mb-6">
            {description.subtitle142}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title15}
          </h1>

          <p className=" mb-6">
            {description.subtitle15}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title16}
          </h1>

          <p className=" mb-6">
            {description.subtitle16}
          </p>

          <p className=" mb-6">
            {description.subtitle162}
          </p>

          <p className=" mb-6">
            {description.subtitle163}
          </p>

          <p className=" mb-6">
            {description.subtitle164}
          </p>

          <p className=" mb-6">
            {description.subtitle165}
          </p>

          <p className=" mb-6">
            {description.subtitle166}
          </p>

          <p className=" mb-6">
            {description.subtitle167}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title17}
          </h1>

          <p className=" mb-6">
            {description.subtitle17}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title18}
          </h1>

          <p className=" mb-6">
            {description.subtitle18}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title19}
          </h1>

          <p className=" mb-6">
            {description.subtitle19}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title20}
          </h1>

          <p className=" mb-6">
            {description.subtitle20}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title21}
          </h1>

          <p className=" mb-6">
            {description.subtitle21}
          </p>

          <p className=" mb-6">
            {description.subtitle212}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title22}
          </h1>

          <p className=" mb-6">
            {description.subtitle22}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title23}
          </h1>

          <p className=" mb-6">
            {description.subtitle23}
          </p>

          <p className=" mb-6">
            {description.subtitle232}
          </p>

          <p className=" mb-6">
            {description.subtitle233}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title24}
          </h1>

          <p className=" mb-6">
            {description.subtitle24}
          </p>

          <p className=" mb-6">
            {description.subtitle242}
          </p>

          <p className=" mb-6">
            {description.subtitle243}
          </p>

          <p className=" mb-6">
            {description.subtitle244}
          </p>

          <p className=" mb-6">
            {description.subtitle245}
          </p>

          <p className=" mb-6">
            {description.subtitle246}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title25}
          </h1>

          <p className=" mb-6">
            {description.subtitle25}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title26}
          </h1>

          <p className=" mb-6">
            {description.subtitle26}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title27}
          </h1>

          <p className=" mb-6">
            {description.privacy_policy_intro_part1}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_intro_part2}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_intro_part3}
          </p>

          <h5 className="text-2xl font-semibold mb-6">
            {description.privacy_policy_person_responsible_title}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_person_responsible_part1}
          </p>

          <table>
            <tr>
              <th>{description.privacy_policy_table_row1_column1}</th>
              <th>{description.privacy_policy_table_row1_column2}</th>
            </tr>
            <tr>
              <td>{description.privacy_policy_table_row2_column1}</td>
              <td>{description.privacy_policy_table_row2_column2}</td>
            </tr>
            <tr>
              <td>{description.privacy_policy_table_row3_column1}</td>
              <td>{description.privacy_policy_table_row3_column2}</td>
            </tr>
            <tr>
              <td>{description.privacy_policy_table_row4_column1}</td>
              <td>{description.privacy_policy_table_row4_column2}</td>
            </tr>
            <tr>
              <td>{description.privacy_policy_table_row5_column1}</td>
              <td>{description.privacy_policy_table_row5_column2}</td>
            </tr>

            <tr>
              <td>{description.privacy_policy_table_row6_column1}</td>
              <td>{description.privacy_policy_table_row6_column2}</td>
            </tr>

            <tr>
              <td>{description.privacy_policy_table_row7_column1}</td>
              <td>{description.privacy_policy_table_row7_column2}</td>
            </tr>

            <tr>
              <td>{description.privacy_policy_table_row8_column1}</td>
              <td>{description.privacy_policy_table_row8_column2}</td>
            </tr>
          </table>

          <p className=" mb-6">
            {description.privacy_policy_person_responsible_part2}
          </p>

          <h5 className=" text-4xl mb-6 mt-24">
            {description.privacy_policy_process_personal_data_title}
          </h5>

          <h5 className=" text-3.5xl mb-6">
            {description.privacy_policy_process_personal_data_subtitle1}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part1}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part2}
          </p>

          <h5 className=" text-3.5xl mb-6">
            {description.privacy_policy_process_personal_data_subtitle2}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part3}
          </p>

          <h5 className=" text-3.5xl mb-6">
            {description.privacy_policy_process_personal_data_subtitle3}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part4}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part5}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part6}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part7}
          </p>

          <h5 className=" text-3.5xl mb-6">
            {description.privacy_policy_process_personal_data_subtitle4}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part8}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part9}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part10}
          </p>

          <h5 className=" text-3.5xl mb-6">
            {description.privacy_policy_process_personal_data_subtitle5}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part11}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part12}
          </p>

          <h5 className=" text-3.5xl mb-6">
            {description.privacy_policy_process_personal_data_subtitle6}
          </h5>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle6_1}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part13}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle6_2}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part14}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle6_3}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part15}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle6_4}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part16}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle6_5}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part17}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle6_6}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part18}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part19}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part17}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle6_7}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part20}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part21}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle6_8}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part22}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part23}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part24}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part25}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part26}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part27}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part28}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part29}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part30}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part31}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_subtitle7}
          </h5>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle7_1}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part32}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle7_2}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part33}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle7_3}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part34}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part35}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part36}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part37}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part38}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part39}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part40}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle7_4}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part41}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle7_5}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part42}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part43}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part44}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part45}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle7_6}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part46}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part47}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part48}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part49}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle7_7}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part50}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle7_8}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part51}
          </p>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part52}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle7_9}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part53}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle7_9}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part53}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle7_10}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part54}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part55}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle7_11}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part56}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part57}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle7_12}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part58}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle7_13}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part59}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part60}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part61}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part62}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part63}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part63}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part64}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part65}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part66}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part67}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part68}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part69}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part70}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part71}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.privacy_policy_process_personal_data_sub_subtitle7_14}
          </h5>

          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part72}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part73}
          </p>
          <p className=" mb-6">
            {description.privacy_policy_process_personal_data_part74}
          </p>

          <table>
            <tr>
              <th>{description.privacy_policy_table2_row1_column1}</th>
              <th>{description.privacy_policy_table2_row1_column2}</th>
              <th>{description.privacy_policy_table2_row1_column3}</th>
            </tr>

            <tr>
              <td rowSpan="2">{description.privacy_policy_table2_row2_column1}</td>
              <td>{description.privacy_policy_table2_row2_column2_1}</td>
              <td>{description.privacy_policy_table2_row2_column3_1}</td>
            </tr>
            <tr>
              <td>{description.privacy_policy_table2_row2_column2_2}</td>
              <td>{description.privacy_policy_table2_row2_column3_2}</td>
            </tr>

            <tr>
              <td rowSpan="4">{description.privacy_policy_table2_row3_column1}</td>
              <td>{description.privacy_policy_table2_row3_column2_1}</td>
              <td>{description.privacy_policy_table2_row3_column3_1}</td>
            </tr>
            <tr>
              <td>{description.privacy_policy_table2_row3_column2_2}</td>
              <td>{description.privacy_policy_table2_row3_column3_2}</td>
            </tr>
            <tr>
              <td>{description.privacy_policy_table2_row3_column2_3}</td>
              <td>{description.privacy_policy_table2_row3_column3_3}</td>
            </tr>
            <tr>
              <td>{description.privacy_policy_table2_row3_column2_4}</td>
              <td>{description.privacy_policy_table2_row3_column3_4}</td>
            </tr>

            <tr>
              <td>{description.privacy_policy_table2_row4_column1}</td>
              <td>{description.privacy_policy_table2_row4_column2}</td>
              <td>{description.privacy_policy_table2_row4_column3}</td>
            </tr>

            <tr>
              <td rowSpan="2">{description.privacy_policy_table2_row5_column1}</td>
              <td>{description.privacy_policy_table2_row5_column2_1}</td>
              <td>{description.privacy_policy_table2_row5_column3_1}</td>
            </tr>

            <tr>
              <td>{description.privacy_policy_table2_row5_column2_2}</td>
              <td>{description.privacy_policy_table2_row5_column3_2}</td>
            </tr>

            <tr>
              <td rowSpan="2">{description.privacy_policy_table2_row6_column1}</td>
              <td>{description.privacy_policy_table2_row6_column2_1}</td>
              <td>{description.privacy_policy_table2_row6_column3_1}</td>
            </tr>

            <tr>
              <td>{description.privacy_policy_table2_row6_column2_2}</td>
              <td>{description.privacy_policy_table2_row6_column3_2}</td>
            </tr>

            <tr>
              <td>{description.privacy_policy_table2_row7_column1}</td>
              <td>{description.privacy_policy_table2_row7_column2}</td>
              <td>{description.privacy_policy_table2_row7_column3}</td>
            </tr>

            <tr>
              <td>{description.privacy_policy_table2_row8_column1}</td>
              <td>{description.privacy_policy_table2_row8_column2}</td>
              <td>{description.privacy_policy_table2_row8_column3}</td>
            </tr>

            <tr>
              <td>{description.privacy_policy_table2_row9_column1}</td>
              <td>{description.privacy_policy_table2_row9_column2}</td>
              <td>{description.privacy_policy_table2_row9_column3}</td>
            </tr>

            <tr>
              <td>{description.privacy_policy_table2_row10_column1}</td>
              <td>{description.privacy_policy_table2_row10_column2}</td>
              <td>{description.privacy_policy_table2_row10_column3}</td>
            </tr>

            <tr>
              <td>{description.privacy_policy_table2_row11_column1}</td>
              <td>{description.privacy_policy_table2_row11_column2}</td>
              <td>{description.privacy_policy_table2_row11_column3}</td>
            </tr>

            <tr>
              <td rowSpan="2">{description.privacy_policy_table2_row12_column1}</td>
              <td>{description.privacy_policy_table2_row12_column2_1}</td>
              <td>{description.privacy_policy_table2_row12_column3_1}</td>
            </tr>

            <tr>
              <td>{description.privacy_policy_table2_row12_column2_2}</td>
              <td>{description.privacy_policy_table2_row12_column3_2}</td>
            </tr>
          </table>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title28}
          </h1>

          <p className=" mb-6">
            {description.subtitle28}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title29}
          </h1>

          <p className=" mb-6">
            {description.subtitle29}
          </p>

          <p className=" mb-6">
            {description.subtitle292}
          </p>

          <p className=" mb-6">
            {description.subtitle293}
          </p>

          <p className=" mb-6">
            {description.subtitle294}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title30}
          </h1>

          <p className=" mb-6">
            {description.subtitle30}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title31}
          </h1>

          <p className=" mb-6">
            {description.subtitle31}
          </p>
        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.cookies_title}
          </h1>
          <h5 className=" text-2.5xl mb-6">
            {description.cookies_subtitle1}
          </h5>

          <p className=" mb-6">
            {description.cookies_data_part1}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part2}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.cookies_subtitle2}
          </h5>

          <p className=" mb-6">
            {description.cookies_data_part3}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part4}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part5}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part6}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.cookies_subtitle3}
          </h5>

          <p className=" mb-6">
            {description.cookies_data_part7}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part8}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part9}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part10}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part11}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part12}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part13}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part14}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part15}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part16}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part17}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part18}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part19}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part20}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part21}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part22}
          </p>

          <h5 className=" text-2.5xl mb-6">
            {description.cookies_subtitle4}
          </h5>

          <p className=" mb-6">
            {description.cookies_data_part23}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part24}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part25}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part26}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part27}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part28}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part29}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part30}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part31}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part32}
          </p>

          <table>
            <tr>
              <th colSpan="2">COOKIES ANALÍTICAS</th>
            </tr>
            <tr>
              <th>{description.cookies_table_row1_column1}</th>
              <th>{description.cookies_table_row1_column2}</th>
            </tr>
            <tr>
              <td>{description.cookies_table_row2_column1}</td>
              <td>{description.cookies_table_row2_column2}</td>
            </tr>
            <tr>
              <td>{description.cookies_table_row3_column1}</td>
              <td>{description.cookies_table_row3_column2}</td>
            </tr>
            <tr>
              <td>{description.cookies_table_row4_column1}</td>
              <td>{description.cookies_table_row4_column2}</td>
            </tr>
            <tr>
              <td>{description.cookies_table_row5_column1}</td>
              <td>{description.cookies_table_row5_column2}</td>
            </tr>

            <tr>
              <td>{description.cookies_table_row6_column1}</td>
              <td>{description.cookies_table_row6_column2}</td>
            </tr>

            <tr>
              <td>{description.cookies_table_row7_column1}</td>
              <td>{description.cookies_table_row7_column2}</td>
            </tr>

            <tr>
              <td>{description.cookies_table_row8_column1}</td>
              <td>{description.cookies_table_row8_column2}</td>
            </tr>
          </table>

          <h5 className=" text-2.5xl mb-6">
            {description.cookies_subtitle5}
          </h5>

          <p className=" mb-6">
            {description.cookies_data_part33}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part34}
          </p>

          <ol>
            <li className=" mb-6">
              {description.cookies_data_part35}
            </li>

            <li className=" mb-6">
              {description.cookies_data_part36}
            </li>

            <li className=" mb-6">
              {description.cookies_data_part37}
            </li>

            <li className=" mb-6">
              {description.cookies_data_part38}
            </li>

            <li className=" mb-6">
              {description.cookies_data_part39}
            </li>

            <li className=" mb-6">
              {description.cookies_data_part40}
            </li>
          </ol>

          <p className=" mb-6">
            {description.cookies_data_part41}
          </p>

          <p className=" mb-6">
            {description.cookies_data_part42}
          </p>

        </div>

        <div className="flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-6">
            {description.title33}
          </h1>

          <p className=" mb-6">
            {description.subtitle33}
          </p>
        </div>
      </div>

      <div className="bg-neutral-10">
        <Footer textContent={footerLang} hideNewsletter={false} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const deviceLang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      metatagsDescriptions, navbarLang, deviceLang, footerLang
    },
  };
}

export default Legal;
