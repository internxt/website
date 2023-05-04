export const IFRAME_AUTH_ENABLED = false;
export const REDIRECT_AUTH_ENABLED = true;
const AUTH_FLOW_URL = 'https://drive.internxt.com';

export function openAuthDialog(view: 'login' | 'signup' | 'recover'): void {
  if (view === 'login') {
  } else if (view === 'signup') {
    window.top?.postMessage({ action: 'openDialogSignup' }, window.location.origin);
  }
}

export function checkSession(): void {
  if (REDIRECT_AUTH_ENABLED) {
    // CHECK SESSION
  }
  if (IFRAME_AUTH_ENABLED) {
    window.top?.postMessage({ action: 'check_session' }, window.location.origin);
  }
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
}: {
  redirectURL?: string;
  obtainAuthToken?: boolean;
  enableAutoSubmit: boolean;
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
}: {
  redirectURL?: string;
  obtainAuthToken?: boolean;
  enableAutoSubmit: boolean;
  skipSignupIfLoggedIn?: boolean;
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

  const searchQuery = search.toString();
  return `${url}${searchQuery ? '?' + searchQuery : ''}`;
};

const checkAuthFlowAvailable = () => {
  if (!window.location) {
    throw new Error('window.location is not available in this context, execute this function client side');
  }
};

const prepareAuthFlow = (credentials: { email: string; password: string; tfaCode?: string }) => {
  const payload: Record<string, string> = {};

  if (credentials.email) {
    payload['email'] = credentials.email;
  }

  if (credentials.password) {
    payload['password'] = credentials.password;
  }

  if (credentials.tfaCode) {
    payload['password'] = credentials.tfaCode;
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

export function goToLoginURL(options?: { redirectURL: string }) {
  checkAuthFlowAvailable();
  const loginURL = getAuthFlowLoginURL({ redirectURL: options?.redirectURL, enableAutoSubmit: false });
  window.location.href = loginURL;
}

export function goToSignUpURL(options?: { redirectURL?: string }) {
  checkAuthFlowAvailable();
  const createUserURL = getAuthFlowCreateUserURL({ redirectURL: options?.redirectURL, enableAutoSubmit: false });
  window.location.href = createUserURL;
}

export function signup(data: { email: string; password: string }, redirectURL?: string): void {
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
  couponCode?: string;
  mode?: 'subscription' | 'payment';
};
export function checkout({ planId, couponCode, mode }: PaymentCheckoutConfig): void {
  if (REDIRECT_AUTH_ENABLED) {
    const params = new URLSearchParams();

    planId && params.set('planId', planId);
    couponCode && params.set('couponCode', couponCode);
    params.set('mode', mode ? mode : 'subscription');

    const checkoutUrl = getAuthFlowCreateUserURL({
      redirectURL: AUTH_FLOW_URL + `/checkout-plan?${params.toString()}`,
      enableAutoSubmit: false,
      skipSignupIfLoggedIn: true,
    });

    window.location.href = checkoutUrl;
  }
  if (IFRAME_AUTH_ENABLED) {
    window.top?.postMessage({ action: 'checkout', planId: planId }, window.location.origin);
  }
}
