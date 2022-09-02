export function openAuthDialog(view: 'login' | 'signup' | 'recover') {
  if (view === 'login') {
    window.top?.postMessage({ action: 'openDialogLogin' }, window.location.origin);
  } else if (view === 'signup') {
    window.top?.postMessage({ action: 'openDialogSignup' }, window.location.origin);
  }
}

export function login(data) {
  window.top?.postMessage({ action: 'login', ...data }, window.location.origin);
}

export function signup(data) {
  window.top?.postMessage({ action: 'signup', ...data }, window.location.origin);
}

export function recover(data) {
  window.top?.postMessage({ action: 'recover', ...data }, window.location.origin);
}

export function toggleAuthMethod(view?: 'login' | 'signup' | 'recover') {
  window.top?.postMessage({ action: 'toggleAuthMethod', view: view }, window.location.origin);
}

export function redirect() {
  window.top?.postMessage({ action: 'redirect' }, window.location.origin);
}
