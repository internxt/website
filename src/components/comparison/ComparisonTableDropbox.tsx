/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import { Info } from '@phosphor-icons/react';
import { Tooltip } from 'react-tooltip';
import { getImage } from '@/lib/getImage';

interface ComparisonTableDropboxProps {
  textContent: any;
  logo?: string;
  hideTooltip?: boolean;
  competitor: 'pCloud' | 'MEGA' | 'Dropbox';
}

export const ComparisonTableDropbox = ({ textContent, logo, hideTooltip, competitor }: ComparisonTableDropboxProps) => {
  const parseText = (text: string): string => {
    return typeof text === 'string' ? text.replace(/{{competitor}}/g, competitor) : text;
  };

  const getDescription = (): string => {
    const descriptionKey = COMPETITOR_CONFIG[competitor].description;
    return textContent[descriptionKey];
  };

  const competitors = [
    {
      name: 'Internxt',
      logo: '../../../logos/pcloud-alternative/inxt-logo-and-name.svg',
      features: {
        codeTransparency: textContent.tableSection.internxtFeatures.codeTransparency,
        encryption: textContent.tableSection.internxtFeatures.encryption,
        pricing: textContent.tableSection.internxtFeatures.pricing,
        features: textContent.tableSection.internxtFeatures.features,
        comunityAudits: textContent.tableSection.internxtFeatures.comunityAudits,
        liveSupport: textContent.tableSection.internxtFeatures.liveSupport,
        dataTrackers: textContent.tableSection.internxtFeatures.dataTrackers,
        privacyLaws: textContent.tableSection.internxtFeatures.privacyLaws,
        postQuantumEncryption: textContent.tableSection.internxtFeatures.postQuantumEncryption,
      },
    },
    {
      name: 'alternative',
      logo: logo || '',
      features: {
        codeTransparency: textContent.tableSection.DropboxFeatures.codeTransparency,
        encryption: textContent.tableSection.DropboxFeatures.encryption,
        pricing: textContent.tableSection.DropboxFeatures.pricing,
        features: textContent.tableSection.DropboxFeatures.features,
        comunityAudits: textContent.tableSection.DropboxFeatures.comunityAudits,
        liveSupport: textContent.tableSection.DropboxFeatures.liveSupport,
        dataTrackers: textContent.tableSection.DropboxFeatures.dataTrackers,
        privacyLaws: textContent.tableSection.DropboxFeatures.privacyLaws,
        postQuantumEncryption: textContent.tableSection.DropboxFeatures.postQuantumEncryption,
      },
    },
  ];

  const getFeature = (feature) => competitors.map((brand) => brand.features[feature]);

  const table = [
    {
      name: `tableComparison`,
      rows: [
        {
          id: 0,
          title: `${textContent.tableSection.comparisons.codeTransparency}`,
          feature: getFeature('codeTransparency'),
        },
        {
          id: 1,
          title: `${textContent.tableSection.comparisons.encryption}`,
          feature: getFeature('encryption'),
        },
        {
          id: 2,
          title: `${textContent.tableSection.comparisons.postQuantumEncryption}`,
          feature: getFeature('postQuantumEncryption'),
        },
        {
          id: 3,
          title: `${textContent.tableSection.comparisons.pricing}`,
          feature: getFeature('pricing'),
        },
        {
          id: 4,
          title: `${textContent.tableSection.comparisons.features}`,
          feature: getFeature('features'),
        },
        {
          id: 5,
          title: `${textContent.tableSection.comparisons.comunityAudits}`,
          feature: getFeature('comunityAudits'),
        },
        {
          id: 6,
          title: `${textContent.tableSection.comparisons.liveSupport}`,
          feature: getFeature('liveSupport'),
        },
        {
          id: 7,
          title: `${textContent.tableSection.comparisons.dataTrackers}`,
          feature: getFeature('dataTrackers'),
        },
        {
          id: 8,
          title: `${textContent.tableSection.comparisons.privacyLaws}`,
          feature: getFeature('privacyLaws'),
        },
      ],
    },
  ];

  const COMPETITOR_CONFIG = {
    pCloud: {
      featuresPath: 'pcloudFeatures',
      description: 'pCloudDescription',
      defaultLogo: '../../../logos/pcloud-alternative/pcloud-logo-and-name.svg',
    },
    MEGA: {
      featuresPath: 'megaFeatures',
      description: 'megaDescription',
      defaultLogo: '../../../logos/pcloud-alternative/mega-logo-and-name.svg',
    },
    Dropbox: {
      featuresPath: 'dropboxFeatures',
      description: 'dropboxDescription',
      defaultLogo: '../../../logos/pcloud-alternative/dropbox-logo-and-name.svg',
    },
  } as const;

  return (
    <section className="overflow-hidden bg-white px-5 py-20">
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="lead text-30 font-semibold text-gray-100 lg:text-3xl">{parseText(textContent.title)}</h2>
          <p className="w-[345px] text-base leading-tight text-gray-80 lg:w-[845px] lg:text-xl">{getDescription()}</p>
        </div>

        <div className="w-full overflow-x-auto">
          <div className="min-w-[627px] px-4 lg:px-0">
            <table className="mx-auto table-fixed bg-none text-center text-base text-cool-gray-80">
              <thead>
                <tr>
                  <th className="w-[170px] lg:w-[247px]"></th>
                  <th className="w-[190px] lg:w-[440px]">
                    <div className="flex h-[64px] flex-col items-center justify-center rounded-tl-2xl bg-neutral-17 p-6 ring-1 ring-neutral-25 lg:h-[128px] lg:px-20 lg:py-12">
                      <img
                        loading="lazy"
                        src={competitors[0].logo}
                        draggable="false"
                        alt={`${competitors[0].name} logo`}
                        className="h-auto max-w-full"
                      />
                    </div>
                  </th>
                  <th className="w-[190px] lg:w-[440px]">
                    <div className="flex h-[64px] flex-col items-center justify-center rounded-tr-16 bg-white p-6 ring-1 ring-neutral-25 lg:h-[128px] lg:px-20 lg:py-12">
                      <img
                        loading="lazy"
                        src={getImage(competitors[1].logo)}
                        draggable="false"
                        alt={`${competitors[1].name} logo`}
                        className="h-auto max-w-full"
                      />
                    </div>
                  </th>
                </tr>
              </thead>

              {table.map((section) => (
                <Fragment key={section.name}>
                  <tbody className="divide-y divide-[#D0E2FF]">
                    {section.rows.map((row, index) => (
                      <tr key={row.id}>
                        <th className="align-middle">
                          <div
                            className={`flex h-[38px] w-[170px] flex-col items-start justify-center px-3 ring-1 ring-neutral-25 lg:h-[64px] lg:px-6 ${
                              index % 2 === 0 ? 'bg-neutral-10' : 'bg-white'
                            } ${index === 0 ? 'rounded-tl-2xl' : ''} ${
                              index === section.rows.length - 1 ? 'rounded-bl-2xl' : ''
                            }`}
                          >
                            <p className="whitespace-nowrap text-xs font-normal leading-tight text-gray-95 lg:text-base">
                              {row.title}
                            </p>
                          </div>
                        </th>

                        <td className="align-middle">
                          <div
                            className={`flex h-[38px] w-full flex-col items-center justify-center px-4 ring-1 ring-neutral-25 lg:h-[64px] ${
                              index % 2 === 0 ? 'bg-neutral-37' : 'bg-neutral-17'
                            }`}
                          >
                            {typeof row.feature[0] === 'string' && (
                              <span className="text-xs font-semibold text-gray-100 lg:text-base">{row.feature[0]}</span>
                            )}
                          </div>
                        </td>

                        <td className="align-middle">
                          <div
                            className={`flex h-[38px] w-full flex-col items-center justify-center px-4 ring-1 ring-neutral-25 lg:h-[64px] ${
                              index % 2 === 0 ? 'bg-white-95' : 'bg-white'
                            }`}
                          >
                            {typeof row.feature[1] === 'string' && (
                              <span className="text-xs font-normal text-gray-100 lg:text-base">{row.feature[1]}</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Fragment>
              ))}
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
