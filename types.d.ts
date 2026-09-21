import type { JSX as ReactJSX } from 'react';

declare global {
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

  // React 19 moved JSX under the React namespace. The codebase uses bare
  // `JSX.Element` in ~270 places, so keep the global alias pointing at it.
  namespace JSX {
    type Element = ReactJSX.Element;
    type ElementClass = ReactJSX.ElementClass;
    type ElementType = ReactJSX.ElementType;
    type IntrinsicElements = ReactJSX.IntrinsicElements;
    type ElementAttributesProperty = ReactJSX.ElementAttributesProperty;
    type ElementChildrenAttribute = ReactJSX.ElementChildrenAttribute;
    type IntrinsicAttributes = ReactJSX.IntrinsicAttributes;
    type IntrinsicClassAttributes<T> = ReactJSX.IntrinsicClassAttributes<T>;
  }
}
