function offerTrack({ campaign, discount, plan }: { campaign: string; discount: number; plan: string }) {
  window.rudderanalytics.track('Offer Clicked', {
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
