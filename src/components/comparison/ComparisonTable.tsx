/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import { Info } from '@phosphor-icons/react';
import { Tooltip } from 'react-tooltip';
import { getImage } from '@/lib/getImage';
import SignUpBanner from '../banners/SignUpBanner';
import bannerText from '@/assets/lang/en/banners.json';

interface ComparisonTableProps {
  textContent: any;
  logo?: string;
  hideTooltip?: boolean;
  competitor: 'pCloud' | 'MEGA' | 'Dropbox';
}

interface CompetitorFeatures {
  codeTransparency: string;
  encryption: string;
  pricing: string;
  features: string;
  communityAudits: string;
  liveSupport: string;
  dataTrackers: string;
  privacyLaws: string;
  postQuantumEncryption: string;
}

interface CompetitorData {
  name: string;
  logo: string;
  features: CompetitorFeatures;
}

interface TableRow {
  id: number;
  title: string;
  feature: string[];
}

// Configuración de competidores
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

// Mapeo de características especiales por competidor
const FEATURE_OVERRIDES = {
  Dropbox: {
    communityAudits: 'securityAudits',
    dataTrackers: 'privacyPolicy',
  },
} as const;

export const ComparisonTable = ({ textContent, logo, hideTooltip = false, competitor }: ComparisonTableProps) => {
  // Helpers
  const getCompetitorFeatures = (): CompetitorFeatures => {
    const config = COMPETITOR_CONFIG[competitor];
    return textContent.tableSection[config.featuresPath];
  };

  const getInternxtFeatures = (): CompetitorFeatures => {
    const baseFeatures = textContent.tableSection.internxtFeatures;
    const overrides = FEATURE_OVERRIDES[competitor] || {};

    return {
      ...baseFeatures,
      communityAudits: baseFeatures[overrides.communityAudits] || baseFeatures.communityAudits,
      dataTrackers: baseFeatures[overrides.dataTrackers] || baseFeatures.dataTrackers,
    };
  };

  const parseText = (text: string): string => {
    return typeof text === 'string' ? text.replace(/{{competitor}}/g, competitor) : text;
  };

  const getCompetitorLogo = (): string => {
    return logo || COMPETITOR_CONFIG[competitor].defaultLogo;
  };

  const getDescription = (): string => {
    const descriptionKey = COMPETITOR_CONFIG[competitor].description;
    return textContent[descriptionKey];
  };

  // Data preparation
  const competitors: CompetitorData[] = [
    {
      name: 'Internxt',
      logo: '../../../logos/pcloud-alternative/inxt-logo-and-name.svg',
      features: getInternxtFeatures(),
    },
    {
      name: competitor,
      logo: getCompetitorLogo(),
      features: getCompetitorFeatures(),
    },
  ];

  const getFeatureValues = (featureKey: keyof CompetitorFeatures): string[] => {
    return competitors.map((brand) => brand.features[featureKey]);
  };

  const tableRows: TableRow[] = [
    {
      id: 0,
      title: textContent.tableSection.comparisons.codeTransparency,
      feature: getFeatureValues('codeTransparency'),
    },
    {
      id: 1,
      title: textContent.tableSection.comparisons.encryption,
      feature: getFeatureValues('encryption'),
    },
    {
      id: 2,
      title: textContent.tableSection.comparisons.postQuantumEncryption,
      feature: getFeatureValues('postQuantumEncryption'),
    },
    {
      id: 3,
      title: textContent.tableSection.comparisons.pricing,
      feature: getFeatureValues('pricing'),
    },
    {
      id: 4,
      title: textContent.tableSection.comparisons.features,
      feature: getFeatureValues('features'),
    },
    {
      id: 5,
      title: textContent.tableSection.comparisons.communityAudits,
      feature: getFeatureValues('communityAudits'),
    },
    {
      id: 6,
      title: textContent.tableSection.comparisons.liveSupport,
      feature: getFeatureValues('liveSupport'),
    },
    {
      id: 7,
      title: textContent.tableSection.comparisons.dataTrackers,
      feature: getFeatureValues('dataTrackers'),
    },
    {
      id: 8,
      title: textContent.tableSection.comparisons.privacyLaws,
      feature: getFeatureValues('privacyLaws'),
    },
  ];

  // Style helpers
  const getRowBackgroundClass = (index: number, isInternxt: boolean = false): string => {
    const baseClass = index % 2 === 0 ? 'bg-neutral-5' : 'bg-white';
    if (isInternxt) {
      return index % 2 === 0 ? 'bg-neutral-35' : 'bg-neutral-17';
    }
    return baseClass;
  };

  const getRowCornerClass = (index: number, position: 'left' | 'right'): string => {
    if (index === 0) return position === 'left' ? 'rounded-tl-16' : '';
    if (index === tableRows.length - 1) {
      return position === 'left' ? 'rounded-bl-16' : 'rounded-br-16';
    }
    return '';
  };

  // Components
  const TableHeader = () => (
    <thead>
      <tr>
        <th className="pointer-events-none align-bottom" aria-label="Feature comparison"></th>
        {competitors.map((competitor, index) => (
          <th key={competitor.name} scope="col">
            <div
              className={`flex h-[128px] w-[446px] flex-col items-center justify-center px-20 py-12 ring-1 ring-green-120 ${
                index === 0 ? 'rounded-tl-2xl bg-primary/6' : 'rounded-tr-2xl bg-white'
              }`}
            >
              <img
                loading="lazy"
                src={index === 0 ? competitor.logo : getImage(competitor.logo)}
                draggable="false"
                height={31.29}
                width={128}
                alt={`${competitor.name} logo`}
              />
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );

  const TableRow = ({ row, index }: { row: TableRow; index: number }) => (
    <tr className="h-14 md:h-16" key={row.title}>
      {/* Feature name column */}
      <td className="sticky-left">
        <div
          className={`flex h-[64px] items-center justify-start overflow-hidden whitespace-nowrap px-6 text-left text-base font-normal text-gray-95 ring-1 ring-green-120 ${getRowBackgroundClass(
            index,
          )} ${getRowCornerClass(index, 'left')}`}
        >
          {row.title}
        </div>
      </td>

      {/* Internxt column */}
      <td>
        <div
          className={`flex h-[64px] flex-col items-center justify-center ring-1 ring-green-120 ${getRowBackgroundClass(
            index,
            true,
          )}`}
        >
          {typeof row.feature[0] === 'string' && (
            <span className="text-base font-semibold text-gray-100">{row.feature[0]}</span>
          )}
        </div>
      </td>

      {/* Competitor column */}
      <td className="h-14 md:h-16">
        <div
          className={`flex h-full flex-row items-center justify-center gap-3 ring-1 ring-green-120 ${getRowBackgroundClass(
            index,
          )} ${getRowCornerClass(index, 'right')}`}
        >
          {typeof row.feature[1] === 'string' && (
            <span className="text-base font-normal text-gray-100">{row.feature[1]}</span>
          )}
          {index === tableRows.length - 1 && !hideTooltip && (
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
    </tr>
  );

  return (
    <section className="space-y-10 overflow-hidden bg-white">
      <div className="flex flex-col items-center justify-center gap-6 lg:gap-16">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h2
            className="w-[320px] text-3xl font-semibold text-gray-100 lg:w-full lg:text-5xl"
            dangerouslySetInnerHTML={{ __html: parseText(textContent.title) }}
          />
          <p className="w-[320px] text-base text-gray-80 lg:w-[774px] lg:text-xl">{getDescription()}</p>
        </div>

        {/* Comparison Table */}
        <div className="flex w-screen flex-col overflow-x-auto pl-6 xl:overflow-x-visible">
          <table className="group relative mx-auto min-w-[800px] table-auto border-collapse bg-none text-center text-base text-cool-gray-80">
            <TableHeader />
            <tbody>
              {tableRows.map((row, index) => (
                <TableRow key={row.id} row={row} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sign Up Banner */}
      <SignUpBanner
        textContent={bannerText.SignUpComparison}
        lang="en"
        bgGradientColor="linear-gradient(180deg, #FFFFFF 0%, #F9F9FC 100%)"
      />
    </section>
  );
};
