import React, { useContext, useMemo, useState } from 'react';

type GlobalDialogState = {
  isOpen: boolean;
  key: GlobalDialog;
  // You can pass data to the dialog
  data?: unknown;
};

type GlobalDialogActionConfig = { closeAllDialogsFirst?: boolean; data?: unknown };
export type GlobalUIManagerContextShape = {
  dialogs: GlobalDialogState[];
  openDialog: (key: GlobalDialog, config?: GlobalDialogActionConfig) => void;
  closeDialog: (key: GlobalDialog, config?: GlobalDialogActionConfig) => void;
};
export const GlobalUIManagerContext = React.createContext<GlobalUIManagerContextShape>({
  dialogs: [],
  openDialog: () => {
    throw new Error('GlobalUIManagerContext not ready');
  },
  closeDialog: () => {
    throw new Error('GlobalUIManagerContext not ready');
  },
});
export enum GlobalDialog {
  Auth = 'Auth',
  Wheel = 'Wheel',
  TempMailAction = 'TempMailAction',
  MobileBannerForHome = 'MobileBannerForHome',
  PriceBannerForCampaigns = 'PriceBannerForCampaigns',
  TopBanner = 'TopBanner',
  BottomBanner = 'BottomBanner',
  FreeSpaceCardBanner = 'FreeSpaceCardBanner',
  BeforeYouGoBanner = 'BeforeYouGoBanner',
  S3Banner = 'S3Banner',
}
export const GlobalUIManager: React.FC<
  React.PropsWithChildren<{ initialDialogs: GlobalUIManagerContextShape['dialogs'] }>
> = (props) => {
  const [dialogs, setDialogs] = useState<GlobalDialogState[]>(props.initialDialogs);

  const openDialog = (
    dialogKey: GlobalDialog,

    config?: GlobalDialogActionConfig,
  ) => {
    setDialogs(
      dialogs.map<GlobalDialogState>((dialog) =>
        dialog.key === dialogKey
          ? { isOpen: true, key: dialogKey, data: config?.data }
          : { ...dialog, isOpen: config?.closeAllDialogsFirst !== true ? dialog.isOpen : false },
      ),
    );
  };

  const closeDialog = (dialogKey: GlobalDialog, config?: GlobalDialogActionConfig) => {
    setDialogs(
      dialogs.map<GlobalDialogState>((dialog) =>
        dialog.key === dialogKey
          ? { isOpen: false, key: dialogKey }
          : { ...dialog, isOpen: config?.closeAllDialogsFirst !== true ? dialog.isOpen : false },
      ),
    );
  };

  const value = useMemo(() => {
    return {
      dialogs,
      openDialog: openDialog,
      closeDialog: closeDialog,
    };
  }, [dialogs]);

  return <GlobalUIManagerContext.Provider value={value}>{props.children}</GlobalUIManagerContext.Provider>;
};

export const useGlobalDialog = () => {
  const ctx = useContext(GlobalUIManagerContext);

  const dialogIsOpen = (key: GlobalDialog) => {
    const match = ctx.dialogs.find((dialog) => dialog.key === key);
    if (!match) return false;
    return match.isOpen;
  };

  const getDialogData = (key: GlobalDialog) => {
    const match = ctx.dialogs.find((dialog) => dialog.key === key && dialog.isOpen);
    if (!match) return null;
    return match.data;
  };
  return {
    dialogIsOpen,
    getDialogData,
    openDialog: ctx.openDialog,
    closeDialog: ctx.closeDialog,
  };
};
