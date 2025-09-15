import { useState } from 'react';
import { Check, CaretDown } from '@phosphor-icons/react';

interface Plan {
  id: string;
  name: string;
  order: number;
}

interface CustomPlanSelectorProps {
  plans: Plan[];
  selectedPlan: string;
  onPlanChange: (planId: string) => void;
  currency: string;
  getPlanPrice: (planId: string) => string;
  billingText: string;
  ctaText: string;
  onCheckoutClick: () => void;
  isLeftColumn?: boolean;
}

export default function CustomPlanSelector({
  plans,
  selectedPlan,
  onPlanChange,
  currency,
  getPlanPrice,
  billingText,
  ctaText,
  onCheckoutClick,
  isLeftColumn = false,
}: CustomPlanSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedPlanData = plans.find((plan) => plan.id === selectedPlan);

  const handlePlanSelect = (planId: string) => {
    onPlanChange(planId);
    setIsOpen(false);
  };

  return (
    <div className="z-10 flex  flex-col pt-10">
      <div className={`border border-neutral-25 bg-neutral-16 p-4 ${isLeftColumn ? 'border-r-0' : ''}`}>
        {/* Clean Dropdown Button */}
        <div className="relative mb-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex w-full items-center justify-between bg-transparent p-0 text-left focus:outline-none"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
          >
            <span className="text-lg font-semibold text-primary">{selectedPlanData?.name || 'Select Plan'}</span>
            <CaretDown
              size={20}
              className={`text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <>
              {/* Backdrop */}
              <div className="fixed inset-0 " onClick={() => setIsOpen(false)} />

              {/* Options */}
              <div className=" absolute left-0 top-full z-20 mt-2 w-full min-w-[140px] rounded-lg  bg-white shadow-lg">
                <ul className="py-2" role="listbox">
                  {plans.map((plan) => (
                    <li key={plan.id} role="option">
                      <button
                        onClick={() => handlePlanSelect(plan.id)}
                        className="flex w-full items-center justify-between px-4 py-2 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
                      >
                        <span
                          className={`text-base font-medium ${
                            plan.id === selectedPlan ? 'text-gray-900' : 'text-gray-700'
                          }`}
                        >
                          {plan.name}
                        </span>
                        {plan.id === selectedPlan && <Check size={16} className="text-gray-900" weight="bold" />}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Price Display */}
        <div className="mb-4">
          <div className="flex items-baseline gap-1">
            <span className="text-gray-900 text-xs font-bold">
              {currency}
              {getPlanPrice(selectedPlan)}
            </span>
            <span className="text-gray-500 whitespace-nowrap text-sm">{billingText}</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onCheckoutClick}
          className="h-12 w-full rounded-lg bg-primary font-semibold text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 disabled:opacity-50"
          disabled={!selectedPlan}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}
