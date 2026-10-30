import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';

interface FreePlanCardProps {
  textContent: any;
  darkMode?: boolean;
  freePlanNeedsH2?: boolean;
}

const FreePlanCard = ({ textContent, darkMode = false, freePlanNeedsH2 = false }: FreePlanCardProps): JSX.Element => {
  const { openDialog } = useGlobalDialog();

  const TitleTag = freePlanNeedsH2 ? 'h2' : 'p';
  return (
    <>
      <div className="w-full lg:px-8 xl:px-28 3xl:px-80">
        <div className={`hidden h-[160px] w-full flex-col items-center justify-center gap-3 rounded-16 border  ${darkMode ? 'border-gray-71 bg-gray-95' : 'border-gray-10 bg-white dark:border-gray-71 dark:bg-gray-95'} p-4 lg:flex`}>
          <div className="flex h-[78px] w-full flex-col items-center justify-center text-start lg:h-[68px] lg:justify-between">
            <TitleTag className={`${darkMode ? 'text-white-95' : 'text-gray-95 dark:text-white-95'} text-3xl font-semibold lg:text-4xl`}>{textContent.eyeBrow}</TitleTag>
            <p className={`text-sm font-normal ${darkMode ? 'text-green-120' : 'text-gray-55 dark:text-green-120'}`}>{textContent.description}</p>
          </div>

          <button
            type="button"
            className={`flex items-center justify-center rounded-lg border border-primary ${darkMode ? 'bg-gray-95 hover:bg-gray-90 ' : 'bg-white hover:bg-gray-1 dark:bg-gray-95 dark:hover:bg-gray-90'} px-6 py-2 text-center text-lg font-medium text-primary `}
            onClick={() => {
              openDialog(GlobalDialog.FreeSpaceCardBannerPPC, { data: { darkMode } });
            }}
          >
            {textContent.cta}
          </button>
        </div>
      </div>
      <div
        className={`${darkMode ? 'border-gray-71 bg-gray-95' : 'border-gray-10 bg-white dark:border-gray-71 dark:bg-gray-95'}
            flex h-[166px] flex-col items-center justify-center gap-3 rounded-16
          border  px-1 text-center lg:hidden`}
      >
        <div className="flex h-[78px] flex-col items-center justify-center px-1 text-center">
          <p className={`${darkMode ? 'text-white-95' : 'text-gray-95 dark:text-white-95'}  text-30 font-semibold ${darkMode ? 'text-white-95' : 'text-gray-95 dark:text-white-95'}`}>{textContent.eyeBrow}</p>
          <p className={`${darkMode ? 'text-green-120' : 'text-gray-55 dark:text-green-120'} w-[313px] text-sm font-normal`}>{textContent.description}</p>
        </div>

        <button
          type="button"
          className={`flex items-center justify-center rounded-lg border border-primary ${darkMode ? 'bg-gray-95 hover:bg-[#111111]/10 ' : 'bg-white hover:bg-gray-1 dark:bg-gray-95 dark:hover:bg-[#111111]/10'} px-6 py-2 text-center text-lg font-medium text-primary `}
          onClick={() => {
            openDialog(GlobalDialog.FreeSpaceCardBannerPPC, { data: { darkMode } });
          }}
        >
          {textContent.cta}
        </button>
      </div>
    </>
  );
};

export default FreePlanCard;
