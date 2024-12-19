import { useState } from 'react';
import { Interval } from '@/components/services/stripe.service';
import { SwitchButtonOptions } from '@/components/shared/pricing/components/PlanSelector';

export const usePlanSelection = (
  initialPlan: SwitchButtonOptions,
  initialInterval: Interval,
  initialIntervalForBusiness: Interval,
  setPageName?: (pageName: string) => void,
) => {
  const [activeSwitchPlan, setActiveSwitchPlan] = useState<SwitchButtonOptions>(initialPlan);
  const [billingFrequency, setBillingFrequency] = useState<Interval>(initialInterval);
  const [businessBillingFrequency, setBusinessBillingFrequency] = useState<Interval>(initialIntervalForBusiness);

  const onPlanTypeChange = (plan: SwitchButtonOptions, interval?: Interval) => {
    setActiveSwitchPlan(plan);
    if (interval) {
      setBillingFrequency(interval);
      setPageName?.(`Pricing Individuals ${interval}`);
    }
  };

  const onIndividualSwitchToggled = (interval: Interval) => {
    setBillingFrequency(interval);
  };

  const onBusinessSwitchToggled = (interval: Interval) => {
    setBusinessBillingFrequency(interval);
  };

  return {
    activeSwitchPlan,
    billingFrequency,
    businessBillingFrequency,
    onPlanTypeChange,
    onIndividualSwitchToggled,
    onBusinessSwitchToggled,
  };
};
