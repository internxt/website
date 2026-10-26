import { useRouter } from 'next/router';
import { GlobalDialog, useGlobalDialog } from '@/contexts/GlobalUIManager';
import { ANNOUNCEMENT_BAR_ENABLED, EXCLUDED_PATHS_FOR_ANNOUNCEMENT_BAR } from '@/announcement.config';

export const useAnnouncementBar = () => {
  const router = useRouter();
  const { dialogIsOpen, closeDialog } = useGlobalDialog();

  const isExcluded = EXCLUDED_PATHS_FOR_ANNOUNCEMENT_BAR.includes(router.pathname);
  const isVisible = ANNOUNCEMENT_BAR_ENABLED && !isExcluded && dialogIsOpen(GlobalDialog.TopBanner);

  const hideAnnouncementBar = () => closeDialog(GlobalDialog.TopBanner);

  return { isVisible, hideAnnouncementBar };
};
