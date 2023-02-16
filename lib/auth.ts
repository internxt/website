export const IFRAME_AUTH_ENABLED = false;
export const REDIRECT_AUTH_ENABLED = true;
const AUTH_FLOW_URL = 'http://localhost:3000';

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

const getAuthFlowLoginURL = ({ redirectURL, enableAutoSubmit }: { redirectURL: string; enableAutoSubmit: boolean }) => {
  return `${AUTH_FLOW_URL}/login?redirectUrl=${encodeURIComponent(redirectURL)}${
    enableAutoSubmit ? '&autoSubmit=1' : ''
  }`;
};

const getAuthFlowCreateUserURL = ({
  redirectURL,
  enableAutoSubmit,
}: {
  redirectURL: string;
  enableAutoSubmit: boolean;
}) => {
  return `${AUTH_FLOW_URL}/new?redirectUrl=${encodeURIComponent(redirectURL)}${
    enableAutoSubmit ? '&autoSubmit=1' : ''
  }`;
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

  const cookie = `cr=${btoa(JSON.stringify(payload))};expires=${new Date(expiration).toUTCString()};domain=${
    process.env.NODE_ENV === 'development' ? 'localhost' : 'internxt.com'
  }; Path=/`;

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

export function goToLoginURL({ redirectURL }: { redirectURL: string }) {}

export function goToSignUpURL({ redirectURL }: { redirectURL: string }) {
  checkAuthFlowAvailable();
  const createUserURL = getAuthFlowCreateUserURL({ redirectURL, enableAutoSubmit: false });
  window.location.href = createUserURL;
}

export function signup(data: { email: string; password: string }, redirectURL): void {
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

    const checkoutUrl = getAuthFlowLoginURL({
      redirectURL: AUTH_FLOW_URL + `/checkout-plan?${params.toString()}`,
      enableAutoSubmit: false,
    });

    window.location.replace(checkoutUrl);
  }
  if (IFRAME_AUTH_ENABLED) {
    window.top?.postMessage({ action: 'checkout', planId: planId }, window.location.origin);
  }
}
