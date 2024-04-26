import RenderDescription from '@/components/shared/RenderDescription';
import { formatText } from '@/components/utils/format-text';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { X } from '@phosphor-icons/react';
import Image from 'next/image';

interface DialogDataProps {
  email: string;
  onActionButtonClicked: () => void;
}

const DIALOG_KEY = GlobalDialog.TempMailAction;

export const ActionBanner = () => {
  const dialogAction = useGlobalDialog();

  const textContent = require('@/assets/lang/en/banners.json');

  const dialogData = dialogAction.getDialogData(DIALOG_KEY) as DialogDataProps;

  const bannerFormattedText = formatText(textContent.changeEmailBanner, {
    email: `**${dialogData.email}**`,
  });

  const onCloseDialog = () => {
    dialogAction.closeDialog(DIALOG_KEY);
  };

  const onChangeEmailButtonClicked = async () => {
    await dialogData.onActionButtonClicked();
    onCloseDialog();
  };

  return (
    <div
      className={`${dialogAction.dialogIsOpen(DIALOG_KEY) ? 'flex' : 'hidden'} 
         fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-black bg-opacity-50`}
    >
      <div
        className={`absolute left-1/2 top-1/2 flex h-auto w-full max-w-5xl -translate-x-1/2
        -translate-y-1/2 flex-col overflow-hidden rounded-2xl bg-white`}
      >
        <button
          className="absolute right-0 z-50 m-5 flex w-auto rounded-md hover:bg-gray-5"
          onClick={() => dialogAction.closeDialog(DIALOG_KEY)}
        >
          <X size={32} className="text-black" />
        </button>
        <div className="flex flex-col items-center py-12 px-5 md:flex-row md:space-x-4 md:p-14">
          <div className="hidden w-full object-contain md:flex">
            <Image
              src="/images/temp-email/empty-inbox.svg"
              alt="Empty inbox"
              width={245}
              height={316}
              className="w-full"
            />
          </div>
          <div className="flex max-w-[551px] flex-col items-center gap-6 text-center md:items-start md:justify-center md:text-left">
            <p className="text-4xl font-semibold text-gray-100">{bannerFormattedText.title}</p>
            <RenderDescription description={bannerFormattedText.description} />
            <div className="flex w-full flex-col gap-6 md:flex-row">
              <button
                onClick={onChangeEmailButtonClicked}
                className="flex flex-col items-center rounded-lg bg-primary py-3 px-5 text-xl font-medium text-white hover:bg-primary-dark"
              >
                {bannerFormattedText.actionCta}
              </button>
              <button
                onClick={onCloseDialog}
                className="flex flex-col items-center rounded-lg border border-gray-10 py-3 px-5 text-xl font-medium text-gray-80 hover:bg-gray-5"
              >
                {bannerFormattedText.cancelCta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
