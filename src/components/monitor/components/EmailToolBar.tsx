import { useState } from 'react';
import Button from '@/components/shared/Button';
import { Info } from '@phosphor-icons/react';
import { Tooltip } from 'react-tooltip';
import { HaveIbeenPwnedText } from '@/assets/types/have-i-been-pawned';

interface EmailToolBarProps {
  textContent: HaveIbeenPwnedText['HeroSection']['EmailToolBar'];
  isFetchingData: boolean;
  handleCheckEmail: (email: string | undefined) => void;
}

export const EmailToolbar = ({ textContent, isFetchingData, handleCheckEmail }: Readonly<EmailToolBarProps>) => {
  const [email, setEmail] = useState<string | undefined>(undefined);

  return (
    <div className="flex w-full max-w-3xl flex-col items-center rounded-2xl border-4 border-primary/7 bg-primary/2 p-9 ">
      <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={textContent.placeHolder}
          className="h-14 w-full appearance-none rounded-lg border-2 border-gray-10 bg-white pl-4 pr-14 text-2xl placeholder-gray-30 shadow-subtle outline-none ring-5 ring-primary ring-opacity-0 transition-all delay-150 duration-150 ease-out placeholder:text-lg focus:border-primary focus:ring-opacity-10 sm:placeholder:text-2xl"
        />
        <Button
          text={isFetchingData ? textContent.checking : textContent.check}
          onClick={() => email && handleCheckEmail(email)}
          disabled={!email || isFetchingData}
        />
      </div>

      <div className="mt-5 flex flex-row items-center justify-start space-x-2 text-sm text-gray-50">
        <Info size={16} data-tooltip-id="email-tooltip" className="pt-2"/>
        <span data-tooltip>{textContent.toolTip}</span>
        <Tooltip id="email-tooltip" place="top">
          {textContent.toolTipEmergent}
        </Tooltip>
      </div>
    </div>
  );
};

export default EmailToolbar;
