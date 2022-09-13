export function openAuthDialog(view: 'login' | 'signup' | 'recover'): void {
  if (view === 'login') {
    window.top?.postMessage({ action: 'openDialogLogin' }, window.location.origin);
  } else if (view === 'signup') {
    window.top?.postMessage({ action: 'openDialogSignup' }, window.location.origin);
  }
}

export function checkSession(): void {
  window.top?.postMessage({ action: 'check_session' }, window.location.origin);
}

export function login(data: Record<string, unknown>): void {
  window.top?.postMessage({ action: 'login', ...data }, window.location.origin);
}

export function signup(data: Record<string, unknown>): void {
  window.top?.postMessage({ action: 'signup', ...data }, window.location.origin);
}

export function recover(data: Record<string, unknown>): void {
  window.top?.postMessage({ action: 'recover', ...data }, window.location.origin);
}

export function toggleAuthMethod(view: 'login' | 'signup' | 'recover'): void {
  window.top?.postMessage({ action: 'toggleAuthMethod', view: view }, window.location.origin);
}

export function checkout(planId: string): void {
  window.top?.postMessage({ action: 'checkout', planId: planId }, window.location.origin);
}
