import { Bug, Detective, EyeSlash, Gift, Tray, UserPlus } from 'phosphor-react';
import textContent from '../../../assets/lang/en/temporary-email.json';

export const infoCards = [
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

export const toolsCards = [
  {
    url: '/images/temp-email/password-checker.svg',
    UrlRedirectName: 'password-checker',
    width: 125,
    title: 'Free Password Strength Checker',
    description: 'Check now',
  },
  {
    url: '/images/temp-email/virus-scanner.svg',
    UrlRedirectName: 'virus-scanner',
    width: 105,
    title: 'Free Virus Scanner',
    description: 'Scan now',
  },
  {
    url: '/images/temp-email/byte-converter.svg',
    UrlRedirectName: 'byte-converter',
    width: 95,
    title: 'Free Byte Converter',
    description: 'Convert now',
  },
];
