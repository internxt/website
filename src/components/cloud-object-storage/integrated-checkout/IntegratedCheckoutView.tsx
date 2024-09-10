import Button from '@/components/shared/Button';
import { AddressElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Stripe, StripeElements, StripePaymentElementOptions } from '@stripe/stripe-js';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { HeaderComponent } from './components/HeaderComponent';
import { IntegratedCheckoutText } from '@/assets/types/integrated-checkout';
import { ProductFeaturesComponent } from './components/ProductCardComponent';
import { PlanData } from '@/pages/cloud-object-storage/checkout';
import { UserAuthComponent } from './components/UserAuthComponent';
import TextInput from '@/components/shared/TextInput';
import { Menu, Transition } from '@headlessui/react';
import { CaretDown } from '@phosphor-icons/react/dist/ssr';
import { CaretUp } from '@phosphor-icons/react';
import { PASSWORD_REGEX } from './components/InputsComponent';

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
  vatId: string;
  companyName: string;
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
  onCountryAddressChange: (name: string) => void;
}

export const IntegratedCheckoutView = ({
  textContent,
  objStoragePlan,
  isPaying,
  error,
  onCheckoutButtonClicked,
  onCountryAddressChange,
}: IntegratedCheckoutViewProps): JSX.Element => {
  const stripeSDK = useStripe();
  const elements = useElements();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    getValues,
  } = useForm<IFormValues>({
    mode: 'onChange',
  });
  const [optionalAddressBillingDetailsDialogClicked, setOptionalAddressBillingDetailsDialogClicked] =
    useState<boolean>(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>();

  useEffect(() => {
    const password = getValues('password');
    const isPasswordValid = PASSWORD_REGEX.test(password);
    setIsValidPassword(isPasswordValid);
  }, [getValues('password')]);

  const disabledButton = isPaying && isValid;

  return (
    <form
      className="flex h-full bg-gray-1 lg:w-screen xl:px-16"
      onSubmit={handleSubmit((formData, event) => onCheckoutButtonClicked(event, stripeSDK, elements, formData))}
    >
      <div className="mx-auto flex h-full w-full max-w-screen-xl px-5 py-10">
        <div className="flex h-full w-full flex-col space-y-8 lg:space-y-16">
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
                <p className="text-2xl font-semibold text-gray-100">2. {textContent.addressBillingTitle}</p>
                <div className="flex flex-col rounded-2xl border border-gray-10 bg-white p-5">
                  <AddressElement
                    onChange={(e) => {
                      onCountryAddressChange(e.value.address.country);
                    }}
                    options={{
                      mode: 'billing',
                      autocomplete: {
                        mode: 'automatic',
                      },
                    }}
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-3 rounded-2xl border border-gray-10 bg-white p-5">
                  <Menu>
                    <Menu.Button
                      onKeyDown={(e) => e.preventDefault()}
                      className={
                        'flex h-full w-full flex-row items-center justify-between rounded-lg text-base transition-all duration-75 ease-in-out hover:underline'
                      }
                      onClick={() =>
                        setOptionalAddressBillingDetailsDialogClicked(!optionalAddressBillingDetailsDialogClicked)
                      }
                    >
                      {textContent.addressBilling.optionalData}
                      {optionalAddressBillingDetailsDialogClicked ? (
                        <CaretUp size={24} className="text-gray-60" />
                      ) : (
                        <CaretDown size={24} className="text-gray-60" />
                      )}
                    </Menu.Button>
                    <Transition
                      className={'left-0 w-full'}
                      enter="transition duration-50 ease-out"
                      enterFrom="scale-98 opacity-0"
                      enterTo="scale-100 opacity-100"
                      leave="transition duration-50 ease-out"
                      leaveFrom="scale-98 opacity-100"
                      leaveTo="scale-100 opacity-0"
                    >
                      <Menu.Items onKeyDown={(e) => e.stopPropagation()} className="flex w-full flex-col gap-5">
                        <div
                          role="menuitem"
                          tabIndex={0}
                          onKeyDown={(e) => e.stopPropagation()}
                          className="flex w-full flex-col gap-1"
                        >
                          <p className="text-sm text-gray-80">{textContent.addressBilling.companyName}</p>
                          <TextInput
                            placeholder={textContent.addressBilling.companyName}
                            label="companyName"
                            className="!w-full"
                            type="text"
                            register={register}
                            required={true}
                          />
                        </div>
                        <div
                          role="menuitem"
                          tabIndex={0}
                          onKeyDown={(e) => e.stopPropagation()}
                          className="flex w-full flex-col gap-1"
                        >
                          <p className="text-sm text-gray-80">{textContent.addressBilling.companyVatId}</p>
                          <TextInput
                            placeholder={textContent.addressBilling.companyVatId}
                            label="vatId"
                            className="!w-full"
                            type="text"
                            register={register}
                            required={true}
                          />
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>

                <p className="text-2xl font-semibold text-gray-100">3. {textContent.paymentTitle}</p>
                <PaymentElement options={PAYMENT_ELEMENT_OPTIONS} />
                {error?.stripe && <div className="text-red-dark">{error.stripe}</div>}
                <Button
                  id="submit"
                  className={`${!isValidPassword || disabledButton ? '!bg-gray-40' : undefined} hidden !w-full lg:flex`}
                  type="submit"
                  showSpinner={disabledButton}
                  text={disabledButton ? textContent.paying : textContent.pay}
                  disabled={!isValidPassword || disabledButton}
                />
              </div>
            </div>
            <div className="top-5 flex w-full max-w-xl flex-col gap-5 pb-10 lg:sticky lg:max-w-lg lg:pb-0">
              <ProductFeaturesComponent textContent={textContent.productCard} selectedPlan={objStoragePlan} />
              <p className="text-gray-50">{textContent.oneTimePayment}</p>
              <Button
                id="submit"
                type="submit"
                className={`${!isValidPassword || disabledButton ? '!bg-gray-40' : undefined} flex !w-full lg:hidden`}
                text={disabledButton ? textContent.paying : textContent.pay}
                showSpinner={disabledButton}
                disabled={!isValidPassword || disabledButton}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
