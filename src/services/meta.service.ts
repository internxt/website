const canTrack = (): boolean => {
  return Boolean(globalThis.window?.dataLayer && globalThis.window?.fbq);
};

interface PpcLeadParams {
  landing: string;
  locale?: string;
}

export const trackPpcLead = ({ landing, locale }: PpcLeadParams): void => {
  if (!canTrack()) {
    return;
  }

  globalThis.window.dataLayer.push({
    event: 'ppcLeadSuccessful',
    eventCategory: 'User',
    eventAction: 'ppc_lead_complete',
    landing,
    locale,
  });

  globalThis.window.fbq('track', 'Lead', {
    content_name: landing,
    content_category: 'ppc',
    status: 'completed',
  });
};

const metaService = {
  trackPpcLead,
};

export default metaService;
