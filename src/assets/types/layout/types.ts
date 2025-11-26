import { DownloadApp, FooterSection, NewsletterSection } from './footer';
import { Auth, Links, OurValues, Products } from './navbar';

export interface MetatagsDescription {
  id: string;
  title: string;
  description: string;
}

export interface NavigationBarText {
  links: Links;
  products: Products;
  ourValues: OurValues;
  Auth: Auth;
}

export interface FooterText {
  DownloadApp: DownloadApp;
  NewsletterSection: NewsletterSection;
  FooterSection: FooterSection;
}
