import axios from 'axios';
import { PromoCodeProps } from './types';
import { PASSWORD_REGEX } from '@/components/cloud-object-storage/integrated-checkout/components/InputsComponent';

export const IFRAME_AUTH_ENABLED = false;
export const REDIRECT_AUTH_ENABLED = true;
const AUTH_FLOW_URL = 'https://drive.internxt.com';
const OBJECT_STORAGE_USER_ACTIVATION_URL = process.env.NEXT_PUBLIC_OBJECT_STORAGE_USER_ACTIVATION_URL as string;

export const openAuthDialog = (view: 'login' | 'signup' | 'recover'): void => {
  if (view === 'login') {
    //
  } else if (view === 'signup') {
    window.top?.postMessage({ action: 'openDialogSignup' }, window.location.origin);
  }
};

export function checkSession(): void {
  if (REDIRECT_AUTH_ENABLED) {
    // CHECK SESSION
  }
  if (IFRAME_AUTH_ENABLED) {
    window.top?.postMessage({ action: 'check_session' }, window.location.origin);
  }
}

export async function getCaptchaToken(): Promise<string> {
  const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_V3 as string, {
    action: 'ActivationRequest',
  });

  return token;
}

export async function objectStorageActivationAccount(email: string, password: string, captchaToken?: string) {
  const isValidPassword = PASSWORD_REGEX.test(password);

  if (!isValidPassword) throw new Error('Invalid password');

  return axios.post(
    `${OBJECT_STORAGE_USER_ACTIVATION_URL}/users/activation`,
    {
      email,
      password,
    },
    {
      headers: {
        recaptcha: captchaToken,
      },
    },
  );
}

/**
 *
 * Obtains an auth flow login URL, options to obtain the URL:
 *
 * - redirectUrl: URL to redirect after login success
 * - enableAutoSubmit: Allow auth app to auto submit if local credentials are found
 * - obtainAuthToken: Include an auth JWT token when redirecting to redirectURL option
 */
const getAuthFlowLoginURL = ({
  redirectURL,
  enableAutoSubmit,
  obtainAuthToken,
  lang,
}: {
  redirectURL?: string;
  obtainAuthToken?: boolean;
  enableAutoSubmit: boolean;
  lang?: string;
}) => {
  const url = `${AUTH_FLOW_URL}/login`;

  const search = new URLSearchParams();
  if (redirectURL) {
    search.set('redirectUrl', redirectURL);
  }

  if (obtainAuthToken) {
    search.set('auth', 'true');
  }

  if (enableAutoSubmit) {
    search.set('autoSubmit', 'true');
  }

  if (lang) {
    search.set('lng', lang);
  }

  const searchQuery = search.toString();
  return `${url}${searchQuery ? '?' + searchQuery : ''}`;
};

/**
 *
 * Obtains an auth flow create user URL, options to obtain the URL:
 *
 * - redirectUrl: URL to redirect after user creation success
 * - enableAutoSubmit: Allow auth app to auto submit if local credentials are found
 * - obtainAuthToken: Include an auth JWT token when redirecting to redirectURL option
 * - skipSignupIfLoggedIn: Skip signup if user is logged in, and redirect to redirectURL
 */
const getAuthFlowCreateUserURL = ({
  redirectURL,
  obtainAuthToken,
  enableAutoSubmit,
  skipSignupIfLoggedIn,
  lang,
}: {
  redirectURL?: string;
  obtainAuthToken?: boolean;
  enableAutoSubmit: boolean;
  skipSignupIfLoggedIn?: boolean;
  lang?: string;
}) => {
  const url = `${AUTH_FLOW_URL}/new`;
  const search = new URLSearchParams();
  if (redirectURL) {
    search.set('redirectUrl', redirectURL);
  }

  if (obtainAuthToken) {
    search.set('auth', 'true');
  }

  if (enableAutoSubmit) {
    search.set('autoSubmit', 'true');
  }

  if (skipSignupIfLoggedIn) {
    search.set('skipSignupIfLoggedIn', skipSignupIfLoggedIn.toString());
  }

  if (lang) {
    search.set('lng', lang);
  }

  const searchQuery = search.toString();
  return `${url}${searchQuery ? '?' + searchQuery : ''}`;
};

const checkAuthFlowAvailable = () => {
  if (!window.location) {
    throw new Error('window.location is not available in this context, execute this function client side');
  }
};

