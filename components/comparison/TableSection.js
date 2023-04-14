import React, { Fragment } from 'react';
import { UilCheck, UilMinus } from '@iconscout/react-unicons';

const HeroSection = ({ textContent }) => {
  const competitors = [
    {
      name: 'Internxt',
      logo: 'internxt',
      features: {
        encryption_at_rest_and_in_transit: true,
        end_to_end_encrypted_storage: true,
        end_to_end_encrypted_file_sharing: true,
        zero_knowledge_encryption: true,
        two_factor_authentication: true,
        gdpr_compliant_synchronization: true,
        aes_256_encryption: true,
        zero_knowledge_access_from_browsers: true,
        no_third_party_file_access: true,
        sync_any_folders: true,
        web_app: true,
        windows_desktop_app: true,
        mac_desktop_app: true,
        linux_desktop_app: true,
        android_app: true,
        ios_app: true,
        backup_folders_and_files: true,
        file_sharding: true,
        unlimited_bandwidth: true,
        free_account_storage: '10GB',
        support_center: true,
        live_chat_support: true,
        open_source: true,
        file_requests: false,
        password_protection_for_links: true,
        download_limits_for_links: true,
      },
    },
    {
      name: 'Google Drive',
      logo: 'google_drive',
      features: {
        encryption_at_rest_and_in_transit: true,
        end_to_end_encrypted_storage: false,
        end_to_end_encrypted_file_sharing: false,
        zero_knowledge_encryption: false,
        two_factor_authentication: true,
        gdpr_compliant_synchronization: true,
        aes_256_encryption: true,
        zero_knowledge_access_from_browsers: false,
        no_third_party_file_access: false,
        sync_any_folders: false,
        web_app: true,
        windows_desktop_app: true,
        mac_desktop_app: true,
        linux_desktop_app: false,
        android_app: true,
        ios_app: true,
        backup_folders_and_files: false,
        file_sharding: false,
        unlimited_bandwidth: false,
        free_account_storage: '15GB',
        support_center: true,
        live_chat_support: false,
        open_source: false,
        file_requests: true,
        password_protection_for_links: false,
        download_limits_for_links: false,
      },
    },
    {
      name: 'Tresorit',
      logo: 'tresorit',
      features: {
        encryption_at_rest_and_in_transit: true,
        end_to_end_encrypted_storage: true,
        end_to_end_encrypted_file_sharing: true,
        zero_knowledge_encryption: true,
        two_factor_authentication: true,
        gdpr_compliant_synchronization: true,
        aes_256_encryption: true,
        zero_knowledge_access_from_browsers: true,
        no_third_party_file_access: true,
        sync_any_folders: true,
        web_app: true,
        windows_desktop_app: true,
        mac_desktop_app: true,
        linux_desktop_app: true,
        android_app: true,
        ios_app: true,
        backup_folders_and_files: false,
        file_sharding: false,
        unlimited_bandwidth: true,
        free_account_storage: '2GB',
        support_center: true,
        live_chat_support: true,
        open_source: false,
        file_requests: true,
        password_protection_for_links: true,
        download_limits_for_links: true,
      },
    },
    {
      name: 'Dropbox',
      logo: 'dropbox',
      features: {
        encryption_at_rest_and_in_transit: true,
        end_to_end_encrypted_storage: false,
        end_to_end_encrypted_file_sharing: false,
        zero_knowledge_encryption: false,
        two_factor_authentication: true,
        gdpr_compliant_synchronization: true,
        aes_256_encryption: true,
        zero_knowledge_access_from_browsers: false,
        no_third_party_file_access: false,
        sync_any_folders: true,
        web_app: true,
        windows_desktop_app: true,
        mac_desktop_app: true,
        linux_desktop_app: true,
        android_app: true,
        ios_app: true,
        backup_folders_and_files: true,
        file_sharding: false,
        unlimited_bandwidth: false,
        free_account_storage: '2GB',
        support_center: true,
        live_chat_support: true,
        open_source: false,
        file_requests: true,
        password_protection_for_links: true,
        download_limits_for_links: false,
      },
    },
    {
      name: 'pCloud',
      logo: 'pcloud',
      features: {
        encryption_at_rest_and_in_transit: true,
        end_to_end_encrypted_storage: true,
        end_to_end_encrypted_file_sharing: true,
        zero_knowledge_encryption: true,
        two_factor_authentication: true,
        gdpr_compliant_synchronization: true,
        aes_256_encryption: true,
        zero_knowledge_access_from_browsers: true,
        no_third_party_file_access: true,
        sync_any_folders: true,
        web_app: true,
        windows_desktop_app: true,
        mac_desktop_app: true,
        linux_desktop_app: true,
        android_app: true,
        ios_app: true,
        backup_folders_and_files: true,
        file_sharding: false,
        unlimited_bandwidth: false,
        free_account_storage: '10GB',
        support_center: true,
        live_chat_support: false,
        open_source: false,
        file_requests: true,
        password_protection_for_links: true,
        download_limits_for_links: false,
      },
    },
    {
      name: 'OneDrive',
      logo: 'onedrive',
      features: {
        encryption_at_rest_and_in_transit: true,
        end_to_end_encrypted_storage: false,
        end_to_end_encrypted_file_sharing: false,
        zero_knowledge_encryption: false,
        two_factor_authentication: true,
        gdpr_compliant_synchronization: true,
        aes_256_encryption: true,
        zero_knowledge_access_from_browsers: true,
        no_third_party_file_access: false,
        sync_any_folders: false,
        web_app: true,
        windows_desktop_app: true,
        mac_desktop_app: true,
        linux_desktop_app: false,
        android_app: true,
        ios_app: true,
        backup_folders_and_files: false,
        file_sharding: false,
        unlimited_bandwidth: false,
        free_account_storage: '5GB',
        support_center: true,
        live_chat_support: false,
        open_source: false,
        file_requests: true,
        password_protection_for_links: true,
        download_limits_for_links: false,
      },
    },
  ];

  const getFeature = (feature) => competitors.map((brand) => brand.features[feature]);

  const table = [
    {
      name: `${textContent.table.sections.encryption_and_security.name}`,
      rows: [
        {
          title: `${textContent.table.sections.encryption_and_security.features.encryption_at_rest_and_in_transit}`,
          feature: getFeature('encryption_at_rest_and_in_transit'),
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
        {
          title: `${textContent.table.sections.encryption_and_security.features.gdpr_compliant_synchronization}`,
          feature: getFeature('gdpr_compliant_synchronization'),
        },
        {
          title: `${textContent.table.sections.encryption_and_security.features.aes_256_encryption}`,
          feature: getFeature('aes_256_encryption'),
        },
        {
          title: `${textContent.table.sections.encryption_and_security.features.zero_knowledge_access_from_browsers}`,
          feature: getFeature('zero_knowledge_access_from_browsers'),
        },
        {
          title: `${textContent.table.sections.encryption_and_security.features.no_third_party_file_access}`,
          feature: getFeature('no_third_party_file_access'),
        },
      ],
    },
    {
      name: `${textContent.table.sections.storage_and_file_management.name}`,
      rows: [
        {
          title: `${textContent.table.sections.storage_and_file_management.features.sync_any_folders}`,
          feature: getFeature('sync_any_folders'),
        },
        {
          title: `${textContent.table.sections.storage_and_file_management.features.web_app}`,
          feature: getFeature('web_app'),
        },
        {
          title: `${textContent.table.sections.storage_and_file_management.features.windows_desktop_app}`,
          feature: getFeature('windows_desktop_app'),
        },
        {
          title: `${textContent.table.sections.storage_and_file_management.features.mac_desktop_app}`,
          feature: getFeature('mac_desktop_app'),
        },
        {
          title: `${textContent.table.sections.storage_and_file_management.features.linux_desktop_app}`,
          feature: getFeature('linux_desktop_app'),
        },
        {
          title: `${textContent.table.sections.storage_and_file_management.features.android_app}`,
          feature: getFeature('android_app'),
        },
        {
          title: `${textContent.table.sections.storage_and_file_management.features.ios_app}`,
          feature: getFeature('ios_app'),
        },
        {
          title: `${textContent.table.sections.storage_and_file_management.features.backup_folders_and_files}`,
          feature: getFeature('backup_folders_and_files'),
        },
        {
          title: `${textContent.table.sections.storage_and_file_management.features.file_sharding}`,
          feature: getFeature('file_sharding'),
        },
        {
          title: `${textContent.table.sections.storage_and_file_management.features.unlimited_bandwidth}`,
          feature: getFeature('unlimited_bandwidth'),
        },
        {
          title: `${textContent.table.sections.storage_and_file_management.features.free_account_storage}`,
          feature: getFeature('free_account_storage'),
        },
      ],
    },
    {
      name: `${textContent.table.sections.deployment.name}`,
      rows: [
        {
          title: `${textContent.table.sections.deployment.features.support_center}`,
          feature: getFeature('support_center'),
        },
        {
          title: `${textContent.table.sections.deployment.features.live_chat_support}`,
          feature: getFeature('live_chat_support'),
        },
        {
          title: `${textContent.table.sections.deployment.features.open_source}`,
          feature: getFeature('open_source'),
        },
      ],
    },
    {
      name: `${textContent.table.sections.controlled_file_sharing.name}`,
      rows: [
        {
          title: `${textContent.table.sections.controlled_file_sharing.features.file_requests}`,
          feature: getFeature('file_requests'),
        },
        {
          title: `${textContent.table.sections.controlled_file_sharing.features.password_protection_for_links}`,
          feature: getFeature('password_protection_for_links'),
        },
        {
          title: `${textContent.table.sections.controlled_file_sharing.features.download_limits_for_links}`,
          feature: getFeature('download_limits_for_links'),
        },
      ],
    },
  ];

  return (
    <section
      id="buy"
      className="relative flex w-full flex-col bg-gradient-to-b from-white via-neutral-10 to-white pt-16"
    >
      <div className="flex flex-col">
        {/* Header */}
        <div className="relative z-20 flex flex-col items-center justify-center overflow-hidden bg-primary px-6 pt-20 pb-16 text-white md:pt-32">
          <div className="relative z-10 mb-16 flex flex-col items-center justify-center md:mb-8">
            <h1 className="mb-4 text-center text-4xl font-medium sm:text-5xl md:text-6xl">
              {textContent.title.line1}
              <br className="hidden sm:inline-flex" /> {textContent.title.line2}
            </h1>

            <h2 className="text-center text-xl md:text-lg">{textContent.description}</h2>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center">
            <a
              href="https://drive.internxt.com/new"
              id="get-started-link"
              target="_top"
              rel="noreferrer"
              className="flex w-full items-center justify-center rounded-lg border border-transparent bg-white px-6 py-2 text-lg font-medium text-primary hover:bg-blue-10 focus:outline-none sm:inline-flex sm:w-auto sm:text-base"
            >
              {textContent.cta}
            </a>

            <p className="mt-1.5 text-center text-base opacity-80 md:text-xs">{textContent.noCredirCardNeeded}</p>
          </div>

          <div className="absolute top-2/3 left-0 h-full w-full scale-y-200 rounded-t-full-percentage bg-primary-dark blur-3xl filter" />
        </div>

        {/* Table */}
        <div className="flex w-screen flex-col items-center justify-start overflow-x-auto bg-white py-10 xl:overflow-x-visible">
          <div className="mx-auto flex flex-col items-center justify-center px-6">
            <table className="group relative mb-20 table-auto border-collapse bg-none text-center text-base text-cool-gray-80">
              {/* Competitors */}
              <thead className="top-16 z-20 h-44 text-cool-gray-90 xl:sticky">
                <tr className="relative z-10 bg-white bg-opacity-80 backdrop-blur-md backdrop-filter">
                  {/* Drag hint */}
                  <th className="pointer-events-none h-44 align-bottom">
                    <div className="duration-250 flex h-32 flex-row items-center justify-start space-x-4 p-6 opacity-100 transition-opacity delay-1000 group-hover:opacity-0 xl:hidden">
                      <img
                        loading="lazy"
                        className="h-8 w-8 object-cover object-center"
                        src="/images/comparison/drag_horizontal.webp"
                        draggable="false"
                        alt="Drag horizontal"
                      />
                      <div className="mt-1 flex flex-col items-start justify-center text-left text-sm font-medium leading-tight text-cool-gray-40">
                        <span>{textContent.table.drag.line1}</span>
                        <span>{textContent.table.drag.line2}</span>
                      </div>
                    </div>
                  </th>
                  <th className="relative p-16 text-lg font-medium">
                    {' '}
                    <div className="absolute bottom-0 left-0 flex h-32 w-32 flex-col items-center justify-center space-y-1.5 rounded-t-2xl bg-blue-10">
                      <img
                        loading="lazy"
                        className="h-12 w-12 object-cover object-center"
                        src={`/images/comparison/competitors/${competitors[0].logo}.webp`}
                        draggable="false"
                        alt={`${competitors[0].name} logo`}
                      />
                      <span>{competitors[0].name}</span>
                    </div>
                  </th>
                  {competitors.slice(1).map((col, index) => (
                    <th className="relative p-14 font-normal" key={col.name}>
                      {' '}
                      <div
                        className={`absolute bottom-0 left-0 flex h-28 w-28 flex-col items-center justify-center space-y-1 rounded-t-lg ${
                          index % 2 !== 0 && 'bg-cool-gray-5'
                        }`}
                      >
                        <img
                          loading="lazy"
                          className="h-8 w-8 object-cover object-center"
                          src={`/images/comparison/competitors/${col.logo}.webp`}
                          draggable="false"
                          alt={`${col.name} logo`}
                        />
                        <span>{col.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {table.map((section) => (
                <Fragment key={section.name}>
                  {/* Section */}
                  <thead className="top-60 z-10 h-14 text-left text-cool-gray-90 md:h-12 xl:sticky">
                    <tr className="h-14 bg-cool-gray-10 font-medium md:h-12">
                      <td className="whitespace-nowrap rounded-l-lg px-6 text-lg">{section.name}</td>
                      {competitors.map((item) => (
                        <td key={item.name} />
                      ))}
                    </tr>
                  </thead>

                  {/* Rows */}
                  <tbody className="divide-y divide-cool-gray-10">
                    {section.rows.map((row, rowIndex) => (
                      <tr className="h-14 md:h-12" key={row.title}>
                        <td className="whitespace-nowrap px-6 text-left text-base">{row.title}</td>
                        <td className={`${rowIndex !== 0 && 'border-t border-blue-20 border-opacity-50'} bg-blue-10`}>
                          <div className="flex h-full flex-col items-center justify-center">
                            {typeof row.feature[0] === 'boolean' &&
                              (row.feature[0] ? (
                                <UilCheck className="h-6 w-6 text-blue-50" />
                              ) : (
                                <UilMinus className="h-6 w-6 text-blue-20" />
                              ))}
                            {typeof row.feature[0] === 'string' && (
                              <span className="font-medium text-primary">{row.feature[0]}</span>
                            )}
                          </div>
                        </td>
                        {row.feature.slice(1).map((feature, columnIndex) => (
                          <td
                            className={`${columnIndex % 2 !== 0 && 'bg-cool-gray-5'}`}
                            key={`${row.title}${columnIndex.toString()}`}
                          >
                            <div className="flex h-full flex-col items-center justify-center">
                              {typeof feature === 'boolean' &&
                                (feature ? (
                                  <UilCheck className="h-6 w-6 text-cool-gray-40" />
                                ) : (
                                  <UilMinus className="h-6 w-6 text-cool-gray-20" />
                                ))}
                              {typeof feature === 'string' && <span className="text-cool-gray-40">{feature}</span>}
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
                      id="get-started-link"
                      target="_top"
                      rel="noreferrer"
                      className="absolute top-full left-0 flex h-14 w-full flex-col items-center justify-center whitespace-nowrap rounded-b-2xl bg-primary text-lg font-medium text-white hover:bg-primary-dark md:h-10 md:text-base"
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
