/**
 * Section shapes repeated verbatim across the landing page text files.
 * Only interfaces whose body is identical in every copy live here; sections
 * that genuinely differ between pages stay declared in their own file.
 */

export interface FAQ {
  question: string;
  answer: string[];
}

export interface FAQSection {
  title: string;
  faq: FAQ[];
}

export interface PlanStorage {
  essential: string;
  premium: string;
  ultimate: string;
}

export interface StartFrom {
  normal1: string;
  price: string;
  normal2: string;
}

export interface SubtitleClass {
  line1: string;
}