const prepareAuthFlow = (credentials: {
  email: string;
  password: string;
  tfaCode?: string;
  redeemCode?: string;
  provider?: string;
}) => {
  const payload: Record<string, string | Record<string, string>> = {};

  if (credentials.email) {
    payload['email'] = credentials.email;
  }

  if (credentials.password) {
    payload['password'] = credentials.password;
  }

  if (credentials.tfaCode) {
    payload['password'] = credentials.tfaCode;
  }

  if (credentials.redeemCode && credentials.provider) {
    payload['redeemCode'] = { code: credentials.redeemCode, provider: credentials.provider };
  }

  // 1 min
  const expiration = Date.now() + 1000 * 60;

  const cookie = `cr=${btoa(JSON.stringify(payload))};expires=${new Date(
    expiration,
  ).toUTCString()};domain=internxt.com; Path=/`;

  document.cookie = cookie;
};
export function login(data: { email: string; password: string; tfa?: string }, redirectURL: string): void {
  if (REDIRECT_AUTH_ENABLED) {
    checkAuthFlowAvailable();
    prepareAuthFlow(data);
    const loginUrl = getAuthFlowLoginURL({ redirectURL, enableAutoSubmit: true });
    window.location.href = loginUrl;
  }

  if (IFRAME_AUTH_ENABLED) {
    window.top?.postMessage({ action: 'login', ...data }, window.location.origin);
  }
}

export function goToLoginURL(options?: { redirectURL: string; lang?: string }) {
  checkAuthFlowAvailable();
  const loginURL = getAuthFlowLoginURL({
    redirectURL: options?.redirectURL,
    enableAutoSubmit: false,
    lang: options?.lang,
  });
  window.location.href = loginURL;
}

export function goToSignUpURL(options?: { redirectURL?: string; lang?: string }) {
  checkAuthFlowAvailable();
  const createUserURL = getAuthFlowCreateUserURL({
    redirectURL: options?.redirectURL,
    enableAutoSubmit: false,
    lang: options?.lang,
  });
  window.location.href = createUserURL;
}

export function signup(
  data: { email: string; password: string; redeemCode?: string; provider?: string },
  redirectURL?: string,
): void {
  if (REDIRECT_AUTH_ENABLED) {
    checkAuthFlowAvailable();
    prepareAuthFlow(data);
    const createUserUrl = getAuthFlowCreateUserURL({ redirectURL, enableAutoSubmit: true });
    window.location.href = createUserUrl;
  }
  if (IFRAME_AUTH_ENABLED) {
    window.top?.postMessage({ action: 'signup', ...data }, window.location.origin);
  }
}

export function recover(data: Record<string, unknown>): void {
  if (REDIRECT_AUTH_ENABLED) {
    window.location.href = AUTH_FLOW_URL + '/remove';
  }

  if (IFRAME_AUTH_ENABLED) {
    window.top?.postMessage({ action: 'recover', ...data }, window.location.origin);
  }
}

export function toggleAuthMethod(view: 'login' | 'signup' | 'recover'): void {
  window.top?.postMessage({ action: 'toggleAuthMethod', view: view }, window.location.origin);
}

type PaymentCheckoutConfig = {
  planId: string;
  promoCodeId?: PromoCodeProps['codeId'];
  planType: 'individual' | 'business';
  mode?: 'subscription' | 'payment';
  currency?: string;
};
export function checkout({ planId, promoCodeId, planType, mode, currency }: PaymentCheckoutConfig): void {
  if (REDIRECT_AUTH_ENABLED) {
    const params = new URLSearchParams();

    const pathname = '/checkout';

    planId && params.set('planId', planId);
    promoCodeId && params.set('couponCode', promoCodeId);
    planType && params.set('planType', planType);
    currency && params.set('currency', currency);
    mode && params.set('mode', mode ? mode : 'subscription');

    window.location.href = AUTH_FLOW_URL + `${pathname}?${params.toString()}`;
  }
  if (IFRAME_AUTH_ENABLED) {
    window.top?.postMessage({ action: 'checkout', planId: planId }, window.location.origin);
  }
}

export function checkoutForPcComponentes({
  planId,
  promoCodeId,
  planType,
  mode,
  currency,
}: PaymentCheckoutConfig): void {
  if (REDIRECT_AUTH_ENABLED) {
    const params = new URLSearchParams();

    const pathname = '/checkout';

    planId && params.set('planId', planId);
    promoCodeId && params.set('couponCode', promoCodeId);
    planType && params.set('planType', planType);
    currency && params.set('currency', currency);
    mode && params.set('mode', mode ? mode : 'subscription');

    const checkoutUrl = AUTH_FLOW_URL + `${pathname}?${params.toString()}`;

    window.open(checkoutUrl, '_self', 'noopener noreferrer');
  }
  if (IFRAME_AUTH_ENABLED) {
    window.top?.postMessage({ action: 'checkout', planId: planId }, window.location.origin);
  }
}
