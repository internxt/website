/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import { Info } from '@phosphor-icons/react';
import { Tooltip } from 'react-tooltip';
import { getImage } from '@/lib/getImage';

interface ComparisonHeaderProps {
  textContent: any;
  logo?: string;
  hideTooltip?: boolean;
}

export const ComparisonHeader = ({ textContent, logo, hideTooltip }: ComparisonHeaderProps) => {
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
      logo: logo ?? '../../../logos/pcloud-alternative/pcloud-logo-and-name.svg',
      features: {
        codeTransparency: textContent.tableSection.features.codeTransparency,
        encryption: textContent.tableSection.features.encryption,
        pricing: textContent.tableSection.features.pricing,
        features: textContent.tableSection.features.features,
        comunityAudits: textContent.tableSection.features.comunityAudits,
        liveSupport: textContent.tableSection.features.liveSupport,
        dataTrackers: textContent.tableSection.features.dataTrackers,
        privacyLaws: textContent.tableSection.features.privacyLaws,
        postQuantumEncryption: textContent.tableSection.features.postQuantumEncryption,
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

  return (
    <section className="overflow-hidden bg-white px-5 py-20">
      <div className="flex flex-col items-center justify-center gap-6 lg:gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="w-[320px] text-3xl font-semibold text-gray-100 lg:w-full lg:text-5xl">{textContent.title}</h2>
          <p className="w-[320px] text-base text-gray-80 lg:w-[774px] lg:text-xl">{textContent.description}</p>
        </div>
        <div className="flex w-screen flex-col overflow-x-auto xl:overflow-x-visible">
          <table className="group relative mx-auto table-auto border-collapse overflow-x-auto overflow-y-auto bg-none text-center text-base text-cool-gray-80">
            <thead className="">
              <tr className="">
                <th className="pointer-events-none align-bottom">
                  <div className="duration-250 flex h-32 flex-row items-center justify-start space-x-4 p-10 opacity-100 transition-opacity delay-1000 group-hover:opacity-0 xl:hidden">
                    <img
                      loading="lazy"
                      className="h-8 w-8 object-cover object-center"
                      src="/images/comparison/drag_horizontal.webp"
                      draggable="false"
                      alt="Drag horizontal"
                    />
                    <div className="mt-1 flex flex-col items-start justify-center text-left text-sm font-medium leading-tight text-gray-40">
                      <span>{textContent.tableSection.drag.line1}</span>
                      <span>{textContent.tableSection.drag.line2}</span>
                    </div>
                  </div>
                </th>

                <th key={competitors[0].name}>
                  <div className="flex h-[128px] w-[446px] flex-col items-center justify-center rounded-tl-2xl bg-primary/6 px-20  py-12 ring-1 ring-green-120">
                    <img
                      loading="lazy"
                      src={`${competitors[0].logo}`}
                      draggable="false"
                      height={31.29}
                      width={128}
                      alt={`${competitors[0].name} logo`}
                    />
                  </div>
                </th>

                <th key={competitors[1].name}>
                  <div className="flex h-[128px] w-[446px] flex-col items-center justify-center rounded-tr-2xl bg-white px-20  py-12 ring-1 ring-green-120">
                    <img
                      loading="lazy"
                      src={getImage('/images/comparison/competitors/pCloud.webp')}
                      draggable="false"
                      height={31.29}
                      width={128}
                      alt={`pCloud logo`}
                    />
                  </div>
                </th>
              </tr>
            </thead>

            {table.map((section) => (
              <Fragment key={section.name}>
                <tbody className="">
                  {section.rows.map((row, index) => (
                    <tr className="h-14 md:h-16 " key={row.title}>
                      <td>
                        <div
                          className={`flex h-[64px] items-center justify-start whitespace-nowrap px-6 text-left text-base font-normal text-gray-95 ring-1 ring-green-120
                          ${index % 2 === 0 ? 'bg-neutral-5' : 'bg-white'}
                          ${index === 0 ? 'rounded-tl-16' : ''}
                          ${index === section.rows.length - 1 ? 'rounded-bl-16' : ''}
                          overflow-hidden
                        `}
                        >
                          {row.title}
                        </div>
                      </td>
                      <td>
                        <div
                          className={`flex h-[64px] flex-col items-center justify-center ring-1 ring-green-120 ${
                            index % 2 === 0 ? 'bg-neutral-35' : 'bg-neutral-17'
                          }`}
                        >
                          {typeof row.feature[0] === 'string' && (
                            <span className="text-base font-semibold text-gray-100">{row.feature[0]}</span>
                          )}
                        </div>
                      </td>
                      {row.feature.slice(1).map((feature, columnIndex) => (
                        <td className="h-14 md:h-16" key={`${row.title}${columnIndex.toString()}`}>
                          <div
                            className={`flex h-full flex-row items-center justify-center gap-3 ring-1 ring-green-120   ${
                              index % 2 === 0 ? 'bg-neutral-5' : 'bg-white'
                            }
                             ${index === section.rows.length - 1 ? 'rounded-br-16' : ''}`}
                          >
                            {typeof feature === 'string' && (
                              <span className="text-base font-normal text-gray-100">{feature}</span>
                            )}
                            {row.id === section.rows.length - 1 && !hideTooltip && (
                              <div className="hidden lg:flex">
                                <Tooltip
                                  variant="dark"
                                  id="info-icon"
                                  delayShow={400}
                                  className="z-40 max-w-xs rounded-lg drop-shadow-md"
                                >
                                  {textContent.tooltip}
                                </Tooltip>
                                <Info data-tooltip-id="info-icon" className="text-primary" />
                              </div>
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Fragment>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
};
