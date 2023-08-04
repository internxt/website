function track(description: string, payload: Record<string, any>) {
  window.rudderanalytics.track(description, payload);
}

function offerTrack({
  campaign,
  discount,
  plan,
  coupon,
}: {
  campaign: string;
  discount: number;
  plan: string;
  coupon?: string;
}) {
  track('Offer Clicked', {
    campaign: campaign,
    discount: discount,
    plan: plan,
    source: 'website',
    medium: 'banner',
  });
}

export const analyticsService = {
  offerTrack,
};
