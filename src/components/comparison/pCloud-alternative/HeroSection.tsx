import SignUpBanner from '@/components/banners/SignUpBanner';
import { Fragment } from 'react';
import bannerText from '@/assets/lang/en/banners.json';
import { Info } from '@phosphor-icons/react';
import { Tooltip } from 'react-tooltip';
import { post } from 'cypress/types/jquery';

interface HeroSectionProps {
  textContent: any;
  logo?: string;
  hideTooltip?: boolean;
}

export const HeroSection = ({ textContent, logo, hideTooltip }: HeroSectionProps) => {
  const competitors = [
    {
      name: 'Internxt',
      logo: '../../../logos/pcloud-alternative/inxt-logo-and-name.svg',
      features: {
        codeTransparency: textContent.tableSection.internxtFeatures.codeTransparency,
        encryption: textContent.tableSection.internxtFeatures.encryption,
        pricing: textContent.tableSection.internxtFeatures.pricing,
        securityAudits: textContent.tableSection.internxtFeatures.securityAudits,
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
        securityAudits: textContent.tableSection.features.securityAudits,
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
          id: 2,
          title: `${textContent.tableSection.comparisons.pricing}`,
          feature: getFeature('pricing'),
        },
        {
          id: 4,
          title: `${textContent.tableSection.comparisons.securityAudits}`,
          feature: getFeature('securityAudits'),
        },
        {
          id: 5,
          title: `${textContent.tableSection.comparisons.liveSupport}`,
          feature: getFeature('liveSupport'),
        },
        {
          id: 6,
          title: `${textContent.tableSection.comparisons.dataTrackers}`,
          feature: getFeature('dataTrackers'),
        },
        {
          id: 7,
          title: `${textContent.tableSection.comparisons.privacyLaws}`,
          feature: getFeature('privacyLaws'),
        },
      ],
    },
  ];

  return (
    <section className="overflow-hidden bg-white px-5 py-20">
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        <div className="flex w-screen flex-col overflow-x-auto xl:overflow-x-visible">
          <table className="group relative mx-auto table-auto overflow-x-auto overflow-y-auto bg-none text-center text-base text-cool-gray-80">
            {/* Competitors */}
            <thead className="">
              <tr className="relative table-auto">
                {/* Drag hint */}
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
                <th className="max-w-sm align-bottom">
                  <div className="flex w-screen max-w-sm flex-col items-center justify-center rounded-t-2xl bg-primary/6 px-20 py-12 ring-1 ring-primary/6">
                    <img
                      loading="lazy"
                      src={`${competitors[0].logo}`}
                      draggable="false"
                      alt={`${competitors[0].name} logo`}
                    />
                  </div>
                </th>

                <th key={competitors[1].name}>
                  <div className="flex w-screen max-w-sm flex-col items-center justify-center bg-white px-20 py-12 ring-1 ring-white">
                    <img
                      loading="lazy"
                      src={competitors[1].logo}
                      draggable="false"
                      alt={`${competitors[1].name} logo`}
                    />
                  </div>
                </th>
              </tr>
            </thead>

            {table.map((section) => (
              <Fragment key={section.name}>
                {/* Rows */}
                <tbody className="divide-y divide-[#D0E2FF]">
                  {section.rows.map((row) => (
                    <tr className="h-14 md:h-16" key={row.title}>
                      <td className="whitespace-nowrap border-b border-[#F2F4F8] px-6 text-left text-base font-semibold">
                        {row.title}
                      </td>
                      <td className={`bg-primary/6`}>
                        <div className="flex h-full flex-col items-center justify-center">
                          {typeof row.feature[0] === 'string' && (
                            <span className="text-gray-100">{row.feature[0]}</span>
                          )}
                        </div>
                      </td>
                      {row.feature.slice(1).map((feature, columnIndex) => (
                        <td className="h-14 bg-white md:h-16" key={`${row.title}${columnIndex.toString()}`}>
                          <div className="flex h-full flex-row items-center justify-center gap-3">
                            {typeof feature === 'string' && <span className="text-gray-100">{feature}</span>}
                            {row.id === 6 && !hideTooltip && (
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
        <SignUpBanner lang="en" textContent={bannerText.SignUpPCloudAlternativeBanner} />
      </div>
    </section>
  );
};
