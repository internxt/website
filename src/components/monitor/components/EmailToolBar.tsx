import Button from '@/components/shared/Button';
import { Info } from '@phosphor-icons/react';
import { Tooltip } from 'react-tooltip';

interface EmailToolBarProps {
  textContent: {
    placeHolder: string;
    toolTip: string;
    toolTipEmergent: string;
  };
}

function EmailToolbar({ textContent }: Readonly<EmailToolBarProps>) {
  return (
    <div className="flex w-full max-w-3xl flex-col items-center rounded-2xl border-4 border-primary/7 bg-primary/2 p-9">
      <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
        <input
          type="text"
          placeholder={textContent.placeHolder}
          className="h-14 w-full appearance-none rounded-lg border-2 border-gray-10 bg-white pl-4 pr-14 text-2xl placeholder-gray-30 shadow-subtle outline-none ring-5 ring-primary ring-opacity-0 transition-all delay-150 duration-150 ease-out focus:border-primary focus:ring-opacity-10"
        />
        <Button text={'Check'} />
      </div>
      <div className="mt-5 flex flex-row items-center space-x-1 text-sm text-gray-50">
        <Info size={16} data-tooltip-id="email-tooltip" />
        <span data-tooltip>{textContent.toolTip}</span>
        <Tooltip id="email-tooltip" place="top">
          {textContent.toolTipEmergent}
        </Tooltip>
      </div>
    </div>
  );
}

export default EmailToolbar;
