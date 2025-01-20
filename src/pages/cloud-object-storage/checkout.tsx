import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import Script from 'next/script';

import {
  IFormValues,
  IntegratedCheckoutView,
} from '@/components/cloud-object-storage/integrated-checkout/IntegratedCheckoutView';
import Layout from '@/components/layout/Layout';

import LoadingPulse from '@/components/shared/loader/LoadingPulse';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Stripe, StripeElementsOptions } from '@stripe/stripe-js';
import { StripeElements } from '@stripe/stripe-js/dist';
import { paymentService } from '@/components/services/payments.service';
import { useRouter } from 'next/navigation';
import { notificationService } from '@/components/Snackbar';
import { getCaptchaToken, objectStorageActivationAccount } from '@/lib/auth';
import { IntegratedCheckoutText } from '@/assets/types/integrated-checkout';

const SEND_TO = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_SENDTO;

interface IntegratedCheckoutProps {
  locale: GetServerSidePropsContext['locale'];
  textContent: IntegratedCheckoutText;
}

export interface PlanData {
  id: string;
  bytes: number;
  interval: 'year' | 'month' | 'lifetime';
  amount: number;
  currency: string;
  decimalAmount: number;
}

let stripe;

export const THEME_STYLES = {
  dark: {
    backgroundColor: 'rgb(17 17 17)',
    textColor: 'rgb(255 255 255)',
    borderColor: 'rgb(58, 58, 59)',
    borderInputColor: 'rgb(142, 142, 148)',
  },
  light: {
    backgroundColor: 'rgb(255 255 255)',
    textColor: 'rgb(17 17 17)',
    borderColor: 'rgb(229, 229, 235)',
    borderInputColor: 'rgb(174, 174, 179)',
  },
};

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

const RETURN_URL_DOMAIN = IS_PRODUCTION
  ? (process.env.NEXT_PUBLIC_RETURN_URL_OBJECT_STORAGE_CHECKOUT as string)
  : 'http://localhost:3001/cloud-object-storage';

const CAPTCHA = process.env.NEXT_PUBLIC_RECAPTCHA_V3 as string;

const stripePromise = (async () => {
  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  return await loadStripe(stripeKey as string);
})();

const PRICE_ID = process.env.NEXT_PUBLIC_OBJECT_STORAGE_PRICE_ID as string;

const IntegratedCheckout = ({ locale, textContent }: IntegratedCheckoutProps): JSX.Element => {
  const router = useRouter();

  const [stripeElementsOptions, setStripeElementsOptions] = useState<StripeElementsOptions>();
  const [plan, setPlan] = useState<PlanData>();
  const [isUserPaying, setIsUserPaying] = useState<boolean>(false);
  const [country, setCountry] = useState<string>();

  const { backgroundColor, borderColor, borderInputColor, textColor } = THEME_STYLES['light'];

  useEffect(() => {
    paymentService
      .fetchPlanById(PRICE_ID, 'eur')
      .then((plan) => {
        setPlan(plan);
        loadStripeElements(textColor, backgroundColor, borderColor, borderInputColor, plan);
      })
      .catch(() => {
        router.push('/cloud-object-storage');
      });
  }, []);

  const loadStripeElements = async (
    textColor: string,
    backgroundColor: string,
    borderColor: string,
    borderInputColor: string,
    plan: PlanData,
  ) => {
    const stripeElementsOptions: StripeElementsOptions = {
      appearance: {
        labels: 'above',
        variables: {
          spacingAccordionItem: '8px',
          colorPrimary: textColor,
        },
        theme: 'flat',
        rules: {
          '.AccordionItem:hover': {
            color: textColor,
          },
          '.Block': {
            backgroundColor: backgroundColor,
          },
          '.TermsText': {
            color: textColor,
          },
          '.AccordionItem': {
            borderRadius: '16px',
            borderColor: borderColor,
            border: '1px solid',
            backgroundColor: backgroundColor,
          },
          '.Input': {
            backgroundColor: backgroundColor,
            borderRadius: '0.375rem',
            // borderColor: borderInputColor,
            border: `1px solid ${borderInputColor}`,
          },
          '.Input:focus': {
            backgroundColor: backgroundColor,
            // borderColor: borderInputColor,
            boxShadow: '0px 0px 4px rgb(0 102 255)',
            border: '0.5px solid rgb(0 102 255)',
          },
          '.Input::selection': {
            backgroundColor: backgroundColor,
            // borderColor: borderInputColor,
            border: '0.5px solid rgb(0 102 255)',
          },
          '.Label': {
            color: textColor,
          },
          '.RedirectText': {
            color: textColor,
          },
        },
      },
      mode: plan?.interval === 'lifetime' ? 'payment' : 'subscription',
      amount: plan?.amount ?? 0,
      currency: plan?.currency,
      payment_method_types: ['card', 'paypal'],
    };

    setStripeElementsOptions(stripeElementsOptions);

    stripe = await stripePromise;
  };

  const onCheckoutButtonClicked = async (
    event: BaseSyntheticEvent<Record<string, unknown>, any, any> | undefined,
    stripeSDK: Stripe | null,
    elements: StripeElements | null,
    formData: IFormValues,
  ) => {
    event?.preventDefault();
    setIsUserPaying(true);

    if (!plan) return;

    const { email, password, companyName, vatId } = formData;

    try {
      if (!stripeSDK || !elements) {
        console.error('Stripe.js has not loaded yet. Please try again later.');
        return;
      }

      const { error: elementsError } = await elements.submit();

      const captchaToken = await getCaptchaToken();

      await objectStorageActivationAccount(email, password, captchaToken);

      const { customerId, token } = await paymentService.getCustomerId(
        companyName ?? 'My Internxt Object Storage',
        email,
        country,
        vatId,
      );

      if (elementsError) {
        throw new Error(elementsError.message);
      }

      const { clientSecret } = await paymentService.createSubscription(customerId, plan, token, companyName, vatId);

      const confirmIntent = stripeSDK.confirmSetup;

      const { error } = await confirmIntent({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${RETURN_URL_DOMAIN}`,
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      if (window && window.gtag) {
        window.gtag('event', 'checkoutS3-Conversion', {
          send_to: SEND_TO,
          value: plan?.amount ?? 1.0,
          currency: plan?.currency,
          transaction_id: plan?.bytes + '-' + plan?.amount,
        });
      }
    } catch (err) {
      notificationService.openErrorToast('Something went wrong');
    } finally {
      setIsUserPaying(false);
    }
  };

  return (
    <>
      <Script strategy="beforeInteractive" src={`https://www.google.com/recaptcha/api.js?render=${CAPTCHA}`} />
      <Layout
        title="Internxt - S3 Checkout"
        description="Checkout to buy the S3 plan. This plan is a pay as you go purchase."
      >
        {plan && stripe ? (
          <Elements stripe={stripe} options={stripeElementsOptions}>
            <IntegratedCheckoutView
              textContent={textContent}
              objStoragePlan={plan}
              isPaying={isUserPaying}
              onCheckoutButtonClicked={onCheckoutButtonClicked}
              onCountryAddressChange={setCountry}
            />
          </Elements>
        ) : (
          <LoadingPulse />
        )}
      </Layout>
    </>
  );
};

export function getServerSideProps(ctx: GetServerSidePropsContext) {
  const locale = ctx.locale;

  const textContent = require(`@/assets/lang/${locale}/integrated-checkout.json`);

  return {
    props: {
      locale,
      textContent,
    },
  };
}

export default IntegratedCheckout;
