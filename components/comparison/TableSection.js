import React, { Fragment } from 'react';
import { UilCheck, UilMinus } from '@iconscout/react-unicons';

const HeroSection = ({
  textContent
}) => {
  const competitors = [
    {
      name: 'Internxt',
      logo: 'internxt',
      features: {
        encryption_in_data_transit: true,
        end_to_end_encrypted_storage: true,
        end_to_end_encrypted_file_sharing: true,
        zero_knowledge_encryption: true,
        two_factor_authentication: true,
        sync_any_folders: true,
        desktop_sync_app: true,
        linux_sync_app: true,
        free_account_storage: '10GB',
      }
    },
    {
      name: 'Brand 1',
      logo: 'default',
      features: {
        encryption_in_data_transit: true,
        end_to_end_encrypted_storage: false,
        end_to_end_encrypted_file_sharing: false,
        zero_knowledge_encryption: false,
        two_factor_authentication: false,
        sync_any_folders: true,
        desktop_sync_app: false,
        linux_sync_app: true,
        free_account_storage: '2GB',
      }
    },
    {
      name: 'Brand 2',
      logo: 'default',
      features: {
        encryption_in_data_transit: false,
        end_to_end_encrypted_storage: false,
        end_to_end_encrypted_file_sharing: true,
        zero_knowledge_encryption: true,
        two_factor_authentication: true,
        sync_any_folders: true,
        desktop_sync_app: false,
        linux_sync_app: false,
        free_account_storage: '6GB',
      }
    },
    {
      name: 'Brand 3',
      logo: 'default',
      features: {
        encryption_in_data_transit: false,
        end_to_end_encrypted_storage: false,
        end_to_end_encrypted_file_sharing: true,
        zero_knowledge_encryption: false,
        two_factor_authentication: true,
        sync_any_folders: false,
        desktop_sync_app: true,
        linux_sync_app: true,
        free_account_storage: '2GB',
      }
    },
    {
      name: 'Brand 4',
      logo: 'default',
      features: {
        encryption_in_data_transit: true,
        end_to_end_encrypted_storage: true,
        end_to_end_encrypted_file_sharing: true,
        zero_knowledge_encryption: false,
        two_factor_authentication: false,
        sync_any_folders: true,
        desktop_sync_app: false,
        linux_sync_app: false,
        free_account_storage: false,
      }
    },
  ];

  const getFeature = (feature) => competitors.map((brand) => brand.features[feature]);

  const table = [
    {
      name: `${textContent.table.sections.encryption_and_security.name}`,
      rows: [
        {
          title: `${textContent.table.sections.encryption_and_security.features.encryption_in_data_transit}`,
          feature: getFeature('encryption_in_data_transit'),
        },
        {
          title: `${textContent.table.sections.encryption_and_security.features.end_to_end_encrypted_storage}`,
          feature: getFeature('end_to_end_encrypted_storage'),
        },
        {
          title: `${textContent.table.sections.encryption_and_security.features.end_to_end_encrypted_file_sharing}`,
          feature: getFeature('end_to_end_encrypted_file_sharing'),
        },
        {
          title: `${textContent.table.sections.encryption_and_security.features.zero_knowledge_encryption}`,
          feature: getFeature('zero_knowledge_encryption'),
        },
        {
          title: `${textContent.table.sections.encryption_and_security.features.two_factor_authentication}`,
          feature: getFeature('two_factor_authentication'),
        },
      ],
    },
    {
      name: 'Storage & File management',
      rows: [
        {
          title: 'Sync any folders',
          feature: getFeature('sync_any_folders'),
        },
        {
          title: 'Desktop sync app',
          feature: getFeature('desktop_sync_app'),
        },
        {
          title: 'Linux sync app',
          feature: getFeature('linux_sync_app'),
        },
        {
          title: 'Free account storage',
          feature: getFeature('free_account_storage'),
        },
      ],
    },
  ];

  return (

    <section id="buy" className="relative flex flex-col w-full pt-16 bg-gradient-to-b from-white via-neutral-10 to-white">

      <div className="flex flex-col">

        {/* Header */}
        <div className="relative flex flex-col items-center justify-center px-3 pt-20 md:pt-32 pb-16 bg-blue-60 text-white overflow-hidden z-20">
          <div className="relative flex flex-col items-center justify-center mb-16 md:mb-8 z-10">
            <h1 className="text-5xl md:text-6xl font-medium text-center mb-4">
              {textContent.title.line1}
              <br />
              {textContent.title.line2}
            </h1>

            <h2 className="text-xl md:text-lg text-center">
              {textContent.description}
            </h2>
          </div>

          <div className="relative flex flex-col items-center justify-center z-10">
            <a
              href="https://drive.internxt.com/new"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center w-full sm:w-auto sm:inline-flex items-center px-6 py-2 border border-transparent rounded-xl text-lg sm:text-base font-semibold text-blue-60 bg-white focus:outline-none"
            >
              {textContent.cta}
            </a>

            <p className="text-base md:text-xs text-center mt-1.5 opacity-80">
              {textContent.noCredirCardNeeded}
            </p>
          </div>

          <div className="absolute top-2/3 left-0 w-full h-full rounded-t-full-percentage transform scale-y-200 filter blur-4xl bg-blue-70" />
        </div>

        {/* Table */}
        <div className="flex flex-col items-center justify-start py-10 bg-white w-screen overflow-x-auto lg:overflow-x-visible">
          <div className="flex flex-col items-center justify-center px-6 mx-auto">
            <table className="relative border-collapse table-auto text-base text-center text-cool-gray-80 bg-none mb-20">

              {/* Competitors */}
              <thead className="lg:sticky top-16 h-44 text-cool-gray-90 z-20">
                <tr className="relative z-10 bg-white bg-opacity-80 backdrop-filter backdrop-blur-md">
                  <th className="h-44"> </th>
                  <th className="relative p-16 text-lg font-medium">
                    {' '}
                    <div className="absolute bottom-0 left-0 flex flex-col items-center justify-center w-32 h-32 bg-blue-10 rounded-t-2xl space-y-1.5">
                      <img loading="lazy" className="object-cover object-center w-12 h-12" src={`/images/comparison/competitors/${competitors[0].logo}.webp`} draggable="false" alt="Internxt Drive web and mobile apps" />
                      <span>{competitors[0].name}</span>
                    </div>
                  </th>
                  {competitors.slice(1).map((col, index) => (
                    <th className="relative p-14 md:p-12 font-normal" key={col.name}>
                      {' '}
                      <div className={`absolute bottom-0 left-0 flex flex-col items-center justify-center w-28 md:w-24 h-28 md:h-24 rounded-t-lg space-y-0.5 ${index % 2 !== 0 && 'bg-cool-gray-5'}`}>
                        <img loading="lazy" className="object-cover object-center w-8 h-8" src={`/images/comparison/competitors/${col.logo}.webp`} draggable="false" alt="Internxt Drive web and mobile apps" />
                        <span>{col.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {table.map((section) => (
                <Fragment key={section.name}>
                  {/* Section */}
                  <thead className="lg:sticky top-60 h-14 md:h-12 text-left text-cool-gray-90 z-10">
                    <tr className="bg-cool-gray-10 font-medium h-14 md:h-12">
                      <td className="px-6 rounded-l-lg text-lg whitespace-nowrap">{section.name}</td>
                      {competitors.map((item) => (<td key={item.name} />))}
                    </tr>
                  </thead>

                  {/* Rows */}
                  <tbody className="divide-y divide-cool-gray-10">
                    {section.rows.map((row, rowIndex) => (
                      <tr className="h-14 md:h-12" key={row.title}>
                        <td className="text-left text-base px-6 whitespace-nowrap">{row.title}</td>
                        <td className={`${rowIndex === 0 ? 'border-t border-b' : 'border-b'} border-blue-20 bg-blue-10`}>
                          <div className="flex flex-col items-center justify-center h-full">
                            {((typeof row.feature[0]) === 'boolean') && (row.feature[0] ? <UilCheck className="w-7 h-7 text-blue-50" /> : <UilMinus className="w-7 h-7 text-blue-20" />)}
                            {((typeof row.feature[0]) === 'string') && (<span className="text-blue-60 font-medium">{row.feature[0]}</span>) }
                          </div>
                        </td>
                        {row.feature.slice(1).map((feature, columnIndex) => (
                          <td className={`${columnIndex % 2 !== 0 && 'bg-cool-gray-5'}`} key={`${row.title}${columnIndex.toString()}`}>
                            <div className="flex flex-col items-center justify-center h-full">
                              {typeof feature === 'boolean' && (feature ? <UilCheck className="w-7 h-7 text-cool-gray-40" /> : <UilMinus className="w-7 h-7 text-cool-gray-20" />)}
                              {typeof feature === 'string' && (<span>{feature}</span>) }
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Fragment>
              ))}

              {/* Start now */}
              <tbody>
                <tr className="h-0">
                  <td className="p-0" />
                  <td className="relative p-0">
                    <a
                      href="https://drive.internxt.com/new"
                      target="_blank"
                      rel="noreferrer"
                      className="absolute top-full left-0 h-14 md:h-10 w-full flex flex-col items-center justify-center rounded-b-2xl bg-blue-60 text-white text-lg md:text-base font-medium whitespace-nowrap"
                    >
                      {textContent.table.startNow}
                    </a>
                  </td>
                </tr>
              </tbody>

            </table>
          </div>
        </div>

      </div>

    </section>

  );
};

export default HeroSection;
