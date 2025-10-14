import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';

interface FreePlanCardProps {
  textContent: any;
  darkMode?: boolean;
}

const FreePlanCard = ({ textContent, darkMode }: FreePlanCardProps): JSX.Element => {
  const { openDialog } = useGlobalDialog();

  return (
    <>
      <div className="w-full  lg:px-8 xl:px-28 3xl:px-80">
        <div
          className={`hidden h-[160px] w-full flex-col items-center justify-center gap-3 rounded-16 border  ${
            darkMode ? 'border-gray-71 bg-[#1C1C1C]' : 'border-gray-10 bg-white'
          } p-4 lg:flex`}
        >
          <div className="flex h-[78px] w-full flex-col items-center justify-center text-start lg:h-[68px] lg:justify-between">
            <p className={`${darkMode ? 'text-white-95' : 'text-gray-95'} text-3xl font-semibold lg:text-4xl`}>
              {textContent.eyeBrow}
            </p>
            <p className={`text-sm font-normal ${darkMode ? 'text-green-120' : 'text-gray-55'}`}>
              {textContent.description}
            </p>
          </div>

          <button
<<<<<<< Updated upstream
            className={`flex items-center justify-center rounded-lg border border-primary ${
              darkMode ? 'bg-[#1C1C1C] hover:bg-[#111111]/10 ' : 'bg-white hover:bg-gray-1'
            } px-6 py-2 text-center text-lg font-medium text-primary `}
=======
            className={`flex items-center justify-center rounded-lg border border-primary ${
              darkMode ? 'bg-[#1C1C1C] hover:bg-gray-90 ' : 'bg-white hover:bg-gray-1'
            } px-6 py-2 text-center text-lg font-medium text-primary `}
>>>>>>> Stashed changes
            onClick={() => {
              openDialog(GlobalDialog.FreeSpaceCardBanner, { data: { darkMode } });
            }}
          >
            {textContent.cta}
          </button>
        </div>
      </div>
      <div
        className={`${darkMode ? 'border-gray-71 bg-[#1C1C1C]' : 'border-gray-10 bg-white'}
            flex h-[166px] flex-col items-center justify-center gap-3 rounded-16
          border  px-1 text-center lg:hidden`}
      >
        <div className="flex h-[78px] flex-col items-center justify-center px-1 text-center">
          <p className={`${darkMode ? 'text-white-95' : 'text-gray-95'}  text-30 font-semibold text-gray-95`}>
            {textContent.eyeBrow}
          </p>
          <p className={`${darkMode ? 'text-green-120' : 'text-gray-55'} w-[313px] text-sm font-normal`}>
            {textContent.description}
          </p>
        </div>

        <button
          className={`flex items-center justify-center rounded-lg border border-primary ${
            darkMode ? 'bg-[#1C1C1C] hover:bg-[#111111]/10 ' : 'bg-white hover:bg-gray-1'
          } px-6 py-2 text-center text-lg font-medium text-primary `}
          onClick={() => {
            openDialog(GlobalDialog.FreeSpaceCardBanner, { data: { darkMode } });
          }}
        >
          {textContent.cta}
        </button>
      </div>
    </>
  );
};

export default FreePlanCard;
