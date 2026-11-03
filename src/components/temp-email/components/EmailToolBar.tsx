import { ArrowClockwise, Copy } from '@phosphor-icons/react';
import { Tooltip } from 'react-tooltip';

interface EmailToolBarProps {
  email: string | undefined;
  borderColor: boolean;
  isChangeEmailIconAnimated: boolean;
  textContent: {
    generatingEmail: string;
    copyEmail: string;
    deleteEmail: string;
    expireEmail: string;
  };
  onCopy: () => void;
  onDelete: () => void;
}

function EmailToolbar({
  email,
  borderColor,
  isChangeEmailIconAnimated,
  onCopy,
  onDelete,
  textContent,
}: Readonly<EmailToolBarProps>) {
  return (
    <div className="flex w-full max-w-3xl flex-col items-center rounded-2xl border-4 border-primary/7 bg-primary/2 p-9 lg:max-w-2xl">
      <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
        <div
          className={`flex h-full w-full items-center justify-center rounded-xl md:w-screen md:max-w-[500px] ${
            borderColor ? 'ring ring-primary ring-opacity-15' : 'border border-gray-20'
          }`}
        >
          <button
            className={`flex h-full w-full cursor-pointer flex-row items-center justify-between rounded-xl bg-white text-gray-80 shadow-sm ${
              borderColor ? 'border border-primary' : ''
            } px-4 py-3`}
            onClick={onCopy}
          >
            <p>{email ?? textContent.generatingEmail}</p>
            <Tooltip
              variant="light"
              id="copy-to-clipboard"
              delayShow={700}
              className="z-40 rounded-lg bg-white drop-shadow-md"
            >
              <p className="break-word text-center text-gray-80">{textContent.copyEmail}</p>
            </Tooltip>
            <Copy
              data-tooltip-id="copy-to-clipboard"
              size={24}
              className={`${borderColor ? 'text-primary' : 'text-gray-50'}`}
            />
          </button>
        </div>
        <button
          className="flex w-full flex-row items-center justify-center space-x-2 whitespace-nowrap rounded-lg border border-gray-20 bg-gray-5 px-5 py-2.5 text-gray-80 shadow-sm hover:bg-gray-5 active:bg-gray-10"
          onClick={onDelete}
        >
          <ArrowClockwise size={24} className={`${isChangeEmailIconAnimated ? 'animate-spin-refresh' : ''}`} />
          <p>{textContent.deleteEmail}</p>
        </button>
      </div>
    </div>
  );
}

export default EmailToolbar;
