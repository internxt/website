interface Window {
  analytics: any;
  gtag: any;
  _mtm: any;
  snigelPubConf: any;
  grecaptcha: {
    ready: (cb: () => void) => void;
    execute: (siteKey: string, { action: string }) => Promise<string>;
  };
}
