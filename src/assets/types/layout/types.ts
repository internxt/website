import { DownloadApp, FooterSection, NewsletterSection } from './footer';
import { Auth, Links, OurValues, Suite, Enterprise } from './navbar';

export interface MetatagsDescription {
  id: string;
  title: string;
  description: string;
}

export interface NavigationBarText {
  enterprise: Enterprise;
  links: Links;
  suite: Suite;
  ourValues: OurValues;
  Auth: Auth;
  MinimalNavbar: {
    secondaryEyeBrow: string;
    cta: string;
    price: string;
  };
}

export interface FooterText {
  DownloadApp: DownloadApp;
  NewsletterSection: NewsletterSection;
  FooterSection: FooterSection;
}
