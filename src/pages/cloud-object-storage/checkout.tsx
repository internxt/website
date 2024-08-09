import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import Script from 'next/script';

import {
  IFormValues,
  IntegratedCheckoutView,
} from '@/components/cloud-object-storage/integrated-checkout/IntegratedCheckoutView';
import Layout from '@/components/layout/Layout';
import { IntegratedCheckoutText } from '../../assets/types/integrated-checkout';
import LoadingPulse from '@/components/shared/loader/LoadingPulse';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Stripe, StripeElementsOptions } from '@stripe/stripe-js';
import { StripeElements } from '@stripe/stripe-js/dist';
import { paymentService } from '@/components/services/payments.service';
import { useRouter } from 'next/navigation';
import { notificationService } from '@/components/Snackbar';

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

const RETURN_URL_DOMAIN = IS_PRODUCTION ? 'https://console.internxt.com' : 'http://localhost:3001/cloud-object-storage';

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
      amount: plan?.amount,
      currency: plan?.currency,
      payment_method_types: ['card'],
    };

    setStripeElementsOptions(stripeElementsOptions);

    stripe = await stripePromise;
  };

  const onCheckoutButtonClicked = async (
    event: BaseSyntheticEvent<object, any, any> | undefined,
    stripeSDK: Stripe | null,
    elements: StripeElements | null,
    formData: IFormValues,
  ) => {
    event?.preventDefault();

    const { email, password } = formData;

    try {
      // const captchaToken = await getCaptchaToken();

      // await objectStoragePreSignUp(email, password, captchaToken);

      if (!plan) return;

      if (!stripeSDK || !elements) {
        console.error('Stripe.js has not loaded yet. Please try again later.');
        return;
      }

      const { customerId, token } = await paymentService.getCustomerId('My Internxt Object Storage', email);

      const { error: elementsError } = await elements.submit();

      if (elementsError) {
        throw new Error(elementsError.message);
      }

      const { clientSecret } = await paymentService.getPaymentIntent(customerId, plan, token);

      const confirmIntent = stripeSDK.confirmPayment;

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
    } catch (err) {
      const error = err as Error;
      notificationService.openErrorToast(error.message);
    } finally {
      setIsUserPaying(false);
    }
  };

  return (
    <>
      <Script strategy="beforeInteractive" src={`https://www.google.com/recaptcha/api.js?render=${CAPTCHA}`} />
      <Layout title="Integrated Checkout" description="Integrated checkout description">
        {plan && stripe ? (
          <Elements stripe={stripe} options={stripeElementsOptions}>
            <IntegratedCheckoutView
              textContent={textContent}
              objStoragePlan={plan}
              isPaying={isUserPaying}
              onCheckoutButtonClicked={onCheckoutButtonClicked}
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
