import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { CheckSquare } from '@phosphor-icons/react';
import { isMobile } from 'react-device-detect';
interface FreePlanCardProps {
  textContent: any;
}

const FreePlanCard = ({ textContent }: FreePlanCardProps): JSX.Element => {
  const { openDialog } = useGlobalDialog();
  return (
    <div className="flex min-h-[300px] w-full flex-col justify-center rounded-2xl border border-gray-10 md:max-h-[208px] md:min-h-[208px]">
      <div className="bg-green flex flex-col items-center space-y-6">
        <div className="flex  max-h-[28px] min-w-[154px] flex-col rounded-full bg-primary/7 text-center">
          <p className="text-xl font-medium text-primary">{textContent.eyeBrow}</p>
        </div>
        <div className={`flex flex-row items-start justify-start ${isMobile ? 'px-20' : 'px-10'} text-center`}>
          <CheckSquare className="min-h-[24px] min-w-[24px] pt-1 text-primary" />
          <p className="font-regular text-lg text-gray-80">{textContent.description}</p>
        </div>

        <button
          className="flex min-h-[40px] min-w-[300px] flex-col items-center justify-center rounded-lg border border-primary text-center font-medium text-primary hover:bg-gray-1 active:bg-gray-5 md:min-h-[44px] md:min-w-[356px]"
          onClick={() => {
            openDialog(GlobalDialog.FreeSpaceCardBanner);
          }}
        >
          {textContent.cta}
        </button>
      </div>
    </div>
  );
};

export default FreePlanCard;
