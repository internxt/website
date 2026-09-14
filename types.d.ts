import type { JSX as ReactJSX } from 'react';

declare global {
  namespace JSX {
    type Element = ReactJSX.Element;
    type IntrinsicElements = ReactJSX.IntrinsicElements;
    type ElementClass = ReactJSX.ElementClass;
    type ElementAttributesProperty = ReactJSX.ElementAttributesProperty;
    type ElementChildrenAttribute = ReactJSX.ElementChildrenAttribute;
  }

  interface Window {
    analytics: any;
    gtag: any;
    _mtm: any;
    snigelPubConf: any;
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, { action: string }) => Promise<string>;
    };
    dataLayer: Record<string, any>[];
  }
}
