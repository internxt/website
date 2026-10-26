import { useRouter } from 'next/router';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { IS_BLACK_FRIDAY, EXCLUDED_PATHS_FOR_ANNOUNCEMENT_BAR } from '@/announcement.config';

export const useAnnouncementBar = () => {
  const router = useRouter();
  const { dialogIsOpen, closeDialog } = useGlobalDialog();

  const isExcluded = EXCLUDED_PATHS_FOR_ANNOUNCEMENT_BAR.includes(router.pathname);
  const isVisible = IS_BLACK_FRIDAY && !isExcluded && dialogIsOpen(GlobalDialog.TopBanner);

  const hideAnnouncementBar = () => closeDialog(GlobalDialog.TopBanner);

  return { isVisible, hideAnnouncementBar };
};
