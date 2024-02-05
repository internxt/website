import { Bug, Detective, EyeSlash, Gift, Tray, UserPlus } from '@phosphor-icons/react';

export const infoCards = (lang) => {
  const textContent = require(`../../../assets/lang/${lang}/temporary-email.json`);
  return [
    {
      icon: Bug,
      title: textContent.InfoSection.whyUseDisposableMail.infoCards[0].title,
      description: textContent.InfoSection.whyUseDisposableMail.infoCards[0].description,
    },
    {
      icon: EyeSlash,
      title: textContent.InfoSection.whyUseDisposableMail.infoCards[1].title,
      description: textContent.InfoSection.whyUseDisposableMail.infoCards[1].description,
    },
    {
      icon: Tray,
      title: textContent.InfoSection.whyUseDisposableMail.infoCards[2].title,
      description: textContent.InfoSection.whyUseDisposableMail.infoCards[2].description,
    },
    {
      icon: Detective,
      title: textContent.InfoSection.whyUseDisposableMail.infoCards[3].title,
      description: textContent.InfoSection.whyUseDisposableMail.infoCards[3].description,
    },
    {
      icon: UserPlus,
      title: textContent.InfoSection.whyUseDisposableMail.infoCards[4].title,
      description: textContent.InfoSection.whyUseDisposableMail.infoCards[4].description,
    },
    {
      icon: Gift,
      title: textContent.InfoSection.whyUseDisposableMail.infoCards[5].title,
      description: textContent.InfoSection.whyUseDisposableMail.infoCards[5].description,
    },
  ];
};
