import { Fragment } from 'react';
import { UilCheck, UilMinus } from '@iconscout/react-unicons';
import Link from 'next/link';
import { SIGNUP_DRIVE_WEB } from '@/constants';

const TableSection = ({ textContent }) => {
  const competitors = [
    {
      name: 'Internxt',
      logo: 'internxt.webp',
      features: {
        encryption_at_rest_and_in_transit: true,
        end_to_end_encrypted_storage: true,
        post_quantum_encryption: true,
        end_to_end_encrypted_file_sharing: true,
        zero_knowledge_encryption: true,
        two_factor_authentication: true,
        gdpr_compliant_synchronization: true,
        aes_256_encryption: true,
        zero_knowledge_access_from_browsers: true,
        no_third_party_file_access: true,
        sync_any_folders: true,
        webdav_support: true,
        web_app: true,
        windows_desktop_app: true,
        mac_desktop_app: true,
        linux_desktop_app: true,
        android_app: true,
        ios_app: true,
        business_plans: true,
        availability: true,
        backup_folders_and_files: true,
        file_sharding: true,
        unlimited_bandwidth: true,
        free_account_storage: '1GB',
        monthly_base_pricing: '$4.99',
        max_storage_amount: '10TB',
        support_center: true,
        live_chat_support: true,
        open_source: true,
        file_requests: false,
        lifetime_plans: true,
        password_protection_for_links: true,
        download_limits_for_links: true,
      },
    },

    {
      name: 'Google Drive',
      logo: 'google_drive.webp',
      features: {
        encryption_at_rest_and_in_transit: true,
        end_to_end_encrypted_storage: false,
        post_quantum_encryption: true,
        end_to_end_encrypted_file_sharing: false,
        zero_knowledge_encryption: false,
        business_plans: true,
        two_factor_authentication: true,
        gdpr_compliant_synchronization: true,
        aes_256_encryption: true,
        availability: false,
        zero_knowledge_access_from_browsers: false,
        no_third_party_file_access: false,
        sync_any_folders: false,
        webdav_support: false,
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
        monthly_base_pricing: '$1.99',
        max_storage_amount: '2TB',
        lifetime_plans: false,
        support_center: true,
        live_chat_support: false,
        open_source: false,
        file_requests: true,
        password_protection_for_links: false,
        download_limits_for_links: false,
      },
    },
    {
      name: 'iCloud',
      logo: 'icloud.png',
      features: {
        encryption_at_rest_and_in_transit: true,
        end_to_end_encrypted_storage: true,
        post_quantum_encryption: true,
        end_to_end_encrypted_file_sharing: true,
        zero_knowledge_encryption: true,
        two_factor_authentication: true,
        gdpr_compliant_synchronization: true,
        aes_256_encryption: true,
        zero_knowledge_access_from_browsers: true,
        no_third_party_file_access: true,
        sync_any_folders: true,
        webdav_support: false,
        web_app: true,
        windows_desktop_app: true,
        mac_desktop_app: true,
        linux_desktop_app: false,
        android_app: false,
        ios_app: true,
        business_plans: true,
        availability: false,
        backup_folders_and_files: true,
        file_sharding: true,
        unlimited_bandwidth: false,
        free_account_storage: '5GB',
        monthly_base_pricing: '$0.99',
        max_storage_amount: '12TB',
        support_center: true,
        live_chat_support: true,
        open_source: false,
        file_requests: true,
        lifetime_plans: false,
        password_protection_for_links: true,
        download_limits_for_links: false,
      },
    },
    {
      name: 'OneDrive',
      logo: 'onedrive.webp',
      features: {
        encryption_at_rest_and_in_transit: true,
        end_to_end_encrypted_storage: false,
        post_quantum_encryption: true,
        end_to_end_encrypted_file_sharing: false,
        zero_knowledge_encryption: false,
        two_factor_authentication: true,
        gdpr_compliant_synchronization: true,
        aes_256_encryption: true,
        zero_knowledge_access_from_browsers: false,
        no_third_party_file_access: false,
        sync_any_folders: false,
        business_plans: true,
        webdav_support: true,
        web_app: true,
        availability: false,
        windows_desktop_app: true,
        mac_desktop_app: true,
        linux_desktop_app: false,
        android_app: true,
        ios_app: true,
        backup_folders_and_files: false,
        file_sharding: false,
        unlimited_bandwidth: false,
        free_account_storage: '6GB',
        monthly_base_pricing: '$1.99',
        max_storage_amount: '6TB',
        lifetime_plans: false,
        support_center: true,
        live_chat_support: false,
        open_source: false,
        file_requests: true,
        password_protection_for_links: true,
        download_limits_for_links: false,
      },
    },
    {
      name: 'Dropbox',
      logo: 'dropbox.webp',
      features: {
        encryption_at_rest_and_in_transit: true,
        end_to_end_encrypted_storage: false,
        post_quantum_encryption: false,
        end_to_end_encrypted_file_sharing: false,
        zero_knowledge_encryption: false,
        two_factor_authentication: true,
        gdpr_compliant_synchronization: true,
        aes_256_encryption: true,
        zero_knowledge_access_from_browsers: false,
        availability: true,
        no_third_party_file_access: false,
        business_plans: true,
        sync_any_folders: true,
        webdav_support: false,
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
        monthly_base_pricing: '$18',
        max_storage_amount: '3TB',
        lifetime_plans: false,
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
      logo: 'pcloud.webp',
      features: {
        encryption_at_rest_and_in_transit: true,
        end_to_end_encrypted_storage: true,
        post_quantum_encryption: false,
        end_to_end_encrypted_file_sharing: true,
        zero_knowledge_encryption: true,
        two_factor_authentication: true,
        gdpr_compliant_synchronization: true,
        aes_256_encryption: true,
        zero_knowledge_access_from_browsers: true,
        no_third_party_file_access: true,
        sync_any_folders: true,
        webdav_support: true,
        web_app: true,
        availability: true,
        windows_desktop_app: true,
        mac_desktop_app: true,
        linux_desktop_app: true,
        android_app: true,
        business_plans: true,
        ios_app: true,
        backup_folders_and_files: true,
        file_sharding: false,
        unlimited_bandwidth: false,
        free_account_storage: '10GB',
        monthly_base_pricing: '$4.99',
        max_storage_amount: '2TB',
        lifetime_plans: true,
        support_center: true,
        live_chat_support: false,
        open_source: false,
        file_requests: true,
        password_protection_for_links: true,
        download_limits_for_links: false,
      },
    },
    {
      name: 'Tresorit',
      logo: 'tresorit.webp',
      features: {
        encryption_at_rest_and_in_transit: true,
        end_to_end_encrypted_storage: true,
        post_quantum_encryption: false,
        end_to_end_encrypted_file_sharing: true,
        zero_knowledge_encryption: true,
        two_factor_authentication: true,
        gdpr_compliant_synchronization: true,
        business_plans: true,
        aes_256_encryption: true,
        zero_knowledge_access_from_browsers: true,
        no_third_party_file_access: true,
        sync_any_folders: true,
        availability: true,
        webdav_support: false,
        web_app: true,
        windows_desktop_app: true,
        mac_desktop_app: true,
        linux_desktop_app: true,
        android_app: true,
        ios_app: true,
        backup_folders_and_files: false,
        file_sharding: false,
        unlimited_bandwidth: true,
        free_account_storage: '3GB',
        monthly_base_pricing: '$11.99',
        max_storage_amount: '4TB',
        lifetime_plans: false,
        support_center: true,
        live_chat_support: true,
        open_source: false,
        file_requests: true,
        password_protection_for_links: true,
        download_limits_for_links: true,
      },
    },
    {
      name: 'Sync',
      logo: 'sync.webp',
      features: {
        encryption_at_rest_and_in_transit: true,
        end_to_end_encrypted_storage: true,
        post_quantum_encryption: false,
        end_to_end_encrypted_file_sharing: true,
        zero_knowledge_encryption: true,
        two_factor_authentication: true,
        gdpr_compliant_synchronization: true,
        business_plans: true,
        aes_256_encryption: true,
        zero_knowledge_access_from_browsers: true,
        no_third_party_file_access: true,
        sync_any_folders: true,
        availability: false,
        webdav_support: false,
        web_app: true,
        windows_desktop_app: true,
        mac_desktop_app: true,
        linux_desktop_app: false,
        android_app: true,
        ios_app: true,
        backup_folders_and_files: true,
        file_sharding: false,
        unlimited_bandwidth: false,
        free_account_storage: '5GB',
        monthly_base_pricing: '$8.00',
        max_storage_amount: '6TB',
        lifetime_plans: false,
        support_center: true,
        live_chat_support: false,
        open_source: false,
        file_requests: true,
        password_protection_for_links: true,
        download_limits_for_links: true,
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
          title: `${textContent.table.sections.encryption_and_security.features.post_quantum_encryption}`,
          feature: getFeature('post_quantum_encryption'),
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
          title: `${textContent.table.sections.encryption_and_security.features.open_source}`,
          feature: getFeature('open_source'),
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
          title: `${textContent.table.sections.storage_and_file_management.features.webdav_support}`,
          feature: getFeature('webdav_support'),
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
          title: `${textContent.table.sections.storage_and_file_management.features.availability}`,
          feature: getFeature('availability'),
        },
        {
          title: `${textContent.table.sections.storage_and_file_management.features.sync_any_folders}`,
          feature: getFeature('sync_any_folders'),
        },
        {
          title: `${textContent.table.sections.storage_and_file_management.features.backup_folders_and_files}`,
          feature: getFeature('backup_folders_and_files'),
        },

        {
          title: `${textContent.table.sections.storage_and_file_management.features.unlimited_bandwidth}`,
          feature: getFeature('unlimited_bandwidth'),
        },
      ],
    },
    {
      name: `${textContent.table.sections.controlled_file_sharing.name}`,
      rows: [
        {
          title: `${textContent.table.sections.controlled_file_sharing.features.password_protection_for_links}`,
          feature: getFeature('password_protection_for_links'),
        },
        {
          title: `${textContent.table.sections.controlled_file_sharing.features.download_limits_for_links}`,
          feature: getFeature('download_limits_for_links'),
        },
        {
          title: `${textContent.table.sections.controlled_file_sharing.features.file_requests}`,
          feature: getFeature('file_requests'),
        },
      ],
    },
    {
      name: `${textContent.table.sections.pricing.name}`,
      rows: [
        {
          title: `${textContent.table.sections.pricing.features.free_account_storage}`,
          feature: getFeature('free_account_storage'),
        },
        {
          title: `${textContent.table.sections.pricing.features.monthly_base_pricing}`,
          feature: getFeature('monthly_base_pricing'),
        },
        {
          title: `${textContent.table.sections.pricing.features.max_storage_amount}`,
          feature: getFeature('max_storage_amount'),
        },
        {
          title: `${textContent.table.sections.pricing.features.lifetime_plans}`,
          feature: getFeature('lifetime_plans'),
        },
      ],
    },
    {
      name: `${textContent.table.sections.deployment.name}`,
      rows: [
        {
          title: `${textContent.table.sections.deployment.features.business_plans}`,
          feature: getFeature('business_plans'),
        },
        {
          title: `${textContent.table.sections.deployment.features.support_center}`,
          feature: getFeature('support_center'),
        },
        {
          title: `${textContent.table.sections.deployment.features.live_chat_support}`,
          feature: getFeature('live_chat_support'),
        },
      ],
    },
  ];

  return (
    <section id="buy" className="relative flex w-full flex-col bg-gradient-to-b from-white via-neutral-10 to-white">
      <div className="flex flex-col">
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
                      <div className="mt-1 flex flex-col items-start justify-center text-left text-sm font-medium leading-tight text-gray-40">
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
                        src={`/images/comparison/competitors/${competitors[0].logo}`}
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
                        className={`absolute bottom-0 left-0 flex h-28 w-28 flex-col items-center justify-center space-y-1 rounded-t-lg `}
                      >
                        <img
                          loading="lazy"
                          className="h-8 w-8 object-contain object-center"
                          src={`/images/comparison/competitors/${col.logo}`}
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
                        <td
                          className={`${
                            rowIndex !== 0 && 'border-t border-blue-20 border-opacity-50'
                          } bg-primary bg-opacity-6`}
                        >
                          <div className="flex h-full flex-col items-center justify-center">
                            {typeof row.feature[0] === 'boolean' &&
                              (row.feature[0] ? (
                                <UilCheck className="h-8 w-8 text-primary" />
                              ) : (
                                <UilMinus className="h-8 w-8 text-primary" />
                              ))}
                            {typeof row.feature[0] === 'string' && (
                              <span className="font-medium text-primary">{row.feature[0]}</span>
                            )}
                          </div>
                        </td>
                        {row.feature.slice(1).map((feature, columnIndex) => (
                          <td key={`${row.title}${columnIndex.toString()}`}>
                            <div className="flex h-full flex-col items-center justify-center">
                              {typeof feature === 'boolean' &&
                                (feature ? (
                                  <UilCheck className="h-8 w-8 text-cool-gray-40" />
                                ) : (
                                  <UilMinus className="h-8 w-8 text-cool-gray-20" />
                                ))}
                              {typeof feature === 'string' && <span className="text-gray-60">{feature}</span>}
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
                    <Link
                      href={SIGNUP_DRIVE_WEB}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="get-started-link"
                      className="absolute left-0 top-full flex h-14 w-full cursor-pointer flex-col items-center justify-center whitespace-nowrap rounded-b-2xl bg-primary text-lg font-medium text-white hover:bg-primary-dark md:h-10 md:text-base"
                    >
                      {textContent.table.startNow}
                    </Link>
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

export default TableSection;
