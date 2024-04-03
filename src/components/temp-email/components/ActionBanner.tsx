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
    email: dialogData.email,
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
         fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-black bg-opacity-50 px-10 lg:px-0`}
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
        <div className="flex flex-row items-center space-x-4 p-14">
          <div className="flex w-full object-contain">
            <Image
              src="/images/temp-email/empty-inbox.svg"
              alt="Empty inbox"
              width={245}
              height={316}
              className="w-full"
            />
          </div>
          <div className="flex w-max max-w-[551px] flex-col space-y-6">
            <p className="text-4xl font-semibold text-gray-100">{bannerFormattedText.title}</p>
            <RenderDescription description={bannerFormattedText.description} />
            <div className="flex flex-col gap-6 md:flex-row">
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
