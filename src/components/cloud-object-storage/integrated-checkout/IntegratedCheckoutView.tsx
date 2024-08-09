import Button from '@/components/shared/Button';
import { AddressElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Stripe, StripeElements, StripePaymentElementOptions } from '@stripe/stripe-js';
import { BaseSyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';
import { HeaderComponent } from './components/HeaderComponent';
import { IntegratedCheckoutText } from '@/assets/types/integrated-checkout';
import { ProductFeaturesComponent } from './components/ProductCardComponent';
import { PlanData } from '@/pages/cloud-object-storage/checkout';
import { UserAuthComponent } from './components/UserAuthComponent';

export const PAYMENT_ELEMENT_OPTIONS: StripePaymentElementOptions = {
  wallets: {
    applePay: 'auto',
    googlePay: 'auto',
  },
  layout: {
    type: 'accordion',
    defaultCollapsed: false,
    radios: false,
    spacedAccordionItems: true,
  },
};

export interface IFormValues {
  email: string;
  password: string;
}

interface IntegratedCheckoutViewProps {
  textContent: IntegratedCheckoutText;
  objStoragePlan: PlanData;
  isPaying: boolean;
  error?: {
    stripe: '';
    auth: '';
  };
  onCheckoutButtonClicked: (
    event: BaseSyntheticEvent<object, any, any> | undefined,
    stripeSDK: Stripe | null,
    elements: StripeElements | null,
    formData?: IFormValues,
  ) => Promise<void>;
  onUserNameFromAddressElementChange?: (name: string) => void;
}

export const IntegratedCheckoutView = ({
  textContent,
  objStoragePlan,
  isPaying,
  error,
  onCheckoutButtonClicked,
  onUserNameFromAddressElementChange,
}: IntegratedCheckoutViewProps): JSX.Element => {
  const stripeSDK = useStripe();
  const elements = useElements();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<IFormValues>({
    mode: 'onChange',
  });

  const disabledButton = isPaying && isValid;

  return (
    <form
      className="flex bg-gray-1 lg:w-screen xl:px-16"
      onSubmit={handleSubmit((formData, event) => onCheckoutButtonClicked(event, stripeSDK, elements, formData))}
    >
      <div className="mx-auto flex w-full max-w-screen-xl px-5 py-10">
        <div className="flex w-full flex-col space-y-8 lg:space-y-16">
          <HeaderComponent textContent={textContent} lang="en" />
          <p className="text-xl font-bold text-gray-100 md:text-center lg:text-left lg:text-3xl">{textContent.title}</p>
          <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex w-full max-w-xl flex-col space-y-14">
              <UserAuthComponent
                textContent={textContent.authComponent}
                errors={errors}
                authError={error?.auth as string}
                register={register}
              />
              <div className="flex flex-col space-y-8 pb-20">
                <p className="text-2xl font-semibold text-gray-100">2. {textContent.paymentTitle}</p>
                <div className="flex flex-col rounded-2xl border border-gray-10 bg-white p-5">
                  <AddressElement
                    onChange={(e) => {
                      onUserNameFromAddressElementChange?.(e.value.name);
                    }}
                    options={{
                      mode: 'billing',
                      autocomplete: {
                        mode: 'automatic',
                      },
                    }}
                  />
                </div>
                <PaymentElement options={PAYMENT_ELEMENT_OPTIONS} />
                {error?.stripe && <div className="text-red-dark">{error.stripe}</div>}
                <Button
                  id="submit"
                  className="hidden !w-full lg:flex"
                  type="submit"
                  text={disabledButton ? textContent.paying : textContent.pay}
                  disabled={disabledButton}
                />
              </div>
            </div>
            <div className="top-5 flex w-full max-w-xl flex-col gap-5 pb-10 lg:sticky lg:max-w-lg lg:pb-0">
              <ProductFeaturesComponent textContent={textContent.productCard} selectedPlan={objStoragePlan} />
              <Button
                id="submit"
                type="submit"
                className="flex !w-full pt-5 lg:hidden"
                text={disabledButton ? textContent.paying : textContent.pay}
                disabled={disabledButton}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
